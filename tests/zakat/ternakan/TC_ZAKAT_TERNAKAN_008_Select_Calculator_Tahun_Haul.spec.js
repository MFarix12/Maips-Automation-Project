const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Select Calculator Tahun Haul',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_008 - Select Calculator Tahun Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const defaultYear = '2026';

                const selectedYear = '2025';


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
                // STEP 5 - VERIFY DEFAULT CALCULATOR YEAR
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        defaultYear
                    );


                // =================================================
                // STEP 6 - VERIFY CATTLE FIELDS BEFORE CHANGE
                // =================================================

                await zakatPage
                    .verifyCattleFieldsVisible();


                // =================================================
                // STEP 7 - OPEN CALCULATOR YEAR DROPDOWN
                // =================================================

                await zakatPage
                    .openCalculatorHaulSelection();


                // =================================================
                // STEP 8 - VERIFY 2025 OPTION
                // =================================================

                const year2025Option =
                    page.getByRole(
                        'option',
                        {
                            name: selectedYear,
                            exact: true
                        }
                    );


                await expect(
                    year2025Option
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - SELECT 2025
                // =================================================

                await year2025Option.click();


                // =================================================
                // STEP 10 - VERIFY CALCULATOR YEAR = 2025
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        selectedYear
                    );


                // =================================================
                // STEP 11 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY LIVESTOCK OPTIONS REMAIN
                // =================================================

                await expect(
                    zakatPage.cattleOption
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.goatSheepOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY CATTLE FIELDS REMAIN
                // =================================================

                await zakatPage
                    .verifyCattleFieldsVisible();


                // =================================================
                // STEP 14 - VERIFY CART STILL EMPTY
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
                // STEP 15 - CHANGE CALCULATOR YEAR BACK TO 2026
                // =================================================

                await zakatPage
                    .selectCalculatorHaulYear(
                        defaultYear
                    );


                // =================================================
                // STEP 16 - VERIFY YEAR = 2026
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        defaultYear
                    );


                // =================================================
                // STEP 17 - VERIFY CALCULATOR STILL AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                await zakatPage
                    .verifyCattleFieldsVisible();


                // =================================================
                // STEP 18 - VERIFY NO CART ITEM CREATED
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
                // - Default calculator Tahun/Haul is 2026.
                //
                // - User can open the calculator year dropdown.
                //
                // - User can select 2025.
                //
                // - Calculator Tahun/Haul changes to 2025.
                //
                // - Calculator remains open after changing year.
                //
                // - Livestock options remain available.
                //
                // - Lembu/Kerbau fields remain available.
                //
                // - Changing the year does not add anything
                //   to Bakul Bayaran.
                //
                // - User can change the year back to 2026.
                //
                // =================================================
            }
        );
    }
);