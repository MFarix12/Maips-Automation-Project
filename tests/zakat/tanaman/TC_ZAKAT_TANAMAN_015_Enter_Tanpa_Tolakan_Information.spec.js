const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tanpa Tolakan Information',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_015 - Enter Tanpa Tolakan Information',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    weight: '1000',

                    sales: '50000',

                    incentive: '1000'
                };


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


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT TANPA TOLAKAN
                // =================================================

                await zakatPage.selectTanpaTolakan();


                // =================================================
                // STEP 7 - VERIFY TANPA TOLAKAN
                // =================================================

                await zakatPage.verifyTanpaTolakanSelected();


                // =================================================
                // STEP 8 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 9 - ENTER CROP SALES
                // =================================================

                await zakatPage.enterCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 10 - ENTER INCENTIVE
                // =================================================

                await zakatPage.enterIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 11 - VERIFY CROP WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 12 - VERIFY CROP SALES
                // =================================================

                await zakatPage.verifyCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 13 - VERIFY INCENTIVE
                // =================================================

                await zakatPage.verifyIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 14 - VERIFY ALL TANPA TOLAKAN DATA
                // =================================================

                await zakatPage.verifyTanpaTolakanInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive
                });


                // =================================================
                // STEP 15 - VERIFY PRODUCTION COST IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.addToCartButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Calculation method:
                //
                // Tanpa Tolakan
                //
                // User enters:
                //
                // Berat Hasil Tanaman = 1000 kg
                // Hasil Jualan        = 50000
                // Insentif            = 1000
                //
                // All applicable values remain correctly entered.
                //
                // Kos Pengeluaran is not displayed because
                // Tanpa Tolakan does not use production cost.
                //
                // Pengiraan remains displayed.
                //
                // Masuk Troli remains available.
                //
                // =================================================
            }
        );
    }
);