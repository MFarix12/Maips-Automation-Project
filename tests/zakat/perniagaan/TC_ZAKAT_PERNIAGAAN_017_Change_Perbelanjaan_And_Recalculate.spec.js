const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Change Perbelanjaan and Recalculate',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_017 - Change Perbelanjaan and Recalculate',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',

                    hasilJualan: '1000000',

                    initialPerbelanjaan: '20000',
                    initialKeuntunganBersih: 980000,
                    initialZakat: 24500,

                    updatedPerbelanjaan: '100000',
                    updatedKeuntunganBersih: 900000,
                    updatedZakat: 22500
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.openZakatPerniagaan();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY UNTUNG RUGI METHOD
                // =================================================

                await expect(
                    zakatPage.untungRugiMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - ENTER HASIL JUALAN
                // =================================================

                await zakatPage.enterHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 8 - VERIFY HASIL JUALAN
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 9 - ENTER INITIAL PERBELANJAAN
                // =================================================

                await zakatPage.enterPerbelanjaanKos(
                    testData.initialPerbelanjaan
                );


                // =================================================
                // STEP 10 - VERIFY INITIAL PERBELANJAAN
                // =================================================

                await zakatPage.verifyPerbelanjaanKos(
                    testData.initialPerbelanjaan
                );


                // =================================================
                // STEP 11 - VERIFY INITIAL KEUNTUNGAN BERSIH
                // =================================================
                //
                // RM1,000,000 - RM20,000
                // = RM980,000
                //
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.initialKeuntunganBersih
                );


                // =================================================
                // STEP 12 - VERIFY INITIAL ZAKAT
                // =================================================
                //
                // RM980,000 × 2.5%
                // = RM24,500.00
                //
                // =================================================

                await zakatPage.verifyUntungRugiZakatAmount(
                    testData.initialZakat
                );


                // =================================================
                // STEP 13 - CHANGE PERBELANJAAN
                // =================================================

                await zakatPage.enterPerbelanjaanKos(
                    testData.updatedPerbelanjaan
                );


                // =================================================
                // STEP 14 - VERIFY UPDATED PERBELANJAAN
                // =================================================

                await zakatPage.verifyPerbelanjaanKos(
                    testData.updatedPerbelanjaan
                );


                // =================================================
                // STEP 15 - VERIFY HASIL JUALAN DID NOT CHANGE
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 16 - VERIFY UPDATED KEUNTUNGAN BERSIH
                // =================================================
                //
                // RM1,000,000 - RM100,000
                // = RM900,000
                //
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.updatedKeuntunganBersih
                );


                // =================================================
                // STEP 17 - VERIFY UPDATED ZAKAT
                // =================================================
                //
                // RM900,000 × 2.5%
                // = RM22,500.00
                //
                // =================================================

                await zakatPage.verifyUntungRugiZakatAmount(
                    testData.updatedZakat
                );


                // =================================================
                // STEP 18 - VERIFY OLD RESULT NO LONGER DISPLAYED
                // =================================================

                const oldZakatAmount =
                    zakatPage.calculatorContainer.getByText(
                        'RM 24,500.00',
                        {
                            exact: true
                        }
                    );

                await expect(
                    oldZakatAmount
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY ABOVE-NISAB STATE
                // =================================================

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });

                await expect(
                    zakatPage.zakatResultLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY MASUK TROLI AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 21 - VERIFY CART REMAINS EMPTY
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial:
                //
                // Hasil Jualan       = RM1,000,000
                // Perbelanjaan       = RM20,000
                // Keuntungan Bersih  = RM980,000
                // Zakat 2.5%         = RM24,500.00
                //
                // After changing Perbelanjaan:
                //
                // Hasil Jualan       = RM1,000,000
                // Perbelanjaan       = RM100,000
                // Keuntungan Bersih  = RM900,000
                // Zakat 2.5%         = RM22,500.00
                //
                // The calculator must automatically update the
                // Keuntungan Bersih and Zakat values.
                //
                // The old RM24,500.00 result should no longer
                // be displayed.
                //
                // Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);