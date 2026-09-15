const { test } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_001 - Open Zakat Ternakan', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);

    await zakat.openHome();
    await zakat.verifyCard();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();

    console.log('TC_ZAKAT_TERNAKAN_001 PASSED');
});
