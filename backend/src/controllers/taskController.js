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
        if (!task) return res.sendStatus(404);
        await task.update(req.body);
        res.json(task);
  } catch (err) { next(err); }
};
exports.remove = async (req, res, next) => {
  try { const { id } = req.params; const task = await Task.findByPk(id);
        if (!task) return res.sendStatus(404);
        await task.destroy();
        res.sendStatus(204);
  } catch (err) { next(err); }
};
