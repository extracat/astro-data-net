import useSWR from 'swr';
const api = new (require('../../controllers/api'))();
import Link from 'next/link'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Index({ mockObjects }) {
  const { data: swrData, error: swrError } = useSWR(`/v1/mock-objects`, api.get, {fallbackData: mockObjects});

  if (swrError) {
    console.error(swrError);
    return <div>SWR: Failed to load data</div>;
  }

  const data = swrData || mockObjects;
  if (data.error) return <div>API: {data.error}</div>;


  return (
    <>
      <Header />
      
      <Link className="btn-primary" href="mock-objects/post">Create</Link>

      <ul>
        {data.map((mockObject) => (
          <li key={mockObject._id}>
            <Link href={`mock-objects/[id]`} as={`mock-objects/${mockObject._id}`} >
              {mockObject.name}
            </Link>
          </li>
        ))}
      </ul>   
      <Footer />
    </>
  )
}
 
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  
  const mockObjects = await api.get('/v1/mock-objects');
 
  // By returning { props: { mockObjects } }, the Index component
  // will receive `mockObjects` as a prop at build time
  return {
    props: {
      mockObjects,
    },
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}