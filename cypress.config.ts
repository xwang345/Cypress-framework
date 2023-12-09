import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '37z5fo',
  e2e: {
    setupNodeEvents(on, config) {

    },
    video: true,
    testIsolation: false,
    watchForFileChanges: false,
    chromeWebSecurity: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    waitForAnimations: true,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 6000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000
  },
});
