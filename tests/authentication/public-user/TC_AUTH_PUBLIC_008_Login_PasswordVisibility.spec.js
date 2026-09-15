const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_008 - Password Visibility', async ({ page }) => {

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
    // STEP 4: ENTER PASSWORD
    // =====================================================

    await publicLoginPage.enterPassword(
        validPassword
    );

    console.log(
        'Password entered.'
    );


    // =====================================================
    // STEP 5: VERIFY PASSWORD VALUE
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue(
        validPassword
    );


    // =====================================================
    // STEP 6: VERIFY PASSWORD HIDDEN BY DEFAULT
    // =====================================================

    await publicLoginPage.verifyPasswordHidden();

    console.log(
        'Password is hidden by default.'
    );


    // =====================================================
    // STEP 7: VERIFY PASSWORD TYPE = PASSWORD
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveAttribute(
        'type',
        'password'
    );


    // =====================================================
    // STEP 8: VERIFY SHOW PASSWORD BUTTON
    // =====================================================

    await expect(
        publicLoginPage.passwordVisibilityButton
    ).toBeVisible();

    await expect(
        publicLoginPage.passwordVisibilityButton
    ).toBeEnabled();

    console.log(
        'Show password button displayed.'
    );


    // =====================================================
    // STEP 9: CLICK SHOW PASSWORD
    // =====================================================

    await publicLoginPage.showPassword();

    console.log(
        'Show password clicked.'
    );


    // =====================================================
    // STEP 10: VERIFY PASSWORD IS VISIBLE
    // =====================================================

    await publicLoginPage.verifyPasswordVisible();

    await expect(
        publicLoginPage.passwordField
    ).toHaveAttribute(
        'type',
        'text'
    );

    console.log(
        'Password is now visible.'
    );


    // =====================================================
    // STEP 11: VERIFY PASSWORD VALUE DID NOT CHANGE
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue(
        validPassword
    );

    console.log(
        'Password value remains unchanged.'
    );


    // =====================================================
    // STEP 12: HIDE PASSWORD AGAIN
    // =====================================================

    await publicLoginPage.hidePassword();

    console.log(
        'Password visibility button clicked again.'
    );


    // =====================================================
    // STEP 13: VERIFY PASSWORD HIDDEN AGAIN
    // =====================================================

    await publicLoginPage.verifyPasswordHidden();

    await expect(
        publicLoginPage.passwordField
    ).toHaveAttribute(
        'type',
        'password'
    );

    console.log(
        'Password is hidden again.'
    );


    // =====================================================
    // STEP 14: VERIFY PASSWORD VALUE STILL UNCHANGED
    // =====================================================

    await expect(
        publicLoginPage.passwordField
    ).toHaveValue(
        validPassword
    );

    console.log(
        'Password value remains unchanged after toggle.'
    );


    // =====================================================
    // STEP 15: VERIFY USER REMAINS ON LOGIN PAGE
    // =====================================================

    await publicLoginPage.verifyLoginPage();

    console.log(
        'User remains on Public User Login page.'
    );


    // =====================================================
    // STEP 16: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 17: SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_008_PasswordVisibility.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');
    console.log(
        'TC_AUTH_PUBLIC_008_PasswordVisibility PASSED'
    );
    console.log(
        'Password hidden by default.'
    );
    console.log(
        'Password became visible successfully.'
    );
    console.log(
        'Password became hidden again successfully.'
    );
    console.log('====================================');

});