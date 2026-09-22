const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Change Crop Weight and Recalculate',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_020 - Change Crop Weight and Recalculate',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    nisab: 653,

                    belowNisabWeight: '100',

                    aboveNisabWeight: '1000',

                    sales: '50000',

                    incentive: '1000',

                    productionCost: '5000'
                };


                // =================================================
                // PRE-CONDITION
                // =================================================

                expect(
                    Number(testData.belowNisabWeight)
                ).toBeLessThan(
                    testData.nisab
                );


                expect(
                    Number(testData.aboveNisabWeight)
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
                // STEP 6 - VERIFY YEAR
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
                // STEP 9 - ENTER CALCULATION INFORMATION
                // =================================================

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
                // STEP 10 - ENTER BELOW-NISAB WEIGHT
                // =================================================

                await zakatPage.enterCropWeight(
                    testData.belowNisabWeight
                );


                // =================================================
                // STEP 11 - VERIFY BELOW-NISAB WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.belowNisabWeight
                );


                // =================================================
                // STEP 12 - VERIFY BELOW-NISAB WARNING
                // =================================================

                await zakatPage.verifyBelowNisabMessage();


                // =================================================
                // STEP 13 - VERIFY CALCULATION EXISTS
                // =================================================

                await expect(
                    zakatPage.calculationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - CAPTURE BELOW-NISAB CALCULATION
                // =================================================

                const beforeChangeText =
                    await zakatPage.calculatorContainer.innerText();


                expect(
                    beforeChangeText
                ).toBeTruthy();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'BEFORE CROP WEIGHT CHANGE'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    beforeChangeText
                );


                // =================================================
                // STEP 15 - CHANGE WEIGHT TO 1000 KG
                // =================================================

                await zakatPage.cropWeightField.fill(
                    testData.aboveNisabWeight
                );


                await zakatPage.cropWeightField.press(
                    'Tab'
                );


                // =================================================
                // STEP 16 - VERIFY NEW WEIGHT
                // =================================================

                await zakatPage.verifyCropWeight(
                    testData.aboveNisabWeight
                );


                // =================================================
                // STEP 17 - VERIFY BELOW-NISAB WARNING DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.belowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY ABOVE-NISAB STATE
                // =================================================

                await zakatPage.verifyAboveNisabState();


                // =================================================
                // STEP 19 - VERIFY CALCULATION STILL AVAILABLE
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
                // STEP 20 - CAPTURE UPDATED CALCULATION
                // =================================================

                const afterChangeText =
                    await zakatPage.calculatorContainer.innerText();


                expect(
                    afterChangeText
                ).toBeTruthy();


                console.log(
                    '\n========================================'
                );

                console.log(
                    'AFTER CROP WEIGHT CHANGE'
                );

                console.log(
                    '========================================'
                );

                console.log(
                    afterChangeText
                );

                console.log(
                    '========================================\n'
                );


                // =================================================
                // STEP 21 - VERIFY CALCULATOR REMAINS FUNCTIONAL
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
                // Initial weight:
                // 100 kg
                //
                // 100 kg < 653 kg
                //
                // MAIPS displays the below-nisab warning.
                //
                // Weight is then changed to:
                // 1000 kg
                //
                // 1000 kg > 653 kg
                //
                // MAIPS automatically updates the calculator.
                //
                // The below-nisab warning disappears.
                //
                // Pengiraan and Jumlah / Baki Bersih remain
                // available after recalculation.
                //
                // No page reload or calculator reopening should
                // be required.
                //
                // =================================================
            }
        );
    }
);