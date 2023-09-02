import { useRouter } from 'next/router';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const resp = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao fazer login');
      }
      router.push('/principal');
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold mb-4">Entrar</h1>

        <TextInput label="Email" id="email" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Senha" id="senha" type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        {erro && <p className="text-red-500">{erro}</p>}

        <div className="flex justify-center">
          <Button text="Entrar" onClick={handleLogin} />
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
