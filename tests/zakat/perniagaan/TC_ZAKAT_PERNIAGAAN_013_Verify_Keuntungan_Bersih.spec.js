const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Keuntungan Bersih',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_013 - Verify Keuntungan Bersih',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    hasilJualan: '1000000',
                    perbelanjaanKos: '100000',
                    expectedKeuntunganBersih: 900000
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
                // STEP 4 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR YEAR
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
                // STEP 8 - ENTER PERBELANJAAN/KOS
                // =================================================

                await zakatPage.enterPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 9 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );

                await zakatPage.verifyPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 10 - VERIFY FORMULA DISPLAYED
                // =================================================

                await expect(
                    zakatPage.untungRugiFormula
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY KEUNTUNGAN BERSIH LABEL
                // =================================================

                await expect(
                    zakatPage.keuntunganBersihLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY KEUNTUNGAN BERSIH RESULT
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.expectedKeuntunganBersih
                );


                // =================================================
                // STEP 13 - VERIFY EXPECTED AMOUNT DIRECTLY
                // =================================================

                await expect(
                    zakatPage.keuntunganBersihAmount
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY NOTHING ADDED TO CART
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
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


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Formula:
                //
                // Hasil Jualan Perniagaan
                // RM 1,000,000
                //
                // - Perbelanjaan/Kos
                // RM 100,000
                //
                // = Keuntungan Bersih
                // RM 900,000.00
                //
                // The calculated Keuntungan Bersih must be
                // displayed correctly.
                //
                // Nothing should be added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);