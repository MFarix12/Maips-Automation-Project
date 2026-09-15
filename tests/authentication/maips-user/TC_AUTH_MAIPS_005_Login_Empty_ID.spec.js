const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_005 - Login Empty ID', async ({ page }) => {

    const validPassword =
        process.env.MAIPS_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLES
    // =====================================================

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
    // STEP 4: LEAVE USER ID EMPTY
    // =====================================================

    await maipsLoginPage.verifyUserIdEmpty();


    // =====================================================
    // STEP 5: ENTER VALID PASSWORD
    // =====================================================

    await maipsLoginPage.enterPassword(
        validPassword
    );


    // =====================================================
    // STEP 6: VERIFY VALUES BEFORE SUBMIT
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(validPassword);


    // =====================================================
    // STEP 7: CLICK LOGIN
    // =====================================================

    await maipsLoginPage.clickLogin();


    // =====================================================
    // STEP 8: VERIFY USER ID REQUIRED VALIDATION
    // =====================================================

    await maipsLoginPage.verifyUserIdValidation();


    // =====================================================
    // STEP 9: VERIFY LOGIN PAGE REMAINS DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 10: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 11: VERIFY PASSWORD REMAINS ENTERED
    // =====================================================

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(validPassword);


    // =====================================================
    // STEP 12: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_005_Login_Empty_ID.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_005_Login_Empty_ID PASSED'
    );
    console.log(
        'Empty User ID validation displayed.'
    );
    console.log(
        'User remains on MAIPS Login page.'
    );
    console.log('====================================');

});