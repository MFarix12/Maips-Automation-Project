const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Verify Default State',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_002 - Verify Default State',
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
                // STEP 3 - OPEN ZAKAT WANG SIMPANAN
                // =================================================

                await zakatPage.openZakatSimpanan();


                // =================================================
                // STEP 4 - VERIFY MODULE
                // =================================================

                await zakatPage.verifyZakatSimpananPage();


                // =================================================
                // STEP 5 - VERIFY DEFAULT STATE
                // =================================================

                await zakatPage.verifyDefaultState();


                // =================================================
                // STEP 6 - VERIFY NO PAYMENT IS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Zakat Wang Simpanan should initially display:
                //
                // - Tahun/Haul
                // - Jumlah Bayaran
                // - Buka Kalkulator
                //
                // Bakul Bayaran should display:
                //
                // - No payment record
                // - RM 0.00 total
                // - Disabled "Bayar" button
                //
                // No Zakat has been added to the cart.
                // =================================================

            }
        );
    }
);