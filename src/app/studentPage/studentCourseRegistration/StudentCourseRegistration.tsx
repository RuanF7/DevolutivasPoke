import React from 'react';
import Image from 'next/image';

const StudentCourseRegistration: React.FC = () => {
  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4">
        <div className="flex">
          <div className="mr-4">
            <Image
              src="/aluno1.png"
              alt="Aluno Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nome do Curso"
                className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Matricular
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudentCourseRegistration;
