import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');

  const fetch = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => { fetch(); }, []);

  const handleAdd = async () => {
    if (!newTitle) return;
    await createTask({ title: newTitle });
    setNewTitle('');
    fetch();
  };

  const toggleComplete = async (task: Task) => {
    await updateTask(task.id, { completed: !task.completed });
    fetch();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetch();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Tasks</h2>
      <div>
        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="New task" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{ marginTop: '0.5rem' }}>
            <input type="checkbox" checked={t.completed} onChange={() => toggleComplete(t)} />
            {t.title}
            <button onClick={() => handleDelete(t.id)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
