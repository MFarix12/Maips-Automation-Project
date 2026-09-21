const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Change Calculator Tahun/Haul',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_010 - Change Calculator Tahun/Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const initialYear = '2025';
                const updatedYear = '2026';


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
                // STEP 5 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT INITIAL YEAR
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    initialYear
                );


                // =================================================
                // STEP 7 - VERIFY INITIAL YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    initialYear
                );


                // =================================================
                // STEP 8 - CHANGE YEAR
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    updatedYear
                );


                // =================================================
                // STEP 9 - VERIFY UPDATED YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    updatedYear
                );


                // =================================================
                // STEP 10 - VERIFY OLD YEAR IS REPLACED
                // =================================================

                await expect(
                    zakatPage.calculatorHaulInput
                ).not.toHaveValue(
                    initialYear
                );


                // =================================================
                // STEP 11 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorSavingsField
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial Tahun/Haul:
                //
                // 2025
                //
                // User changes:
                //
                // 2025
                //   ↓
                // 2026
                //
                // Expected:
                //
                // - Calculator Tahun/Haul becomes 2026
                // - Previous value 2025 is replaced
                // - Calculator remains open
                // - Jumlah Simpanan remains available
                // - Masuk Troli remains available
                //
                // =================================================
            }
        );
    }
);