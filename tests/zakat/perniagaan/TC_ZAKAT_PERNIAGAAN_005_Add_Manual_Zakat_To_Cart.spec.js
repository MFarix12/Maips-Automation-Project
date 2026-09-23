const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Add Manual Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_005 - Add Manual Zakat To Cart',
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
                // STEP 5 - ENTER MANUAL ZAKAT AMOUNT
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
                // STEP 7 - VERIFY MASUK TROLI ENABLED
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
                // STEP 8 - ADD TO CART
                // =================================================

                await zakatPage.addManualZakatToCart();


                // =================================================
                // STEP 9 - VERIFY SUCCESS MESSAGE
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY ZAKAT PERNIAGAAN CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY CART YEAR
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
                // STEP 12 - VERIFY ITEM AMOUNT
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
                // STEP 13 - VERIFY CART DETAILS
                // =================================================

                await zakatPage.verifyManualZakatCartItem();


                // =================================================
                // STEP 14 - VERIFY EMPTY MESSAGE DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY CART TOTAL
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
                // STEP 16 - VERIFY PAYMENT BUTTON
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
                // STEP 17 - VERIFY PAYMENT TOTAL
                // =================================================

                await expect(
                    zakatPage.paymentButton1000
                ).toHaveText(
                    'Bayar RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 18 - VERIFY MAIN ADD BUTTON REMAINS AVAILABLE
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
                // 1. User enters 1000.00.
                //
                // 2. User clicks Masuk Troli.
                //
                // 3. Success notification is displayed.
                //
                // 4. Zakat Perniagaan appears in Bakul Bayaran.
                //
                // 5. Cart year is 2026.
                //
                // 6. Item amount is RM 1,000.00.
                //
                // 7. Cart total is RM 1,000.00.
                //
                // 8. Bayar RM 1,000.00 is enabled.
                //
                // 9. Empty-cart message disappears.
                //
                // 10. Main Masuk Troli remains enabled after
                //     the item is added.
                //
                // =================================================
            }
        );
    }
);