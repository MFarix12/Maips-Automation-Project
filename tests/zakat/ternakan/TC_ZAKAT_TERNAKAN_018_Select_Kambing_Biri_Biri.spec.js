const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Select Kambing Biri-Biri',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_018 - Select Kambing Biri-Biri',
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
                // STEP 5 - VERIFY HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY DEFAULT LEMBU/KERBAU
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 7 - SELECT KAMBING/BIRI-BIRI
                // =================================================

                await zakatPage.selectGoatSheep();


                // =================================================
                // STEP 8 - VERIFY KAMBING/BIRI-BIRI MODE
                // =================================================

                await zakatPage.verifyGoatSheepSelection();


                // =================================================
                // STEP 9 - VERIFY QUANTITY FIELD EMPTY
                // =================================================

                await expect(
                    zakatPage.goatSheepQuantityField
                ).toHaveValue('');


                // =================================================
                // STEP 10 - VERIFY PRICE FIELD EMPTY
                // =================================================

                await expect(
                    zakatPage.goatPriceField
                ).toHaveValue('');


                // =================================================
                // STEP 11 - VERIFY CATTLE INPUTS ARE NOT VISIBLE
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toBeHidden({
                    timeout: 15000
                });


                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeHidden({
                    timeout: 15000
                });


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CART STILL EMPTY
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
                // 1. Calculator initially displays Lembu/Kerbau.
                //
                // 2. User can select Kambing/Biri-Biri.
                //
                // 3. Kambing/Biri-Biri quantity field is displayed.
                //
                // 4. Harga Semasa Seekor Kambing is displayed.
                //
                // 5. Both Kambing fields are enabled and empty.
                //
                // 6. Lembu/Kerbau-specific fields are no longer
                //    displayed.
                //
                // 7. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);