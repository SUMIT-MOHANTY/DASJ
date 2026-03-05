import axios from 'axios';
const api = axios.create({ baseURL: '/api/tasks' });
export const fetchTasks = () => api.get('/');
export const createTask = (data: any) => api.post('/', data);
export const updateTask = (id: number, data: any) => api.put(`/${id}`, data);
export const deleteTask = (id: number) => api.delete(`/${id}`);
