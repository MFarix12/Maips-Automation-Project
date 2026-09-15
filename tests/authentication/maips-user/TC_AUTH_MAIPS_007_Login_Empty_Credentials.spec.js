const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_007 - Login Empty Credentials', async ({ page }) => {

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
    // STEP 4: VERIFY USER ID IS EMPTY
    // =====================================================

    await maipsLoginPage.verifyUserIdEmpty();


    // =====================================================
    // STEP 5: VERIFY PASSWORD IS EMPTY
    // =====================================================

    await maipsLoginPage.verifyPasswordEmpty();


    // =====================================================
    // STEP 6: VERIFY VALUES BEFORE SUBMIT
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 7: CLICK LOGIN
    // =====================================================

    await maipsLoginPage.clickLogin();


    // =====================================================
    // STEP 8: VERIFY USER ID REQUIRED VALIDATION
    // =====================================================

    await maipsLoginPage.verifyUserIdValidation();


    // =====================================================
    // STEP 9: VERIFY PASSWORD REQUIRED VALIDATION
    // =====================================================

    await maipsLoginPage.verifyPasswordValidation();


    // =====================================================
    // STEP 10: VERIFY BOTH FIELDS REMAIN EMPTY
    // =====================================================

    await expect(
        maipsLoginPage.usernameField
    ).toHaveValue('');

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue('');


    // =====================================================
    // STEP 11: VERIFY LOGIN PAGE REMAINS DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 12: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 13: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_007_Login_Empty_Credentials.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_007_Login_Empty_Credentials PASSED'
    );
    console.log(
        'User ID required validation displayed.'
    );
    console.log(
        'Password required validation displayed.'
    );
    console.log(
        'User remains on MAIPS Login page.'
    );
    console.log('====================================');

});