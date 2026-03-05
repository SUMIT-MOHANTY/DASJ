import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/tasks';
interface Task { id: number; title: string; completed: boolean; }
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => { getTasks().then(r => setTasks(r.data)).catch(console.error); }, []);
  const handleDelete = (id: number) => { deleteTask(id).then(() => setTasks(t => t.filter(t => t.id !== id))).catch(console.error); };
  return (
    <ul>{tasks.map(t => (<li key={t.id}>{t.title} <button onClick={() => handleDelete(t.id)}>X</button></li>))}</ul>
  );
};
export default TaskList;
