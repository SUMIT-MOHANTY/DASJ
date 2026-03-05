const sequelize = require('../config/database');
const Member = require('../models/member')(sequelize);

const listMembers = async (req, res, next) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) { next(err); }
};

const createMember = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const member = await Member.create({ firstName, lastName, email });
    res.status(201).json(member);
  } catch (err) { next(err); }
};

const updateMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const member = await Member.findByPk(id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    await member.update({ firstName, lastName, email });
    res.json(member);
  } catch (err) { next(err); }
};

const deleteMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const member = await Member.findByPk(id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    await member.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};

module.exports = { listMembers, createMember, updateMember, deleteMember };
