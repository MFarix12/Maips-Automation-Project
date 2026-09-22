const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Remove From Cart',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_029 - Remove Zakat Ternakan From Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '40',
                    malePrice: '2500',
                    femalePrice: '3000',
                    expectedAmount: 2500
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage.openZakatTernakan();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // STEP 4 - VERIFY YEAR / HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 5 - VERIFY LEMBU/KERBAU
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 6 - ENTER QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 7 - ENTER MALE PRICE
                // =================================================

                await zakatPage.enterMaleCattlePrice(
                    testData.malePrice
                );


                // =================================================
                // STEP 8 - ENTER FEMALE PRICE
                // =================================================

                await zakatPage.enterFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 9 - VERIFY INPUTS
                // =================================================

                await zakatPage.verifyCattleQuantity(
                    testData.quantity
                );

                await zakatPage.verifyMaleCattlePrice(
                    testData.malePrice
                );

                await zakatPage.verifyFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 10 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 11 - GET CALCULATED AMOUNT
                // =================================================

                const calculatedAmount =
                    await zakatPage
                        .getCattleZakatResultAmount();


                expect(
                    calculatedAmount
                ).toBe(
                    testData.expectedAmount
                );


                // =================================================
                // STEP 12 - ADD TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 13 - WAIT FOR CART UPDATE
                // =================================================

                const paymentButton =
                    page.getByRole(
                        'button',
                        {
                            name: /Bayar RM/i
                        }
                    );


                await expect(
                    paymentButton
                ).toContainText(
                    'RM 2,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 14 - VERIFY CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY CART AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartContainer
                ).toContainText(
                    'RM 2,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 16 - VERIFY CART NOT EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY DELETE BUTTON
                // =================================================

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.cartDeleteButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - REMOVE ITEM
                // =================================================

                await zakatPage
                    .removeZakatTernakanFromCart();


                // =================================================
                // STEP 19 - VERIFY ITEM REMOVED
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 21 - VERIFY EMPTY CART TOTAL
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
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


                // =================================================
                // STEP 22 - VERIFY OLD PAYMENT BUTTON DISAPPEARS
                // =================================================

                await expect(
                    paymentButton
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - VERIFY EMPTY BAYAR BUTTON
                // =================================================

                const emptyPaymentButton =
                    page.getByRole(
                        'button',
                        {
                            name: 'Bayar',
                            exact: true
                        }
                    );


                await expect(
                    emptyPaymentButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Before removal:
                //
                // Zakat Ternakan
                // 2026
                // RM2,500.00
                // Bayar RM2,500.00
                //
                // After removal:
                //
                // 1. Zakat Ternakan item is removed.
                //
                // 2. Empty-cart message is displayed.
                //
                // 3. Total returns to RM0.00.
                //
                // 4. Bayar RM2,500.00 disappears.
                //
                // 5. Empty Bayar button is disabled.
                //
                // =================================================
            }
        );
    }
);