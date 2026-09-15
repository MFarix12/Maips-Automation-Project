const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_005 - Verify Calculator Route', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();
    console.log('TC_ZAKAT_EMAS_PERAK_005 PASSED');
});
