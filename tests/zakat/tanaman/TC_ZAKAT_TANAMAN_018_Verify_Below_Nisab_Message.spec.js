const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Below Nisab',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_018 - Verify Below Nisab Message',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    weight: '100',

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
                // STEP 9 - ENTER BELOW-NISAB WEIGHT
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
                // STEP 14 - VERIFY INPUT DATA
                // =================================================

                await zakatPage.verifyTolakKosInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive,
                    productionCost: testData.productionCost
                });


                // =================================================
                // STEP 15 - VERIFY BELOW NISAB MESSAGE
                // =================================================

                const warningMessage =
                    await zakatPage.verifyBelowNisabMessage();


                // =================================================
                // STEP 16 - VERIFY MESSAGE CONTENT
                // =================================================

                expect(
                    warningMessage
                ).toBeTruthy();


                expect(
                    warningMessage
                ).toMatch(
                    /tidak mencapai kadar nisab zakat/i
                );


                // =================================================
                // STEP 17 - VERIFY CALCULATOR REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY MASUK TROLI
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
                // Tahun / Haul:
                // 2026
                //
                // Nisab:
                // 653 kg
                //
                // Entered crop weight:
                // 100 kg
                //
                // 100 kg < 653 kg
                //
                // Therefore MAIPS displays its below-nisab warning:
                //
                // "Jumlah berat hasil tanaman anda tidak mencapai
                //  kadar nisab zakat..."
                //
                // NOTE:
                //
                // We do NOT assert that the calculated zakat amount
                // becomes RM0.00 because the observed MAIPS UI can
                // display a calculated amount together with the
                // below-nisab warning.
                //
                // =================================================
            }
        );
    }
);