const Joi = require('joi');

const createSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishedYear: Joi.number().integer().optional(),
});

const updateSchema = Joi.object({
  title: Joi.string().optional(),
  author: Joi.string().optional(),
  publishedYear: Joi.number().integer().optional(),
}).min(1);

const validateCreate = (req, res, next) => {
  const { error } = createSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateUpdate = (req, res, next) => {
  const { error } = updateSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = { validateCreate, validateUpdate };
