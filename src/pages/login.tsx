// pages/Login.js
import React from 'react';

export default function Login() {
  return (
    <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    className="flex items-center justify-center min-h-screen bg-gray-100" >
      <div className='bg-[#fffafa] absolute z-10 w-[100vw] h-[25rem] bottom-0 opacity-70'></div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md z-20">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center">
          Não possui uma conta?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
