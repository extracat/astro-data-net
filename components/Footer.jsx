import Link from 'next/link';
import CookieConsent from './CookieConsent';

export default function Footer() {
  return (
    <div>
      <hr />
      <Link href="/privacy-policy">Privacy Policy</Link>
      <CookieConsent />
    </div>
  )
}