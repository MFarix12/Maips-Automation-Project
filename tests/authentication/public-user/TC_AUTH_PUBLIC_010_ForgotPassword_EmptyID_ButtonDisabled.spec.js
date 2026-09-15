const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_010 - Forgot Password Empty ID Button Disabled', async ({ page }) => {

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

    const forgotPasswordIdField =
        page.locator('vaadin-text-field input').first();

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

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY USER ID FIELD
    // =====================================================

    await expect(
        forgotPasswordIdField
    ).toBeVisible();

    console.log(
        'User ID field displayed.'
    );


    // =====================================================
    // STEP 7: VERIFY USER ID IS EMPTY
    // =====================================================

    await expect(
        forgotPasswordIdField
    ).toHaveValue('');

    console.log(
        'User ID field is empty.'
    );


    // =====================================================
    // STEP 8: VERIFY HANTAR BUTTON DISPLAYED
    // =====================================================

    await expect(
        submitButton
    ).toBeVisible();

    console.log(
        'Hantar button displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY HANTAR BUTTON DISABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeDisabled();

    console.log(
        'Hantar button is disabled.'
    );


    // =====================================================
    // STEP 10: VERIFY ID STILL EMPTY
    // =====================================================

    await expect(
        forgotPasswordIdField
    ).toHaveValue('');


    // =====================================================
    // STEP 11: VERIFY LOGIN PAGE IS GONE
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

    await expect(
        publicLoginPage.loginButton
    ).not.toBeVisible();

    console.log(
        'Public User Login form is not displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 13: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled PASSED'
    );

    console.log(
        'User ID field is empty.'
    );

    console.log(
        'Hantar button is correctly disabled.'
    );

    console.log('====================================');

});