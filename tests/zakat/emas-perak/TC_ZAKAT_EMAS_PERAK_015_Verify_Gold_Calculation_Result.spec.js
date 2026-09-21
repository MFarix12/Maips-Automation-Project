const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Gold Calculation Result',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_015 - Verify Gold Calculation Result',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

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
                // STEP 5 - CLICK NEXT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 6 - VERIFY RESULT SCREEN
                // =================================================

                await zakatPage.verifyGoldCalculationResult();


                // =================================================
                // STEP 7 - VERIFY GOLD WEIGHT
                // =================================================

                await expect(
                    zakatPage.calculatorContainer.getByText(
                        '5.00 g',
                        {
                            exact: true
                        }
                    )
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY NISAB
                // =================================================

                await expect(
                    zakatPage.calculatorContainer.getByText(
                        '85.00 g',
                        {
                            exact: true
                        }
                    )
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY CURRENT GOLD PRICE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer.getByText(
                        '539.12 RM/g',
                        {
                            exact: true
                        }
                    )
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY TOTAL GOLD VALUE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer.getByText(
                        'RM 2,695.60',
                        {
                            exact: true
                        }
                    )
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY BELOW NISAB STATUS
                // =================================================

                await zakatPage.verifyGoldBelowNisabResult();


                // =================================================
                // STEP 12 - VERIFY 2.5% DISPLAYED ZAKAT
                // =================================================

                await expect(
                    zakatPage.calculatorContainer.getByText(
                        'RM 67.39',
                        {
                            exact: true
                        }
                    )
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY RECEIPT PRIVACY CHECKBOX
                // =================================================

                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).toBeVisible();


                await expect(
                    zakatPage.hideMetalHoldingCheckbox
                ).not.toBeChecked();


                // =================================================
                // STEP 14 - VERIFY BUTTONS
                // =================================================

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
                // EXPECTED RESULT
                // =================================================
                //
                // For 5g of 24K/995/999:
                //
                // Gold Weight:
                // 5.00 g
                //
                // Nisab:
                // 85.00 g
                //
                // Current Gold Price:
                // 539.12 RM/g
                //
                // Gold Value:
                // 5 × 539.12
                // = RM 2,695.60
                //
                // Displayed Zakat:
                // RM 2,695.60 × 2.5%
                // = RM 67.39
                //
                // MAIPs also indicates the gold weight is below
                // Nisab and the customer is not subject to zakat.
                //
                // =================================================
            }
        );
    }
);