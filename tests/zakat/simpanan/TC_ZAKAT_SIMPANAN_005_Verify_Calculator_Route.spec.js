const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_005 - Verify Calculator Route', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_SIMPANAN_005 PASSED');
});
