const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_007 - Direct Calculator Route', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await page.goto('/public/bayaran/zakat?jenis=tanaman');
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TANAMAN_007 PASSED');
});
