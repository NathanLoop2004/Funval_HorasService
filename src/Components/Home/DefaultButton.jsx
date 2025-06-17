/* Componente hecho por Tomás */

export default function DefaultButton({ action, text, image }) {
  return (
    <button
      onClick={action}
      style={{ backgroundImage: `url(${image})` }}
      className="w-[90%] h-[250px] bg-[url(${image})] bg-center bg-cover mt-[18px] rounded-xl flex flex-col items-center justify-end cursor-pointer hover:scale-105 ease-in-out duration-100"
    >
      <div className="mb-[25px]">
        <span className="text-[#e6e6e6] text-[20px] font-semibold">{text}</span>
      </div>
    </button>
  );
}
