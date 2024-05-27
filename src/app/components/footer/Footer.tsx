import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-52 relative">
      <Image
        src="/footer.jpg"
        alt="footer"
        layout="fill"
        objectFit="cover"
        objectPosition="right top"
        priority
        className="w-full"
      />
    </footer>
  );
};

export default Footer;
