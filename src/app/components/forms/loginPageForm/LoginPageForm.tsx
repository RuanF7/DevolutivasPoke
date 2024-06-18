'use client';
import React from 'react';

interface LoginPageFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formData: {
    email: string;
    senha: string;
  };
}

const LoginPageForm: React.FC<LoginPageFormProps> = ({
  handleChange,
  handleSubmit,
  formData
}) => {
  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Entrar
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: 'auto',
              borderBottom: '2px solid black',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
              display: 'block',
              textAlign: 'center'
            }}
          >
            Entrar
          </button>
        </form>
      </aside>
    </div>
  );
};

export default LoginPageForm;
