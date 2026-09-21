const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Close Calculator', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_021 - Close Calculator',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


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
            // STEP 3 - VERIFY OPEN CALCULATOR BUTTON
            // =====================================================

            await expect(
                zakatPage.openCalculatorButton
            ).toBeVisible();


            // =====================================================
            // STEP 4 - OPEN CALCULATOR
            // =====================================================

            await zakatPage.openIncomeCalculator();


            // =====================================================
            // STEP 5 - VERIFY CALCULATOR OPENED
            // =====================================================

            await zakatPage.verifyCalculatorStep1();

            await expect(
                zakatPage.closeCalculatorButton
            ).toBeVisible();


            // =====================================================
            // STEP 6 - VERIFY CALCULATOR INTERACTION
            // =====================================================

            await zakatPage.enterBonus(1000);

            await expect(
                zakatPage.bonusField
            ).toHaveValue('1000');


            // =====================================================
            // STEP 7 - CLICK CLOSE (X)
            // =====================================================

            await zakatPage.closeCalculatorButton.click();


            // =====================================================
            // STEP 8 - VERIFY MAIN ZAKAT PENDAPATAN UI
            // =====================================================

            await expect(
                zakatPage.zakatPendapatanHeading
            ).toBeVisible({
                timeout: 15000
            });

            await expect(
                zakatPage.openCalculatorButton
            ).toBeVisible({
                timeout: 15000
            });


            // =====================================================
            // STEP 9 - VERIFY PAYMENT CART STILL AVAILABLE
            // =====================================================

            await expect(
                zakatPage.paymentCartHeading
            ).toBeVisible();


            // =====================================================
            // STEP 10 - REOPEN CALCULATOR
            // =====================================================

            await zakatPage.openIncomeCalculator();


            // =====================================================
            // STEP 11 - VERIFY CALCULATOR CAN BE REOPENED
            // =====================================================

            await zakatPage.verifyCalculatorStep1();

            await expect(
                zakatPage.closeCalculatorButton
            ).toBeVisible();

        }
    );

});