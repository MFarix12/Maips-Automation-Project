const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_008 - Reload Calculator Route', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.reload();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_PERNIAGAAN_008 PASSED');
});
