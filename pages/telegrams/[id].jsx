import useSWR from 'swr';
const api = new (require('../../controllers/api'))();
import { Telegram } from '../../components/Telegram';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function Page({ telegram }) {
  const { data: swrData, error: swrError } = useSWR(`/v1/telegrams/${telegram.adn_id}`, api.get, {fallbackData: telegram});

  if (swrError) {
    console.error(swrError);
    return <div>SWR: Failed to load data</div>;
  }
  const data = swrData || telegram;
  if (data.error) return <div>API: {data.error}</div>;

  return (
    <>
      <Header />
      <Telegram data={data}/>
      <Footer />
    </>
  )
}
 


// This function gets called at build time
export async function getStaticPaths() {
  const telegrams = await api.get('/v1/telegrams');

  try {
    const paths = telegrams.map(telegram => ({
      params: { id: telegram.adn_id.toString() }, 
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