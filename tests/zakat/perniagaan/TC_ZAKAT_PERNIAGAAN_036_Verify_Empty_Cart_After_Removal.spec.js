const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Empty Cart After Removal',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_036 - Verify Empty Cart After Removal',
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
                // STEP 7 - VERIFY ITEM ADDED TO CART
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartAmount1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentButton1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentButton1000
                ).toBeEnabled();


                // =================================================
                // STEP 8 - REMOVE ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.removeZakatPerniagaanFromCart();


                // =================================================
                // STEP 9 - VERIFY OLD CART ITEM IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY EMPTY-CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyCartMessage
                ).toContainText(
                    'Rekod tidak ditemui',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 11 - VERIFY CART TOTAL RESET TO RM 0.00
                // =================================================

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


                // =================================================
                // STEP 12 - VERIFY EMPTY BAYAR BUTTON
                // =================================================

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY OLD PAYMENT BUTTON IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY OLD AMOUNT IS REMOVED
                // =================================================

                await expect(
                    zakatPage.cartAmount1000
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After removing Zakat Perniagaan:
                //
                // 1. Zakat Perniagaan cart item is hidden.
                //
                // 2. Empty-cart message is displayed.
                //
                // 3. Cart total returns to RM 0.00.
                //
                // 4. Empty "Bayar" button is displayed.
                //
                // 5. Empty "Bayar" button is disabled.
                //
                // 6. Previous "Bayar RM 1,000.00" button
                //    is no longer visible.
                //
                // 7. Previous RM 1,000.00 cart amount
                //    is no longer visible.
                //
                // =================================================
            }
        );
    }
);