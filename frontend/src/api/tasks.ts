import axios from 'axios';
const api = axios.create({ baseURL: '/api' });
export const fetchTasks = () => api.get('/tasks');
export const createTask = (data: any) => api.post('/tasks', data);
export const updateTask = (id: number, data: any) => api.put(`/tasks/${id}`, data);
export const deleteTask = (id: number) => api.delete(`/tasks/${id}`);
