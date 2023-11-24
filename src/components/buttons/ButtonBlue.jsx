export default function ButtonBlue({ text }) {
  return (
    <button className="bg-textButton w-[200px] h-[60px] rounded-[55px] text-white mt-[49px] font-bold border-2 border-textButton hover:bg-white hover:text-textButton transition duration-500">
      {text}
    </button>
  );
}
