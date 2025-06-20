import { useForm } from "react-hook-form"
import { changePassword } from "../axios/auth"
import { useEffect, useState } from "react"
import ConfirmModal from "./ConfirmModal"


export default function UpdPassword() {
    const { register, reset, formState: { isValid }, handleSubmit, watch } = useForm()

    const [change, setChange] = useState(false)
    const [error, setError] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [passwordData, setPasswordData] = useState(null);

    const submitForm = (data, e) => {
        e.preventDefault();
        setPasswordData(data);
        setShowModal(true);
    }

    const confirmPasswordChange = async () => {
        try {
            const status = await changePassword(passwordData);
            if (status === 200) {
                setChange(true);
                reset();
            }
        } catch (error) {
            setError(true);
        }
        setShowModal(false);
    }


    useEffect(() => {
        if (change === true) {
            setTimeout(() => {
                setChange(false);
            }, 3000);
        }
    }, [change]);

    const oldPassword = watch('old_password');
    const newPassword = watch('new_password')
    const confirmNewPassword = watch('confirm_new_password');

    const validateNewPassword = () => newPassword && newPassword === oldPassword
    const validateConfirmPassword = () => confirmNewPassword && confirmNewPassword !== newPassword;


    return (
        <div className="p-8 rounded-xl bg-sky-100 shadow-md">
            <h2 className="text-2xl font-bold text-center text-[#053666] mb-6 tracking-tight">
                ACTUALIZAR CONTRASEÑA
            </h2>

            <form onSubmit={handleSubmit(submitForm)}>
                <div className="space-y-4 mb-6">
                    <div>
                        <input
                            type="password"
                            {...register("old_password", {
                                required: "Tu contraseña anterior es requerida",
                                validate: (value) => value === oldPassword
                            })}
                            placeholder="Antigua contraseña"
                            className="w-full bg-white p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            {...register("new_password", {
                                required: "Tu nueva contraseña es requerida",
                                validate: (value) => value !== oldPassword
                            })}
                            placeholder="Nueva contraseña"
                            className="w-full bg-white p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {validateNewPassword() && (
                            <p className="text-red-500 text-sm mt-1">La nueva contraseña no debe ser igual a la anterior.</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            {...register("confirm_new_password", {
                                required: "Debes confirmar tu nueva contraseña",
                                validate: (value) => value === newPassword
                            })}
                            placeholder="Confirmar nueva contraseña"
                            className="w-full bg-white p-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {validateConfirmPassword() && (
                            <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden.</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md transition font-semibold disabled:bg-gray-400 mb-3"
                    >
                        Cambiar
                    </button>

                    {change && (
                        <p className="bg-green-500 text-white text-center font-medium py-2 w-full rounded-lg">
                            Contraseña actualizada correctamente.
                        </p>
                    )}

                    {error && (
                        <p className="bg-red-500 text-white text-center font-medium py-2 w-full rounded-lg">
                            Error al actualizar. Por favor revisa los datos.
                        </p>
                    )}
                </div>
            </form>
            <ConfirmModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmPasswordChange}
                message="¿Estás seguro de cambiar la contraseña?"
            />
        </div>

    )

}
