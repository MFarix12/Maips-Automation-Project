const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_004 - Login Invalid Credentials', async ({ page }) => {

    const invalidUserId =
        process.env.PUBLIC_INVALID_ID;

    const invalidPassword =
        process.env.PUBLIC_INVALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!invalidUserId) {
        throw new Error(
            'PUBLIC_INVALID_ID is missing from .env'
        );
    }

    if (!invalidPassword) {
        throw new Error(
            'PUBLIC_INVALID_PASSWORD is missing from .env'
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
    // STEP 4: ENTER INVALID USER ID
    // =====================================================

    await publicLoginPage.enterUserId(
        invalidUserId
    );

    console.log(
        'Invalid Public User ID entered.'
    );


    // =====================================================
    // STEP 5: ENTER INVALID PASSWORD
    // =====================================================

    await publicLoginPage.enterPassword(
        invalidPassword
    );

    console.log(
        'Invalid password entered.'
    );


    // =====================================================
    // STEP 6: VERIFY PASSWORD MASKED
    // =====================================================

    await publicLoginPage.verifyPasswordHidden();

    console.log(
        'Password is masked.'
    );


    // =====================================================
    // STEP 7: CLICK LOGIN
    // =====================================================

    await publicLoginPage.clickLogin();

    console.log(
        'Log Masuk clicked.'
    );


    // =====================================================
    // STEP 8: VERIFY INVALID CREDENTIAL MESSAGE
    // =====================================================

    await publicLoginPage.verifyInvalidCredentials();

    console.log(
        'Invalid credential message displayed.'
    );


    // =====================================================
    // STEP 9: VERIFY EXACT ERROR MESSAGE
    // =====================================================

    await expect(
        publicLoginPage.invalidCredentialsMessage
    ).toHaveText(
        'Semak nama pengguna dan kata laluan anda dan cuba lagi.'
    );

    console.log(
        'Correct invalid credential message verified.'
    );


    // =====================================================
    // STEP 10: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'User remains on Public User Login page.'
    );


    // =====================================================
    // STEP 11: VERIFY INVALID USER ID REMAINS
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue(
        invalidUserId
    );

    console.log(
        'Invalid User ID remains entered.'
    );


    // =====================================================
    // STEP 12: VERIFY LOGIN COMPONENTS REMAIN DISPLAYED
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
        'Login components remain displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    await expect(
        publicLoginPage.dashboardMenu
    ).not.toBeVisible();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 14: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_004_Login_InvalidCredentials.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_004_Login_InvalidCredentials PASSED'
    );
    console.log(
        'Login correctly rejected invalid credentials.'
    );
    console.log(
        'Invalid credential message displayed.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});