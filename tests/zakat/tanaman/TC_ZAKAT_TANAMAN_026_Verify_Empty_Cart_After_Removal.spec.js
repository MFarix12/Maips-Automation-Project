const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Verify Empty Cart After Removal',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_026 - Verify Empty Cart After Removal',
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

                await zakatPage
                    .openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY ZAKAT TANAMAN PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - VERIFY INITIAL EMPTY CART
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


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
                // STEP 9 - ENTER CALCULATION DATA
                // =================================================

                await zakatPage
                    .enterCropWeight(
                        testData.weight
                    );


                await zakatPage
                    .enterCropSales(
                        testData.sales
                    );


                await zakatPage
                    .enterIncentive(
                        testData.incentive
                    );


                await zakatPage
                    .enterProductionCost(
                        testData.productionCost
                    );


                // =================================================
                // STEP 10 - VERIFY INPUT DATA
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
                // STEP 11 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage
                    .verifyAboveNisabState();


                // =================================================
                // STEP 12 - VERIFY CALCULATION
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
                // STEP 13 - ADD TO CART
                // =================================================

                await zakatPage
                    .addCalculatedZakatToCart();


                // =================================================
                // STEP 14 - VERIFY ITEM WAS ADDED
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
                // STEP 15 - VERIFY CART HAS MONETARY VALUE
                // =================================================

                const cartBeforeRemoval =
                    await zakatPage
                        .getCartContent();


                expect(
                    cartBeforeRemoval
                ).toContain(
                    'Zakat Tanaman'
                );


                const rmValuesBeforeRemoval =
                    zakatPage.extractRMValues(
                        cartBeforeRemoval
                    );


                expect(
                    rmValuesBeforeRemoval.length
                ).toBeGreaterThan(
                    0
                );


                const numericValuesBeforeRemoval =
                    rmValuesBeforeRemoval.map(
                        value =>
                            zakatPage.convertRMToNumber(
                                value
                            )
                    );


                expect(
                    numericValuesBeforeRemoval.some(
                        value =>
                            Number.isFinite(value) &&
                            value > 0
                    )
                ).toBeTruthy();


                // =================================================
                // STEP 16 - REMOVE ZAKAT TANAMAN
                // =================================================

                await zakatPage
                    .removeZakatTanamanFromCart();


                // =================================================
                // STEP 17 - WAIT FOR CART TO RETURN TO EMPTY STATE
                // =================================================

                await expect(
                    zakatPage.zakatTanamanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


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
                // STEP 18 - VERIFY ZAKAT TANAMAN NOT VISIBLE
                // =================================================

                await expect(
                    zakatPage.zakatTanamanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY EMPTY MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY TOTAL RESET TO RM 0.00
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
                // STEP 21 - CAPTURE FINAL CART STATE
                // =================================================

                const cartAfterRemoval =
                    await zakatPage
                        .getCartContent();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC026 - EMPTY CART AFTER REMOVAL'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    cartAfterRemoval
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 22 - VERIFY ITEM NOT IN VISIBLE CART TEXT
                // =================================================

                expect(
                    cartAfterRemoval
                ).not.toContain(
                    'Zakat Tanaman'
                );


                // =================================================
                // STEP 23 - VERIFY ZERO TOTAL IN CART TEXT
                // =================================================

                expect(
                    cartAfterRemoval
                ).toContain(
                    'RM 0.00'
                );


                // =================================================
                // STEP 24 - EXTRACT FINAL RM VALUES
                // =================================================

                const finalRMValues =
                    zakatPage.extractRMValues(
                        cartAfterRemoval
                    );


                console.log(
                    'Final RM Values:',
                    finalRMValues
                );


                // =================================================
                // STEP 25 - VERIFY NO POSITIVE CART VALUE REMAINS
                // =================================================

                const finalNumericValues =
                    finalRMValues.map(
                        value =>
                            zakatPage.convertRMToNumber(
                                value
                            )
                    );


                const positiveValuesRemaining =
                    finalNumericValues.filter(
                        value =>
                            Number.isFinite(value) &&
                            value > 0
                    );


                expect(
                    positiveValuesRemaining.length
                ).toBe(
                    0
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // BEFORE REMOVAL:
                //
                // - Zakat Tanaman is added to Bakul Bayaran.
                // - Cart contains a positive monetary value.
                //
                // AFTER REMOVAL:
                //
                // - Zakat Tanaman is no longer visible.
                // - Empty-cart message is displayed.
                // - Total returns to RM 0.00.
                // - No positive monetary value remains.
                //
                // The test verifies visible UI state instead of
                // assuming Vaadin completely removes old DOM nodes.
                //
                // =================================================
            }
        );
    }
);