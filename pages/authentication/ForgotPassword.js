const { expect } = require("@playwright/test");

class ForgotPasswordPage {
  constructor(page) {
    this.page = page;

    this.header = page.locator("#lupaKataLaluanHeader h1");

    this.idContainer = page.locator("vaadin-text-field#emailTextField");

    this.idField = page.locator("vaadin-text-field#emailTextField input");

    this.submitButton = page.locator("#submitBtn");

    this.backButton = page.locator("#backBtn");
  }

  // =====================================================
  // VERIFY PAGE
  // =====================================================

  async verifyPage() {
    await expect(this.header).toBeVisible({
      timeout: 15000,
    });

    await expect(this.header).toContainText("Lupa Kata Laluan");

    await expect(this.idField).toBeVisible();

    await expect(this.submitButton).toBeVisible();

    await expect(this.backButton).toBeVisible();
  }

  // =====================================================
  // ENTER ID
  // =====================================================

  async enterId(userId) {
    await this.idField.fill(userId);

    await expect(this.idField).toHaveValue(userId);
  }

  // =====================================================
  // CLEAR ID
  // =====================================================

  async clearId() {
    await this.idField.clear();

    await expect(this.idField).toHaveValue("");
  }

  // =====================================================
  // SUBMIT
  // =====================================================

  async submit() {
    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();
  }

  // =====================================================
  // VERIFY SUBMIT DISABLED
  // =====================================================

  async verifySubmitDisabled() {
    await expect(this.submitButton).toBeDisabled();
  }

  // =====================================================
  // CLICK BACK
  // =====================================================

  async clickBack() {
    await expect(this.backButton).toBeVisible();

    await this.backButton.click();
  }

  // =====================================================
  // GET CONFIRMATION DIALOG
  // =====================================================

  getConfirmationDialog() {
    return this.page.locator("vaadin-dialog-overlay[opened]").filter({
      hasText:
        "Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.",
    });
  }

  // =====================================================
  // VERIFY CONFIRMATION DIALOG
  // =====================================================

  async verifyConfirmationDialog() {
    const dialog = this.getConfirmationDialog();

    await expect(dialog).toBeVisible({
      timeout: 15000,
    });

    await expect(dialog).toContainText(
      "Kami akan menghantar emel kepada anda bagi tindakan selanjutnya.",
    );
  }

  // =====================================================
  // CONFIRM FORGOT PASSWORD
  // =====================================================

  async confirmRequest() {
    const dialog = this.getConfirmationDialog();

    await expect(dialog).toBeVisible({
      timeout: 15000,
    });

    const confirmButton = dialog.getByRole("button", {
      name: "Hantar",
      exact: true,
    });

    await expect(confirmButton).toBeEnabled();

    await confirmButton.click();
  }

  // =====================================================
  // CANCEL CONFIRMATION
  // =====================================================

  async cancelRequest() {
    const dialog = this.getConfirmationDialog();

    const cancelButton = dialog.getByRole("button", {
      name: "Batal",
      exact: true,
    });

    await expect(cancelButton).toBeVisible();

    await cancelButton.click();

    await expect(dialog).not.toBeVisible();
  }

  // =====================================================
  // VERIFY SUCCESS DIALOG
  // =====================================================

  async verifySuccessDialog() {
    const dialog = this.page.locator("vaadin-dialog-overlay[opened]").filter({
      hasText: "Berjaya",
    });

    await expect(dialog).toBeVisible({
      timeout: 20000,
    });

    return dialog;
  }

  // =====================================================
  // VERIFY FAILED DIALOG
  // =====================================================

  async verifyFailedDialog() {
    const expectedMessage =
      "Tiada email berdaftar dalam digital MAIPs. Sila hubungi pihak MAIPs untuk bantuan lanjut.";

    const dialog = this.page.locator("vaadin-dialog-overlay[opened]").filter({
      hasText: "Tiada email berdaftar dalam digital MAIPs.",
    });

    await expect(dialog).toBeVisible({
      timeout: 20000,
    });

    await expect(dialog).toContainText("Tidak Berjaya");

    await expect(dialog).toContainText(expectedMessage);

    return dialog;
  }

  // =====================================================
  // CLICK DIALOG OK
  // =====================================================

  async clickDialogOK(dialog) {
    const okButton = dialog.locator("#ok");

    await expect(okButton).toBeVisible();

    await expect(okButton).toBeEnabled();

    await okButton.click();

    await expect(dialog).not.toBeVisible();
  }

  // =====================================================
  // VERIFY ID REQUIRED VALIDATION
  // =====================================================

  async verifyIdRequiredValidation() {
    await expect(this.idContainer).toHaveAttribute("invalid");

    const errorMessage = this.idContainer.locator('[slot="error-message"]');

    await expect(errorMessage).toBeVisible();

    await expect(this.idField).toHaveValue("");

    await expect(this.submitButton).toBeDisabled();
  }
}

module.exports = { ForgotPasswordPage };
