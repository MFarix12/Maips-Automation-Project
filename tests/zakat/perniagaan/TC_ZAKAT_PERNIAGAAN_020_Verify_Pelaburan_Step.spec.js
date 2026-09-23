const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Pelaburan Step',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_020 - Verify Pelaburan Step',
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
                // STEP 5 - VERIFY CALCULATOR YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - SELECT PENYATA KEWANGAN METHOD
                // =================================================

                await zakatPage.selectPenyataKewanganMethod();


                // =================================================
                // STEP 7 - VERIFY PELABURAN HEADING
                // =================================================

                await expect(
                    zakatPage.pelaburanHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY PELABURAN FIELD
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
                // STEP 9 - VERIFY PELABURAN FIELD DEFAULT VALUE
                // =================================================

                await expect(
                    zakatPage.pelaburanField
                ).toHaveValue(
                    '',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 10 - VERIFY JUMLAH PELABURAN LABEL
                // =================================================

                await expect(
                    zakatPage.jumlahPelaburanLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY DEFAULT JUMLAH PELABURAN
                // =================================================

                await expect(
                    zakatPage.jumlahPelaburanAmount
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.jumlahPelaburanAmount
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 12 - VERIFY SETERUSNYA
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
                // STEP 13 - VERIFY COMPLETE DEFAULT STATE
                // =================================================

                await zakatPage.verifyPelaburanDefaultState();


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
                // 1. Penyata Kewangan method opens successfully.
                //
                // 2. Step 1 - Pelaburan is displayed.
                //
                // 3. Pelaburan input is visible and enabled.
                //
                // 4. Pelaburan input is initially empty.
                //
                // 5. Jumlah Pelaburan is displayed.
                //
                // 6. Initial Jumlah Pelaburan is RM 0.00.
                //
                // 7. Seterusnya is available.
                //
                // 8. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);