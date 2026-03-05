import React, {useState} from 'react';
import {postJSON} from '../api/fetchWrapper';
const BookForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postJSON('/api/books', {title, author, year: Number(year)});
    setTitle(''); setAuthor(''); setYear('');
  };
  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input placeholder="Year" type="number" value={year} onChange={e => setYear(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default BookForm;
