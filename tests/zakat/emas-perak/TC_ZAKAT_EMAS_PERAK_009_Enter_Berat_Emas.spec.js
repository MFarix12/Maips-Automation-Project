const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Enter Berat Emas',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_009 - Enter Berat Emas',
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


                // =================================================
                // STEP 4 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY EMAS SECTION
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            'Emas yang Dimiliki',
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 6 - VERIFY GOLD TYPE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            goldType,
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 7 - ENTER GOLD WEIGHT
                // =================================================

                await zakatPage.enterGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 8 - VERIFY ENTERED WEIGHT
                // =================================================

                await zakatPage.verifyGoldWeight(
                    goldType,
                    goldWeight
                );


                // =================================================
                // STEP 9 - VERIFY SETERUSNYA AVAILABLE
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
                // Calculator opens in Emas mode.
                //
                // User can see the gold-weight table including:
                // 24K/995/999
                //
                // User enters:
                // 5 g
                //
                // System accepts and displays the entered weight.
                //
                // Seterusnya remains available.
                //
                // No item is added to cart.
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);