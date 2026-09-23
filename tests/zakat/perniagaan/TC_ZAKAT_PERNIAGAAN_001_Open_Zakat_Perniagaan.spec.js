const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Open Module',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_001 - Open Zakat Perniagaan',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - VERIFY KIRA SEKARANG AVAILABLE
                // =================================================

                await expect(
                    zakatPage.kiraSekarangButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.kiraSekarangButton
                ).toBeEnabled();


                // =================================================
                // STEP 3 - OPEN ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.openZakatPerniagaan();


                // =================================================
                // STEP 4 - VERIFY MODULE PAGE
                // =================================================

                await zakatPage
                    .verifyZakatPerniagaanPage();


                // =================================================
                // STEP 5 - VERIFY HEADING
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanHeading
                ).toHaveText(
                    'Zakat Perniagaan'
                );


                // =================================================
                // STEP 6 - VERIFY TAHUN/HAUL
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


                await expect(
                    zakatPage.manualAmountField
                ).toBeEnabled();


                // =================================================
                // STEP 8 - VERIFY BUKA KALKULATOR
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
                // STEP 9 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.mainAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY BAKUL BAYARAN
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY INITIAL EMPTY CART
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 12 - VERIFY NO CART ITEM
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. User can open Zakat Perniagaan from MAIPS.
                //
                // 2. Zakat Perniagaan page is displayed.
                //
                // 3. Tahun/Haul is available.
                //
                // 4. Jumlah Bayaran is available.
                //
                // 5. Buka Kalkulator is available.
                //
                // 6. Masuk Troli is displayed.
                //
                // 7. Bakul Bayaran is displayed.
                //
                // 8. Cart is initially empty.
                //
                // 9. Cart total is RM0.00.
                //
                // =================================================
            }
        );
    }
);