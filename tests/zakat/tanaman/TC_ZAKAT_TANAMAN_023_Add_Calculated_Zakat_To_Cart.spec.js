const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Add Calculated Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_023 - Add Calculated Zakat To Cart',
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

                await zakatPage.verifyZakatTanamanPage();


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

                await zakatPage.openCalculator();


                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 7 - VERIFY NISAB
                // =================================================

                await zakatPage.verify2026Nisab();


                // =================================================
                // STEP 8 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();


                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 9 - ENTER CALCULATION DATA
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                await zakatPage.enterCropSales(
                    testData.sales
                );


                await zakatPage.enterIncentive(
                    testData.incentive
                );


                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 10 - VERIFY INPUT DATA
                // =================================================

                await zakatPage.verifyTolakKosInformation({

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

                await zakatPage.verifyAboveNisabState();


                // =================================================
                // STEP 12 - VERIFY CALCULATION EXISTS
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
                // STEP 13 - CAPTURE CALCULATED RESULT
                // =================================================

                const calculationText =
                    await zakatPage
                        .calculatorContainer
                        .innerText();


                expect(
                    calculationText
                ).toBeTruthy();


                const calculatedRMValues =
                    calculationText.match(
                        /RM\s*[\d,.]+/g
                    );


                expect(
                    calculatedRMValues
                ).not.toBeNull();


                expect(
                    calculatedRMValues.length
                ).toBeGreaterThan(
                    0
                );


                console.log(
                    '\nCalculated RM values before cart:'
                );

                console.log(
                    calculatedRMValues
                );


                // =================================================
                // STEP 14 - CLICK MASUK TROLI
                // =================================================

                await zakatPage
                    .addCalculatedZakatToCart();


                // =================================================
                // STEP 15 - VERIFY SUCCESS NOTIFICATION
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY CART ITEM
                // =================================================

                const cartText =
                    await zakatPage
                        .verifyZakatTanamanAddedToCart();


                // =================================================
                // STEP 17 - VERIFY CART CONTENT
                // =================================================

                expect(
                    cartText
                ).toBeTruthy();


                expect(
                    cartText
                ).toContain(
                    'Zakat Tanaman'
                );


                // =================================================
                // STEP 18 - VERIFY CART HAS RM VALUE
                // =================================================

                const cartRMValues =
                    cartText.match(
                        /RM\s*[\d,.]+/g
                    );


                expect(
                    cartRMValues
                ).not.toBeNull();


                expect(
                    cartRMValues.length
                ).toBeGreaterThan(
                    0
                );


                console.log(
                    '\nDetected Cart RM Values:'
                );

                console.log(
                    cartRMValues
                );


                // =================================================
                // STEP 19 - VERIFY CART IS NOT EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // A complete Zakat Tanaman calculation is entered.
                //
                // Crop weight = 1000 kg
                // 1000 kg > 653 kg Nisab
                //
                // Calculation method = Tolak Kos
                //
                // User clicks Masuk Troli.
                //
                // MAIPS adds the calculated Zakat Tanaman item
                // into Bakul Bayaran.
                //
                // Zakat Tanaman is displayed in the cart.
                //
                // The cart contains a monetary value.
                //
                // Empty-cart message is no longer displayed.
                //
                // The exact calculated amount is intentionally
                // not hardcoded.
                //
                // =================================================
            }
        );
    }
);