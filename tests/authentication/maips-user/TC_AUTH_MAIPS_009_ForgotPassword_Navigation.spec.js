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


test('TC_AUTH_MAIPS_009 - Forgot Password Navigation', async ({ page }) => {

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
    // STEP 1: OPEN HOME PAGE
    // =====================================================

    await homePage.open();


    // =====================================================
    // STEP 2: OPEN MAIPS USER LOGIN
    // =====================================================

    await homePage.openMAIPSUserLogin();


    // =====================================================
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();

    console.log(
        'MAIPS User Login page displayed.'
    );


    // =====================================================
    // STEP 4: VERIFY FORGOT PASSWORD LINK
    // =====================================================

    await expect(
        maipsLoginPage.forgotPasswordLink
    ).toBeVisible();

    await expect(
        maipsLoginPage.forgotPasswordLink
    ).toContainText(
        'Lupa Kata Laluan?'
    );

    console.log(
        'Lupa Kata Laluan link displayed.'
    );


    // =====================================================
    // STEP 5: CLICK FORGOT PASSWORD
    // =====================================================

    await maipsLoginPage.openForgotPassword();

    console.log(
        'Lupa Kata Laluan link clicked.'
    );


    // =====================================================
    // STEP 6: VERIFY FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 7: VERIFY HEADER
    // =====================================================

    await expect(
        forgotPasswordPage.header
    ).toContainText(
        'Lupa Kata Laluan'
    );


    // =====================================================
    // STEP 8: VERIFY ID FIELD
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toBeVisible();

    await expect(
        forgotPasswordPage.idField
    ).toHaveValue('');

    console.log(
        'Forgot Password ID field displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY HANTAR BUTTON
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeVisible();

    console.log(
        'Hantar button displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY KEMBALI BUTTON
    // =====================================================

    await expect(
        forgotPasswordPage.backButton
    ).toBeVisible();

    console.log(
        'Kembali button displayed.'
    );


    // =====================================================
    // STEP 11: VERIFY LOGIN PAGE IS NOT DISPLAYED
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
        'Login form is no longer displayed.'
    );


    // =====================================================
    // STEP 12: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_009_ForgotPassword_Navigation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_009_ForgotPassword_Navigation PASSED'
    );
    console.log(
        'User successfully navigated from MAIPS Login'
    );
    console.log(
        'to the Forgot Password page.'
    );
    console.log('====================================');

});