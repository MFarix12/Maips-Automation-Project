const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Remove Zakat Perniagaan From Cart',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_035 - Remove Zakat Perniagaan From Cart',
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
                // STEP 7 - VERIFY ZAKAT ITEM ADDED
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


                // =================================================
                // STEP 8 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentButton1000
                ).toBeEnabled();


                // =================================================
                // STEP 9 - VERIFY DELETE BUTTON
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
                // STEP 10 - REMOVE ZAKAT FROM CART
                // =================================================

                await zakatPage.removeZakatPerniagaanFromCart();


                // =================================================
                // STEP 11 - VERIFY ZAKAT ITEM REMOVED
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY OLD PAYMENT BUTTON REMOVED
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Zakat Perniagaan can be added to the cart.
                //
                // 2. The cart displays:
                //    - Zakat Perniagaan
                //    - Tahun/Haul 2026
                //    - RM 1,000.00
                //    - Bayar RM 1,000.00
                //
                // 3. Delete button is available and enabled.
                //
                // 4. User can click the delete button.
                //
                // 5. Zakat Perniagaan item is removed.
                //
                // 6. Previous Bayar RM 1,000.00 button
                //    is no longer visible.
                //
                // Full empty-cart validation is covered
                // separately by TC036.
                //
                // =================================================
            }
        );
    }
);