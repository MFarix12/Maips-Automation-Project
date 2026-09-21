const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Change Gold Weight',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_012 - Change Gold Weight',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const goldType = '24K/995/999';
                const initialWeight = '5';
                const updatedWeight = '10';


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
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY GOLD TABLE
                // =================================================

                await zakatPage.verifyGoldTable();


                // =================================================
                // STEP 6 - ENTER INITIAL GOLD WEIGHT
                // =================================================

                await zakatPage.enterGoldWeight(
                    goldType,
                    initialWeight
                );


                // =================================================
                // STEP 7 - VERIFY INITIAL VALUE
                // =================================================

                await zakatPage.verifyGoldWeight(
                    goldType,
                    initialWeight
                );


                // =================================================
                // STEP 8 - GET GOLD FIELD
                // =================================================

                const goldField =
                    await zakatPage.getGoldWeightField(
                        goldType
                    );


                // =================================================
                // STEP 9 - CLEAR OLD VALUE
                // =================================================

                await goldField.fill('');


                await expect(
                    goldField
                ).toHaveValue('');


                // =================================================
                // STEP 10 - ENTER UPDATED VALUE
                // =================================================

                await goldField.fill(
                    updatedWeight
                );


                // =================================================
                // STEP 11 - VERIFY UPDATED VALUE
                // =================================================

                await zakatPage.verifyGoldWeight(
                    goldType,
                    updatedWeight
                );


                // =================================================
                // STEP 12 - VERIFY OLD VALUE REPLACED
                // =================================================

                await expect(
                    goldField
                ).not.toHaveValue(
                    initialWeight
                );


                // =================================================
                // STEP 13 - VERIFY OTHER GOLD FIELDS UNAFFECTED
                // =================================================

                const gold22KField =
                    await zakatPage.getGoldWeightField(
                        '22K/916'
                    );


                await expect(
                    gold22KField
                ).toHaveValue('');


                await expect(
                    gold22KField
                ).toHaveAttribute(
                    'placeholder',
                    '0.00'
                );


                // =================================================
                // STEP 14 - VERIFY SETERUSNYA
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
                // User initially enters:
                //
                // 24K/995/999 = 5 g
                //
                // User changes the value to:
                //
                // 24K/995/999 = 10 g
                //
                // Expected:
                //
                // - Old value 5 is replaced
                // - New value 10 is retained
                // - Other gold-weight fields remain unchanged
                // - Seterusnya remains available
                //
                // Calculation/result behaviour will be tested
                // after navigating through the calculator flow.
                //
                // =================================================
            }
        );
    }
);