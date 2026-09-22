const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Verify Kambing Biri-Biri Fields',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_019 - Verify Kambing Biri-Biri Fields',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026'
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
                // STEP 7 - VERIFY KAMBING/BIRI-BIRI SELECTION
                // =================================================

                await zakatPage.verifyGoatSheepSelection();


                // =================================================
                // STEP 8 - VERIFY QUANTITY FIELD VISIBLE
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY QUANTITY FIELD ENABLED
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY QUANTITY FIELD EMPTY
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toHaveValue('');


                // =================================================
                // STEP 11 - VERIFY GOAT PRICE FIELD VISIBLE
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY GOAT PRICE FIELD ENABLED
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toBeEnabled();


                // =================================================
                // STEP 13 - VERIFY GOAT PRICE FIELD EMPTY
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toHaveValue('');


                // =================================================
                // STEP 14 - VERIFY CATTLE QUANTITY FIELD HIDDEN
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY MALE CATTLE PRICE HIDDEN
                // =================================================

                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY FEMALE CATTLE PRICE HIDDEN
                // =================================================

                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY RESULT SECTION EXISTS
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
                // STEP 18 - VERIFY INITIAL RESULT RM 0.00
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
                // STEP 19 - VERIFY MASUK TROLI EXISTS
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
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
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Kambing/Biri-Biri can be selected.
                //
                // 2. Bilangan Kambing/Biri-Biri field is visible,
                //    enabled and initially empty.
                //
                // 3. Harga Semasa Seekor Kambing field is visible,
                //    enabled and initially empty.
                //
                // 4. Lembu/Kerbau-specific fields are hidden.
                //
                // 5. Result section is displayed.
                //
                // 6. Initial calculated amount is RM 0.00.
                //
                // 7. Bakul Bayaran remains empty.
                //
                // =================================================
            }
        );
    }
);