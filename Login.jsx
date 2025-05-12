import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email && senha) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">JB Estuda+</h1>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;