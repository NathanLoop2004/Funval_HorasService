/* Componente creado por Tomás */

import ServiceReportedCard from "../Components/Admin/ServiceReportedCard";
import { useState, useEffect } from "react";
import ServiceReportedInfo from "../Components/Admin/ServiceReportedInfo";
import { TraerUsuarios } from "../axios/Formulario";
import { useNavigate } from "react-router";

export default function ReviewServices() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleClick = (id) => {
    if (!isOpen) {
      setSelectedUserId(id);
    }

    setIsOpen((prev) => {
      return !prev;
    });
  };

  const handleNavigateHomeAdmin = () => {
    navigate("/admin");
    window.scrollTo(0, 0)
  };

  const [infoUsuarios, setInfoUsuarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await TraerUsuarios();

        setInfoUsuarios(data);
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="h-[70px]"></div>
      <h1 className="text-[24px] px-5 font-semibold text-[#fff] bg-[#0f47ad] text-center sm:text-[30px] sm:px-15 rounded-xl my-5">
        Listado de horas de servicio reportadas
      </h1>
      <div className="w-[90%] bg-[#ebebeb] min-h-[180px] rounded-lg grid grid-cols-1 justify-items-center max-w-[650px] pb-3">
        {infoUsuarios.map((usuarios) => (
          <ServiceReportedCard
            key={usuarios.id}
            action={() => handleClick(usuarios.id)}
            usuarios={usuarios}
          />
        ))}
      </div>
      <ServiceReportedInfo
        isOpen={isOpen}
        handleClose={handleClick}
        userId={selectedUserId}
      />
      <button className="w-[50%] py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 mt-10 mb-10" onClick={handleNavigateHomeAdmin}>
        Voler al Inicio
      </button>
    </div>
  );
}
