import Link from 'next/link';
import Profile from '../components/Profile';

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link> |
      <Link href="/signin">Sign In</Link> | 
      <Link href="/signup">Sign Up</Link> |
      <Profile />
      <hr />
    </div>
  )
}