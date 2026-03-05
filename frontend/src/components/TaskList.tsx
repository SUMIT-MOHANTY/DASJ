import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/tasks';
interface Task {id: number; title: string; completed: boolean;}
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {getTasks().then(res => setTasks(res.data));}, []);
  const handleDelete = (id: number) => {deleteTask(id).then(() => setTasks(tasks.filter(t => t.id !== id)));};
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>{t.title} <button onClick={() => handleDelete(t.id)}>Del</button></li>
      ))}
    </ul>
  );
};
export default TaskList;
