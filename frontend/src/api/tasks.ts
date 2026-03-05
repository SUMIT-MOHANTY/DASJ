import axios from 'axios';

export const api = axios.create({ baseURL: '/api/tasks' });

export const fetchTasks = () => api.get('/');
export const createTask = (task: {title: string; completed?: boolean}) => api.post('/', task);
export const updateTask = (id: number, data: Partial<{title: string; completed: boolean}>) => api.put(`/${id}`, data);
export const deleteTask = (id: number) => api.delete(`/${id}`);
