const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Select Tahun Haul',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_003 - Select Tahun Haul',
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
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 4 - GET HAUL INPUT
                // =================================================

                const haulInput =
                    zakatPage.haulFormItem
                        .locator('input');


                // =================================================
                // STEP 5 - VERIFY DEFAULT YEAR = 2026
                // =================================================

                await expect(
                    haulInput
                ).toHaveValue(
                    defaultYear,
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 6 - OPEN YEAR DROPDOWN
                // =================================================

                await zakatPage
                    .openHaulSelection();


                // =================================================
                // STEP 7 - VERIFY 2025 OPTION
                // =================================================

                const yearOption =
                    page.getByRole(
                        'option',
                        {
                            name: selectedYear,
                            exact: true
                        }
                    );


                await expect(
                    yearOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - SELECT 2025
                // =================================================

                await yearOption.click();


                // =================================================
                // STEP 9 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage
                    .verifySelectedHaulYear(
                        selectedYear
                    );


                // =================================================
                // STEP 10 - VERIFY FORM REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY CART REMAINS EMPTY
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
                // STEP 12 - CHANGE BACK TO 2026
                // =================================================

                await zakatPage
                    .selectHaulYear(
                        defaultYear
                    );


                // =================================================
                // STEP 13 - VERIFY 2026
                // =================================================

                await zakatPage
                    .verifySelectedHaulYear(
                        defaultYear
                    );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Default Tahun/Haul is 2026.
                //
                // - User can open the Tahun/Haul dropdown.
                //
                // - User can select 2025.
                //
                // - The field changes to 2025.
                //
                // - Zakat Ternakan form remains available.
                //
                // - No cart item is created merely by changing
                //   Tahun/Haul.
                //
                // - User can change Tahun/Haul back to 2026.
                //
                // =================================================
            }
        );
    }
);