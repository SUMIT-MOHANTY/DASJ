import axios from 'axios';
const API = axios.create({ baseURL: '/api/tasks' });
export const fetchTasks = () => API.get('/');
export const createTask = (task: { title: string }) => API.post('/', task);
export const updateTask = (id: number, data: Partial<{ title: string; completed: boolean }>) => API.put(`/${id}`, data);
export const deleteTask = (id: number) => API.delete(`/${id}`);
