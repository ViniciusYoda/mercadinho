import React from 'react';

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <p>{name}</p>
        <p className="text-gray-600">R$ {price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button className="bg-indigo-500 text-white px-2 py-1 rounded-full mr-2">
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button className="bg-indigo-500 text-white px-2 py-1 rounded-full ml-2">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
