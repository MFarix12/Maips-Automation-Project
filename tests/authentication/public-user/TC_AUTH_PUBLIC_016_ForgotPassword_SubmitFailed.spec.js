const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_016 - Forgot Password No Registered Email', async ({ page }) => {

    // =====================================================
    // TEST DATA
    // =====================================================

    const unregisteredUserId =
        process.env.PUBLIC_UNREGISTERED_ID;

    if (!unregisteredUserId) {
        throw new Error(
            'PUBLIC_UNREGISTERED_ID is missing from .env'
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
    // PUBLIC FORGOT PASSWORD LOCATORS
    // =====================================================

    const forgotPasswordHeader =
        page.locator('#lupaKataLaluanHeader h1');

    const idField =
        page.locator(
            'vaadin-text-field input'
        ).first();

    const submitButton =
        page.locator('#submitBtn');


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
    // STEP 4: OPEN FORGOT PASSWORD
    // =====================================================

    await publicLoginPage.openForgotPassword();

    console.log(
        'Lupa Kata Laluan clicked.'
    );


    // =====================================================
    // STEP 5: VERIFY FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        forgotPasswordHeader
    ).toContainText(
        'Lupa Kata Laluan'
    );

    await expect(
        idField
    ).toBeVisible();

    console.log(
        'Forgot Password page displayed.'
    );


    // =====================================================
    // STEP 6: ENTER ID WITH NO REGISTERED EMAIL
    // =====================================================

    await idField.fill(
        unregisteredUserId
    );

    await expect(
        idField
    ).toHaveValue(
        unregisteredUserId
    );

    console.log(
        'Public User ID with no registered email entered.'
    );


    // =====================================================
    // STEP 7: VERIFY HANTAR ENABLED
    // =====================================================

    await expect(
        submitButton
    ).toBeEnabled();

    console.log(
        'Hantar button enabled.'
    );


    // =====================================================
    // STEP 8: CLICK FIRST HANTAR
    // =====================================================

    await submitButton.click();

    console.log(
        'First Hantar clicked.'
    );


    // =====================================================
    // STEP 9: LOCATE CONFIRMATION DIALOG
    // =====================================================

    const confirmationDialog =
        page.getByRole(
            'dialog',
            {
                name: 'Lupa Kata Laluan',
                exact: true
            }
        );


    // =====================================================
    // STEP 10: VERIFY CONFIRMATION DIALOG
    // =====================================================

    await expect(
        confirmationDialog
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        confirmationDialog
    ).toContainText(
        'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.'
    );

    console.log(
        'Confirmation dialog displayed.'
    );


    // =====================================================
    // STEP 11: LOCATE CONFIRMATION HANTAR
    // =====================================================

    const confirmButton =
        confirmationDialog.getByRole(
            'button',
            {
                name: 'Hantar',
                exact: true
            }
        );

    await expect(
        confirmButton
    ).toBeVisible();

    await expect(
        confirmButton
    ).toBeEnabled();


    // =====================================================
    // STEP 12: CONFIRM REQUEST
    // =====================================================

    await confirmButton.click();

    console.log(
        'Confirmation Hantar clicked.'
    );


    // =====================================================
    // STEP 13: VERIFY CONFIRMATION DIALOG CLOSED
    // =====================================================

    await expect(
        confirmationDialog
    ).not.toBeVisible({
        timeout: 15000
    });

    console.log(
        'Confirmation dialog closed.'
    );


    // =====================================================
    // STEP 14: LOCATE FAILED DIALOG
    // =====================================================

    const expectedErrorMessage =
        'Tiada email berdaftar dalam digital MAIPs. Sila hubungi pihak MAIPs untuk bantuan lanjut.';

    const failedDialog =
        page
            .locator(
                'vaadin-dialog-overlay[opened]'
            )
            .filter({
                hasText:
                    'Tiada email berdaftar dalam digital MAIPs.'
            });


    // =====================================================
    // STEP 15: VERIFY FAILED DIALOG
    // =====================================================

    await expect(
        failedDialog
    ).toBeVisible({
        timeout: 20000
    });

    console.log(
        'Failed Forgot Password dialog displayed.'
    );


    // =====================================================
    // STEP 16: VERIFY FAILED TITLE
    // =====================================================

    await expect(
        failedDialog
    ).toContainText(
        'Tidak Berjaya'
    );

    console.log(
        'Tidak Berjaya title displayed.'
    );


    // =====================================================
    // STEP 17: VERIFY ERROR MESSAGE
    // =====================================================

    await expect(
        failedDialog
    ).toContainText(
        expectedErrorMessage
    );

    console.log(
        'Correct no registered email message displayed.'
    );


    // =====================================================
    // STEP 18: LOCATE OK BUTTON
    // =====================================================

    const okButton =
        failedDialog.locator('#ok');

    await expect(
        okButton
    ).toBeVisible();

    await expect(
        okButton
    ).toBeEnabled();

    console.log(
        'OK button displayed.'
    );


    // =====================================================
    // STEP 19: SCREENSHOT FAILED DIALOG
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_016_FailedDialog.png',
        fullPage: true
    });


    // =====================================================
    // STEP 20: CLICK OK
    // =====================================================

    await okButton.click();

    console.log(
        'OK clicked.'
    );


    // =====================================================
    // STEP 21: VERIFY FAILED DIALOG CLOSED
    // =====================================================

    await expect(
        failedDialog
    ).not.toBeVisible({
        timeout: 10000
    });

    console.log(
        'Failed dialog closed.'
    );


    // =====================================================
    // STEP 22: VERIFY REMAIN ON FORGOT PASSWORD PAGE
    // =====================================================

    await expect(
        forgotPasswordHeader
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        forgotPasswordHeader
    ).toContainText(
        'Lupa Kata Laluan'
    );

    await expect(
        idField
    ).toBeVisible();

    await expect(
        submitButton
    ).toBeVisible();

    console.log(
        'User remains on Forgot Password page.'
    );


    // =====================================================
    // STEP 23: VERIFY ID REMAINS ENTERED
    // =====================================================

    await expect(
        idField
    ).toHaveValue(
        unregisteredUserId
    );

    console.log(
        'User ID remains entered.'
    );


    // =====================================================
    // STEP 24: VERIFY NO DIALOG REMAINS OPEN
    // =====================================================

    const openedDialogs =
        page.locator(
            'vaadin-dialog-overlay[opened]'
        );

    await expect(
        openedDialogs
    ).toHaveCount(0);

    console.log(
        'No dialog remains open.'
    );


    // =====================================================
    // STEP 25: VERIFY DASHBOARD NOT DISPLAYED
    // =====================================================

    await publicLoginPage.verifyDashboardNotDisplayed();

    console.log(
        'Papan Pemuka is not displayed.'
    );


    // =====================================================
    // STEP 26: FINAL SCREENSHOT
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_016_ForgotPassword_NoRegisteredID.png',
        fullPage: true
    });


    // =====================================================
    // TEST PASSED
    // =====================================================

    console.log('====================================');

    console.log(
        'TC_AUTH_PUBLIC_016_ForgotPassword_NoRegisteredID PASSED'
    );

    console.log(
        'No registered email condition handled successfully.'
    );

    console.log(
        'Tidak Berjaya dialog displayed correctly.'
    );

    console.log(
        'User remains on Forgot Password page after OK.'
    );

    console.log('====================================');

});