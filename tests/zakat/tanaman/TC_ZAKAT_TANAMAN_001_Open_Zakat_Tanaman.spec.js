const { test } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_001 - Open Zakat Tanaman', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);

    await zakat.openHome();
    await zakat.verifyCard();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();

    console.log('TC_ZAKAT_TANAMAN_001 PASSED');
});
