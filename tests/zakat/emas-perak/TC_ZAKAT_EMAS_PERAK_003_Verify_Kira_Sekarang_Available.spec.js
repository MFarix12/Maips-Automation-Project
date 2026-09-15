const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_003 - Verify Kira Sekarang Available', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await expect(zakat.calculateLink).toBeVisible();
    await expect(zakat.calculateLink).toBeEnabled();
    console.log('TC_ZAKAT_EMAS_PERAK_003 PASSED');
});
