import useSWR from 'swr';
const api = new (require('../../controllers/api'))();
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Page({ mockObject }) {
  const { data: swrData, error: swrError } = useSWR(`/v1/mock-objects/${mockObject._id}`, api.get, {fallbackData: mockObject});

  if (swrError) {
    console.error(swrError);
    return <div>SWR: Failed to load data</div>;
  }
  const data = swrData || mockObject;
  if (data.error) return <div>API: {data.error}</div>;

  return (
    <>
      <Header />
      <p>{data.name}</p>
      <Footer />
    </>
  )
}
 


// This function gets called at build time
export async function getStaticPaths() {
  const mockObjects = await api.get('/v1/mock-objects');

  try {
    const paths = mockObjects.map(mockObject => ({
      params: { id: mockObject._id.toString() }, 
    }));
    return { paths, fallback: 'blocking' };

  } catch (error) {
    console.error('getStaticPaths error: ', error.message);
    return { paths: [], fallback: 'blocking' };
  }

}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const mockObject = await api.get(`/v1/mock-objects/${params.id}`);

  // By returning { props: { mockObject } }, the Telegram component
  // will receive `mockObject` as a prop at build time
  return {
    props: {
      mockObject,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}