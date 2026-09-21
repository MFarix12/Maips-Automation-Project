const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Verify Empty Cart After Removal',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_014 - Verify Empty Cart After Removal',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const jumlahSimpanan = '1000';


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
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT TAHUN / HAUL
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 7 - VERIFY TAHUN / HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 8 - ENTER JUMLAH SIMPANAN
                // =================================================

                await zakatPage.enterJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 9 - VERIFY JUMLAH SIMPANAN
                // =================================================

                await zakatPage.verifyJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 10 - ADD TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 11 - VERIFY ITEM EXISTS BEFORE REMOVAL
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeVisible();

                await expect(
                    zakatPage.cartAmount2500.first()
                ).toBeVisible();

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeVisible();


                // =================================================
                // STEP 12 - REMOVE ITEM
                // =================================================

                await zakatPage.removeZakatSimpananFromCart();


                // =================================================
                // STEP 13 - VERIFY ZAKAT CART ROW REMOVED
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY EMPTY CART TOTAL
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
                // STEP 16 - VERIFY NORMAL BAYAR BUTTON
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY BAYAR BUTTON DISABLED
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // STEP 18 - VERIFY PAYMENT ACTION NOT AVAILABLE
                // =================================================

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeHidden();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After removing Zakat Wang Simpanan:
                //
                // - Zakat Wang Simpanan cart row is no longer visible
                //
                // - Empty-cart message is displayed:
                //   "Rekod tidak ditemui..."
                //
                // - Cart total becomes:
                //   RM 0.00
                //
                // - Normal "Bayar" button is displayed
                // - "Bayar" button is disabled
                // - "Bayar RM 25.00" is no longer visible
                //
                // This confirms that Bakul Bayaran is empty.
                //
                // =================================================
            }
        );
    }
);