const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Untung Rugi Below Nisab',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_014 - Verify Untung Rugi Below Nisab',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    hasilJualan: '40000',
                    perbelanjaanKos: '10000',
                    expectedKeuntunganBersih: 30000
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
                // RM 40,000 - RM 10,000 = RM 30,000
                //
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.expectedKeuntunganBersih
                );


                // =================================================
                // STEP 11 - VERIFY BELOW NISAB MESSAGE
                // =================================================

                await zakatPage.verifyUntungRugiBelowNisab();


                // =================================================
                // STEP 12 - VERIFY MESSAGE CONTENT
                // =================================================

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toContainText(
                    'Jumlah keuntungan bersih anda tidak mencapai amaun nisab tahun 2026',
                    {
                        timeout: 15000
                    }
                );

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toContainText(
                    'Anda tidak dikenakan zakat',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - VERIFY ZAKAT RESULT SECTION
                // =================================================

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
                // Hasil Jualan:
                // RM 40,000
                //
                // Perbelanjaan/Kos:
                // RM 10,000
                //
                // Keuntungan Bersih:
                // RM 30,000
                //
                // The net profit is below the displayed 2026
                // Nisab threshold.
                //
                // System displays:
                //
                // "Jumlah keuntungan bersih anda tidak mencapai
                // amaun nisab tahun 2026. Anda tidak dikenakan
                // zakat."
                //
                // No item is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);