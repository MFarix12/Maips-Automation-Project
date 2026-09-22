const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Above Nisab',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_019 - Verify Above Nisab State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    nisab: 653,

                    weight: '1000',

                    sales: '50000',

                    incentive: '1000',

                    productionCost: '5000'
                };


                // =================================================
                // VERIFY TEST DATA CONDITION
                // =================================================

                expect(
                    Number(testData.weight)
                ).toBeGreaterThan(
                    testData.nisab
                );


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TANAMAN
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAGE
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
                // STEP 6 - VERIFY YEAR 2026
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 7 - VERIFY 2026 NISAB
                // =================================================

                await zakatPage.verify2026Nisab();


                // =================================================
                // STEP 8 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();


                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 9 - ENTER ABOVE-NISAB WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 10 - VERIFY WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 11 - ENTER CROP SALES
                // =================================================

                await zakatPage.enterCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 12 - ENTER INCENTIVE
                // =================================================

                await zakatPage.enterIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 13 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 14 - VERIFY ALL INPUT DATA
                // =================================================

                await zakatPage.verifyTolakKosInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive,
                    productionCost: testData.productionCost
                });


                // =================================================
                // STEP 15 - VERIFY ABOVE-NISAB CONDITION
                // =================================================

                expect(
                    Number(testData.weight)
                ).toBeGreaterThan(
                    testData.nisab
                );


                // =================================================
                // STEP 16 - VERIFY ABOVE-NISAB UI STATE
                // =================================================

                await zakatPage.verifyAboveNisabState();


                // =================================================
                // STEP 17 - VERIFY BELOW-NISAB MESSAGE HIDDEN
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY NET BALANCE SECTION
                // =================================================

                await expect(
                    zakatPage.netBalanceLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY MASUK TROLI
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
                // Tahun / Haul = 2026
                //
                // Nisab = 653 kg
                //
                // Berat Hasil Tanaman = 1000 kg
                //
                // 1000 kg > 653 kg
                //
                // Therefore:
                //
                // - Crop weight is above nisab.
                //
                // - Below-nisab warning is NOT displayed.
                //
                // - Pengiraan remains available.
                //
                // - Jumlah / Baki Bersih remains available.
                //
                // - Masuk Troli remains available.
                //
                // We do not hardcode a zakat amount because the
                // previous tests showed that the actual MAIPS
                // calculation output should be observed directly.
                //
                // =================================================
            }
        );
    }
);