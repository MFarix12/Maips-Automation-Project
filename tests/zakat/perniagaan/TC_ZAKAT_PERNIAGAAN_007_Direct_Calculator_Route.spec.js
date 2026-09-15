const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_007 - Direct Calculator Route', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await page.goto('/public/bayaran/zakat?jenis=perniagaan');
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_PERNIAGAAN_007 PASSED');
});
