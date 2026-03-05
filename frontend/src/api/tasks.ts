import axios from 'axios';
const base = import.meta.env.VITE_API_BASE_URL ?? '';

export const getTasks = () => axios.get(`${base}/tasks`);
export const createTask = (task: { title: string }) => axios.post(`${base}/tasks`, task);
export const updateTask = (id: number, data: Partial<{ title: string; completed: boolean }>) =>
  axios.put(`${base}/tasks/${id}`, data);
export const deleteTask = (id: number) => axios.delete(`${base}/tasks/${id}`);
