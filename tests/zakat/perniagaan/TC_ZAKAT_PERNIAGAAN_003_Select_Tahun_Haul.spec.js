const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Tahun Haul',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_003 - Select Tahun Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    defaultYear: '2026',
                    firstYear: '2024',
                    secondYear: '2025',
                    finalYear: '2026'
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.openZakatPerniagaan();


                // =================================================
                // STEP 3 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.defaultYear
                );


                // =================================================
                // STEP 4 - SELECT 2024
                // =================================================

                await zakatPage.selectMainHaulYear(
                    testData.firstYear
                );


                // =================================================
                // STEP 5 - VERIFY 2024
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.firstYear
                );


                // =================================================
                // STEP 6 - SELECT 2025
                // =================================================

                await zakatPage.selectMainHaulYear(
                    testData.secondYear
                );


                // =================================================
                // STEP 7 - VERIFY 2025
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.secondYear
                );


                // =================================================
                // STEP 8 - SELECT 2026
                // =================================================

                await zakatPage.selectMainHaulYear(
                    testData.finalYear
                );


                // =================================================
                // STEP 9 - VERIFY 2026
                // =================================================

                await zakatPage.verifyMainHaulYear(
                    testData.finalYear
                );


                // =================================================
                // STEP 10 - VERIFY OTHER FORM VALUES UNAFFECTED
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toHaveValue(
                    '0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 11 - VERIFY CALCULATOR STILL AVAILABLE
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 12 - VERIFY CART REMAINS EMPTY
                // =================================================

                await zakatPage.verifyEmptyCart();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. Default Tahun/Haul is 2026.
                //
                // 2. User can change Tahun/Haul to 2024.
                //
                // 3. Selected value changes to 2024.
                //
                // 4. User can change Tahun/Haul to 2025.
                //
                // 5. Selected value changes to 2025.
                //
                // 6. User can change Tahun/Haul back to 2026.
                //
                // 7. Selected value changes to 2026.
                //
                // 8. Jumlah Bayaran remains 0.00.
                //
                // 9. Buka Kalkulator remains available.
                //
                // 10. Bakul Bayaran remains empty.
                //
                // =================================================
            }
        );
    }
);