/* Componente creado por Tomás */

export default function UserCard({ action }) {
  return (
    <div
      onClick={action}
      className="bg-[#fff] rounded-lg w-[90%] mt-5 grid grid-cols-[60%_40%] py-2 sm:grid-cols-[2fr_1fr_1fr] hover:cursor-pointer hover:scale-105 ease-in-out duration-100"
    >
      <div className="flex flex-col justify-center ml-3">
        <span className="font-semibold">Luffy Monkey</span>
        <span>Student</span>
      </div>
      <div className="flex flex-col justify-center items-start ml-3">
        <span className="font-semibold">ID: 3</span>
        <span className="font-semibold text-[#fff] bg-[#0fb43b] px-2 rounded-lg">
          Activo
        </span>
      </div>
      <img
        className="w-[25px] hidden sm:block justify-self-end self-center mr-2"
        src="/arrow-blue.svg"
        alt="arrow icon"
      />
    </div>
  );
}
