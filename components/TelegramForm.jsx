import React from 'react';
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import FormItem from "./FormItem";
import Alert from "./Alert";
import ArrayContainer from "./ArrayContainer";

export default function TelegramForm({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isLoading,
  generalErrors,
  getFieldErrors 
}) {
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
        label="Telegram post text"
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
        label="Band"
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
          placeholder="Use the pattern — John A. Doe, Jane B. Doe (Institution)"
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
          addButtonText="Add Reference"
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


      <button className="btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Publish'}
      </button>
      
    </form>
  );
}
