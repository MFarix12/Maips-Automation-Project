const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Default State',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_002 - Verify Default State',
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
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatEmasPerakPage();


                // =================================================
                // STEP 4 - VERIFY DEFAULT STATE
                // =================================================

                await zakatPage.verifyDefaultState();


                // =================================================
                // STEP 5 - VERIFY EMAS DEFAULT SELECTION
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeChecked();


                // =================================================
                // STEP 6 - VERIFY PERAK NOT SELECTED
                // =================================================

                await expect(
                    zakatPage.perakRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 7 - VERIFY MANUAL AMOUNT FIELD
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();


                // =================================================
                // STEP 8 - VERIFY CALCULATOR AVAILABLE
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 9 - VERIFY PAYMENT CART
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial Zakat Emas/Perak state:
                //
                // - Tahun/Haul is displayed
                // - Emas is selected by default
                // - Perak is not selected
                // - Jumlah Bayaran is displayed
                // - Buka Kalkulator is enabled
                // - Bakul Bayaran is displayed
                //
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);