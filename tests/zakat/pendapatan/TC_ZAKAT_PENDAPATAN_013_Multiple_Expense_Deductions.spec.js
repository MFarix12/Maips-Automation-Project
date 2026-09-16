const { test } = require('@playwright/test');
const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');

test.describe('Zakat Pendapatan - Multiple Expense Deductions', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_013 - Multiple Expense Deductions',
        async ({ page }) => {

            const zakatPage = new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA - INCOME
            // =====================================================

            const incomeData = {
                monthlyIncome: 5000,
                bonus: 1000,
                otherIncome: 100
            };


            // =====================================================
            // TEST DATA - EXPENSES
            // =====================================================

            const expenseData = {
                spouseCount: 1,
                childExpense: 200,
                parentExpense: 200,
                medicalExpense: 200,
                vehicleDebt: 400,
                houseDebt: 1200,
                kwspDeduction: 650,
                educationLoan: 250,
                tabungHajiContribution: 250
            };


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
            // STEP 4 - ENTER INCOME INFORMATION
            // =====================================================

            await zakatPage.enterIncomeInformation(
                incomeData.monthlyIncome,
                incomeData.bonus,
                incomeData.otherIncome
            );


            // =====================================================
            // STEP 5 - VERIFY INCOME VALUES
            // =====================================================

            await zakatPage.verifyIncomeValues(
                incomeData.monthlyIncome,
                incomeData.bonus,
                incomeData.otherIncome
            );


            // =====================================================
            // STEP 6 - GO TO EXPENSE INFORMATION
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 7 - ENTER MULTIPLE EXPENSES
            // =====================================================

            await zakatPage.enterMultipleExpenses(
                expenseData
            );


            // =====================================================
            // STEP 8 - VERIFY MULTIPLE EXPENSES
            // =====================================================

            await zakatPage.verifyMultipleExpenses(
                expenseData
            );


            // =====================================================
            // STEP 9 - CONTINUE TO CALCULATION RESULT
            // =====================================================

            await zakatPage.clickNext();

        }
    );

});