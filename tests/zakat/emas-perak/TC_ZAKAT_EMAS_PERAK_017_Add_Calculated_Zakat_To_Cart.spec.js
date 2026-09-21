const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Add Calculated Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_017 - Add Calculated Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

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


                // =================================================
                // STEP 5 - VERIFY ENTERED GOLD WEIGHT
                // =================================================

                await zakatPage.verifyGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 6 - CLICK NEXT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 7 - VERIFY CALCULATION RESULT
                // =================================================

                await zakatPage.verifyGoldCalculationResult();


                // =================================================
                // STEP 8 - VERIFY MASUK TROLI
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
                // STEP 9 - ADD TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 10 - VERIFY SUCCESS NOTIFICATION
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY CART
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY ZAKAT EMAS/PERAK ITEM
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY YEAR
                // =================================================

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY USING POM METHOD
                // =================================================

                await zakatPage.verifyZakatEmasPerakAddedToCart();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - User enters gold information
                // - MAIPs displays calculation result
                // - Masuk Troli is available
                // - User clicks Masuk Troli
                // - Success notification is displayed:
                //
                //   Jumlah telah ditambah ke bakul bayaran
                //
                // - Bakul Bayaran contains:
                //
                //   Zakat Emas/Perak
                //   2026
                //
                // - No payment is performed
                //
                // =================================================
            }
        );
    }
);