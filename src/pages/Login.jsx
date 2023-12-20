import React from "react";

export default function Login() {
  return (
    <body className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Iniciar Sesión</h2>
        <form action="/general-management" method="GET">
          <div className="mb-4">
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="tu@ejemplo.com"
            ></input>
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            ></input>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              ></input>
              <label
                for="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordarme
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </body>
  );
}
