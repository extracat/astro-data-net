import useSWR from 'swr';
const api = new (require('../controllers/api'))();
import Link from 'next/link'

export default function TextPage() {

  return (
    <>
      <h1>Lorem Ipsum</h1>

      <blockquote>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." — Theophrastus Bombast von Hohenheim.</blockquote>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin rutrum interdum. Nullam sollicitudin eros et risus porttitor, vel viverra eros tempus. In ac sem venenatis, pellentesque massa eget, pellentesque neque. Fusce et ligula quis turpis facilisis dapibus fringilla luctus ante. Curabitur scelerisque ipsum non faucibus consequat. Donec fringilla ex fringilla felis rhoncus eleifend.</p>

<section>





</section>
      
      <h2>In augue ex dictum</h2>

      <p>Donec a diam non libero luctus accumsan nec sed mi. Aenean egestas urna sed ipsum fermentum congue. Ut tellus sollicitudin, tincidunt nisl quis, pretium sem. Morbi justo lectus, convallis vitae pulvinar eu, pretium iaculis magna. Proin volutpat lorem ac auctor tincidunt. Nunc neque magna, pretium quis dui sed, cursus sollicitudin magna.</p>

      <ul>
        <li>
          Proin quis molestie
        </li>
        <li>
          Nulla volutpat
        </li>
        <li>
          Proin quis molestie
        </li>
        <li>
          In augue ex
        </li>
        <li>
          Fusce et ligula
        </li>
        <li>
          In ac sem venenatis
        </li>

      </ul> 

      <p>Nullam lorem nibh, porttitor a malesuada eu, molestie ac mauris. Proin quis molestie nulla. Nullam finibus sit amet enim sit amet rhoncus. Nam faucibus pharetra suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. In augue ex, dictum dignissim nulla in, eleifend bibendum dolor. Nulla volutpat, elit nec porta semper, massa nunc facilisis dui, ac mollis nunc lectus lobortis tortor. Donec maximus libero et bibendum posuere. Integer at velit mi.</p>



    </>
  )
}
 
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  
 
 
  // By returning { props: { telegrams } }, the Index component
  // will receive `telegrams` as a prop at build time
  return {
    props: {

    },
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}