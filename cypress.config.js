const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2py9p8',
  e2e: {
    baseUrl: "https://konstorlov.github.io/Marvel/",
    viewportHeight: 960,
    viewportWidth: 1200,
  },
});
