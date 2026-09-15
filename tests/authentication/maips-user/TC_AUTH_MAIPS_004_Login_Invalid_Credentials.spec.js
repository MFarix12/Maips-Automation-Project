const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_004 - Login Invalid Credentials', async ({ page }) => {

    const invalidUserId =
        process.env.MAIPS_INVALID_ID;

    const invalidPassword =
        process.env.MAIPS_INVALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!invalidUserId) {
        throw new Error(
            'MAIPS_INVALID_ID is missing from .env'
        );
    }

    if (!invalidPassword) {
        throw new Error(
            'MAIPS_INVALID_PASSWORD is missing from .env'
        );
    }


    // =====================================================
    // INITIALIZE PAGE OBJECTS
    // =====================================================

    const homePage =
        new HomePage(page);

    const maipsLoginPage =
        new MAIPSLoginPage(page);


    // =====================================================
    // STEP 1: OPEN HOME PAGE
    // =====================================================

    await homePage.open();


    // =====================================================
    // STEP 2: OPEN MAIPS USER LOGIN
    // =====================================================

    await homePage.openMAIPSUserLogin();


    // =====================================================
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 4: ENTER INVALID USER ID
    // =====================================================

    await maipsLoginPage.enterUserId(
        invalidUserId
    );


    // =====================================================
    // STEP 5: ENTER INVALID PASSWORD
    // =====================================================

    await maipsLoginPage.enterPassword(
        invalidPassword
    );


    // =====================================================
    // STEP 6: CLICK LOGIN
    // =====================================================

    await expect(
        maipsLoginPage.loginButton
    ).toBeEnabled();

    await maipsLoginPage.loginButton.click();


    // =====================================================
    // STEP 7: VERIFY INVALID CREDENTIALS MESSAGE
    // =====================================================

    await maipsLoginPage.verifyInvalidCredentials();


    // =====================================================
    // STEP 8: VERIFY LOGIN PAGE REMAINS DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 9: VERIFY ENTERED VALUES REMAIN
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue(invalidUserId);

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(invalidPassword);


    // =====================================================
    // STEP 10: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 11: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_004_Login_Invalid_Credentials.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_004_Login_Invalid_Credentials PASSED'
    );
    console.log(
        'Invalid credentials correctly rejected.'
    );
    console.log(
        'User remains on MAIPS Login page.'
    );
    console.log('====================================');

});