import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ItemsList from './pages/ItemsList';
import ItemDetail from './pages/ItemDetail';
import ItemForm from './pages/ItemForm';

const App: React.FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/items">Items</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<ItemsList />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="/items/:id/edit" element={<ItemForm />} />
      <Route path="/items/new" element={<ItemForm />} />
    </Routes>
  </div>
);

export default App;
