import camadoble from "../assets/images/rooms/camadoble.jpg";
import { Link } from "react-router-dom";
import slide2 from "../assets/images/rooms/hotelimagen2.jpg";
import React from "react";
import habitacion from "../assets/images/rooms/habitacion.jpg";
import Line from "../components/Line";
import buffet from "../assets/images/amenities/buffetcomida.jpg";
import logo from "../assets/images/logos/logo.png";

export default function WhyUs() {
  return (
    <div className="relative">
      <header className="flex justify-between items-center mt-[10px]">
        <div className="flex justify-between flex-row w-[160px] h-[41px] items-center">
          <div className="rounded-full bg-logo w-[41px] h-[41px]">
            <p className="text-center leading-[41px] text-bold text-[26px] text-white font-bold">
              H
            </p>
          </div>
          <p className="text-[24px] text-logoP tracking-[0px] w-[107px] font-mulish font-bold">
            Hotel1
          </p>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className="justify-between m-[10px]">
          <ul className="w-[600px] h-[23px] flex flex-row justify-between text-[18px] font-regular text-selected">
            <li className="hover:font-bold">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/prices">Precios</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/contact">Contactos</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/about">Acerca</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/whyus">Nosotros</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            <Link to="/login">Iniciar Sesion</Link>
          </button>
          <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-cyan-500 hover:border-cyan-600">
            <Link to="/signup">Registrarse</Link>
          </button>
        </div>
      </header>
      <main className="flex flex-row justify-between">
        <div className="mt-[120px] w-[30%]">
          <h2 className="text-[48px] font-medium w-[426px] leading-[56px]">
            Tu hogar lejos de casa.
          </h2>
          <p className="font-light w-[445px] mt-[25px] text-text">
            Descubre la elegancia en cada detalle.
          </p>
          <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
            Conoce mas
          </button>
          {/* <div>
            <div>
              {items.map((item) => (
                <div key={item.id}>
                  <Link to={`/contact/${item.id}`}>{item.name}</Link>
                </div>
              ))}
            </div>
            <Outlet />
          </div> */}
        </div>
        <div className="w-[50%]">
          <img src={slide2} alt="Imagen de fondo" />
        </div>
      </main>
      <section className="my-[110px]"></section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p class="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$80/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Habitación Individual - Vista a la Ciudad
            </h3>
            <p class="text-gray-600">
              Experimenta la comodidad y la energía de la ciudad desde tu
              habitación privada.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$60/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Suite Deluxe - Terraza Privada
            </h3>
            <p class="text-gray-600">
              Disfruta de una estancia lujosa con tu propia terraza privada y
              todas las comodidades exclusivas.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$120/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Habitación Familiar - Vistas al Jardín
            </h3>
            <p class="text-gray-600">
              Ideal para familias, con hermosas vistas al jardín y espacio para
              todos.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$100/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Suite Ejecutiva - Piscina Privada
            </h3>
            <p class="text-gray-600">
              Experimenta el lujo con tu propia piscina privada y servicios
              ejecutivos de alta calidad.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$200/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Habitación Temática - Aventura en la Selva
            </h3>
            <p class="text-gray-600">
              Vive una experiencia única con una habitación temática que te
              transporta a la selva.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$90/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Habitación Deluxe - Servicio de Spa Incluido
            </h3>
            <p class="text-gray-600">
              Relájate y rejuvenece con nuestro servicio de spa exclusivo
              incluido en tu estancia.
            </p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-800">$150/noche</span>
              <button class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="flex justify-between items-center bg-white text-black p-10 w-full">
          <img
            src={habitacion}
            alt="Imagen de habitación"
            class="w-1/2 mr-4"
          ></img>
          <div class="flex flex-col w-[486px]">
            <h2 class="font-bold text-[36px]">
              Zariman: Donde el Lujo Encuentra su Hogar
            </h2>
            <Line />
            <p class="text-[18px] text-text">
              Descubre la cúspide del confort y el estilo en nuestras
              habitaciones exquisitamente diseñadas. ¡Tu escapada de ensueño
              comienza aquí!
            </p>
            <button className="w-[200px] h-[60px] rounded-[55px] border-2 border-textButton text-textButton mt-[62px] hover:bg-textButton hover:text-white font-bold transition duration-500">
              Ver más
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center bg-white text-black p-10 w-full">
          <div class="flex flex-col w-[486px]">
            <h2 class="font-bold text-[36px]">Sabor Inigualable en Zariman</h2>
            <Line />
            <p class="text-text text-[18px]">
              Embárcate en un festín para los sentidos en nuestro buffet de
              clase mundial. Sabores extraordinarios que harán de cada comida un
              deleite inolvidable. ¡Sumérgete en la excelencia culinaria en
              Zariman!
            </p>
            <button className="w-[200px] h-[60px] rounded-[55px] border-2 border-textButton text-textButton mt-[62px] hover:bg-textButton hover:text-white font-bold transition duration-500">
              Ver más
            </button>
          </div>
          <img src={buffet} alt="Imagen de habitación" class="w-1/2 ml-4"></img>
        </div>
      </section>

      <footer className="bg-blue-500 text-white p-5 w-full">
        <div className="mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 p-5">
              {/* s */}
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
              {/* s */}

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
    </div>
  );
}
