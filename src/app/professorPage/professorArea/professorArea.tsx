'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProfessorArea = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4">
        <div className="flex">
          <div className="mr-4">
            <Image
              src="/professor1.png"
              alt="Professor Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={() =>
                handleNavigation('/professorPage/professorBackpack')
              }
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Adicionar Pokémon
            </button>
            <button
              onClick={() =>
                handleNavigation('/professorPage/professorCreateTest')
              }
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Criar Prova
            </button>
            <button
              onClick={() =>
                handleNavigation('/professorPage/professorCorrectTest')
              }
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Corrigir Prova
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProfessorArea;
