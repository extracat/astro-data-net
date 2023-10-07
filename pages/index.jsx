const api = new (require('../controllers/api'))();
import Link from 'next/link'

export default function Index({ telegrams }) {
  return (
    <>
      <h1>Telegrams List</h1>
      <ul>
        {telegrams.map((telegram) => (
          <li key={telegram._id}>
            <Link href={`/telegrams/[id]`} as={`/telegrams/${telegram._id}`} >
              {telegram.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
 
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  
  const telegrams = await api.getTelegrams();
 
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