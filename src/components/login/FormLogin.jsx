import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <div className="flex ">
      <button className="bg-textButton hover:bg-blue-700 text-white font-bold w-26 h-10 px-2 rounded mr-2">
        <Link to="/login">Iniciar Sesion</Link>
      </button>
      <button className="bg-white hover:bg-gray-100 text-black font-bold w-26 h-10 px-2 rounded border border-cyan-500 hover:border-cyan-600">
        <Link to="/signup">Registrarse</Link>
      </button>
    </div>
  );
}
