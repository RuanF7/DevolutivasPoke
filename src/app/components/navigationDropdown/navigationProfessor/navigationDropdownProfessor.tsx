'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const NavButtonProfessor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    console.log('Menu aberto:', !isClosed);
    setIsOpen(!isOpen);
    setIsClosed(false);
  };

  const handleCloseClick = () => {
    console.log('Menu fechado:', !isClosed);
    setIsClosed(!isClosed);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="absolute  top-6 right-4 flex items-center">
          <Link
            className="mr-4 hidden sm:block"
            href="/professorPage/professorArea"
          >
            <button className="w-full">Area do Professor</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/professorPage/professorBackpack"
          >
            <button className="w-full">Cadastrar Pokemon</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/professorPage/professorCreateTest"
          >
            <button className="w-full">Criar Prova</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/professorPage/professorCorrectTest"
          >
            <button className="w-full">Corrigir Prova</button>
          </Link>
          <button onClick={handleClick} className="md:hidden">
            <DehazeIcon />
          </button>
        </div>
        <div
          className={`bg-gray-900 w-screen h-screen fixed top-0 right-0 z-20 overflow-y-auto flex flex-col ${isOpen && !isClosed ? 'flex' : 'hidden'}`}
        >
          <div className="flex justify-end">
            <button onClick={handleCloseClick} className="mt-2 mr-2">
              <CloseIcon />
            </button>
          </div>
          <div className="flex-col center">
            <div className="mb-16 mt-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/professorPage/professorArea"
              >
                <button className="w-full">Area do Professor</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/professorPage/professorBackpack"
              >
                <button className="w-full">Cadastrar Pokemon</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/professorPage/professorCreateTest"
              >
                <button className="w-full">Criar Prova</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/professorPage/professorCorrectTest"
              >
                <button className="w-full">Corrigir Prova</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavButtonProfessor;
