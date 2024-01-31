import { Link } from "react-router-dom";
import Login from "../pages/Login";
import FormLogin from "./login/FormLogin";

export default function Header() {
  return (
    <header className="mx-[100px] my-[23px] flex items-center justify-between">
      <div className="flex h-[41px] w-[160px] flex-row items-center justify-between">
        <div className="h-[41px] w-[41px] rounded-full bg-logo">
          <p className="text-bold text-center text-[26px] font-bold leading-[41px] text-white">
            H
          </p>
        </div>
        <Link to="/">
          <p className="font-mulish w-[107px] text-[24px] font-bold tracking-[0px] text-logoP">
            Hotel
          </p>
        </Link>
      </div>

      <nav className="m-[10px] justify-around">
        <ul className="font-regular flex h-[23px] w-[600px] flex-row justify-between text-[18px] text-selected">
          <li className="hover:font-bold">
            <Link to="/">Inicio</Link>
          </li>
          {/* <li className="hover:font-bold">
            <Link to="/prices">Precios</Link>
          </li> */}
          <li className="hover:font-bold">
            <Link to="/offers">Ofertas</Link>
          </li>
          {/* <li className="hover:font-bold">
            <Link to="/contact">Contactos</Link>
          </li> */}
          {/* <li className="hover:font-bold">
            <Link to="/about">Acerca</Link>
          </li> */}
          <li className="hover:font-bold">
            <Link to="/whyus">Nosotros</Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/admin">Administrar</Link>
          </li>
        </ul>
      </nav>

      <FormLogin />
    </header>
  );
}
