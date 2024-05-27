import React from 'react';

const LoginPageForm: React.FC = () => {
  return (
    <div className="w-64 h-screen flex justify-center items-center ">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Entrar
        </h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Entrar</button>
        </form>
      </aside>
    </div>
  );
};

export default LoginPageForm;
