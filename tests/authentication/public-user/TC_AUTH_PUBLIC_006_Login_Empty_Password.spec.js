const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_006 - Login Empty Password', async ({ page }) => {

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
    // STEP 4: ENTER VALID USER ID
    // =====================================================

    await publicLoginPage.enterUserId(
        validUserId
    );

    console.log(
        'Valid Public User ID entered.'
    );


    // =====================================================
    // STEP 5: VERIFY PASSWORD IS EMPTY
    // =====================================================

    await publicLoginPage.verifyPasswordEmpty();

    console.log(
        'Password field is empty.'
    );


    // =====================================================
    // STEP 6: VERIFY USER ID VALUE
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue(
        validUserId
    );


    // =====================================================
    // STEP 7: VERIFY PASSWORD STILL EMPTY
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 8: CLICK LOGIN
    // =====================================================

    await publicLoginPage.clickLogin();

    console.log(
        'Log Masuk clicked.'
    );


    // =====================================================
    // STEP 9: VERIFY PASSWORD REQUIRED VALIDATION
    // =====================================================

    await publicLoginPage.verifyPasswordValidation();

    console.log(
        'Password required validation displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY PASSWORD REMAINS EMPTY
    // =====================================================

    await publicLoginPage.verifyPasswordEmpty();

    console.log(
        'Password remains empty.'
    );


    // =====================================================
    // STEP 11: VERIFY USER ID REMAINS ENTERED
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue(
        validUserId
    );

    console.log(
        'Valid User ID remains entered.'
    );


    // =====================================================
    // STEP 12: VERIFY USER ID IS NOT INVALID
    // =====================================================

    await expect(
        publicLoginPage.usernameContainer
    ).not.toHaveAttribute(
        'invalid'
    );

    console.log(
        'User ID field has no required validation error.'
    );


    // =====================================================
    // STEP 13: VERIFY LOGIN PAGE REMAINS DISPLAYED
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
    // STEP 14: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    await expect(
        publicLoginPage.dashboardMenu
    ).not.toBeVisible();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 15: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_006_Login_EmptyPassword.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_006_Login_EmptyPassword PASSED'
    );
    console.log(
        'Empty Password validation displayed successfully.'
    );
    console.log(
        'Login was not performed.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});