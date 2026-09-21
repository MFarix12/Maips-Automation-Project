const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Remove From Cart',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_019 - Remove Zakat Emas Perak From Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);

                const goldType = '24K/995/999';
                const goldWeight = '5';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT EMAS / PERAK
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 4 - ENTER GOLD WEIGHT
                // =================================================

                await zakatPage.enterGoldWeight(
                    goldType,
                    goldWeight
                );


                await zakatPage.verifyGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 5 - GO TO RESULT
                // =================================================

                await zakatPage.clickNext();

                await zakatPage.verifyGoldCalculationResult();


                // =================================================
                // STEP 6 - CAPTURE CALCULATED AMOUNT
                // =================================================

                const calculatedAmount =
                    await zakatPage.getCalculatedZakatAmount();


                expect(
                    calculatedAmount
                ).toMatch(
                    /^RM [\d,]+\.\d{2}$/
                );


                // =================================================
                // STEP 7 - ADD TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 8 - VERIFY ITEM ADDED
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY CART AMOUNT
                // =================================================

                await zakatPage.verifyCartDetailsAndTotal(
                    calculatedAmount
                );


                // =================================================
                // STEP 10 - VERIFY DELETE BUTTON
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
                // STEP 11 - REMOVE ITEM
                // =================================================

                await zakatPage.removeZakatEmasPerakFromCart();


                // =================================================
                // STEP 12 - VERIFY ITEM REMOVED
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Zakat Emas/Perak calculation is completed
                // - Calculated zakat is added to Bakul Bayaran
                // - Cart item is displayed
                // - Delete button is available
                // - User clicks delete
                // - Zakat Emas/Perak item is removed
                //
                // Actual payment is NOT performed.
                //
                // =================================================
            }
        );
    }
);