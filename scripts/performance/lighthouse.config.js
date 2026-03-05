module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance']
  },
  budgets: [
    {
      timings: [
        { metric: 'first-contentful-paint', budget: 200 },
        { metric: 'largest-contentful-paint', budget: 200 }
      ]
    }
  ]
};
