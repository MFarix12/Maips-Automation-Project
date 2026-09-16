const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

    // =====================================================
    // TEST DIRECTORY
    // =====================================================

    testDir: './tests',


    // =====================================================
    // TIMEOUT
    // =====================================================

    // Maximum time allowed for one test
    timeout: 60 * 1000,


    // =====================================================
    // PARALLEL EXECUTION
    // =====================================================

    // Disable parallel execution while stabilizing
    // MAIPs STG automation
    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    // Run one test at a time
    workers: 1,


    // =====================================================
    // EXPECT
    // =====================================================

    expect: {
        timeout: 15 * 1000
    },


    // =====================================================
    // REPORTER
    // =====================================================

    reporter: [

        [
            'html',
            {
                outputFolder: 'playwright-report',
                open: 'never'
            }
        ],

        [
            'list'
        ]

    ],


    // =====================================================
    // GLOBAL TEST SETTINGS
    // =====================================================

    use: {

        // MAIPs STG URL from .env
        baseURL:
            process.env.MAIPS_BASE_URL ||
            'https://digital-stg.maips.gov.my/',


        // Browser runs headless by default
        // --headed command will override this
        headless: true,


        // Browser viewport
        viewport: {
            width: 1920,
            height: 1080
        },


        // Maximum time for actions such as:
        // click(), fill(), check(), etc.
        actionTimeout: 15 * 1000,


        // Maximum navigation timeout
        navigationTimeout: 30 * 1000,


        // Generate trace when retry happens
        trace: 'on-first-retry',


        // Screenshot when test fails
        screenshot: 'only-on-failure',


        // Keep video when test fails
        video: 'retain-on-failure',


        // Allow STG HTTPS certificate
        ignoreHTTPSErrors: true
    },


    // =====================================================
    // BROWSER PROJECT
    // =====================================================

    projects: [

        {
            name: 'chromium',

            use: {

                ...devices['Desktop Chrome'],

                /*
                 * IMPORTANT
                 *
                 * Use installed Microsoft Edge instead of
                 * Playwright bundled Chromium.
                 *
                 * Windows Application Control was blocking:
                 *
                 * ms-playwright/chromium-1243/chrome-win64
                 *
                 * Using the Edge channel allows Playwright
                 * to launch the locally installed Edge browser.
                 */

                channel: 'msedge'
            }
        }

    ],


    // =====================================================
    // TEST RESULTS
    // =====================================================

    outputDir: 'test-results'
});