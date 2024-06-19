'use client';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface Token extends jwt.JwtPayload {
  userId: number;
  isProfessor: boolean;
}

const RegisterLogic: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: 'aluno',
    tipoPokemon: ''
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleToken = (token: string): boolean => {
    try {
      console.log('Token:', token);
      const decodedToken = jwt.verify(token, 'your_jwt_secret') as Token;
      console.log('Decoded token:', decodedToken);

      const userId = (decodedToken as Token).userId;
      const isProfessor = (decodedToken as Token).isProfessor;

      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('isProfessor', isProfessor.toString());

      return isProfessor;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // const tipo = value === 'true' ? 'professor' : 'aluno';
    setFormData((prevState) => ({
      ...prevState,
      tipo: value,
      tipoPokemon: value === 'professor' ? '' : prevState.tipoPokemon
    }));
  };

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      tipoPokemon: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const tipoFinal =
        formData.tipo === 'professor' ? formData.tipoPokemon : 'aluno';

      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, tipo: tipoFinal })
      });

      const result = await response.json();
      console.log('API Response:', result);
      if (response.ok) {
        console.log('Usuário Criado', result);
        localStorage.setItem('token', result.token);
        localStorage.setItem('tipo', formData.tipo);
        localStorage.setItem('userId', result.id.toString());

        handleToken(result.token);
        if (formData.tipo === 'aluno') {
          router.push('/studentPage/studentArea');
        } else {
          router.push('/professorPage/professorArea');
        }
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <RegisterForm
      handleChange={handleChange}
      handleSelectChange={handleSelectChange}
      handleTipoChange={handleTipoChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default RegisterLogic;
