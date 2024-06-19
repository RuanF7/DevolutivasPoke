'use client';
import React, { useState } from 'react';
import LoginPageForm from './LoginPageForm';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface Token extends jwt.JwtPayload {
  userId: number;
  tipo: string;
}

const LoginPageLogic: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleToken = (token: string): string => {
    try {
      console.log('Token:', token);
      const decodedToken = jwt.verify(token, 'your_jwt_secret') as Token;
      console.log('Decoded token:', decodedToken);

      const userId = (decodedToken as Token).userId;
      const tipo = (decodedToken as Token).tipo;

      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('tipo', tipo);

      return tipo;
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      throw new Error('Email e senha são obrigatórios!');
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Result:', result);
      if (!response.ok) {
        throw new Error(result.message);
      }

      localStorage.setItem('token', result.token);
      localStorage.setItem('userId', result.id.toString());

      const tipo = handleToken(result.token);
      if (tipo === 'aluno') {
        router.push('/studentPage/studentArea');
      } else {
        router.push('/professorPage/professorArea');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <LoginPageForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default LoginPageLogic;
