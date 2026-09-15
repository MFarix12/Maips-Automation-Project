const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_017 - Logout', async ({ page }) => {

    const validUserId =
        process.env.MAIPS_VALID_ID;

    const validPassword =
        process.env.MAIPS_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!validUserId) {
        throw new Error(
            'MAIPS_VALID_ID is missing from .env'
        );
    }

    if (!validPassword) {
        throw new Error(
            'MAIPS_VALID_PASSWORD is missing from .env'
        );
    }


    // =====================================================
    // INITIALIZE PAGE OBJECTS
    // =====================================================

    const homePage =
        new HomePage(page);

    const maipsLoginPage =
        new MAIPSLoginPage(page);


    // =====================================================
    // STEP 1: OPEN HOME PAGE
    // =====================================================

    await homePage.open();

    console.log(
        'Digital MAIPS Home page opened.'
    );


    // =====================================================
    // STEP 2: OPEN MAIPS USER LOGIN
    // =====================================================

    await homePage.openMAIPSUserLogin();

    console.log(
        'MAIPS User Login selected.'
    );


    // =====================================================
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();

    console.log(
        'MAIPS Login page displayed.'
    );


    // =====================================================
    // STEP 4: LOGIN WITH VALID CREDENTIALS
    // =====================================================

    await maipsLoginPage.login(
        validUserId,
        validPassword
    );

    console.log(
        'Login submitted.'
    );


    // =====================================================
    // STEP 5: VERIFY DASHBOARD
    // =====================================================

    await maipsLoginPage.verifyDashboard();

    console.log(
        'MAIPS User logged in successfully.'
    );


    // =====================================================
    // STEP 6: VERIFY LOGIN PAGE IS GONE
    // =====================================================

    await expect(
        maipsLoginPage.loginHeader
    ).not.toBeVisible();

    await expect(
        maipsLoginPage.usernameField
    ).not.toBeVisible();

    await expect(
        maipsLoginPage.passwordField
    ).not.toBeVisible();

    console.log(
        'Login page is no longer displayed.'
    );


    // =====================================================
    // STEP 7: VERIFY LOGOUT BUTTON
    // =====================================================

    await expect(
        maipsLoginPage.logoutButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        maipsLoginPage.logoutButton
    ).toBeEnabled();

    console.log(
        'Log Keluar button displayed.'
    );


    // =====================================================
    // STEP 8: VERIFY LOGOUT BUTTON TEXT
    // =====================================================

    await expect(
        maipsLoginPage.logoutButton
    ).toContainText(
        'Log Keluar'
    );

    console.log(
        'Log Keluar button verified.'
    );


    // =====================================================
    // STEP 9: SCREENSHOT BEFORE LOGOUT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_017_Before_Logout.png',
        fullPage: true
    });


    // =====================================================
    // STEP 10: CLICK LOGOUT
    // =====================================================

    await maipsLoginPage.logout();

    console.log(
        'Log Keluar clicked.'
    );


    // =====================================================
    // STEP 11: VERIFY REDIRECT TO LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();

    console.log(
        'User redirected to MAIPS Login page.'
    );


    // =====================================================
    // STEP 12: VERIFY LOGIN HEADER
    // =====================================================

    await expect(
        maipsLoginPage.loginHeader
    ).toContainText(
        'Log Masuk'
    );


    // =====================================================
    // STEP 13: VERIFY LOGIN COMPONENTS
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toBeVisible();

    await expect(
        maipsLoginPage.passwordField
    ).toBeVisible();

    await expect(
        maipsLoginPage.loginButton
    ).toBeVisible();

    console.log(
        'Login components displayed again.'
    );


    // =====================================================
    // STEP 14: VERIFY DASHBOARD IS GONE
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is no longer displayed.'
    );


    // =====================================================
    // STEP 15: VERIFY LOGOUT BUTTON IS GONE
    // =====================================================

    await expect(
        maipsLoginPage.logoutButton
    ).not.toBeVisible();

    console.log(
        'Log Keluar button is no longer displayed.'
    );


    // =====================================================
    // STEP 16: VERIFY CREDENTIAL FIELDS ARE EMPTY
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue('');

    console.log(
        'Login credential fields are empty.'
    );


    // =====================================================
    // STEP 17: SCREENSHOT AFTER LOGOUT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_017_Logout.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_017_Logout PASSED'
    );
    console.log(
        'MAIPS User logged out successfully.'
    );
    console.log(
        'User redirected to MAIPS Login page.'
    );
    console.log(
        'Dashboard session is no longer accessible.'
    );
    console.log('====================================');

});