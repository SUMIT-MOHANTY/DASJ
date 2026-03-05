import axios from 'axios';
const client = axios.create({ baseURL: '/api/tasks' });
export const getTasks = () => client.get('/');
export const createTask = (task: { title: string }) => client.post('/', task);
export const updateTask = (id: number, data: Partial<{ title: string; completed: boolean }>) => client.put(`/${id}`, data);
export const deleteTask = (id: number) => client.delete(`/${id}`);
