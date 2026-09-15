const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_007 - Login Empty Credentials', async ({ page }) => {

    // =====================================================
    // INITIALIZE PAGE OBJECTS
    // =====================================================

    const homePage =
        new HomePage(page);

    const publicLoginPage =
        new PublicLoginPage(page);


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
    // STEP 4: VERIFY USER ID IS EMPTY
    // =====================================================

    await publicLoginPage.verifyUserIdEmpty();

    console.log(
        'User ID field is empty.'
    );


    // =====================================================
    // STEP 5: VERIFY PASSWORD IS EMPTY
    // =====================================================

    await publicLoginPage.verifyPasswordEmpty();

    console.log(
        'Password field is empty.'
    );


    // =====================================================
    // STEP 6: VERIFY BOTH FIELDS BEFORE LOGIN
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 7: CLICK LOGIN
    // =====================================================

    await publicLoginPage.clickLogin();

    console.log(
        'Log Masuk clicked with empty credentials.'
    );


    // =====================================================
    // STEP 8: VERIFY USER ID REQUIRED VALIDATION
    // =====================================================

    await publicLoginPage.verifyUserIdValidation();

    console.log(
        'User ID required validation displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY PASSWORD REQUIRED VALIDATION
    // =====================================================

    await publicLoginPage.verifyPasswordValidation();

    console.log(
        'Password required validation displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY USER ID CONTAINER INVALID
    // =====================================================

    await expect(
        publicLoginPage.usernameContainer
    ).toHaveAttribute(
        'invalid'
    );


    // =====================================================
    // STEP 11: VERIFY PASSWORD CONTAINER INVALID
    // =====================================================

    await expect(
        publicLoginPage.passwordContainer
    ).toHaveAttribute(
        'invalid'
    );

    console.log(
        'Both credential fields are marked invalid.'
    );


    // =====================================================
    // STEP 12: VERIFY USER ID ERROR MESSAGE
    // =====================================================

    await expect(
        publicLoginPage.usernameErrorMessage
    ).toBeVisible();

    console.log(
        'User ID validation message displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY PASSWORD ERROR MESSAGE
    // =====================================================

    await expect(
        publicLoginPage.passwordErrorMessage
    ).toBeVisible();

    console.log(
        'Password validation message displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY BOTH FIELDS REMAIN EMPTY
    // =====================================================

    await publicLoginPage.verifyUserIdEmpty();

    await publicLoginPage.verifyPasswordEmpty();

    console.log(
        'Both credential fields remain empty.'
    );


    // =====================================================
    // STEP 15: VERIFY LOGIN PAGE REMAINS DISPLAYED
    // =====================================================

    await expect(
        publicLoginPage.loginHeader
    ).toBeVisible();

    await expect(
        publicLoginPage.usernameField
    ).toBeVisible();

    await expect(
        publicLoginPage.passwordField
    ).toBeVisible();

    await expect(
        publicLoginPage.loginButton
    ).toBeVisible();

    console.log(
        'Public User Login page remains displayed.'
    );


    // =====================================================
    // STEP 16: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    await expect(
        publicLoginPage.dashboardMenu
    ).not.toBeVisible();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 17: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_007_Login_EmptyCredentials.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_007_Login_EmptyCredentials PASSED'
    );
    console.log(
        'User ID validation displayed successfully.'
    );
    console.log(
        'Password validation displayed successfully.'
    );
    console.log(
        'Login was prevented.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});