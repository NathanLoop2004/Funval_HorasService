/* Componente creado por Tomás */
import { useState } from "react";
import DefaultButton from "../Home/DefaultButton";

export default function UserServiceInfo({ isOpen, handleClose, service }) {
  const [hoursApproved, setHoursApproved] = useState(0);
  const [enableApprove, setEnableApprove] = useState(false);

  const handleChange = (e) => {
    setHoursApproved(parseInt(e.target.value));
    setEnableApprove(true);
  };

  const handleReject = () => {
    setHoursApproved(0);
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } bg-[#0f46ad79] w-full h-screen flex justify-center items-center z-20`}
    >
      <form className="bg-[#fff] w-[90%] h-[90%] rounded-xl flex flex-col overflow-y-scroll custom-scroll">
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
            onClick={handleReject}
            className={`${
              service?.status === "Pending" ? "block" : "hidden"
            } px-3 py-2 text-[#fff] text-[18px] rounded-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-100 bg-[#d81f1f]`}
          >
            Rechazar
          </button>
          <button
            className={`${
              service?.status === "Pending" &&
              enableApprove &&
              hoursApproved !== 0
                ? "block"
                : "hidden"
            } px-3 py-2 text-[#fff] text-[18px] rounded-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-100 bg-[#1fd838]`}
          >
            Aprobar
          </button>
        </div>

        <div className="my-5 grid grid-cols-1 ml-5 sm:grid-cols-2 gap-y-3 gap-x-3">
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Nombre del Estudiante
            </h3>
            <span className="font-semibold">{service?.user?.full_name}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              ID usuario
            </h3>
            <span className="font-semibold">{service?.user?.id}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              ID reporte
            </h3>
            <span className="font-semibold">{service?.id}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Tipo de Servicio
            </h3>
            <span className="font-semibold">{service?.category?.name}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">Status</h3>
            <span className="font-semibold">{service?.status}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Horas Reportadas
            </h3>
            <span className="font-semibold">{service?.amount_reported}</span>
          </div>
          {service?.status === "Pending" ? (
            <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
              <h3 className="font-semibold text-[20px] text-[#0f47ad]">
                Horas Aprobadas
              </h3>
              <input
                name="approved_hours"
                onChange={handleChange}
                className="w-[90%]"
                placeholder="Cantidad de horas aprobadas"
                type="number"
                min={0}
                max={parseInt(service?.amount_reported)}
              />
            </div>
          ) : (
            ""
          )}
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg h-auto">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Descripción
            </h3>
            <span className="font-semibold">{service?.description}</span>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Comentario
            </h3>
            {service?.status === "Pending" ? (
              <textarea
                name="comment"
                className="w-[90%] min-h-[100px]"
                placeholder="Enviar comentario"
              />
            ) : (
              <span className="font-semibold">
                {service?.comment ? service?.comment : "Sin comentarios"}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
