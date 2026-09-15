const { test } = require('@playwright/test');
const { ZakatPerniagaanPage } = require('../../../pages/zakat/ZakatPerniagaanPage');

test('TC_ZAKAT_PERNIAGAAN_001 - Open Zakat Perniagaan', async ({ page }) => {
    const zakat = new ZakatPerniagaanPage(page);

    await zakat.openHome();
    await zakat.verifyCard();
    await zakat.openCalculator();
    await zakat.verifyCalculatorRoute();

    console.log('TC_ZAKAT_PERNIAGAAN_001 PASSED');
});
