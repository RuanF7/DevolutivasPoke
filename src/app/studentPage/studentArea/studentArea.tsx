'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const StudentArea: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // const handleMatricular = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://localhost:3000/api/aluno/matricular',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(matriculaData)
  //       }
  //     );
  //     const result = await response.json();
  //     if (response.ok) {
  //       console.log('Aluno matriculado', result);
  //     } else {
  //       console.error('Erro ao matricular aluno:', result.error);
  //     }
  //   } catch (error) {
  //     console.error('Erro:', error);
  //   }
  // };

  // const handleRealizarProva = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://localhost:3000/api/aluno/realizar-prova',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(provaData)
  //       }
  //     );
  //     const result = await response.json();
  //     if (response.ok) {
  //       console.log('Prova realizada', result);
  //     } else {
  //       console.error('Erro ao realizar prova:', result.error);
  //     }
  //   } catch (error) {
  //     console.error('Erro:', error);
  //   }
  // };

  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4">
        <div className="flex">
          <div className="mr-4">
            <Image
              src="/aluno1.png"
              alt="Student Image"
              width={90}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={() =>
                handleNavigation('/studentPage/studentCourseRegistration')
              }
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Matricular
            </button>
            <button
              onClick={() => handleNavigation('/studentPage/studentTest')}
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Fazer Prova
            </button>
            <button
              className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              onClick={() => handleNavigation('/studentPage/studentFeedback')}
            >
              Devolutivas
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudentArea;
