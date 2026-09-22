const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Kambing Price',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_021 - Enter Kambing Price',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '30',
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
                // STEP 9 - VERIFY QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 10 - VERIFY PRICE INITIALLY EMPTY
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toHaveValue('');


                // =================================================
                // STEP 11 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 12 - VERIFY GOAT PRICE
                // =================================================

                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 13 - VERIFY QUANTITY REMAINS UNCHANGED
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 14 - CLEAR GOAT PRICE
                // =================================================

                await zakatPage.clearGoatPrice();


                // =================================================
                // STEP 15 - VERIFY PRICE CLEARED
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toHaveValue(
                    '',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 16 - VERIFY QUANTITY STILL UNCHANGED
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 17 - RE-ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 18 - VERIFY RE-ENTERED PRICE
                // =================================================

                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 19 - VERIFY FINAL QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 20 - VERIFY CART REMAINS EMPTY
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
                // 1. User can enter 30 Kambing/Biri-Biri.
                //
                // 2. User can enter RM1,000 as the current
                //    price of one goat.
                //
                // 3. The entered price is displayed correctly.
                //
                // 4. Clearing the price does not clear quantity.
                //
                // 5. User can re-enter the price successfully.
                //
                // 6. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);