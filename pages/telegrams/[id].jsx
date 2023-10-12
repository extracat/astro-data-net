import useSWR from 'swr';
const api = new (require('../../controllers/api'))();
import { Telegram } from '../../components/Telegram';

export default function Page({ telegram }) {
  const { data: swrData, error: swrError } = useSWR(`/v1/telegrams/${telegram._id}`, api.get, {fallbackData: telegram});

  if (swrError) {
    console.error(swrError);
    return <div>SWR: Failed to load data</div>;
  }
  const data = swrData || telegram;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  )
}
 


// This function gets called at build time
export async function getStaticPaths() {
  const telegrams = await api.get('/v1/telegrams');
  const paths = telegrams.map(telegram => ({
    params: { id: telegram._id.toString() }, 
  }));

  return { paths, fallback: 'blocking' };
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  
  const telegram = await api.get(`/v1/telegrams/${params.id}`);
 
  // By returning { props: { telegram } }, the Telegram component
  // will receive `telegram` as a prop at build time
  return {
    props: {
      telegram,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}