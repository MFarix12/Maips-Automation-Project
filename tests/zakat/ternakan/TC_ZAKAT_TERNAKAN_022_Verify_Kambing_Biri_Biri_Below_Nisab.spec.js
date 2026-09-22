const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Kambing Biri-Biri Below Nisab',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_022 - Verify Kambing Biri-Biri Below Nisab',
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
                // STEP 9 - ENTER GOAT PRICE
                // =================================================

                await zakatPage.enterGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyGoatSheepQuantity(
                    testData.quantity
                );


                await zakatPage.verifyGoatPrice(
                    testData.goatPrice
                );


                // =================================================
                // STEP 11 - VERIFY BELOW NISAB MESSAGE
                // =================================================

                await zakatPage
                    .verifyGoatSheepBelowNisab();


                // =================================================
                // STEP 12 - VERIFY RESULT LABELS
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
                // STEP 13 - VERIFY ZAKAT AMOUNT RM 0.00
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toContainText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


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
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 15 - VERIFY NO CART ITEM
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
                // 1. User selects Kambing/Biri-Biri.
                //
                // 2. User enters:
                //      Quantity = 30
                //      Goat Price = RM1,000
                //
                // 3. MAIPS identifies the livestock quantity
                //    as below Nisab.
                //
                // 4. Below-Nisab information is displayed.
                //
                // 5. Amount payable is RM0.00.
                //
                // 6. No Zakat Ternakan item is added to the cart.
                //
                // =================================================
            }
        );
    }
);