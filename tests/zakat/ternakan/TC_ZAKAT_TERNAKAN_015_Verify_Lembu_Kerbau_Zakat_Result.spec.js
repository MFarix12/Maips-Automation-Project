const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Lembu Kerbau Zakat Result',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_015 - Verify Lembu Kerbau Zakat Result',
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
                // STEP 5 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY LEMBU/KERBAU
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
                // STEP 12 - VERIFY CALCULATED ZAKAT RESULT
                // =================================================

                const result =
                    await zakatPage
                        .verifyCattleZakatResult();


                // =================================================
                // STEP 13 - VERIFY RESULT OBJECT
                // =================================================

                expect(
                    result
                ).toBeDefined();


                expect(
                    result.zakatAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 14 - VERIFY REQUIRED RESULT LABELS
                // =================================================

                expect(
                    result.calculatorText
                ).toContain(
                    'Kadar Zakat yang Perlu Dibayar'
                );


                expect(
                    result.calculatorText
                ).toContain(
                    'Jumlah Zakat yang Perlu Dibayar'
                );


                // =================================================
                // STEP 15 - VERIFY BELOW NISAB MESSAGE NOT DISPLAYED
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
                // STEP 17 - VERIFY NOTHING ADDED TO CART YET
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