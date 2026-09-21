const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Open Module',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_001 - Open Zakat Wang Simpanan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN BAYARAN ZAKAT
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAYMENT CART
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
                // STEP 4 - OPEN ZAKAT WANG SIMPANAN
                // =================================================

                await zakatPage.openZakatSimpanan();


                // =================================================
                // STEP 5 - VERIFY ZAKAT WANG SIMPANAN PAGE
                // =================================================

                await zakatPage.verifyZakatSimpananPage();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Zakat Wang Simpanan module is opened.
                //
                // User should be able to see:
                //
                // - Zakat Wang Simpanan
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