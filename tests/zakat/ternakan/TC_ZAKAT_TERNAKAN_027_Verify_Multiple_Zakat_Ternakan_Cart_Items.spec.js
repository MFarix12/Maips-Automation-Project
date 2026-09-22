const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Multiple Cart Items',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_027 - Verify Multiple Zakat Ternakan Cart Items',
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
                // STEP 9 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 10 - GET CATTLE RESULT
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
                // STEP 11 - VERIFY CART EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - ADD CATTLE TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 13 - WAIT FOR CATTLE CART UPDATE
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
                // STEP 14 - VERIFY CATTLE CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                let cartText =
                    await zakatPage.getCartContent();


                expect(
                    cartText
                ).toContain(
                    'RM 2,500.00'
                );


                // =================================================
                // STEP 15 - OPEN CALCULATOR AGAIN
                // =================================================

                await zakatPage.openCalculator();


                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // KAMBING / BIRI-BIRI
                // =================================================

                // =================================================
                // STEP 16 - SELECT KAMBING/BIRI-BIRI
                // =================================================

                await zakatPage.selectGoatSheep();


                await zakatPage.verifyGoatSheepSelection();


                // =================================================
                // STEP 17 - ENTER GOAT QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.goat.quantity
                );


                // =================================================
                // STEP 18 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goat.price
                );


                // =================================================
                // STEP 19 - VERIFY GOAT INPUTS
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.goat.quantity
                );


                await zakatPage.verifyGoatPrice(
                    testData.goat.price
                );


                // =================================================
                // STEP 20 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 21 - GET GOAT RESULT
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
                // STEP 22 - ADD GOAT TO CART
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 23 - WAIT FOR CART TOTAL TO UPDATE
                // =================================================
                //
                // IMPORTANT:
                // Do not immediately call innerText() after
                // clicking Masuk Troli.
                //
                // MAIPS updates the cart asynchronously.
                //
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
                // STEP 24 - VERIFY CART CONTAINS BOTH AMOUNTS
                // =================================================

                await expect(
                    zakatPage.cartContainer
                ).toContainText(
                    'RM 2,500.00',
                    {
                        timeout: 15000
                    }
                );


                await expect(
                    zakatPage.cartContainer
                ).toContainText(
                    'RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 25 - GET UPDATED CART TEXT
                // =================================================

                cartText =
                    await zakatPage.getCartContent();


                // =================================================
                // STEP 26 - VERIFY CATTLE AMOUNT
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'RM 2,500.00'
                );


                // =================================================
                // STEP 27 - VERIFY GOAT AMOUNT
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'RM 1,000.00'
                );


                // =================================================
                // STEP 28 - VERIFY TOTAL
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'RM 3,500.00'
                );


                // =================================================
                // STEP 29 - VERIFY TWO ZAKAT TERNAKAN ITEMS
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
                // STEP 30 - VERIFY YEAR
                // =================================================

                expect(
                    cartText
                ).toContain(
                    testData.year
                );


                // =================================================
                // STEP 31 - VERIFY CALCULATED TOTAL
                // =================================================

                const calculatedTotal =
                    cattleAmount +
                    goatAmount;


                expect(
                    calculatedTotal
                ).toBe(
                    testData.expectedTotal
                );


                // =================================================
                // STEP 32 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    paymentButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    paymentButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 33 - VERIFY PAYMENT TOTAL
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
                // STEP 34 - VERIFY EMPTY CART MESSAGE HIDDEN
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
                // Quantity      = 40
                // Zakat         = RM2,500.00
                //
                // Kambing/Biri-Biri:
                // Quantity      = 40
                // Price         = RM1,000
                // Zakat         = RM1,000.00
                //
                // Bakul Bayaran:
                // Item 1        = RM2,500.00
                // Item 2        = RM1,000.00
                // Total         = RM3,500.00
                //
                // Bayar button:
                // Bayar RM3,500.00
                //
                // =================================================
            }
        );
    }
);