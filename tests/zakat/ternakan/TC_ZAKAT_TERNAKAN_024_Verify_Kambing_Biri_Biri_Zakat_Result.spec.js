const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Kambing Biri-Biri Zakat Result',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_024 - Verify Kambing Biri-Biri Zakat Result',
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

                await zakatPage
                    .verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 12 - VERIFY EXACT ZAKAT RESULT
                // =================================================

                const actualAmount =
                    await zakatPage
                        .verifyGoatSheepZakatResult(
                            testData.expectedZakatAmount
                        );


                // =================================================
                // STEP 13 - VERIFY RETURNED RESULT
                // =================================================

                expect(
                    actualAmount
                ).toBe(
                    testData.expectedZakatAmount
                );


                // =================================================
                // STEP 14 - VERIFY DISPLAYED RM1,000.00
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
                // STEP 15 - VERIFY BELOW NISAB MESSAGE HIDDEN
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY MASUK TROLI AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY CART STILL EMPTY
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
                // STEP 18 - VERIFY NO CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Quantity:
                // 40 Kambing/Biri-Biri
                //
                // Current price:
                // RM1,000 per goat
                //
                // Expected zakat:
                // RM1,000.00
                //
                // Result must be above Nisab.
                //
                // No item should be added to the cart because
                // TC024 only validates the calculated result.
                //
                // =================================================
            }
        );
    }
);