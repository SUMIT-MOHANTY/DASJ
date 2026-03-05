const Task = require('../models/task');

async function getAll(req, res, next) {
  try { const tasks = await Task.findAll(); res.json(tasks); }
  catch (err) { next(err); }
}

async function create(req, res, next) {
  try { const task = await Task.create(req.body); res.status(201).json(task); }
  catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const [updated] = await Task.update(req.body, { where: { id } });
    if (updated) { const updatedTask = await Task.findByPk(id); res.json(updatedTask); }
    else res.status(404).json({ message: 'Task not found' });
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await Task.destroy({ where: { id } });
    if (deleted) res.json({ message: 'Deleted' });
    else res.status(404).json({ message: 'Task not found' });
  } catch (err) { next(err); }
}

module.exports = { getAll, create, update, remove };
