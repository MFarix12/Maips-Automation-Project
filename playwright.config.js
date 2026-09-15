const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
    testDir: './tests',

    // Increase whole-test timeout
    timeout: 60 * 1000,

    // Run authentication tests more predictably
    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    // Use one worker for now while stabilizing STG automation
    workers: 1,

    expect: {
        timeout: 15 * 1000
    },

    reporter: [
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['list']
    ],

    use: {
        baseURL: process.env.MAIPS_BASE_URL,

        headless: true,

        viewport: {
            width: 1920,
            height: 1080
        },

        actionTimeout: 15 * 1000,
        navigationTimeout: 30 * 1000,

        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        ignoreHTTPSErrors: true
    },

    projects: [
        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome']
            }
        }
    ],

    outputDir: 'test-results'
});