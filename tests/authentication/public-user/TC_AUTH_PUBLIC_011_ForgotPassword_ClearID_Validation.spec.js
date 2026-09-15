const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_011 - Forgot Password Clear ID Validation', async ({ page }) => {

    const validUserId =
        process.env.PUBLIC_VALID_ID;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLE
    // =====================================================

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

    const idContainer =
        page.locator('vaadin-text-field').first();

    const idField =
        idContainer.locator('input');

    const idErrorMessage =
        idContainer.locator('[slot="error-message"]');

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
    // STEP 3: VERIFY LOGIN PAGE
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

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY ID FIELD EMPTY INITIALLY
    // =====================================================

    await expect(
        idField
    ).toBeVisible();

    await expect(
        idField
    ).toHaveValue('');

    console.log(
        'User ID field is initially empty.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR DISABLED INITIALLY
    // =====================================================

    await expect(
        submitButton
    ).toBeDisabled();

    console.log(
        'Hantar is initially disabled.'
    );


    // =====================================================
    // STEP 8: ENTER VALID USER ID
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
    // STEP 9: VERIFY HANTAR BECOMES ENABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeEnabled();

    console.log(
        'Hantar became enabled.'
    );


    // =====================================================
    // STEP 10: CLEAR USER ID
    // =====================================================

    await idField.clear();

    console.log(
        'User ID cleared.'
    );


    // =====================================================
    // STEP 11: MOVE FOCUS AWAY TO TRIGGER VALIDATION
    // =====================================================

    await forgotPasswordHeader.click();

    console.log(
        'User ID field lost focus.'
    );


    // =====================================================
    // STEP 12: VERIFY USER ID EMPTY
    // =====================================================

    await expect(
        idField
    ).toHaveValue('');


    // =====================================================
    // STEP 13: VERIFY REQUIRED VALIDATION
    // =====================================================

    await expect(
        idContainer
    ).toHaveAttribute(
        'invalid'
    );

    await expect(
        idErrorMessage
    ).toBeVisible();

    console.log(
        'Required User ID validation displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY HANTAR DISABLED AGAIN
    // =====================================================

    await expect(
        submitButton
    ).toBeDisabled();

    console.log(
        'Hantar became disabled after clearing User ID.'
    );


    // =====================================================
    // STEP 15: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).toBeVisible();

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
    // STEP 16: VERIFY LOGIN PAGE NOT DISPLAYED
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
    // STEP 17: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 18: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation PASSED'
    );

    console.log(
        'User ID was entered and cleared successfully.'
    );

    console.log(
        'Required validation displayed successfully.'
    );

    console.log(
        'Hantar button returned to disabled state.'
    );

    console.log('====================================');

});