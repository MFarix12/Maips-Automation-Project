const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_007 - Direct Calculator Route', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await page.goto('/public/bayaran/zakat?jenis=emas');
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_EMAS_PERAK_007 PASSED');
});
