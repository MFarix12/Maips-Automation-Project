const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_006 - Login Empty Password', async ({ page }) => {

    const validUserId =
        process.env.MAIPS_VALID_ID;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

    if (!validUserId) {
        throw new Error(
            'MAIPS_VALID_ID is missing from .env'
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
    // STEP 4: ENTER VALID USER ID
    // =====================================================

    await maipsLoginPage.enterUserId(
        validUserId
    );


    // =====================================================
    // STEP 5: LEAVE PASSWORD EMPTY
    // =====================================================

    await maipsLoginPage.verifyPasswordEmpty();


    // =====================================================
    // STEP 6: VERIFY VALUES BEFORE SUBMIT
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue(validUserId);

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 7: CLICK LOGIN
    // =====================================================

    await maipsLoginPage.clickLogin();


    // =====================================================
    // STEP 8: VERIFY PASSWORD REQUIRED VALIDATION
    // =====================================================

    await maipsLoginPage.verifyPasswordValidation();


    // =====================================================
    // STEP 9: VERIFY LOGIN PAGE REMAINS DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 10: VERIFY USER ID REMAINS ENTERED
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue(validUserId);


    // =====================================================
    // STEP 11: VERIFY PASSWORD REMAINS EMPTY
    // =====================================================

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 12: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 13: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_006_Login_Empty_Password.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_006_Login_Empty_Password PASSED'
    );
    console.log(
        'Empty Password validation displayed.'
    );
    console.log(
        'User remains on MAIPS Login page.'
    );
    console.log('====================================');

});