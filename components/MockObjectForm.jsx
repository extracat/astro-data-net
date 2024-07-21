import React, { useState } from 'react';

export default function MockObjectForm ({ formData, handleChange, handleSubmit, isLoading, generalErrors, getFieldErrors }) {

  //console.log(formData);

  return (
    <form onSubmit={handleSubmit}>

      {generalErrors.length > 0 && (
        <div className="alert alert-danger">
          {generalErrors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

      <div className="form-control my-2">
        <label htmlFor="name" className="label">
          <span className="label-text">
            Name
          </span>
        </label>
        <input className="input w-full max-w-xs" type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        {getFieldErrors('name').map((error, index) => (
          <div key={index} className="error-message">{error}</div>
        ))}
      </div>

      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Save'}
      </button>


    </form>
  );
}
