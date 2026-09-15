const { expect } = require('@playwright/test');

class HomePage {

    constructor(page) {
        this.page = page;

        // MAIPs User Login
        this.maipsUserLoginButton = page
            .locator('#header_pop a[href="/internal"]')
            .filter({ visible: true })
            .first();

        // Public User Login
        this.publicUserLoginButton = page
            .locator('#header_pop a')
            .filter({
                has: page.locator('img[src*="Button-Login"]')
            })
            .filter({ visible: true })
            .first();
    }


    // =====================================================
    // OPEN HOME PAGE
    // =====================================================

    async open() {

        await this.page.goto('/');

        await expect(
            this.maipsUserLoginButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =====================================================
    // OPEN MAIPS USER LOGIN
    // =====================================================

    async openMAIPSUserLogin() {

        await expect(
            this.maipsUserLoginButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.maipsUserLoginButton.click();
    }


    // =====================================================
    // OPEN PUBLIC USER LOGIN
    // =====================================================

    async openPublicUserLogin() {

        await expect(
            this.publicUserLoginButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.publicUserLoginButton.click();
    }


    // =====================================================
    // VERIFY HOME PAGE
    // =====================================================

    async verifyHomePage() {

        await expect(
            this.maipsUserLoginButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.publicUserLoginButton
        ).toBeVisible({
            timeout: 15000
        });
    }
}

module.exports = { HomePage };