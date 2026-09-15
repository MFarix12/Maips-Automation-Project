const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_008 - Reload Calculator Route', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.reload();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_EMAS_PERAK_008 PASSED');
});
