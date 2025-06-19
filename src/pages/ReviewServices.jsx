/* Componente creado por Tomás */

import ServiceReportedCard from "../Components/Admin/ServiceReportedCard";
import { useState } from "react";
import ServiceReportedInfo from "../Components/Admin/ServiceReportedInfo";

export default function ReviewServices() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="h-[70px]"></div>
      <h1 className="text-[24px] px-5 font-semibold text-[#fff] bg-[#0f47ad] text-center sm:text-[30px] sm:px-15 rounded-xl my-5">
        Listado de horas de servicio reportadas
      </h1>
      <input
        className="bg-[#ebebeb] w-[80%] mb-5 px-3 rounded-xl h-[50px] lg:h-[30px] max-w-[500px]"
        type="text"
        placeholder="Filtrar por usuario"
      />
      <div className="w-[80%] flex items-center max-w-[500px] gap-2">
        <input
          className="bg-[#ebebeb] w-[50%] mb-5 px-3 rounded-xl h-[50px] lg:h-[30px]"
          type="number"
          placeholder="ID usuario"
          min={1}
        />
        <select
          className="bg-[#ebebeb] w-[50%] mb-5 px-3 rounded-xl h-[50px] lg:h-[30px]"
          name="Rol"
          id="role-select"
          defaultValue={"Todos"}
        >
          <option value="todos">Todos</option>
          <option value="referir">Referir a un amigo</option>
          <option value="presencial">
            Actividades presenciales de servicio
          </option>
          <option value="templo">
            Actividades de templo e historia familiar
          </option>
          <option value="otros">
            Otros servicios (considerados en Funval)
          </option>
          <option value="brujula">Actividad de la brújula</option>
          <option value="grupal">Actividades grupales en Funval</option>
        </select>
      </div>
      <div className="w-[90%] bg-[#ebebeb] min-h-[180px] rounded-lg grid grid-cols-1 justify-items-center max-w-[650px] pb-3">
        <ServiceReportedCard action={handleClick} />
        <ServiceReportedCard action={handleClick} />
        <ServiceReportedCard action={handleClick} />
        <ServiceReportedCard action={handleClick} />
      </div>
      <ServiceReportedInfo isOpen={isOpen} handleClose={handleClick} />
    </div>
  );
}
