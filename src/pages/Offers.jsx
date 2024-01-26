import React from "react";
import FilterBar from "../components/FilterBar";
import RoomSale from "../components/RoomSale";
import camadoble from "../assets/images/rooms/camadoble.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/icons/WhatsappIcon";

export default function Offers() {
  return (
    <div>
      <Header />
      <div class="container mx-auto px-4">
        <div class="mx-auto my-16 max-w-6xl">
          <h2 class="mb-6 text-center text-[36px] font-bold text-gray-800">
            Ofertas por tiempo limitado de Habitaciones
          </h2>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <RoomSale
              imagen={camadoble}
              alt="Habitación en Oferta"
              titulo="Habitación Doble - Vista al Mar"
              descripcion="Disfruta de una experiencia inolvidable con vista al océano y todas las comodidades."
              precio="$80/noche"
            />
            <RoomSale
              imagen={camadoble}
              alt="Vista lateral de la Habitación Doble"
              titulo="Habitación Estándar - Vista a la Ciudad"
              descripcion="Una habitación cómoda con vista a la ciudad para una estancia relajante."
              precio="$90/noche"
            />

            <RoomSale
              imagen={camadoble}
              alt="Vista panorámica de la Habitación Doble"
              titulo="Suite Ejecutiva - Vista Panorámica al Mar"
              descripcion="Experimenta la grandeza del océano desde nuestra suite ejecutiva con vista panorámica."
              precio="$150/noche"
            />

            <RoomSale
              imagen={camadoble}
              alt="Vista desde arriba de la Habitación Doble"
              titulo="Habitación Familiar - Espaciosa y Confortable"
              descripcion="Ideal para familias, nuestra habitación familiar ofrece comodidad y espacio adicional."
              precio="$110/noche"
            />
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
}
