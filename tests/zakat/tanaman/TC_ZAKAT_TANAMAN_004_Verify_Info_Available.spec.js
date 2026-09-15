const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_004 - Verify Info Available', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await expect(zakat.infoLink).toBeVisible();
    console.log('TC_ZAKAT_TANAMAN_004 PASSED');
});
