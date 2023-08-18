import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Criar conta</h1>
        
        <TextInput label="Email" id="email" type="email" placeholder="Digite seu email" />
        <TextInput label="Senha" id="senha" type="password" placeholder="Digite sua senha" />
        
        <div className="flex justify-center">
          <Button text="Entrar" />
        </div>
        
        <div className="mt-4 text-center">
          Ainda não tem uma conta?{' '}
          <Link href="/cadastrar">
            <p className="text-indigo-500 hover:underline">Criar conta</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
