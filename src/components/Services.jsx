import ItemService from "./ItemService";

export default function Services() {
  return (
    <div className="text-center flex flex-col items-center gap-y-4">
      <h2 className="font-bold text-[36px]">Our services</h2>
      <p className="text-[18px] text-text w-[952px]">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="grid grid-cols-3 w-[1120px] gap-4">
        <ItemService />
        <ItemService />
        <ItemService />
        <ItemService />
        <ItemService />
        <ItemService />
      </div>
    </div>
  );
}
