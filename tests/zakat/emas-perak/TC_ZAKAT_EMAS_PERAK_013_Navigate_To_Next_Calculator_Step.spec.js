const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Calculator Navigation',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_013 - Navigate To Next Calculator Step',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);

                const goldType = '24K/995/999';
                const goldWeight = '5';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT EMAS / PERAK
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 4 - VERIFY FIRST STEP
                // =================================================

                await expect(
                    zakatPage.calculatorGoldSection
                ).toBeVisible({
                    timeout: 15000
                });


                await zakatPage.verifyGoldTable();


                // =================================================
                // STEP 5 - ENTER GOLD WEIGHT
                // =================================================

                await zakatPage.enterGoldWeight(
                    goldType,
                    goldWeight
                );


                await zakatPage.verifyGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 6 - VERIFY NEXT BUTTON
                // =================================================

                await expect(
                    zakatPage.nextButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.nextButton
                ).toBeEnabled();


                // =================================================
                // STEP 7 - CLICK NEXT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 8 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY FIRST STEP IS NO LONGER VISIBLE
                // =================================================

                await expect(
                    zakatPage.calculatorGoldSection
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY GOLD TABLE IS NO LONGER VISIBLE
                // =================================================

                await expect(
                    zakatPage.gold24KLabel
                ).toBeHidden({
                    timeout: 15000
                });


                await expect(
                    zakatPage.gold22KLabel
                ).toBeHidden({
                    timeout: 15000
                });


                await expect(
                    zakatPage.gold18KLabel
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY NAVIGATION CONTROL
                // =================================================

                /*
                 * After leaving the first step, the calculator
                 * should provide a way to navigate back.
                 */

                await expect(
                    zakatPage.previousButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.previousButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Zakat Emas/Perak calculator opens
                // - Emas yang Dimiliki is initially displayed
                // - User enters gold weight
                // - User clicks Seterusnya
                // - Calculator remains open
                // - Emas yang Dimiliki is no longer displayed
                // - First-step gold table is no longer displayed
                // - "Sebelum" is available on the next step
                //
                // This confirms successful navigation without
                // assuming the contents of Step 2.
                //
                // =================================================
            }
        );
    }
);