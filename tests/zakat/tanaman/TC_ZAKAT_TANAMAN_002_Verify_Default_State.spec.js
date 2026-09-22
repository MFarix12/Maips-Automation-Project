const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Default State',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_002 - Verify Default State',
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
                // STEP 3 - VERIFY ZAKAT TANAMAN PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - VERIFY DEFAULT STATE
                // =================================================

                await zakatPage.verifyDefaultState();


                // =================================================
                // ADDITIONAL CHECKS
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
                // When Zakat Tanaman is opened:
                //
                // - Zakat Tanaman page is displayed
                // - Tahun/Haul displays 2026
                // - Jumlah Bayaran is empty/0.00
                // - Buka Kalkulator is available
                // - Bakul Bayaran is empty
                // - Empty-cart message is displayed
                // - Total = RM 0.00
                // - Bayar button is disabled
                //
                // =================================================
            }
        );
    }
);