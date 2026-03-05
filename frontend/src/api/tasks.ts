import axios from 'axios';
import { Task } from '../models/Task';
const base = '/api/tasks';
export const getTasks = () => axios.get<Task[]>(base).then(r => r.data);
export const createTask = (task: Omit<Task, 'id'>) => axios.post<Task>(base, task).then(r => r.data);
export const updateTask = (id: number, task: Partial<Task>) => axios.put<Task>(`${base}/${id}`, task).then(r => r.data);
export const deleteTask = (id: number) => axios.delete(`${base}/${id}`);
