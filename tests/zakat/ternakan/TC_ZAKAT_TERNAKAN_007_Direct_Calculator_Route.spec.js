const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_007 - Direct Calculator Route', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await page.goto('/public/bayaran/zakat?jenis=ternakan');
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TERNAKAN_007 PASSED');
});
