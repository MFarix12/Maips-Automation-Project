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


test('TC_AUTH_MAIPS_010 - Forgot Password Empty ID Button Disabled', async ({ page }) => {

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


    // =====================================================
    // STEP 4: OPEN FORGOT PASSWORD PAGE
    // =====================================================

    await maipsLoginPage.openForgotPassword();


    // =====================================================
    // STEP 5: VERIFY FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY ID FIELD IS EMPTY
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toHaveValue('');

    console.log(
        'User ID field is empty.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR BUTTON DISABLED
    // =====================================================

    await forgotPasswordPage.verifySubmitDisabled();

    console.log(
        'Hantar button is disabled.'
    );


    // =====================================================
    // STEP 8: VERIFY DISABLED ATTRIBUTE
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toHaveAttribute('disabled');

    console.log(
        'Hantar button has disabled attribute.'
    );


    // =====================================================
    // STEP 9: VERIFY KEMBALI REMAINS AVAILABLE
    // =====================================================

    await expect(
        forgotPasswordPage.backButton
    ).toBeVisible();

    await expect(
        forgotPasswordPage.backButton
    ).toBeEnabled();

    console.log(
        'Kembali button remains available.'
    );


    // =====================================================
    // STEP 10: VERIFY NO DIALOG DISPLAYED
    // =====================================================

    const openedDialog = page.locator(
        'vaadin-dialog-overlay[opened]'
    );

    await expect(
        openedDialog
    ).toHaveCount(0);

    console.log(
        'No confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 11: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordPage.header
    ).toBeVisible();

    await expect(
        forgotPasswordPage.header
    ).toContainText(
        'Lupa Kata Laluan'
    );


    // =====================================================
    // STEP 12: VERIFY LOGIN FORM NOT DISPLAYED
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


    // =====================================================
    // STEP 13: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled PASSED'
    );
    console.log(
        'Empty User ID correctly keeps Hantar disabled.'
    );
    console.log(
        'No confirmation dialog was opened.'
    );
    console.log('====================================');

});