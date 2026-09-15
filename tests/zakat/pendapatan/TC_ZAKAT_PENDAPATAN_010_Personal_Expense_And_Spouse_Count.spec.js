const { test } = require('@playwright/test');
const { ZakatPendapatanPage } = require('../../../pages/zakat/ZakatPendapatanPage');

test('TC_ZAKAT_PENDAPATAN_010 - Personal Expense And Spouse Count', async ({ page }) => {
    const zakat = new ZakatPendapatanPage(page);
    const monthlyIncome = 5000;
    const bonus = 1000;
    const otherIncome = 100;
    const personalExpense = 1000;
    const spouseCount = 1;

    await zakat.open();
    await zakat.openZakatPendapatan();
    await zakat.openIncomeCalculator();
    await zakat.enterIncomeInformation(monthlyIncome, bonus, otherIncome);
    await zakat.clickNext();
    await zakat.verifyCalculatorStep2();
    await zakat.enterPersonalExpense(personalExpense);
    await zakat.verifyPersonalExpense(personalExpense);
    await zakat.enterSpouseCount(spouseCount);
    await zakat.verifySpouseCount(spouseCount);
    console.log('TC_ZAKAT_PENDAPATAN_010 PASSED');
});
