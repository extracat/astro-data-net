import React from 'react';
import Input from "./Input";
import Select from "./Select";
import FormItem from "./FormItem";
import Alert from "./Alert";


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

      <FormItem 
        label="Name"
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

      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Save'}
      </button>

    </form>
  );
}
