import React from 'react';

export default function SignupForm({ formData, handleChange, handleSubmit, isLoading }) {

  const handleCheckboxChange = (event) => {
    handleChange({ target: { name: 'isAgreed', value: event.target.checked } });
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Email:
          </span>
        </label>
        <input 
          className="input"
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
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Confirm Password:
          </span>
        </label>
        <input 
          className="input"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </div>

      <div className="form-control my-2">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            name="isAgreed"
            checked={formData.isAgreed || false}
            onChange={handleCheckboxChange}
            className="checkbox checkbox-primary mr-2"
          />
          <span className="label-text">
            I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </span>
        </label>
      </div>

      <button className="btn-primary" type="submit" disabled={isLoading || !formData.isAgreed}>
        {isLoading ? 'Loading...' : 'Signup'}
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
