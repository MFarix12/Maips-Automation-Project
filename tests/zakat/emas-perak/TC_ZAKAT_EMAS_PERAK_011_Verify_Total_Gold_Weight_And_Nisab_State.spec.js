const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Gold Weight and Nisab',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_011 - Verify Total Gold Weight and Nisab State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


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
                // STEP 5 - VERIFY GOLD TABLE
                // =================================================

                await zakatPage.verifyGoldTable();


                // =================================================
                // STEP 6 - VERIFY DEFAULT GOLD INPUT FIELDS
                // =================================================

                const goldTypes = [
                    '24K/995/999',
                    '965',
                    '23K/950',
                    '22K/916',
                    '21K/875',
                    '20K/835',
                    'PAUN',
                    '18K/K18/750',
                    '14K/585',
                    '9K/375'
                ];


                for (const goldType of goldTypes) {

                    const field =
                        await zakatPage.getGoldWeightField(
                            goldType
                        );


                    // Actual field value should initially be empty
                    await expect(
                        field
                    ).toHaveValue(
                        ''
                    );


                    // UI displays 0.00 using the placeholder
                    await expect(
                        field
                    ).toHaveAttribute(
                        'placeholder',
                        '0.00'
                    );
                }


                // =================================================
                // STEP 7 - VERIFY TOTAL PURE GOLD
                // =================================================

                await zakatPage.verifyZeroGoldTotal();


                // =================================================
                // STEP 8 - VERIFY BELOW NISAB MESSAGE
                // =================================================

                await zakatPage.verifyBelowNisabMessage();


                // =================================================
                // STEP 9 - VERIFY SETERUSNYA BUTTON
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
                // Default gold-weight fields:
                //
                // Actual input value:
                // ""
                //
                // Placeholder displayed:
                // "0.00"
                //
                // Total pure gold:
                // 0.00 g
                //
                // System displays the below-Nisab message.
                //
                // Seterusnya remains available.
                //
                // No cart item is created.
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);