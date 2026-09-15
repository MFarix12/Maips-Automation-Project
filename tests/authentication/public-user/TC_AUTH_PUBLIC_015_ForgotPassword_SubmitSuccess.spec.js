const { test, expect } = require('@playwright/test');

const {
    HomePage
} = require('../../../pages/authentication/HomePage');

const {
    PublicLoginPage
} = require('../../../pages/authentication/PublicLoginPage');


test('TC_AUTH_PUBLIC_015 - Forgot Password Submit Success', async ({ page }) => {

    // =====================================================
    // TEST DATA
    // =====================================================

    const validUserId =
        process.env.PUBLIC_VALID_ID;

    if (!validUserId) {
        throw new Error(
            'PUBLIC_VALID_ID is missing from .env'
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
    // STEP 6: ENTER VALID PUBLIC USER ID
    // =====================================================

    await idField.fill(
        validUserId
    );

    await expect(
        idField
    ).toHaveValue(
        validUserId
    );

    console.log(
        'Valid Public User ID entered.'
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
    // STEP 12: CLICK CONFIRMATION HANTAR
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
    // STEP 14: LOCATE SUCCESS DIALOG
    // =====================================================

    const successDialog =
        page.getByRole(
            'dialog',
            {
                name: 'Berjaya',
                exact: true
            }
        );


    // =====================================================
    // STEP 15: VERIFY SUCCESS DIALOG
    // =====================================================

    await expect(
        successDialog
    ).toBeVisible({
        timeout: 20000
    });

    await expect(
        successDialog
    ).toContainText(
        'Berjaya'
    );

    console.log(
        'Berjaya dialog displayed.'
    );


    // =====================================================
    // STEP 16: VERIFY OK BUTTON
    // =====================================================

    const okButton =
        successDialog.getByRole(
            'button',
            {
                name: 'OK',
                exact: true
            }
        );

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
    // STEP 17: SCREENSHOT SUCCESS DIALOG
    // =====================================================

    await page.screenshot({
        path:
            'test-results/TC_AUTH_PUBLIC_015_SuccessDialog.png',
        fullPage: true
    });


    // =====================================================
    // STEP 18: CLICK OK
    // =====================================================

    await okButton.click();

    console.log(
        'OK clicked.'
    );


    // =====================================================
// STEP 19: VERIFY SUCCESS DIALOG CLOSED
// =====================================================

await expect(
    successDialog
).not.toBeVisible({
    timeout: 10000
});

console.log(
    'Berjaya dialog closed.'
);


// =====================================================
// STEP 20: VERIFY DIGITAL MAIPS HOME PAGE
// =====================================================

await homePage.verifyHomePage();

console.log(
    'Digital MAIPS Home page displayed after clicking OK.'
);


// =====================================================
// STEP 21: VERIFY MAIPS USER LOGIN OPTION
// =====================================================

await expect(
    homePage.maipsUserLoginButton
).toBeVisible({
    timeout: 15000
});

console.log(
    'MAIPS User Login option displayed.'
);


// =====================================================
// STEP 22: VERIFY PUBLIC USER LOGIN OPTION
// =====================================================

await expect(
    homePage.publicUserLoginButton
).toBeVisible({
    timeout: 15000
});

console.log(
    'Public User Login option displayed.'
);


// =====================================================
// STEP 23: VERIFY FORGOT PASSWORD PAGE CLOSED
// =====================================================

await expect(
    forgotPasswordHeader
).not.toBeVisible();

await expect(
    idField
).not.toBeVisible();

await expect(
    submitButton
).not.toBeVisible();

console.log(
    'Forgot Password page is no longer displayed.'
);


// =====================================================
// STEP 24: VERIFY PUBLIC LOGIN PAGE NOT DISPLAYED
// =====================================================

await expect(
    publicLoginPage.loginHeader
).not.toBeVisible();

await expect(
    publicLoginPage.usernameField
).not.toBeVisible();

await expect(
    publicLoginPage.passwordField
).not.toBeVisible();

console.log(
    'Public User Login page is not displayed.'
);


// =====================================================
// STEP 25: VERIFY NO DIALOG REMAINS OPEN
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
// STEP 26: VERIFY DASHBOARD NOT DISPLAYED
// =====================================================

await publicLoginPage.verifyDashboardNotDisplayed();

console.log(
    'Papan Pemuka is not displayed.'
);


// =====================================================
// STEP 27: FINAL SCREENSHOT
// =====================================================

await page.screenshot({
    path:
        'test-results/TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess.png',
    fullPage: true
});


// =====================================================
// TEST PASSED
// =====================================================

console.log('====================================');

console.log(
    'TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess PASSED'
);

console.log(
    'Forgot Password request submitted successfully.'
);

console.log(
    'Berjaya dialog displayed successfully.'
);

console.log(
    'OK returned the Public User to Digital MAIPS Home.'
);

console.log('====================================');

});