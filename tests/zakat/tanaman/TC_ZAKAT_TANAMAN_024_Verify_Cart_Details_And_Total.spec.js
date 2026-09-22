const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Verify Cart Details and Total',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_024 - Verify Cart Details and Total',
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
                // STEP 3 - VERIFY ZAKAT TANAMAN PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - VERIFY INITIAL CART STATE
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


                // =================================================
                // STEP 6 - VERIFY CALCULATOR
                // =================================================

                await zakatPage
                    .verifyCalculatorOpened();


                // =================================================
                // STEP 7 - VERIFY YEAR
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 8 - VERIFY NISAB
                // =================================================

                await zakatPage
                    .verify2026Nisab();


                // =================================================
                // STEP 9 - SELECT TOLAK KOS
                // =================================================

                await zakatPage
                    .selectTolakKos();


                await zakatPage
                    .verifyTolakKosSelected();


                // =================================================
                // STEP 10 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage
                    .enterCropWeight(
                        testData.weight
                    );


                // =================================================
                // STEP 11 - ENTER CROP SALES
                // =================================================

                await zakatPage
                    .enterCropSales(
                        testData.sales
                    );


                // =================================================
                // STEP 12 - ENTER INCENTIVE
                // =================================================

                await zakatPage
                    .enterIncentive(
                        testData.incentive
                    );


                // =================================================
                // STEP 13 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage
                    .enterProductionCost(
                        testData.productionCost
                    );


                // =================================================
                // STEP 14 - VERIFY ENTERED INFORMATION
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
                // STEP 15 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage
                    .verifyAboveNisabState();


                // =================================================
                // STEP 16 - VERIFY CALCULATION SECTION
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
                // STEP 17 - CAPTURE CALCULATOR RESULT
                // =================================================

                const calculatorText =
                    await zakatPage
                        .calculatorContainer
                        .innerText();


                expect(
                    calculatorText
                ).toBeTruthy();


                expect(
                    calculatorText
                ).toContain(
                    'Pengiraan'
                );


                expect(
                    calculatorText
                ).toContain(
                    'Jumlah / Baki Bersih'
                );


                // =================================================
                // STEP 18 - EXTRACT CALCULATOR RM VALUES
                // =================================================

                const calculatorRMValues =
                    zakatPage.extractRMValues(
                        calculatorText
                    );


                expect(
                    calculatorRMValues.length
                ).toBeGreaterThan(
                    0
                );


                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC024 - CALCULATOR VALUES'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    calculatorRMValues
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 19 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.addToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 20 - ADD TO CART
                // =================================================

                await zakatPage
                    .addCalculatedZakatToCart();


                // =================================================
                // STEP 21 - VERIFY ZAKAT TANAMAN CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTanamanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 22 - VERIFY EMPTY MESSAGE DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - VERIFY CART DETAILS AND TOTAL
                // =================================================

                const cartResult =
                    await zakatPage
                        .verifyCartDetailsAndTotal();


                // =================================================
                // STEP 24 - VERIFY CART RESULT
                // =================================================

                expect(
                    cartResult
                ).toBeTruthy();


                expect(
                    cartResult.cartText
                ).toBeTruthy();


                // =================================================
                // STEP 25 - VERIFY ZAKAT TANAMAN
                // =================================================

                expect(
                    cartResult.cartText
                ).toContain(
                    'Zakat Tanaman'
                );


                // =================================================
                // STEP 26 - VERIFY RM VALUES
                // =================================================

                expect(
                    cartResult.rmValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 27 - VERIFY NUMERIC VALUES
                // =================================================

                expect(
                    cartResult.numericValues.length
                ).toBeGreaterThan(
                    0
                );


                expect(
                    cartResult.numericValues.every(
                        value =>
                            Number.isFinite(value)
                    )
                ).toBeTruthy();


                // =================================================
                // STEP 28 - VERIFY POSITIVE MONETARY VALUE
                // =================================================

                expect(
                    cartResult.positiveValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 29 - VERIFY DISPLAYED TOTAL > RM0
                // =================================================

                expect(
                    cartResult.highestDisplayedAmount
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 30 - VERIFY CART REMAINS POPULATED
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
                // STEP 31 - PRINT FINAL RESULT
                // =================================================

                console.log(
                    '\n========================================'
                );

                console.log(
                    'TC024 - FINAL CART RESULT'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    'Calculator RM Values:',
                    calculatorRMValues
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
                    'Positive Values:',
                    cartResult.positiveValues
                );

                console.log(
                    'Highest Displayed Amount:',
                    cartResult.highestDisplayedAmount
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Complete Zakat Tanaman information is entered.
                //
                // 2. MAIPS generates a calculation.
                //
                // 3. User clicks Masuk Troli.
                //
                // 4. Zakat Tanaman appears in Bakul Bayaran.
                //
                // 5. Empty-cart state disappears.
                //
                // 6. Cart displays monetary information.
                //
                // 7. At least one displayed monetary value is
                //    greater than RM 0.00.
                //
                // 8. The cart remains populated.
                //
                // NOTE:
                //
                // TC024 intentionally does NOT verify a Bayar
                // button because the current Zakat Tanaman cart
                // state does not expose an accessible button named
                // "Bayar" based on the observed application DOM.
                //
                // =================================================
            }
        );
    }
);