import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <div className="w-64 h-screen flex justify-center items-center pt-32">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Cadastro
        </h1>
        <form>
          <input type="nome" placeholder="Nome" />
          <input type="senha" placeholder="Senha" />
          <input type="senha" placeholder="Confirmar Senha" />
          <button>Cadastrar</button>
        </form>
      </aside>
    </div>
  );
};

export default RegisterForm;
