const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_001 - Login Valid', async ({ page }) => {

    const validUserId =
        process.env.PUBLIC_VALID_ID;

    const validPassword =
        process.env.PUBLIC_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!validUserId) {
        throw new Error(
            'PUBLIC_VALID_ID is missing from .env'
        );
    }

    if (!validPassword) {
        throw new Error(
            'PUBLIC_VALID_PASSWORD is missing from .env'
        );
    }


    // =====================================================
    // INITIALIZE PAGE OBJECTS
    // =====================================================

    const homePage =
        new HomePage(page);

    const publicLoginPage =
        new PublicLoginPage(page);


    // =====================================================
    // STEP 1: OPEN DIGITAL MAIPS HOME
    // =====================================================

    await homePage.open();

    console.log(
        'Digital MAIPS Home page opened.'
    );


    // =====================================================
    // STEP 2: OPEN PUBLIC USER LOGIN
    // =====================================================

    await homePage.openPublicUserLogin();

    console.log(
        'Public User Login selected.'
    );


    // =====================================================
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'Public User Login page displayed.'
    );


    // =====================================================
    // STEP 4: ENTER VALID CREDENTIALS
    // =====================================================

    await publicLoginPage.login(
        validUserId,
        validPassword
    );

    console.log(
        'Valid Public User credentials submitted.'
    );


    // =====================================================
    // STEP 5: VERIFY DASHBOARD
    // =====================================================

    await publicLoginPage.verifyDashboard();

    console.log(
        'Public User dashboard displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY PAPAN PEMUKA
    // =====================================================

    await expect(
        publicLoginPage.dashboardMenu
    ).toBeVisible();

    await expect(
        publicLoginPage.dashboardMenu
    ).toContainText(
        'Papan Pemuka'
    );


    // =====================================================
    // STEP 7: VERIFY LOGIN FORM IS GONE
    // =====================================================

    await expect(
        publicLoginPage.loginHeader
    ).not.toBeVisible();

    await expect(
        publicLoginPage.usernameField
    ).not.toBeVisible();

    await expect(
        publicLoginPage.passwordField
    ).not.toBeVisible();

    await expect(
        publicLoginPage.loginButton
    ).not.toBeVisible();

    console.log(
        'Login form is no longer displayed.'
    );


    // =====================================================
    // STEP 8: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_001_Login_Valid.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_001_Login_Valid PASSED'
    );
    console.log(
        'Public User logged in successfully.'
    );
    console.log(
        'Papan Pemuka displayed successfully.'
    );
    console.log('====================================');

});