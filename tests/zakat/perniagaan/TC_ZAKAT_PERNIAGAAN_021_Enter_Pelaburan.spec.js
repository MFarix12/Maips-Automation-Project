const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Enter Pelaburan',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_021 - Enter Pelaburan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    pelaburan: '1000000',
                    expectedJumlahPelaburan: 1000000
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
                // STEP 6 - SELECT PENYATA KEWANGAN METHOD
                // =================================================

                await zakatPage.selectPenyataKewanganMethod();


                // =================================================
                // STEP 7 - VERIFY PELABURAN STEP
                // =================================================

                await expect(
                    zakatPage.pelaburanHeading
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.pelaburanField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - ENTER PELABURAN
                // =================================================

                await zakatPage.enterPelaburan(
                    testData.pelaburan
                );


                // =================================================
                // STEP 9 - VERIFY PELABURAN INPUT
                // =================================================

                await zakatPage.verifyPelaburan(
                    testData.pelaburan
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
                // STEP 11 - VERIFY JUMLAH PELABURAN
                // =================================================
                //
                // Pelaburan:
                // RM 1,000,000
                //
                // Expected Jumlah Pelaburan:
                // RM 1,000,000.00
                //
                // =================================================

                await zakatPage.verifyJumlahPelaburan(
                    testData.expectedJumlahPelaburan
                );


                // =================================================
                // STEP 12 - VERIFY SETERUSNYA AVAILABLE
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
                // STEP 13 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


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
                // 1. Penyata Kewangan method opens.
                //
                // 2. Pelaburan step is displayed.
                //
                // 3. User enters:
                //    RM 1,000,000
                //
                // 4. Pelaburan field retains 1000000.
                //
                // 5. Jumlah Pelaburan updates to:
                //    RM 1,000,000.00
                //
                // 6. Seterusnya remains available.
                //
                // 7. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);