import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <Header />
      <section className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-8">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Iniciar Sesión
          </h2>
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
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="••••••••"
              ></input>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
