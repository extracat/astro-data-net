const api = new (require('../../controllers/api'))();

export default function Telegram({ telegram }) {
  return (
    <>
      <h1>{telegram.title}</h1>
      <p>{telegram.body}</p>
    </>
  )
}
 


// This function gets called at build time
export async function getStaticPaths() {
  const telegrams = await api.getTelegrams();
  const paths = telegrams.map(telegram => ({
    params: { id: telegram._id.toString() }, 
  }));

  return { paths, fallback: false };
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  
  const telegram = await api.getTelegrams(params.id);
 
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