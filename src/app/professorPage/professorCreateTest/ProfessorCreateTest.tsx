'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfessorCreateTest: React.FC = () => {
  const [pokemon1, setPokemon1] = useState('');
  const [pokemon2, setPokemon2] = useState('');
  const [pokemon3, setPokemon3] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    const storedTipo = localStorage.getItem('tipo');
    if (storedTipo) {
      setTipo(storedTipo);
    }
  }, []);

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon1(e.target.value);
  };
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon2(e.target.value);
  };
  const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon3(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pokemon1 || !pokemon2 || !pokemon3) {
      console.error('All pokemon are required');
      return;
    }

    try {
      const professorId = localStorage.getItem('userId');
      if (!professorId) {
        console.error('Professor ID not found in localStorage');
        return;
      }
      const body = {
        professorId: parseInt(professorId),
        provaData: {
          nome: `Prova de ${tipo}`,
          pokemonNomes: [pokemon1, pokemon2, pokemon3]
        }
      };
      console.log('Submitting:', body);

      const response = await fetch(
        'http://localhost:3000/api/prova/create-prova',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );
      console.log(response);
      const result = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        <div className="w-2/3 flex flex-col items-center">
          <form className="flex flex-col w-full mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full mb-4">
              <input
                type="text"
                placeholder="Pokémon 1"
                className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={pokemon1}
                onChange={handleInputChange1}
              />
              <input
                type="text"
                placeholder="Pokémon 2"
                className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={pokemon2}
                onChange={handleInputChange2}
              />
              <input
                type="text"
                placeholder="Pokémon 3"
                className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={pokemon3}
                onChange={handleInputChange3}
              />
            </div>
            <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Enviar
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ProfessorCreateTest;
