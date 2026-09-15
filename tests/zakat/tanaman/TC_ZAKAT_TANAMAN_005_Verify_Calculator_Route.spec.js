const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_005 - Verify Calculator Route', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TANAMAN_005 PASSED');
});
