const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Select Penyata Kewangan Method',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_019 - Select Penyata Kewangan Method',
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
                // STEP 6 - VERIFY UNTUNG RUGI IS INITIAL METHOD
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
                // STEP 7 - VERIFY PENYATA KEWANGAN OPTION
                // =================================================

                await expect(
                    zakatPage.penyataKewanganMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - SELECT PENYATA KEWANGAN METHOD
                // =================================================

                await zakatPage.selectPenyataKewanganMethod();


                // =================================================
                // STEP 9 - VERIFY PELABURAN STEP
                // =================================================

                await expect(
                    zakatPage.pelaburanHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY PELABURAN FIELD
                // =================================================

                await expect(
                    zakatPage.pelaburanField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.pelaburanField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY JUMLAH PELABURAN
                // =================================================

                await expect(
                    zakatPage.jumlahPelaburanLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY SETERUSNYA BUTTON
                // =================================================

                await expect(
                    zakatPage.penyataNextButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.penyataNextButton
                ).toBeEnabled();


                // =================================================
                // STEP 13 - COMPLETE METHOD VERIFICATION
                // =================================================

                await zakatPage.verifyPenyataKewanganMethod();


                // =================================================
                // STEP 14 - VERIFY CART REMAINS EMPTY
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
                // 1. Zakat Perniagaan calculator opens.
                //
                // 2. Untung Rugi is initially displayed.
                //
                // 3. User can select:
                //
                //    Kaedah Pengiraan Berdasarkan Penyata
                //    Kewangan/Kunci Kira-Kira
                //
                // 4. Pelaburan step is displayed.
                //
                // 5. Pelaburan input is visible and enabled.
                //
                // 6. Jumlah Pelaburan is displayed.
                //
                // 7. Seterusnya button is available.
                //
                // 8. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);