import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<TaskList />} />
    </Routes>
  </Router>
);

export default App;
