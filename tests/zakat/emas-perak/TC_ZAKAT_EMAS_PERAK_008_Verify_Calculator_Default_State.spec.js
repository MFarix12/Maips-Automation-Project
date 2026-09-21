const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Calculator Default State',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_008 - Verify Calculator Default State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT EMAS / PERAK
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatEmasPerakPage();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR BUTTON
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 5 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 6 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 7 - VERIFY DEFAULT CALCULATOR STATE
                // =================================================

                await zakatPage.verifyCalculatorDefaultState();


                // =================================================
                // STEP 8 - VERIFY CALCULATOR CONTAINER
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY PAYMENT CART REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After clicking Buka Kalkulator:
                //
                // - Calculator opens successfully
                // - Calculator container is visible
                // - Bakul Bayaran remains available
                // - No calculation has been performed
                // - No item has been added to cart
                //
                // Specific calculator fields/options are NOT
                // asserted until their actual UI state and
                // locators are confirmed.
                //
                // =================================================
            }
        );
    }
);