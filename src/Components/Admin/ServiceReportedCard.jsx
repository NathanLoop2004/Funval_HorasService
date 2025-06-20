/* Componente creado por Tomás */

export default function ServiceReportedCard({ action, usuarios }) {
  
  
  
  
  
  
  return (
    <div
      onClick={action}
      className="bg-[#fff] rounded-lg w-[90%] mt-5 grid grid-cols-[60%_40%] py-2 sm:grid-cols-[2fr_1fr_1fr] hover:cursor-pointer hover:scale-105 ease-in-out duration-100"
    >
      <div className="flex flex-col justify-center ml-3">
        <span className="font-semibold">{usuarios.full_name}</span>
        <span className="text-[10px]">{usuarios.email}</span>
      </div>
      <div className="flex flex-col justify-center items-start ml-3">
        <span className="font-semibold">{`ID: ${usuarios.id}`}</span>
        <span
  className={`font-semibold px-2 rounded-lg ${
    usuarios.status === "activo"
      ? "bg-[#0fb43b] text-white"
      : "bg-red-500 text-white"
  }`}
>
  {usuarios.status}
          
        </span>
 <div className="bg-blue-600  h-[20px] w-[50%] rounded-[10px] md:flex items-center  justify-center mt-1 hidden">
  <h1 className="text-white text-[15px]">{usuarios.role?.name}</h1>
  </div>       
      </div>
      
      <img
        className="w-[25px] hidden sm:block justify-self-end self-center mr-2"
        src="/arrow-blue.svg"
        alt="arrow icon"
      />
    </div>
  );
}
