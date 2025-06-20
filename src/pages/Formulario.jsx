// ServiceHoursReportForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router";

import { formulario } from "../axios/Formulario";


export default function ServiceHoursReportForm() {

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
    window.scrollTo(0,0)
  };




  const [form, setForm] = useState({
    actividad: "",
    descripcion: "",
    horas: "",
    archivo: null,
  });

  const [archivoNombre, setArchivoNombre] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "archivo") {
      setForm({ ...form, archivo: files[0] });
      setArchivoNombre(files[0]?.name || "");
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_id", String(form.actividad));
    formData.append("description", String(form.descripcion));
    formData.append("amount_reported", String(form.horas));
    formData.append("evidence", form.archivo);

    try {
      const data = await formulario(formData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 flex-col">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-[80%]  max-w-md border border-gray-700 mt-20"
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Reporte de Horas de Servicio
        </h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="actividad">
            Actividad realizada
          </label>
          <select
            id="actividad"
            name="actividad"
            value={form.actividad}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona una actividad</option>
            <option value="1">Indexacion de nombre en family search</option>
            <option value="2">Instructor de la clase</option>
            <option value="3">Servir en el obispado o en la presidencia de la estaca</option>
            <option value="4">Revision de registros en family search</option>
            <option value="5">Asistir al templo y llevar tus propias ordenanzas</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="descripcion">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe brevemente la actividad realizada"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="horas">
            Horas
          </label>
          <input
            type="number"
            id="horas"
            name="horas"
            value={form.horas}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
            min="1"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="archivo">
            Subir comprobante (PDF)
          </label>
          <input
            type="file"
            id="archivo"
            name="archivo"
            accept="application/pdf"
            onChange={handleChange}
            className="block w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            required
          />
          {archivoNombre && (
            <span className="text-gray-400 text-sm mt-1 block">
              Archivo seleccionado: {archivoNombre}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
        >
          Enviar reporte
        </button>
      </form>
      <button className="w-[50%] py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 mt-10 mb-10" onClick={handleNavigateHome}>
        Volver al Inicio
      </button>
    </div>
  );
}