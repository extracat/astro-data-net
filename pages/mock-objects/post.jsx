const api = new (require('../../controllers/api'))();
import React from 'react';
import BaseForm from '../../components/BaseForm';
import MockObjectForm from '../../components/MockObjectForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function getPostData(data) {
  const { _id, adn_id, user_id, timestamp, ...postData } = data;
  return postData;
}

const initialData = {
  _id: "",
  name: "",
  band: ""
};

export default function MockObjectFormPage() {
  return (
    <>
      <Header />
      <BaseForm
        api={api}
        endpoint="/v1/mock-objects"
        initialData={initialData}
        redirectPath="/mock-objects"
        mutateEndpoint="/v1/mock-objects"
        getPostData={getPostData}
      >
        {(formProps) => <MockObjectForm {...formProps} />}
      </BaseForm>
      <Footer />
    </>
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
