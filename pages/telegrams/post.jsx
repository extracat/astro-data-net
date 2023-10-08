import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
const api = new (require('../../controllers/api'))();

export default function TelegramForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(''); // new state to handle errors
  const [isLoading, setIsLoading] = useState(false); // state to handle loading indicator

  const router = useRouter(); // initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // activate loading indicator
    setError(''); // clear error state

    try {
      const res = await api.post('/v1/telegrams', { title, body })

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

      setTitle('');
      setBody('');

      mutate('/api/telegram');
      router.push('/'); // redirect the user to the homepage after successful submission
    } catch (error) {
      setError(error.toString()); // set the error to show it to the user
    } finally {
      setIsLoading(false); // deactivate loading indicator regardless of the outcome
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body: </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* display error */}
    </form>
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
