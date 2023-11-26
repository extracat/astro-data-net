import React from 'react';

export function SignupForm({ formData, handleChange, handleSubmit, isLoading }) {

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

      <div className="form-control my-2">
        <label className="label">
          <span className="label-text">
            Confirm Password:
          </span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </div>

      <button className="btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signup'}
      </button>

      {/* display error */}
      {formData.error && <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 my-5 p-4">
        <strong className="block font-medium text-red-600"> Something went wrong </strong>
        <p className="mt-2 text-sm text-red-600">
          {formData.error}
        </p>
      </div>} 

    </form>
  );
}
