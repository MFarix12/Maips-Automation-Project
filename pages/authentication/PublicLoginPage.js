const { expect } = require('@playwright/test');

class PublicLoginPage {

    constructor(page) {

        this.page = page;


        // =====================================================
        // LOGIN PAGE
        // =====================================================

        this.loginHeader =
            page.locator('#loginHeader h1');


        // =====================================================
        // USER ID
        // =====================================================

        this.usernameContainer =
            page.locator(
                'vaadin-text-field#usernameField'
            );

        this.usernameField =
            page.locator(
                'vaadin-text-field#usernameField input'
            );

        this.usernameErrorMessage =
            this.usernameContainer.locator(
                '[slot="error-message"]'
            );


        // =====================================================
        // PASSWORD
        // =====================================================

        this.passwordContainer =
            page.locator(
                'vaadin-password-field#passwordField'
            );

        this.passwordField =
            page.locator(
                'vaadin-password-field#passwordField input'
            );

        this.passwordErrorMessage =
            this.passwordContainer.locator(
                '[slot="error-message"]'
            );

        this.passwordVisibilityButton =
            page.getByRole(
                'button',
                {
                    name: 'Show password'
                }
            );


        // =====================================================
        // LOGIN BUTTON
        // =====================================================

        this.loginButton =
            page.locator('#loginBtn');


        // =====================================================
        // FORGOT PASSWORD
        // =====================================================

        this.forgotPasswordLink =
            page.getByRole(
                'link',
                {
                    name: 'Lupa Kata Laluan?',
                    exact: true
                }
            );


        // =====================================================
        // INVALID LOGIN MESSAGE
        // =====================================================

        this.invalidCredentialsMessage =
            page.getByText(
                'Semak nama pengguna dan kata laluan anda dan cuba lagi.',
                {
                    exact: true
                }
            );


        // =====================================================
        // DASHBOARD
        // =====================================================

        this.dashboardMenu =
            page.getByRole(
                'link',
                {
                    name: 'Papan Pemuka',
                    exact: true
                }
            );


        // =====================================================
        // LOGOUT
        // =====================================================

        this.logoutButton =
            page.locator('#logoutButton');
    }


    // =========================================================
    // VERIFY LOGIN PAGE
    // =========================================================

    async verifyLoginPage() {

        await expect(
            this.loginHeader
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.loginHeader
        ).toContainText(
            'Log Masuk'
        );

        await expect(
            this.usernameField
        ).toBeVisible();

        await expect(
            this.passwordField
        ).toBeVisible();

        await expect(
            this.loginButton
        ).toBeVisible();

        await expect(
            this.forgotPasswordLink
        ).toBeVisible();
    }


    // =========================================================
    // ENTER USER ID
    // =========================================================

    async enterUserId(userId) {

        await expect(
            this.usernameField
        ).toBeVisible();

        await this.usernameField.fill(
            userId
        );

        await expect(
            this.usernameField
        ).toHaveValue(
            userId
        );
    }


    // =========================================================
    // ENTER PASSWORD
    // =========================================================

    async enterPassword(password) {

        await expect(
            this.passwordField
        ).toBeVisible();

        await this.passwordField.fill(
            password
        );

        await expect(
            this.passwordField
        ).toHaveValue(
            password
        );
    }


    // =========================================================
    // CLICK LOGIN
    // =========================================================

    async clickLogin() {

        await expect(
            this.loginButton
        ).toBeVisible();

        await expect(
            this.loginButton
        ).toBeEnabled();

        await this.loginButton.click();
    }


    // =========================================================
    // LOGIN
    // =========================================================

    async login(userId, password) {

        await this.enterUserId(
            userId
        );

        await this.enterPassword(
            password
        );

        await this.clickLogin();
    }


    // =========================================================
    // OPEN FORGOT PASSWORD
    // =========================================================

    async openForgotPassword() {

        await expect(
            this.forgotPasswordLink
        ).toBeVisible();

        await expect(
            this.forgotPasswordLink
        ).toBeEnabled();

        await this.forgotPasswordLink.click();
    }


