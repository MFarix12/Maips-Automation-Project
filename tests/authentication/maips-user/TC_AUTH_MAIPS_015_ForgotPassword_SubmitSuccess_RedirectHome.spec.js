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


test('TC_AUTH_MAIPS_015 - Forgot Password Submit Success', async ({ page }) => {

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
    // STEP 6: ENTER VALID REGISTERED ID
    // =====================================================

    await forgotPasswordPage.enterId(
        validUserId
    );

    console.log(
        'Valid registered MAIPS User ID entered.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        forgotPasswordPage.submitButton
    ).toBeEnabled();


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
    // STEP 12: VERIFY SUCCESS DIALOG
    // =====================================================

    const successDialog =
        await forgotPasswordPage.verifySuccessDialog();

    console.log(
        'Berjaya dialog displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY SUCCESS STATUS
    // =====================================================

    await expect(
        successDialog
    ).toContainText(
        'Berjaya'
    );

    console.log(
        'Successful Forgot Password status displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY OK BUTTON
    // =====================================================

    const okButton =
        successDialog.locator('#ok');

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
    // STEP 15: SCREENSHOT SUCCESS DIALOG
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_015_Success_Dialog.png',
        fullPage: true
    });


    // =====================================================
    // STEP 16: CLICK OK
    // =====================================================

    await forgotPasswordPage.clickDialogOK(
        successDialog
    );

    console.log(
        'OK button clicked.'
    );


    // =====================================================
    // STEP 17: VERIFY SUCCESS DIALOG CLOSED
    // =====================================================

    await expect(
        successDialog
    ).not.toBeVisible();

    console.log(
        'Berjaya dialog closed.'
    );


    // =====================================================
    // STEP 18: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await forgotPasswordPage.verifyPage();

    console.log(
        'User remains on Forgot Password page.'
    );


    // =====================================================
    // STEP 19: VERIFY HEADER
    // =====================================================

    await expect(
        forgotPasswordPage.header
    ).toContainText(
        'Lupa Kata Laluan'
    );


    // =====================================================
    // STEP 20: VERIFY FORGOT PASSWORD COMPONENTS
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
    // STEP 21: VERIFY LOGIN PAGE NOT DISPLAYED
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
    // STEP 22: VERIFY NO DIALOG REMAINS OPEN
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
    // STEP 23: FINAL SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess PASSED'
    );
    console.log(
        'Forgot Password request submitted successfully.'
    );
    console.log(
        'User remains on Forgot Password page after OK.'
    );
    console.log('====================================');

});