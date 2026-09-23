const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Add Untung Rugi Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_018 - Add Untung Rugi Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    hasilJualan: '1000000',
                    perbelanjaanKos: '100000',
                    expectedKeuntunganBersih: 900000,
                    expectedZakat: 22500
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
                // STEP 3 - VERIFY CART INITIAL STATE
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
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 7 - VERIFY UNTUNG RUGI METHOD
                // =================================================

                await expect(
                    zakatPage.untungRugiMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - ENTER HASIL JUALAN
                // =================================================

                await zakatPage.enterHasilJualan(
                    testData.hasilJualan
                );


                // =================================================
                // STEP 9 - ENTER PERBELANJAAN/KOS
                // =================================================

                await zakatPage.enterPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyHasilJualan(
                    testData.hasilJualan
                );

                await zakatPage.verifyPerbelanjaanKos(
                    testData.perbelanjaanKos
                );


                // =================================================
                // STEP 11 - VERIFY KEUNTUNGAN BERSIH
                // =================================================

                await zakatPage.verifyKeuntunganBersih(
                    testData.expectedKeuntunganBersih
                );


                // =================================================
                // STEP 12 - VERIFY ZAKAT RESULT
                // =================================================

                await zakatPage.verifyUntungRugiZakatAmount(
                    testData.expectedZakat
                );


                // =================================================
                // STEP 13 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN
                // =================================================

                await expect(
                    zakatPage.untungRugiBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY CALCULATOR MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 15 - ADD CALCULATED ZAKAT TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 16 - VERIFY SUCCESS MESSAGE
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY ZAKAT PERNIAGAAN CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY YEAR
                // =================================================

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY ITEM AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartAmount22500
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartAmount22500
                ).toHaveText(
                    'RM 22,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 20 - VERIFY CART TOTAL
                // =================================================

                await expect(
                    zakatPage.cartTotal22500
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartTotal22500
                ).toHaveText(
                    'RM 22,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 21 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    zakatPage.paymentButton22500
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.paymentButton22500
                ).toBeEnabled();


                // =================================================
                // STEP 22 - COMPLETE CART VERIFICATION
                // =================================================

                await zakatPage.verifyUntungRugiZakatCartItem();


                // =================================================
                // STEP 23 - VERIFY EMPTY CART STATE REMOVED
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Calculation:
                //
                // Hasil Jualan       = RM 1,000,000
                // Perbelanjaan/Kos   = RM   100,000
                // Keuntungan Bersih  = RM   900,000
                //
                // Zakat:
                // RM 900,000 × 2.5%
                // = RM 22,500.00
                //
                // After Masuk Troli:
                //
                // 1. Success message is displayed.
                //
                // 2. Zakat Perniagaan appears in Bakul Bayaran.
                //
                // 3. Tahun/Haul = 2026.
                //
                // 4. Item amount = RM 22,500.00.
                //
                // 5. Cart total = RM 22,500.00.
                //
                // 6. Bayar RM 22,500.00 is visible and enabled.
                //
                // 7. Empty-cart state is no longer displayed.
                //
                // =================================================
            }
        );
    }
);