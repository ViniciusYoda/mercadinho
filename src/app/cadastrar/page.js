import Button from '@/components/Button';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';
import React from 'react';

export default function Cadastrar() {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Criar conta</h1>
        
        <TextInput label="Nome" id="nome" type="text" placeholder="Digite seu nome" />
        <TextInput label="Email" id="email" type="email" placeholder="Digite seu email" />
        <TextInput label="Senha" id="senha" type="password" placeholder="Digite sua senha" />
        
        <div className="flex justify-center">
          <Button text="Enviar" />
        </div>
      </div>
    </div>
    </>
  );
}