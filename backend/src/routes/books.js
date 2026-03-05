const express = require('express');
const router = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const { validateCreate, validateUpdate } = require('../validators/bookValidator');
const bookController = require('../controllers/bookController');

router.use(jwtAuth);

router.post('/', validateCreate, bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', validateUpdate, bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
