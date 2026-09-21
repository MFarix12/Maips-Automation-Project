const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Empty Cart After Removal',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_020 - Verify Empty Cart After Removal',
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
                // STEP 5 - GO TO RESULT SCREEN
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
                // STEP 8 - VERIFY ITEM EXISTS
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY CART DETAILS
                // =================================================

                await zakatPage.verifyCartDetailsAndTotal(
                    calculatedAmount
                );


                // =================================================
                // STEP 10 - REMOVE ITEM
                // =================================================

                await zakatPage.removeZakatEmasPerakFromCart();


                // =================================================
                // STEP 11 - VERIFY ITEM IS NO LONGER VISIBLE
                // =================================================

                await expect(
                    zakatPage.cartZakatEmasPerakItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY TOTAL = RM 0.00
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
                // STEP 14 - VERIFY BAYAR BUTTON
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // STEP 15 - VERIFY CALCULATED PAY BUTTON IS GONE
                // =================================================

                const calculatedPayButton =
                    zakatPage.cartContainer.getByRole(
                        'button',
                        {
                            name: `Bayar ${calculatedAmount}`,
                            exact: true
                        }
                    );

                await expect(
                    calculatedPayButton
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After removing Zakat Emas/Perak:
                //
                // - Zakat Emas/Perak cart item is no longer visible
                //
                // - Empty-cart message is displayed:
                //
                //   Rekod tidak ditemui.
                //   Sila klik Masuk Troli untuk tambah item.
                //
                // - Cart total = RM 0.00
                //
                // - Bayar button is disabled
                //
                // - Previous calculated payment button is no
                //   longer visible
                //
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);