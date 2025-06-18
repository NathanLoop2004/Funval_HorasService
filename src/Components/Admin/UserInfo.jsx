import { useState } from "react";

export default function UserInfo({ isOpen, closeModal }) {
  const [enableEdit, setenableEdit] = useState(false);

  const handleEdit = () => {
    setenableEdit((prev) => {
      return !prev;
    });
  };

  const handleClose = () => {
    closeModal();
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
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-end">
          <img
            className="mt-12 w-[200px] sm:ml-5"
            src="https://placehold.co/200x200"
            alt="foto de usuario"
          />
          <button
            className="bg-[#0f47ad] px-3 py-2 text-[#fff] text-[18px] rounded-lg hover:cursor-pointer hover:scale-105 ease-in-out duration-100"
            onClick={handleEdit}
          >
            Editar Datos
          </button>
        </div>

        <div className="my-5 grid grid-cols-1 ml-5 sm:grid-cols-2 gap-y-3 gap-x-3">
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Nombre completo
            </h3>
            <input
              className="font-semibold"
              defaultValue={"Monkey D. Luffy"}
              readOnly={!enableEdit}
            />
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              ID Usuario
            </h3>
            <input
              type="number"
              min={1}
              className="font-semibold"
              defaultValue={3}
              readOnly={!enableEdit}
            />
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">Email</h3>
            <input
              className="font-semibold"
              type="email"
              defaultValue={"email@mail.com"}
              readOnly={!enableEdit}
            />
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Teléfono
            </h3>
            <input
              type="tel"
              className="font-semibold"
              defaultValue={"+12 3456 789"}
              readOnly={!enableEdit}
            />
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">Status</h3>
            <select
              className="font-semibold"
              defaultValue={"Activo"}
              id="select-status"
              name="status"
              disabled={!enableEdit}
            >
              <option defaultValue="Activo">Activo</option>
              <option defaultValue="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">Rol</h3>
            <select
              className="font-semibold"
              defaultValue={"estudiante"}
              id="select-role"
              name="role"
              disabled={!enableEdit}
            >
              <option defaultValue="admin">Admin</option>
              <option defaultValue="estudiante">Estudiante</option>
              <option defaultValue="reclutador">Reclutador</option>
              <option defaultValue="controller">Controller</option>
            </select>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">País</h3>
            <select
              className="font-semibold"
              defaultValue={"pais1"}
              id="select-country"
              name="country"
              disabled={!enableEdit}
            >
              <option defaultValue="pais1">País 1</option>
              <option defaultValue="pais2">País 2</option>
              <option defaultValue="pais3">País 3</option>
              <option defaultValue="pais4">País 4</option>
            </select>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Escuela
            </h3>
            <select
              className="font-semibold"
              defaultValue={"escuela1"}
              id="select-school"
              name="school"
              disabled={!enableEdit}
            >
              <option defaultValue="escuela1">Escuela 1</option>
              <option defaultValue="escuela2">Escuela 2</option>
              <option defaultValue="escuela3">Escuela 3</option>
              <option defaultValue="escuela4">Escuela 4</option>
            </select>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Controller
            </h3>
            <select
              className="font-semibold"
              defaultValue={"controller1"}
              id="select-controller"
              name="controller"
              disabled={!enableEdit}
            >
              <option defaultValue="controller1">José Pelicó jaja</option>
              <option defaultValue="controller2">Controller 2</option>
              <option defaultValue="controller3">Controller 3</option>
              <option defaultValue="controller4">Controller 4</option>
            </select>
          </div>
          <div className="bg-[#ebebeb] px-2 py-1 rounded-lg">
            <h3 className="font-semibold text-[20px] text-[#0f47ad]">
              Reclutador
            </h3>
            <select
              className="font-semibold"
              defaultValue={"reclutador1"}
              id="select-recruiter"
              name="recruiter"
              disabled={!enableEdit}
            >
              <option defaultValue="reclutador1">Reclutador 1</option>
              <option defaultValue="reclutador2">Reclutador 2</option>
              <option defaultValue="reclutador3">Reclutador 3</option>
              <option defaultValue="reclutador4">Reclutador 4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
