import React from 'react';

export default function TextInput({ label, id, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border rounded-full bg-purple-500 text-white placeholder-white focus:border-indigo-800"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};


