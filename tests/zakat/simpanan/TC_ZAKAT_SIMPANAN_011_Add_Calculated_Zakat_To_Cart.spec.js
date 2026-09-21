const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Add Calculated Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_011 - Add Calculated Zakat To Cart',
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
                // STEP 5 - VERIFY CALCULATOR OPENED
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT TAHUN / HAUL
                // =================================================

                await zakatPage.selectCalculatorHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 7 - VERIFY SELECTED TAHUN / HAUL
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
                // STEP 10 - ADD CALCULATED ZAKAT TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 11 - VERIFY SUCCESS NOTIFICATION
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CART IS NOT EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY ZAKAT SIMPANAN ITEM
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY CALCULATED AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartAmount2500.first()
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // After entering:
                //
                // Tahun/Haul:
                // 2026
                //
                // Jumlah Simpanan:
                // RM 1,000.00
                //
                // Zakat calculation:
                // 2.5% × RM 1,000.00
                // = RM 25.00
                //
                // After clicking "Masuk Troli":
                //
                // - Success notification is displayed
                // - Empty-cart message disappears
                // - Zakat Wang Simpanan appears in cart
                // - RM 25.00 appears
                // - Bayar RM 25.00 appears
                // - Payment button is enabled
                //
                // No actual payment is performed.
                //
                // =================================================
            }
        );
    }
);