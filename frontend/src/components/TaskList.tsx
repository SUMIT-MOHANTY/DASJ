import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api/tasks';
import type { Task } from '../models/Task';
function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);
  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  };
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} ({t.status})
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
