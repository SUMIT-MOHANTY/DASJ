import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const fetch = async () => { const res = await getTasks(); setTasks(res.data); };
  useEffect(() => { fetch(); }, []);
  const handleDelete = async (id: number) => { await deleteTask(id); fetch(); };
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {t.title} <button onClick={() => handleDelete(t.id)}>Del</button>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
