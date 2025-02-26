import React from 'react';
import Input from "./Input";
import FormItem from "./FormItem";
import Alert from "./Alert";

export default function SignupForm({ formData, handleChange, handleSubmit, isLoading, generalErrors, getFieldErrors }) {

  const handleCheckboxChange = (event) => {
    handleChange({ target: { name: 'isAgreed', value: event.target.checked } });
  }

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
        id="email"
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
        id="password"
        error={getFieldErrors('password')} >

        <Input
          type="password"
          name="password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem 
        label="Confirm Password"
        id="confirmPassword"
        error={getFieldErrors('confirmPassword')} >

        <Input
          type="password"
          name="confirmPassword"
          placeholder=""
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </FormItem>

      <div className="mb-4">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            name="isAgreed"
            checked={formData.isAgreed || false}
            onChange={handleCheckboxChange}
            className="checkbox checkbox-primary mr-2"
          />
          <span className="label-text">
            I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">terms and conditions</a>.
          </span>
        </label>
      </div>

      <button className="btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signup'}
      </button>

    </form>
  );
}
