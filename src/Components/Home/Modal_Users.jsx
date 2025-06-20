import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { profile } from "../../axios/auth"
import { logout } from "../../axios/auth"
import { HomeData } from '../../axios/Formulario'
import MiComponente from '../../axios/borrarCookie/ClearCookie'

export default function Modal_Users({ toggleModal, datos }) {

  const { register } = useForm({ defaultValues: async () => await profile() })
  const [save, setSave] = useState(false)
  const navigate = useNavigate()

  const handleGoToProfile = () => {
    toggleModal();
    navigate("/profile")
  };

  useEffect(() => {
    if (save === true) {
      setTimeout(() => {
        setSave(false);
      }, 3000);
    }
  }, [save]);



  const handleClose = (event) => {
    if (event.target.classList.contains("bg-black/50")) {
      toggleModal()
    }
  }
  return (
    <div className='bg-black/50 w-full h-full fixed z-10' onClick={handleClose}>

      <div className='bg-white w-[300px] h-[550px] z-10 right-[-10px] mt-[-5px] rounded-[10px] fixed '>
        <section className='flex flex-col'>

          {/* Botton de cerrar */}
          <div className='w-[100%] h-[40px]  border-black flex justify-end' onClick={toggleModal} >
            <button className=' border-black mr-5 mt-5 cursor-pointer'>
              <img src='/icons8-cerrar.png' className='h-[30px] w-[30px] ' />
            </button>
          </div>



          {/* Logotipo Funval */}
          <img src='/Funval-Photoroom.png' className='w-[210px] h-[80px] mt-2 ml-2 ' />


          {/* Foto de perfil del usuario */}
          <div className='  w-[160px] h-[130px] ml-8  flex  justify-center items-center'>
            <img src='/Gatito.jpg' className=' w-[120px] h-[120px] rounded-full  object-cover' />
          </div>


          {/* Nombre del usuario */}
          {
            datos.f_name && datos.f_lastname && (

              <div className='flex flex-row  border-black relative'>
                <h1 className='text-[15px] text-[#4e4e4ee0] font-semibold ml-5 mt-3  border-white '>{`${datos.f_name} ${datos.f_lastname}`}</h1>
                <img className='w-[20px] h-[25px] shadow-none border-white mt-4 right-4 absolute' src='/FunvalFlechita.webp'></img>
              </div>
            )}

          {/* gmail del usuario */}
          {datos.email && (
            <div className='flex flex-row  w-[100%] h-[20px] border-black relative'>
              <h1 className='text-[14px] text-[#2c2c2ce0] ml-5 font-semibold border-white' >{datos.email}</h1>
              <img className=' w-[20px] h-[20px] absolute right-4 mt-1' src='/logo_gmail.png' />
            </div>
          )}
          {/* numero de telefono del usuario */}
          {datos.phone && (
            <div className='flex flex-row w-[100%] h-[20px] mt-2 border-black relative'>
              <h1 className='text-[13px] text-[#bd9100e0] ml-5 font-semibold border-white'>{datos.phone}</h1>
              <img src='/whatsapp.png' className='w-[20px] h-[20px] absolute right-4' />
            </div>
          )}


          {/* Button Changes Datos y Logout*/}
          <div className='w-[100%] border-black h-[40px] mt-15'>
            <button
              onClick={handleGoToProfile}
              className="flex flex-row w-[120px] h-[45px] cursor-pointer bg-[#317ae2] hover:bg-[#013c8f] rounded-[11px] items-center p-3 gap-1  ml-15">
              <h1 className='text-[8px] text-white font-bold ml-2'>CAMBIAR DATOS</h1>
              <img src="/icons8-actualizar-30.png" alt="" className='w-[20px] h-[20px]' />
            </button>

          </div>

          <MiComponente />

        </section >
      </div >
    </div >
  )
}
