import HotelInfo from "../components/items/HotelInfo";
import Header from "../components/Header";
export default function HotelManagement() {
  return (
    <>
      <Header />
      
<body class="">
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-6">Gestión de Hoteles</h1>

        
        <div class="mb-6">
            <h2 class="text-2xl font-semibold mb-4">Hoteles Existentes</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
            <HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/><HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/><HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/><HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/><HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/><HotelInfo
  nombreHotel="Hotel Plaza"
  descripcion="Un lujoso hotel con vistas impresionantes y servicio de primera."
  administrador="Juan Pérez"
/>

        
            </div>
        </div>

        
        <div class="mb-6">
  <h2 class="text-2xl font-semibold mb-4">Agregar Nuevo Hotel</h2>
  <form class="bg-white p-4 rounded-lg shadow-md">
    
    <div class="mb-4">
      <label for="hotelName" class="block text-sm font-medium text-gray-700">Nombre del Hotel</label>
      <input type="text" id="hotelName" name="hotelName" required
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Introduce el nombre del hotel"/>
    </div>
    
    <div class="mb-4">
      <label for="hotelDescription" class="block text-sm font-medium text-gray-700">Descripción</label>
      <textarea id="hotelDescription" name="hotelDescription" required
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Escribe una breve descripción del hotel"></textarea>
    </div>
    
    <div class="mb-4">
      <label for="adminName" class="block text-sm font-medium text-gray-700">Nombres del Administrador</label>
      <input type="text" id="adminName" name="adminName" required
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Introduce los nombres del administrador"/>
    </div>
    
    <div class="mb-4">
      <label for="adminLastName" class="block text-sm font-medium text-gray-700">Apellidos del Administrador</label>
      <input type="text" id="adminLastName" name="adminLastName" required
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Introduce los apellidos del administrador"/>
    </div>
    
    <div class="mb-4">
      <label for="adminDNI" class="block text-sm font-medium text-gray-700">DNI del Administrador</label>
      <input type="text" id="adminDNI" name="adminDNI" required
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Introduce el DNI del administrador"/>
    </div>
    
    <button type="submit"
        class="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
        Agregar Hotel
    </button>
  </form>
</div>

    </div>
</body>


    </>
  );
}
