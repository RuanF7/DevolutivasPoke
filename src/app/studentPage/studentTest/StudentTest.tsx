'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import StudentTestQuestionRenderer from './StudentTestQuestionRender';

const StudentTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleQuestionChange = (questionNumber: number) => {
    setCurrentQuestion(questionNumber);
  };

  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4">
        <div className="flex">
          <div className="mr-4">
            <Image
              src="/aluno1.png"
              alt="Aluno Image"
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div className="mb-4">
              <StudentTestQuestionRenderer currentQuestion={currentQuestion} />
            </div>
            <div className="flex justify-center">
              <button
                className={`w-8 h-8 bg-gray-800 text-white rounded-full hover:bg-gray-900 mr-2 ${
                  currentQuestion === 1 && 'bg-blue-500'
                }`}
                onClick={() => handleQuestionChange(1)}
              >
                1
              </button>
              <button
                className={`w-8 h-8 bg-gray-800 text-white rounded-full hover:bg-gray-900 mr-2 ${
                  currentQuestion === 2 && 'bg-blue-500'
                }`}
                onClick={() => handleQuestionChange(2)}
              >
                2
              </button>
              <button
                className={`w-8 h-8 bg-gray-800 text-white rounded-full hover:bg-gray-900 ${
                  currentQuestion === 3 && 'bg-blue-500'
                }`}
                onClick={() => handleQuestionChange(3)}
              >
                3
              </button>
            </div>
            <button className="w-full py-2 my-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Responder
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StudentTest;
