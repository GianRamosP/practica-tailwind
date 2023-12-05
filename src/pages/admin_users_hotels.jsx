import Header from "../components/Header";
import slide1 from "../assets/hotelimagen1.jpg";
import slide2 from "../assets/hotelimagen2.jpg";
import slide3 from "../assets/hotelimagen3.jpg";
import Slider from 'react-slick';

export default function AdministrarDuenos() {
  
      
    return (
      <>
<Header />

<body class="">
<div class="container mx-auto px-4">
  <div class="max-w-4xl mx-auto my-10">
    <div class="bg-white p-5 rounded-md shadow-sm">
      <h2 class="text-xl font-semibold text-gray-700 text-center">Gestión de Administradores</h2>
    
      <div class="overflow-x-auto mt-6">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Correo Electrónico
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Hotel Administrado
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
    
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Juan Pérez</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">juan.perez@hotel.com</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Hotel Los Andes</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button class="text-blue-500 hover:text-blue-600">Editar</button>
                <button class="text-red-500 hover:text-red-600">Eliminar</button>
              </td>
            </tr>
    
          </tbody>
        </table>
      </div>
    
      <div class="mt-6">
        <h3 class="text-lg font-semibold text-gray-700">Agregar Administrador</h3>
        <form action="/ruta-para-agregar-administrador" method="post" class="space-y-4">
          <div>
            <label for="nombre" class="block text-sm text-gray-600">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100" />
          </div>
          <div>
            <label for="email" class="block text-sm text-gray-600">Correo Electrónico</label>
            <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100" />
          </div>
          <div>
            <label for="hotel_administrado" class="block text-sm text-gray-600">Hotel Administrado</label>
            <input type="text" id="hotel_administrado" name="hotel_administrado" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100" />
          </div>
          <div class="text-right">
            <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body>
</>
);
}
