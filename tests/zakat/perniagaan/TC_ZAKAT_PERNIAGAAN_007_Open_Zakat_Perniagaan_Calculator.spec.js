const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Open Calculator',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_007 - Open Zakat Perniagaan Calculator',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.openZakatPerniagaan();


                // =================================================
                // STEP 3 - VERIFY ZAKAT PERNIAGAAN PAGE
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 4 - VERIFY BUKA KALKULATOR
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR TITLE NOT SHOWN YET
                // =================================================
                //
                // #kalkulatorContentLayout already exists and is
                // visible before opening the calculator.
                //
                // Therefore, the calculator title is used to
                // determine whether calculator content is opened.
                //
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 6 - CLICK BUKA KALKULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 7 - VERIFY CALCULATOR CONTAINER
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY CALCULATOR TITLE
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorTitle
                ).toHaveText(
                    'Kalkulator Zakat Perniagaan',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 9 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 10 - VERIFY MAIN MODULE REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Zakat Perniagaan opens successfully.
                //
                // 2. Buka Kalkulator is visible and enabled.
                //
                // 3. Calculator title is not displayed before
                //    Buka Kalkulator is clicked.
                //
                // 4. User can click Buka Kalkulator.
                //
                // 5. Calculator content is displayed.
                //
                // 6. "Kalkulator Zakat Perniagaan" is displayed.
                //
                // 7. User remains in the Zakat Perniagaan module.
                //
                // =================================================
            }
        );
    }
);