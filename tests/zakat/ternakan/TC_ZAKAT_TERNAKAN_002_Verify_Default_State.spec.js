const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Verify Default State',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_002 - Verify Default State',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 4 - VERIFY DEFAULT STATE
                // =================================================

                await zakatPage
                    .verifyDefaultState();


                // =================================================
                // STEP 5 - VERIFY DEFAULT HAUL = 2026
                // =================================================

                const haulInput =
                    zakatPage.haulFormItem
                        .locator('input');


                await expect(
                    haulInput
                ).toHaveValue(
                    '2026',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 6 - VERIFY JUMLAH BAYARAN
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                const manualAmountValue =
                    await zakatPage
                        .manualAmountField
                        .inputValue();


                expect(
                    [
                        '',
                        '0',
                        '0.00'
                    ]
                ).toContain(
                    manualAmountValue
                );


                // =================================================
                // STEP 7 - VERIFY BUKA KALKULATOR
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY TOTAL = RM 0.00
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Zakat Ternakan opens successfully.
                //
                // - Default Tahun/Haul is 2026.
                //
                // - Jumlah Bayaran is initially empty/zero.
                //
                // - Jumlah Bayaran is enabled.
                //
                // - Buka Kalkulator is visible and enabled.
                //
                // - Bakul Bayaran is initially empty.
                //
                // - Empty-cart message is displayed.
                //
                // - Total is RM 0.00.
                //
                // =================================================
            }
        );
    }
);