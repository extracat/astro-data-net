const api = new (require('../controllers/api'))();
import React, { useState } from 'react';
import BaseForm from '../components/BaseForm';
import SignupForm from '../components/SignupForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Modifying form data before sending it to the API
function getPostData(data) { 
  const {confirmPassword, isAgreed, ...postData } = data;
  return postData;
}

const initialData = {
  email: "",
  password: "",
  confirmPassword: "",
  isAgreed: false
};

const validateForm = (formData) => {
  const fieldErrors = [];
  const generalErrors = [];

  // Password-specific validations
  if (formData.password !== formData.confirmPassword) {
    fieldErrors.push({ 
      path: 'confirmPassword',
      msg: 'Passwords do not match'
    });
  }

  // General form validations
  if (!formData.isAgreed) {
    generalErrors.push({ 
      error: 'You must agree to the terms and conditions'
    });
  }

  return {
    fieldErrors: fieldErrors.length > 0 ? fieldErrors : null,
    generalErrors: generalErrors.length > 0 ? generalErrors : null
  };
};

export default function SignupFormPage() {
  const handleAuthSuccess = (data) => {
    if (data.token) {
      document.cookie = `token=${data.token}; path=/; max-age=86400;`;
      console.log('User logged in and token saved in cookies');
    }
  };

  return (
    <div>
      <Header />

      <h1>Sign Up</h1>
      <Link href="/signin">Sign in</Link>
      
      <BaseForm
        api={api}
        endpoint="/v1/signup"
        initialData={initialData}
        redirectPath="/"
        mutateEndpoint="/v1/signup"
        getPostData={getPostData}
        onSuccess={handleAuthSuccess}
        validateForm={validateForm}
      >
        {(formProps) => <SignupForm {...formProps} />}
      </BaseForm>


      <Footer />
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
 

  return {
    props: {
      initialData: {},
    },
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
