const { expect } = require("@playwright/test");

class MAIPSLoginPage {
  constructor(page) {
    this.page = page;

    this.loginHeader = page.locator("#loginHeader h1");

    this.usernameField = page.locator("vaadin-text-field#usernameField input");

    this.passwordField = page.locator(
      "vaadin-password-field#passwordField input",
    );

    this.passwordContainer = page.locator(
      "vaadin-password-field#passwordField",
    );

    this.loginButton = page.locator("#loginBtn");

    this.forgotPasswordLink = page.locator("#forgotPasswordLink");

    this.invalidCredentialsMessage = page.locator("#loginErrorMessage p");

    this.dashboardMenu = page.locator("#papanPemukaView a span");

    this.logoutButton = page.locator("#logoutButton");

    this.usernameContainer = page.locator("vaadin-text-field#usernameField");

    this.passwordContainer = page.locator(
      "vaadin-password-field#passwordField",
    );

    this.usernameErrorMessage = page.locator(
      'vaadin-text-field#usernameField [slot="error-message"]',
    );

    this.passwordErrorMessage = page.locator(
      'vaadin-password-field#passwordField [slot="error-message"]',
    );
    this.passwordVisibilityButton = page.getByRole(
    'button',
    {
        name: 'Show password'
    }
    );
  }

  // =====================================================
  // VERIFY LOGIN PAGE
  // =====================================================

  async verifyLoginPage() {
    await expect(this.loginHeader).toBeVisible({
      timeout: 15000,
    });

    await expect(this.loginHeader).toContainText("Log Masuk");

    await expect(this.usernameField).toBeVisible();

    await expect(this.passwordField).toBeVisible();

    await expect(this.loginButton).toBeVisible();
  }

  // =====================================================
  // ENTER USER ID
  // =====================================================

  async enterUserId(userId) {
    await this.usernameField.fill(userId);

    await expect(this.usernameField).toHaveValue(userId);
  }

  // =====================================================
  // ENTER PASSWORD
  // =====================================================

  async enterPassword(password) {
    await this.passwordField.fill(password);

    await expect(this.passwordField).toHaveValue(password);
  }

  // =====================================================
  // LOGIN
  // =====================================================

  async login(userId, password) {
    await this.enterUserId(userId);

    await this.enterPassword(password);

    await expect(this.loginButton).toBeEnabled();

    await this.loginButton.click();
  }

  // =====================================================
  // OPEN FORGOT PASSWORD
  // =====================================================

  async openForgotPassword() {
    await expect(this.forgotPasswordLink).toBeVisible();

    await this.forgotPasswordLink.click();
  }

  // =====================================================
  // VERIFY INVALID CREDENTIALS
  // =====================================================

  async verifyInvalidCredentials() {
    await expect(this.invalidCredentialsMessage).toBeVisible({
      timeout: 15000,
    });

    await expect(this.invalidCredentialsMessage).toHaveText(
      "Semak nama pengguna dan kata laluan anda dan cuba lagi.",
    );
  }

  // =====================================================
  // VERIFY DASHBOARD
  // =====================================================

  async verifyDashboard() {
    await expect(this.dashboardMenu).toBeVisible({
      timeout: 20000,
    });

    await expect(this.dashboardMenu).toContainText("Papan Pemuka");
  }

  // =====================================================
  // VERIFY DASHBOARD NOT DISPLAYED
  // =====================================================

  async verifyDashboardNotDisplayed() {
    await expect(this.dashboardMenu).not.toBeVisible();
  }

  // =====================================================
  // LOGOUT
  // =====================================================

  async logout() {
    await expect(this.logoutButton).toBeVisible({
      timeout: 15000,
    });

    await expect(this.logoutButton).toBeEnabled();

    await this.logoutButton.click();
  }

  // =====================================================
// CLICK LOGIN
// =====================================================

async clickLogin() {

    await expect(
        this.loginButton
    ).toBeVisible();

    await this.loginButton.click();
}


// =====================================================
// VERIFY USER ID EMPTY
// =====================================================

async verifyUserIdEmpty() {

    await expect(
        this.usernameField
    ).toHaveValue('');
}


// =====================================================
// VERIFY PASSWORD EMPTY
// =====================================================

async verifyPasswordEmpty() {

    await expect(
        this.passwordField
    ).toHaveValue('');
}


// =====================================================
// VERIFY USER ID VALIDATION
// =====================================================

async verifyUserIdValidation() {

    await expect(
        this.usernameContainer
    ).toHaveAttribute('invalid');

    await expect(
        this.usernameErrorMessage
    ).toBeVisible();
}


// =====================================================
// VERIFY PASSWORD VALIDATION
// =====================================================

async verifyPasswordValidation() {

    await expect(
        this.passwordContainer
    ).toHaveAttribute('invalid');

    await expect(
        this.passwordErrorMessage
    ).toBeVisible();
}

// =====================================================
// VERIFY PASSWORD IS HIDDEN
// =====================================================

async verifyPasswordHidden() {

    await expect(
        this.passwordField
    ).toHaveAttribute(
        'type',
        'password'
    );
}


// =====================================================
// VERIFY PASSWORD IS VISIBLE
// =====================================================

async verifyPasswordVisible() {

    await expect(
        this.passwordField
    ).toHaveAttribute(
        'type',
        'text'
    );
}


// =====================================================
// SHOW PASSWORD
// =====================================================

async showPassword() {

    await expect(
        this.passwordVisibilityButton
    ).toBeVisible();

    await this.passwordVisibilityButton.click();

    await this.verifyPasswordVisible();
}


// =====================================================
// HIDE PASSWORD
// =====================================================

async hidePassword() {

    // The same Vaadin button remains after the
    // password visibility state changes.
    const visibilityButton = this.page.locator(
        'vaadin-password-field#passwordField vaadin-password-field-button'
    );

    await expect(
        visibilityButton
    ).toBeVisible();

    await visibilityButton.click();

    await this.verifyPasswordHidden();
}

}

module.exports = { MAIPSLoginPage };
