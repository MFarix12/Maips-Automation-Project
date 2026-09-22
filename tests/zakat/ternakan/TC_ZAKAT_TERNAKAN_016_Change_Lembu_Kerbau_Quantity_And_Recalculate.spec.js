const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Change Lembu Kerbau Quantity',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_016 - Change Lembu Kerbau Quantity And Recalculate',
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
                    malePrice: '2500',
                    femalePrice: '3000'
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
                // STEP 5 - VERIFY HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY LEMBU/KERBAU MODE
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 7 - ENTER INITIAL QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.initialQuantity
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
                // STEP 10 - VERIFY INITIAL VALUES
                // =================================================

                await zakatPage.verifyCattleQuantity(
                    testData.initialQuantity
                );


                await zakatPage.verifyMaleCattlePrice(
                    testData.malePrice
                );


                await zakatPage.verifyFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 11 - VERIFY INITIAL ABOVE NISAB RESULT
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                const initialAmount =
                    await zakatPage
                        .getCattleZakatResultAmount();


                expect(
                    initialAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 12 - CHANGE CATTLE QUANTITY
                // =================================================

                await zakatPage.cattleQuantityField.fill(
                    testData.updatedQuantity
                );


                // =================================================
                // STEP 13 - TRIGGER RECALCULATION
                // =================================================

                await zakatPage.cattleQuantityField.press(
                    'Tab'
                );


                // =================================================
                // STEP 14 - VERIFY UPDATED QUANTITY
                // =================================================

                await zakatPage.verifyCattleQuantity(
                    testData.updatedQuantity
                );


                // =================================================
                // STEP 15 - VERIFY PRICES REMAIN UNCHANGED
                // =================================================

                await zakatPage.verifyMaleCattlePrice(
                    testData.malePrice
                );


                await zakatPage.verifyFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 16 - VERIFY RESULT STILL ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 17 - GET RECALCULATED RESULT
                // =================================================

                const updatedAmount =
                    await zakatPage
                        .getCattleZakatResultAmount();


                expect(
                    updatedAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 18 - VERIFY RESULT SECTION REMAINS DISPLAYED
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
                // STEP 19 - VERIFY BELOW NISAB MESSAGE NOT DISPLAYED
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY MASUK TROLI AVAILABLE
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
                // STEP 21 - VERIFY CART REMAINS EMPTY
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
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Initial quantity 40 produces a valid
                //    above-Nisab zakat result.
                //
                // 2. Quantity can be changed from 40 to 50.
                //
                // 3. MAIPS accepts the updated quantity.
                //
                // 4. The result section remains displayed.
                //
                // 5. The recalculated zakat amount remains valid
                //    and greater than RM 0.00.
                //
                // 6. The amount is NOT required to differ because
                //    livestock quantities may belong to a range
                //    with the same zakat obligation.
                //
                // 7. Nothing is added to the cart in this test.
                //
                // =================================================
            }
        );
    }
);