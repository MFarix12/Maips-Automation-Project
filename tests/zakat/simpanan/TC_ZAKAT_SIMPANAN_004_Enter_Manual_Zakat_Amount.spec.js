const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Enter Manual Zakat Amount',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_004 - Enter Manual Zakat Amount',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const manualAmount = '1000.00';


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
                // STEP 5 - SELECT TAHUN / HAUL
                // =================================================

                await zakatPage.selectHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 6 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 7 - ENTER MANUAL ZAKAT AMOUNT
                // =================================================

                await zakatPage.enterManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 8 - VERIFY ENTERED AMOUNT
                // =================================================

                await zakatPage.verifyManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 9 - VERIFY PAGE REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - User can select Tahun/Haul 2026
                // - User can enter 1000.00 in Jumlah Bayaran
                // - Jumlah Bayaran retains the entered value
                // - Zakat Wang Simpanan page remains available
                //
                // No item is added to Bakul Bayaran because
                // Masuk Troli has not been clicked.
                //
                // =================================================
            }
        );
    }
);