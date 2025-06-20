import UpdPassword from "../components/UpdPassword";
import UpdProfile from "../components/UpdProfile";


export default function Profile() {

    return (
        <div className="w-full bg-slate-300 py-8 px-4">
            <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md ">

                {/* Profile information section */}

                <UpdProfile />

                {/* Password update section */}
                <UpdPassword />

            </div>
        </div>
    )
}