const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_013 - Forgot Password Valid ID Confirmation', async ({ page }) => {

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

    await expect(
        submitButton
    ).toBeVisible();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY HANTAR DISABLED INITIALLY
    // =====================================================

    await expect(
        idField
    ).toHaveValue('');

    await expect(
        submitButton
    ).toBeDisabled();

    console.log(
        'Hantar is disabled while ID is empty.'
    );


    // =====================================================
    // STEP 7: ENTER VALID PUBLIC USER ID
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
    // STEP 8: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button enabled.'
    );


    // =====================================================
    // STEP 9: CLICK HANTAR
    // =====================================================

    await submitButton.click();

    console.log(
        'Hantar clicked.'
    );


    // =====================================================
    // STEP 10: LOCATE CONFIRMATION DIALOG
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
    // STEP 11: VERIFY CONFIRMATION DIALOG
    // =====================================================

    await expect(
        confirmationDialog
    ).toBeVisible({
        timeout: 15000
    });

    console.log(
        'Forgot Password confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY CONFIRMATION MESSAGE
    // =====================================================

    const confirmationMessage =
        confirmationDialog.getByText(
            'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.',
            { exact: true }
        );

    await expect(
        confirmationMessage
    ).toBeVisible();

    await expect(
        confirmationDialog
    ).toContainText(
        'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
    );

    console.log(
        'Correct confirmation message displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY BATAL BUTTON
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
        'Batal button displayed and enabled.'
    );


    // =====================================================
    // STEP 14: VERIFY SECOND HANTAR BUTTON
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
        'Confirmation Hantar button displayed and enabled.'
    );


    // =====================================================
    // STEP 15: VERIFY ORIGINAL ID REMAINS
    // =====================================================

    await expect(
        idField
    ).toHaveValue(
        validUserId
    );

    console.log(
        'Public User ID remains unchanged.'
    );


    // =====================================================
    // STEP 16: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 17: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation PASSED'
    );

    console.log(
        'Valid Public User ID accepted.'
    );

    console.log(
        'Forgot Password confirmation dialog displayed.'
    );

    console.log(
        'Batal and Hantar actions are available.'
    );

    console.log('====================================');

});