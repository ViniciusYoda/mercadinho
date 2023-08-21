import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

const Conclusao = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <BsCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Conclusão</h1>
        <p className="text-gray-600">Seu pedido foi concluído com sucesso!</p>
      </div>
    </div>
  );
};

export default Conclusao;
