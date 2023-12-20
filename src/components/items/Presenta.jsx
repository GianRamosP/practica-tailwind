import React from 'react';

const Presenta = ({ imageSrc }) => {
  return (
    <div className="relative bg-gray-100 h-96"> 
      
      <img src={imageSrc} alt="Imagen de fondo" className="w-full h-full object-cover" />
      
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
        <div className="bg-white bg-opacity-75 p-6 m-12 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">Encuentra tu hotel ideal</h2>
          <p className="text-gray-700">Explora las mejores ofertas y reserva tu estancia perfecta.</p>
        </div>
      </div>
    </div>
  );
};

export default Presenta;
