const { getChatCompletion: placeholder } = require('./openaiInterface');
module.exports = {
  getChatCompletion: async (messages, options) => {
    return {
      id: 'mock-1',
      choices: [
        {
          message: {
            role: 'assistant',
            content: 'This is a mock response.'
          }
        }
      ]
    };
  }
};
