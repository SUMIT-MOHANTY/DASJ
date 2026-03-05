import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  useEffect(() => { fetch(); }, []);
  const fetch = async () => { const res = await getTasks(); setTasks(res.data); };
  const add = async () => { if (!newTitle) return; await createTask({ title: newTitle }); setNewTitle(''); fetch(); };
  const toggle = async (t: Task) => { await updateTask(t.id, { completed: !t.completed }); fetch(); };
  const remove = async (id: number) => { await deleteTask(id); fetch(); };
  return (
    <div>
      <h1>Tasks</h1>
      <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='New task' />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggle(t)}>{t.title}</span>
            <button onClick={() => remove(t.id)} style={{ marginLeft: '8px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
