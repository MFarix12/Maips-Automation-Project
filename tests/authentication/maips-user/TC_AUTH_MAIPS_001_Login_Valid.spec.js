const { test } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    MAIPSLoginPage
} = require('../../../pages/authentication/MAIPSLoginPage');


test('TC_AUTH_MAIPS_001 - Login Valid', async ({ page }) => {

    const validUserId =
        process.env.MAIPS_VALID_ID;

    const validPassword =
        process.env.MAIPS_VALID_PASSWORD;


    if (!validUserId) {
        throw new Error(
            'MAIPS_VALID_ID is missing from .env'
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
    // STEP 1: OPEN HOME
    // =====================================================

    await homePage.open();


    // =====================================================
    // STEP 2: OPEN MAIPS LOGIN
    // =====================================================

    await homePage.openMAIPSUserLogin();


    // =====================================================
    // STEP 3: VERIFY LOGIN PAGE
    // =====================================================

    await maipsLoginPage.verifyLoginPage();


    // =====================================================
    // STEP 4: LOGIN
    // =====================================================

    await maipsLoginPage.login(
        validUserId,
        validPassword
    );


    // =====================================================
    // STEP 5: VERIFY DASHBOARD
    // =====================================================

    await maipsLoginPage.verifyDashboard();


    // =====================================================
    // SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_MAIPS_001_Login_Valid.png',
        fullPage: true
    });


    console.log('====================================');
    console.log(
        'TC_AUTH_MAIPS_001_Login_Valid PASSED'
    );
    console.log('====================================');

});