const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Untung Rugi Zakat 2.5 Percent',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_016 - Verify Untung Rugi Zakat 2.5 Percent',
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
                    expectedKeuntunganBersih: 900000,
                    zakatRate: 0.025,
                    expectedZakat: 22500
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

                await zakatPage.verifyKeuntunganBersih(
                    testData.expectedKeuntunganBersih
                );


                // =================================================
                // STEP 11 - CALCULATE EXPECTED ZAKAT IN TEST
                // =================================================

                const calculatedExpectedZakat =
                    testData.expectedKeuntunganBersih *
                    testData.zakatRate;

                expect(
                    calculatedExpectedZakat
                ).toBe(
                    testData.expectedZakat
                );


                // =================================================
                // STEP 12 - VERIFY 2.5% RESULT LABEL
                // =================================================

                await expect(
                    zakatPage.zakatResultLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.zakatResultLabel
                ).toContainText(
                    'Jumlah Zakat yang Perlu Dibayar',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - VERIFY ZAKAT AMOUNT
                // =================================================
                //
                // RM 900,000 × 2.5%
                // = RM 22,500.00
                //
                // =================================================

                await zakatPage.verifyUntungRugiZakatAmount(
                    testData.expectedZakat
                );


                // =================================================
                // STEP 14 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN
                // =================================================

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY MASUK TROLI AVAILABLE
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
                // STEP 16 - VERIFY CART STILL EMPTY
                // =================================================
                //
                // This test only verifies the calculation.
                // Masuk Troli is intentionally not clicked.
                //
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
                // Hasil Jualan:
                // RM 1,000,000
                //
                // Perbelanjaan/Kos:
                // RM 100,000
                //
                // Keuntungan Bersih:
                // RM 900,000
                //
                // Zakat:
                // RM 900,000 × 2.5%
                // = RM 22,500.00
                //
                // System must display RM 22,500.00 as the
                // calculated zakat amount.
                //
                // No item is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);