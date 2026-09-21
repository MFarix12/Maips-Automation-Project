const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Calculator',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_007 - Open Zakat Emas / Perak Calculator',
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
                // STEP 4 - VERIFY BUKA KALKULATOR BUTTON
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
                // STEP 7 - VERIFY CALCULATOR CONTAINER
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY CART REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // When user clicks "Buka Kalkulator":
                //
                // - Zakat Emas/Perak calculator opens successfully
                // - Calculator container is displayed
                // - Bakul Bayaran remains available
                //
                // Calculator fields are NOT validated in TC007.
                // They depend on calculator selections and will be
                // covered by subsequent test cases.
                //
                // =================================================
            }
        );
    }
);