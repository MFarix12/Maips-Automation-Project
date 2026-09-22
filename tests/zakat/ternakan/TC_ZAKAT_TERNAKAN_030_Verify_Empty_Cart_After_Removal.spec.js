const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Empty Cart After Removal',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_030 - Verify Empty Cart After Removal',
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
                // STEP 3 - VERIFY INITIAL EMPTY CART
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
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY YEAR / HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY LEMBU/KERBAU MODE
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 7 - ENTER QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 8 - ENTER MALE PRICE
                // =================================================

                await zakatPage.enterMaleCattlePrice(
                    testData.malePrice
                );


                // =================================================
                // STEP 9 - ENTER FEMALE PRICE
                // =================================================

                await zakatPage.enterFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
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
                // STEP 11 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 12 - GET CALCULATED ZAKAT
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
                // STEP 13 - ADD TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 14 - WAIT FOR CART UPDATE
                // =================================================

                const populatedPaymentButton =
                    page.getByRole(
                        'button',
                        {
                            name: /Bayar RM/i
                        }
                    );


                await expect(
                    populatedPaymentButton
                ).toContainText(
                    'RM 2,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 15 - VERIFY CART NOW CONTAINS ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.cartContainer
                ).toContainText(
                    'RM 2,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 16 - VERIFY EMPTY MESSAGE DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - REMOVE ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .removeZakatTernakanFromCart();


                // =================================================
                // STEP 18 - VERIFY CART ITEM DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY EMPTY CART MESSAGE RETURNS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY EMPTY CART MESSAGE CONTENT
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toContainText(
                    'Rekod tidak ditemui',
                    {
                        timeout: 15000
                    }
                );


                await expect(
                    zakatPage.emptyCartMessage
                ).toContainText(
                    'Sila klik Masuk Troli untuk tambah item',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 21 - VERIFY TOTAL RETURNS TO RM0.00
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
                    populatedPaymentButton
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - LOCATE EMPTY BAYAR BUTTON
                // =================================================

                const emptyPaymentButton =
                    page.getByRole(
                        'button',
                        {
                            name: 'Bayar',
                            exact: true
                        }
                    );


                // =================================================
                // STEP 24 - VERIFY EMPTY BAYAR BUTTON VISIBLE
                // =================================================

                await expect(
                    emptyPaymentButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 25 - VERIFY EMPTY BAYAR BUTTON DISABLED
                // =================================================

                await expect(
                    emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 26 - VERIFY OLD AMOUNT IS NOT VISIBLE
                // =================================================

                await expect(
                    zakatPage.cartContainer
                        .getByText(
                            'RM 2,500.00',
                            {
                                exact: true
                            }
                        )
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 27 - VERIFY FINAL CART STATE
                // =================================================

                const finalCartText =
                    await zakatPage.getCartContent();


                expect(
                    finalCartText
                ).toContain(
                    'Rekod tidak ditemui'
                );


                expect(
                    finalCartText
                ).toContain(
                    'RM 0.00'
                );


                expect(
                    finalCartText
                ).not.toContain(
                    'RM 2,500.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial state:
                //
                // - Cart is empty.
                // - Empty-cart message is displayed.
                // - Total = RM0.00.
                //
                // After adding:
                //
                // - Zakat Ternakan appears in cart.
                // - Amount = RM2,500.00.
                // - Bayar RM2,500.00 is enabled.
                //
                // After removing:
                //
                // - Zakat Ternakan is no longer visible.
                // - RM2,500.00 is no longer visible.
                // - Empty-cart message returns.
                // - Total returns to RM0.00.
                // - Bayar RM2,500.00 disappears.
                // - Empty Bayar button is disabled.
                //
                // =================================================
            }
        );
    }
);