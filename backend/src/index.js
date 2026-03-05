const { createApp } = require('./app');
const http = require('http');
const PORT = process.env.PORT || 5000;

const app = createApp();
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
