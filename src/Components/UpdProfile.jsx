import { useForm } from "react-hook-form";
import { profile } from "../axios/auth"
import { update } from "../axios/users/user";
import { useEffect, useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function UpdProfile() {
    const { register, handleSubmit, watch } = useForm({ defaultValues: async () => await profile() })
    const [save, setSave] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState(null)


    const onSubmit = async (data, e) => {
        e.preventDefault();
        setFormData(data); // Guardar temporalmente los datos
        setShowModal(true); // Mostrar el modal
    }

    const confirmSave = async () => {
        formData.status = 1;
        const status = await update(formData, formData.id);
        if (status === 200) {
            setSave(true);
        }
        setShowModal(false);
    }

    const status = watch("status")
    console.log({ profile })

    useEffect(() => {
        if (save === true) {
            setTimeout(() => {
                setSave(false);
            }, 3000);
        }
    }, [save]);

    return (
        <>
            <div className="mb-10 p-6 rounded-xl bg-sky-100 shadow-md flex flex-col md:flex-row items-center gap-6">
                <img className="size-40 rounded-3xl border-4 border-white shadow-md" src="R.jpg" alt="Profile" />

                <div className="flex flex-col w-full items-center md:items-start">
                    <input
                        type="text"
                        className="border-0 outline-none w-full md:w-[80%] text-center md:text-left text-xl md:text-2xl font-semibold text-[#053666] bg-transparent"
                        {...register("full_name")}
                        readOnly
                    />
                    <input
                        type="text"
                        {...register("status")}
                        className={`mt-2 px-3 py-2 rounded-lg w-28 text-sm font-semibold text-white text-center 
                ${status === "activo" ? "bg-green-500" : ""}
                ${status === "inactivo" ? "bg-red-500" : ""}
            `}
                    />
                </div>
            </div>

            <div className="mb-12 p-8 rounded-xl bg-white shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#053666] mb-6">PERFIL</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Primer Nombre</label>
                            <input
                                type="text"
                                {...register("f_name")}
                                placeholder="1er Nombre"
                                className="w-full p-3 border border-sky-300 rounded-lg bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Segundo Nombre</label>
                            <input
                                type="text"
                                {...register("m_name")}
                                placeholder="2do Nombre"
                                className="w-full p-3 border border-sky-300 rounded-lg bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Primer Apellido</label>
                            <input
                                type="text"
                                {...register("f_lastname")}
                                placeholder="Primer Apellido"
                                className="w-full p-3 border border-sky-300 rounded-lg bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Segundo Apellido</label>
                            <input
                                type="text"
                                {...register("s_lastname")}
                                placeholder="Segundo Apellido"
                                className="w-full p-3 border border-sky-300 rounded-lg bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Teléfono</label>
                            <input
                                type="text"
                                {...register("phone")}
                                placeholder="Teléfono"
                                className="w-full p-3 border border-sky-300 rounded-lg bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Email</label>
                            <input
                                type="text"
                                {...register("email")}
                                placeholder="Email"
                                readOnly
                                className="w-full p-3 border border-sky-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sky-700 mb-1 ml-2 block">Rol</label>
                            <input
                                type="text"
                                {...register("role.name")}
                                placeholder="Rol"
                                readOnly
                                className="w-full p-3 border border-sky-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md transition font-semibold"
                        >
                            Guardar
                        </button>
                        {save && (
                            <p className="mt-3 bg-green-500 text-white font-medium text-center py-2 w-full rounded-lg">
                                Perfil Actualizado
                            </p>
                        )}
                    </div>
                </form>
                <ConfirmModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={confirmSave}
                    message={"Estas seguro de guardar los cambios?"}
                />
            </div>

        </>
    )

}

// 364.756.8428228