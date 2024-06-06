'use client';
import React, { useState } from 'react';
import LoginPageForm from './LoginPageForm';
import { useRouter } from 'next/navigation';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        console.log('User logged in', result);
        localStorage.setItem('token', result.token);
        router.push('/studentPage/studentArea');
      } else {
        console.error('Error:', result.error);
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
