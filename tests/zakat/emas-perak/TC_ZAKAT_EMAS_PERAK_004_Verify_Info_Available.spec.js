const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_004 - Verify Info Available', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await expect(zakat.infoLink).toBeVisible();
    console.log('TC_ZAKAT_EMAS_PERAK_004 PASSED');
});
