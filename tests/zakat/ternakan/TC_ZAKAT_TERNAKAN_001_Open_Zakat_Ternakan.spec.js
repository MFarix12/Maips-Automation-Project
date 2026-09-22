const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Open Module',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_001 - Open Zakat Ternakan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - VERIFY KIRA SEKARANG BUTTON
                // =================================================

                await expect(
                    zakatPage.kiraSekarangButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 3 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 4 - VERIFY ZAKAT TERNAKAN PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 5 - VERIFY ZAKAT TERNAKAN HEADING
                // =================================================

                await expect(
                    zakatPage.zakatTernakanHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 6 - VERIFY TAHUN / HAUL
                // =================================================

                await expect(
                    zakatPage.haulFormItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - VERIFY JUMLAH BAYARAN
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY BUKA KALKULATOR
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY BAKUL BAYARAN
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - User successfully opens Zakat Ternakan.
                // - Zakat Ternakan section is displayed.
                // - Tahun/Haul is displayed.
                // - Jumlah Bayaran is displayed.
                // - Buka Kalkulator is displayed.
                // - Bakul Bayaran is displayed.
                //
                // =================================================
            }
        );
    }
);