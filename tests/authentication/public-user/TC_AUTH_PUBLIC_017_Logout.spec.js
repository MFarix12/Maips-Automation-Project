const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_017 - Logout', async ({ page }) => {

    // =====================================================
    // TEST DATA
    // =====================================================

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
    // STEP 4: LOGIN WITH VALID CREDENTIALS
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
        'Public User logged in successfully.'
    );

    console.log(
        'Papan Pemuka displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY LOGIN PAGE IS GONE
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

    console.log(
        'Login page is no longer displayed.'
    );


    // =====================================================
    // STEP 7: VERIFY LOGOUT BUTTON
    // =====================================================

    await expect(
        publicLoginPage.logoutButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        publicLoginPage.logoutButton
    ).toBeEnabled();

    console.log(
        'Log Keluar button displayed.'
    );


    // =====================================================
    // STEP 8: SCREENSHOT BEFORE LOGOUT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_017_BeforeLogout.png',
        fullPage: true
    });


    // =====================================================
    // STEP 9: LOGOUT
    // =====================================================

    await publicLoginPage.logout();

    console.log(
        'Log Keluar clicked.'
    );


    // =====================================================
    // STEP 10: VERIFY PUBLIC USER LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'Public User Login page displayed after logout.'
    );


    // =====================================================
    // STEP 11: VERIFY DASHBOARD IS GONE
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is no longer displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY LOGIN FIELDS EMPTY
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue('');

    console.log(
        'Login fields are empty after logout.'
    );


    // =====================================================
    // STEP 13: VERIFY LOGIN BUTTON
    // =====================================================

    await expect(
        publicLoginPage.loginButton
    ).toBeVisible();

    await expect(
        publicLoginPage.loginButton
    ).toBeEnabled();

    console.log(
        'Log Masuk button displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY FORGOT PASSWORD LINK
    // =====================================================

    await expect(
        publicLoginPage.forgotPasswordLink
    ).toBeVisible();

    console.log(
        'Lupa Kata Laluan link displayed.'
    );


    // =====================================================
    // STEP 15: FINAL SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_017_Logout.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_017_Logout PASSED'
    );

    console.log(
        'Public User logged in successfully.'
    );

    console.log(
        'Public User logged out successfully.'
    );

    console.log(
        'User returned to Public User Login page.'
    );

    console.log('====================================');

});