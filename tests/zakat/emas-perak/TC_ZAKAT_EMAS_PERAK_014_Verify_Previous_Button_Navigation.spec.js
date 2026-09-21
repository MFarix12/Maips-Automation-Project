const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Previous Button Navigation',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_014 - Verify Previous Button Navigation',
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
                // STEP 6 - CLICK NEXT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 7 - VERIFY FIRST STEP IS HIDDEN
                // =================================================

                await expect(
                    zakatPage.calculatorGoldSection
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY PREVIOUS BUTTON
                // =================================================

                await expect(
                    zakatPage.previousButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.previousButton
                ).toBeEnabled();


                // =================================================
                // STEP 9 - CLICK PREVIOUS
                // =================================================

                await zakatPage.clickPrevious();


                // =================================================
                // STEP 10 - VERIFY FIRST STEP RETURNS
                // =================================================

                await expect(
                    zakatPage.calculatorGoldSection
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY GOLD TABLE RETURNS
                // =================================================

                await expect(
                    zakatPage.gold24KLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.gold22KLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.gold18KLabel
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.gold9KLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY ENTERED DATA IS RETAINED
                // =================================================

                await zakatPage.verifyGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 13 - VERIFY NEXT BUTTON AVAILABLE AGAIN
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
                // EXPECTED RESULT
                // =================================================
                //
                // 1. User opens Zakat Emas/Perak calculator.
                //
                // 2. User enters:
                //    24K/995/999 = 5
                //
                // 3. User clicks Seterusnya.
                //
                // 4. Calculator moves to the next step.
                //
                // 5. User clicks Sebelum.
                //
                // 6. "Emas yang Dimiliki" is displayed again.
                //
                // 7. Gold purity table is displayed again.
                //
                // 8. Previously entered value is retained:
                //    24K/995/999 = 5
                //
                // 9. Seterusnya is available again.
                //
                // No cart item is created.
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);