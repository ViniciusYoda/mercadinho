import React from 'react';

const FoodItem = ({ name, price, imageSrc }) => {

  return (
    <div className="flex items-center justify-center flex-col p-4">
      <img src={imageSrc} alt={name} className="w-24 h-24 object-cover mb-2 text-transparent" />
      <h3 className="text-lg text-black font-bold mb-1">{name}</h3>
      <p className="text-gray-600 mb-1">R$ {price.toFixed(2)}</p>
      <div className="flex items-center">
        <button
          className="bg-indigo-500 text-black px-2 py-1 rounded-full mr-2"
        >
          -
        </button>
        <button
          className="bg-indigo-500 text-black px-2 py-1 rounded-full ml-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
