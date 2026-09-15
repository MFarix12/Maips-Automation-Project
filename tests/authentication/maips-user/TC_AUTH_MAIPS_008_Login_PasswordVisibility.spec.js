const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_008 - Login Password Visibility', async ({ page }) => {

    // Use harmless test data.
    // No real password is required for this test.
    const testPassword = 'TestPassword123!';


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
    // STEP 4: ENTER PASSWORD
    // =====================================================

    await maipsLoginPage.enterPassword(
        testPassword
    );


    // =====================================================
    // STEP 5: VERIFY PASSWORD VALUE
    // =====================================================

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(testPassword);


    // =====================================================
    // STEP 6: VERIFY PASSWORD HIDDEN BY DEFAULT
    // =====================================================

    await maipsLoginPage.verifyPasswordHidden();

    console.log(
        'Password is hidden by default.'
    );


    // =====================================================
    // STEP 7: SHOW PASSWORD
    // =====================================================

    await maipsLoginPage.showPassword();

    console.log(
        'Password visibility enabled.'
    );


    // =====================================================
    // STEP 8: VERIFY PASSWORD VALUE DID NOT CHANGE
    // =====================================================

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(testPassword);


    // =====================================================
    // STEP 9: VERIFY PASSWORD TYPE IS TEXT
    // =====================================================

    await maipsLoginPage.verifyPasswordVisible();


    // =====================================================
    // STEP 10: HIDE PASSWORD AGAIN
    // =====================================================

    await maipsLoginPage.hidePassword();

    console.log(
        'Password visibility disabled.'
    );


    // =====================================================
    // STEP 11: VERIFY PASSWORD VALUE STILL UNCHANGED
    // =====================================================

    await expect(
        maipsLoginPage.passwordField
    ).toHaveValue(testPassword);


    // =====================================================
    // STEP 12: VERIFY PASSWORD HIDDEN AGAIN
    // =====================================================

    await maipsLoginPage.verifyPasswordHidden();


    // =====================================================
    // STEP 13: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 14: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await maipsLoginPage.verifyDashboardNotDisplayed();


    // =====================================================
    // STEP 15: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_008_Login_PasswordVisibility.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_008_Login_PasswordVisibility PASSED'
    );
    console.log(
        'Password can be shown and hidden successfully.'
    );
    console.log(
        'Password value remains unchanged.'
    );
    console.log('====================================');

});