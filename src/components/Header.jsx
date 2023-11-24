import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
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

      <nav className="justify-between m-[56px]">
        <ul className="w-[545px] h-[23px] flex flex-row justify-between text-[18px] font-regular text-selected">
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
    </header>
  );
}
