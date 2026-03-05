require('dotenv').config();
const http = require('http');
const app = require('./app');
const { sequelize } = require('./config/database');
const PORT = process.env.PORT || 4000;
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB connection error', err));
http.createServer(app).listen(PORT, () => console.log(`Server listening on port ${PORT}`));
