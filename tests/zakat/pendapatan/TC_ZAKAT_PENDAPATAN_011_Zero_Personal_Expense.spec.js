const { test } = require('@playwright/test');
const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');

test.describe('Zakat Pendapatan - Zero Personal Expense', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_011 - Zero Personal Expense',
        async ({ page }) => {

            const zakatPage = new ZakatPendapatanPage(page);

            // =====================================================
            // TEST DATA
            // =====================================================

            const monthlyIncome = 5000;
            const bonus = 1000;
            const otherIncome = 100;

            const personalExpense = 0;


            // =====================================================
            // STEP 1 - OPEN MAIPS
            // =====================================================

            await zakatPage.open();


            // =====================================================
            // STEP 2 - OPEN ZAKAT PENDAPATAN
            // =====================================================

            await zakatPage.openZakatPendapatan();

            await zakatPage.verifyZakatPendapatanPage();


            // =====================================================
            // STEP 3 - OPEN CALCULATOR
            // =====================================================

            await zakatPage.openIncomeCalculator();

            await zakatPage.verifyCalculatorStep1();


            // =====================================================
            // STEP 4 - ENTER INCOME
            // =====================================================

            await zakatPage.enterIncomeInformation(
                monthlyIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 5 - VERIFY INCOME
            // =====================================================

            await zakatPage.verifyIncomeValues(
                monthlyIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 6 - GO TO EXPENSE STEP
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 7 - ENTER ZERO PERSONAL EXPENSE
            // =====================================================

            await zakatPage.enterPersonalExpense(
                personalExpense
            );


            // =====================================================
            // STEP 8 - VERIFY ZERO VALUE
            // =====================================================

            await zakatPage.verifyPersonalExpense(
                personalExpense
            );


            // =====================================================
            // STEP 9 - CONTINUE TO RESULT
            // =====================================================

            await zakatPage.clickNext();
        }
    );
});