const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_003 - Verify Kira Sekarang Available', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await expect(zakat.calculateLink).toBeVisible();
    await expect(zakat.calculateLink).toBeEnabled();
    console.log('TC_ZAKAT_TERNAKAN_003 PASSED');
});
