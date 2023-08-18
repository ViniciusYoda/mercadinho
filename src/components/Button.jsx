import React from 'react';

export default function Button({ text })  {
  return (
    <button
      className="w-40 h-8 bg-indigo-500 text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
      type="button"
    >
      {text}
    </button>
  );
};

 
