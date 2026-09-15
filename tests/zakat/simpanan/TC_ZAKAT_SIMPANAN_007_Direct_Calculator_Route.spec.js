const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_007 - Direct Calculator Route', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await page.goto('/public/bayaran/zakat?jenis=simpanan');
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_SIMPANAN_007 PASSED');
});
