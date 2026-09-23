const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Default State',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_002 - Verify Default State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    defaultYear: '2026',
                    defaultAmount: '0.00'
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
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatPerniagaanPage();


                // =================================================
                // STEP 4 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.defaultYear
                );


                // =================================================
                // STEP 5 - VERIFY JUMLAH BAYARAN
                // =================================================

                await zakatPage.verifyManualAmount(
                    testData.defaultAmount
                );


                // =================================================
                // STEP 6 - VERIFY JUMLAH BAYARAN ENABLED
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                // =================================================
                // STEP 7 - VERIFY BUKA KALKULATOR
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY EMPTY CART
                // =================================================

                await zakatPage.verifyEmptyCart();


                // =================================================
                // STEP 10 - VERIFY CART HEADING
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY NO ZAKAT PERNIAGAAN ITEM
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CART TOTAL
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - VERIFY BAYAR DISABLED
                // =================================================

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Zakat Perniagaan opens successfully.
                //
                // 2. Default Tahun/Haul = 2026.
                //
                // 3. Jumlah Bayaran = 0.00.
                //
                // 4. Jumlah Bayaran is enabled.
                //
                // 5. Buka Kalkulator is enabled.
                //
                // 6. Masuk Troli is displayed.
                //
                // 7. Bakul Bayaran is empty.
                //
                // 8. Empty-cart message is displayed.
                //
                // 9. Total = RM0.00.
                //
                // 10. No Zakat Perniagaan item exists.
                //
                // 11. Bayar button is disabled.
                //
                // =================================================
            }
        );
    }
);