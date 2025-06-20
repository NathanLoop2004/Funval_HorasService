import { useNavigate } from "react-router-dom";

export default function MiComponente() {
  const navigate = useNavigate();

  async function borrarTodasLasCookies() {
    await fetch("https://www.hs-service.api.crealape.com/api/v1/logout", {
      method: "POST",
      credentials: "include",
    });
    navigate("/login", { replace: true }); // Esto reemplaza la ruta actual
  }

  return (
    <button onClick={borrarTodasLasCookies} className="flex text-white flex-row w-[120px] h-[45px] cursor-pointer bg-[#e23131]    hover:bg-[#8f0101] rounded-[11px] items-center p-3 gap-1 mt-4 ml-15">
      Cerrar sesion
    </button>
  );
}