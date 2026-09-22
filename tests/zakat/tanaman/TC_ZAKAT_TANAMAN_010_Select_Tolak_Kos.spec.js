const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tolak Kos',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_010 - Select Tolak Kos',
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

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 4 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    '1000'
                );

                await zakatPage.verifyCropWeight(
                    '1000'
                );


                // =================================================
                // STEP 5 - VERIFY CALCULATION METHODS
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
                // STEP 6 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();


                // =================================================
                // STEP 7 - VERIFY TOLAK KOS STATE
                // =================================================

                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 8 - VERIFY HASIL JUALAN
                // =================================================

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();

                await expect(
                    zakatPage.cropSalesField
                ).toBeEnabled();


                // =================================================
                // STEP 9 - VERIFY INSENTIF
                // =================================================

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();

                await expect(
                    zakatPage.incentiveField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY KOS PENGELUARAN
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeVisible();

                await expect(
                    zakatPage.productionCostField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY CALCULATOR REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User selects:
                //
                //   Kaedah Pengiraan
                //        ↓
                //     Tolak Kos
                //
                // The calculator displays:
                //
                // - Hasil Jualan Tanaman
                // - Insentif
                // - Kos Pengeluaran
                //
                // Kos Pengeluaran is available because the
                // selected method deducts production costs.
                //
                // No cart item is created.
                //
                // =================================================
            }
        );
    }
);