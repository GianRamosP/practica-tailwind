import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-[10px]">
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

      <nav className="justify-between m-[10px]">
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

      <div className="ml-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          <Link to="/login">Iniciar Sesion</Link>
        </button>
        <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-cyan-500 hover:border-cyan-600">
          <Link to="/signup">Registrarse</Link>
        </button>
      </div>
    </header>
  );
}
