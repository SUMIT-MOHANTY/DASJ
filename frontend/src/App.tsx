import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';

const App: React.FC = () => (
  <div style={{ padding: '1rem' }}>
    <h1>Task Manager</h1>
    <nav><Link to="/">Home</Link></nav>
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>
  </div>
);

export default App;
