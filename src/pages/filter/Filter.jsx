import FilterBar from "../../components/FilterBar";
import Header from "../../components/Header";
import HotelBusqueda from "../../components/items/HotelBusqueda";

import cama1 from "../../assets/images/rooms/cama1.jpg";
import cama2 from "../../assets/images/rooms/cama2.jpg";
import cama3 from "../../assets/images/rooms/cama3.jpg";
import cama4 from "../../assets/images/rooms/cama4.jpg";
import camadoble from "../../assets/images/rooms/camadoble.jpg";

export default function Filter() {
  return (
    <div>
      <Header />
      <FilterBar />

      <div class="container mx-auto px-4">
        <div
          className="mx-auto my-10 max-w-2xl"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <HotelBusqueda
            image={camadoble}
            hotelName="Hotel Los Andes"
            description="Ubicado en el corazón de la ciudad, cerca de atracciones principales. Incluye Wi-Fi gratis, piscina y desayuno."
            price="100"
          />
          <HotelBusqueda
            image={cama1}
            hotelName="Hotel Primavera"
            description="Experimenta la comodidad en nuestras habitaciones de lujo. Incluye acceso a spa, desayuno gourmet y servicio a la habitación."
            price="120"
          />

          <HotelBusqueda
            image={cama2}
            hotelName="Hotel Oasis"
            description="Descansa en nuestras habitaciones frente al mar. Disfruta de la playa privada, piscina infinity y cena con vista al océano."
            price="150"
          />

          <HotelBusqueda
            image={cama3}
            hotelName="Hotel Montaña Azul"
            description="Sumérgete en la naturaleza en nuestro hotel de montaña. Senderismo, aire puro y cenas alrededor de la fogata te esperan."
            price="80"
          />

          <HotelBusqueda
            image={cama4}
            hotelName="Hotel Elegancia Urbana"
            description="Experimenta el estilo en el corazón de la ciudad. Acceso exclusivo a las mejores tiendas, restaurantes y vida nocturna."
            price="200"
          />
        </div>
      </div>

      <div class="my-8 text-center">
        <h3 class="text-2xl font-semibold text-gray-700">
          ¿Buscas un hotel en específico?
        </h3>
      </div>

      {/* Barra de búsqueda */}
      <div class="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Ingresa el nombre del hotel"
          class="w-full max-w-xl rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-300 focus:outline-none focus:ring"
          // Añade aquí las funciones para manejar la búsqueda
        />
      </div>

      {/* Lista de hoteles en tarjetas */}
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Itera sobre la lista de hoteles y crea una tarjeta para cada uno */}
        <HotelBusqueda
          image={camadoble}
          hotelName="Hotel Los Andes"
          description="Ubicado en el corazón de la ciudad, cerca de atracciones principales. Incluye Wi-Fi gratis, piscina y desayuno."
          price="100"
        />
      </div>
    </div>
  );
}
