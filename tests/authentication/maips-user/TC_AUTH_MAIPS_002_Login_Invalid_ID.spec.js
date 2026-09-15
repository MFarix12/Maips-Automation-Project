const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_002 - Login Invalid ID', async ({ page }) => {

    const invalidUserId =
        process.env.MAIPS_INVALID_ID;

    const validPassword =
        process.env.MAIPS_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!invalidUserId) {
        throw new Error(
            'MAIPS_INVALID_ID is missing from .env'
        );
    }

    if (!validPassword) {
        throw new Error(
            'MAIPS_VALID_PASSWORD is missing from .env'
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
    // STEP 5: ENTER VALID PASSWORD
    // =====================================================

    await maipsLoginPage.enterPassword(
        validPassword
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
    // STEP 8: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 9: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 10: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_002_Login_Invalid_ID.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_002_Login_Invalid_ID PASSED'
    );
    console.log(
        'Invalid User ID correctly rejected.'
    );
    console.log(
        'User remains on MAIPS Login page.'
    );
    console.log('====================================');

});