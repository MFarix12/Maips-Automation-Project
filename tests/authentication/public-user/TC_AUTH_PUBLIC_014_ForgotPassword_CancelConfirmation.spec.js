const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_014 - Forgot Password Cancel Confirmation', async ({ page }) => {

    // =====================================================
    // TEST DATA
    // =====================================================

    const validUserId =
        process.env.PUBLIC_VALID_ID;

    if (!validUserId) {
        throw new Error(
            'PUBLIC_VALID_ID is missing from .env'
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
    // PUBLIC FORGOT PASSWORD LOCATORS
    // =====================================================

    const forgotPasswordHeader =
        page.locator('#lupaKataLaluanHeader h1');

    const idField =
        page.locator(
            'vaadin-text-field input'
        ).first();

    const submitButton =
        page.locator('#submitBtn');


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
    // STEP 3: VERIFY PUBLIC USER LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'Public User Login page displayed.'
    );


    // =====================================================
    // STEP 4: OPEN FORGOT PASSWORD
    // =====================================================

    await publicLoginPage.openForgotPassword();

    console.log(
        'Lupa Kata Laluan clicked.'
    );


    // =====================================================
    // STEP 5: VERIFY FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        forgotPasswordHeader
    ).toContainText(
        'Lupa Kata Laluan'
    );

    await expect(
        idField
    ).toBeVisible();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: ENTER VALID PUBLIC USER ID
    // =====================================================

    await idField.fill(
        validUserId
    );

    await expect(
        idField
    ).toHaveValue(
        validUserId
    );

    console.log(
        'Valid Public User ID entered.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button enabled.'
    );


    // =====================================================
    // STEP 8: CLICK HANTAR
    // =====================================================

    await submitButton.click();

    console.log(
        'Hantar clicked.'
    );


    // =====================================================
    // STEP 9: LOCATE CONFIRMATION DIALOG
    // =====================================================

    const confirmationDialog =
        page.getByRole(
            'dialog',
            {
                name: 'Lupa Kata Laluan',
                exact: true
            }
        );


    // =====================================================
    // STEP 10: VERIFY CONFIRMATION DIALOG
    // =====================================================

    await expect(
        confirmationDialog
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        confirmationDialog
    ).toContainText(
        'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
    );

    console.log(
        'Confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 11: LOCATE BATAL BUTTON
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

    await cancelButton.click();

    console.log(
        'Batal clicked.'
    );


    // =====================================================
    // STEP 13: VERIFY CONFIRMATION DIALOG CLOSED
    // =====================================================

    await expect(
        confirmationDialog
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        'Confirmation dialog closed.'
    );


    // =====================================================
    // STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).toBeVisible();

    await expect(
        forgotPasswordHeader
    ).toContainText(
        'Lupa Kata Laluan'
    );

    await expect(
        idField
    ).toBeVisible();

    await expect(
        submitButton
    ).toBeVisible();

    console.log(
        'User remains on Forgot Password page.'
    );


    // =====================================================
    // STEP 15: VERIFY USER ID REMAINS
    // =====================================================

    await expect(
        idField
    ).toHaveValue(
        validUserId
    );

    console.log(
        'Public User ID remains in the field.'
    );


    // =====================================================
    // STEP 16: VERIFY HANTAR STILL ENABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeEnabled();

    console.log(
        'Hantar remains enabled.'
    );


    // =====================================================
    // STEP 17: VERIFY NO CONFIRMATION DIALOG OPEN
    // =====================================================

    const openedConfirmationDialog =
        page
            .locator(
                'vaadin-dialog-overlay[opened]'
            )
            .filter({
                hasText:
                    'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
            });

    await expect(
        openedConfirmationDialog
    ).toHaveCount(0);

    console.log(
        'No confirmation dialog remains open.'
    );


    // =====================================================
    // STEP 18: VERIFY LOGIN PAGE NOT DISPLAYED
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


    // =====================================================
    // STEP 19: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 20: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation PASSED'
    );

    console.log(
        'Confirmation dialog was displayed successfully.'
    );

    console.log(
        'Batal closed the confirmation dialog successfully.'
    );

    console.log(
        'User remains on Forgot Password page.'
    );

    console.log('====================================');

});