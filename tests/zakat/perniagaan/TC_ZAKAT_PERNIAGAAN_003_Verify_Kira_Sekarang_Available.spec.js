const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_003 - Verify Kira Sekarang Available', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await zakat.openHome();
    await expect(zakat.calculateLink).toBeVisible();
    await expect(zakat.calculateLink).toBeEnabled();
    console.log('TC_ZAKAT_PERNIAGAAN_003 PASSED');
});
