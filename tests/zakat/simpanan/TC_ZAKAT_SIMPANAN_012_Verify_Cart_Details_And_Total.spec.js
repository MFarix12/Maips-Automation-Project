const { test, expect } = require('@playwright/test');

const {
    ZakatSimpananPage
} = require('../../../pages/zakat/ZakatSimpananPage');


test.describe(
    'Zakat Wang Simpanan - Verify Cart Details and Total',
    () => {

        test(
            'TC_ZAKAT_SIMPANAN_012 - Verify Cart Details and Total',
            async ({ page }) => {

                const zakatPage =
                    new ZakatSimpananPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';
                const jumlahSimpanan = '1000';
                const expectedAmount = 'RM 25.00';


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
                // STEP 9 - ADD CALCULATED ZAKAT TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 10 - VERIFY SUCCESS MESSAGE
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible();


                // =================================================
                // STEP 11 - VERIFY CART
                // =================================================

                await expect(
                    zakatPage.cartContainer
                ).toBeVisible();


                // =================================================
                // STEP 12 - VERIFY ZAKAT TYPE
                // =================================================

                await expect(
                    zakatPage.cartZakatSimpananItem
                ).toBeVisible();


                // =================================================
                // STEP 13 - VERIFY TAHUN / HAUL
                // =================================================

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible();

                await expect(
                    zakatPage.cartYear2026
                ).toHaveText(
                    selectedYear
                );


                // =================================================
                // STEP 14 - VERIFY CART AMOUNT
                // =================================================

                const amountCount =
                    await zakatPage.cartAmount2500.count();

                expect(
                    amountCount
                ).toBeGreaterThanOrEqual(1);

                await expect(
                    zakatPage.cartAmount2500.first()
                ).toBeVisible();

                await expect(
                    zakatPage.cartAmount2500.first()
                ).toHaveText(
                    expectedAmount
                );


                // =================================================
                // STEP 15 - VERIFY CART TOTAL
                // =================================================

                /*
                 * MAIPs may display RM 25.00 more than once:
                 *
                 * Item Amount  -> RM 25.00
                 * Total        -> RM 25.00
                 *
                 * Therefore we intentionally do not use a
                 * strict single-element assertion here.
                 */

                if (amountCount >= 2) {

                    await expect(
                        zakatPage.cartAmount2500.last()
                    ).toBeVisible();

                    await expect(
                        zakatPage.cartAmount2500.last()
                    ).toHaveText(
                        expectedAmount
                    );
                }


                // =================================================
                // STEP 16 - VERIFY PAYMENT BUTTON
                // =================================================

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeVisible();

                await expect(
                    zakatPage.cartPayButton2500
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Bakul Bayaran should contain:
                //
                // Zakat Wang Simpanan
                // Tahun/Haul : 2026
                // Amount     : RM 25.00
                //
                // Total:
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