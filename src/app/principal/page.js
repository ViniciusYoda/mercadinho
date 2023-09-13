"use client"; 
import React from 'react';
import FoodList from '@/components/FoodList';

export default async function Principal() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl text-black font-bold mb-6">Lista de Comidas</h1>
      <FoodList />
    </div>
  );
}
