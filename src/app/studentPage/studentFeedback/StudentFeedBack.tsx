'use client';
import React, { useState } from 'react';

const mockTests = [
  { id: 1, name: 'Prova de Fogo', feedback: 'Devolutiva for Prova de Fogo' },
  { id: 2, name: 'Prova de Água', feedback: 'Devolutiva for Prova de Água' },
  { id: 3, name: 'Prova de Terra', feedback: 'Devolutiva for Prova de Terra' }
];

const StudentFeedback: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  return (
    <div className="w-64 h-screen flex justify-center items-center">
      <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-5 shadow-lg shadow-gray-900 p-4">
        <h1 className="text-center text-white font-light text-4xl bg-gray-900 rounded-t-xl m-0 py-4">
          Devolutivas
        </h1>
        <ul className="mb-4">
          {mockTests.map((test) => (
            <li key={test.id}>
              <button
                onClick={() => setSelectedTest(test.id)}
                className={`w-full bg-gray-800 text-left py-2 px-3 mb-2 rounded ${
                  selectedTest === test.id
                    ? 'bg-white text-black'
                    : 'bg-gray-100 text-white'
                } hover:bg-gray-200`}
              >
                {test.name}
              </button>
            </li>
          ))}
        </ul>
        {selectedTest !== null && (
          <div className="p-4 bg-gray-200 rounded">
            {mockTests.find((test) => test.id === selectedTest)?.feedback}
          </div>
        )}
      </aside>
    </div>
  );
};

export default StudentFeedback;
