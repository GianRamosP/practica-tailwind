import React, { useState, useEffect } from "react";

export default function Apitest() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    fetch("https://project-web-frontend.vercel.app/api/managers")
      .then((response) => response.json())
      .then((data) => setManagers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Administradores:</h1>
      <ul>
        {managers.map((manager) => (
          <li key={manager.id_manager}>
            <p>Nombre del hotel: {manager.nombre_hotel}</p>
            <p>Nombre de la persona: {manager.nombre_persona}</p>
            <p>Teléfono: {manager.telefono}</p>
            <p>Email: {manager.email}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
