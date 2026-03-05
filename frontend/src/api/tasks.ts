import axios from 'axios';
export const fetchTasks = () => axios.get('/api/tasks');
export const createTask = (data: any) => axios.post('/api/tasks', data);
export const updateTask = (id: number, data: any) => axios.put(`/api/tasks/${id}`, data);
export const deleteTask = (id: number) => axios.delete(`/api/tasks/${id}`);
