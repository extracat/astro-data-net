import Link from 'next/link';
import CookieConsent from './CookieConsent';

export default function Footer() {
  return (
    <div>
      <div>
        <hr />
        <Link href="/privacy-policy">Privacy policy</Link>
        {process.env.NEXT_PUBLIC_DEPLOYMENT === 'development' && (
          <>
            {' | '}
            <Link href="/mock-objects">Mock objects</Link>
          </>
        )}
      </div>
      <CookieConsent />
    </div>
  )
}