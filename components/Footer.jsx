import Link from 'next/link';
import CookieConsent from './CookieConsent';

export default function Footer() {
  return (
    <div>
      <div>
        <hr />
        <Link href="/privacy-policy">Privacy Policy</Link>
         | 
        <Link href="/mock-objects">Mock Objects</Link>
      </div>
      <CookieConsent />
    </div>
  )
}