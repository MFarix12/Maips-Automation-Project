const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_002 - Verify Module Card', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await zakat.openHome();
    await zakat.verifyCard();
    console.log('TC_ZAKAT_PERNIAGAAN_002 PASSED');
});
