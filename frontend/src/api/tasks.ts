import axios from 'axios';
const client = axios.create({ baseURL: '/api/tasks' });
export const getTasks = () => client.get('/');
export const createTask = (data: any) => client.post('/', data);
export const updateTask = (id: number, data: any) => client.put(`/${id}`, data);
export const deleteTask = (id: number) => client.delete(`/${id}`);
