const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Kambing Biri-Biri Above Nisab',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_023 - Verify Kambing Biri-Biri Above Nisab',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '40',
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
                // STEP 10 - VERIFY QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 11 - VERIFY GOAT PRICE
                // =================================================

                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 12 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage
                    .verifyGoatSheepAboveNisab();


                // =================================================
                // STEP 13 - VERIFY RESULT SECTION
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
                // STEP 14 - GET CALCULATOR CONTENT
                // =================================================

                const calculatorText =
                    await zakatPage.calculatorContainer.innerText();


                // =================================================
                // STEP 15 - EXTRACT RM VALUES
                // =================================================

                const rmMatches =
                    calculatorText.match(
                        /RM\s*[\d,]+\.\d{2}/g
                    );


                expect(
                    rmMatches
                ).not.toBeNull();


                expect(
                    rmMatches.length
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 16 - CONVERT RM VALUES TO NUMBERS
                // =================================================

                const amounts =
                    rmMatches.map(
                        value =>
                            Number(
                                value
                                    .replace(/RM\s*/i, '')
                                    .replace(/,/g, '')
                            )
                    );


                // =================================================
                // STEP 17 - FIND POSITIVE RESULT
                // =================================================

                const positiveAmounts =
                    amounts.filter(
                        amount =>
                            Number.isFinite(amount) &&
                            amount > 0
                    );


                expect(
                    positiveAmounts.length
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 18 - VERIFY BELOW-NISAB MESSAGE HIDDEN
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY MASUK TROLI
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
                // STEP 20 - VERIFY CART STILL EMPTY
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
                // STEP 21 - VERIFY NO ITEM ADDED TO CART
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
                // 1. Kambing/Biri-Biri is selected.
                //
                // 2. Quantity = 40.
                //
                // 3. Current goat price = RM1,000.
                //
                // 4. MAIPS identifies the livestock as
                //    above Nisab.
                //
                // 5. Below-Nisab warning is not displayed.
                //
                // 6. A positive zakat result is generated.
                //
                // 7. Masuk Troli is available.
                //
                // 8. Nothing is added to Bakul Bayaran because
                //    this TC only verifies the calculation.
                //
                // =================================================
            }
        );
    }
);