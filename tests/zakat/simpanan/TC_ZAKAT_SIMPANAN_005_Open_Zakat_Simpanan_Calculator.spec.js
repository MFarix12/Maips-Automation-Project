const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Open Calculator',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_005 - Open Zakat Simpanan Calculator',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN BAYARAN ZAKAT
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN ZAKAT WANG SIMPANAN
                // =================================================

                await zakatPage.openZakatSimpanan();


                // =================================================
                // STEP 4 - VERIFY ZAKAT SIMPANAN PAGE
                // =================================================

                await zakatPage.verifyZakatSimpananPage();


                // =================================================
                // STEP 5 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 6 - VERIFY CALCULATOR IS OPEN
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 7 - VERIFY JUMLAH SIMPANAN FIELD
                // =================================================

                await expect(
                    zakatPage.calculatorSavingsField
                ).toBeVisible();


                // =================================================
                // STEP 8 - VERIFY MASUK TROLI BUTTON
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After clicking Buka Kalkulator:
                //
                // - Zakat Simpanan calculator opens
                // - Calculator content is displayed
                // - Jumlah Simpanan field is displayed
                // - Masuk Troli button is displayed
                //
                // No calculation or cart action is performed yet.
                //
                // =================================================
            }
        );
    }
);