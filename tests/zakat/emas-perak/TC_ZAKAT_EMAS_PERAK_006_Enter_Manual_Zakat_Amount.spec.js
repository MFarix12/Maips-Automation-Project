const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Manual Zakat Amount',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_006 - Enter Manual Zakat Amount',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const manualAmount = '1000.00';


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
                // STEP 4 - SELECT TAHUN / HAUL
                // =================================================

                await zakatPage.selectHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 5 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 6 - VERIFY DEFAULT JENIS LOGAM
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeChecked();

                await expect(
                    zakatPage.perakRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 7 - ENTER MANUAL ZAKAT AMOUNT
                // =================================================

                await zakatPage.enterManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 8 - VERIFY ENTERED AMOUNT
                // =================================================

                await zakatPage.verifyManualZakatAmount(
                    manualAmount
                );


                // =================================================
                // STEP 9 - VERIFY FORM REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY PAYMENT CART
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User can:
                //
                // - Select Tahun/Haul 2026
                // - Keep Emas selected
                // - Enter 1000.00 into Jumlah Bayaran
                //
                // System should:
                //
                // - Accept the entered value
                // - Display 1000.00 in Jumlah Bayaran
                // - Keep Buka Kalkulator available
                // - Keep Bakul Bayaran available
                //
                // No item is added to cart.
                // No payment is performed.
                //
                // =================================================
            }
        );
    }
);