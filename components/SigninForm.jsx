import React from 'react';

export function SigninForm ({ formData, handleChange, handleSubmit, isLoading }) {


  //console.log(formData);

  return (
    <form onSubmit={handleSubmit}>


      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Email:
          </span>
        </label>
        <input
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
        <input
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
      {formData.error && <div className="alert alert-error my-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{formData.error}</span>
      </div>} 
      
    </form>
  );
}
