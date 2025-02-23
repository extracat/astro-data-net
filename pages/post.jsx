import React from 'react';
import BaseForm from '../components/BaseForm';
import TelegramForm from '../components/TelegramForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const api = new (require('../controllers/api'))();

const initialData = {
  authors_list: [
    {}
  ],
  light_curve: [
    {}
  ],
  upper_limits: [
    {}
  ],
  band: "optical",
  references: [
    ""
  ]
};

// Modifying form data before sending it to the API
function getPostData(data) {
  const { _id, adn_id, user_id, timestamp, ...postData } = data;
  return postData;
}

export default function TelegramFormPage() {
  return (
    <>
      <Header />
      <h1>Post new telegram</h1>
      <BaseForm
        api={api}
        endpoint="/v1/telegrams"
        initialData={initialData}
        redirectPath="/"
        mutateEndpoint="/v1/telegrams"
        getPostData={getPostData}
      >
        {(formProps) => <TelegramForm {...formProps} />}
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
