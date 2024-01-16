import Header from "../components/Header";
import camadoble from "../assets/images/rooms/camadoble.jpg";

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

import { Link } from "react-router-dom";

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

        <div className="relative h-96 bg-gray-100">
          <img
            src={slide4}
            alt="Slide 1"
            className="h-full w-full object-cover"
          />

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-start">
            <div className="m-12 rounded-lg bg-white bg-opacity-75 p-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="mt-[49px] h-[60px] w-[200px] rounded-[55px] border-2 border-textButton bg-textButton font-bold text-white transition duration-500 hover:bg-white hover:text-textButton">
                <Link to="/filter">Reserve aquí</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-96 bg-gray-100">
          <img
            src={slide5}
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-start">
            <div className="m-12 rounded-lg bg-white bg-opacity-75 p-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="mt-[49px] h-[60px] w-[200px] rounded-[55px] border-2 border-textButton bg-textButton font-bold text-white transition duration-500 hover:bg-white hover:text-textButton">
                <Link to="/filter">Reserve aquí</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-96 bg-gray-100">
          <img
            src={slide6}
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-start">
            <div className="m-12 rounded-lg bg-white bg-opacity-75 p-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Encuentra tu hotel ideal
              </h2>
              <p className="text-gray-700">
                Explora las mejores ofertas y reserva tu estancia perfecta.
              </p>
              <button className="mt-[49px] h-[60px] w-[200px] rounded-[55px] border-2 border-textButton bg-textButton font-bold text-white transition duration-500 hover:bg-white hover:text-textButton">
                <Link to="/filter">Conoce más</Link>
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      <div>
        <section className="my-[110px]">
          <Services />
        </section>
        <section>
          <Listing />
        </section>
      </div>

      <body>
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
      </body>
      <Footer />
    </>
  );
}
