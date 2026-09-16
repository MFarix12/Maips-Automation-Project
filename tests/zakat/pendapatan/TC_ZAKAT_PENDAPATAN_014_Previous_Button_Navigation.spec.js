const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Previous Button Navigation', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_014 - Previous Button Navigation',
        async ({ page }) => {

            const zakatPage = new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA
            // =====================================================

            const monthlyIncome = 5000;
            const bonus = 1000;
            const otherIncome = 100;


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
                monthlyIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 5 - VERIFY INCOME VALUES
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
            // STEP 7 - CLICK PREVIOUS
            // =====================================================

            await zakatPage.clickPrevious();


            // =====================================================
            // STEP 8 - VERIFY RETURN TO INCOME STEP
            // =====================================================

            await zakatPage.verifyReturnedToIncomeStep();


            // =====================================================
            // STEP 9 - VERIFY VALUES ARE PRESERVED
            // =====================================================

            /*
             * We verify Bonus and Pendapatan Lain because these
             * fields use stable semantic locators.
             *
             * The monthly income field currently uses a generated
             * Vaadin ID which can change after the calculator
             * re-renders when clicking "Sebelum".
             */

            await expect(
                zakatPage.bonusField
            ).toHaveValue(
                bonus.toString()
            );

            await expect(
                zakatPage.otherIncomeField
            ).toHaveValue(
                otherIncome.toString()
            );


            // =====================================================
            // STEP 10 - VERIFY USER CAN CONTINUE AGAIN
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();

        }
    );

});