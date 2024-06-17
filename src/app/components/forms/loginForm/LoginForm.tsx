'use client';
import Link from 'next/link';
import React from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Bem Vindo
        </h1>
        <Link
          href="/loginPage"
          className="w-full border-t-2 border-black py-2 px-4 block text-center"
        >
          Entrar
        </Link>
        <Link
          href="/loginPage/register"
          className="w-full border-t-2 border-black rounded-b-xl py-2 px-4 block text-center"
        >
          Cadastrar
        </Link>
      </aside>
    </div>
  );
};

export default LoginForm;
