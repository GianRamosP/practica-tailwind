import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-5 w-full">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 p-5">
            
            <div className="flex justify-between flex-row w-[160px] h-[41px] items-center">
              <div className="rounded-full bg-logo w-[41px] h-[41px]">
                <p className="text-center leading-[41px] text-bold text-[26px] text-white font-bold">
                  H
                </p>
              </div>
              <p className="text-[24px] text-white tracking-[0px] w-[107px] font-mulish font-bold">
                Hotel
              </p>
            </div>
            

            <h4 className="mb-4">Contacto</h4>
            <ul>
              <li>
                <a>Dirección: Calle Principal, Ciudad</a>
              </li>
              <li>
                <a>Teléfono: (123) 456-7890</a>
              </li>
              <li>
                <a href="#">Email: info@hotelzariman.com</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-5">
            <h4 className="mb-4 font-bold">Enlaces Rapidos</h4>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Habitaciones</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Reservas</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-5">
            <h4 className="mb-4 font-bold">Redes Sociales</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 text-center">
          <p>© 2023 Tu Hotel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
