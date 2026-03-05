import React, { useEffect, useState } from 'react';
import { Task } from '../models/Task';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');

  const load = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async () => {
    if (!newTitle) return;
    const res = await createTask({ title: newTitle });
    setTasks([...tasks, res.data]);
    setNewTitle('');
  };

  const toggle = async (task: Task) => {
    const res = await updateTask(task.id, { completed: !task.completed });
    setTasks(tasks.map(t => (t.id === task.id ? res.data : t)));
  };

  const remove = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Task List</h2>
      <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='New task' />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none', cursor: 'pointer' }} onClick={() => toggle(t)}>{t.title}</span>
            <button onClick={() => remove(t.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
