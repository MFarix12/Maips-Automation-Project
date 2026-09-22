const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Enter Kambing Biri-Biri Quantity',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_020 - Enter Kambing Biri-Biri Quantity',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '30'
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
                // STEP 8 - VERIFY INITIAL QUANTITY EMPTY
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toHaveValue('');


                // =================================================
                // STEP 9 - ENTER QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 10 - VERIFY QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 11 - CLEAR QUANTITY
                // =================================================

                await zakatPage.clearGoatSheepQuantity();


                // =================================================
                // STEP 12 - VERIFY QUANTITY CLEARED
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toHaveValue(
                    '',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - RE-ENTER QUANTITY
                // =================================================

                await zakatPage.enterGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 14 - VERIFY RE-ENTERED QUANTITY
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 15 - VERIFY PRICE REMAINS EMPTY
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toHaveValue('');


                // =================================================
                // STEP 16 - VERIFY CART REMAINS EMPTY
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
                // 1. User can enter 30 into the
                //    Kambing/Biri-Biri quantity field.
                //
                // 2. The entered quantity is displayed correctly.
                //
                // 3. User can clear the quantity.
                //
                // 4. User can re-enter the quantity.
                //
                // 5. Harga Semasa Seekor Kambing remains empty.
                //
                // 6. No item is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);