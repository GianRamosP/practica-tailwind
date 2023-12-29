// TestimonialCard.js
import React from "react";

function TestimonialCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-800">{props.testimonio}</p>
      <p className="text-blue-500 font-semibold mt-4">{props.nombre}</p>
      <p className="text-gray-600">{props.puesto}</p>
    </div>
  );
}

export default TestimonialCard;
