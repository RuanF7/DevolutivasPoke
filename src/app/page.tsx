import Link from 'next/link';
import Layout from './components/layout/Layout';

export default function Home() {
  return (
    <main>
      <Layout />
      <Link href="/loginPage">LoginPage</Link>
    </main>
  );
}
