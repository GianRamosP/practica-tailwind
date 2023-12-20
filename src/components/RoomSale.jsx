import React from "react";

function RoomSale(props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={props.imagen}
        alt={props.alt}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{props.titulo}</h3>
        <p className="text-gray-600">{props.descripcion}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-800">
            {props.precio}
          </span>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomSale;