    // =========================================================
    // VERIFY INVALID CREDENTIALS
    // =========================================================

    async verifyInvalidCredentials() {

        await expect(
            this.invalidCredentialsMessage
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.invalidCredentialsMessage
        ).toHaveText(
            'Semak nama pengguna dan kata laluan anda dan cuba lagi.'
        );
    }


    // =========================================================
    // VERIFY USER ID EMPTY
    // =========================================================

    async verifyUserIdEmpty() {

        await expect(
            this.usernameField
        ).toHaveValue('');
    }


    // =========================================================
    // VERIFY PASSWORD EMPTY
    // =========================================================

    async verifyPasswordEmpty() {

        await expect(
            this.passwordField
        ).toHaveValue('');
    }


    // =========================================================
    // VERIFY USER ID VALIDATION
    // =========================================================

    async verifyUserIdValidation() {

        await expect(
            this.usernameContainer
        ).toHaveAttribute(
            'invalid'
        );

        await expect(
            this.usernameErrorMessage
        ).toBeVisible();

        await expect(
            this.usernameField
        ).toHaveValue('');
    }


    // =========================================================
    // VERIFY PASSWORD VALIDATION
    // =========================================================

    async verifyPasswordValidation() {

        await expect(
            this.passwordContainer
        ).toHaveAttribute(
            'invalid'
        );

        await expect(
            this.passwordErrorMessage
        ).toBeVisible();

        await expect(
            this.passwordField
        ).toHaveValue('');
    }


    // =========================================================
    // VERIFY PASSWORD HIDDEN
    // =========================================================

    async verifyPasswordHidden() {

        await expect(
            this.passwordField
        ).toHaveAttribute(
            'type',
            'password'
        );
    }


    // =========================================================
    // VERIFY PASSWORD VISIBLE
    // =========================================================

    async verifyPasswordVisible() {

        await expect(
            this.passwordField
        ).toHaveAttribute(
            'type',
            'text'
        );
    }


    // =========================================================
    // SHOW PASSWORD
    // =========================================================

    async showPassword() {

        await expect(
            this.passwordVisibilityButton
        ).toBeVisible();

        await expect(
            this.passwordVisibilityButton
        ).toBeEnabled();

        await this.passwordVisibilityButton.click();

        await this.verifyPasswordVisible();
    }


    // =========================================================
    // HIDE PASSWORD
    // =========================================================

    async hidePassword() {

        /*
         * After clicking Show Password, do not assume that
         * the accessible name changes to "Hide password".
         *
         * Use the Vaadin password field button directly.
         */

        const visibilityButton =
            this.page.locator(
                'vaadin-password-field#passwordField vaadin-password-field-button'
            );

        await expect(
            visibilityButton
        ).toBeVisible();

        await expect(
            visibilityButton
        ).toBeEnabled();

        await visibilityButton.click();

        await this.verifyPasswordHidden();
    }


    // =========================================================
    // VERIFY DASHBOARD
    // =========================================================

    async verifyDashboard() {

        await expect(
            this.dashboardMenu
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.dashboardMenu
        ).toContainText(
            'Papan Pemuka'
        );
    }


    // =========================================================
    // VERIFY DASHBOARD NOT DISPLAYED
    // =========================================================

    async verifyDashboardNotDisplayed() {

        await expect(
            this.dashboardMenu
        ).not.toBeVisible();
    }


    // =========================================================
    // VERIFY LOGOUT BUTTON
    // =========================================================

    async verifyLogoutButton() {

        await expect(
            this.logoutButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.logoutButton
        ).toBeEnabled();
    }


    // =========================================================
    // LOGOUT
    // =========================================================

    async logout() {

        await this.verifyLogoutButton();

        await this.logoutButton.click();
    }


    // =========================================================
    // VERIFY LOGGED OUT
    // =========================================================

    async verifyLoggedOut() {

        await this.verifyLoginPage();

        await expect(
            this.dashboardMenu
        ).not.toBeVisible();

        await expect(
            this.usernameField
        ).toHaveValue('');

        await expect(
            this.passwordField
        ).toHaveValue('');
    }

}

module.exports = {
    PublicLoginPage
};