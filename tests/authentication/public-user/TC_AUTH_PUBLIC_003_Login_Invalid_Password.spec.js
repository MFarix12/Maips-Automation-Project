const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_003 - Login Invalid Password', async ({ page }) => {

    const validUserId =
        process.env.PUBLIC_VALID_ID;

    const invalidPassword =
        process.env.PUBLIC_INVALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!validUserId) {
        throw new Error(
            'PUBLIC_VALID_ID is missing from .env'
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
    // STEP 4: ENTER VALID USER ID
    // =====================================================

    await publicLoginPage.enterUserId(
        validUserId
    );

    console.log(
        'Valid Public User ID entered.'
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
    // STEP 6: VERIFY PASSWORD IS MASKED
    // =====================================================

    await publicLoginPage.verifyPasswordHidden();

    console.log(
        'Password remains masked.'
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
        'Correct error message verified.'
    );


    // =====================================================
    // STEP 10: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'User remains on Public User Login page.'
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
    // STEP 12: VERIFY LOGIN COMPONENTS
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toBeVisible();

    await expect(
        publicLoginPage.passwordField
    ).toBeVisible();

    await expect(
        publicLoginPage.loginButton
    ).toBeVisible();


    // =====================================================
    // STEP 13: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Public User dashboard is not displayed.'
    );


    // =====================================================
    // STEP 14: VERIFY PAPAN PEMUKA NOT DISPLAYED
    // =====================================================

    await expect(
        publicLoginPage.dashboardMenu
    ).not.toBeVisible();


    // =====================================================
    // STEP 15: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_003_Login_InvalidPassword.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_003_Login_InvalidPassword PASSED'
    );
    console.log(
        'Login correctly rejected invalid password.'
    );
    console.log(
        'Invalid credential message displayed.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});