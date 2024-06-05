import React from 'react';
import Image from 'next/image';

interface StudentTestQuestionRendererProps {
  currentQuestion: number;
}

const StudentTestQuestionRenderer: React.FC<
  StudentTestQuestionRendererProps
> = ({ currentQuestion }) => {
  switch (currentQuestion) {
    case 1:
      return (
        <>
          <div className="justify-center flex">
            <Image
              src="/charmanderTeste.png"
              alt="Pokémon Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder="Nome"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Golpe"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </>
      );
    case 2:
      return (
        <>
          <div className="justify-center flex">
            <Image
              src="/charmeleonTeste.png"
              alt="Pokémon Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder="Nome"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Golpe"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </>
      );
      break;
    case 3:
      return (
        <>
          <div className="justify-center flex">
            <Image
              src="/charizardTeste.png"
              alt="Pokémon Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <input
            type="text"
            placeholder="Nome"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Golpe"
            className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </>
      );
      break;
    default:
      return null;
  }
};

export default StudentTestQuestionRenderer;
