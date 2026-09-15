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


test('TC_AUTH_MAIPS_011 - Forgot Password Clear ID Validation', async ({ page }) => {

    const validUserId =
        process.env.MAIPS_VALID_ID;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLE
    // =====================================================

    if (!validUserId) {
        throw new Error(
            'MAIPS_VALID_ID is missing from .env'
        );
    }


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
    // STEP 6: ENTER VALID USER ID
    // =====================================================

    await forgotPasswordPage.enterId(
        validUserId
    );

    console.log(
        'Valid MAIPS User ID entered.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR BECOMES ENABLED
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button enabled after entering ID.'
    );


    // =====================================================
    // STEP 8: CLEAR USER ID
    // =====================================================

    await forgotPasswordPage.clearId();

    console.log(
        'User ID cleared.'
    );


    // =====================================================
    // STEP 9: MOVE FOCUS AWAY FROM ID FIELD
    // =====================================================

    await forgotPasswordPage.backButton.focus();

    console.log(
        'Focus moved away from User ID field.'
    );


    // =====================================================
    // STEP 10: VERIFY ID IS EMPTY
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toHaveValue('');


    // =====================================================
    // STEP 11: VERIFY REQUIRED VALIDATION
    // =====================================================

    await forgotPasswordPage.verifyIdRequiredValidation();

    console.log(
        'Required User ID validation displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY HANTAR IS DISABLED
    // =====================================================

    await forgotPasswordPage.verifySubmitDisabled();

    console.log(
        'Hantar button disabled again.'
    );


    // =====================================================
    // STEP 13: VERIFY NO CONFIRMATION DIALOG
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
    // STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE
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
    // STEP 15: VERIFY LOGIN PAGE NOT DISPLAYED
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
    // STEP 16: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation PASSED'
    );
    console.log(
        'Required validation displayed after clearing ID.'
    );
    console.log(
        'Hantar button returned to disabled state.'
    );
    console.log('====================================');

});