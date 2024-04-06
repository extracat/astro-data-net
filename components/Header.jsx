import Link from 'next/link';
import Profile from '../components/Profile';
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex flex-row items-center flex-wrap justify-center gap-x-8 gap-y-2 mb-12">
      <div><Link href="/" title="Home page"><Logo /></Link></div>
      <div>
        <Link className="btn-primary no-underline"
          href="/signin">Sign in</Link>
      </div>
      <div><Profile /></div>
    </div>
  )
}