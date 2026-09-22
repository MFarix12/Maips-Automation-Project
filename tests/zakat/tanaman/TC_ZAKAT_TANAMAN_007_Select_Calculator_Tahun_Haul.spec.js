const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Calculator Tahun / Haul',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_007 - Select Calculator Tahun Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TANAMAN
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    2026
                );


                // =================================================
                // STEP 6 - SELECT 2025
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    2025
                );


                // =================================================
                // STEP 7 - VERIFY 2025
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    2025
                );


                // =================================================
                // STEP 8 - SELECT 2024
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    2024
                );


                // =================================================
                // STEP 9 - VERIFY 2024
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    2024
                );


                // =================================================
                // STEP 10 - SELECT 2026 AGAIN
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    2026
                );


                // =================================================
                // STEP 11 - VERIFY 2026
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    2026
                );


                // =================================================
                // STEP 12 - VERIFY CALCULATOR REMAINS FUNCTIONAL
                // =================================================

                await expect(
                    zakatPage.cropWeightField
                ).toBeVisible();

                await expect(
                    zakatPage.cropWeightField
                ).toBeEnabled();

                await expect(
                    zakatPage.tolakKosOption
                ).toBeVisible();

                await expect(
                    zakatPage.tanpaTolakanOption
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User can change calculator Tahun/Haul:
                //
                // 2026 → 2025 → 2024 → 2026
                //
                // The selected year is correctly displayed after
                // every selection.
                //
                // Calculator remains open and functional.
                //
                // =================================================
            }
        );
    }
);