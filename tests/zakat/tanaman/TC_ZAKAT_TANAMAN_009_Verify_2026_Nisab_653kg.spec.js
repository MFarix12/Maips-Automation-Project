const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Nisab',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_009 - Verify 2026 Nisab 653kg',
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
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY YEAR = 2026
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    2026
                );


                // =================================================
                // STEP 6 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    '1000'
                );

                await zakatPage.verifyCropWeight(
                    '1000'
                );


                // =================================================
                // STEP 7 - VERIFY NISAB
                // =================================================

                await zakatPage.verify2026Nisab();


                // =================================================
                // STEP 8 - VERIFY NISAB VALUE
                // =================================================

                await expect(
                    zakatPage.nisab653Value
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY CALCULATOR STILL FUNCTIONAL
                // =================================================

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();

                await expect(
                    zakatPage.tolakKosOption
                ).toBeVisible();

                await expect(
                    zakatPage.tanpaTolakanOption
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // For Tahun/Haul 2026:
                //
                // Nisab Zakat Tanaman = 653 kg
                //
                // Calculator continues to display the required
                // calculation fields and controls.
                //
                // This test only verifies the displayed nisab.
                // Below/above-nisab behavior is tested separately.
                //
                // =================================================
            }
        );
    }
);