// Componente creado por Tomás




export default function ServiceCard({servicio}) {

  

  


  const ServicioHecho = servicio.category?.name
  const creado = servicio?.created_at
  const status = servicio?.status



function formatearFecha(fechaISO) {
  if (!fechaISO) return "";
  const fecha = new Date(fechaISO);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const año = fecha.getFullYear();
  const horas = fecha.getHours().toString().padStart(2, "0");
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  return `${dia}/${mes}/${año} ${horas}:${minutos}`;
}

 let statusIcon = "/question-circle.svg";
let statusAlt = "Pendiente";
if (servicio.status === "Approved") {
  statusIcon = "/check-circle.svg";
  statusAlt = "Aprobado";
} else if (servicio.status === "Rejected") {
  statusIcon = "/x-circle.svg";
  statusAlt = "Rechazado";
} // <-- ESTA LLAVE FALTABA

return (
  <div className={`${servicio.status === "Approved"
    ? "bg-green-400"
    : servicio.status === "Rejected"
    ? "bg-red-300"
    : servicio.status === "Pending"
    ? "bg-yellow-300"
    : "bg-gray-200"} w-[90%] mt-3 rounded-lg grid grid-cols-[60%_40%] hover:cursor-pointer hover:scale-105 ease-in-out duration-100`}>
    <div className="flex flex-col ml-2 justify-center">
      <span className="font-semibold">{ServicioHecho || "Sin descripción"}</span>
      <span className="hidden sm:block font-semibold">{formatearFecha(creado)}</span>
    </div>
    <div className="w-full flex justify-end items-center gap-5">
      <span className="hidden sm:block font-semibold">{status}</span>
      <img className="w-[25px]" src={statusIcon} alt={statusAlt} />
      <button className="mr-2">
        <img className="w-[25px]" src="/arrow-white.svg" alt="arrow icon" />
      </button>
    </div>

   

  </div>
);

}

