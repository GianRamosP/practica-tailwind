import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { items } from "../data/items";
import backgroundImg from "../assets/background.jpg";
import WhyUs from "./WhyUs";

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-row justify-between">
        <div className="mt-[120px] w-[30%]">
          <h2 className="text-[48px] font-medium w-[426px] leading-[56px]">
            Tu hogar lejos de casa.
          </h2>
          <p className="font-light w-[445px] mt-[25px] text-text">
            Descubre la elegancia en cada detalle.
          </p>
          <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold">
            Reserve aquí
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
          <img src={backgroundImg} alt="Imagen de fondo" />
        </div>
      </main>
      <section>
          <WhyUs/>
      </section>
      
      <footer className="bg-blue-500 text-white p-5 w-full">
  <div className="mx-auto">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 p-5">
        <h4 className="mb-4">Contacto</h4>
        <ul>
          <li><a>Dirección: Calle Principal, Ciudad</a></li>
          <li><a>Teléfono: (123) 456-7890</a></li>
          <li><a href="#">Email: info@hotelzariman.com</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 p-5">
        <h4 className="mb-4">Enlaces Rapidos</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Habitaciones</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Reservas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 p-5">
        <h4 className="mb-4">Redes Sociales</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      
    </div>
    <div className="mt-5 text-center">
      <p>© 2023 Tu Hotel. Todos los derechos reservados.</p>
    </div>
  </div>
  
</footer>

    </>
  );
}
