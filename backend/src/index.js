const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
// In production, TLS termination is handled by Azure Front Door / Azure App Service.
http.createServer(app).listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
