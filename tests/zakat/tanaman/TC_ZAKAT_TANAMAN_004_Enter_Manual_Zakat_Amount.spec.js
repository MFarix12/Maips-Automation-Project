const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Manual Zakat Amount',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_004 - Enter Manual Zakat Amount',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);

                const manualAmount = '110.00';


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
                // STEP 4 - VERIFY JUMLAH BAYARAN FIELD
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                // =================================================
                // STEP 5 - ENTER MANUAL AMOUNT
                // =================================================

                await zakatPage.enterManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 6 - VERIFY VALUE
                // =================================================

                await zakatPage.verifyManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 7 - VERIFY PAGE REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Jumlah Bayaran is displayed
                // - User can enter RM 110.00
                // - Field retains 110.00
                // - Zakat Tanaman page remains functional
                // - Buka Kalkulator remains available
                // - Nothing is added to Bakul Bayaran
                //
                // =================================================
            }
        );
    }
);