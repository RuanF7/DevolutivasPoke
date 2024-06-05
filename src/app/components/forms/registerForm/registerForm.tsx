import React from 'react';

interface RegisterFormProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTipoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formData: {
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    isProfessor: boolean;
  };
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  handleChange,
  handleSelectChange,
  handleTipoChange,
  handleSubmit,
  formData
}) => {
  console.log(formData);
  return (
    <div className="w-64 h-screen flex justify-center items-center pt-32">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-gray-900">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Cadastro
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <input
            name="nome"
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <select
            name="isProfessor"
            value={formData.isProfessor ? 'true' : 'false'}
            onChange={handleSelectChange}
          >
            <option value="false">Aluno</option>
            <option value="true">Professor</option>
          </select>
          {formData.isProfessor ? (
            <input
              name="tipo"
              type="text"
              placeholder="Tipo"
              value={formData.tipo}
              onChange={handleTipoChange}
            />
          ) : null}
          <button type="submit" style={{ width: '100%', marginTop: 'auto' }}>
            Cadastrar
          </button>
        </form>
      </aside>
    </div>
  );
};

export default RegisterForm;
