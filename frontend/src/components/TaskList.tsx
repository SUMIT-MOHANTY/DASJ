import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  useEffect(() => { fetchTasks().then(r => setTasks(r.data)); }, []);
  const add = async () => { if (!newTitle) return; const r = await createTask({ title: newTitle }); setTasks([...tasks, r.data]); setNewTitle(''); };
  const toggle = async (t: Task) => { await updateTask(t.id, { completed: !t.completed }); setTasks(tasks.map(x => x.id===t.id?{...x, completed:!x.completed}:x)); };
  const remove = async (id: string) => { await deleteTask(id); setTasks(tasks.filter(x=>x.id!==id)); };
  return (
    <div>
      <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder="New task" />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map(t=> (
          <li key={t.id} style={{textDecoration: t.completed? 'line-through':''}}>
            <span onClick={()=>toggle(t)}>{t.title}</span>
            <button onClick={()=>remove(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
