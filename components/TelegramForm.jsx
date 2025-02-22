import React from 'react';
import Input from "./Input";
import Select from "./Select";
import FormItem from "./FormItem";
import Alert from "./Alert";

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
        error={getFieldErrors('title')} >

        <Input
          type="text"
          name="title"
          placeholder="Name your telegram"
          value={formData.title}
          onChange={handleChange}
        />
      </FormItem>


      <FormItem  
        label="Telegram post text"
        error={getFieldErrors('body')} >

        <Input
          type="text"
          name="body"
          placeholder="Describe your observations"
          value={formData.body}
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
        
          
     


      <button className="btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Create'}
      </button>
      
    </form>
  );
}
