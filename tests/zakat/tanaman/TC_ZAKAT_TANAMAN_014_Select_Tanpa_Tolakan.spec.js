const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tanpa Tolakan',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_014 - Select Tanpa Tolakan',
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
                // STEP 3 - VERIFY ZAKAT TANAMAN PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    '1000'
                );


                await zakatPage.verifyCropWeight(
                    '1000'
                );


                // =================================================
                // STEP 6 - VERIFY CALCULATION METHODS
                // =================================================

                await expect(
                    zakatPage.tolakKosOption
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.tanpaTolakanOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - SELECT TANPA TOLAKAN
                // =================================================

                await zakatPage.selectTanpaTolakan();


                // =================================================
                // STEP 8 - VERIFY TANPA TOLAKAN STATE
                // =================================================

                await zakatPage.verifyTanpaTolakanSelected();


                // =================================================
                // STEP 9 - VERIFY HASIL JUALAN
                // =================================================

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();


                await expect(
                    zakatPage.cropSalesField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY INSENTIF
                // =================================================

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();


                await expect(
                    zakatPage.incentiveField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY KOS PENGELUARAN HIDDEN
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User selects:
                //
                //      Tanpa Tolakan
                //
                // The calculator remains available.
                //
                // Hasil Jualan Tanaman:
                //      Visible
                //
                // Insentif:
                //      Visible
                //
                // Kos Pengeluaran:
                //      Hidden
                //
                // Pengiraan:
                //      Visible
                //
                // Masuk Troli:
                //      Visible
                //
                // =================================================
            }
        );
    }
);