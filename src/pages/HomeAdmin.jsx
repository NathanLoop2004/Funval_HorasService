import DefaultButton from "../Components/Home/DefaultButton";

/* Componente creado por Tomás */

export default function HomeAdmin() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[70px] bg-[#fff]">
        este es un placeholder para el header
      </div>
      <div className="grid grid-cols-1 justify-items-center w-full max-w-[320px] sm:grid-cols-2 sm:max-w-[640px]">
        <DefaultButton
          text={"Listar usuarios"}
          image={"/admin-service-bg.webp"}
        />
        <DefaultButton
          text={"Revisar horas de servicio"}
          image={"/homepage_service_bg2.webp"}
        />
        <DefaultButton text={"Ver países"} image={"/admin-service-bg2.webp"} />
        <DefaultButton
          text={"Ver escuelas"}
          image={"/admin-service-bg3.webp"}
        />
      </div>

      <h2 className="font-bold text-[24px] mt-[20px] w-full max-w-[310px] text-center rounded-lg text-[#dadada] bg-[#0f47ad] sm:max-w-[600px]">
        Sobre las horas de servicio
      </h2>
      <div className="w-[90%] max-w-[288px] bg-[#f2f3f7] mt-[20px] rounded-xl sm:max-w-[600px] grid grid-cols-1 justify-items-center">
        <div className="flex flex-col items-center max-w-[90%]">
          <img
            className="mt-[15px] rounded-xl"
            src="/info1.png"
            alt="joven indexando"
          />
          <p className="font-semibold text-[12px]">
            "Cuando os halláis al servicio de vuestros semejantes, sólo estáis
            al servicio de vuestro Dios" (Mosíah 2:17)
          </p>
          <h2 className="text-center text-[20px] font-bold my-[20px] text-[#dadada] bg-[#0f47ad] w-full rounded-lg">
            ¿Por qué reportamos horas de servicio en FUNVAL?
          </h2>
          <p>
            FUNVAL desea bendecir el mayor numero de vidas posibles, es por ello
            que pedimos a todos los beneficiarios de las becas de FUNVAL que de
            manera simbólica paguen su beca prestando servicio significativo al
            prójimo.
          </p>
          <img
            className="mt-[15px] rounded-xl"
            src="/info3.png"
            alt="mujeres ayudando"
          />
          <span className="my-[20px]">
            El presidente Spencer W. Kimball explicó:{" "}
            <span className="font-semibold">
              “Dios nos tiene en cuenta y vela por nosotros; pero por lo
              general, es por medio de otra persona que atiende a nuestras
              necesidades”
            </span>
          </span>
          <h2 className="text-center text-[20px] font-bold my-[20px] text-[#dadada] bg-[#0f47ad] w-full rounded-lg">
            Recomendaciones al reportar horas de servicio
          </h2>
          <img
            className="rounded-xl mt-[20px]"
            src="/info2.png"
            alt="mujer joven en el templo"
          />
          <ol className="list-outside list-decimal max-w-[80%]">
            <li className="my-[15px]">
              <p>
                Las horas de servicio son la forma de pagar la beca que se te ha
                brindando, si no reportas tus horas cada mes no podrás disfrutar
                de los beneficios de la beca.
              </p>
            </li>
            <li className="my-[15px]">
              <p>
                Asegurate de subir fotos de{" "}
                <span className="font-bold">antes</span>,{" "}
                <span className="font-bold">durante</span> y{" "}
                <span className="font-bold">después</span> del servicio en un
                archivo <span className="font-bold">PDF</span> o{" "}
                <span className="font-bold">Word</span> (Si no apareces en
                ninguna de las fotos no será aceptado tu servicio). Esperamos
                que las fotos que subas reflejen un impacto significativo en las
                personas.
              </p>
            </li>
            <li className="my-[15px]">
              <p>
                Asegúrate de no combinar los servicios que vas a reportar es
                decir llena el formulario por cada tipo de servicio que hagas.
              </p>
            </li>
            <li className="my-[15px]">
              <p>
                Las horas de servicio no son acumulativas, así que asegúrate de
                solo reportar las horas requeridas para el nivel/modulo que
                estas cursando.
              </p>
            </li>
          </ol>
          <h2 className="font-bold text-[20px] text-center my-[20px] text-[#dadada] bg-[#0f47ad] w-full rounded-lg">
            Principales actividades que cuentan como servicio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service1.png"
                alt="Referir a un amigo"
              />
              <h3 className="font-semibold text-center">Referir a un amigo</h3>
            </button>
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service2.png"
                alt="Actividades presenciales de servicio"
              />
              <h3 className="font-semibold text-center">
                Actividades presenciales de servicio
              </h3>
            </button>
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service3.png"
                alt="Actividades de templo e historia familiar"
              />
              <h3 className="font-semibold text-center">
                Actividades de templo e historia familiar
              </h3>
            </button>
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service4.png"
                alt="Otros servicios"
              />
              <h3 className="font-semibold text-center">
                Otros servicios (considerados en Funval)
              </h3>
            </button>
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service5.png"
                alt="Actividad de la brújula"
              />
              <h3 className="font-semibold text-center">
                Actividad de la brújula
              </h3>
            </button>
            <button className="flex flex-col items-center hover:scale-105 ease-in-out duration-100 cursor-pointer">
              <img
                className="rounded-xl mt-[20px]"
                src="/service6.png"
                alt="Actividades grupales en Funval"
              />
              <h3 className="font-semibold text-center">
                Actividades grupales en Funval
              </h3>
            </button>
          </div>
          <button className="text-[#dadada] text-[20px] bg-[#0f47ad] px-3 py-2 my-[25px] rounded-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-100">
            <a href="#">Volver al inicio</a>
          </button>
        </div>
      </div>
    </div>
  );
}
