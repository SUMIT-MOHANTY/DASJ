import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
function App() {
  return (
    <div>
      <h1>Hi sumit</h1>
      <nav><Link to="/">Home</Link></nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </div>
  );
}
export default App;
