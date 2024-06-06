import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useRouter } from 'next/router';

const RegisterLogic: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo: '',
    isProfessor: false
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isProfessor = value === 'true';
    const tipo = isProfessor ? '' : formData.tipo;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      isProfessor: isProfessor,
      tipo: tipo
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const isProfessor = value === 'true';
    setFormData((prevState) => ({
      ...prevState,
      isProfessor: isProfessor
    }));
  };

  const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      tipo: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        console.log('User created', result);
        localStorage.setItem('token', result.token);
        router.push('/studentPage/studentCourseRegistration');
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
