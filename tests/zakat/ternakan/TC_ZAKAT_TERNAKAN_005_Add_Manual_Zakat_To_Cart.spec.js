const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Add Manual Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_005 - Add Manual Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    amount: '1000'
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 4 - VERIFY YEAR
                // =================================================

                await zakatPage
                    .verifySelectedHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 5 - VERIFY INITIAL EMPTY CART
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
            });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // STEP 6 - ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage
                    .enterManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 7 - VERIFY MANUAL AMOUNT
                // =================================================

                await zakatPage
                    .verifyManualZakatAmount(
                        testData.amount
                    );


                // =================================================
                // STEP 8 - VERIFY MASUK TROLI
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
                // STEP 9 - ADD MANUAL PAYMENT TO CART
                // =================================================

                await zakatPage
                    .addManualZakatToCart();


                // =================================================
                // STEP 10 - VERIFY ZAKAT TERNAKAN ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY EMPTY MESSAGE DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CART DETAILS
                // =================================================

                const cartResult =
                    await zakatPage
                        .verifyManualZakatAddedToCart();


                expect(
                    cartResult
                ).toBeTruthy();


                expect(
                    cartResult.cartText
                ).toContain(
                    'Zakat Ternakan'
                );


                // =================================================
                // STEP 13 - VERIFY RM VALUES
                // =================================================

                expect(
                    cartResult.rmValues.length
                ).toBeGreaterThan(
                    0
                );


                console.log(
                    '\nCart RM Values:',
                    cartResult.rmValues
                );


                // =================================================
                // STEP 14 - VERIFY POSITIVE AMOUNT
                // =================================================

                const positiveValues =
                    cartResult.numericValues.filter(
                        value =>
                            Number.isFinite(value) &&
                            value > 0
                    );


                expect(
                    positiveValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 15 - VERIFY ENTERED RM1000 IS REPRESENTED
                //
                // We check the monetary values extracted from the
                // cart instead of depending on a brittle Vaadin
                // grid-cell position.
                // =================================================

                expect(
                    cartResult.numericValues
                ).toContain(
                    Number(testData.amount)
                );


                // =================================================
                // PRINT RESULT
                // =================================================

                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC005 - MANUAL ZAKAT CART RESULT'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    'Entered Amount:',
                    testData.amount
                );

                console.log(
                    'Cart RM Values:',
                    cartResult.rmValues
                );

                console.log(
                    'Cart Numeric Values:',
                    cartResult.numericValues
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Tahun/Haul = 2026.
                //
                // - User enters RM1000 in Jumlah Bayaran.
                //
                // - User clicks Masuk Troli.
                //
                // - Zakat Ternakan is added to Bakul Bayaran.
                //
                // - Empty-cart message disappears.
                //
                // - Cart contains a positive monetary value.
                //
                // - The manually entered RM1000 is represented
                //   in the cart.
                //
                // =================================================
            }
        );
    }
);