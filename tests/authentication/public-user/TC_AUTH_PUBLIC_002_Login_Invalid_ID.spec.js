const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_002 - Login Invalid ID', async ({ page }) => {

    const invalidUserId =
        process.env.PUBLIC_INVALID_ID;

    const validPassword =
        process.env.PUBLIC_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!invalidUserId) {
        throw new Error(
            'PUBLIC_INVALID_ID is missing from .env'
        );
    }

    if (!validPassword) {
        throw new Error(
            'PUBLIC_VALID_PASSWORD is missing from .env'
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
    // STEP 3: VERIFY PUBLIC USER LOGIN PAGE
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
    // STEP 5: ENTER VALID PASSWORD
    // =====================================================

    await publicLoginPage.enterPassword(
        validPassword
    );

    console.log(
        'Valid password entered.'
    );


    // =====================================================
    // STEP 6: CLICK LOGIN
    // =====================================================

    await publicLoginPage.clickLogin();

    console.log(
        'Log Masuk clicked.'
    );


    // =====================================================
    // STEP 7: VERIFY INVALID CREDENTIAL MESSAGE
    // =====================================================

    await publicLoginPage.verifyInvalidCredentials();

    console.log(
        'Invalid credential message displayed.'
    );


    // =====================================================
    // STEP 8: VERIFY EXACT ERROR MESSAGE
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
    // STEP 9: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'User remains on Public User Login page.'
    );


    // =====================================================
    // STEP 10: VERIFY LOGIN FIELDS REMAIN DISPLAYED
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
    // STEP 11: VERIFY INVALID ID REMAINS ENTERED
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue(
        invalidUserId
    );

    console.log(
        'Invalid User ID remains in the field.'
    );


    // =====================================================
    // STEP 12: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Public User dashboard is not displayed.'
    );


    // =====================================================
    // STEP 13: VERIFY PAPAN PEMUKA NOT DISPLAYED
    // =====================================================

    await expect(
        publicLoginPage.dashboardMenu
    ).not.toBeVisible();


    // =====================================================
    // STEP 14: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_002_Login_InvalidID.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_002_Login_InvalidID PASSED'
    );
    console.log(
        'Login correctly rejected invalid Public User ID.'
    );
    console.log(
        'Invalid credential message displayed.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});