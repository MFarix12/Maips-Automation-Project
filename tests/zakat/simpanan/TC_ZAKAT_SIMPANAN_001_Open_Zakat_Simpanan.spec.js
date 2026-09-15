const { test } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_001 - Open Zakat Simpanan', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);

    await zakat.openHome();
    await zakat.verifyCard();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();

    console.log('TC_ZAKAT_SIMPANAN_001 PASSED');
});
