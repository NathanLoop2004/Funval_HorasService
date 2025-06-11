import DefaultButton from "../Components/Home/DefaultButton";

/* Componente hecho por Tomás */

export default function Home() {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[70px] bg-[#13131380]">
        este es un placeholder para el header
      </div>
      <div className="grid grid-cols-1 justify-items-center w-full max-w-[320px] sm:grid-cols-2 sm:max-w-[640px]">
        <DefaultButton
          action={handleClick}
          text={"Reportar horas de servicio"}
          image={"/homepage_service_bg.webp"}
        />
        <DefaultButton
          action={handleClick}
          text={"Ver horas de servicio"}
          image={"/homepage_service_bg2.webp"}
        />
      </div>
      <div className="w-[90%] max-w-[288px] h-[500px] bg-[#b4b4b4] mt-[18px] rounded-xl sm:max-w-[576px]">
        Acá iría el propósito
      </div>
      <div className="w-full h-[180px] bg-[#13131380] mt-[18px]">
        este es un placeholder para el footer
      </div>
    </div>
  );
}
