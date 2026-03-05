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
  try { const { id } = req.params; const task = await Task.findByPk(id);
    if (!task) return res.status(404).end();
    await task.update(req.body);
    res.json(task);
  } catch (err) { next(err); }
};
exports.remove = async (req, res, next) => {
  try { const { id } = req.params; const deleted = await Task.destroy({ where: { id } });
    res.status(deleted ? 204 : 404).end();
  } catch (err) { next(err); }
};
