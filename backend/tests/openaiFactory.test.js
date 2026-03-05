const { createOpenAIClient } = require('../../src/services/openaiFactory');
describe('OpenAI Factory', () => {
  it('returns mock client when USE_MOCK_OPENAI is true', async () => {
    process.env.USE_MOCK_OPENAI = 'true';
    const client = createOpenAIClient();
    expect(client).toHaveProperty('getChatCompletion');
    const res = await client.getChatCompletion();
    expect(res).toEqual({
      id: 'mock-1',
      choices: [
        {
          message: {
            role: 'assistant',
            content: 'This is a mock response.'
          }
        }
      ]
    });
  });
});
