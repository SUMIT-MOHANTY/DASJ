import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_API_URL || "http://localhost:3000",
    video: false,
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts"
  }
});
