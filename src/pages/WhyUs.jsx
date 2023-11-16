
import utencilios from "../assets/utensils-solid.svg";
import Conectividad from "../assets/wifi-solid.svg";
import comodidad from "../assets/couch-solid.svg";
import clothcare from "../assets/shirt-solid.svg";
import lavanderia from "../assets/jug-detergent-solid.svg";
import reunion from "../assets/handshake-regular.svg";
import habitacion from "../assets/habitacion.jpg";
import buffet from "../assets/buffetcomida.jpg";
export default function WhyUs() {
  return (
    <>
      
      <div>
        <h4 class="text-center text-xl font-bold mt-12 pb-2 border-b border-gray-200">Nuestros Servicios</h4>
        <div class="grid grid-cols-3 gap-4">

        <div class="card bg-white shadow-md rounded-2xl p-10">  
        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={utencilios} alt="utencilios" class="w-6 h-6"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Exquisita Gastronomía</h2>
  <p class="text-gray-600 text-base font-light">Disfruta de una experiencia culinaria inolvidable en nuestro restaurante de clase mundial o relájate con el servicio de habitaciones, donde la deliciosa comida llega directamente a tu puerta.</p>
</div>

<div class="card bg-white shadow-md rounded-2xl p-10">
<div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={Conectividad} alt="Conectividad" class="w-6 h-6"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Conectividad sin Límites</h2>
  <p class="text-gray-600 text-base font-light">Mantente conectado con nuestro acceso Wi-Fi de alta velocidad en todas las áreas, garantizando que estés siempre conectado, ya sea por negocios o placer.</p>
</div>

<div class="card bg-white shadow-md rounded-2xl p-10">
<div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={comodidad} alt="comodidad" class="w-6 h-6 flex items-center"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Bienestar Integral</h2>
  <p class="text-gray-600 text-base font-light">Descubre la serenidad en nuestro spa de primer nivel y mantente en forma en nuestro moderno gimnasio, diseñado para tu bienestar físico y mental.</p>
</div>

<div class="card bg-white shadow-md rounded-2xl p-10">
<div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={clothcare} alt="clothcare" class="w-6 h-6 flex items-center"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Cuidado de la Ropa sin Preocupaciones</h2>
  <p class="text-gray-600 text-base font-light">Olvídate de las preocupaciones diarias con nuestro servicio de lavandería y tintorería, asegurando que luzcas impecable durante toda tu estancia.</p>
</div>

<div class="card bg-white shadow-md rounded-2xl p-10">
<div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={lavanderia} alt="lavanderia" class="w-6 h-6 flex items-center"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Servicio de Lavandería</h2>
  <p class="text-gray-600 text-base font-light">Experimenta la frescura y limpieza incomparables. Utilizamos tecnologías de vanguardia y productos de calidad para dejar tus prendas como nuevas.</p>
</div>

<div class="card bg-white shadow-md rounded-2xl p-10">
<div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white mb-4">
      <img src={reunion} alt="reunion" class="w-6 h-6 flex items-center"></img>
    </div>
  <h2 class="font-bold text-2xl mb-2">Centro de Negocios y Salas de Reuniones</h2>
  <p class="text-gray-600 text-base font-light">Con nuestro centro de negocios y salas de reuniones equipadas con la última tecnología, ofrecemos el entorno perfecto para el éxito de tus reuniones y eventos.</p>
</div>

  




        </div>
        
        <div class="flex justify-center mt-6">
    <button class="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold">
      Más información
    </button>
  </div>
      </div>
      
      <div class="flex justify-start items-center bg-white text-black p-10">
  <img src={habitacion} alt="Imagen de habitación" class="w-1/2 mr-4"></img>
  <div class="flex flex-col items-center w-1/2">
    <h1 class="text-2xl text-center font-bold mb-2">"Zariman: Donde el Lujo Encuentra su Hogar"</h1>
    <p class="text-center mb-4">Descubre la cúspide del confort y el estilo en nuestras habitaciones exquisitamente diseñadas. ¡Tu escapada de ensueño comienza aquí!</p>
    <button class="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold">
      Conoce nuestras habitaciones
    </button>
  </div>
</div>

<div class="flex justify-start items-center bg-white text-black p-10">
  <div class="flex flex-col items-center w-1/2">
    <h1 class="text-2xl font-bold mb-2 text-center">"Sabor Inigualable en Zariman: Deléitate con Nuestra Exquisita Experiencia Gastronómica"</h1>
    <p class="text-center mb-4">Embárcate en un festín para los sentidos en nuestro buffet de clase mundial. Sabores extraordinarios que harán de cada comida un deleite inolvidable. ¡Sumérgete en la excelencia culinaria en Zariman!</p>
    <button class="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold">
      Conoce la cartilla de platos
    </button>
  </div>
  <img src={buffet} alt="Imagen de habitación" class="w-1/2 ml-4"></img>
</div>



    </>
  );
}
