import React from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import FormItem from "./FormItem";
import Alert from "./Alert";
import ArrayContainer from "./ArrayContainer";
import Button from "./Button";
import Collapse from "./Collapse";
import LightCurveSubform from './LightCurveSubform';
import Date from './Date';

export default function TelegramForm({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isLoading,
  generalErrors,
  getFieldErrors 
}) {

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>

      {generalErrors?.length > 0 && (
        <div>
          {generalErrors.map((error, index) => (
            <Alert key={index} type="danger" message={`${error.code ? error.code + ': ' : '' }${error.error ? error.error : ''}${error.message ? error.message : ''}${error.msg ? error.msg : ''}`} />
          ))}
        </div>
      )}

      <FormItem  
        label="Title"
        id="title"
        error={getFieldErrors('title')} >

        <Textarea
          name="title"
          placeholder="Name your telegram"
          value={formData.title}
          onChange={handleChange}
          rows={2}
        />
      </FormItem>


      <FormItem  
        label="Telegram text"
        id="body"
        error={getFieldErrors('body')} >

        <Textarea
          name="body"
          placeholder="Describe your observations"
          value={formData.body}
          onChange={handleChange}
          rows={12}
        />
      </FormItem>


      <FormItem 
        label="Wavelength band"
        id="band"
        error={getFieldErrors('band')} >

        <Select
          name="band"
          options={[
            { value: 'optical', label: 'Optical' },
            { value: 'gamma', label: 'Gamma' },
            { value: 'x-ray', label: 'X-Ray' },
            { value: 'uv', label: 'UV' },
            { value: 'ir', label: 'IR' },
            { value: 'radio', label: 'Radio' },
          ]}
          placeholder="Select the band"
          value={formData.band}
          onChange={handleChange}
        />
      </FormItem>

      <div>
        <h3>Light Curve</h3>
        <ArrayContainer
          name="light_curve"
          value={formData.light_curve}
          onChange={handleChange}
          defaultItem={{
            coordinates: {
              right_ascension: null,
              declination: null,
              error: null
            },
            datetime: null,
            magnitude: null,
            upper_limit: null,
            exptime: null,
            instrument: {
              _id: null,
              name: "",
              observation_mode: "",
              observatory: {
                _id: null,
                name: "",
                org: "",
                country: ""
              }
            },
            filter: ""
          }}
          draggable={true}
          addButtonText="Add observation"
          renderItem={(item, index, onChange) => (
            <Collapse 
              header={
                <div className="">
                  {item.datetime || item.magnitude ? (
                    <div className="flex justify-between gap-4 font-semibold">
                      <span><Date value={item.datetime} t0={formData.light_curve[0].datetime}  format={`${index == 0 ? 'DT' : 'T'}`} /></span>
                      <span>{item.magnitude ? (<>{item.magnitude}<sup>m</sup></>) : 'N/A'}</span>
                    </div>
                  ) : (
                    <span className="text-adn-color-text-placeholder">New observation</span>
                  )}
                </div>
              }
              defaultOpen={true}
            >
              <LightCurveSubform 
                item={item}
                index={index}
                onChange={onChange}
                getFieldErrors={getFieldErrors}
              />
            </Collapse>
          )}
        />
      </div>


      <FormItem  
        label="Tags"
        id="tags"
        error={getFieldErrors('categories')} >

        <div/>
      </FormItem>

      <FormItem  
        label="List of authors"
        id="authors"
        error={getFieldErrors('authors')} >

        <Textarea
          name="authors"
          placeholder="Use the pattern: John A. Doe, Jane B. Doe (Institution), etc."
          value={formData.authors}
          onChange={handleChange}
          rows={4}
        />
      </FormItem>
      
      <FormItem  
        label="References"
        id="references"
        error={getFieldErrors('references')} >

        <ArrayContainer
          name="references"
          value={formData.references}
          onChange={handleChange}
          defaultItem=""
          draggable={true}
          addButtonText="Add reference"
          renderItem={(reference, index, onChange) => (
            <Input
              name={`reference-${index}`}
              placeholder="DOI, ADN, GCN, ATel, TNS, etc."
              value={reference}
              onChange={(e) => onChange(index, e.target.value)}
            />
          )}
        />
      </FormItem>


      <div className="flex justify-between mt-8">
        
        <Button
          variant="blank"
          disabled={isLoading}
          loading={isLoading}
        >
          Preview
        </Button>

        <div className="flex gap-5">
          <Button
            disabled={isLoading}
            loading={isLoading}
          >
            Save draft
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            loading={isLoading}
          >
            Publish
          </Button>
        </div>
          
      </div>
            
    </form>
  );
}
