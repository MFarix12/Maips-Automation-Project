const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_009 - Forgot Password Navigation', async ({ page }) => {

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
    // STEP 4: VERIFY FORGOT PASSWORD LINK
    // =====================================================

    await expect(
        publicLoginPage.forgotPasswordLink
    ).toBeVisible();

    await expect(
        publicLoginPage.forgotPasswordLink
    ).toHaveText(
        'Lupa Kata Laluan?'
    );

    console.log(
        'Lupa Kata Laluan link displayed.'
    );


    // =====================================================
    // STEP 5: CLICK FORGOT PASSWORD
    // =====================================================

    await publicLoginPage.openForgotPassword();

    console.log(
        'Lupa Kata Laluan clicked.'
    );


    // =====================================================
    // STEP 6: VERIFY FORGOT PASSWORD HEADER
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
    // STEP 7: VERIFY USER ID FIELD
    // =====================================================

    await expect(
        forgotPasswordIdField
    ).toBeVisible();

    console.log(
        'Forgot Password User ID field displayed.'
    );


    // =====================================================
    // STEP 8: VERIFY USER ID FIELD EMPTY
    // =====================================================

    await expect(
        forgotPasswordIdField
    ).toHaveValue('');

    console.log(
        'Forgot Password User ID field is empty.'
    );


    // =====================================================
    // STEP 9: VERIFY LOGIN PAGE IS NO LONGER DISPLAYED
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
        'Public User Login form is no longer displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 11: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_009_ForgotPassword_Navigation.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_009_ForgotPassword_Navigation PASSED'
    );
    console.log(
        'Public User successfully navigated to Forgot Password.'
    );
    console.log(
        'Lupa Kata Laluan page displayed successfully.'
    );
    console.log('====================================');

});