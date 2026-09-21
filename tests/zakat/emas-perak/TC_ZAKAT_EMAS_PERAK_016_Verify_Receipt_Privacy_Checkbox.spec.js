const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Receipt Privacy Option',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_016 - Verify Receipt Privacy Checkbox',
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
                // STEP 4 - ENTER GOLD WEIGHT
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
                // STEP 5 - GO TO RESULT SCREEN
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 6 - VERIFY RESULT SCREEN
                // =================================================

                await zakatPage.verifyGoldCalculationResult();


                // =================================================
                // STEP 7 - VERIFY CHECKBOX DEFAULT STATE
                // =================================================

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).toBeEnabled();

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).not.toBeChecked();


                // =================================================
                // STEP 8 - CHECK PRIVACY OPTION
                // =================================================

                await zakatPage.hideMetalHoldingCheckbox.check();


                // =================================================
                // STEP 9 - VERIFY CHECKED
                // =================================================

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).toBeChecked();


                // =================================================
                // STEP 10 - VERIFY RESULT SCREEN REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.totalGoldPriceLabel
                ).toBeVisible();

                await expect(
                    zakatPage.zakatPaymentLabel
                ).toBeVisible();

                await expect(
                    zakatPage.previousButton
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 11 - UNCHECK PRIVACY OPTION
                // =================================================

                await zakatPage.hideMetalHoldingCheckbox.uncheck();


                // =================================================
                // STEP 12 - VERIFY UNCHECKED
                // =================================================

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).not.toBeChecked();


                // =================================================
                // STEP 13 - CHECK AGAIN
                // =================================================

                await zakatPage.hideMetalHoldingCheckbox.check();


                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).toBeChecked();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Receipt privacy checkbox is displayed
                // - Checkbox is unchecked by default
                // - User can select the checkbox
                // - Checkbox becomes checked
                // - User can deselect the checkbox
                // - Checkbox becomes unchecked
                // - User can select it again
                // - Calculation result remains displayed
                // - Masuk Troli remains available
                //
                // No cart item is created in this test.
                //
                // =================================================
            }
        );
    }
);