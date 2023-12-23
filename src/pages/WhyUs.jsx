import camadoble from "../assets/images/rooms/camadoble.jpg";
import { Link } from "react-router-dom";
import slide2 from "../assets/images/rooms/hotelimagen2.jpg";
import React from "react";
import habitacion from "../assets/images/rooms/habitacion.jpg";
import Line from "../components/Line";
import buffet from "../assets/images/amenities/buffetcomida.jpg";
import logo from "../assets/images/logos/logo.png";
import Header from "../components/Header";
import utensilios from "../assets/icons/utensils-solid.svg";
import Conectividad from "../assets/icons/wifi-solid.svg";
import comodidad from "../assets/icons/wifi-solid.svg";
import clothcare from "../assets/icons/wifi-solid.svg";
import lavanderia from "../assets/icons/wifi-solid.svg";
import reunion from "../assets/icons/wifi-solid.svg";

export default function WhyUs() {
  return (
    <>
      <Header />
      <div>
        <h4 className="text-center text-xl font-bold mt-12 pb-2 border-b border-gray-200">
          Nuestros Servicios
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img src={utensilios} alt="utencilios" className="w-6 h-6"></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">Exquisita Gastronomía</h2>
            <p className="text-gray-600 text-base font-light">
              Disfruta de una experiencia culinaria inolvidable en nuestro
              restaurante de clase mundial o relájate con el servicio de
              habitaciones, donde la deliciosa comida llega directamente a tu
              puerta.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img
                src={Conectividad}
                alt="Conectividad"
                className="w-6 h-6"
              ></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">
              Conectividad sin Límites
            </h2>
            <p className="text-gray-600 text-base font-light">
              Mantente conectado con nuestro acceso Wi-Fi de alta velocidad en
              todas las áreas, garantizando que estés siempre conectado, ya sea
              por negocios o placer.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img
                src={comodidad}
                alt="comodidad"
                className="w-6 h-6 flex items-center"
              ></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">Bienestar Integral</h2>
            <p className="text-gray-600 text-base font-light">
              Descubre la serenidad en nuestro spa de primer nivel y mantente en
              forma en nuestro moderno gimnasio, diseñado para tu bienestar
              físico y mental.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img
                src={clothcare}
                alt="clothcare"
                className="w-6 h-6 flex items-center"
              ></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">
              Cuidado de la Ropa sin Preocupaciones
            </h2>
            <p className="text-gray-600 text-base font-light">
              Olvídate de las preocupaciones diarias con nuestro servicio de
              lavandería y tintorería, asegurando que luzcas impecable durante
              toda tu estancia.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img
                src={lavanderia}
                alt="lavanderia"
                className="w-6 h-6 flex items-center"
              ></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">Servicio de Lavandería</h2>
            <p className="text-gray-600 text-base font-light">
              Experimenta la frescura y limpieza incomparables. Utilizamos
              tecnologías de vanguardia y productos de calidad para dejar tus
              prendas como nuevas.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
              <img
                src={reunion}
                alt="reunion"
                className="w-6 h-6 flex items-center"
              ></img>
            </div>
            <h2 className="font-bold text-2xl mb-2">
              Centro de Negocios y Salas de Reuniones
            </h2>
            <p className="text-gray-600 text-base font-light">
              Con nuestro centro de negocios y salas de reuniones equipadas con
              la última tecnología, ofrecemos el entorno perfecto para el éxito
              de tus reuniones y eventos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
