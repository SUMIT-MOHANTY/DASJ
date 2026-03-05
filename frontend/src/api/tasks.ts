import axios from 'axios';
export const fetchTasks = () => axios.get('/api/tasks');
export const createTask = (task: { title: string }) => axios.post('/api/tasks', task);
export const updateTask = (id: number, data: Partial<{ title: string; completed: boolean }>) =>
  axios.put(`/api/tasks/${id}`, data);
export const deleteTask = (id: number) => axios.delete(`/api/tasks/${id}`);
