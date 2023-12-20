import CartaRendimientoHotel from "../components/items/CartaRendimientoHotel";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function GeneralManagement() {
  return (
    <>
      <Header />

      <body className="">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">
            Panel de Control del Administrador General
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Resumen de Hoteles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <CartaRendimientoHotel
                  nombre="Grand Plaza"
                  rendimiento={75}
                  habitacionesOcupadas={38}
                  totalHabitaciones={50}
                  estadoDeuda={false}
                />
              </div>
              <div>
                <CartaRendimientoHotel
                  nombre="Sunset View"
                  rendimiento={90}
                  habitacionesOcupadas={42}
                  totalHabitaciones={45}
                  estadoDeuda={false}
                />
              </div>
              <div>
                <CartaRendimientoHotel
                  nombre="Ocean Breeze"
                  rendimiento={85}
                  habitacionesOcupadas={30}
                  totalHabitaciones={40}
                  estadoDeuda={false}
                />
              </div>
              <div>
                <CartaRendimientoHotel
                  nombre="Mountain Retreat"
                  rendimiento={78}
                  habitacionesOcupadas={20}
                  totalHabitaciones={25}
                  estadoDeuda={false}
                />
              </div>
              <div>
                <CartaRendimientoHotel
                  nombre="City Lights Inn"
                  rendimiento={95}
                  habitacionesOcupadas={48}
                  totalHabitaciones={50}
                  estadoDeuda={true}
                />
              </div>
              <div>
                <CartaRendimientoHotel
                  nombre="Lakeside Lodge"
                  rendimiento={80}
                  habitacionesOcupadas={35}
                  totalHabitaciones={40}
                  estadoDeuda={true}
                />
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Gestión de Hoteles y Administradores
            </h2>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <Link to="/hotel-management">Gestionar Hoteles</Link>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                <Link to="/admin_users_hotels">Gestionar Administradores</Link>
              </button>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Estadísticas Globales
            </h2>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Ocupación Total</h3>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
