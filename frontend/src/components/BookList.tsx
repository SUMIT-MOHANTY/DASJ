import React, {useEffect, useState} from 'react';
import {fetchJSON, deleteJSON} from '../api/fetchWrapper';
interface Book {id: number; title: string; author: string; year: number;}
const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const load = async () => { const data = await fetchJSON('/api/books'); setBooks(data); };
  useEffect(() => { load(); }, []);
  const handleDelete = async (id: number) => { await deleteJSON(`/api/books/${id}`); load(); };
  return (
    <table border={1} cellPadding={5} style={{marginTop: '20px'}}>
      <thead><tr><th>Title</th><th>Author</th><th>Year</th><th>Actions</th></tr></thead>
      <tbody>
        {books.map(b => (
          <tr key={b.id}>
            <td>{b.title}</td><td>{b.author}</td><td>{b.year}</td>
            <td><button onClick={() => handleDelete(b.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default BookList;
