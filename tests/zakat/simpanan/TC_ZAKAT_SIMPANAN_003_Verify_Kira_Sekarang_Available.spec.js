const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_003 - Verify Kira Sekarang Available', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await expect(zakat.calculateLink).toBeVisible();
    await expect(zakat.calculateLink).toBeEnabled();
    console.log('TC_ZAKAT_SIMPANAN_003 PASSED');
});
