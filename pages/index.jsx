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
  // Call an external API endpoint to get posts
  const res = await fetch('https://astro-data-api.vercel.app/api/v1/telegrams')
  const telegrams = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      telegrams,
    },
  }
}