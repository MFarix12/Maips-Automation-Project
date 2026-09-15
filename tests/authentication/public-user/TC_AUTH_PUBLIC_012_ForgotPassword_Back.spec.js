const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_012 - Forgot Password Back to Home', async ({ page }) => {

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

    const backButton =
        page
            .getByText(
                'Kembali',
                { exact: true }
            )
            .filter({ visible: true })
            .first();


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
        forgotPasswordIdField
    ).toBeVisible();

    await expect(
        submitButton
    ).toBeVisible();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: VERIFY KEMBALI BUTTON
    // =====================================================

    await expect(
        backButton
    ).toBeVisible();

    await expect(
        backButton
    ).toBeEnabled();

    console.log(
        'Kembali button displayed.'
    );


    // =====================================================
    // STEP 7: CLICK KEMBALI
    // =====================================================

    await backButton.click();

    console.log(
        'Kembali clicked.'
    );


    // =====================================================
    // STEP 8: VERIFY DIGITAL MAIPS HOME PAGE
    // =====================================================

    await homePage.verifyHomePage();

    console.log(
        'Digital MAIPS Home page displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY MAIPS USER LOGIN OPTION
    // =====================================================

    await expect(
        homePage.maipsUserLoginButton
    ).toBeVisible();

    console.log(
        'MAIPS User Login option displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY PUBLIC USER LOGIN OPTION
    // =====================================================

    await expect(
        homePage.publicUserLoginButton
    ).toBeVisible();

    console.log(
        'Public User Login option displayed.'
    );


    // =====================================================
    // STEP 11: VERIFY FORGOT PASSWORD PAGE IS GONE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).not.toBeVisible();

    await expect(
        forgotPasswordIdField
    ).not.toBeVisible();

    await expect(
        submitButton
    ).not.toBeVisible();

    await expect(
        backButton
    ).not.toBeVisible();

    console.log(
        'Forgot Password page is no longer displayed.'
    );


    // =====================================================
    // STEP 12: VERIFY PUBLIC LOGIN FORM NOT DISPLAYED
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
    // STEP 13: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY NO DIALOG OPEN
    // =====================================================

    const openedDialogs =
        page.locator(
            'vaadin-dialog-overlay[opened]'
        );

    await expect(
        openedDialogs
    ).toHaveCount(0);

    console.log(
        'No dialog remains open.'
    );


    // =====================================================
    // STEP 15: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_012_ForgotPassword_BackToHome.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_012_ForgotPassword_BackToHome PASSED'
    );

    console.log(
        'Kembali successfully returned Public User to Digital MAIPS Home.'
    );

    console.log(
        'Forgot Password page is no longer displayed.'
    );

    console.log('====================================');

});