const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Lembu Kerbau Quantity',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_010 - Enter Lembu Kerbau Quantity',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '20'
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
                // STEP 5 - VERIFY YEAR = 2026
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
                // STEP 7 - VERIFY QUANTITY FIELD
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.cattleQuantityField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - ENTER QUANTITY = 20
                // =================================================

                await zakatPage
                    .enterCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 9 - VERIFY QUANTITY = 20
                // =================================================

                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 10 - VERIFY PRICE FIELDS REMAIN AVAILABLE
                // =================================================

                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeEnabled();


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY CART STILL EMPTY
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
                // STEP 12 - CLEAR QUANTITY
                // =================================================

                await zakatPage
                    .clearCattleQuantity();


                // =================================================
                // STEP 13 - RE-ENTER QUANTITY
                // =================================================

                await zakatPage
                    .enterCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 14 - FINAL QUANTITY VERIFICATION
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toHaveValue(
                    testData.quantity,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 15 - VERIFY NO CART ITEM CREATED
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
                // - Lembu/Kerbau fields are displayed.
                //
                // - User can enter quantity 20.
                //
                // - Quantity field retains 20.
                //
                // - User can clear the quantity.
                //
                // - User can re-enter quantity 20.
                //
                // - Male and female cattle price fields remain
                //   available.
                //
                // - Entering quantity alone does not add anything
                //   to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);