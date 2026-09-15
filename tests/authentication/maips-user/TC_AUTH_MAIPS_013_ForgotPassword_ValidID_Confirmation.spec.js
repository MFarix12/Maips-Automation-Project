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


test('TC_AUTH_MAIPS_013 - Forgot Password Valid ID Confirmation', async ({ page }) => {

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

    console.log(
        'Hantar button is enabled.'
    );


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

    console.log(
        'Forgot Password confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 10: GET CONFIRMATION DIALOG
    // =====================================================

    const confirmationDialog =
        forgotPasswordPage.getConfirmationDialog();

    await expect(
        confirmationDialog
    ).toBeVisible();


    // =====================================================
    // STEP 11: VERIFY CONFIRMATION MESSAGE
    // =====================================================

    await expect(
        confirmationDialog
    ).toContainText(
        'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
    );

    console.log(
        'Correct confirmation message displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY BATAL BUTTON
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
    // STEP 13: VERIFY HANTAR BUTTON IN DIALOG
    // =====================================================

    const confirmButton =
        confirmationDialog.getByRole(
            'button',
            {
                name: 'Hantar',
                exact: true
            }
        );

    await expect(
        confirmButton
    ).toBeVisible();

    await expect(
        confirmButton
    ).toBeEnabled();

    console.log(
        'Confirmation Hantar button displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY ORIGINAL ID REMAINS
    // =====================================================

    await expect(
        forgotPasswordPage.idField
    ).toHaveValue(validUserId);

    console.log(
        'Entered User ID remains unchanged.'
    );


    // =====================================================
    // STEP 15: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation.png',
        fullPage: true
    });


    // =====================================================
    // IMPORTANT
    // DO NOT CLICK CONFIRMATION HANTAR IN THIS TEST
    // =====================================================

    console.log(
        'Confirmation request is intentionally not submitted.'
    );


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation PASSED'
    );
    console.log(
        'Confirmation dialog displayed successfully.'
    );
    console.log(
        'Batal and Hantar buttons are available.'
    );
    console.log('====================================');

});