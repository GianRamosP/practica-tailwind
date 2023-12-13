import React from "react";

export default function Login() {
  return (
    <body class="flex items-center justify-center h-screen">
      <div class="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
        <h2 class="text-2xl font-bold mb-8 text-center">Iniciar Sesión</h2>
        <form action="/general-management" method="GET">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="tu@ejemplo.com"
            ></input>
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            ></input>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              ></input>
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Recordarme
              </label>
            </div>
            <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </body>
  );
}
