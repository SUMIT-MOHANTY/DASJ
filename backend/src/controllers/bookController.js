const { Book } = require('../models/book');

exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    await book.update(req.body);
    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByPK ? Book.findByPk(req.params.id) : null;
    if (!book) return res.status(404).json({ error: 'Book not found' });
    await book.destroy();
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
