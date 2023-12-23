import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../assets/images/rooms/hotelimagen1.jpg";
import slide2 from "../assets/images/rooms/hotelimagen2.jpg";
import slide3 from "../assets/images/rooms/hotelimagen3.jpg";
import Services from "../components/Services";
import camadoble from "../assets/images/rooms/camadoble.jpg";
import logo from "../assets/images/logos/logo.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import habitacion from "../assets/images/rooms/habitacion.jpg";
import Line from "../components/Line";
import buffet from "../assets/images/amenities/buffetcomida.jpg";
import { Slider } from "@material-tailwind/react";

export default function AboutUs() {
  return (
    <>
      <header className="flex justify-between items-center mt-[10px]">
        <div className="flex justify-between flex-row w-[160px] h-[41px] items-center">
          <div className="rounded-full bg-logo w-[41px] h-[41px]">
            <p className="text-center leading-[41px] text-bold text-[26px] text-white font-bold">
              H
            </p>
          </div>
          <p className="text-[24px] text-logoP tracking-[0px] w-[107px] font-mulish font-bold">
            Hotel2
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

      <div className="mb-5"></div>
      <div className="mb-5 flex justify-center">
        <div class="flex justify-between items-center">
          <label for="hosts" class="mr-2">
            Número de huespedes:
          </label>
          <Slider color="blue" defaultValue={0} />
          <label for="price" class="mr-2 ml-4">
            Precio minimo:
          </label>

          <Slider color="blue" defaultValue={0} />

          <label for="price" class="mr-2 ml-4">
            Precio máximo:
          </label>
          <Slider color="blue" defaultValue={0} />
          <button class="ml-4 px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
            Buscar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={camadoble}
            alt="Habitación en Oferta"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Habitación Doble - Vista al Mar
            </h3>
            <p className="text-gray-600">
              Disfruta de una experiencia inolvidable con vista al océano y
              todas las comodidades.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">$80/noche</span>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5"></div>

      <Footer></Footer>
    </>
  );
}
