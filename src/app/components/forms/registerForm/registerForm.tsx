import React from 'react';

interface RegisterFormProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTipoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formData: {
    nome: string;
    email: string;
    senha: string;
    tipo: string;
    tipoPokemon?: string;
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
            name="tipo"
            value={formData.tipo}
            onChange={handleSelectChange}
          >
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
          </select>
          {formData.tipo === 'professor' && (
            <select
              name="tipoPokemon"
              value={formData.tipoPokemon || ''}
              onChange={handleTipoChange}
            >
              <option value="fire">Fogo</option>
              <option value="water">Agua</option>
              <option value="grass">Grama</option>
              <option value="electric">Elétrico</option>
              <option value="psychic">Psíquico</option>
              <option value="rock">Pedra</option>
              <option value="ground">Terrestre</option>
              <option value="flying">Voador</option>
              <option value="normal">Normal</option>
              <option value="fighting">Lutador</option>
              <option value="poison">Venenoso</option>
              <option value="bug">Inseto</option>
              <option value="ghost">Fantasma</option>
              <option value="ice">Gelo</option>
              <option value="dragon">Dração</option>
              <option value="dark">Sombrio</option>
              <option value="steel">Aço</option>
              <option value="fairy">Fada</option>
            </select>
          )}
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
            Cadastrar
          </button>
        </form>
      </aside>
    </div>
  );
};

export default RegisterForm;
