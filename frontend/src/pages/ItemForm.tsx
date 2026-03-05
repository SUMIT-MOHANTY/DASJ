import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface FormData { name: string; description: string; }

const ItemForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({ name: '', description: '' });
  useEffect(() => {
    if (id) {
      fetch(`/api/v1/items/${id}`)
        .then(res => res.json())
        .then(data => setForm({ name: data.data.name, description: data.data.description || '' }));
    }
  }, [id]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/v1/items/${id}` : '/api/v1/items';
    fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      .then(() => navigate('/items'));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ItemForm;
