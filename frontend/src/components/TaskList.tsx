import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');

  const load = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    if (!newTitle.trim()) return;
    await createTask({ title: newTitle });
    setNewTitle('');
    load();
  };

  const toggle = async (task: Task) => {
    await updateTask(task.id, { completed: !task.completed });
    load();
  };

  const remove = async (id: number) => {
    await deleteTask(id);
    load();
  };

  return (
    <div>
      <div>
        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="New task" />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggle(t)}>{t.title}</span>
            <button onClick={() => remove(t.id)} style={{ marginLeft: '0.5rem' }}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
