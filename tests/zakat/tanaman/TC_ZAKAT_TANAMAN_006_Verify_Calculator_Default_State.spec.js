const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Calculator Default State',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_006 - Verify Calculator Default State',
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


                // =================================================
                // STEP 4 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY DEFAULT STATE
                // =================================================

                await zakatPage.verifyCalculatorDefaultState();


                // =================================================
                // STEP 6 - VERIFY DEFAULT YEAR
                // =================================================

                await expect(
                    zakatPage.calculatorHaulInput
                ).toHaveValue(
                    '2026'
                );


                // =================================================
                // STEP 7 - VERIFY CROP WEIGHT FIELD
                // =================================================

                await expect(
                    zakatPage.cropWeightField
                ).toBeVisible();

                await expect(
                    zakatPage.cropWeightField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY CALCULATION METHODS
                // =================================================

                await expect(
                    zakatPage.tolakKosOption
                ).toBeVisible();

                await expect(
                    zakatPage.tanpaTolakanOption
                ).toBeVisible();


                // =================================================
                // STEP 9 - VERIFY FINANCIAL FIELDS
                // =================================================

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();


                // =================================================
                // STEP 10 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible();


                // =================================================
                // STEP 11 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // When Kalkulator Zakat Tanaman opens:
                //
                // - Calculator is displayed
                // - Tahun/Haul = 2026
                // - Berat Hasil Tanaman (kg) is available
                // - Kaedah Pengiraan is displayed
                // - Tolak Kos is available
                // - Tanpa Tolakan is available
                // - Hasil Jualan Tanaman is available
                // - Insentif is available
                // - Kos Pengeluaran is available when the
                //   applicable calculation method is selected
                // - Pengiraan section is displayed
                // - Masuk Troli is displayed
                //
                // No data is submitted.
                //
                // =================================================
            }
        );
    }
);