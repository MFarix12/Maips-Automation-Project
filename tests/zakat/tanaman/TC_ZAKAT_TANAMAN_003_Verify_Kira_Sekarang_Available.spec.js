const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_003 - Verify Kira Sekarang Available', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await expect(zakat.calculateLink).toBeVisible();
    await expect(zakat.calculateLink).toBeEnabled();
    console.log('TC_ZAKAT_TANAMAN_003 PASSED');
});
