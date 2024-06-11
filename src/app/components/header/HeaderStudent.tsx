import Image from 'next/image';
import NavButtonStudent from '../navigationDropdown/navigationStudent/navigationDropdownStudent';

const HeaderStudent = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 md:p-6 mb-8 bg-gray-900 text-white">
      <div className="flex justify-center items-center">
        <Image src="/pokeball.png" alt="Pokéball" width={30} height={30} />
        <h1 className="ml-4">Poke Devolutivas</h1>
        <NavButtonStudent />
      </div>
    </nav>
  );
};

export default HeaderStudent;
