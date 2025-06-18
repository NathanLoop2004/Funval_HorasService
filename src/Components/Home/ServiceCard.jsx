// Componente creado por Tomás

export default function ServiceCard() {
  return (
    <div className="bg-[#8bf775] w-[90%] mt-3 rounded-lg grid grid-cols-[60%_40%] hover:cursor-pointer hover:scale-105 ease-in-out duration-100">
      <div className="flex flex-col ml-2 justify-center">
        <span className="font-semibold">Trabajo en el obispado</span>
        <span className="hidden sm:block font-semibold">20/6/2025</span>
      </div>
      <div className="w-full flex justify-end items-center gap-5">
        <span className="hidden sm:block font-semibold">Aprobado</span>
        <img className="w-[25px]" src="/check-circle.svg" alt="rejected icon" />
        <button className="mr-2">
          <img className="w-[25px]" src="/arrow-white.svg" alt="arrow icon" />
        </button>
      </div>
    </div>
  );
}

/* Además del "/check-circle.svg", en la carpeta "public" hay
otros svg que se pueden usar para indicar el estado del servicio.
Dichos svg son: "question-circle.svg" y "x-circle.svg"*/
