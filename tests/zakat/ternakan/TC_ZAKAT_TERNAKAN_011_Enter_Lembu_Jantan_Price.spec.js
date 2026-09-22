const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Lembu Jantan Price',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_011 - Enter Lembu Jantan Price',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '20',
                    malePrice: '2500'
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
                // STEP 6 - VERIFY LEMBU / KERBAU MODE
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
                // STEP 8 - VERIFY QUANTITY = 20
                // =================================================

                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 9 - VERIFY MALE PRICE FIELD
                // =================================================

                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - ENTER MALE PRICE = RM2500
                // =================================================

                await zakatPage
                    .enterMaleCattlePrice(
                        testData.malePrice
                    );


                // =================================================
                // STEP 11 - VERIFY MALE PRICE
                // =================================================

                await zakatPage
                    .verifyMaleCattlePrice(
                        testData.malePrice
                    );


                // =================================================
                // STEP 12 - VERIFY QUANTITY REMAINS 20
                // =================================================

                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 13 - VERIFY FEMALE PRICE FIELD AVAILABLE
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
                // STEP 14 - VERIFY CART REMAINS EMPTY
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
                // STEP 15 - CLEAR MALE PRICE
                // =================================================

                await zakatPage
                    .clearMaleCattlePrice();


                // =================================================
                // STEP 16 - RE-ENTER MALE PRICE
                // =================================================

                await zakatPage
                    .enterMaleCattlePrice(
                        testData.malePrice
                    );


                // =================================================
                // STEP 17 - FINAL VERIFICATION
                // =================================================

                await zakatPage
                    .verifyMaleCattlePrice(
                        testData.malePrice
                    );


                await zakatPage
                    .verifyCattleQuantity(
                        testData.quantity
                    );


                // =================================================
                // STEP 18 - VERIFY CART STILL EMPTY
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
                // - Lembu/Kerbau mode is displayed.
                //
                // - Quantity 20 can be entered.
                //
                // - RM2500 can be entered as the current price
                //   of one male cattle.
                //
                // - The male cattle price field retains 2500.
                //
                // - Quantity remains 20.
                //
                // - Female cattle price field remains available.
                //
                // - User can clear and re-enter the male price.
                //
                // - No item is added to Bakul Bayaran merely
                //   by entering these values.
                //
                // =================================================
            }
        );
    }
);