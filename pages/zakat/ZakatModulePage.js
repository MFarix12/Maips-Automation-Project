const { expect } = require('@playwright/test');

/**
 * Shared page object for the public Zakat cards shown on the Digital MAIPs home page.
 * It deliberately verifies only behaviour confirmed by the public UI/routes; calculator-
 * specific fields should live in their own page object once their controls are captured.
 */
class ZakatModulePage {
    constructor(page, { name, jenis }) {
        this.page = page;
        this.name = name;
        this.jenis = jenis;

        // Scope actions to the card containing the module heading so repeated
        // "Kira Sekarang" / "Info" links do not require fragile nth() locators.
        this.card = page.locator('div').filter({
            has: page.getByRole('heading', { name, exact: true })
        }).filter({
            has: page.getByRole('link', { name: 'Kira Sekarang', exact: true })
        }).first();

        this.calculateLink = this.card.getByRole('link', {
            name: 'Kira Sekarang',
            exact: true
        });

        this.infoLink = this.card.getByRole('link', {
            name: 'Info',
            exact: true
        });
    }

    async openHome() {
        await this.page.goto('/');
        await expect(this.calculateLink).toBeVisible({ timeout: 15000 });
    }

    async verifyCard() {
        await expect(this.card.getByRole('heading', {
            name: this.name,
            exact: true
        })).toBeVisible();
        await expect(this.calculateLink).toBeVisible();
        await expect(this.calculateLink).toBeEnabled();
        await expect(this.infoLink).toBeVisible();
    }

    async openCalculator() {
        await expect(this.calculateLink).toBeVisible({ timeout: 15000 });
        await this.calculateLink.click();
        await expect(this.page).toHaveURL(
            new RegExp(`/public/bayaran/zakat\\?jenis=${this.jenis}(?:&|$)`),
            { timeout: 15000 }
        );
    }

    async verifyCalculatorRoute() {
        await expect(this.page).toHaveURL(
            new RegExp(`/public/bayaran/zakat\\?jenis=${this.jenis}(?:&|$)`)
        );
    }
}

module.exports = { ZakatModulePage };
