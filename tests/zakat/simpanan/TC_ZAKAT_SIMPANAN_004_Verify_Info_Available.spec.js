const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_004 - Verify Info Available', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await expect(zakat.infoLink).toBeVisible();
    console.log('TC_ZAKAT_SIMPANAN_004 PASSED');
});
