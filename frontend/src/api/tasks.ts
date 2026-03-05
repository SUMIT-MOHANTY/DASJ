import axios from 'axios';
import type { Task } from '../models/Task';
const client = axios.create({ baseURL: '/api' });
export const fetchTasks = () => client.get<Task[]>('/tasks').then(r => r.data);
export const createTask = (payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) =>
  client.post<Task>('/tasks', payload).then(r => r.data);
export const updateTask = (id: string, payload: Partial<Task>) =>
  client.put<Task>(`/tasks/${id}`, payload).then(r => r.data);
export const deleteTask = (id: string) => client.delete(`/tasks/${id}`);
