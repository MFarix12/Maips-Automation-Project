const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Perbelanjaan Kos',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_012 - Enter Perbelanjaan Kos',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    hasilJualan: '1000000',
                    perbelanjaanKos: '100000'
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
                // STEP 8 - VERIFY HASIL JUALAN
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 9 - VERIFY PERBELANJAAN/KOS FIELD
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
                // STEP 10 - ENTER PERBELANJAAN/KOS
                // =================================================

                await zakatPage.enterPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 11 - VERIFY PERBELANJAAN/KOS
                // =================================================

                await zakatPage.verifyPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 12 - VERIFY HASIL JUALAN REMAINS UNCHANGED
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 13 - VERIFY RESULT SECTION
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
                // 1. Zakat Perniagaan calculator opens.
                //
                // 2. Hasil Jualan Perniagaan accepts 1000000.
                //
                // 3. Perbelanjaan/Kos field is available.
                //
                // 4. User can enter 100000.
                //
                // 5. Perbelanjaan/Kos retains 100000.
                //
                // 6. Hasil Jualan remains 1000000.
                //
                // 7. Calculation/result section remains displayed.
                //
                // 8. Calculator remains open.
                //
                // 9. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);