'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const StudentCourseRegistration: React.FC = () => {
  const alunoIdFromStorage = localStorage.getItem('userId');
  const [cursoNome, setCursoNome] = useState('');
  const [alunoId, setAlunoId] = useState<number | null>(
    alunoIdFromStorage ? parseInt(alunoIdFromStorage) : null
  );

  const handleCursoNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCursoNome(e.target.value);
  };

  const handleMatricularClick = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      console.error('Token não encontrado. Faça o login primeiro.');
      return;
    }
    console.log('Dados da requisição:', { alunoId, cursoNome });
    try {
      const response = await fetch(
        'http://localhost:3000/api/aluno/matricular',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            alunoId,
            cursoNome
          })
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log('Aluno matriculado com sucesso', result);
      } else {
        console.error('Erro ao matricular aluno:', result.error);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

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
                value={cursoNome}
                onChange={handleCursoNomeChange}
                className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleMatricularClick}
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Matricular
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudentCourseRegistration;
