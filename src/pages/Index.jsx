import Header from "../components/Header";
import camadoble from "../assets/camadoble.jpg";
import cama1 from "../assets/cama1.jpg";
import cama2 from "../assets/cama2.jpg";
import cama3 from "../assets/cama3.jpg";
import cama4 from "../assets/cama4.jpg";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";
import HotelBusqueda from "../components/items/HotelBusqueda";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import FilterBar from "../components/FilterBar";
import RoomSale from "../components/RoomSale";

export default function Index() {
  return (
    <>
      <Header />
      <Carousel
        className="h-1/2 "
        showThumbs={false}
        autoPlay
        interval={3000}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className="relative bg-gray-100 h-96">
          <img
            src={slide4}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
            <div className="bg-white bg-opacity-75 p-6 m-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
                Reserve aquí
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-100 h-96">
          <img
            src={slide5}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
            <div className="bg-white bg-opacity-75 p-6 m-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
                Reserve aquí
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-100 h-96">
          <img
            src={slide6}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
            <div className="bg-white bg-opacity-75 p-6 m-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
                Conoce mas
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      <body>
        <FilterBar />

        <div class="container mx-auto px-4">
          <div
            className="max-w-2xl mx-auto my-10"
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

        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto my-10">
            <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">
              Ofertas por tiempo limitado de Habitaciones
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div class="text-center my-8">
          <h3 class="text-2xl font-semibold text-gray-700">
            ¿Buscas un hotel en específico?
          </h3>
        </div>

        {/* Barra de búsqueda */}
        <div class="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Ingresa el nombre del hotel"
            class="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            // Añade aquí las funciones para manejar la búsqueda
          />
        </div>

        {/* Lista de hoteles en tarjetas */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Itera sobre la lista de hoteles y crea una tarjeta para cada uno */}
          <HotelBusqueda
            image={camadoble}
            hotelName="Hotel Los Andes"
            description="Ubicado en el corazón de la ciudad, cerca de atracciones principales. Incluye Wi-Fi gratis, piscina y desayuno."
            price="100"
          />
        </div>
      </body>
      <Footer />
    </>
  );
}
