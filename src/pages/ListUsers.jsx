/* Componente creado por Tomás */

import { useState, useEffect } from "react";
import UserCard from "../Components/Admin/UserCard";
import UserInfo from "../Components/Admin/UserInfo";
import { TraerUsuarios } from "../axios/Formulario";
import { useNavigate } from "react-router";
export default function ListUsers() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const [selectedUserId, setSelectedUserId] = useState(null);

const handleClickID = (id) => {
  setSelectedUserId(String(id));
  console.log(selectedUserId)
  setIsOpen(true);
  
  // Aquí puedes hacer lo que quieras con el id
  console.log("ID del usuario clickeado:", id);
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
  



 const navigate = useNavigate();

   const handleNavigateHome = () => {
    navigate("/admin");
  };








  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="h-[70px]"></div>
      <h1 className="text-[24px] px-5 font-semibold text-[#fff] bg-[#0f47ad] text-center sm:text-[30px] sm:px-15 rounded-xl my-5">
        Listado de usuarios registrados
      </h1>
      
    
      <div className="w-[90%] bg-[#ebebeb] min-h-[180px] rounded-lg grid grid-cols-1 justify-items-center max-w-[650px] pb-3">
      {infoUsuarios.map(usuarios => (
        <UserCard
          key={usuarios.id}
          userId={usuarios.id}
          action={() => handleClickID(usuarios.id)}
          onClick={handleClick}
          usuarios={usuarios}
        />
      ))}
        
      </div>
     {  <UserInfo isOpen={isOpen} closeModal={handleClick} userId={selectedUserId} />}
      <button className="w-[50%] py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 mt-10 mb-10" onClick={handleNavigateHome}>
        Voler al Inicio
      </button>
    </div>
  );
}
