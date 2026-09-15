const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');

const {
    ForgotPasswordPage
} = require('../../../pages/authentication/ForgotPassword');


test('TC_AUTH_MAIPS_012 - Forgot Password Back', async ({ page }) => {

    // =====================================================
    // INITIALIZE PAGE OBJECTS
    // =====================================================

    const homePage =
        new HomePage(page);

    const maipsLoginPage =
        new MAIPSLoginPage(page);

    const forgotPasswordPage =
        new ForgotPasswordPage(page);


    // =====================================================
    // STEP 1: OPEN DIGITAL MAIPS HOME
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
    // STEP 4: OPEN FORGOT PASSWORD
    // =====================================================

    await maipsLoginPage.openForgotPassword();

    console.log(
        'Lupa Kata Laluan clicked.'
    );


    // =====================================================
    // STEP 5: VERIFY FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY KEMBALI BUTTON
    // =====================================================

    await expect(
        forgotPasswordPage.backButton
    ).toBeVisible();

    await expect(
        forgotPasswordPage.backButton
    ).toBeEnabled();

    console.log(
        'Kembali button displayed.'
    );


    // =====================================================
    // STEP 7: CLICK KEMBALI
    // =====================================================

    await forgotPasswordPage.clickBack();

    console.log(
        'Kembali button clicked.'
    );


    // =====================================================
    // STEP 8: VERIFY DIGITAL MAIPS HOME
    // =====================================================

    await homePage.verifyHomePage();

    console.log(
        'Digital MAIPS Home page displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY MAIPS USER LOGIN OPTION
    // =====================================================

    await expect(
        homePage.maipsUserLoginButton
    ).toBeVisible();

    console.log(
        'MAIPS User Login option displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY PUBLIC USER LOGIN OPTION
    // =====================================================

    await expect(
        homePage.publicUserLoginButton
    ).toBeVisible();

    console.log(
        'Public User Login option displayed.'
    );


    // =====================================================
    // STEP 11: VERIFY FORGOT PASSWORD PAGE IS GONE
    // =====================================================

    await expect(
        forgotPasswordPage.header
    ).not.toBeVisible();

    await expect(
        forgotPasswordPage.idField
    ).not.toBeVisible();

    await expect(
        forgotPasswordPage.submitButton
    ).not.toBeVisible();

    await expect(
        forgotPasswordPage.backButton
    ).not.toBeVisible();

    console.log(
        'Forgot Password page is no longer displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY MAIPS LOGIN FORM IS NOT DISPLAYED
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

    await expect(
        maipsLoginPage.loginButton
    ).not.toBeVisible();

    console.log(
        'MAIPS Login form is not displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY NO DIALOG IS OPEN
    // =====================================================

    const openedDialog = page.locator(
        'vaadin-dialog-overlay[opened]'
    );

    await expect(
        openedDialog
    ).toHaveCount(0);

    console.log(
        'No dialog remains open.'
    );


    // =====================================================
    // STEP 14: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_012_ForgotPassword_Back.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_012_ForgotPassword_Back PASSED'
    );
    console.log(
        'Kembali returned user to Digital MAIPS Home.'
    );
    console.log(
        'Forgot Password page is no longer displayed.'
    );
    console.log('====================================');

});