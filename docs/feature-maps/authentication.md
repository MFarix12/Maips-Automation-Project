# Authentication — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 34 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## MAIPs user

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_001 | Login Valid | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_001_Login_Valid.spec.js) | [Setup / test data](#tc_auth_maips_001-setup)<br>STEP 1: OPEN HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: LOGIN<br><code>await maipsLoginPage.login( validUserId, validPassword );</code><br><br>STEP 5: VERIFY DASHBOARD<br><code>await maipsLoginPage.verifyDashboard();</code><br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_001_Login_Valid.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_002 | Login Invalid ID | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_002_Login_Invalid_ID.spec.js) | [Setup / test data](#tc_auth_maips_002-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER INVALID USER ID<br><code>await maipsLoginPage.enterUserId( invalidUserId );</code><br><br>STEP 5: ENTER VALID PASSWORD<br><code>await maipsLoginPage.enterPassword( validPassword );</code><br><br>STEP 6: CLICK LOGIN<br><code>await expect( maipsLoginPage.loginButton ).toBeEnabled();</code><br><code>await maipsLoginPage.loginButton.click();</code><br><br>STEP 7: VERIFY INVALID CREDENTIALS MESSAGE<br><code>await maipsLoginPage.verifyInvalidCredentials();</code><br><br>STEP 8: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 9: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 10: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_002_Login_Invalid_ID.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_003 | Login Invalid Password | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_003_Login_Invalid_Password.spec.js) | [Setup / test data](#tc_auth_maips_003-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER VALID USER ID<br><code>await maipsLoginPage.enterUserId( validUserId );</code><br><br>STEP 5: ENTER INVALID PASSWORD<br><code>await maipsLoginPage.enterPassword( invalidPassword );</code><br><br>STEP 6: CLICK LOGIN<br><code>await expect( maipsLoginPage.loginButton ).toBeEnabled();</code><br><code>await maipsLoginPage.loginButton.click();</code><br><br>STEP 7: VERIFY INVALID CREDENTIALS MESSAGE<br><code>await maipsLoginPage.verifyInvalidCredentials();</code><br><br>STEP 8: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 9: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 10: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_003_Login_Invalid_Password.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_004 | Login Invalid Credentials | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_004_Login_Invalid_Credentials.spec.js) | [Setup / test data](#tc_auth_maips_004-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER INVALID USER ID<br><code>await maipsLoginPage.enterUserId( invalidUserId );</code><br><br>STEP 5: ENTER INVALID PASSWORD<br><code>await maipsLoginPage.enterPassword( invalidPassword );</code><br><br>STEP 6: CLICK LOGIN<br><code>await expect( maipsLoginPage.loginButton ).toBeEnabled();</code><br><code>await maipsLoginPage.loginButton.click();</code><br><br>STEP 7: VERIFY INVALID CREDENTIALS MESSAGE<br><code>await maipsLoginPage.verifyInvalidCredentials();</code><br><br>STEP 8: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 9: VERIFY ENTERED VALUES REMAIN<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue(invalidUserId);</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(invalidPassword);</code><br><br>STEP 10: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 11: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_004_Login_Invalid_Credentials.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_005 | Login Empty ID | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_005_Login_Empty_ID.spec.js) | [Setup / test data](#tc_auth_maips_005-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: LEAVE USER ID EMPTY<br><code>await maipsLoginPage.verifyUserIdEmpty();</code><br><br>STEP 5: ENTER VALID PASSWORD<br><code>await maipsLoginPage.enterPassword( validPassword );</code><br><br>STEP 6: VERIFY VALUES BEFORE SUBMIT<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(validPassword);</code><br><br>STEP 7: CLICK LOGIN<br><code>await maipsLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY USER ID REQUIRED VALIDATION<br><code>await maipsLoginPage.verifyUserIdValidation();</code><br><br>STEP 9: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 10: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 11: VERIFY PASSWORD REMAINS ENTERED<br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(validPassword);</code><br><br>STEP 12: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_005_Login_Empty_ID.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_006 | Login Empty Password | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_006_Login_Empty_Password.spec.js) | [Setup / test data](#tc_auth_maips_006-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER VALID USER ID<br><code>await maipsLoginPage.enterUserId( validUserId );</code><br><br>STEP 5: LEAVE PASSWORD EMPTY<br><code>await maipsLoginPage.verifyPasswordEmpty();</code><br><br>STEP 6: VERIFY VALUES BEFORE SUBMIT<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue(validUserId);</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 7: CLICK LOGIN<br><code>await maipsLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY PASSWORD REQUIRED VALIDATION<br><code>await maipsLoginPage.verifyPasswordValidation();</code><br><br>STEP 9: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 10: VERIFY USER ID REMAINS ENTERED<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue(validUserId);</code><br><br>STEP 11: VERIFY PASSWORD REMAINS EMPTY<br><code>await expect( maipsLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 12: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 13: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_006_Login_Empty_Password.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_007 | Login Empty Credentials | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_007_Login_Empty_Credentials.spec.js) | [Setup / test data](#tc_auth_maips_007-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: VERIFY USER ID IS EMPTY<br><code>await maipsLoginPage.verifyUserIdEmpty();</code><br><br>STEP 5: VERIFY PASSWORD IS EMPTY<br><code>await maipsLoginPage.verifyPasswordEmpty();</code><br><br>STEP 6: VERIFY VALUES BEFORE SUBMIT<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 7: CLICK LOGIN<br><code>await maipsLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY USER ID REQUIRED VALIDATION<br><code>await maipsLoginPage.verifyUserIdValidation();</code><br><br>STEP 9: VERIFY PASSWORD REQUIRED VALIDATION<br><code>await maipsLoginPage.verifyPasswordValidation();</code><br><br>STEP 10: VERIFY BOTH FIELDS REMAIN EMPTY<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 11: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 12: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 13: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_007_Login_Empty_Credentials.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_008 | Login Password Visibility | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_008_Login_PasswordVisibility.spec.js) | [Setup / test data](#tc_auth_maips_008-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER PASSWORD<br><code>await maipsLoginPage.enterPassword( testPassword );</code><br><br>STEP 5: VERIFY PASSWORD VALUE<br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(testPassword);</code><br><br>STEP 6: VERIFY PASSWORD HIDDEN BY DEFAULT<br><code>await maipsLoginPage.verifyPasswordHidden();</code><br><br>STEP 7: SHOW PASSWORD<br><code>await maipsLoginPage.showPassword();</code><br><br>STEP 8: VERIFY PASSWORD VALUE DID NOT CHANGE<br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(testPassword);</code><br><br>STEP 9: VERIFY PASSWORD TYPE IS TEXT<br><code>await maipsLoginPage.verifyPasswordVisible();</code><br><br>STEP 10: HIDE PASSWORD AGAIN<br><code>await maipsLoginPage.hidePassword();</code><br><br>STEP 11: VERIFY PASSWORD VALUE STILL UNCHANGED<br><code>await expect( maipsLoginPage.passwordField ).toHaveValue(testPassword);</code><br><br>STEP 12: VERIFY PASSWORD HIDDEN AGAIN<br><code>await maipsLoginPage.verifyPasswordHidden();</code><br><br>STEP 13: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 14: VERIFY DASHBOARD NOT DISPLAYED<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_008_Login_PasswordVisibility.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_009 | Forgot Password Navigation | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_009_ForgotPassword_Navigation.spec.js) | [Setup / test data](#tc_auth_maips_009-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: VERIFY FORGOT PASSWORD LINK<br><code>await expect( maipsLoginPage.forgotPasswordLink ).toBeVisible();</code><br><code>await expect( maipsLoginPage.forgotPasswordLink ).toContainText( 'Lupa Kata Laluan?' );</code><br><br>STEP 5: CLICK FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 6: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 7: VERIFY HEADER<br><code>await expect( forgotPasswordPage.header ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 8: VERIFY ID FIELD<br><code>await expect( forgotPasswordPage.idField ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.idField ).toHaveValue('');</code><br><br>STEP 9: VERIFY HANTAR BUTTON<br><code>await expect( forgotPasswordPage.submitButton ).toBeVisible();</code><br><br>STEP 10: VERIFY KEMBALI BUTTON<br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><br>STEP 11: VERIFY LOGIN PAGE IS NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 12: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_009_ForgotPassword_Navigation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_010 | Forgot Password Empty ID Button Disabled | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js) | [Setup / test data](#tc_auth_maips_010-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD PAGE<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: VERIFY ID FIELD IS EMPTY<br><code>await expect( forgotPasswordPage.idField ).toHaveValue('');</code><br><br>STEP 7: VERIFY HANTAR BUTTON DISABLED<br><code>await forgotPasswordPage.verifySubmitDisabled();</code><br><br>STEP 8: VERIFY DISABLED ATTRIBUTE<br><code>await expect( forgotPasswordPage.submitButton ).toHaveAttribute('disabled');</code><br><br>STEP 9: VERIFY KEMBALI REMAINS AVAILABLE<br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).toBeEnabled();</code><br><br>STEP 10: VERIFY NO DIALOG DISPLAYED<br><code>const openedDialog = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialog ).toHaveCount(0);</code><br><br>STEP 11: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordPage.header ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.header ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 12: VERIFY LOGIN FORM NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 13: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_011 | Forgot Password Clear ID Validation | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation.spec.js) | [Setup / test data](#tc_auth_maips_011-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD PAGE<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: ENTER VALID USER ID<br><code>await forgotPasswordPage.enterId( validUserId );</code><br><br>STEP 7: VERIFY HANTAR BECOMES ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 8: CLEAR USER ID<br><code>await forgotPasswordPage.clearId();</code><br><br>STEP 9: MOVE FOCUS AWAY FROM ID FIELD<br><code>await forgotPasswordPage.backButton.focus();</code><br><br>STEP 10: VERIFY ID IS EMPTY<br><code>await expect( forgotPasswordPage.idField ).toHaveValue('');</code><br><br>STEP 11: VERIFY REQUIRED VALIDATION<br><code>await forgotPasswordPage.verifyIdRequiredValidation();</code><br><br>STEP 12: VERIFY HANTAR IS DISABLED<br><code>await forgotPasswordPage.verifySubmitDisabled();</code><br><br>STEP 13: VERIFY NO CONFIRMATION DIALOG<br><code>const openedDialog = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialog ).toHaveCount(0);</code><br><br>STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordPage.header ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.header ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 15: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 16: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_012 | Forgot Password Back | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_012_ForgotPassword_Back.spec.js) | [Setup / test data](#tc_auth_maips_012-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: VERIFY KEMBALI BUTTON<br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).toBeEnabled();</code><br><br>STEP 7: CLICK KEMBALI<br><code>await forgotPasswordPage.clickBack();</code><br><br>STEP 8: VERIFY DIGITAL MAIPS HOME<br><code>await homePage.verifyHomePage();</code><br><br>STEP 9: VERIFY MAIPS USER LOGIN OPTION<br><code>await expect( homePage.maipsUserLoginButton ).toBeVisible();</code><br><br>STEP 10: VERIFY PUBLIC USER LOGIN OPTION<br><code>await expect( homePage.publicUserLoginButton ).toBeVisible();</code><br><br>STEP 11: VERIFY FORGOT PASSWORD PAGE IS GONE<br><code>await expect( forgotPasswordPage.header ).not.toBeVisible();</code><br><code>await expect( forgotPasswordPage.idField ).not.toBeVisible();</code><br><code>await expect( forgotPasswordPage.submitButton ).not.toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).not.toBeVisible();</code><br><br>STEP 12: VERIFY MAIPS LOGIN FORM IS NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.loginButton ).not.toBeVisible();</code><br><br>STEP 13: VERIFY NO DIALOG IS OPEN<br><code>const openedDialog = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialog ).toHaveCount(0);</code><br><br>STEP 14: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_012_ForgotPassword_Back.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_013 | Forgot Password Valid ID Confirmation | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation.spec.js) | [Setup / test data](#tc_auth_maips_013-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: ENTER VALID USER ID<br><code>await forgotPasswordPage.enterId( validUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK HANTAR<br><code>await forgotPasswordPage.submit();</code><br><br>STEP 9: VERIFY CONFIRMATION DIALOG<br><code>await forgotPasswordPage.verifyConfirmationDialog();</code><br><br>STEP 10: GET CONFIRMATION DIALOG<br><code>const confirmationDialog = forgotPasswordPage.getConfirmationDialog();</code><br><code>await expect( confirmationDialog ).toBeVisible();</code><br><br>STEP 11: VERIFY CONFIRMATION MESSAGE<br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 12: VERIFY BATAL BUTTON<br><code>const cancelButton = confirmationDialog.getByRole( 'button', { name: 'Batal', exact: true } );</code><br><code>await expect( cancelButton ).toBeVisible();</code><br><code>await expect( cancelButton ).toBeEnabled();</code><br><br>STEP 13: VERIFY HANTAR BUTTON IN DIALOG<br><code>const confirmButton = confirmationDialog.getByRole( 'button', { name: 'Hantar', exact: true } );</code><br><code>await expect( confirmButton ).toBeVisible();</code><br><code>await expect( confirmButton ).toBeEnabled();</code><br><br>STEP 14: VERIFY ORIGINAL ID REMAINS<br><code>await expect( forgotPasswordPage.idField ).toHaveValue(validUserId);</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_014 | Forgot Password Cancel Confirmation | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation.spec.js) | [Setup / test data](#tc_auth_maips_014-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: ENTER VALID USER ID<br><code>await forgotPasswordPage.enterId( validUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK HANTAR<br><code>await forgotPasswordPage.submit();</code><br><br>STEP 9: VERIFY CONFIRMATION DIALOG<br><code>await forgotPasswordPage.verifyConfirmationDialog();</code><br><code>const confirmationDialog = forgotPasswordPage.getConfirmationDialog();</code><br><code>await expect( confirmationDialog ).toBeVisible();</code><br><br>STEP 10: VERIFY CONFIRMATION MESSAGE<br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: VERIFY BATAL BUTTON<br><code>const cancelButton = confirmationDialog.getByRole( 'button', { name: 'Batal', exact: true } );</code><br><code>await expect( cancelButton ).toBeVisible();</code><br><code>await expect( cancelButton ).toBeEnabled();</code><br><br>STEP 12: CLICK BATAL<br><code>await forgotPasswordPage.cancelRequest();</code><br><br>STEP 13: VERIFY CONFIRMATION DIALOG CLOSED<br><code>await expect( confirmationDialog ).not.toBeVisible();</code><br><br>STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 15: VERIFY USER ID REMAINS ENTERED<br><code>await expect( forgotPasswordPage.idField ).toHaveValue(validUserId);</code><br><br>STEP 16: VERIFY HANTAR REMAINS ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 17: VERIFY KEMBALI REMAINS AVAILABLE<br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).toBeEnabled();</code><br><br>STEP 18: VERIFY NO DIALOG REMAINS OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 19: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 20: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_015 | Forgot Password Submit Success | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess_RedirectHome.spec.js) | [Setup / test data](#tc_auth_maips_015-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: ENTER VALID REGISTERED ID<br><code>await forgotPasswordPage.enterId( validUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK FIRST HANTAR<br><code>await forgotPasswordPage.submit();</code><br><br>STEP 9: VERIFY CONFIRMATION DIALOG<br><code>await forgotPasswordPage.verifyConfirmationDialog();</code><br><code>const confirmationDialog = forgotPasswordPage.getConfirmationDialog();</code><br><code>await expect( confirmationDialog ).toBeVisible();</code><br><br>STEP 10: VERIFY CONFIRMATION MESSAGE<br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: CONFIRM REQUEST<br><code>await forgotPasswordPage.confirmRequest();</code><br><br>STEP 12: VERIFY SUCCESS DIALOG<br><code>const successDialog = await forgotPasswordPage.verifySuccessDialog();</code><br><br>STEP 13: VERIFY SUCCESS STATUS<br><code>await expect( successDialog ).toContainText( 'Berjaya' );</code><br><br>STEP 14: VERIFY OK BUTTON<br><code>const okButton = successDialog.locator('#ok');</code><br><code>await expect( okButton ).toBeVisible();</code><br><code>await expect( okButton ).toBeEnabled();</code><br><br>STEP 15: SCREENSHOT SUCCESS DIALOG<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_015_Success_Dialog.png', fullPage: true });</code><br><br>STEP 16: CLICK OK<br><code>await forgotPasswordPage.clickDialogOK( successDialog );</code><br><br>STEP 17: VERIFY SUCCESS DIALOG CLOSED<br><code>await expect( successDialog ).not.toBeVisible();</code><br><br>STEP 18: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 19: VERIFY HEADER<br><code>await expect( forgotPasswordPage.header ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 20: VERIFY FORGOT PASSWORD COMPONENTS<br><code>await expect( forgotPasswordPage.idField ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.submitButton ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><br>STEP 21: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 22: VERIFY NO DIALOG REMAINS OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 23: FINAL SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_016 | Forgot Password Submit Failed | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed.spec.js) | [Setup / test data](#tc_auth_maips_016-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await maipsLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 6: ENTER ID WITHOUT REGISTERED EMAIL<br><code>await forgotPasswordPage.enterId( unregisteredId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( forgotPasswordPage.submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK FIRST HANTAR<br><code>await forgotPasswordPage.submit();</code><br><br>STEP 9: VERIFY CONFIRMATION DIALOG<br><code>await forgotPasswordPage.verifyConfirmationDialog();</code><br><code>const confirmationDialog = forgotPasswordPage.getConfirmationDialog();</code><br><code>await expect( confirmationDialog ).toBeVisible();</code><br><br>STEP 10: VERIFY CONFIRMATION MESSAGE<br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: CONFIRM REQUEST<br><code>await forgotPasswordPage.confirmRequest();</code><br><br>STEP 12: VERIFY FAILED DIALOG<br><code>const failedDialog = await forgotPasswordPage.verifyFailedDialog();</code><br><br>STEP 13: VERIFY FAILURE STATUS<br><code>await expect( failedDialog ).toContainText( 'Tidak Berjaya' );</code><br><br>STEP 14: VERIFY FAILURE MESSAGE<br><code>const expectedFailureMessage = 'Tiada email berdaftar dalam digital MAIPs. Sila hubungi pihak MAIPs untuk bantuan lanjut.';</code><br><code>await expect( failedDialog ).toContainText( expectedFailureMessage );</code><br><br>STEP 15: VERIFY OK BUTTON<br><code>const okButton = failedDialog.locator('#ok');</code><br><code>await expect( okButton ).toBeVisible();</code><br><code>await expect( okButton ).toBeEnabled();</code><br><br>STEP 16: SCREENSHOT FAILURE DIALOG<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_016_ForgotPassword_Failed_Dialog.png', fullPage: true });</code><br><br>STEP 17: CLICK OK<br><code>await forgotPasswordPage.clickDialogOK( failedDialog );</code><br><br>STEP 18: VERIFY FAILED DIALOG CLOSED<br><code>await expect( failedDialog ).not.toBeVisible();</code><br><br>STEP 19: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await forgotPasswordPage.verifyPage();</code><br><br>STEP 20: VERIFY HEADER<br><code>await expect( forgotPasswordPage.header ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 21: VERIFY FORGOT PASSWORD COMPONENTS<br><code>await expect( forgotPasswordPage.idField ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.submitButton ).toBeVisible();</code><br><code>await expect( forgotPasswordPage.backButton ).toBeVisible();</code><br><br>STEP 22: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 23: VERIFY NO DIALOG REMAINS OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 24: FINAL SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_MAIPS_017 | Logout | Script present; execution TBD — [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_017_Logout.spec.js) | [Setup / test data](#tc_auth_maips_017-setup)<br>STEP 1: OPEN HOME PAGE<br><code>await homePage.open();</code><br><br>STEP 2: OPEN MAIPS USER LOGIN<br><code>await homePage.openMAIPSUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 4: LOGIN WITH VALID CREDENTIALS<br><code>await maipsLoginPage.login( validUserId, validPassword );</code><br><br>STEP 5: VERIFY DASHBOARD<br><code>await maipsLoginPage.verifyDashboard();</code><br><br>STEP 6: VERIFY LOGIN PAGE IS GONE<br><code>await expect( maipsLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 7: VERIFY LOGOUT BUTTON<br><code>await expect( maipsLoginPage.logoutButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( maipsLoginPage.logoutButton ).toBeEnabled();</code><br><br>STEP 8: VERIFY LOGOUT BUTTON TEXT<br><code>await expect( maipsLoginPage.logoutButton ).toContainText( 'Log Keluar' );</code><br><br>STEP 9: SCREENSHOT BEFORE LOGOUT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_017_Before_Logout.png', fullPage: true });</code><br><br>STEP 10: CLICK LOGOUT<br><code>await maipsLoginPage.logout();</code><br><br>STEP 11: VERIFY REDIRECT TO LOGIN PAGE<br><code>await maipsLoginPage.verifyLoginPage();</code><br><br>STEP 12: VERIFY LOGIN HEADER<br><code>await expect( maipsLoginPage.loginHeader ).toContainText( 'Log Masuk' );</code><br><br>STEP 13: VERIFY LOGIN COMPONENTS<br><code>await expect( maipsLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( maipsLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( maipsLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 14: VERIFY DASHBOARD IS GONE<br><code>await maipsLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 15: VERIFY LOGOUT BUTTON IS GONE<br><code>await expect( maipsLoginPage.logoutButton ).not.toBeVisible();</code><br><br>STEP 16: VERIFY CREDENTIAL FIELDS ARE EMPTY<br><code>await expect( maipsLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( maipsLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 17: SCREENSHOT AFTER LOGOUT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_MAIPS_017_Logout.png', fullPage: true });</code> |

## Public user

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_001 | Login Valid | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_001_Login_Valid.spec.js) | [Setup / test data](#tc_auth_public_001-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER VALID CREDENTIALS<br><code>await publicLoginPage.login( validUserId, validPassword );</code><br><br>STEP 5: VERIFY DASHBOARD<br><code>await publicLoginPage.verifyDashboard();</code><br><br>STEP 6: VERIFY PAPAN PEMUKA<br><code>await expect( publicLoginPage.dashboardMenu ).toBeVisible();</code><br><code>await expect( publicLoginPage.dashboardMenu ).toContainText( 'Papan Pemuka' );</code><br><br>STEP 7: VERIFY LOGIN FORM IS GONE<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).not.toBeVisible();</code><br><br>STEP 8: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_001_Login_Valid.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_002 | Login Invalid ID | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_002_Login_Invalid_ID.spec.js) | [Setup / test data](#tc_auth_public_002-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER INVALID USER ID<br><code>await publicLoginPage.enterUserId( invalidUserId );</code><br><br>STEP 5: ENTER VALID PASSWORD<br><code>await publicLoginPage.enterPassword( validPassword );</code><br><br>STEP 6: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 7: VERIFY INVALID CREDENTIAL MESSAGE<br><code>await publicLoginPage.verifyInvalidCredentials();</code><br><br>STEP 8: VERIFY EXACT ERROR MESSAGE<br><code>await expect( publicLoginPage.invalidCredentialsMessage ).toHaveText( 'Semak nama pengguna dan kata laluan anda dan cuba lagi.' );</code><br><br>STEP 9: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 10: VERIFY LOGIN FIELDS REMAIN DISPLAYED<br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 11: VERIFY INVALID ID REMAINS ENTERED<br><code>await expect( publicLoginPage.usernameField ).toHaveValue( invalidUserId );</code><br><br>STEP 12: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 13: VERIFY PAPAN PEMUKA NOT DISPLAYED<br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 14: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_002_Login_InvalidID.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_003 | Login Invalid Password | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_003_Login_Invalid_Password.spec.js) | [Setup / test data](#tc_auth_public_003-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER VALID USER ID<br><code>await publicLoginPage.enterUserId( validUserId );</code><br><br>STEP 5: ENTER INVALID PASSWORD<br><code>await publicLoginPage.enterPassword( invalidPassword );</code><br><br>STEP 6: VERIFY PASSWORD IS MASKED<br><code>await publicLoginPage.verifyPasswordHidden();</code><br><br>STEP 7: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY INVALID CREDENTIAL MESSAGE<br><code>await publicLoginPage.verifyInvalidCredentials();</code><br><br>STEP 9: VERIFY EXACT ERROR MESSAGE<br><code>await expect( publicLoginPage.invalidCredentialsMessage ).toHaveText( 'Semak nama pengguna dan kata laluan anda dan cuba lagi.' );</code><br><br>STEP 10: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 11: VERIFY USER ID REMAINS ENTERED<br><code>await expect( publicLoginPage.usernameField ).toHaveValue( validUserId );</code><br><br>STEP 12: VERIFY LOGIN COMPONENTS<br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 13: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 14: VERIFY PAPAN PEMUKA NOT DISPLAYED<br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_003_Login_InvalidPassword.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_004 | Login Invalid Credentials | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_004_Login_Invalid_Credentials.spec.js) | [Setup / test data](#tc_auth_public_004-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER INVALID USER ID<br><code>await publicLoginPage.enterUserId( invalidUserId );</code><br><br>STEP 5: ENTER INVALID PASSWORD<br><code>await publicLoginPage.enterPassword( invalidPassword );</code><br><br>STEP 6: VERIFY PASSWORD MASKED<br><code>await publicLoginPage.verifyPasswordHidden();</code><br><br>STEP 7: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY INVALID CREDENTIAL MESSAGE<br><code>await publicLoginPage.verifyInvalidCredentials();</code><br><br>STEP 9: VERIFY EXACT ERROR MESSAGE<br><code>await expect( publicLoginPage.invalidCredentialsMessage ).toHaveText( 'Semak nama pengguna dan kata laluan anda dan cuba lagi.' );</code><br><br>STEP 10: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 11: VERIFY INVALID USER ID REMAINS<br><code>await expect( publicLoginPage.usernameField ).toHaveValue( invalidUserId );</code><br><br>STEP 12: VERIFY LOGIN COMPONENTS REMAIN DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 13: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 14: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_004_Login_InvalidCredentials.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_005 | Login Empty ID | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_005_Login_Empty_ID.spec.js) | [Setup / test data](#tc_auth_public_005-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: VERIFY USER ID IS EMPTY<br><code>await publicLoginPage.verifyUserIdEmpty();</code><br><br>STEP 5: ENTER VALID PASSWORD<br><code>await publicLoginPage.enterPassword( validPassword );</code><br><br>STEP 6: VERIFY PASSWORD IS MASKED<br><code>await publicLoginPage.verifyPasswordHidden();</code><br><br>STEP 7: VERIFY USER ID STILL EMPTY<br><code>await expect( publicLoginPage.usernameField ).toHaveValue('');</code><br><br>STEP 8: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 9: VERIFY USER ID REQUIRED VALIDATION<br><code>await publicLoginPage.verifyUserIdValidation();</code><br><br>STEP 10: VERIFY USER ID REMAINS EMPTY<br><code>await publicLoginPage.verifyUserIdEmpty();</code><br><br>STEP 11: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 12: VERIFY PASSWORD REMAINS ENTERED<br><code>await expect( publicLoginPage.passwordField ).toHaveValue( validPassword );</code><br><br>STEP 13: VERIFY PASSWORD FIELD IS NOT INVALID<br><code>await expect( publicLoginPage.passwordContainer ).not.toHaveAttribute( 'invalid' );</code><br><br>STEP 14: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_005_Login_EmptyID.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_006 | Login Empty Password | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_006_Login_Empty_Password.spec.js) | [Setup / test data](#tc_auth_public_006-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER VALID USER ID<br><code>await publicLoginPage.enterUserId( validUserId );</code><br><br>STEP 5: VERIFY PASSWORD IS EMPTY<br><code>await publicLoginPage.verifyPasswordEmpty();</code><br><br>STEP 6: VERIFY USER ID VALUE<br><code>await expect( publicLoginPage.usernameField ).toHaveValue( validUserId );</code><br><br>STEP 7: VERIFY PASSWORD STILL EMPTY<br><code>await expect( publicLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 8: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 9: VERIFY PASSWORD REQUIRED VALIDATION<br><code>await publicLoginPage.verifyPasswordValidation();</code><br><br>STEP 10: VERIFY PASSWORD REMAINS EMPTY<br><code>await publicLoginPage.verifyPasswordEmpty();</code><br><br>STEP 11: VERIFY USER ID REMAINS ENTERED<br><code>await expect( publicLoginPage.usernameField ).toHaveValue( validUserId );</code><br><br>STEP 12: VERIFY USER ID IS NOT INVALID<br><code>await expect( publicLoginPage.usernameContainer ).not.toHaveAttribute( 'invalid' );</code><br><br>STEP 13: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 14: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_006_Login_EmptyPassword.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_007 | Login Empty Credentials | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_007_Login_Empty_Credentials.spec.js) | [Setup / test data](#tc_auth_public_007-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: VERIFY USER ID IS EMPTY<br><code>await publicLoginPage.verifyUserIdEmpty();</code><br><br>STEP 5: VERIFY PASSWORD IS EMPTY<br><code>await publicLoginPage.verifyPasswordEmpty();</code><br><br>STEP 6: VERIFY BOTH FIELDS BEFORE LOGIN<br><code>await expect( publicLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( publicLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 7: CLICK LOGIN<br><code>await publicLoginPage.clickLogin();</code><br><br>STEP 8: VERIFY USER ID REQUIRED VALIDATION<br><code>await publicLoginPage.verifyUserIdValidation();</code><br><br>STEP 9: VERIFY PASSWORD REQUIRED VALIDATION<br><code>await publicLoginPage.verifyPasswordValidation();</code><br><br>STEP 10: VERIFY USER ID CONTAINER INVALID<br><code>await expect( publicLoginPage.usernameContainer ).toHaveAttribute( 'invalid' );</code><br><br>STEP 11: VERIFY PASSWORD CONTAINER INVALID<br><code>await expect( publicLoginPage.passwordContainer ).toHaveAttribute( 'invalid' );</code><br><br>STEP 12: VERIFY USER ID ERROR MESSAGE<br><code>await expect( publicLoginPage.usernameErrorMessage ).toBeVisible();</code><br><br>STEP 13: VERIFY PASSWORD ERROR MESSAGE<br><code>await expect( publicLoginPage.passwordErrorMessage ).toBeVisible();</code><br><br>STEP 14: VERIFY BOTH FIELDS REMAIN EMPTY<br><code>await publicLoginPage.verifyUserIdEmpty();</code><br><code>await publicLoginPage.verifyPasswordEmpty();</code><br><br>STEP 15: VERIFY LOGIN PAGE REMAINS DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><br>STEP 16: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><code>await expect( publicLoginPage.dashboardMenu ).not.toBeVisible();</code><br><br>STEP 17: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_007_Login_EmptyCredentials.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_008 | Password Visibility | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_008_Login_PasswordVisibility.spec.js) | [Setup / test data](#tc_auth_public_008-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: ENTER PASSWORD<br><code>await publicLoginPage.enterPassword( validPassword );</code><br><br>STEP 5: VERIFY PASSWORD VALUE<br><code>await expect( publicLoginPage.passwordField ).toHaveValue( validPassword );</code><br><br>STEP 6: VERIFY PASSWORD HIDDEN BY DEFAULT<br><code>await publicLoginPage.verifyPasswordHidden();</code><br><br>STEP 7: VERIFY PASSWORD TYPE = PASSWORD<br><code>await expect( publicLoginPage.passwordField ).toHaveAttribute( 'type', 'password' );</code><br><br>STEP 8: VERIFY SHOW PASSWORD BUTTON<br><code>await expect( publicLoginPage.passwordVisibilityButton ).toBeVisible();</code><br><code>await expect( publicLoginPage.passwordVisibilityButton ).toBeEnabled();</code><br><br>STEP 9: CLICK SHOW PASSWORD<br><code>await publicLoginPage.showPassword();</code><br><br>STEP 10: VERIFY PASSWORD IS VISIBLE<br><code>await publicLoginPage.verifyPasswordVisible();</code><br><code>await expect( publicLoginPage.passwordField ).toHaveAttribute( 'type', 'text' );</code><br><br>STEP 11: VERIFY PASSWORD VALUE DID NOT CHANGE<br><code>await expect( publicLoginPage.passwordField ).toHaveValue( validPassword );</code><br><br>STEP 12: HIDE PASSWORD AGAIN<br><code>await publicLoginPage.hidePassword();</code><br><br>STEP 13: VERIFY PASSWORD HIDDEN AGAIN<br><code>await publicLoginPage.verifyPasswordHidden();</code><br><code>await expect( publicLoginPage.passwordField ).toHaveAttribute( 'type', 'password' );</code><br><br>STEP 14: VERIFY PASSWORD VALUE STILL UNCHANGED<br><code>await expect( publicLoginPage.passwordField ).toHaveValue( validPassword );</code><br><br>STEP 15: VERIFY USER REMAINS ON LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 16: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 17: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_008_PasswordVisibility.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_009 | Forgot Password Navigation | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_009_ForgotPassword_Navigation.spec.js) | [Setup / test data](#tc_auth_public_009-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: VERIFY FORGOT PASSWORD LINK<br><code>await expect( publicLoginPage.forgotPasswordLink ).toBeVisible();</code><br><code>await expect( publicLoginPage.forgotPasswordLink ).toHaveText( 'Lupa Kata Laluan?' );</code><br><br>STEP 5: CLICK FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 6: VERIFY FORGOT PASSWORD HEADER<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 7: VERIFY USER ID FIELD<br><code>await expect( forgotPasswordIdField ).toBeVisible();</code><br><br>STEP 8: VERIFY USER ID FIELD EMPTY<br><code>await expect( forgotPasswordIdField ).toHaveValue('');</code><br><br>STEP 9: VERIFY LOGIN PAGE IS NO LONGER DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).not.toBeVisible();</code><br><br>STEP 10: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 11: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_009_ForgotPassword_Navigation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_010 | Forgot Password Empty ID Button Disabled | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js) | [Setup / test data](#tc_auth_public_010-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 6: VERIFY USER ID FIELD<br><code>await expect( forgotPasswordIdField ).toBeVisible();</code><br><br>STEP 7: VERIFY USER ID IS EMPTY<br><code>await expect( forgotPasswordIdField ).toHaveValue('');</code><br><br>STEP 8: VERIFY HANTAR BUTTON DISPLAYED<br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 9: VERIFY HANTAR BUTTON DISABLED<br><code>await expect( submitButton ).toBeDisabled();</code><br><br>STEP 10: VERIFY ID STILL EMPTY<br><code>await expect( forgotPasswordIdField ).toHaveValue('');</code><br><br>STEP 11: VERIFY LOGIN PAGE IS GONE<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).not.toBeVisible();</code><br><br>STEP 12: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 13: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_011 | Forgot Password Clear ID Validation | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation.spec.js) | [Setup / test data](#tc_auth_public_011-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><br>STEP 6: VERIFY ID FIELD EMPTY INITIALLY<br><code>await expect( idField ).toBeVisible();</code><br><code>await expect( idField ).toHaveValue('');</code><br><br>STEP 7: VERIFY HANTAR DISABLED INITIALLY<br><code>await expect( submitButton ).toBeDisabled();</code><br><br>STEP 8: ENTER VALID USER ID<br><code>await idField.fill( validUserId );</code><br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 9: VERIFY HANTAR BECOMES ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 10: CLEAR USER ID<br><code>await idField.clear();</code><br><br>STEP 11: MOVE FOCUS AWAY TO TRIGGER VALIDATION<br><code>await forgotPasswordHeader.click();</code><br><br>STEP 12: VERIFY USER ID EMPTY<br><code>await expect( idField ).toHaveValue('');</code><br><br>STEP 13: VERIFY REQUIRED VALIDATION<br><code>await expect( idContainer ).toHaveAttribute( 'invalid' );</code><br><code>await expect( idErrorMessage ).toBeVisible();</code><br><br>STEP 14: VERIFY HANTAR DISABLED AGAIN<br><code>await expect( submitButton ).toBeDisabled();</code><br><br>STEP 15: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible();</code><br><code>await expect( idField ).toBeVisible();</code><br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 16: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 17: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 18: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_012 | Forgot Password Back to Home | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_012_ForgotPassword_Back.spec.js) | [Setup / test data](#tc_auth_public_012-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( forgotPasswordIdField ).toBeVisible();</code><br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 6: VERIFY KEMBALI BUTTON<br><code>await expect( backButton ).toBeVisible();</code><br><code>await expect( backButton ).toBeEnabled();</code><br><br>STEP 7: CLICK KEMBALI<br><code>await backButton.click();</code><br><br>STEP 8: VERIFY DIGITAL MAIPS HOME PAGE<br><code>await homePage.verifyHomePage();</code><br><br>STEP 9: VERIFY MAIPS USER LOGIN OPTION<br><code>await expect( homePage.maipsUserLoginButton ).toBeVisible();</code><br><br>STEP 10: VERIFY PUBLIC USER LOGIN OPTION<br><code>await expect( homePage.publicUserLoginButton ).toBeVisible();</code><br><br>STEP 11: VERIFY FORGOT PASSWORD PAGE IS GONE<br><code>await expect( forgotPasswordHeader ).not.toBeVisible();</code><br><code>await expect( forgotPasswordIdField ).not.toBeVisible();</code><br><code>await expect( submitButton ).not.toBeVisible();</code><br><code>await expect( backButton ).not.toBeVisible();</code><br><br>STEP 12: VERIFY PUBLIC LOGIN FORM NOT DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).not.toBeVisible();</code><br><br>STEP 13: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 14: VERIFY NO DIALOG OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 15: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_012_ForgotPassword_BackToHome.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_013 | Forgot Password Valid ID Confirmation | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation.spec.js) | [Setup / test data](#tc_auth_public_013-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 6: VERIFY HANTAR DISABLED INITIALLY<br><code>await expect( idField ).toHaveValue('');</code><br><code>await expect( submitButton ).toBeDisabled();</code><br><br>STEP 7: ENTER VALID PUBLIC USER ID<br><code>await idField.fill( validUserId );</code><br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 8: VERIFY HANTAR ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 9: CLICK HANTAR<br><code>await submitButton.click();</code><br><br>STEP 10: LOCATE CONFIRMATION DIALOG<br><code>const confirmationDialog = page.getByRole( 'dialog', { name: 'Lupa Kata Laluan', exact: true } );</code><br><br>STEP 11: VERIFY CONFIRMATION DIALOG<br><code>await expect( confirmationDialog ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12: VERIFY CONFIRMATION MESSAGE<br><code>const confirmationMessage = confirmationDialog.getByText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.', { exact: true } );</code><br><code>await expect( confirmationMessage ).toBeVisible();</code><br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 13: VERIFY BATAL BUTTON<br><code>const cancelButton = confirmationDialog.getByRole( 'button', { name: 'Batal', exact: true } );</code><br><code>await expect( cancelButton ).toBeVisible();</code><br><code>await expect( cancelButton ).toBeEnabled();</code><br><br>STEP 14: VERIFY SECOND HANTAR BUTTON<br><code>const confirmButton = confirmationDialog.getByRole( 'button', { name: 'Hantar', exact: true } );</code><br><code>await expect( confirmButton ).toBeVisible();</code><br><code>await expect( confirmButton ).toBeEnabled();</code><br><br>STEP 15: VERIFY ORIGINAL ID REMAINS<br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 16: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 17: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_014 | Forgot Password Cancel Confirmation | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation.spec.js) | [Setup / test data](#tc_auth_public_014-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><br>STEP 6: ENTER VALID PUBLIC USER ID<br><code>await idField.fill( validUserId );</code><br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK HANTAR<br><code>await submitButton.click();</code><br><br>STEP 9: LOCATE CONFIRMATION DIALOG<br><code>const confirmationDialog = page.getByRole( 'dialog', { name: 'Lupa Kata Laluan', exact: true } );</code><br><br>STEP 10: VERIFY CONFIRMATION DIALOG<br><code>await expect( confirmationDialog ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: LOCATE BATAL BUTTON<br><code>const cancelButton = confirmationDialog.getByRole( 'button', { name: 'Batal', exact: true } );</code><br><code>await expect( cancelButton ).toBeVisible();</code><br><code>await expect( cancelButton ).toBeEnabled();</code><br><br>STEP 12: CLICK BATAL<br><code>await cancelButton.click();</code><br><br>STEP 13: VERIFY CONFIRMATION DIALOG CLOSED<br><code>await expect( confirmationDialog ).not.toBeVisible({ timeout: 10000 });</code><br><br>STEP 14: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible();</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 15: VERIFY USER ID REMAINS<br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 16: VERIFY HANTAR STILL ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 17: VERIFY NO CONFIRMATION DIALOG OPEN<br><code>const openedConfirmationDialog = page .locator( 'vaadin-dialog-overlay[opened]' ) .filter({ hasText: 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' });</code><br><code>await expect( openedConfirmationDialog ).toHaveCount(0);</code><br><br>STEP 18: VERIFY LOGIN PAGE NOT DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 19: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 20: SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_015 | Forgot Password Submit Success | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess.spec.js) | [Setup / test data](#tc_auth_public_015-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><br>STEP 6: ENTER VALID PUBLIC USER ID<br><code>await idField.fill( validUserId );</code><br><code>await expect( idField ).toHaveValue( validUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK FIRST HANTAR<br><code>await submitButton.click();</code><br><br>STEP 9: LOCATE CONFIRMATION DIALOG<br><code>const confirmationDialog = page.getByRole( 'dialog', { name: 'Lupa Kata Laluan', exact: true } );</code><br><br>STEP 10: VERIFY CONFIRMATION DIALOG<br><code>await expect( confirmationDialog ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: LOCATE CONFIRMATION HANTAR<br><code>const confirmButton = confirmationDialog.getByRole( 'button', { name: 'Hantar', exact: true } );</code><br><code>await expect( confirmButton ).toBeVisible();</code><br><code>await expect( confirmButton ).toBeEnabled();</code><br><br>STEP 12: CLICK CONFIRMATION HANTAR<br><code>await confirmButton.click();</code><br><br>STEP 13: VERIFY CONFIRMATION DIALOG CLOSED<br><code>await expect( confirmationDialog ).not.toBeVisible({ timeout: 15000 });</code><br><br>STEP 14: LOCATE SUCCESS DIALOG<br><code>const successDialog = page.getByRole( 'dialog', { name: 'Berjaya', exact: true } );</code><br><br>STEP 15: VERIFY SUCCESS DIALOG<br><code>await expect( successDialog ).toBeVisible({ timeout: 20000 });</code><br><code>await expect( successDialog ).toContainText( 'Berjaya' );</code><br><br>STEP 16: VERIFY OK BUTTON<br><code>const okButton = successDialog.getByRole( 'button', { name: 'OK', exact: true } );</code><br><code>await expect( okButton ).toBeVisible();</code><br><code>await expect( okButton ).toBeEnabled();</code><br><br>STEP 17: SCREENSHOT SUCCESS DIALOG<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_015_SuccessDialog.png', fullPage: true });</code><br><br>STEP 18: CLICK OK<br><code>await okButton.click();</code><br><br>STEP 19: VERIFY SUCCESS DIALOG CLOSED<br><code>await expect( successDialog ).not.toBeVisible({ timeout: 10000 });</code><br><br>STEP 20: VERIFY DIGITAL MAIPS HOME PAGE<br><code>await homePage.verifyHomePage();</code><br><br>STEP 21: VERIFY MAIPS USER LOGIN OPTION<br><code>await expect( homePage.maipsUserLoginButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 22: VERIFY PUBLIC USER LOGIN OPTION<br><code>await expect( homePage.publicUserLoginButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 23: VERIFY FORGOT PASSWORD PAGE CLOSED<br><code>await expect( forgotPasswordHeader ).not.toBeVisible();</code><br><code>await expect( idField ).not.toBeVisible();</code><br><code>await expect( submitButton ).not.toBeVisible();</code><br><br>STEP 24: VERIFY PUBLIC LOGIN PAGE NOT DISPLAYED<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 25: VERIFY NO DIALOG REMAINS OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 26: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 27: FINAL SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_016 | Forgot Password No Registered Email | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_016_ForgotPassword_SubmitFailed.spec.js) | [Setup / test data](#tc_auth_public_016-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: OPEN FORGOT PASSWORD<br><code>await publicLoginPage.openForgotPassword();</code><br><br>STEP 5: VERIFY FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><br>STEP 6: ENTER ID WITH NO REGISTERED EMAIL<br><code>await idField.fill( unregisteredUserId );</code><br><code>await expect( idField ).toHaveValue( unregisteredUserId );</code><br><br>STEP 7: VERIFY HANTAR ENABLED<br><code>await expect( submitButton ).toBeEnabled();</code><br><br>STEP 8: CLICK FIRST HANTAR<br><code>await submitButton.click();</code><br><br>STEP 9: LOCATE CONFIRMATION DIALOG<br><code>const confirmationDialog = page.getByRole( 'dialog', { name: 'Lupa Kata Laluan', exact: true } );</code><br><br>STEP 10: VERIFY CONFIRMATION DIALOG<br><code>await expect( confirmationDialog ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( confirmationDialog ).toContainText( 'Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.' );</code><br><br>STEP 11: LOCATE CONFIRMATION HANTAR<br><code>const confirmButton = confirmationDialog.getByRole( 'button', { name: 'Hantar', exact: true } );</code><br><code>await expect( confirmButton ).toBeVisible();</code><br><code>await expect( confirmButton ).toBeEnabled();</code><br><br>STEP 12: CONFIRM REQUEST<br><code>await confirmButton.click();</code><br><br>STEP 13: VERIFY CONFIRMATION DIALOG CLOSED<br><code>await expect( confirmationDialog ).not.toBeVisible({ timeout: 15000 });</code><br><br>STEP 14: LOCATE FAILED DIALOG<br><code>const expectedErrorMessage = 'Tiada email berdaftar dalam digital MAIPs. Sila hubungi pihak MAIPs untuk bantuan lanjut.';</code><br><code>const failedDialog = page .locator( 'vaadin-dialog-overlay[opened]' ) .filter({ hasText: 'Tiada email berdaftar dalam digital MAIPs.' });</code><br><br>STEP 15: VERIFY FAILED DIALOG<br><code>await expect( failedDialog ).toBeVisible({ timeout: 20000 });</code><br><br>STEP 16: VERIFY FAILED TITLE<br><code>await expect( failedDialog ).toContainText( 'Tidak Berjaya' );</code><br><br>STEP 17: VERIFY ERROR MESSAGE<br><code>await expect( failedDialog ).toContainText( expectedErrorMessage );</code><br><br>STEP 18: LOCATE OK BUTTON<br><code>const okButton = failedDialog.locator('#ok');</code><br><code>await expect( okButton ).toBeVisible();</code><br><code>await expect( okButton ).toBeEnabled();</code><br><br>STEP 19: SCREENSHOT FAILED DIALOG<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_016_FailedDialog.png', fullPage: true });</code><br><br>STEP 20: CLICK OK<br><code>await okButton.click();</code><br><br>STEP 21: VERIFY FAILED DIALOG CLOSED<br><code>await expect( failedDialog ).not.toBeVisible({ timeout: 10000 });</code><br><br>STEP 22: VERIFY REMAIN ON FORGOT PASSWORD PAGE<br><code>await expect( forgotPasswordHeader ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( forgotPasswordHeader ).toContainText( 'Lupa Kata Laluan' );</code><br><code>await expect( idField ).toBeVisible();</code><br><code>await expect( submitButton ).toBeVisible();</code><br><br>STEP 23: VERIFY ID REMAINS ENTERED<br><code>await expect( idField ).toHaveValue( unregisteredUserId );</code><br><br>STEP 24: VERIFY NO DIALOG REMAINS OPEN<br><code>const openedDialogs = page.locator( 'vaadin-dialog-overlay[opened]' );</code><br><code>await expect( openedDialogs ).toHaveCount(0);</code><br><br>STEP 25: VERIFY DASHBOARD NOT DISPLAYED<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 26: FINAL SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_016_ForgotPassword_NoRegisteredID.png', fullPage: true });</code> |
| TBD | Authentication | TBD | TBD | TC_AUTH_PUBLIC_017 | Logout | Script present; execution TBD — [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_017_Logout.spec.js) | [Setup / test data](#tc_auth_public_017-setup)<br>STEP 1: OPEN DIGITAL MAIPS HOME<br><code>await homePage.open();</code><br><br>STEP 2: OPEN PUBLIC USER LOGIN<br><code>await homePage.openPublicUserLogin();</code><br><br>STEP 3: VERIFY LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 4: LOGIN WITH VALID CREDENTIALS<br><code>await publicLoginPage.login( validUserId, validPassword );</code><br><br>STEP 5: VERIFY DASHBOARD<br><code>await publicLoginPage.verifyDashboard();</code><br><br>STEP 6: VERIFY LOGIN PAGE IS GONE<br><code>await expect( publicLoginPage.loginHeader ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.usernameField ).not.toBeVisible();</code><br><code>await expect( publicLoginPage.passwordField ).not.toBeVisible();</code><br><br>STEP 7: VERIFY LOGOUT BUTTON<br><code>await expect( publicLoginPage.logoutButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( publicLoginPage.logoutButton ).toBeEnabled();</code><br><br>STEP 8: SCREENSHOT BEFORE LOGOUT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_017_BeforeLogout.png', fullPage: true });</code><br><br>STEP 9: LOGOUT<br><code>await publicLoginPage.logout();</code><br><br>STEP 10: VERIFY PUBLIC USER LOGIN PAGE<br><code>await publicLoginPage.verifyLoginPage();</code><br><br>STEP 11: VERIFY DASHBOARD IS GONE<br><code>await publicLoginPage.verifyDashboardNotDisplayed();</code><br><br>STEP 12: VERIFY LOGIN FIELDS EMPTY<br><code>await expect( publicLoginPage.usernameField ).toHaveValue('');</code><br><code>await expect( publicLoginPage.passwordField ).toHaveValue('');</code><br><br>STEP 13: VERIFY LOGIN BUTTON<br><code>await expect( publicLoginPage.loginButton ).toBeVisible();</code><br><code>await expect( publicLoginPage.loginButton ).toBeEnabled();</code><br><br>STEP 14: VERIFY FORGOT PASSWORD LINK<br><code>await expect( publicLoginPage.forgotPasswordLink ).toBeVisible();</code><br><br>STEP 15: FINAL SCREENSHOT<br><code>await page.screenshot({ path: 'test-results/TC_AUTH_PUBLIC_017_Logout.png', fullPage: true });</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_AUTH_MAIPS_001 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_001_Login_Valid.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_002 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_002_Login_Invalid_ID.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_003 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_003_Login_Invalid_Password.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_004 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_004_Login_Invalid_Credentials.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_005 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_005_Login_Empty_ID.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_006 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_006_Login_Empty_Password.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_007 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_007_Login_Empty_Credentials.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_008 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_008_Login_PasswordVisibility.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_009 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_009_ForgotPassword_Navigation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_010 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_011 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_012 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_012_ForgotPassword_Back.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_013 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_014 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_015 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess_RedirectHome.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_016 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed.spec.js) | TBD | TBD | TBD |
| TC_AUTH_MAIPS_017 | [JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_017_Logout.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_001 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_001_Login_Valid.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_002 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_002_Login_Invalid_ID.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_003 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_003_Login_Invalid_Password.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_004 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_004_Login_Invalid_Credentials.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_005 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_005_Login_Empty_ID.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_006 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_006_Login_Empty_Password.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_007 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_007_Login_Empty_Credentials.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_008 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_008_Login_PasswordVisibility.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_009 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_009_ForgotPassword_Navigation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_010 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_011 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_012 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_012_ForgotPassword_Back.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_013 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_014 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_015 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_016 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_016_ForgotPassword_SubmitFailed.spec.js) | TBD | TBD | TBD |
| TC_AUTH_PUBLIC_017 | [JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_017_Logout.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_AUTH_MAIPS_001 setup

Original test title: TC_AUTH_MAIPS_001 - Login Valid

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_001_Login_Valid.spec.js)

~~~javascript
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

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_002 setup

Original test title: TC_AUTH_MAIPS_002 - Login Invalid ID

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_002_Login_Invalid_ID.spec.js)

~~~javascript
const invalidUserId =
    process.env.MAIPS_INVALID_ID;

const validPassword =
    process.env.MAIPS_VALID_PASSWORD;

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

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_003 setup

Original test title: TC_AUTH_MAIPS_003 - Login Invalid Password

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_003_Login_Invalid_Password.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

const invalidPassword =
    process.env.MAIPS_INVALID_PASSWORD;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

if (!invalidPassword) {
    throw new Error(
        'MAIPS_INVALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_004 setup

Original test title: TC_AUTH_MAIPS_004 - Login Invalid Credentials

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_004_Login_Invalid_Credentials.spec.js)

~~~javascript
const invalidUserId =
    process.env.MAIPS_INVALID_ID;

const invalidPassword =
    process.env.MAIPS_INVALID_PASSWORD;

if (!invalidUserId) {
    throw new Error(
        'MAIPS_INVALID_ID is missing from .env'
    );
}

if (!invalidPassword) {
    throw new Error(
        'MAIPS_INVALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_005 setup

Original test title: TC_AUTH_MAIPS_005 - Login Empty ID

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_005_Login_Empty_ID.spec.js)

~~~javascript
const validPassword =
    process.env.MAIPS_VALID_PASSWORD;

if (!validPassword) {
    throw new Error(
        'MAIPS_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_006 setup

Original test title: TC_AUTH_MAIPS_006 - Login Empty Password

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_006_Login_Empty_Password.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_007 setup

Original test title: TC_AUTH_MAIPS_007 - Login Empty Credentials

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_007_Login_Empty_Credentials.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_008 setup

Original test title: TC_AUTH_MAIPS_008 - Login Password Visibility

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_008_Login_PasswordVisibility.spec.js)

~~~javascript
const testPassword = 'TestPassword123!';

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_MAIPS_009 setup

Original test title: TC_AUTH_MAIPS_009 - Forgot Password Navigation

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_009_ForgotPassword_Navigation.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_010 setup

Original test title: TC_AUTH_MAIPS_010 - Forgot Password Empty ID Button Disabled

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_011 setup

Original test title: TC_AUTH_MAIPS_011 - Forgot Password Clear ID Validation

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_011_ForgotPassword_ClearID_Validation.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_012 setup

Original test title: TC_AUTH_MAIPS_012 - Forgot Password Back

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_012_ForgotPassword_Back.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_013 setup

Original test title: TC_AUTH_MAIPS_013 - Forgot Password Valid ID Confirmation

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_013_ForgotPassword_ValidID_Confirmation.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_014 setup

Original test title: TC_AUTH_MAIPS_014 - Forgot Password Cancel Confirmation

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_014_ForgotPassword_Cancel_Confirmation.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_015 setup

Original test title: TC_AUTH_MAIPS_015 - Forgot Password Submit Success

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_015_ForgotPassword_SubmitSuccess_RedirectHome.spec.js)

~~~javascript
const validUserId =
    process.env.MAIPS_VALID_ID;

if (!validUserId) {
    throw new Error(
        'MAIPS_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_016 setup

Original test title: TC_AUTH_MAIPS_016 - Forgot Password Submit Failed

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_016_ForgotPassword_SubmitFailed.spec.js)

~~~javascript
const unregisteredId =
    process.env.MAIPS_UNREGISTERED_ID;

if (!unregisteredId) {
    throw new Error(
        'MAIPS_UNREGISTERED_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);

const forgotPasswordPage =
    new ForgotPasswordPage(page);
~~~

### TC_AUTH_MAIPS_017 setup

Original test title: TC_AUTH_MAIPS_017 - Logout

[Source JavaScript](../../tests/authentication/maips-user/TC_AUTH_MAIPS_017_Logout.spec.js)

~~~javascript
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

const homePage =
    new HomePage(page);

const maipsLoginPage =
    new MAIPSLoginPage(page);
~~~

### TC_AUTH_PUBLIC_001 setup

Original test title: TC_AUTH_PUBLIC_001 - Login Valid

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_001_Login_Valid.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

const validPassword =
    process.env.PUBLIC_VALID_PASSWORD;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

if (!validPassword) {
    throw new Error(
        'PUBLIC_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_002 setup

Original test title: TC_AUTH_PUBLIC_002 - Login Invalid ID

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_002_Login_Invalid_ID.spec.js)

~~~javascript
const invalidUserId =
    process.env.PUBLIC_INVALID_ID;

const validPassword =
    process.env.PUBLIC_VALID_PASSWORD;

if (!invalidUserId) {
    throw new Error(
        'PUBLIC_INVALID_ID is missing from .env'
    );
}

if (!validPassword) {
    throw new Error(
        'PUBLIC_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_003 setup

Original test title: TC_AUTH_PUBLIC_003 - Login Invalid Password

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_003_Login_Invalid_Password.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

const invalidPassword =
    process.env.PUBLIC_INVALID_PASSWORD;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

if (!invalidPassword) {
    throw new Error(
        'PUBLIC_INVALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_004 setup

Original test title: TC_AUTH_PUBLIC_004 - Login Invalid Credentials

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_004_Login_Invalid_Credentials.spec.js)

~~~javascript
const invalidUserId =
    process.env.PUBLIC_INVALID_ID;

const invalidPassword =
    process.env.PUBLIC_INVALID_PASSWORD;

if (!invalidUserId) {
    throw new Error(
        'PUBLIC_INVALID_ID is missing from .env'
    );
}

if (!invalidPassword) {
    throw new Error(
        'PUBLIC_INVALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_005 setup

Original test title: TC_AUTH_PUBLIC_005 - Login Empty ID

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_005_Login_Empty_ID.spec.js)

~~~javascript
const validPassword =
    process.env.PUBLIC_VALID_PASSWORD;

if (!validPassword) {
    throw new Error(
        'PUBLIC_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_006 setup

Original test title: TC_AUTH_PUBLIC_006 - Login Empty Password

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_006_Login_Empty_Password.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_007 setup

Original test title: TC_AUTH_PUBLIC_007 - Login Empty Credentials

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_007_Login_Empty_Credentials.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_008 setup

Original test title: TC_AUTH_PUBLIC_008 - Password Visibility

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_008_Login_PasswordVisibility.spec.js)

~~~javascript
const validPassword =
    process.env.PUBLIC_VALID_PASSWORD;

if (!validPassword) {
    throw new Error(
        'PUBLIC_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

### TC_AUTH_PUBLIC_009 setup

Original test title: TC_AUTH_PUBLIC_009 - Forgot Password Navigation

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_009_ForgotPassword_Navigation.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const forgotPasswordIdField =
    page.locator('vaadin-text-field input').first();
~~~

### TC_AUTH_PUBLIC_010 setup

Original test title: TC_AUTH_PUBLIC_010 - Forgot Password Empty ID Button Disabled

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_010_ForgotPassword_EmptyID_ButtonDisabled.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const forgotPasswordIdField =
    page.locator('vaadin-text-field input').first();

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_011 setup

Original test title: TC_AUTH_PUBLIC_011 - Forgot Password Clear ID Validation

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_011_ForgotPassword_ClearID_Validation.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const idContainer =
    page.locator('vaadin-text-field').first();

const idField =
    idContainer.locator('input');

const idErrorMessage =
    idContainer.locator('[slot="error-message"]');

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_012 setup

Original test title: TC_AUTH_PUBLIC_012 - Forgot Password Back to Home

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_012_ForgotPassword_Back.spec.js)

~~~javascript
const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const forgotPasswordIdField =
    page.locator('vaadin-text-field input').first();

const submitButton =
    page.locator('#submitBtn');

const backButton =
    page
        .getByText(
            'Kembali',
            { exact: true }
        )
        .filter({ visible: true })
        .first();
~~~

### TC_AUTH_PUBLIC_013 setup

Original test title: TC_AUTH_PUBLIC_013 - Forgot Password Valid ID Confirmation

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_013_ForgotPassword_ValidID_Confirmation.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const idField =
    page.locator(
        'vaadin-text-field input'
    ).first();

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_014 setup

Original test title: TC_AUTH_PUBLIC_014 - Forgot Password Cancel Confirmation

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_014_ForgotPassword_CancelConfirmation.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const idField =
    page.locator(
        'vaadin-text-field input'
    ).first();

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_015 setup

Original test title: TC_AUTH_PUBLIC_015 - Forgot Password Submit Success

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_015_ForgotPassword_SubmitSuccess.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const idField =
    page.locator(
        'vaadin-text-field input'
    ).first();

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_016 setup

Original test title: TC_AUTH_PUBLIC_016 - Forgot Password No Registered Email

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_016_ForgotPassword_SubmitFailed.spec.js)

~~~javascript
const unregisteredUserId =
    process.env.PUBLIC_UNREGISTERED_ID;

if (!unregisteredUserId) {
    throw new Error(
        'PUBLIC_UNREGISTERED_ID is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);

const forgotPasswordHeader =
    page.locator('#lupaKataLaluanHeader h1');

const idField =
    page.locator(
        'vaadin-text-field input'
    ).first();

const submitButton =
    page.locator('#submitBtn');
~~~

### TC_AUTH_PUBLIC_017 setup

Original test title: TC_AUTH_PUBLIC_017 - Logout

[Source JavaScript](../../tests/authentication/public-user/TC_AUTH_PUBLIC_017_Logout.spec.js)

~~~javascript
const validUserId =
    process.env.PUBLIC_VALID_ID;

const validPassword =
    process.env.PUBLIC_VALID_PASSWORD;

if (!validUserId) {
    throw new Error(
        'PUBLIC_VALID_ID is missing from .env'
    );
}

if (!validPassword) {
    throw new Error(
        'PUBLIC_VALID_PASSWORD is missing from .env'
    );
}

const homePage =
    new HomePage(page);

const publicLoginPage =
    new PublicLoginPage(page);
~~~

