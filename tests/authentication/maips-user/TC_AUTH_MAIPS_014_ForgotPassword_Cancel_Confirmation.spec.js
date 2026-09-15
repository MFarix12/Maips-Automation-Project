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


test('TC_AUTH_MAIPS_014 - Forgot Password Cancel Confirmation', async ({ page }) => {

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
    // STEP 4: OPEN FORGOT PASSWORD
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
    // STEP 7: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeEnabled();


    // =====================================================
    // STEP 8: CLICK HANTAR
    // =====================================================

    await forgotPasswordPage.submit();

    console.log(
        'Hantar button clicked.'
    );


    // =====================================================
    // STEP 9: VERIFY CONFIRMATION DIALOG
    // =====================================================

    await forgotPasswordPage.verifyConfirmationDialog();

    const confirmationDialog =
        forgotPasswordPage.getConfirmationDialog();

    await expect(
        confirmationDialog
    ).toBeVisible();

    console.log(
        'Confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY CONFIRMATION MESSAGE
    // =====================================================

    await expect(
        confirmationDialog
    ).toContainText(
        'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
    );


    // =====================================================
    // STEP 11: VERIFY BATAL BUTTON
    // =====================================================

    const cancelButton =
        confirmationDialog.getByRole(
            'button',
            {
                name: 'Batal',
                exact: true
            }
        );

    await expect(
        cancelButton
    ).toBeVisible();

    await expect(
        cancelButton
    ).toBeEnabled();

    console.log(
        'Batal button displayed.'
    );


    // =====================================================
    // STEP 12: CLICK BATAL
    // =====================================================

    await forgotPasswordPage.cancelRequest();

    console.log(
        'Batal button clicked.'
    );


    // =====================================================
    // STEP 13: VERIFY CONFIRMATION DIALOG CLOSED
    // =====================================================

    await expect(
        confirmationDialog
    ).not.toBeVisible();

    console.log(
        'Confirmation dialog closed.'
    );


    // =====================================================
    // STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'User remains on Forgot Password page.'
    );


    // =====================================================
    // STEP 15: VERIFY USER ID REMAINS ENTERED
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toHaveValue(validUserId);

    console.log(
        'Entered User ID remains unchanged.'
    );


    // =====================================================
    // STEP 16: VERIFY HANTAR REMAINS ENABLED
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button remains enabled.'
    );


    // =====================================================
    // STEP 17: VERIFY KEMBALI REMAINS AVAILABLE
    // =====================================================

    await expect(
        forgotPasswordPage.backButton
    ).toBeVisible();

    await expect(
        forgotPasswordPage.backButton
    ).toBeEnabled();


    // =====================================================
    // STEP 18: VERIFY NO DIALOG REMAINS OPEN
    // =====================================================

    const openedDialogs = page.locator(
        'vaadin-dialog-overlay[opened]'
    );

    await expect(
        openedDialogs
    ).toHaveCount(0);

    console.log(
        'No dialog remains open.'
    );


    // =====================================================
    // STEP 19: VERIFY LOGIN PAGE NOT DISPLAYED
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
    // STEP 20: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation PASSED'
    );
    console.log(
        'Forgot Password confirmation cancelled successfully.'
    );
    console.log(
        'User remains on Forgot Password page.'
    );
    console.log(
        'Entered User ID remains unchanged.'
    );
    console.log('====================================');

});