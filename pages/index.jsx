const api = new (require('../controllers/api'))();


// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Index({ telegrams }) {
  return (
    <ul>
      {telegrams.map((telegram) => (
        <li key={telegram._id}>{telegram.title}</li>
      ))}
    </ul>
  )
}
 
// This function gets called at build time
export async function getStaticProps() {
  
  const telegrams = await api.getTelegrams();
 
  // By returning { props: { telegrams } }, the Index component
  // will receive `telegrams` as a prop at build time
  return {
    props: {
      telegrams,
    },
  }
}