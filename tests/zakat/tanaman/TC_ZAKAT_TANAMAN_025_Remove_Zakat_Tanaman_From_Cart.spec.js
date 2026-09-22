const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Remove From Cart',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_025 - Remove Zakat Tanaman From Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    weight: '1000',

                    sales: '50000',

                    incentive: '1000',

                    productionCost: '5000'
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TANAMAN
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - VERIFY CART INITIALLY EMPTY
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
                // STEP 5 - OPEN CALCULATOR
                // =================================================

                await zakatPage
                    .openCalculator();


                await zakatPage
                    .verifyCalculatorOpened();


                // =================================================
                // STEP 6 - VERIFY YEAR
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 7 - VERIFY NISAB
                // =================================================

                await zakatPage
                    .verify2026Nisab();


                // =================================================
                // STEP 8 - SELECT TOLAK KOS
                // =================================================

                await zakatPage
                    .selectTolakKos();


                await zakatPage
                    .verifyTolakKosSelected();


                // =================================================
                // STEP 9 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage
                    .enterCropWeight(
                        testData.weight
                    );


                // =================================================
                // STEP 10 - ENTER CROP SALES
                // =================================================

                await zakatPage
                    .enterCropSales(
                        testData.sales
                    );


                // =================================================
                // STEP 11 - ENTER INCENTIVE
                // =================================================

                await zakatPage
                    .enterIncentive(
                        testData.incentive
                    );


                // =================================================
                // STEP 12 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage
                    .enterProductionCost(
                        testData.productionCost
                    );


                // =================================================
                // STEP 13 - VERIFY ENTERED INFORMATION
                // =================================================

                await zakatPage
                    .verifyTolakKosInformation({

                        weight:
                            testData.weight,

                        sales:
                            testData.sales,

                        incentive:
                            testData.incentive,

                        productionCost:
                            testData.productionCost
                    });


                // =================================================
                // STEP 14 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage
                    .verifyAboveNisabState();


                // =================================================
                // STEP 15 - VERIFY CALCULATION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.netBalanceLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - CAPTURE CALCULATION
                // =================================================

                const calculationText =
                    await zakatPage
                        .calculatorContainer
                        .innerText();


                expect(
                    calculationText
                ).toBeTruthy();


                const calculatorRMValues =
                    zakatPage.extractRMValues(
                        calculationText
                    );


                expect(
                    calculatorRMValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 17 - ADD TO CART
                // =================================================

                await zakatPage
                    .addCalculatedZakatToCart();


                // =================================================
                // STEP 18 - VERIFY ITEM ADDED
                // =================================================

                await expect(
                    zakatPage.zakatTanamanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - CAPTURE CART BEFORE DELETE
                // =================================================

                const cartBeforeDelete =
                    await zakatPage
                        .getCartContent();


                expect(
                    cartBeforeDelete
                ).toContain(
                    'Zakat Tanaman'
                );


                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC025 - CART BEFORE DELETE'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    cartBeforeDelete
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 20 - VERIFY DELETE BUTTON
                // =================================================

                await expect(
                    zakatPage.cartDeleteButton.first()
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 21 - REMOVE ZAKAT TANAMAN
                // =================================================

                await zakatPage
                    .removeZakatTanamanFromCart();


                // =================================================
                // STEP 22 - WAIT FOR CART UPDATE
                // =================================================

                await expect(
                    zakatPage.zakatTanamanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 24 - VERIFY TOTAL RESET TO ZERO
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // STEP 25 - CAPTURE CART AFTER DELETE
                // =================================================

                const cartAfterDelete =
                    await zakatPage
                        .getCartContent();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC025 - CART AFTER DELETE'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    cartAfterDelete
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 26 - VERIFY CART NO LONGER SHOWS ITEM
                // =================================================

                expect(
                    cartAfterDelete
                ).not.toContain(
                    'Zakat Tanaman'
                );


                // =================================================
                // STEP 27 - VERIFY ZERO TOTAL
                // =================================================

                expect(
                    cartAfterDelete
                ).toContain(
                    'RM 0.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. A valid Zakat Tanaman calculation is created.
                //
                // 2. User adds Zakat Tanaman into Bakul Bayaran.
                //
                // 3. Zakat Tanaman appears in the cart.
                //
                // 4. User clicks the delete/remove button.
                //
                // 5. Zakat Tanaman is removed from the visible cart.
                //
                // 6. Empty-cart message is displayed.
                //
                // 7. Cart total returns to RM 0.00.
                //
                // =================================================
            }
        );
    }
);