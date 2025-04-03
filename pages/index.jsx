import useSWR from 'swr';
const api = new (require('../controllers/api'))();
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index({ telegrams }) {
  const { data: swrData, error: swrError } = useSWR(`/v1/telegrams`, api.get, {fallbackData: telegrams});

  if (swrError) {
    console.error(swrError);
    return <div>SWR: Failed to load data</div>;
  }

  const data = swrData || telegrams;
  if (data.error) return <div>API: {data.error}</div>;


  return (
    <>
      <Header />
      <h2 className="text-center my-2">Astro Data Network</h2>

      <div className="text-[44px] sm:text-[51px] md:text-[63px] font-black leading-[3.2rem] sm:leading-[4rem] md:leading-[5rem] p-0 mt-7 mb-12 sm:mb-12 md:mb-16 text-center">Automate and share space observations</div>

      <center><Link className="btn-primary" href="/post">Post new telegram</Link></center>
      <h2>Telegrams list</h2>
      <ul>
        {data.map((telegram) => (
          <li key={telegram.adn_id}>
            <Link href={`/[id]`} as={`/${telegram.adn_id}`} >
              {telegram.title}
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
  
  const telegrams = await api.get('/v1/telegrams');
 
  // By returning { props: { telegrams } }, the Index component
  // will receive `telegrams` as a prop at build time
  return {
    props: {
      telegrams,
    },
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}