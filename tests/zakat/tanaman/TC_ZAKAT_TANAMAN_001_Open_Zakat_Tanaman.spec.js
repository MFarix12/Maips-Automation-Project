const { test } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Navigation',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_001 - Open Zakat Tanaman',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


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
                // EXPECTED RESULT
                // =================================================
                //
                // Zakat Tanaman page is displayed.
                //
                // User can see:
                //
                // - Zakat Tanaman
                // - Tahun/Haul
                // - Jumlah Bayaran
                // - Buka Kalkulator
                // - Bakul Bayaran
                //
                // =================================================
            }
        );
    }
);