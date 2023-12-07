export default function ButtonEdit(props) {
  return (
    <button
      className="bg-textButton rounded-[4px] text-white font-bold px-2 mr-2"
      onClick={props.onClick}
    >
      Editar
    </button>
  );
}
