import React from "react";
import Header from "../components/Header";
export default function Signup() {
  return (
    <>
      <Header />

      <body>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">
                Registro de Hotel
              </h1>
              <p className="text-gray-400">
                Llena los campos para registrar un nuevo hotel
              </p>
            </div>
            <div className="m-7">
              <form action="/ruta-para-registro-hotel" method="post">
                <div className="mb-6">
                  <label
                    for="nombre_hotel"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Nombre del Hotel
                  </label>
                  <input
                    type="text"
                    name="nombre_hotel"
                    id="nombre_hotel"
                    placeholder="Hotel Los Andes"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="descripcion"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Descripción
                  </label>
                  <textarea
                    rows="4"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción del hotel"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    for="nombres_administrador"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Nombres del Administrador
                  </label>
                  <input
                    type="text"
                    name="nombres_administrador"
                    id="nombres_administrador"
                    placeholder="Juan Pérez"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="apellidos_administrador"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Apellidos del Administrador
                  </label>
                  <input
                    type="text"
                    name="apellidos_administrador"
                    id="apellidos_administrador"
                    placeholder="García López"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <label for="dni" className="block mb-2 text-sm text-gray-600">
                    DNI
                  </label>
                  <input
                    type="text"
                    name="dni"
                    id="dni"
                    placeholder="12345678"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="admin@hotel.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="contrasena"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    placeholder="Ingresa una contraseña segura"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
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
