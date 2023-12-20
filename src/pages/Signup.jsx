import React from "react";
import Header from "../components/Header";
export default function Signup() {
  return (
    <>
      <Header />

      <body>
        <div class="container mx-auto px-4">
          <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700">
                Registro de Hotel
              </h1>
              <p class="text-gray-400">
                Llena los campos para registrar un nuevo hotel
              </p>
            </div>
            <div class="m-7">
              <form action="/ruta-para-registro-hotel" method="post">
                <div class="mb-6">
                  <label
                    for="nombre_hotel"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Nombre del Hotel
                  </label>
                  <input
                    type="text"
                    name="nombre_hotel"
                    id="nombre_hotel"
                    placeholder="Hotel Los Andes"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="descripcion"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Descripción
                  </label>
                  <textarea
                    rows="4"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción del hotel"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  ></textarea>
                </div>
                <div class="mb-6">
                  <label
                    for="nombres_administrador"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Nombres del Administrador
                  </label>
                  <input
                    type="text"
                    name="nombres_administrador"
                    id="nombres_administrador"
                    placeholder="Juan Pérez"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="apellidos_administrador"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Apellidos del Administrador
                  </label>
                  <input
                    type="text"
                    name="apellidos_administrador"
                    id="apellidos_administrador"
                    placeholder="García López"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <label for="dni" class="block mb-2 text-sm text-gray-600">
                    DNI
                  </label>
                  <input
                    type="text"
                    name="dni"
                    id="dni"
                    placeholder="12345678"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm text-gray-600">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="admin@hotel.com"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="contrasena"
                    class="block mb-2 text-sm text-gray-600"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    placeholder="Ingresa una contraseña segura"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                  >
                    Registrar Hotel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
