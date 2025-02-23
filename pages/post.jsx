import React from 'react';
import BaseForm from '../components/BaseForm';
import TelegramForm from '../components/TelegramForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const api = new (require('../controllers/api'))();

const initialData = {
  _id: "6317b4f63f8aba7474aab97c",
  adn_id: "ADN220903A",
  user_id: "6317b4f63f8aba7474aab97c",
  timestamp: "2025-02-22T18:58:47.067Z",
  event_datetime: "2025-02-22T18:58:47.067Z",
  title: "string",
  authors: "string",
  authors_list: [
    {
      _id: "6317b4f63f8aba7474aab97c",
      name: "string",
      email: "user@example.com",
      org: "string"
    }
  ],
  body: "string",
  light_curve: [
    {
      coordinates: {
        right_ascension: 359,
        declination: 90,
        error: 180
      },
      datetime: "2025-02-22T18:58:47.067Z",
      magnitude: 0,
      upper_limit: 0,
      exptime: 0,
      instrument: {
        _id: "6317b4f63f8aba7474aab97c",
        name: "string",
        observation_mode: "string",
        observatory: {
          _id: "6317b4f63f8aba7474aab97c",
          name: "string",
          org: "string",
          country: "string"
        }
      },
      filter: "string"
    }
  ],
  upper_limits: [
    {
      framae: [
        {
          right_ascension: 359,
          declination: 90
        },
        {
          right_ascension: 359,
          declination: 90
        },
        {
          right_ascension: 359,
          declination: 90
        }
      ],
      datetime: "2025-02-22T18:58:47.067Z",
      upper_limit: 0,
      exptime: 0,
      instrument: {
        _id: "6317b4f63f8aba7474aab97c",
        name: "string",
        observation_mode: "string",
        observatory: {
          _id: "6317b4f63f8aba7474aab97c",
          name: "string",
          org: "string",
          country: "string"
        }
      },
      filter: "string"
    }
  ],
  band: "string",
  categories: [
    {
      "_id": "6317b4f63f8aba7474aab97c",
      "text": "string",
      "color": "string"
    }
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
