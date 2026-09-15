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


test('TC_AUTH_MAIPS_016 - Forgot Password Submit Failed', async ({ page }) => {

    const unregisteredId =
        process.env.MAIPS_UNREGISTERED_ID;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLE
    // =====================================================

    if (!unregisteredId) {
        throw new Error(
            'MAIPS_UNREGISTERED_ID is missing from .env'
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
    // STEP 6: ENTER ID WITHOUT REGISTERED EMAIL
    // =====================================================

    await forgotPasswordPage.enterId(
        unregisteredId
    );

    console.log(
        'MAIPS User ID without registered email entered.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button is enabled.'
    );


    // =====================================================
    // STEP 8: CLICK FIRST HANTAR
    // =====================================================

    await forgotPasswordPage.submit();

    console.log(
        'First Hantar clicked.'
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
    // STEP 11: CONFIRM REQUEST
    // =====================================================

    await forgotPasswordPage.confirmRequest();

    console.log(
        'Confirmation Hantar clicked.'
    );


    // =====================================================
    // STEP 12: VERIFY FAILED DIALOG
    // =====================================================

    const failedDialog =
        await forgotPasswordPage.verifyFailedDialog();

    console.log(
        'Tidak Berjaya dialog displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY FAILURE STATUS
    // =====================================================

    await expect(
        failedDialog
    ).toContainText(
        'Tidak Berjaya'
    );

    console.log(
        'Tidak Berjaya status verified.'
    );


    // =====================================================
    // STEP 14: VERIFY FAILURE MESSAGE
    // =====================================================

    const expectedFailureMessage =
        'Tiada email berdaftar dalam digital MAIPs. Sila hubungi pihak MAIPs untuk bantuan lanjut.';

    await expect(
        failedDialog
    ).toContainText(
        expectedFailureMessage
    );

    console.log(
        'No registered email message verified.'
    );


    // =====================================================
    // STEP 15: VERIFY OK BUTTON
    // =====================================================

    const okButton =
        failedDialog.locator('#ok');

    await expect(
        okButton
    ).toBeVisible();

    await expect(
        okButton
    ).toBeEnabled();

    console.log(
        'OK button displayed.'
    );


    // =====================================================
    // STEP 16: SCREENSHOT FAILURE DIALOG
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_016_ForgotPassword_Failed_Dialog.png',
        fullPage: true
    });


    // =====================================================
    // STEP 17: CLICK OK
    // =====================================================

    await forgotPasswordPage.clickDialogOK(
        failedDialog
    );

    console.log(
        'OK button clicked.'
    );


    // =====================================================
    // STEP 18: VERIFY FAILED DIALOG CLOSED
    // =====================================================

    await expect(
        failedDialog
    ).not.toBeVisible();

    console.log(
        'Failure dialog closed.'
    );


    // =====================================================
    // STEP 19: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'User remains on Forgot Password page.'
    );


    // =====================================================
    // STEP 20: VERIFY HEADER
    // =====================================================

    await expect(
        forgotPasswordPage.header
    ).toContainText(
        'Lupa Kata Laluan'
    );


    // =====================================================
    // STEP 21: VERIFY FORGOT PASSWORD COMPONENTS
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toBeVisible();

    await expect(
        forgotPasswordPage.submitButton
    ).toBeVisible();

    await expect(
        forgotPasswordPage.backButton
    ).toBeVisible();

    console.log(
        'Forgot Password components remain displayed.'
    );


    // =====================================================
    // STEP 22: VERIFY LOGIN PAGE NOT DISPLAYED
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
        'MAIPS Login page is not displayed.'
    );


    // =====================================================
    // STEP 23: VERIFY NO DIALOG REMAINS OPEN
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
    // STEP 24: FINAL SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed PASSED'
    );
    console.log(
        'System correctly handled ID without registered email.'
    );
    console.log(
        'User remains on Forgot Password page after OK.'
    );
    console.log('====================================');

});