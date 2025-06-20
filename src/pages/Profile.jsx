import { useNavigate } from "react-router";
import UpdPassword from "../components/UpdPassword";
import UpdProfile from "../components/UpdProfile";
import { profile } from "../axios/auth";


export default function Profile() {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        profile()
            .then((res) => {
                const role = res?.role?.name?.toLowerCase();

                if (role === "admin") {
                    navigate("/admin");
                    window.scrollTo(0, 0)
                } else if (role === "student") {
                    navigate("/home");
                    window.scrollTo(0, 0)

                }
                else {
                    navigate("/forbiden");
                }
            })
            .catch((error) => {
                console.error("Error al obtener el perfil:", error);
                navigate("/login");
            });
    };

    return (
        <div className=" w-full bg-slate-300 py-8 px-4">
            <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md ">

                {/* Profile information section */}

                <UpdProfile />

                {/* Password update section */}
                <UpdPassword />

            </div>
            <br />
            <button className="absolute top-407 left-50 w-[50%] py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 mt-10 mb-10" onClick={handleNavigateHome}>
                Volver al Inicio
            </button>
        </div>
    )
}