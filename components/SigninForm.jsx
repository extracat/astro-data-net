import React from 'react';

export function SigninForm ({ formData, handleChange, handleSubmit, isLoading }) {


  return (
    <form onSubmit={handleSubmit}>

      <label
        htmlFor="email"
        className="my-5 relative block rounded-lg border border-gray-300  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          className="peer py-3 px-4 border-none bg-transparent w-full placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
        >
          Email
        </span>
      </label>

      <label
        htmlFor="password"
        className="my-5 relative block rounded-lg border border-gray-300  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          className="peer w-full py-3 px-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <span
          className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
        >
          Password
        </span>
      </label>



      
      <button className="btn-primary"
        type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signin'}
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
