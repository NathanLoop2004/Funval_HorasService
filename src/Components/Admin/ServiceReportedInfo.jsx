/* Componente creado por Tomás */
import DefaultButton from "../Home/DefaultButton";

export default function ServiceReportedInfo({ isOpen, handleClose }) {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } bg-[#0f46ad79] w-full h-screen flex justify-center items-center z-20`}
    >
      <div className="bg-[#fff] w-[90%] h-[90%] rounded-xl flex flex-col overflow-y-scroll custom-scroll">
        <button
          onClick={handleClose}
          className="self-end fixed mr-[15px] bg-[#d81f1f] hover:cursor-pointer hover:bg-[#d81f1f] ease-in-out duration-200 rounded-full mt-[5px] sm:bg-[#fff]"
        >
          <img className="w-[40px]" src="/cross.svg" alt="close icon" />
        </button>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-end">
          <div className="w-[250px] ml-5">
            <DefaultButton
              text={"Evidencia"}
              image={"/drive-logo.webp"}
              textColor={"#333"}
            />
          </div>
          <button
            className={`px-3 py-2 text-[#fff] text-[18px] rounded-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-100 bg-[#0f47ad]`}
          >
            Cancelar
          </button>
        </div>

        <div className="my-5 grid grid-cols-1 ml-5 sm:grid-cols-2 gap-y-3 gap-x-3">
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Nombre del Estudiante
            </h3>
            <span className="font-semibold">Monkey D. Luffy</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              ID usuario
            </h3>
            <span className="font-semibold">3</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              ID reporte
            </h3>
            <span className="font-semibold">5</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Tipo de Servicio
            </h3>
            <span className="font-semibold">Templo e Historia Familiar</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">Status</h3>
            <span className="font-semibold">Pendiente</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Horas Reportadas
            </h3>
            <span className="font-semibold">6</span>
          </div>
        </div>
      </div>
    </div>
  );
}
