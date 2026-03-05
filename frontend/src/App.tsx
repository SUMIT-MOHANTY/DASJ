import React from 'react';
import { TaskList } from './components/TaskList';
export const App: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Task Manager</h1>
    <TaskList />
  </div>
);
