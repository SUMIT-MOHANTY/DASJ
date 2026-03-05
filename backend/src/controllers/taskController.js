const Task = require('../models/task');
exports.getAll = async (req, res, next) => {
  try { const tasks = await Task.findAll(); res.json(tasks); }
  catch (err) { next(err); }
};
exports.create = async (req, res, next) => {
  try { const task = await Task.create(req.body); res.status(201).json(task); }
  catch (err) { next(err); }
};
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await Task.update(req.body, { where: { id } });
    if (updated) { const updatedTask = await Task.findByPk(id); res.json(updatedTask); }
    else { res.status(404).send(); }
  } catch (err) { next(err); }
};
exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Task.destroy({ where: { id } });
    if (deleted) { res.status(204).send(); }
    else { res.status(404).send(); }
  } catch (err) { next(err); }
};
