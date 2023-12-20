import React from 'react';

const HotelBusqueda = ({ image, hotelName, description, price }) => {
  return (
    <div className="flex items-center bg-blue-100 p-4 rounded-md shadow-sm mb-4">
      <div className="w-1/3">
        <img src={image} alt={hotelName} className="rounded-md"/>
      </div>
      <div className="w-2/3 pl-4">
        <h3 className="text-lg font-semibold text-gray-700">{hotelName}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 text-lg font-semibold text-gray-800">
          ${price}/noche
        </div>
        <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">Más info</button>
      </div>
    </div>
  );
};

export default HotelBusqueda;
