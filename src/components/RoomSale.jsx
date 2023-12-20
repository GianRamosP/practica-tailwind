// Habitacion.js
import React from "react";

function RoomSale(props) {
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={props.imagen}
        alt={props.alt}
        class="w-full h-56 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-700">{props.titulo}</h3>
        <p class="text-gray-600">{props.descripcion}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-xl font-bold text-gray-800">{props.precio}</span>
          <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomSale;
