const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Select Calculator Tahun/Haul',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_006 - Select Calculator Tahun/Haul',
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
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - OPEN CALCULATOR TAHUN / HAUL
                // =================================================

                await zakatPage.openCalculatorHaulSelection();


                // =================================================
                // STEP 7 - VERIFY YEAR OPTION
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
                // STEP 8 - SELECT YEAR
                // =================================================

                await yearOption.click();


                // =================================================
                // STEP 9 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 10 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorSavingsField
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Zakat Wang Simpanan calculator opens
                // - User can open calculator Tahun/Haul
                // - User can select 2026
                // - Calculator Tahun/Haul displays 2026
                // - Calculator remains open
                // - Jumlah Simpanan remains available
                //
                // =================================================
            }
        );
    }
);