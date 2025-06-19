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