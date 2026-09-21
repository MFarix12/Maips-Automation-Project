const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Select Tahun/Haul',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_003 - Select Tahun/Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN BAYARAN ZAKAT
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN ZAKAT WANG SIMPANAN
                // =================================================

                await zakatPage.openZakatSimpanan();


                // =================================================
                // STEP 4 - VERIFY MODULE
                // =================================================

                await zakatPage.verifyZakatSimpananPage();


                // =================================================
                // STEP 5 - OPEN TAHUN / HAUL
                // =================================================

                await zakatPage.openHaulSelection();


                // =================================================
                // STEP 6 - VERIFY YEAR OPTION EXISTS
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
                // STEP 7 - SELECT YEAR
                // =================================================

                await yearOption.click();


                // =================================================
                // STEP 8 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 9 - VERIFY FORM REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User can:
                //
                // Tahun/Haul
                //      ↓
                // Open year dropdown
                //      ↓
                // Select 2026
                //      ↓
                // Tahun/Haul displays 2026
                //
                // Zakat Wang Simpanan form remains available.
                // =================================================

            }
        );
    }
);