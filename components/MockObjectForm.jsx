import React from 'react';
import Input from "./Input";
import Select from "./Select";
import FormItem from "./FormItem";
import Alert from "./Alert";
import DragNDrop from "./DragNDrop";
import Button from "./Button";


// Initial items for the DragNDrop component
const initialItems = [
  { id: '1', text: 'First Item' },
  { id: '2', text: 'Second Item' },
  { id: '3', text: 'Third Item' },
];


export default function MockObjectForm ({ formData, handleChange, handleSubmit, isLoading, generalErrors, getFieldErrors }) {

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


      <DragNDrop initialItems={initialItems} />

      <FormItem 
        label="Name"
        id="name"
        error={getFieldErrors('name')} >

        <Input
          type="text"
          name="name"
          placeholder="Enter some text"
          value={formData.name}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem 
        label="Band"
        id="band"
        error={getFieldErrors('band')} >

        <Select
          name="band"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          placeholder="Select an option"
          value={formData.band}
          onChange={handleChange}
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
            Save
          </Button>
        </div>
          
      </div>

    </form>
  );
}
