import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import StudentTest from '@/app/studentPage/studentTest/StudentTest';

const LayoutStudentTest: React.FC = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/images/pokeball.png" />
        <title>PokeDevolutivas</title>
      </Head>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
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
          <div className="absolute inset-0 flex items-center justify-center">
            <StudentTest />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutStudentTest;
