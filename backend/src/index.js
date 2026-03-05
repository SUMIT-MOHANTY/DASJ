const app = require('./app');
const { sequelize } = require('./config/database');
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
