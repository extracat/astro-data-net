const api = new (require('../controllers/api'))();
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SignupForm from '../components/SignupForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SigninFormPage() {

  const [isLoading, setIsLoading] = useState(false); // state to handle loading indicator
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    isAgreed: false
  });


  function getPostData(data) {
    const { error, confirmPassword, isAgreed, ...postData } = data;
    return postData;
  }

  const router = useRouter(); // initialize router

  const validateFormData = () => {
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // activate loading indicator
    setFormData(prev => ({ ...prev, error: '' })); // clear error state

    const validationError = validateFormData();
    if (validationError) {
      setFormData(prev => ({ ...prev, error: validationError }));
      setIsLoading(false);
      return;
    }

    const dataToSend = getPostData(formData);

    console.log(dataToSend);

    try {
      const res = await api.post('/v1/signup', dataToSend)

      if (!res.ok) {
        let errorData;
        const contentType = res.headers.get('content-type');

        // Check if the response content type is JSON
        if (contentType && contentType.indexOf('application/json') !== -1) {
          errorData = await res.json(); // if it is JSON, then parse it
        } else {
          errorData = { error: await res.text() }; // if not, just get it as text
        }
        throw JSON.stringify(errorData) || 'Failed to signup'; // throw an error to catch it later
      }

      // Assuming here successful response will be JSON
      //const data = await res.json(); // consider adding checking here as well
      // Handle successful response if needed

      const data = await res.json();


      document.cookie = `token=${data.token}; path=/; max-age=86400;`;
      //document.cookie = `token=${data.token}; path=/;`;

      console.log('User logged in and token saved in cookies');
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
      <Header />
      <h1>Sign Up</h1>
      <SignupForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading}/>
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
