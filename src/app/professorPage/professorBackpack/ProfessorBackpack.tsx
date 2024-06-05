import React from 'react';
import Image from 'next/image';

const ProfessorBackpack = () => {
  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4 flex">
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
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col w-full mb-4">
            <input
              type="text"
              placeholder="Add Pokemon"
              className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            Enviar
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ProfessorBackpack;
