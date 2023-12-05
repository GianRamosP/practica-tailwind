export default function ButtonDelete(props) {
  return (
    <button
      className="bg-colorButtonRed rounded-[4px] text-white font-bold px-2"
      onClick={props.onClick}
    >
      Eliminar
    </button>
  );
}
