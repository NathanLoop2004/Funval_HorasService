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
      <h2 className="font-bold text-[24px] mt-[20px]">
        Sobre las horas de servicio
      </h2>
      <div className="w-[90%] max-w-[288px] bg-[#b4b4b4] mt-[20px] rounded-xl sm:max-w-[576px] grid grid-cols-1 justify-items-center">
        <div className="flex flex-col items-center max-w-[90%]">
          <img
            className="mt-[15px] rounded-xl"
            src="/info1.png"
            alt="joven indexando"
          />
          <p className="font-semibold text-[12px]">
            "Cuando os halláis al servicio de vuestros semejantes, cólo estáis
            al servicio de vuestro Dios" (Mosíah 2:17)
          </p>
          <h2 className="text-center text-[20px] font-bold my-[20px]">
            ¿Por qué reportamos horas de servicio en FUNVAL?
          </h2>
          <p>
            FUNVAL desea bendecir el mayor numero de vidas posibles, es por ello
            que pedimos a todos los beneficiarios de las becas de FUNVAL que de
            manera simbólica paguen su beca prestando servicio significativo al
            prójimo.
          </p>
          <img className="mt-[15px] rounded-xl" src="/info3.png" alt="" />
          <span className="my-[20px]">
            El presidente Spencer W. Kimball explicó:{" "}
            <span className="font-semibold">
              “Dios nos tiene en cuenta y vela por nosotros; pero por lo
              general, es por medio de otra persona que atiende a nuestras
              necesidades”
            </span>
          </span>
          <h2 className="text-center text-[20px] font-bold my-[20px]">
            Recomendaciones al reportar horas de servicio
          </h2>
          <ol>
            <li>
              <p>
                Las horas de servicio son la forma de pagar la beca que se te ha
                brindando, sino reportar tus horas cada mes no podrás disfrutar
                de los beneficios de la beca.
              </p>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
      <div className="w-full h-[180px] bg-[#13131380] mt-[18px]">
        este es un placeholder para el footer
      </div>
    </div>
  );
}
