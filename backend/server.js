require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// CRUD routes
app.get('/api/books', async (req, res) => {
  try { const result = await pool.query('SELECT * FROM books ORDER BY id'); res.json(result.rows); }
  catch (e) { res.status(500).json({error: e.message}); }
});

app.post('/api/books', async (req, res) => {
  const {title, author, year} = req.body;
  try { const result = await pool.query(
    'INSERT INTO books (title, author, year) VALUES ($1,$2,$3) RETURNING *',
    [title, author, year]
  ); res.status(201).json(result.rows[0]); }
  catch (e) { res.status(400).json({error: e.message}); }
});

app.put('/api/books/:id', async (req, res) => {
  const {id} = req.params; const {title, author, year} = req.body;
  try { const result = await pool.query(
    'UPDATE books SET title=$1, author=$2, year=$3 WHERE id=$4 RETURNING *',
    [title, author, year, id]
  ); res.json(result.rows[0]); }
  catch (e) { res.status(400).json({error: e.message}); }
});

app.delete('/api/books/:id', async (req, res) => {
  const {id} = req.params;
  try { await pool.query('DELETE FROM books WHERE id=$1', [id]); res.status(204).end(); }
  catch (e) { res.status(400).json({error: e.message}); }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
