import Link from 'next/link';
import LayoutLoginPage from './components/layout/layoutLoginPage/LayoutLoginPage';

export default function Home() {
  return (
    <main>
      <LayoutLoginPage />
      <Link href="/loginPage">LoginPage</Link>
    </main>
  );
}
