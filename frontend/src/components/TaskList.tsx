import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
interface Task { id: number; title: string; completed: boolean; }
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  useEffect(() => { fetchTasks().then(r => setTasks(r.data)); }, []);
  const add = async () => {
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
    <div>
      <h1>Task List</h1>
      <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='New task' />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type='checkbox' checked={task.completed} onChange={() => toggle(task)} />
            {task.title}
            <button onClick={() => remove(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
