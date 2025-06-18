import { instance } from "./users/instance"


export async function formulario(form) {
    try {
        const { data } = await instance.post('/services', form)
        return data
    } catch (error) {
        throw error
    }
}