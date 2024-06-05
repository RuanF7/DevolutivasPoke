'use client';
import React from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Bem Vindo
        </h1>
        <button type="submit" style={{ width: '100%', marginTop: 'auto' }}>
          Entrar
        </button>
        <button
          type="submit"
          style={{
            width: '100%',
            marginTop: 'auto',
            borderTop: '2px solid black'
          }}
        >
          Cadastrar
        </button>
      </aside>
    </div>
  );
};

export default LoginForm;
