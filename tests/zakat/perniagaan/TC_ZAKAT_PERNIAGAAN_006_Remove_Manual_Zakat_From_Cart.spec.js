const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Remove Manual Zakat From Cart',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_006 - Remove Manual Zakat From Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    amount: '1000.00',
                    formattedAmount: 'RM 1,000.00'
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
                // STEP 3 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 4 - VERIFY INITIAL EMPTY CART
                // =================================================

                await zakatPage.verifyEmptyCart();


                // =================================================
                // STEP 5 - ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage.enterManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 6 - VERIFY MANUAL AMOUNT
                // =================================================

                await zakatPage.verifyManualAmount(
                    testData.amount
                );


                // =================================================
                // STEP 7 - ADD TO CART
                // =================================================

                await zakatPage.addManualZakatToCart();


                // =================================================
                // STEP 8 - VERIFY ITEM ADDED
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY ITEM AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartAmount1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartAmount1000
                ).toHaveText(
                    testData.formattedAmount,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 10 - VERIFY CART TOTAL
                // =================================================

                await expect(
                    zakatPage.cartTotal1000
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartTotal1000
                ).toHaveText(
                    testData.formattedAmount,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 11 - VERIFY PAYMENT BUTTON
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
                // STEP 12 - REMOVE ITEM FROM CART
                // =================================================

                await zakatPage.removeZakatPerniagaanFromCart();


                // =================================================
                // STEP 13 - VERIFY ITEM IS NO LONGER VISIBLE
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY CART TOTAL RETURNS TO RM 0.00
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
                // STEP 16 - VERIFY OLD RM 1,000 ITEM AMOUNT HIDDEN
                // =================================================

                await expect(
                    zakatPage.cartAmount1000
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY OLD PAYMENT BUTTON HIDDEN
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY EMPTY BAYAR BUTTON
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
                // STEP 19 - VERIFY MAIN MASUK TROLI AVAILABLE
                // =================================================

                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. RM 1,000.00 Zakat Perniagaan can be added.
                //
                // 2. Zakat Perniagaan appears in Bakul Bayaran.
                //
                // 3. Cart total becomes RM 1,000.00.
                //
                // 4. User can remove the item.
                //
                // 5. Zakat Perniagaan item disappears.
                //
                // 6. Empty-cart message is displayed again.
                //
                // 7. Cart total returns to RM 0.00.
                //
                // 8. Bayar RM 1,000.00 disappears.
                //
                // 9. Empty Bayar button is disabled.
                //
                // 10. Masuk Troli remains available.
                //
                // =================================================
            }
        );
    }
);