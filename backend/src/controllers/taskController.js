const Task = require('../models/task');

exports.getAll = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Not found' });
    res.json(task);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    const updatedTask = await Task.findByPk(req.params.id);
    res.json(updatedTask);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (err) { next(err); }
};
