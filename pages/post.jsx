import React from 'react';
import BaseForm from '../components/BaseForm';
import TelegramForm from '../components/TelegramForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const api = new (require('../controllers/api'))();

const initialData = {
  title: "",
  body: "",
  band: "",
  authors: "",
  authors_list: [
    {}
  ],
  light_curve: [
    {
      coordinates: {
        right_ascension: null,
        declination: null,
        error: null
      },
      datetime: null,
      magnitude: null,
      upper_limit: null,
      exptime: null,
      instrument: {
        _id: null,
        name: "",
        observation_mode: "",
        observatory: {
          _id: null,
          name: "",
          org: "",
          country: ""
        }
      },
      filter: ""
    }
  ],
  upper_limits: [
    {}
  ],
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
      <h1 className="mt-16 sm:mt-32">New telegram</h1>
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
