const { test } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_001 - Open Zakat Emas/Perak', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);

    await zakat.openHome();
    await zakat.verifyCard();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();

    console.log('TC_ZAKAT_EMAS_PERAK_001 PASSED');
});
