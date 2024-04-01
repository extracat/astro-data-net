import Link from 'next/link';
import Profile from '../components/Profile';
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex flex-row items-center flex-wrap justify-center gap-x-8 gap-y-2 mb-12">
      <div><Link href="/" title="Home page"><Logo /></Link></div>
      <div><Link href="/signin">Sign In</Link></div>
      <div><Link href="/signup">Sign Up</Link></div>
      <div><Profile /></div>
    </div>
  )
}