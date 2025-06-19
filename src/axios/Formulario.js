import { instanceForm } from "./Form/instanceForm"


export async function formulario(form) {
    try {
        const { data } = await instanceForm.post('/services', form)
        return data
    } catch (error) {
        throw error
    }
}