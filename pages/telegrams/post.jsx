import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
const api = new (require('../../controllers/api'))();
import { TelegramForm } from '../../components/TelegramForm';

export default function TelegramFormPage() {
  const [formData, setFormData] = useState({
    _id: "",
    id: "",
    user_id: "",
    timestamp: "",
    external_id: "",
    title: "",
    body: "",
    event_datetime: new Date().toISOString(),
    band: "visible",
    coordinates: {
      ra: {
        value: "",
        error: "",
        error_units: "arcsec"
      },
      dec: {
        value: "",
        error: "",
        error_units: "arcsec"
      }
    },
    light_curve: [{
      datetime: new Date().toISOString(),
      magnitude: "",
      upper_limit: "",
      exptime: "",
      filter: ""
    }],
    authors: [{
      name: "",
      email: "",
      org: ""
    }],
    observatories: [{
      name: "",
      instrument: "",
      observation_mode: ""
    }],
    categories: [""],
    references: [""],
    error: ""
  });

  function getPostData(data) {
    const { _id, id, user_id, timestamp, error, ...postData } = data;
    return postData;
  }

  const [isLoading, setIsLoading] = useState(false); // state to handle loading indicator

  const router = useRouter(); // initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // activate loading indicator
    setFormData(prev => ({ ...prev, error: '' })); // clear error state

    const dataToSend = getPostData(formData);


    try {
      const res = await api.post('/v1/telegrams', dataToSend)

      if (!res.ok) {
        let errorData;
        const contentType = res.headers.get('content-type');

        // Check if the response content type is JSON
        if (contentType && contentType.indexOf('application/json') !== -1) {
          errorData = await res.json(); // if it is JSON, then parse it
        } else {
          errorData = { error: await res.text() }; // if not, just get it as text
        }
        throw JSON.stringify(errorData) || 'Failed to submit telegram'; // throw an error to catch it later
      }

      // Assuming here successful response will be JSON
      const data = await res.json(); // consider adding checking here as well
      // Handle successful response if needed

      mutate('/api/telegram');
      router.push('/'); // redirect the user to the homepage after successful submission
    } catch (error) {
      setFormData(prev => ({ ...prev, error: error.toString() })); // set the error to show it to the user
    } finally {
      setIsLoading(false); // deactivate loading indicator regardless of the outcome
    }
  };

  const handleChange = (e, property = null, index = null, nestedProperty = null) => {
    const { name, value } = e.target;

    if (property) {
      let updatedProperty = Array.isArray(formData[property]) ? [...formData[property]] : { ...formData[property] };
      
      if (Array.isArray(formData[property])) {
        if (typeof updatedProperty[index] === 'object' && updatedProperty[index] !== null) {
            // if it's an object
            updatedProperty[index][name] = value;
        } else {
            // if it's a string
            updatedProperty[index] = value;
        }
      } else if (nestedProperty) {
        updatedProperty[nestedProperty][name] = value;
      } else {
        updatedProperty[name] = value;
      }
      setFormData(prev => ({ ...prev, [property]: updatedProperty })); 
    } else {
      setFormData(prev => ({ ...prev, [name]: value })); 
    }
  };

  return (
    <div>
      <h2>Post new telegram</h2>
      <TelegramForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading}/>
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
 
  // By returning { props: { telegrams } }, the Index component
  // will receive `telegrams` as a prop at build time
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
