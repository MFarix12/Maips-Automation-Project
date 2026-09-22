const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tolak Kos Zakat Calculation',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_013 - Verify Tolak Kos Zakat Calculation',
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
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();

                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 6 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 7 - ENTER CROP SALES
                // =================================================

                await zakatPage.enterCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 8 - ENTER INCENTIVE
                // =================================================

                await zakatPage.enterIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 9 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyTolakKosInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive,
                    productionCost: testData.productionCost
                });


                // =================================================
                // STEP 11 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY NET BALANCE SECTION
                // =================================================

                await expect(
                    zakatPage.netBalanceLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - GET ACTUAL MAIPS RESULT
                // =================================================

                const calculationText =
                    await zakatPage.getTolakKosZakatResult();


                // =================================================
                // STEP 14 - VERIFY CALCULATION CONTENT
                // =================================================

                expect(
                    calculationText
                ).toBeTruthy();


                expect(
                    calculationText
                ).toContain(
                    'Pengiraan'
                );


                expect(
                    calculationText
                ).toContain(
                    'Jumlah / Baki Bersih'
                );


                // =================================================
                // STEP 15 - VERIFY RESULT CONTAINS RM VALUE
                // =================================================

                const rmValues =
                    calculationText.match(
                        /RM\s*[\d,.]+/g
                    );


                expect(
                    rmValues
                ).not.toBeNull();


                expect(
                    rmValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 16 - PRINT RM VALUES
                // =================================================

                console.log(
                    '\nDetected RM values:'
                );


                console.log(
                    rmValues
                );


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
                // The Tolak Kos calculation is generated after:
                //
                // Berat Hasil Tanaman = 1000 kg
                // Hasil Jualan        = 50000
                // Insentif            = 1000
                // Kos Pengeluaran     = 5000
                //
                // The Pengiraan section is displayed.
                //
                // Jumlah / Baki Bersih is displayed.
                //
                // MAIPS produces monetary calculation result(s).
                //
                // The exact rate/amount is not hardcoded until the
                // actual UI output is confirmed.
                //
                // =================================================
            }
        );
    }
);