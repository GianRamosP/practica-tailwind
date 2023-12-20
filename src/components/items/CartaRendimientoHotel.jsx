import React from 'react';

const CartaRendimientoHotel = ({ nombre, rendimiento, habitacionesOcupadas, totalHabitaciones, estadoDeuda }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-cyan-500">
      <h3 className="text-xl font-semibold text-gray-800">{nombre}</h3>
      <p className="text-gray-700">Rendimiento: {rendimiento}%</p>
      <p className="text-gray-700">Habitaciones ocupadas: {habitacionesOcupadas}/{totalHabitaciones}</p>
      <p className={`text-gray-700 ${estadoDeuda ? 'text-red-400' : 'text-green-600'}`}>
        Estado de deuda: {estadoDeuda ? 'Con deuda' : 'Sin deuda'}
      </p>
    </div>
  );
};

export default CartaRendimientoHotel;
