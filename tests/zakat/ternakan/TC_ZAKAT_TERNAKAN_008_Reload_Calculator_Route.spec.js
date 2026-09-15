const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_008 - Reload Calculator Route', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.reload();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TERNAKAN_008 PASSED');
});
