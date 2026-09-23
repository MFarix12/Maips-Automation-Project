const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Calculator Tahun Haul',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_009 - Select Calculator Tahun Haul',
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
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY DEFAULT CALCULATOR YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.defaultYear
                );


                // =================================================
                // STEP 6 - SELECT 2024
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    testData.firstYear
                );


                // =================================================
                // STEP 7 - VERIFY 2024
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.firstYear
                );


                // =================================================
                // STEP 8 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - SELECT 2025
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    testData.secondYear
                );


                // =================================================
                // STEP 10 - VERIFY 2025
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.secondYear
                );


                // =================================================
                // STEP 11 - SELECT 2026
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    testData.finalYear
                );


                // =================================================
                // STEP 12 - VERIFY 2026
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.finalYear
                );


                // =================================================
                // STEP 13 - VERIFY UNTUNG RUGI METHOD STILL SHOWN
                // =================================================

                await expect(
                    zakatPage.untungRugiMethod
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY INPUT FIELDS STILL AVAILABLE
                // =================================================

                await expect(
                    zakatPage.hasilJualanField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.perbelanjaanKosField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY NOTHING ADDED TO CART
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
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
                // 1. Calculator opens successfully.
                //
                // 2. Default calculator Tahun/Haul is 2026.
                //
                // 3. User can select 2024.
                //
                // 4. Calculator displays 2024.
                //
                // 5. User can select 2025.
                //
                // 6. Calculator displays 2025.
                //
                // 7. User can select 2026 again.
                //
                // 8. Calculator displays 2026.
                //
                // 9. Calculator remains open after changing year.
                //
                // 10. Untung Rugi fields remain available.
                //
                // 11. Changing calculator year does not add
                //     anything to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);