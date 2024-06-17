import Link from 'next/link';
import LayoutLogin from './components/layout/layoutLogin/LayoutLogin';

export default function Home() {
  return (
    <main>
      <LayoutLogin />
      <Link href="/loginPage/login">LoginPage</Link>
    </main>
  );
}
