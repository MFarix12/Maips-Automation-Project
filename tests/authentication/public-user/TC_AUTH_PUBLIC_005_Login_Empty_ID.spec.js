const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_005 - Login Empty ID', async ({ page }) => {

    const validPassword =
        process.env.PUBLIC_VALID_PASSWORD;


    // =====================================================
    // VERIFY ENVIRONMENT VARIABLE
    // =====================================================

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
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'Public User Login page displayed.'
    );


    // =====================================================
    // STEP 4: VERIFY USER ID IS EMPTY
    // =====================================================

    await publicLoginPage.verifyUserIdEmpty();

    console.log(
        'User ID field is empty.'
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
    // STEP 6: VERIFY PASSWORD IS MASKED
    // =====================================================

    await publicLoginPage.verifyPasswordHidden();

    console.log(
        'Password is masked.'
    );


    // =====================================================
    // STEP 7: VERIFY USER ID STILL EMPTY
    // =====================================================

    await expect(
        publicLoginPage.usernameField
    ).toHaveValue('');


    // =====================================================
    // STEP 8: CLICK LOGIN
    // =====================================================

    await publicLoginPage.clickLogin();

    console.log(
        'Log Masuk clicked.'
    );


    // =====================================================
    // STEP 9: VERIFY USER ID REQUIRED VALIDATION
    // =====================================================

    await publicLoginPage.verifyUserIdValidation();

    console.log(
        'User ID required validation displayed.'
    );


    // =====================================================
    // STEP 10: VERIFY USER ID REMAINS EMPTY
    // =====================================================

    await publicLoginPage.verifyUserIdEmpty();

    console.log(
        'User ID remains empty.'
    );


    // =====================================================
    // STEP 11: VERIFY LOGIN PAGE REMAINS DISPLAYED
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
    // STEP 12: VERIFY PASSWORD REMAINS ENTERED
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue(
        validPassword
    );

    console.log(
        'Password remains entered.'
    );


    // =====================================================
    // STEP 13: VERIFY PASSWORD FIELD IS NOT INVALID
    // =====================================================

    await expect(
        publicLoginPage.passwordContainer
    ).not.toHaveAttribute(
        'invalid'
    );

    console.log(
        'Password field has no required validation error.'
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
            'test-results/TC_AUTH_PUBLIC_005_Login_EmptyID.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_005_Login_EmptyID PASSED'
    );
    console.log(
        'Empty User ID validation displayed successfully.'
    );
    console.log(
        'Login was not performed.'
    );
    console.log(
        'Dashboard was not displayed.'
    );
    console.log('====================================');

});