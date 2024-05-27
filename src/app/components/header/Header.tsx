import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full h-52 absolute">
      <Image
        src="/header.jpg"
        alt="header"
        layout="fill"
        objectFit="cover"
        objectPosition="0% 13%"
        priority
        className="w-full"
      />
    </header>
  );
};

export default Header;
