require('dotenv').config();
module.exports = { useMock: process.env.USE_MOCK_OPENAI === 'true' };
