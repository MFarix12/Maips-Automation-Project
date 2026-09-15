const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_004 - Verify Info Available', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await zakat.openHome();
    await expect(zakat.infoLink).toBeVisible();
    console.log('TC_ZAKAT_PERNIAGAAN_004 PASSED');
});
