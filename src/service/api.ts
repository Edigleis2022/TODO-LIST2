import axios from  'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000,
});

export async function getAll() {
   
}
export async function getById(id:number) {
   const tasks = await api.get(`tasks/${id}`)
   return tasks.data
}
//Salvar Registro
export async function save(task:Task) {
    const response = await api.post('tasks', {
        ...task
    })
    return response.data
}
//Atualizat Registro
export async function update(task:Task) {
    const response = await api.put(`task/${task.id}`, {
        ...task
    })
    return response.data
}
