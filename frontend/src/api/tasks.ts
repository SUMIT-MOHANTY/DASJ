import axios from 'axios';

export const api = axios.create({ baseURL: '/api' });

export const fetchTasks = () => api.get('/tasks');
export const createTask = (data: { title: string }) => api.post('/tasks', data);
export const updateTask = (id: number, data: Partial<{ title: string; completed: boolean }>) => api.put(`/tasks/${id}`, data);
export const deleteTask = (id: number) => api.delete(`/tasks/${id}`);
