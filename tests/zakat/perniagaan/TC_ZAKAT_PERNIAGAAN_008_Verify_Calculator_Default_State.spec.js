const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Calculator Default State',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_008 - Verify Calculator Default State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    defaultYear: '2026'
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
                // STEP 4 - VERIFY CALCULATOR TITLE
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorTitle
                ).toHaveText(
                    'Kalkulator Zakat Perniagaan'
                );


                // =================================================
                // STEP 5 - VERIFY CALCULATOR YEAR
                // =================================================

                await expect(
                    zakatPage.calculatorHaulComboBox
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorHaulInput
                ).toHaveValue(
                    testData.defaultYear,
                    {
                        timeout: 15000
                    }
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
                // STEP 7 - VERIFY PENYATA KEWANGAN METHOD
                // =================================================

                await expect(
                    zakatPage.penyataKewanganMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY DEFAULT METHOD CONTENT
                // =================================================
                //
                // Untung Rugi is the initial method because its
                // calculation fields are immediately displayed.
                //
                // =================================================

                await expect(
                    zakatPage.hasilJualanField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.perbelanjaanKosField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY FIELDS ENABLED
                // =================================================

                await expect(
                    zakatPage.hasilJualanField
                ).toBeEnabled();


                await expect(
                    zakatPage.perbelanjaanKosField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY KEUNTUNGAN BERSIH
                // =================================================

                await expect(
                    zakatPage.keuntunganBersihLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY COMPLETE DEFAULT STATE
                // =================================================

                await zakatPage
                    .verifyCalculatorDefaultState();


                // =================================================
                // STEP 12 - VERIFY MAIN CART STILL EMPTY
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
                // 1. Kalkulator Zakat Perniagaan opens.
                //
                // 2. Default Tahun/Haul is 2026.
                //
                // 3. Kaedah Pengiraan Untung Rugi is available.
                //
                // 4. Kaedah Pengiraan Berdasarkan Penyata
                //    Kewangan/Kunci Kira-Kira is available.
                //
                // 5. Untung Rugi is the initial calculation method.
                //
                // 6. Hasil Jualan Perniagaan is displayed.
                //
                // 7. Perbelanjaan/Kos is displayed.
                //
                // 8. Both input fields are enabled.
                //
                // 9. Keuntungan Bersih section is displayed.
                //
                // 10. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);