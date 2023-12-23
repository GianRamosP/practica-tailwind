import { Link } from "react-router-dom";
import Login from "../pages/Login";
import FormLogin from "./login/FormLogin";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-[23px] mx-[100px]">
      <div className="flex justify-between flex-row w-[160px] h-[41px] items-center">
        <div className="rounded-full bg-logo w-[41px] h-[41px]">
          <p className="text-center leading-[41px] text-bold text-[26px] text-white font-bold">
            H
          </p>
        </div>
        <p className="text-[24px] text-logoP tracking-[0px] w-[107px] font-mulish font-bold">
          Casa andina
        </p>
      </div>

      <nav className="justify-around m-[10px]">
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

      <FormLogin />
    </header>
  );
}
