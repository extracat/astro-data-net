const api = new (require('../controllers/api'))();
import React, { useState } from 'react';
import BaseForm from '../components/BaseForm';
import SigninForm from '../components/SigninForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';


function getPostData(data) {
  const { _id, adn_id, user_id, timestamp, ...postData } = data;
  return postData;
}

const initialData = {
  email: "",
  password: ""
};

export default function SigninFormPage() {
  const handleAuthSuccess = (data) => {
    if (data.token) {
      document.cookie = `token=${data.token}; path=/; max-age=86400;`;
      console.log('User logged in and token saved in cookies');
    }
  };

  return (
    <div>
      <Header />
      <h1>Sign In</h1>
      <Link href="/signup">Sign up</Link>

      <BaseForm
        api={api}
        endpoint="/v1/auth"
        initialData={initialData}
        redirectPath="/"
        mutateEndpoint="/v1/auth"
        getPostData={getPostData}
        onSuccess={handleAuthSuccess}
      >
        {(formProps) => <SigninForm {...formProps} />}
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
