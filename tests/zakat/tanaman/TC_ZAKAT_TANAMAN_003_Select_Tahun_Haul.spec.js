const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tahun / Haul',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_003 - Select Tahun Haul',
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
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    2026
                );


                // =================================================
                // STEP 5 - SELECT 2025
                // =================================================

                await zakatPage.selectHaulYear(
                    2025
                );


                // =================================================
                // STEP 6 - VERIFY 2025
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    2025
                );


                // =================================================
                // STEP 7 - SELECT 2024
                // =================================================

                await zakatPage.selectHaulYear(
                    2024
                );


                // =================================================
                // STEP 8 - VERIFY 2024
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    2024
                );


                // =================================================
                // STEP 9 - SELECT 2026 AGAIN
                // =================================================

                await zakatPage.selectHaulYear(
                    2026
                );


                // =================================================
                // STEP 10 - VERIFY 2026
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    2026
                );


                // =================================================
                // STEP 11 - VERIFY OTHER CONTROLS REMAIN AVAILABLE
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User can change Tahun/Haul:
                //
                // 2026
                //   ↓
                // 2025
                //   ↓
                // 2024
                //   ↓
                // 2026
                //
                // Selected year is correctly displayed after
                // each selection.
                //
                // =================================================
            }
        );
    }
);