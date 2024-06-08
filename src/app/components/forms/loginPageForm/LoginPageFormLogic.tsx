'use client';
import React, { useState } from 'react';
import LoginPageForm from './LoginPageForm';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface Token extends jwt.JwtPayload {
  userId: number;
  isProfessor: boolean;
  tipo: string;
}

const LoginPageLogic: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [isProfessor, setIsProfessor] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const tipo = (decodedToken as Token).tipo;

      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('isProfessor', isProfessor.toString());
      localStorage.setItem('tipo', tipo.toString());

      setIsProfessor(isProfessor);
      return isProfessor;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      throw new Error('Email and password are required');
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      const isProfessor = handleToken(result.token);
      if (isProfessor) {
        router.push('/professorPage/professorArea');
      } else {
        router.push('/studentPage/studentArea');
      }
    } catch (error) {
      console.error('Error:', error);
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
