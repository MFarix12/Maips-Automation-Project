const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Cart Details and Total',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_018 - Verify Cart Details and Total',
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
                // STEP 5 - GO TO CALCULATION RESULT
                // =================================================

                await zakatPage.clickNext();

                await zakatPage.verifyGoldCalculationResult();


                // =================================================
                // STEP 6 - CAPTURE CALCULATED ZAKAT
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
                // STEP 8 - VERIFY SUCCESS
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY CART ITEM
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY YEAR
                // =================================================

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY AMOUNT + TOTAL + PAY BUTTON
                // =================================================

                await zakatPage.verifyCartDetailsAndTotal(
                    calculatedAmount
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Calculator displays a calculated zakat amount.
                //
                // After Masuk Troli:
                //
                // - Zakat Emas/Perak appears in Bakul Bayaran
                // - Tahun/Haul = 2026
                // - Cart amount matches calculator result
                // - Cart total contains the calculated amount
                // - Bayar button uses the same calculated amount
                //
                // Actual payment is NOT performed.
                //
                // =================================================
            }
        );
    }
);