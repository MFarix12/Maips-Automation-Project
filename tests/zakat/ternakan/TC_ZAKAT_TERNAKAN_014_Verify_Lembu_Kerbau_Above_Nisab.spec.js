const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Lembu Kerbau Above Nisab',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_014 - Verify Lembu Kerbau Above Nisab',
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
                // STEP 7 - ENTER QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 8 - ENTER MALE CATTLE PRICE
                // =================================================

                await zakatPage.enterMaleCattlePrice(
                    testData.malePrice
                );


                // =================================================
                // STEP 9 - ENTER FEMALE CATTLE PRICE
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
                // STEP 12 - VERIFY ZAKAT RESULT SECTION
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
                // STEP 13 - VERIFY RESULT IS NOT ZERO
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).not.toContainText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 14 - VERIFY MASUK TROLI AVAILABLE
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
                // STEP 15 - VERIFY CART STILL EMPTY
                // =================================================
                //
                // TC014 only validates the calculation.
                // We do not add the result to the cart yet.
                //
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
            }
        );
    }
);