import ServicesItems from "./items/ServicesItems";
import bgFrame from "../assets/bg/Frame.png";
import Line from "./Line";
import ButtonWhite from "./buttons/ButtonWhite";

export default function Services() {
  return (
    <div className="text-center flex flex-col items-center gap-y-4 relative">
      <img
        className="absolute opacity-95 -left-[260px] top-[60px] transform rotate-[22deg] w-[937px] h-[671px]"
        src={bgFrame}
        alt=""
      />
      <h2 className="font-bold text-[36px]">Nuestros servicios</h2>
      <Line />
      <p className="text-[18px] text-text w-[952px]">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="grid grid-cols-3 w-[1120px] gap-x-4 gap-y-6 mt-[50px]">
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
      </div>

      <ButtonWhite />
    </div>
  );
}
