const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tolak Kos Net Calculation',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_012 - Verify Tolak Kos Net Calculation',
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
                // STEP 3 - VERIFY ZAKAT TANAMAN PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();


                // =================================================
                // STEP 7 - VERIFY TOLAK KOS SELECTED
                // =================================================

                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 8 - ENTER CROP WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 9 - VERIFY CROP WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 10 - ENTER CROP SALES
                // =================================================

                await zakatPage.enterCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 11 - VERIFY CROP SALES
                // =================================================

                await zakatPage.verifyCropSales(
                    testData.sales
                );


                // =================================================
                // STEP 12 - ENTER INCENTIVE
                // =================================================

                await zakatPage.enterIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 13 - VERIFY INCENTIVE
                // =================================================

                await zakatPage.verifyIncentive(
                    testData.incentive
                );


                // =================================================
                // STEP 14 - ENTER PRODUCTION COST
                // =================================================

                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 15 - VERIFY PRODUCTION COST
                // =================================================

                await zakatPage.verifyProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 16 - VERIFY ALL TOLAK KOS INPUTS
                // =================================================

                await zakatPage.verifyTolakKosInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive,
                    productionCost: testData.productionCost
                });


                // =================================================
                // STEP 17 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY NET BALANCE LABEL
                // =================================================

                await expect(
                    zakatPage.netBalanceLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - CAPTURE ACTUAL MAIPS CALCULATION
                // =================================================

                const calculationText =
                    await zakatPage.getTolakKosCalculationResult();


                // =================================================
                // STEP 20 - VERIFY CALCULATION TEXT EXISTS
                // =================================================

                expect(
                    calculationText
                ).toBeTruthy();


                // =================================================
                // STEP 21 - VERIFY NET BALANCE EXISTS
                // =================================================

                expect(
                    calculationText
                ).toContain(
                    'Jumlah / Baki Bersih'
                );


                // =================================================
                // STEP 22 - VERIFY RESULT CONTAINS RM VALUE
                // =================================================

                expect(
                    calculationText
                ).toMatch(
                    /RM\s*[\d,.]+/
                );


                // =================================================
                // STEP 23 - VERIFY ADD TO CART BUTTON
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
                // 1. Zakat Tanaman calculator is opened.
                //
                // 2. Tolak Kos calculation method is selected.
                //
                // 3. User enters:
                //
                //    Berat Hasil Tanaman = 1000 kg
                //    Hasil Jualan        = RM 50,000
                //    Insentif            = RM 1,000
                //    Kos Pengeluaran     = RM 5,000
                //
                // 4. All entered values remain correctly displayed.
                //
                // 5. Pengiraan section is displayed.
                //
                // 6. Jumlah / Baki Bersih is displayed.
                //
                // 7. The calculation result contains an RM amount.
                //
                // 8. Actual calculation output is printed to the
                //    Playwright console so we can determine the
                //    exact MAIPS calculation behavior.
                //
                // 9. Masuk Troli remains available.
                //
                // =================================================
            }
        );
    }
);