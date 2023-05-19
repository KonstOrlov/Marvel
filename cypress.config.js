const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "2py9p8",
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://konstorlov.github.io/Marvel/",
    viewportHeight: 960,
    viewportWidth: 1200,
  },
});
