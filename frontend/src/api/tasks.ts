import axios from 'axios';
export const getTasks = () => axios.get('/api/tasks');
export const createTask = (task: any) => axios.post('/api/tasks', task);
export const updateTask = (id: number, task: any) => axios.put(`/api/tasks/${id}`, task);
export const deleteTask = (id: number) => axios.delete(`/api/tasks/${id}`);
