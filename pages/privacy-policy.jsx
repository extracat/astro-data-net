import useSWR from 'swr';
const api = new (require('../controllers/api'))();
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TextPage() {

  return (
    <>
      <Header />

      <h1 id="privacy-policy-and-personal-data-processing-adn-astro-data-network">Privacy Policy and Personal Data Processing ADN (Astro Data Network)</h1>
      <h2 id="1-introduction">1. Introduction</h2>
      <p>1.1. This Privacy Policy sets out how Astro Data Network (hereinafter "ADN") collects, uses, stores, and protects the information you provide when using our service.</p>
      <h2 id="2-collection-and-use-of-personal-data">2. Collection and Use of Personal Data</h2>
      <p>2.1. When registering on ADN, we ask you to provide certain personal data, including but not limited to your name and email address. These data are used to confirm your authorship of astronomical observations and to ensure the possibility of communication with you.</p>
      <p>2.2 We also collect data about your activity on the site to improve the quality of the services provided.</p>
      <h2 id="3-messages-and-notifications">3. Messages and Notifications</h2>
      <p>3.1. By registering with ADN, you agree to receive messages and notifications from us. This may include, but is not limited to, notifications about new features, updates, promotional activities, and informational newsletters.</p>
      <p>3.2. We may also send you notifications related to your activity on the site, for example, notifications of new comments or updates in your astronomical observations.</p>
      <p>3.3. You can opt out of receiving promotional and informational messages at any time by following the unsubscribe instructions provided in each such message.</p>
      <h2 id="4-disclosure-of-data-to-third-parties">4. Disclosure of Data to Third Parties</h2>
      <p>4.1. All astronomical data you publish on ADN may be disclosed to third parties and integrated with other services through our open API. We do not disclose your personal information to third parties without your explicit consent, except as required by law.</p>
      <h2 id="5-data-protection-and-storage">5. Data Protection and Storage</h2>
      <p>5.1. ADN employs various security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
      <p>5.2. Your personal data are stored on secure servers and are accessible only to authorized ADN staff.</p>
      <h2 id="6-account-deletion-and-data-anonymization">6. Account Deletion and Data Anonymization</h2>
      <p>6.1. You have the right to request the deletion of your account at any time. In doing so, your personal data will be removed from our system.</p>
      <p>6.2. The astronomical data you have published will be retained but anonymized unless you explicitly request their deletion. This means that all personal information associated with these data will be removed, and the data will become anonymous.</p>
      <h2 id="7-changes-to-the-privacy-policy">7. Changes to the Privacy Policy</h2>
      <p>7.1. ADN reserves the right to make changes to this Privacy Policy. We recommend that you regularly review this policy.</p>
      <h2 id="8-contact-information">8. Contact Information</h2>
      <p>8.1. If you have any questions or suggestions regarding our Privacy Policy, please contact us at [email address].</p>

      <Footer/>
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