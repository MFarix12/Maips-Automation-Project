const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Change Jumlah Simpanan',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_009 - Change Jumlah Simpanan and Recalculate',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';

                const initialAmount = '1000';
                const updatedAmount = '2000';


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
                // STEP 6 - SELECT CALCULATOR TAHUN / HAUL
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 7 - ENTER INITIAL JUMLAH SIMPANAN
                // =================================================

                await zakatPage.enterJumlahSimpanan(
                    initialAmount
                );


                // =================================================
                // STEP 8 - VERIFY INITIAL AMOUNT
                // =================================================

                await zakatPage.verifyJumlahSimpanan(
                    initialAmount
                );


                // =================================================
                // STEP 9 - CHANGE JUMLAH SIMPANAN
                // =================================================

                await zakatPage.changeJumlahSimpanan(
                    updatedAmount
                );


                // =================================================
                // STEP 10 - VERIFY UPDATED AMOUNT
                // =================================================

                await zakatPage.verifyJumlahSimpanan(
                    updatedAmount
                );


                // =================================================
                // STEP 11 - VERIFY OLD VALUE IS REPLACED
                // =================================================

                await expect(
                    zakatPage.calculatorSavingsField
                ).not.toHaveValue(
                    initialAmount
                );


                // =================================================
                // STEP 12 - VERIFY CALCULATOR REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial:
                //
                // Jumlah Simpanan = 1000
                //
                // User changes:
                //
                // 1000
                //   ↓
                // 2000
                //
                // Expected:
                //
                // - Old value is replaced
                // - Jumlah Simpanan displays 2000
                // - Calculator remains available
                // - Masuk Troli remains available
                //
                // =================================================
            }
        );
    }
);