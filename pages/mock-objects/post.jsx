import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
const api = new (require('../../controllers/api'))();
import MockObjectForm from '../../components/MockObjectForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MockObjectFormPage() {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    band: ""
  });

  function getPostData(data) {
    const { _id, adn_id, user_id, timestamp, error, ...postData } = data;
    return postData;
  }

  const [formErrors, setFormErrors] = useState([]); // state to handle field errors
  const [generalErrors, setGeneralErrors] = useState(''); // state to handle general form errors
  const [isLoading, setIsLoading] = useState(false); // state to handle loading indicator

  const router = useRouter(); // initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // activate loading indicator
    setFormErrors([]); // clear field errors
    setGeneralErrors([]); // clear general form errors

    const dataToSend = getPostData(formData);

    try {
      const res = await api.post('/v1/mock-objects', dataToSend)

      if (!res.ok) {
        let errorData;
        const contentType = res.headers.get('content-type');

        // Check if the response content type is JSON
        if (contentType && contentType.indexOf('application/json') !== -1) {
          errorData = await res.json(); // if it is JSON, then parse it
        } else {
          errorData = { error: await res.text() }; // if not, just get it as text
        }

        if (Array.isArray(errorData.errors)) {
          const fieldErrors = errorData.errors.filter(err => err.location === 'body' && Object.keys(formData).includes(err.path));

          const generalErrorMessages = errorData.errors.filter(err => err.location === 'body' && !Object.keys(formData).includes(err.path));
          
          setFormErrors(fieldErrors);
          setGeneralErrors(generalErrorMessages);

        } else {
          setGeneralErrors([errorData]);
        }
        throw JSON.stringify(errorData) || 'Failed to submit'; // throw an error to catch it later
      }


      // Assuming here successful response will be JSON
      // const data = await res.json(); // consider adding checking here as well
      // Handle successful response if needed

      mutate('/api/mock-objects');
      router.push('/mock-objects'); // redirect the user to the homepage after successful submission
    } catch (error) {
      console.error('POST error:', error);
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

  const getFieldErrors = (fieldName) => {
    return formErrors.filter(error => error.path === fieldName).map(error => error.msg);
  };

  return (
    <>
      <Header />
      <MockObjectForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isLoading={isLoading}
        generalErrors={generalErrors}
        getFieldErrors={getFieldErrors}
      />
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
