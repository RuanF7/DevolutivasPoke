'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const NavButtonStudent = () => {
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
            href="/studentPage/studentArea"
          >
            <button className="w-full">Area do Aluno</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/studentPage/studentCourseRegistration"
          >
            <button className="w-full">Matricular</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/studentPage/studentTest"
          >
            <button className="w-full">Provas</button>
          </Link>
          <Link
            className="mr-4 hidden sm:block"
            href="/studentPage/studentFeedback"
          >
            <button className="w-full">Devolutivas</button>
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
                href="/studentPage/studentArea"
              >
                <button className="w-full">Area do Aluno</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/studentPage/studentCourseRegistration"
              >
                <button className="w-full">Matricular</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/studentPage/studentTest"
              >
                <button className="w-full">Provas</button>
              </Link>
            </div>
            <div className="mb-16">
              <Link
                className={`mr-4 ${isOpen && !isClosed ? '' : 'hidden sm:block'}`}
                href="/studentPage/studentFeedback"
              >
                <button className="w-full">Devolutivas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavButtonStudent;
