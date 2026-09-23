const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Cart Details',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_034 - Verify Cart Details',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    manualAmount: '1000'
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
                // STEP 3 - VERIFY INITIAL EMPTY CART
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
                    zakatPage.emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 4 - SELECT TAHUN / HAUL
                // =================================================

                await zakatPage.selectMainHaulYear(
                    testData.year
                );

                await zakatPage.verifyMainHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 5 - ENTER MANUAL ZAKAT AMOUNT
                // =================================================

                await zakatPage.enterManualAmount(
                    testData.manualAmount
                );

                await zakatPage.verifyManualAmount(
                    testData.manualAmount
                );


                // =================================================
                // STEP 6 - ADD ZAKAT TO CART
                // =================================================

                await zakatPage.addManualZakatToCart();


                // =================================================
                // STEP 7 - VERIFY CART HEADING
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentCartHeading
                ).toHaveText(
                    'Bakul Bayaran',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 8 - VERIFY ZAKAT TYPE
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toHaveText(
                    'Zakat Perniagaan',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 9 - VERIFY TAHUN / HAUL
                // =================================================

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartYear2026
                ).toHaveText(
                    testData.year,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 10 - VERIFY ITEM AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartAmount1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartAmount1000
                ).toHaveText(
                    'RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 11 - VERIFY CART TOTAL
                // =================================================

                await expect(
                    zakatPage.cartTotal1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartTotal1000
                ).toHaveText(
                    'RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 12 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentButton1000
                ).toBeEnabled();

                await expect(
                    zakatPage.paymentButton1000
                ).toHaveText(
                    'Bayar RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - VERIFY EMPTY CART MESSAGE IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY EMPTY PAYMENT BUTTON IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY DELETE BUTTON
                // =================================================

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After adding RM 1,000.00 Zakat Perniagaan:
                //
                // Bakul Bayaran should display:
                //
                // Zakat Type:
                // Zakat Perniagaan
                //
                // Tahun / Haul:
                // 2026
                //
                // Item Amount:
                // RM 1,000.00
                //
                // Total:
                // RM 1,000.00
                //
                // Payment Button:
                // Bayar RM 1,000.00
                //
                // The payment button should be enabled.
                //
                // The empty-cart message should no longer
                // be visible.
                //
                // The delete button should be available.
                //
                // =================================================
            }
        );
    }
);