import React from "react";
import habitacion from "../assets/habitacion.jpg";
import buffet from "../assets/buffetcomida.jpg";
import Line from "./Line";
import ButtonWhite from "./buttons/ButtonWhite";

export default function Listing() {
  return (
    <>
      <div className="flex justify-between items-center bg-white text-black p-10 w-full">
        <img
          src={habitacion}
          alt="Imagen de habitación"
          className="w-1/2 mr-4"
        ></img>
        <div className="flex flex-col w-[486px]">
          <h2 className="font-bold text-[36px]">
            Zariman: Donde el Lujo Encuentra su Hogar
          </h2>
          <Line />
          <p className="text-[18px] text-text">
            Descubre la cúspide del confort y el estilo en nuestras habitaciones
            exquisitamente diseñadas. ¡Tu escapada de ensueño comienza aquí!
          </p>
          <ButtonWhite />
        </div>
      </div>
      <div className="flex justify-between items-center bg-white text-black p-10 w-full">
        <div className="flex flex-col w-[486px]">
          <h2 className="font-bold text-[36px]">
            Sabor Inigualable en Zariman
          </h2>
          <Line />
          <p className="text-text text-[18px]">
            Embárcate en un festín para los sentidos en nuestro buffet de clase
            mundial. Sabores extraordinarios que harán de cada comida un deleite
            inolvidable. ¡Sumérgete en la excelencia culinaria en Zariman!
          </p>
          <ButtonWhite />
        </div>
        <img
          src={buffet}
          alt="Imagen de habitación"
          className="w-1/2 ml-4"
        ></img>
      </div>
    </>
  );
}
