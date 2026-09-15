const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_008 - Reload Calculator Route', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.reload();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TANAMAN_008 PASSED');
});
