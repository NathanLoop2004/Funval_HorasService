import React from 'react'

export default function Forbidden() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600">Acceso denegado</h1>
            <p>No tienes permisos para realizar esta acción.</p>
        </div>
    )
}
