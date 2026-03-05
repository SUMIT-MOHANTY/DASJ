const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
router.get('/', taskController.getAll);
router.post('/', taskController.create);
router.get('/:id', taskController.getOne);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);
module.exports = router;
