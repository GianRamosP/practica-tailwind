import Header from "../components/Header";
import camadoble from "../assets/images/rooms/camadoble.jpg";
import cama1 from "../assets/images/rooms/cama1.jpg";
import cama2 from "../assets/images/rooms/cama2.jpg";
import cama3 from "../assets/images/rooms/cama3.jpg";
import cama4 from "../assets/images/rooms/cama4.jpg";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";

import Services from "../components/Services";
import Listing from "../components/Listing";
import ButtonBlue from "../components/buttons/ButtonBlue";

import HotelBusqueda from "../components/items/HotelBusqueda";
import slide4 from "../assets/images/amenities/slide4.jpg";
import slide5 from "../assets/images/amenities/slide5.jpg";
import slide6 from "../assets/images/amenities/slide6.jpg";
import FilterBar from "../components/FilterBar";
import RoomSale from "../components/RoomSale";

export default function Index() {
  return (
    <>
      <Header />

      <main className="flex flex-row justify-between mx-[100px]">
        <div className="mt-[120px] w-[30%]">
          <h2 className="text-[48px] font-medium w-[426px] leading-[56px]">
            Tu hogar lejos de casa.
          </h2>
          <p className="font-light w-[445px] mt-[25px] text-text">
            Descubre la elegancia en cada detalle.
          </p>
          <ButtonBlue text="Reserve aquí" />
        </div>
      </main>

      <div className="flex justify-center mb-8 mx-[100px]">
        <input
          type="text"
          placeholder="Ingresa el nombre del hotel"
          className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-[100px]">
        <HotelBusqueda
          image={camadoble}
          hotelName="Hotel Los Andes"
          description="Ubicado en el corazón de la ciudad, cerca de atracciones principales. Incluye Wi-Fi gratis, piscina y desayuno."
          price="100"
        />
      </div>
      <Footer />
    </>
  );
}
