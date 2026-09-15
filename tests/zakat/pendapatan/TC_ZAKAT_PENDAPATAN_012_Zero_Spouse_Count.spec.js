const { test } = require('@playwright/test');
const { ZakatPendapatanPage } = require('../../../pages/zakat/ZakatPendapatanPage');

test('TC_ZAKAT_PENDAPATAN_012 - Zero Spouse Count', async ({ page }) => {
    const zakat = new ZakatPendapatanPage(page);
    await zakat.open();
    await zakat.openZakatPendapatan();
    await zakat.openIncomeCalculator();
    await zakat.enterIncomeInformation(5000, 1000, 100);
    await zakat.clickNext();
    await zakat.verifyCalculatorStep2();
    await zakat.enterSpouseCount(0);
    await zakat.verifySpouseCount(0);
    console.log('TC_ZAKAT_PENDAPATAN_012 PASSED');
});
