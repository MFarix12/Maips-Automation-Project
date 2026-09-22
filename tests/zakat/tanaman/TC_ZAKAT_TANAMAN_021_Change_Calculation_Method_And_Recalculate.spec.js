const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Change Calculation Method',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_021 - Change Calculation Method and Recalculate',
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


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - VERIFY 2026 NISAB
                // =================================================

                await zakatPage.verify2026Nisab();


                // =================================================
                // STEP 7 - SELECT TOLAK KOS
                // =================================================

                await zakatPage.selectTolakKos();


                await zakatPage.verifyTolakKosSelected();


                // =================================================
                // STEP 8 - ENTER TOLAK KOS INFORMATION
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.weight
                );


                await zakatPage.enterCropSales(
                    testData.sales
                );


                await zakatPage.enterIncentive(
                    testData.incentive
                );


                await zakatPage.enterProductionCost(
                    testData.productionCost
                );


                // =================================================
                // STEP 9 - VERIFY TOLAK KOS INFORMATION
                // =================================================

                await zakatPage.verifyTolakKosInformation({

                    weight:
                        testData.weight,

                    sales:
                        testData.sales,

                    incentive:
                        testData.incentive,

                    productionCost:
                        testData.productionCost
                });


                // =================================================
                // STEP 10 - VERIFY PRODUCTION COST IS DISPLAYED
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - CAPTURE TOLAK KOS RESULT
                // =================================================

                const tolakKosText =
                    await zakatPage
                        .calculatorContainer
                        .innerText();


                expect(
                    tolakKosText
                ).toBeTruthy();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'BEFORE METHOD CHANGE - TOLAK KOS'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    tolakKosText
                );


                // =================================================
                // STEP 12 - CHANGE TO TANPA TOLAKAN
                // =================================================

                await zakatPage
                    .changeToTanpaTolakanAndVerify();


                // =================================================
                // STEP 13 - VERIFY TANPA TOLAKAN STATE
                // =================================================

                await zakatPage
                    .verifyTanpaTolakanSelected();


                // =================================================
                // STEP 14 - VERIFY WEIGHT REMAINS
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.weight
                );


                // =================================================
                // STEP 15 - VERIFY SALES FIELD
                // =================================================

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY INCENTIVE FIELD
                // =================================================

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY PRODUCTION COST IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.productionCostField
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - CAPTURE TANPA TOLAKAN RESULT
                // =================================================

                const tanpaTolakanText =
                    await zakatPage
                        .calculatorContainer
                        .innerText();


                expect(
                    tanpaTolakanText
                ).toBeTruthy();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'AFTER METHOD CHANGE - TANPA TOLAKAN'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    tanpaTolakanText
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 19 - VERIFY CALCULATION SECTION
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


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
                // 1. Calculator initially uses Tolak Kos.
                //
                // 2. Kos Pengeluaran is available under
                //    Tolak Kos.
                //
                // 3. User changes calculation method to
                //    Tanpa Tolakan.
                //
                // 4. Calculator updates without requiring the
                //    user to reopen the calculator.
                //
                // 5. Kos Pengeluaran is no longer displayed.
                //
                // 6. Berat Hasil Tanaman remains available.
                //
                // 7. Hasil Jualan and Insentif remain available.
                //
                // 8. Pengiraan remains displayed.
                //
                // 9. Jumlah / Baki Bersih remains displayed.
                //
                // 10. Masuk Troli remains available.
                //
                // Exact monetary values are intentionally not
                // hardcoded because they should follow the actual
                // calculation generated by MAIPs.
                //
                // =================================================
            }
        );
    }
);