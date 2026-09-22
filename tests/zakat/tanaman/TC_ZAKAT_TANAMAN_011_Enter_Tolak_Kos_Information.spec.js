const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tolak Kos Information',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_011 - Enter Tolak Kos Information',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    weight: '1000',

                    sales: '50000',

                    incentive: '1000',

                    productionCost: '5000'
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
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 4 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();

                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 5 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 6 - ENTER CROP SALES
                // =================================================

                await zakatPage.enterCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 7 - ENTER INCENTIVE
                // =================================================

                await zakatPage.enterIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 8 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 9 - VERIFY CROP WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 10 - VERIFY CROP SALES
                // =================================================

                await zakatPage.verifyCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 11 - VERIFY INCENTIVE
                // =================================================

                await zakatPage.verifyIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 12 - VERIFY PRODUCTION COST
                // =================================================

                await zakatPage.verifyProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 13 - VERIFY ALL INPUTS TOGETHER
                // =================================================

                await zakatPage.verifyTolakKosInformation(
                    testData
                );


                // =================================================
                // STEP 14 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY MASUK TROLI
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
                // Tolak Kos accepts:
                //
                // Berat Hasil Tanaman = 1000 kg
                // Hasil Jualan        = RM 50,000
                // Insentif            = RM 1,000
                // Kos Pengeluaran     = RM 5,000
                //
                // All entered values remain in their respective
                // fields.
                //
                // The calculation section remains available.
                //
                // No cart item is created.
                //
                // =================================================
            }
        );
    }
);