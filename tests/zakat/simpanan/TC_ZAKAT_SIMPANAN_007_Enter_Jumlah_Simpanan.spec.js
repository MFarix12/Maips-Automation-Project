const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Enter Jumlah Simpanan',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_007 - Enter Jumlah Simpanan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const jumlahSimpanan = '1000';


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
                // STEP 6 - SELECT CALCULATOR TAHUN / HAUL
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 7 - VERIFY SELECTED TAHUN / HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 8 - ENTER JUMLAH SIMPANAN
                // =================================================

                await zakatPage.enterJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 9 - VERIFY JUMLAH SIMPANAN
                // =================================================

                await zakatPage.verifyJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 10 - VERIFY CALCULATOR REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible();

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Calculator opens successfully
                // - Tahun/Haul 2026 can be selected
                // - User can enter 1000 into Jumlah Simpanan
                // - Jumlah Simpanan retains the entered value
                // - Calculator remains available
                //
                // No item is added to Bakul Bayaran yet.
                //
                // =================================================
            }
        );
    }
);