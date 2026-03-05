const { useMock } = require('../config/openaiConfig');
function createOpenAIClient() {
  if (useMock) {
    return require('./mockOpenAI');
  }
  return require('azure-openai');
}
module.exports = { createOpenAIClient };
