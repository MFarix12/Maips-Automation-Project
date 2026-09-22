const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Verify Cart Total',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_028 - Verify Cart Total',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    cattle: {
                        quantity: '40',
                        malePrice: '2500',
                        femalePrice: '3000',
                        expectedAmount: 2500
                    },

                    goat: {
                        quantity: '40',
                        price: '1000',
                        expectedAmount: 1000
                    },

                    expectedTotal: 3500
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

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // LEMBU / KERBAU
                // =================================================

                // =================================================
                // STEP 4 - VERIFY DEFAULT CATTLE MODE
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 5 - ENTER CATTLE QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.cattle.quantity
                );


                // =================================================
                // STEP 6 - ENTER MALE PRICE
                // =================================================

                await zakatPage.enterMaleCattlePrice(
                    testData.cattle.malePrice
                );


                // =================================================
                // STEP 7 - ENTER FEMALE PRICE
                // =================================================

                await zakatPage.enterFemaleCattlePrice(
                    testData.cattle.femalePrice
                );


                // =================================================
                // STEP 8 - VERIFY CATTLE INPUTS
                // =================================================

                await zakatPage.verifyCattleQuantity(
                    testData.cattle.quantity
                );

                await zakatPage.verifyMaleCattlePrice(
                    testData.cattle.malePrice
                );

                await zakatPage.verifyFemaleCattlePrice(
                    testData.cattle.femalePrice
                );


                // =================================================
                // STEP 9 - VERIFY CATTLE ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 10 - GET CATTLE ZAKAT AMOUNT
                // =================================================

                const cattleAmount =
                    await zakatPage
                        .getCattleZakatResultAmount();


                expect(
                    cattleAmount
                ).toBe(
                    testData.cattle.expectedAmount
                );


                // =================================================
                // STEP 11 - ADD CATTLE TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 12 - WAIT FOR FIRST CART TOTAL
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
                // STEP 13 - VERIFY FIRST CART AMOUNT
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
                // STEP 14 - OPEN CALCULATOR AGAIN
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // KAMBING / BIRI-BIRI
                // =================================================

                // =================================================
                // STEP 15 - SELECT KAMBING/BIRI-BIRI
                // =================================================

                await zakatPage.selectGoatSheep();

                await zakatPage.verifyGoatSheepSelection();


                // =================================================
                // STEP 16 - ENTER GOAT QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.goat.quantity
                );


                // =================================================
                // STEP 17 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goat.price
                );


                // =================================================
                // STEP 18 - VERIFY GOAT INPUTS
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.goat.quantity
                );

                await zakatPage.verifyGoatPrice(
                    testData.goat.price
                );


                // =================================================
                // STEP 19 - VERIFY GOAT ABOVE NISAB
                // =================================================

                await zakatPage.verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 20 - GET GOAT ZAKAT AMOUNT
                // =================================================

                const goatAmount =
                    await zakatPage
                        .getGoatSheepZakatResultAmount();


                expect(
                    goatAmount
                ).toBe(
                    testData.goat.expectedAmount
                );


                // =================================================
                // STEP 21 - CALCULATE EXPECTED TOTAL
                // =================================================

                const expectedTotal =
                    cattleAmount +
                    goatAmount;


                expect(
                    expectedTotal
                ).toBe(
                    testData.expectedTotal
                );


                // =================================================
                // STEP 22 - ADD GOAT TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 23 - WAIT FOR FINAL CART TOTAL
                // =================================================

                await expect(
                    paymentButton
                ).toContainText(
                    'RM 3,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 24 - VERIFY CATTLE AMOUNT IN CART
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
                // STEP 25 - VERIFY GOAT AMOUNT IN CART
                // =================================================

                await expect(
                    zakatPage.cartContainer
                ).toContainText(
                    'RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 26 - GET FINAL CART TEXT
                // =================================================

                const cartText =
                    await zakatPage.getCartContent();


                // =================================================
                // STEP 27 - VERIFY CART CONTENT
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'Zakat Ternakan'
                );

                expect(
                    cartText
                ).toContain(
                    testData.year
                );

                expect(
                    cartText
                ).toContain(
                    'RM 2,500.00'
                );

                expect(
                    cartText
                ).toContain(
                    'RM 1,000.00'
                );

                expect(
                    cartText
                ).toContain(
                    'RM 3,500.00'
                );


                // =================================================
                // STEP 28 - VERIFY TWO ZAKAT TERNAKAN ITEMS
                // =================================================

                const cartItems =
                    zakatPage.cartContainer.getByText(
                        'Zakat Ternakan',
                        {
                            exact: true
                        }
                    );


                await expect(
                    cartItems
                ).toHaveCount(
                    2,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 29 - VERIFY PAYMENT BUTTON VISIBLE
                // =================================================

                await expect(
                    paymentButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 30 - VERIFY PAYMENT BUTTON ENABLED
                // =================================================

                await expect(
                    paymentButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 31 - VERIFY EXACT PAYMENT TOTAL
                // =================================================

                await expect(
                    paymentButton
                ).toContainText(
                    'RM 3,500.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 32 - VERIFY EMPTY CART MESSAGE HIDDEN
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
                // Lembu/Kerbau:
                // RM2,500.00
                //
                // Kambing/Biri-Biri:
                // RM1,000.00
                //
                // Calculation:
                // RM2,500.00 + RM1,000.00
                // = RM3,500.00
                //
                // Bakul Bayaran:
                // Total = RM3,500.00
                //
                // Payment button:
                // Bayar RM3,500.00
                //
                // =================================================
            }
        );
    }
);