import React from "react";
import Checkbox from "../components/Checkbox";

const FilterBar = ({ id, name, text }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto my-10">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Buscar Hoteles
          </h2>
          <form
            action="/ruta-para-busqueda-hoteles"
            method="get"
            className="space-y-4"
          >
            <div>
              <label for="lugar" className="block text-sm text-gray-600">
                Lugar
              </label>
              <input
                type="text"
                id="lugar"
                name="lugar"
                placeholder="Ingresa un destino"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  for="fecha_llegada"
                  clasName="block text-sm text-gray-600"
                >
                  Fecha de Llegada
                </label>
                <input
                  type="date"
                  id="fecha_llegada"
                  name="fecha_llegada"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                />
              </div>
              <div className="w-1/2">
                <label
                  for="fecha_partida"
                  className="block text-sm text-gray-600"
                >
                  Fecha de Partida
                </label>
                <input
                  type="date"
                  id="fecha_partida"
                  name="fecha_partida"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <label for="camas" className="mr-2">
                  Número de camas:
                </label>
                <select
                  id="camas"
                  name="camas"
                  required
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100 w-auto"
                >
                  <option value="">Selecciona</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Checkbox id="piscina" name="piscina" text="Piscina" />
                <Checkbox id="wifi" name="wifi" text="Wifi" />
                <Checkbox
                  id="Estacionamiento"
                  name="Estacionamiento"
                  text="Estacionamiento"
                />
                <Checkbox
                  id="desayuno"
                  name="desayuno"
                  text="Desayuno incluido"
                />
                <Checkbox
                  id="servicioHabitacion"
                  name="servicioHabitacion"
                  text="Servicio a la habitación"
                />
                <Checkbox
                  id="ac"
                  name="ac"
                  text="Aire acondicionado/calefacción"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
