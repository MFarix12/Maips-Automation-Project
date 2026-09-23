const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Untung Rugi Above Nisab',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_015 - Verify Untung Rugi Above Nisab',
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
                // STEP 10 - VERIFY KEUNTUNGAN BERSIH
                // =================================================
                //
                // RM 1,000,000
                // - RM 100,000
                // = RM 900,000
                //
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.expectedKeuntunganBersih
                );


                // =================================================
                // STEP 11 - VERIFY NISAB INFORMATION
                // =================================================

                await expect(
                    zakatPage.nisabLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY BELOW NISAB MESSAGE NOT SHOWN
                // =================================================

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY ZAKAT RESULT SECTION
                // =================================================

                await expect(
                    zakatPage.untungRugiAboveNisabResult
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

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 15 - VERIFY ABOVE NISAB STATE
                // =================================================

                await zakatPage.verifyUntungRugiAboveNisab();


                // =================================================
                // STEP 16 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY CART STILL EMPTY
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
                // Hasil Jualan Perniagaan:
                // RM 1,000,000
                //
                // Perbelanjaan/Kos:
                // RM 100,000
                //
                // Keuntungan Bersih:
                // RM 900,000
                //
                // 1. Keuntungan Bersih is calculated correctly.
                //
                // 2. The below-Nisab warning is not displayed.
                //
                // 3. The zakat calculation/result section is
                //    displayed.
                //
                // 4. Calculator Masuk Troli is available.
                //
                // 5. Nothing is added to Bakul Bayaran because
                //    Masuk Troli is not clicked in this test.
                //
                // =================================================
            }
        );
    }
);