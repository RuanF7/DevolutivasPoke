import Image from 'next/image';
const BackgroundImage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-y-scroll">
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
  );
};

export default BackgroundImage;
