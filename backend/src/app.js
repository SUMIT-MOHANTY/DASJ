// Existing middleware registrations may be above this line
const { createOpenAIClient } = require('./services/openaiFactory');
app.locals.openAIClient = createOpenAIClient();
