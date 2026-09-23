const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Untung Rugi Default Method',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_010 - Verify Untung Rugi Default Method',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026'
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
                // STEP 5 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY UNTUNG RUGI METHOD AVAILABLE
                // =================================================

                await expect(
                    zakatPage.untungRugiMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - VERIFY PENYATA KEWANGAN METHOD AVAILABLE
                // =================================================

                await expect(
                    zakatPage.penyataKewanganMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY HASIL JUALAN FIELD
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
                // STEP 10 - VERIFY FORMULA
                // =================================================

                await expect(
                    zakatPage.untungRugiFormula
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY NISAB INFORMATION
                // =================================================

                await expect(
                    zakatPage.nisabLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY RESULT TABLE
                // =================================================

                await expect(
                    zakatPage.hasilJualanResultLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.perbelanjaanKosResultLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.keuntunganBersihLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY ZAKAT RESULT SECTION
                // =================================================

                await expect(
                    zakatPage.zakatResultLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY CALCULATOR MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY COMPLETE DEFAULT METHOD
                // =================================================

                await zakatPage
                    .verifyUntungRugiDefaultMethod();


                // =================================================
                // STEP 16 - VERIFY CART STILL EMPTY
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
                // 2. Tahun/Haul is 2026.
                //
                // 3. Kaedah Pengiraan Untung Rugi is available.
                //
                // 4. Penyata Kewangan/Kunci Kira-Kira method
                //    is also available.
                //
                // 5. Hasil Jualan Perniagaan field is displayed.
                //
                // 6. Perbelanjaan/Kos field is displayed.
                //
                // 7. Both input fields are enabled.
                //
                // 8. Keuntungan Bersih calculation information
                //    is displayed.
                //
                // 9. Nisab information is displayed.
                //
                // 10. Result section is displayed.
                //
                // 11. Calculator Masuk Troli is displayed.
                //
                // 12. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);