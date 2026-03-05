import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
const App: React.FC = () => (
  <div style={{padding: '20px'}}>
    <h1>Books Management</h1>
    <BookForm />
    <BookList />
  </div>
);
export default App;
