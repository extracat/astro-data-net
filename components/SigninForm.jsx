import React from 'react';
import Input from "./Input";
import FormItem from "./FormItem";
import Alert from "./Alert";

export default function SigninForm ({ formData, handleChange, handleSubmit, isLoading, generalErrors, getFieldErrors }) {


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
        label="Email"
        error={getFieldErrors('email')} >

        <Input
          type="email"
          name="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem 
        label="Password"
        error={getFieldErrors('password')} >

        <Input
          type="password"
          name="password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
        />
      </FormItem>

      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signin'}
      </button>
      
    </form>
  );
}
