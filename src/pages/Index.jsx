import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { items } from "../data/items";
import backgroundImg from "../assets/background.jpg";

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
    </>
  );
}
