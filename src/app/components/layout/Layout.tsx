import Image from 'next/image';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Head from 'next/head';

const Layout = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/pokeball.png" />
        <title>PokeDevolutivas</title>
      </Head>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <Image
          src="/pokedex.jpg"
          alt="Background Image"
          width={400}
          height={400}
          objectFit="cover"
          objectPosition="top right"
          priority
          className="z-0"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
