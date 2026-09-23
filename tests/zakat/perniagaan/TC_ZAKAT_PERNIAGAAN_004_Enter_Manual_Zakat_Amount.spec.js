const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Manual Zakat Amount',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_004 - Enter Manual Zakat Amount',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    amount: '1000.00'
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
                // STEP 3 - VERIFY YEAR / HAUL
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 4 - VERIFY DEFAULT AMOUNT
                // =================================================

                await zakatPage.verifyManualAmount(
                    '0.00'
                );


                // =================================================
                // STEP 5 - ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage.enterManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 6 - VERIFY ENTERED AMOUNT
                // =================================================

                await zakatPage.verifyManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 7 - VERIFY FIELD ENABLED
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY YEAR REMAINS UNCHANGED
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 9 - VERIFY MASUK TROLI AVAILABLE
                // =================================================

                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY NOTHING ADDED TO CART YET
                // =================================================

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
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - CLEAR MANUAL AMOUNT
                // =================================================

                await zakatPage.clearManualAmount();


                // =================================================
                // STEP 12 - VERIFY FIELD CLEARED
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toHaveValue(
                    '',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - RE-ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage.enterManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 14 - VERIFY FINAL VALUE
                // =================================================

                await zakatPage.verifyManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 15 - VERIFY CART STILL EMPTY
                // =================================================

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


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Default Jumlah Bayaran is 0.00.
                //
                // 2. User can enter 1000.00 manually.
                //
                // 3. Field displays 1000.00.
                //
                // 4. Tahun/Haul remains 2026.
                //
                // 5. Masuk Troli is available.
                //
                // 6. Entering an amount alone does not add an item
                //    to Bakul Bayaran.
                //
                // 7. User can clear the amount.
                //
                // 8. User can re-enter 1000.00.
                //
                // 9. Cart remains empty until Masuk Troli is
                //    explicitly clicked.
                //
                // =================================================
            }
        );
    }
);