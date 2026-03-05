const Task = require('../models/task');
module.exports = {
  async getAll(req, res, next) {
    try { const tasks = await Task.findAll(); res.json(tasks); }
    catch (err) { next(err); }
  },
  async create(req, res, next) {
    try { const task = await Task.create(req.body); res.status(201).json(task); }
    catch (err) { next(err); }
  },
  async getOne(req, res, next) {
    try { const task = await Task.findByPk(req.params.id);
      if (!task) return res.status(404).json({ error: 'Not found' });
      res.json(task);
    } catch (err) { next(err); }
  },
  async update(req, res, next) {
    try { const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ error: 'Not found' });
      const updatedTask = await Task.findByPk(req.params.id);
      res.json(updatedTask);
    } catch (err) { next(err); }
  },
  async remove(req, res, next) {
    try { const deleted = await Task.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Not found' });
      res.status(204).send();
    } catch (err) { next(err); }
  }
};
