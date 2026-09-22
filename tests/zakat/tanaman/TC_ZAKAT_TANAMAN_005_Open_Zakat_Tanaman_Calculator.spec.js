const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Open Calculator',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_005 - Open Zakat Tanaman Calculator',
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
                // STEP 4 - VERIFY BUKA KALKULATOR
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
                // STEP 5 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 6 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 7 - VERIFY CORE INPUTS
                // =================================================

                await expect(
                    zakatPage.cropWeightField
                ).toBeVisible();

                await expect(
                    zakatPage.cropWeightField
                ).toBeEnabled();


                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();

                await expect(
                    zakatPage.cropSalesField
                ).toBeEnabled();


                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();

                await expect(
                    zakatPage.incentiveField
                ).toBeEnabled();


                await expect(
                    zakatPage.productionCostField
                ).toBeVisible();

                await expect(
                    zakatPage.productionCostField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible();


                // =================================================
                // STEP 9 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Clicking Buka Kalkulator opens:
                //
                //   Kalkulator Zakat Tanaman
                //
                // Calculator displays:
                //
                // - Tahun/Haul
                // - Berat Hasil Tanaman (kg)
                // - Kaedah Pengiraan
                // - Tolak Kos
                // - Tanpa Tolakan
                // - Hasil Jualan Tanaman
                // - Insentif
                // - Kos Pengeluaran
                // - Pengiraan
                // - Masuk Troli
                //
                // No item is added to the cart.
                //
                // =================================================
            }
        );
    }
);