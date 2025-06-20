import { instanceForm } from "./Form/instanceForm"


export async function formulario(form) {
    try {
        const { data } = await instanceForm.post('/services', form)
        return data
    } catch (error) {
        throw error
    }
}



export async function HomeData() {
    try {
        const { data } = await instanceForm.get('/auth/profile')
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}

export async function ServiciosHechos() {
  try {
        const { data } = await instanceForm.get('/services')
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}
export async function ServiciosHechosID() {
  try {
        const { data } = await instanceForm.get('/services')
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}


export async function TraerUsuarios() {
    try {
        const { data } = await instanceForm.get('/users?r=1')
        console.log(data)
        return data
    } catch (error) {
         console.log(error.response?.data);
        throw error
    }
}


export async function DatosDeUsuarioID(userId) {
    try {
        const { data } = await instanceForm.get(`/users/${userId}`);
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}