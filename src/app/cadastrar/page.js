"use client"

import { useRouter } from 'next/router';
import Button from '@/components/Button';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';
import React, { useState } from 'react';

async function cadastrar(nome, email, senha) {
  const router = useRouter();
  const url = "http://localhost:8080/api/cadastrar";
  const data = { nome, email, senha };

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      throw new Error('Erro ao cadastrar usuário');
    }

    return resp.json();
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    throw error;
  }
}

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await cadastrar(nome, email, senha);
      console.log('Usuário cadastrado com sucesso:', response);
      router.push('/login');
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Criar conta</h1>

          <form onSubmit={handleSubmit}>
            <TextInput label="Nome" id="nome" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <TextInput label="Email" id="email" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput label="Senha" id="senha" type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

            <div className="flex justify-center">
              <Button text="Enviar" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
