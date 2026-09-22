const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Lembu Betina Price',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_012 - Enter Lembu Betina Price',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '20',
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

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage
                    .openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage
                    .verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY YEAR
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        testData.year
                    );


                // =================================================
                // STEP 6 - VERIFY CATTLE MODE
                // =================================================

                await zakatPage
                    .verifyCattleDefaultSelection();


                // =================================================
                // STEP 7 - ENTER QUANTITY = 20
                // =================================================

                await zakatPage
                    .enterCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 8 - ENTER MALE PRICE = RM2500
                // =================================================

                await zakatPage
                    .enterMaleCattlePrice(
                        testData.malePrice
                    );


                // =================================================
                // STEP 9 - VERIFY FEMALE PRICE FIELD
                // =================================================

                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - ENTER FEMALE PRICE = RM3000
                // =================================================

                await zakatPage
                    .enterFemaleCattlePrice(
                        testData.femalePrice
                    );


                // =================================================
                // STEP 11 - VERIFY FEMALE PRICE
                // =================================================

                await zakatPage
                    .verifyFemaleCattlePrice(
                        testData.femalePrice
                    );


                // =================================================
                // STEP 12 - VERIFY QUANTITY REMAINS 20
                // =================================================

                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 13 - VERIFY MALE PRICE REMAINS RM2500
                // =================================================

                await zakatPage
                    .verifyMaleCattlePrice(
                        testData.malePrice
                    );


                // =================================================
                // STEP 14 - VERIFY ALL THREE INPUT VALUES
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toHaveValue(
                    testData.quantity,
                    {
                        timeout: 15000
                    }
                );


                await expect(
                    zakatPage.maleCattlePriceField
                ).toHaveValue(
                    testData.malePrice,
                    {
                        timeout: 15000
                    }
                );


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toHaveValue(
                    testData.femalePrice,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 15 - VERIFY CART REMAINS EMPTY
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
                    'RM 0.00'
                );


                // =================================================
                // STEP 16 - CLEAR FEMALE PRICE
                // =================================================

                await zakatPage
                    .clearFemaleCattlePrice();


                // =================================================
                // STEP 17 - RE-ENTER FEMALE PRICE
                // =================================================

                await zakatPage
                    .enterFemaleCattlePrice(
                        testData.femalePrice
                    );


                // =================================================
                // STEP 18 - FINAL VERIFY FEMALE PRICE
                // =================================================

                await zakatPage
                    .verifyFemaleCattlePrice(
                        testData.femalePrice
                    );


                // =================================================
                // STEP 19 - VERIFY OTHER VALUES REMAIN
                // =================================================

                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                await zakatPage
                    .verifyMaleCattlePrice(
                        testData.malePrice
                    );


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
                    'RM 0.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Calculator opens successfully.
                //
                // - Quantity 20 is accepted.
                //
                // - Male cattle price RM2500 is accepted.
                //
                // - Female cattle price RM3000 is accepted.
                //
                // - All three values remain correctly populated.
                //
                // - Female price can be cleared and re-entered.
                //
                // - Changing the female price does not remove the
                //   quantity or male cattle price.
                //
                // - No item is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);