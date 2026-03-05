const router = require('express').Router();
// Create a new book
router.post('/', (req, res) => res.status(201).json({ message: 'Created' }));
// Read all books
router.get('/', (req, res) => res.json([]));
// Read a single book
router.get('/:id', (req, res) => res.json({}));
// Update a book
router.put('/:id', (req, res) => res.json({ message: 'Updated' }));
// Delete a book
router.delete('/:id', (req, res) => res.status(204).end());
module.exports = router;
