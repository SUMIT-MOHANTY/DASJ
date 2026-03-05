import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
