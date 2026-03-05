import React, { useEffect, useState } from 'react';
import { Task } from '../models/Task';
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks';
export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  useEffect(() => { getTasks().then(setTasks); }, []);
  const add = async () => { if (!newTitle) return; const t = await createTask({ title: newTitle, completed: false }); setTasks([...tasks, t]); setNewTitle(''); };
  const toggle = async (t: Task) => { const upd = await updateTask(t.id, { completed: !t.completed }); setTasks(tasks.map(x => x.id===t.id?upd:x)); };
  const remove = async (id: number) => { await deleteTask(id); setTasks(tasks.filter(x=>x.id!==id)); };
  return (<div>
    <h2>Tasks</h2>
    <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder='New task' />
    <button onClick={add}>Add</button>
    <ul>{tasks.map(t=>(
      <li key={t.id}>
        <input type='checkbox' checked={t.completed} onChange={()=>toggle(t)} />
        {t.title}
        <button onClick={()=>remove(t.id)}>✖</button>
      </li>
    ))}</ul>
  </div>);
};
