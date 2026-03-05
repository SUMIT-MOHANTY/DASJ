import axios from 'axios';
const api = axios.create({ baseURL: '/api' });
export const fetchTasks = () => api.get('/tasks');
export const createTask = (data: any) => api.post('/tasks', data);
export const updateTask = (id: string, data: any) => api.put(`/tasks/${id}`, data);
export const deleteTask = (id: string) => api.delete(`/tasks/${id}`);
