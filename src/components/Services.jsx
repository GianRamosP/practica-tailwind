import ServicesItems from "./items/ServicesItems";
import bgFrame from "../assets/bg/Frame.png";
import Line from "./Line";
import ButtonWhite from "./buttons/ButtonWhite";

import IconSearch from "../assets/icons/icon_search.png";
import IconWifi from "../assets/icons/icon_wifi.png";
import IconClothes from "../assets/icons/icon_clothes.png";
import IconBusiness from "../assets/icons/icon_business.png";
import IconWash from "../assets/icons/icon_wash.png";
import IconCaring from "../assets/icons/icon_caring.png";

export default function Services() {
  return (
    <div className="relative flex flex-col items-center gap-y-4 text-center">
      <img
        className="absolute -left-[260px] top-[60px] h-[671px] w-[937px] rotate-[22deg] transform opacity-95"
        src={bgFrame}
        alt=""
      />
      <h2 className="text-[36px] font-bold">Nuestros servicios</h2>
      <Line />
      <p className="w-[952px] text-[18px] text-text">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="mt-[50px] grid w-[1120px] grid-cols-3 gap-x-4 gap-y-6">
        <ServicesItems
          img={IconSearch}
          subtile="Exquisita gastronomía"
          p="Disfruta de una experiencia culinaria inolvidable en nuestro
              restaurante de clase mundial o relájate con el servicio de
              habitaciones, donde la deliciosa comida llega directamente a tu
              puerta."
        />
        <ServicesItems
          img={IconWifi}
          subtile="Conectividad sin límites"
          p="Mantente conectado con nuestro acceso Wi-Fi de alta velocidad en
          todas las áreas, garantizando que estés siempre conectado, ya sea
          por negocios o placer."
        />
        <ServicesItems
          img={IconCaring}
          subtile="Bienestar Integral"
          p="Descubre la serenidad en nuestro spa de primer nivel y mantente en
              forma en nuestro moderno gimnasio, diseñado para tu bienestar
              físico y mental."
        />

        <ServicesItems
          img={IconClothes}
          subtile="Cuidado de la Ropa sin Preocupaciones"
          p="Olvídate de las preocupaciones diarias con nuestro servicio de
          lavandería y tintorería, asegurando que luzcas impecable durante
          toda tu estancia."
        />
        <ServicesItems
          img={IconWash}
          subtile="Servicio de Lavandería"
          p="Experimenta la frescura y limpieza incomparables. Utilizamos
          tecnologías de vanguardia y productos de calidad para dejar tus
          prendas como nuevas."
        />
        <ServicesItems
          img={IconBusiness}
          subtile="Centro de Negocios y Salas de Reuniones"
          p="Con nuestro centro de negocios y salas de reuniones equipadas con
          la última tecnología, ofrecemos el entorno perfecto para el éxito
          de tus reuniones y eventos."
        />
      </div>
    </div>
  );
}
