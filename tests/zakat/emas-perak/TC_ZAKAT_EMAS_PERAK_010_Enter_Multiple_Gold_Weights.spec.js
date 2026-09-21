const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Multiple Gold Weights',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_010 - Enter Multiple Gold Weights',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const goldData = [
                    {
                        type: '24K/995/999',
                        weight: '2'
                    },
                    {
                        type: '965',
                        weight: '2'
                    },
                    {
                        type: '23K/950',
                        weight: '2'
                    },
                    {
                        type: '22K/916',
                        weight: '2'
                    },
                    {
                        type: '21K/875',
                        weight: '2'
                    },
                    {
                        type: '20K/835',
                        weight: '2'
                    },
                    {
                        type: 'PAUN',
                        weight: '2'
                    },
                    {
                        type: '18K/K18/750',
                        weight: '2'
                    },
                    {
                        type: '14K/585',
                        weight: '2'
                    },
                    {
                        type: '9K/375',
                        weight: '2'
                    }
                ];


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
                    zakatPage.calculatorGoldSection
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 6 - VERIFY GOLD TABLE
                // =================================================

                await zakatPage.verifyGoldTable();


                // =================================================
                // STEP 7 - ENTER MULTIPLE GOLD WEIGHTS
                // =================================================

                for (const gold of goldData) {

                    await zakatPage.enterGoldWeight(
                        gold.type,
                        gold.weight
                    );
                }


                // =================================================
                // STEP 8 - VERIFY ALL ENTERED VALUES
                // =================================================

                for (const gold of goldData) {

                    await zakatPage.verifyGoldWeight(
                        gold.type,
                        gold.weight
                    );
                }


                // =================================================
                // STEP 9 - VERIFY 24K
                // =================================================

                await zakatPage.verifyGoldWeight(
                    '24K/995/999',
                    '2'
                );


                // =================================================
                // STEP 10 - VERIFY 22K
                // =================================================

                await zakatPage.verifyGoldWeight(
                    '22K/916',
                    '2'
                );


                // =================================================
                // STEP 11 - VERIFY 18K
                // =================================================

                await zakatPage.verifyGoldWeight(
                    '18K/K18/750',
                    '2'
                );


                // =================================================
                // STEP 12 - VERIFY 9K
                // =================================================

                await zakatPage.verifyGoldWeight(
                    '9K/375',
                    '2'
                );


                // =================================================
                // STEP 13 - VERIFY SETERUSNYA
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
                // User can enter weights for multiple gold types:
                //
                // 24K/995/999
                // 965
                // 23K/950
                // 22K/916
                // 21K/875
                // 20K/835
                // PAUN
                // 18K/K18/750
                // 14K/585
                // 9K/375
                //
                // Each field accepts the entered value.
                //
                // Entered values remain available after filling
                // the other gold types.
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