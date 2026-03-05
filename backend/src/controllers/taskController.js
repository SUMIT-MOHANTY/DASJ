const Task = require('../models/task');
exports.getAll = async (req, res, next) => {
  try { const tasks = await Task.findAll(); res.json(tasks); }
  catch (err) { next(err); }
};
exports.create = async (req, res, next) => {
  try { const task = await Task.create(req.body); res.status(201).json(task); }
  catch (err) { next(err); }
};
exports.getOne = async (req, res, next) => {
  try { const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    res.json(task);
  } catch (err) { next(err); }
};
exports.update = async (req, res, next) => {
  try { const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    await task.update(req.body);
    res.json(task);
  } catch (err) { next(err); }
};
exports.remove = async (req, res, next) => {
  try { const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    await task.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};
