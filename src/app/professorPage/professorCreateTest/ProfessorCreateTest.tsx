'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfessorCreateTest: React.FC = () => {
  const [prova, setProva] = useState('');
  const [professorId, setProfessorId] = useState<number | null>(null);
  const [cursoId, setCursoId] = useState<number | null>(null);
  const [provaId, setProvaId] = useState<number | null>(null);
  const [questoes, setQuestoes] = useState<string[]>([]);
  const [pokemon, setPokemon] = useState<string>('');

  useEffect(() => {
    const storedTipo = localStorage.getItem('tipo');
    const storedProfessorId = localStorage.getItem('userId');
    if (storedTipo) {
      setProva(storedTipo);
    }
    if (storedProfessorId) {
      setProfessorId(parseInt(storedProfessorId));
    }
  }, []);

  useEffect(() => {
    const fetchCursoId = async () => {
      try {
        if (!professorId) return;

        const response = await fetch(
          `http://localhost:3000/professor/curso/${professorId}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Erro ao buscar cursoId');
        }

        if (!data.id) {
          throw new Error('CursoId não encontrado na resposta');
        }

        setCursoId(data.id);
      } catch (error) {
        console.error('Erro ao buscar cursoId:', error);
      }
    };

    fetchCursoId();
  }, [professorId]);

  const handleProvaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProva = e.target.value;
    setProva(selectedProva);
  };

  const handlePokemonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(e.target.value.trim());
  };

  const handleSubmitProva = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        professorId: professorId!,
        nome: prova,
        cursoId: cursoId!
      };

      console.log('Enviando prova:', body);

      const response = await fetch(
        'http://localhost:3000/professor/criar-prova',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );

      const result = await response.json();
      console.log('Resposta da criação da prova:', result);

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao criar prova');
      }

      setProvaId(result.id);
      console.log(
        `Prova criada com sucesso! ID: ${result.id} - Nome: ${result.nome} - CursoId: ${result.cursoId}`
      );
      console.log(provaId);
    } catch (error) {
      console.error('Erro ao criar prova:', error);
    }
  };

  const fetchProvaId = async () => {
    try {
      console.log('FetchProvaId - professorId:', professorId);
      console.log('FetchProvaId - prova:', prova);

      const response = await fetch(
        `http://localhost:3000/professor/prova/${professorId}/${encodeURIComponent(prova)}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao buscar prova');
      }

      setProvaId(data.id);
      console.log(`Prova encontrada! ID: ${data.id} - Nome: ${data.nome}`);
    } catch (error) {
      console.error('Erro ao buscar prova:', error);
    }
  };

  const handleSubmitQuestao = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pokemon || !provaId || !professorId) {
      console.error('Todos os campos devem estar preenchidos.');
      return;
    }

    try {
      const body = {
        provaId: provaId!,
        pergunta: pokemon,
        professorId: professorId!
      };

      console.log('handleSubmitQuestao - Enviando questão:', body);

      const response = await fetch(
        'http://localhost:3000/professor/criar-questao',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );

      const result = await response.json();

      console.log(
        'handleSubmitQuestao - Resposta da criação da questão:',
        result
      );

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao criar questão');
      }

      console.log('Questão criada com sucesso:', result);

      setQuestoes([...questoes, pokemon]);

      setPokemon('');
    } catch (error) {
      console.error('Erro ao criar questão:', error);
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
          <form
            className="flex flex-col w-full mb-4"
            onSubmit={handleSubmitProva}
          >
            <select value={prova} onChange={handleProvaChange}>
              <option value="">Selecione uma Prova</option>
              <option value="fire">Prova de Fogo</option>
              <option value="water">Prova de Água</option>
              <option value="grass">Prova de Grama</option>
              <option value="electric">Prova de Elétrico</option>
              <option value="psychic">Prova de Psíquico</option>
              <option value="rock">Prova de Pedra</option>
              <option value="ground">Prova de Terrestre</option>
              <option value="flying">Prova de Voador</option>
              <option value="normal">Prova de Normal</option>
              <option value="fighting">Prova de Lutador</option>
              <option value="poison">Prova de Venenoso</option>
              <option value="bug">Prova de Inseto</option>
              <option value="ghost">Prova de Fantasma</option>
              <option value="ice">Prova de Gelo</option>
              <option value="dragon">Prova de Dragão</option>
              <option value="dark">Prova de Sombrio</option>
              <option value="steel">Prova de Aço</option>
              <option value="fairy">Prova de Fada</option>
            </select>
            <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Criar Prova
            </button>
          </form>

          <form
            className="flex flex-col w-full mb-4"
            onSubmit={handleSubmitQuestao}
          >
            <input
              type="text"
              placeholder="Digite o nome de um Pokémon"
              className="w-full py-2 px-3 mb-3 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              value={pokemon}
              onChange={handlePokemonChange}
            />
            <button
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              onClick={fetchProvaId}
            >
              Adicionar Questão
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ProfessorCreateTest;
