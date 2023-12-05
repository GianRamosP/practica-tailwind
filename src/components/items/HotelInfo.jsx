import React from 'react';

const HotelInfo = ({ nombreHotel, descripcion, administrador }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-cyan-500">
      <h3 className="text-xl font-semibold">{nombreHotel}</h3>
      <p>{descripcion}</p>
      <p className="text-sm text-gray-600">Administrador: {administrador}</p>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">Editar</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
      </div>
    </div>
  );
};

export default HotelInfo;
