import ServiceCard from "./ServiceCard";

// Componente creado por Tomás

export default function HoursModal({ isOpenHours, closeModal }) {
  const handleClose = () => {
    closeModal();
  };

  return (
    <div
      className={`bg-[#0f46ad79] ${
        isOpenHours ? "fixed" : "hidden"
      } w-full h-screen flex justify-center items-center z-20`}
    >
      <div className="bg-[#fff] w-[90%] h-[90%] rounded-xl flex flex-col items-center">
        <button
          onClick={handleClose}
          className="self-end mr-[15px] hover:cursor-pointer hover:bg-[#d81f1f] ease-in-out duration-200 rounded-full mt-[5px]"
        >
          <img className="w-[40px]" src="/cross.svg" alt="close icon" />
        </button>
        <p className="text-[24px] px-5 font-semibold text-[#fff] bg-[#0f47ad] text-center sm:text-[30px] sm:px-15 rounded-xl mb-5">
          Horas de servicio reportadas
        </p>
        <div className="bg-[#ebebeb] h-[65%] w-[90%] max-w-[850px] grid grid-cols-1 justify-items-center overflow-scroll scroll-hidden pb-2">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <button className="text-[30px] font-semibold text-[#fff] px-[13px] bg-[#0f47ad] flex items-center justify-center rounded-xl mt-[10px] hover:cursor-pointer hover:scale-110 ease-in-out duration-100">
          +
        </button>
      </div>
    </div>
  );
}
