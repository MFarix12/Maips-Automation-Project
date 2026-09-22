const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Manual Zakat Amount',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_004 - Enter Manual Zakat Amount',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    amount: '1000'
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 4 - VERIFY YEAR
                // =================================================

                await zakatPage
                    .verifySelectedHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 5 - VERIFY AMOUNT FIELD
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                // =================================================
                // STEP 6 - ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage
                    .enterManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 7 - VERIFY ENTERED AMOUNT
                // =================================================

                await zakatPage
                    .verifyManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 8 - VERIFY YEAR REMAINS 2026
                // =================================================

                await zakatPage
                    .verifySelectedHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 9 - VERIFY CALCULATOR BUTTON REMAINS AVAILABLE
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
                // STEP 10 - VERIFY CART STILL EMPTY
                //
                // Entering an amount alone should not add anything
                // to Bakul Bayaran.
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // STEP 11 - CLEAR AMOUNT
                // =================================================

                await zakatPage
                    .clearManualZakatAmount();


                // =================================================
                // STEP 12 - VERIFY FIELD CLEARED
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toHaveValue(
                    '',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - RE-ENTER AMOUNT
                // =================================================

                await zakatPage
                    .enterManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 14 - VERIFY AMOUNT AGAIN
                // =================================================

                await zakatPage
                    .verifyManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 15 - VERIFY CART STILL EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Zakat Ternakan opens successfully.
                //
                // - Tahun/Haul remains 2026.
                //
                // - User can enter RM 1000 into Jumlah Bayaran.
                //
                // - The entered value is retained by the field.
                //
                // - User can clear the value.
                //
                // - User can enter the amount again.
                //
                // - Buka Kalkulator remains available.
                //
                // - Entering an amount does not automatically
                //   create a Bakul Bayaran item.
                //
                // - Cart total remains RM 0.00 until Masuk Troli
                //   is clicked.
                //
                // =================================================
            }
        );
    }
);