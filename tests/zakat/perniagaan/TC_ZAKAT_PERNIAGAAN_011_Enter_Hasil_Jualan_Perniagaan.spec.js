const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Hasil Jualan Perniagaan',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_011 - Enter Hasil Jualan Perniagaan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    hasilJualan: '1000000'
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
                // STEP 7 - VERIFY HASIL JUALAN FIELD
                // =================================================

                await expect(
                    zakatPage.hasilJualanField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.hasilJualanField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - ENTER HASIL JUALAN
                // =================================================

                await zakatPage.enterHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 9 - VERIFY ENTERED VALUE
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 10 - VERIFY PERBELANJAAN FIELD AVAILABLE
                // =================================================

                await expect(
                    zakatPage.perbelanjaanKosField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.perbelanjaanKosField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY RESULT SECTION STILL DISPLAYED
                // =================================================

                await expect(
                    zakatPage.keuntunganBersihLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.zakatResultLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CART REMAINS EMPTY
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
                // 1. Zakat Perniagaan calculator opens.
                //
                // 2. Kaedah Pengiraan Untung Rugi is displayed.
                //
                // 3. Hasil Jualan Perniagaan field is enabled.
                //
                // 4. User can enter 1,000,000.
                //
                // 5. Hasil Jualan field retains 1000000.
                //
                // 6. Perbelanjaan/Kos remains available.
                //
                // 7. Result section remains displayed.
                //
                // 8. No item is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);