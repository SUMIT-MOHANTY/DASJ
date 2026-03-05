const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/taskController');

router.get('/', taskCtrl.getAll);
router.post('/', taskCtrl.create);
router.put('/:id', taskCtrl.update);
router.delete('/:id', taskCtrl.remove);

module.exports = router;
