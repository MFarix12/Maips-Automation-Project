const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_008 - Reload Calculator Route', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.reload();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_SIMPANAN_008 PASSED');
});
