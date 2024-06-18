'use client';
import { useState } from 'react';
import Image from 'next/image';

const ProfessorCreateCourse: React.FC = () => {
  const [curso, setCurso] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurso(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!curso) {
      console.error('Curso não selecionado');
      return;
    }

    try {
      const professorId = localStorage.getItem('userId');
      if (!professorId) {
        console.error('ID do professor não encontrado no localStorage');
        return;
      }
      const body = {
        professorId: parseInt(professorId),
        nome: curso
      };
      console.log('Submitting:', body);

      const response = await fetch('http://localhost:3000/professor/curso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      console.log('Resposta da API:', result);
      if (!response.ok) {
        throw new Error(result.message);
      }
      console.log('Curso criado com sucesso:', result);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <div>
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Cadastrar Curso
        </h1>
        <aside className="bg-white w-full max-w-md rounded-b-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4 flex">
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
                <select value={curso} onChange={handleSelectChange}>
                  <option value="">Selecione um Curso</option>
                  <option value="fire">Curso de Fogo</option>
                  <option value="water">Curso de Agua</option>
                  <option value="grass">Curso de Grama</option>
                  <option value="electric">Curso de Elétrico</option>
                  <option value="psychic">Curso de Psíquico</option>
                  <option value="rock">Curso de Pedra</option>
                  <option value="ground">Curso de Terrestre</option>
                  <option value="flying">Curso de Voador</option>
                  <option value="normal">Curso de Normal</option>
                  <option value="fighting">Curso de Lutador</option>
                  <option value="poison">Curso de Venenoso</option>
                  <option value="bug">Curso de Inseto</option>
                  <option value="ghost">Curso de Fantasma</option>
                  <option value="ice">Curso de Gelo</option>
                  <option value="dragon">Curso de Dração</option>
                  <option value="dark">Curso de Sombrio</option>
                  <option value="steel">Curso de Aço</option>
                  <option value="fairy">Curso de Fada</option>
                </select>
              </div>
              <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
                Criar Curso
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProfessorCreateCourse;
