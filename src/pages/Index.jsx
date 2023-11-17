import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { items } from "../data/items";
import backgroundImg from "../assets/background.jpg";

import WhyUs from "./WhyUs";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Listing from "../components/Listing";

export default function Index() {
  return (
    <div className="relative">
      <Header />
      <main className="flex flex-row justify-between">
        <div className="mt-[120px] w-[30%]">
          <h2 className="text-[48px] font-medium w-[426px] leading-[56px]">
            Tu hogar lejos de casa.
          </h2>
          <p className="font-light w-[445px] mt-[25px] text-text">
            Descubre la elegancia en cada detalle.
          </p>
          <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
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
      <section className="my-[110px]">
        <Services />
      </section>
      <section>
        <Listing />
      </section>
      <Footer />
    </div>
  );
}
