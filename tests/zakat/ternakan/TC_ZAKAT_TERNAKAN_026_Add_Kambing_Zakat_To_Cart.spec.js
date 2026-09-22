const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Add Kambing Biri-Biri Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_026 - Add Kambing Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '40',
                    goatPrice: '1000',
                    expectedZakatAmount: 1000
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


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY YEAR / HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - SELECT KAMBING/BIRI-BIRI
                // =================================================

                await zakatPage.selectGoatSheep();


                // =================================================
                // STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE
                // =================================================

                await zakatPage.verifyGoatSheepSelection();


                // =================================================
                // STEP 8 - ENTER QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 9 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 11 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 12 - GET CALCULATED ZAKAT AMOUNT
                // =================================================

                const calculatedAmount =
                    await zakatPage
                        .getGoatSheepZakatResultAmount();


                expect(
                    calculatedAmount
                ).toBe(
                    testData.expectedZakatAmount
                );


                // =================================================
                // STEP 13 - VERIFY DISPLAYED RESULT
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toContainText(
                    'RM 1,000.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 14 - VERIFY CART EMPTY BEFORE ADD
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
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
                // STEP 15 - CLICK MASUK TROLI
                // =================================================

                await zakatPage.clickCalculatorAddToCart();


                // =================================================
                // STEP 16 - VERIFY ZAKAT TERNAKAN CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY EMPTY CART MESSAGE HIDDEN
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - GET CART CONTENT
                // =================================================

                const cartText =
                    await zakatPage.getCartContent();


                // =================================================
                // STEP 19 - VERIFY ZAKAT TYPE
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'Zakat Ternakan'
                );


                // =================================================
                // STEP 20 - VERIFY YEAR / HAUL
                // =================================================

                expect(
                    cartText
                ).toContain(
                    testData.year
                );


                // =================================================
                // STEP 21 - VERIFY RM1,000.00 IN CART
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'RM 1,000.00'
                );


                // =================================================
                // STEP 22 - EXTRACT CART RM VALUES
                // =================================================

                const rmValues =
                    zakatPage.extractRMValues(
                        cartText
                    );


                expect(
                    rmValues.length
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 23 - CONVERT CART VALUES
                // =================================================

                const cartAmounts =
                    rmValues.map(
                        value =>
                            zakatPage.convertRMToNumber(
                                value
                            )
                    );


                // =================================================
                // STEP 24 - VERIFY CALCULATED AMOUNT IN CART
                // =================================================

                expect(
                    cartAmounts
                ).toContain(
                    calculatedAmount
                );


                // =================================================
                // STEP 25 - VERIFY CART TOTAL
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'RM 1,000.00'
                );


                // =================================================
                // STEP 26 - VERIFY BAYAR BUTTON
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
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    paymentButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 27 - VERIFY BAYAR BUTTON AMOUNT
                // =================================================

                await expect(
                    paymentButton
                ).toContainText(
                    'RM 1,000.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. User selects Kambing/Biri-Biri.
                //
                // 2. Quantity = 40.
                //
                // 3. Harga Semasa Seekor Kambing = RM1,000.
                //
                // 4. MAIPS calculates RM1,000.00 zakat.
                //
                // 5. User clicks Masuk Troli.
                //
                // 6. Zakat Ternakan appears in Bakul Bayaran.
                //
                // 7. Tahun/Haul = 2026.
                //
                // 8. Cart contains RM1,000.00.
                //
                // 9. Cart total is RM1,000.00.
                //
                // 10. Bayar RM1,000.00 becomes available.
                //
                // =================================================
            }
        );
    }
);