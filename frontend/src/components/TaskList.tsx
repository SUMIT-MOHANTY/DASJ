import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api/tasks';
function TaskList() {
  const [tasks, setTasks] = useState<any[]>([]);
  useEffect(() => { fetchTasks().then(r => setTasks(r.data)); }, []);
  const handleDelete = (id:number) => { deleteTask(id).then(() => setTasks(t => t.filter(t => t.id !== id))); };
  return (
    <div>
      <h1>Tasks</h1>
      <ul>{tasks.map(t => (<li key={t.id}>{t.title} <button onClick={()=>handleDelete(t.id)}>Del</button></li>))}</ul>
    </div>
  );
}
export default TaskList;
