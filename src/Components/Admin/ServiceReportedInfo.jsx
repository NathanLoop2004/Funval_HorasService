/* Componente creado por Tomás */
import { useEffect, useState } from "react";
import { ServiciosHechosID } from "../../axios/Formulario";
import ServiceCard from "../Home/ServiceCard";
import UserServiceInfo from "./UserServiceInfo";

export default function ServiceReportedInfo({ isOpen, handleClose, userId }) {
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [serviceInfo, setServiceInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await ServiciosHechosID(userId?.toString());
        setServiceInfo(data);
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, [userId]);

  const handleClick = () => {
    setIsOpenInfo((prev) => {
      return !prev;
    });
  };

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

        <div className="my-5 grid grid-cols-1 gap-y-3 justify-items-center">
          <div className="bg-[#ebebeb] w-[90%] px-2 py-1 rounded-lg justify-items-center">
            {serviceInfo.length > 0 ? (
              serviceInfo.map((service) => {
                return (
                  <ServiceCard
                    servicio={service}
                    action={handleClick}
                    key={service?.id}
                  />
                );
              })
            ) : (
              <div className="text-[24px] font-semibold text-[#772727]">
                No hay datos para mostrar
              </div>
            )}
          </div>
        </div>
      </div>
      <UserServiceInfo isOpen={isOpenInfo} handleClose={handleClick} />
    </div>
  );
}
