import React from 'react';

export default function SigninForm ({ formData, handleChange, handleSubmit, isLoading, generalErrors, getFieldErrors }) {


  return (
    <form onSubmit={handleSubmit}>

      {generalErrors?.length > 0 && (
        <div>
          {generalErrors.map((error, index) => (
            <Alert key={index} type="danger" message={`${error.code ? error.code + ': ' : '' }${error.message ? error.message : ''}${error.msg ? error.msg : ''}`} />
          ))}
        </div>
      )}

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Email:
          </span>
        </label>
        <input className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div> 

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Password:
          </span>
        </label>
        <input className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div> 

      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signin'}
      </button>

      {/* display error */}
      {formData.error && <div role="alert" className="rounded-sm border-s-4 border-red-500 bg-red-50 my-5 p-4">
        <strong className="block font-medium text-red-600"> Something went wrong </strong>
        <p className="mt-2 text-sm text-red-600">
          {formData.error}
        </p>
      </div>} 
      
    </form>
  );
}
