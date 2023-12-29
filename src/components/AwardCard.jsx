import React from "react";

function AwardCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-blue-200 overflow-hidden">
      {/* Fondo blanco con borde y sombra */}
      <img src={props.imagen} alt={props.alt} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-800">{props.titulo}</h3>
        {/* Azul Oscuro para el título */}
        <p className="text-blue-600">{props.descripcion}</p>
        {/* Azul Medio para el texto */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-800">{props.fecha}</span>
          {/* Azul Oscuro para la fecha */}
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
            {/* Botón en Azul Medio con hover en Azul Oscuro */}
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
}

export default AwardCard;
