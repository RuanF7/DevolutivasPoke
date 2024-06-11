import Image from 'next/image';
import NavButtonProfessor from '../navigationDropdown/navigationProfessor/navigationDropdownProfessor';

const HeaderProfessor = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 md:p-6 mb-8 bg-gray-900 text-white">
      <div className="flex justify-center items-center">
        <Image src="/pokeball.png" alt="Pokéball" width={30} height={30} />
        <h1 className="ml-4">Poke Devolutivas</h1>
        <NavButtonProfessor />
      </div>
    </nav>
  );
};

export default HeaderProfessor;
