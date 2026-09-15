const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_004 - Verify Info Available', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await expect(zakat.infoLink).toBeVisible();
    console.log('TC_ZAKAT_TERNAKAN_004 PASSED');
});
