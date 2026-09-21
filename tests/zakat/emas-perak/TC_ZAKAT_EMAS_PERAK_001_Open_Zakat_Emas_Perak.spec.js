const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_001 - Open Zakat Emas / Perak',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN BAYARAN ZAKAT
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY ZAKAT EMAS / PERAK PAGE
                // =================================================

                await zakatPage.verifyZakatEmasPerakPage();


                // =================================================
                // STEP 4 - VERIFY EMAS OPTION
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeVisible();


                // =================================================
                // STEP 5 - VERIFY PERAK OPTION
                // =================================================

                await expect(
                    zakatPage.perakRadio
                ).toBeVisible();


                // =================================================
                // STEP 6 - VERIFY JUMLAH BAYARAN
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();


                // =================================================
                // STEP 7 - VERIFY CALCULATOR BUTTON
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Zakat Emas/Perak page is displayed.
                //
                // User can see:
                //
                // - Tahun/Haul
                // - Jenis Logam
                // - Emas
                // - Perak
                // - Jumlah Bayaran
                // - Buka Kalkulator
                // - Bakul Bayaran
                //
                // =================================================
            }
        );
    }
);