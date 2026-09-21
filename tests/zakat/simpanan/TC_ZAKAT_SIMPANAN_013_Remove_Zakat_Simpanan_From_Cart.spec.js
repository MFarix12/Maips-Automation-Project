const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Remove From Cart',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_013 - Remove Zakat Simpanan From Cart',
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
                // STEP 7 - ENTER JUMLAH SIMPANAN
                // =================================================

                await zakatPage.enterJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 8 - VERIFY JUMLAH SIMPANAN
                // =================================================

                await zakatPage.verifyJumlahSimpanan(
                    jumlahSimpanan
                );


                // =================================================
                // STEP 9 - ADD TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 10 - VERIFY ITEM EXISTS IN CART
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
                // STEP 11 - VERIFY DELETE BUTTON
                // =================================================

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeVisible();

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeEnabled();


                // =================================================
                // STEP 12 - REMOVE ZAKAT FROM CART
                // =================================================

                await zakatPage.removeZakatSimpananFromCart();


                // =================================================
                // STEP 13 - VERIFY ITEM REMOVED
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeHidden();


                // =================================================
                // STEP 14 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY TOTAL RETURNS TO RM 0.00
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible();


                // =================================================
                // STEP 16 - VERIFY BAYAR BUTTON DISABLED
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeVisible();

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Before removal:
                //
                // Zakat Wang Simpanan
                // 2026
                // RM 25.00
                // Bayar RM 25.00
                //
                // User clicks Delete
                //
                // After removal:
                //
                // - Zakat Wang Simpanan is removed
                // - Empty-cart message is displayed
                // - Total returns to RM 0.00
                // - Bayar button is disabled
                //
                // =================================================
            }
        );
    }
);