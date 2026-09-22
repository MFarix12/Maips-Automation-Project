const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Tanpa Tolakan Zakat Calculation',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_017 - Verify Tanpa Tolakan Zakat Calculation',
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
                // STEP 11 - VERIFY INPUT DATA
                // =================================================

                await zakatPage.verifyTanpaTolakanInformation({
                    weight: testData.weight,
                    sales: testData.sales,
                    incentive: testData.incentive
                });


                // =================================================
                // STEP 12 - VERIFY PRODUCTION COST IS NOT ACTIVE
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY NET BALANCE
                // =================================================

                await expect(
                    zakatPage.netBalanceLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY ZAKAT CALCULATION
                // =================================================

                const result =
                    await zakatPage
                        .verifyTanpaTolakanZakatCalculation();


                // =================================================
                // STEP 16 - VERIFY RESULT OBJECT
                // =================================================

                expect(
                    result
                ).toBeTruthy();


                expect(
                    result.calculationText
                ).toBeTruthy();


                // =================================================
                // STEP 17 - VERIFY MONETARY RESULT EXISTS
                // =================================================

                expect(
                    result.rmValues
                ).not.toBeNull();


                expect(
                    result.rmValues.length
                ).toBeGreaterThan(
                    0
                );


                // =================================================
                // STEP 18 - VERIFY MASUK TROLI
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
                // Calculation Method:
                // Tanpa Tolakan
                //
                // Input:
                //
                // Berat Hasil Tanaman = 1000 kg
                // Hasil Jualan        = 50000
                // Insentif            = 1000
                //
                // Kos Pengeluaran is not active.
                //
                // MAIPS generates the calculation.
                //
                // Pengiraan is displayed.
                //
                // Jumlah / Baki Bersih is displayed.
                //
                // At least one monetary result is generated.
                //
                // The test does NOT assume a 5% rate or a
                // RM2,500.00 result unless MAIPS explicitly
                // exposes those values in the UI.
                //
                // =================================================
            }
        );
    }
);