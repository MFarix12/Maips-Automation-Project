const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Verify Calculation',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_008 - Verify Zakat Simpanan Calculation',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const jumlahSimpanan = '1000';

                // Expected calculation:
                // RM 1,000.00 × 2.5% = RM 25.00
                const expectedZakat = 'RM 25.00';


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
                // STEP 7 - VERIFY SELECTED YEAR
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
                // STEP 9 - VERIFY INPUT
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
                ).toBeVisible();


                // =================================================
                // STEP 12 - VERIFY ZAKAT TYPE
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeVisible();


                // =================================================
                // STEP 13 - VERIFY CALCULATED AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartCalculatedAmount.first()
                ).toBeVisible();

                await expect(
                    zakatPage.cartCalculatedAmount.first()
                ).toHaveText(
                    expectedZakat
                );


                // =================================================
                // STEP 14 - VERIFY PAYMENT AMOUNT
                // =================================================

                await expect(
                    zakatPage.cartPayCalculatedButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Jumlah Simpanan:
                // RM 1,000.00
                //
                // Zakat calculation:
                // RM 1,000.00 × 2.5%
                // = RM 25.00
                //
                // Bakul Bayaran should contain:
                //
                // Zakat Wang Simpanan
                // RM 25.00
                //
                // Payment button:
                // Bayar RM 25.00
                //
                // =================================================
            }
        );
    }
);