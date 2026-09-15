const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_005 - Verify Calculator Route', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_TERNAKAN_005 PASSED');
});
