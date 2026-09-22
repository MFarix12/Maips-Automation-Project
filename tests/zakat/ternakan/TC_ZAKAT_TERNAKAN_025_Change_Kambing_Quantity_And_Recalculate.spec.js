const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Change Kambing Biri-Biri Quantity',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_025 - Change Kambing Quantity And Recalculate',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    initialQuantity: '40',
                    updatedQuantity: '50',
                    goatPrice: '1000'
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
                // STEP 8 - ENTER INITIAL QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.initialQuantity
                );


                // =================================================
                // STEP 9 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 10 - VERIFY INITIAL INPUTS
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.initialQuantity
                );


                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 11 - VERIFY INITIAL ABOVE-NISAB RESULT
                // =================================================

                await zakatPage.verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 12 - CAPTURE INITIAL RESULT
                // =================================================

                const initialAmount =
                    await zakatPage
                        .getGoatSheepZakatResultAmount();


                expect(
                    initialAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 13 - CHANGE QUANTITY
                // =================================================

                await zakatPage.goatSheepQuantityField.fill(
                    testData.updatedQuantity
                );


                // =================================================
                // STEP 14 - TRIGGER RECALCULATION
                // =================================================

                await zakatPage.goatSheepQuantityField.press(
                    'Tab'
                );


                // =================================================
                // STEP 15 - VERIFY UPDATED QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.updatedQuantity
                );


                // =================================================
                // STEP 16 - VERIFY PRICE REMAINS UNCHANGED
                // =================================================

                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 17 - VERIFY STILL ABOVE NISAB
                // =================================================

                await zakatPage.verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 18 - CAPTURE UPDATED RESULT
                // =================================================

                const updatedAmount =
                    await zakatPage
                        .getGoatSheepZakatResultAmount();


                expect(
                    updatedAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 19 - VERIFY RESULT SECTION
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toContainText(
                    'Kadar Zakat yang Perlu Dibayar',
                    {
                        timeout: 15000
                    }
                );


                await expect(
                    zakatPage.calculatorContainer
                ).toContainText(
                    'Jumlah Zakat yang Perlu Dibayar',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 20 - VERIFY BELOW-NISAB MESSAGE HIDDEN
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 21 - VERIFY MASUK TROLI AVAILABLE
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
                // STEP 22 - VERIFY CART STILL EMPTY
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
                // STEP 23 - VERIFY NO CART ITEM
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
                // Initial:
                // Quantity = 40
                // Price    = RM1,000
                //
                // Updated:
                // Quantity = 50
                // Price    = RM1,000
                //
                // Expected:
                //
                // 1. Quantity changes successfully from 40 to 50.
                //
                // 2. Goat price remains RM1,000.
                //
                // 3. MAIPS recalculates/refreshes the livestock
                //    calculation after the quantity changes.
                //
                // 4. The updated scenario remains above Nisab.
                //
                // 5. A positive zakat amount remains available.
                //
                // 6. The test does NOT require:
                //
                //        updatedAmount !== initialAmount
                //
                //    because different livestock quantities can
                //    legitimately produce the same obligation.
                //
                // 7. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);