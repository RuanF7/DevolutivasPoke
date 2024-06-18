'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfessorBackpack: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [professorId, setProfessorId] = useState<number | null>(null);
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    const userIsProfessor = localStorage.getItem('isProfessor');
    if (id && userIsProfessor === 'true') {
      setIsProfessor(true);
      setProfessorId(Number(id));
    }
  }, []);

  // const getProfessor = () => {
  //   const id = localStorage.getItem('userId');
  //   const userIsProfessor = localStorage.getItem('isProfessor');
  //   if (!id || !userIsProfessor) {
  //     return;
  //   }
  //   setIsProfessor(userIsProfessor === 'true');
  //   setProfessorId(Number(id));
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!professorId) {
      console.error('ID do professor não encontrado!');
      return;
    }

    if (!pokemonName) {
      console.error('Nome do Pokémon é obrigatório');
      return;
    }

    try {
      const body = { professorId, pokemonName };
      console.log('Enviando:', body);

      const response = await fetch(
        'http://localhost:3000/professor/add-pokemon',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );
      const result = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(result.message);
      }
      console.log('Pokemon adicionado a mochila', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return !isProfessor ? (
    <div className="w-64 h-screen flex justify-center items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Você não é um professor!
      </h1>
    </div>
  ) : (
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
          <form className="flex flex-col w-full mb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar Pokemon"
              className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              value={pokemonName}
              onChange={handleInputChange}
            />
            <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Enviar
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ProfessorBackpack;
