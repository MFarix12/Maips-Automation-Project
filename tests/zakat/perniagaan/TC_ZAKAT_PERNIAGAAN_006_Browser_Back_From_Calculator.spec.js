const { test, expect } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_006 - Browser Back From Calculator', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Zakat Perniagaan', exact: true })).toBeVisible({ timeout: 15000 });
    console.log('TC_ZAKAT_PERNIAGAAN_006 PASSED');
});
