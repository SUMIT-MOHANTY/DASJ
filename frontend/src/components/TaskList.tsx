import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/tasks';
import { Task } from '../models/Task';
const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTitle, setNewTitle] = useState('');
    useEffect(() => { fetchTasks().then(res => setTasks(res.data)); }, []);
    const addTask = () => { createTask({ title: newTitle }).then(res => setTasks([...tasks, res.data])); setNewTitle(''); };
    const toggle = (task: Task) => { updateTask(task.id, { completed: !task.completed }).then(res => setTasks(tasks.map(t => t.id===task.id?res.data:t))); };
    const remove = (id: number) => { deleteTask(id).then(()=> setTasks(tasks.filter(t=>t.id!==id))); };
    return (
        <div>
            <h1>Tasks</h1>
            <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder='New task' />
            <button onClick={addTask}>Add</button>
            <ul>{tasks.map(task=> (
                <li key={task.id}>
                    <span style={{textDecoration: task.completed? 'line-through':''}} onClick={()=>toggle(task)}>{task.title}</span>
                    <button onClick={()=>remove(task.id)}>Del</button>
                </li>
            ))}</ul>
        </div>
    );
};
export default TaskList;
