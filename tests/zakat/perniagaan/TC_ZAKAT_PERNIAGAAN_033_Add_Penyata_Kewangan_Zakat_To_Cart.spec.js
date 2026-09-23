const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Add Penyata Kewangan Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_033 - Add Penyata Kewangan Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    pelaburan: '3000000',

                    asetSemasa: {
                        simpananTetap: '50000',
                        tunaiBank: '50000',
                        pelbagaiPenghutang: '10000',
                        akaunBelumTerima: '2000',
                        cukaiBolehPulih: '6000',
                        pelaburanJangkaPendek: '100000',
                        lainLain: '300000'
                    },

                    liabilitiSemasa: {
                        akaunBelumBayar: '4000',
                        pinjamanJangkaPendek: '50000',
                        cukaiGajiBelumBayar: '78000',
                        lainLain: '4000'
                    },

                    expectedJumlahPelaburan: 3000000,
                    expectedJumlahAsetSemasa: 518000,
                    expectedJumlahLiabilitiSemasa: 136000,
                    expectedJumlahAsetBersih: 3382000,

                    zakatRate: 0.025,

                    expectedZakat: 84550
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT PERNIAGAAN
                // =================================================

                await zakatPage.openZakatPerniagaan();


                // =================================================
                // STEP 3 - VERIFY INITIAL CART
                // =================================================

                await zakatPage.verifyEmptyCart();


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY YEAR
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - SELECT PENYATA KEWANGAN
                // =================================================

                await zakatPage.selectPenyataKewanganMethod();

                await zakatPage.verifyPenyataKewanganMethod();


                // =================================================
                // STEP 7 - ENTER PELABURAN
                // =================================================

                await zakatPage.enterPelaburan(
                    testData.pelaburan
                );

                await zakatPage.verifyPelaburan(
                    testData.pelaburan
                );

                await zakatPage.verifyJumlahPelaburan(
                    testData.expectedJumlahPelaburan
                );


                // =================================================
                // STEP 8 - NAVIGATE TO ASET SEMASA
                // =================================================

                await zakatPage.navigateToAsetSemasa();

                await zakatPage.verifyAsetSemasaStep();


                // =================================================
                // STEP 9 - ENTER ASET SEMASA
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );

                await zakatPage.verifyJumlahAsetSemasa(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 10 - NAVIGATE TO LIABILITI SEMASA
                // =================================================

                await zakatPage.navigateToLiabilitiSemasa();

                await zakatPage.verifyLiabilitiSemasaStep();


                // =================================================
                // STEP 11 - ENTER LIABILITI SEMASA
                // =================================================

                await zakatPage.enterLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 12 - CALCULATE EXPECTED ASET BERSIH
                // =================================================

                const calculatedAsetBersih =
                    testData.expectedJumlahPelaburan +
                    testData.expectedJumlahAsetSemasa -
                    testData.expectedJumlahLiabilitiSemasa;

                expect(
                    calculatedAsetBersih
                ).toBe(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 13 - NAVIGATE TO PENGIRAAN
                // =================================================

                await zakatPage.navigateToPenyataKewanganResult();


                // =================================================
                // STEP 14 - VERIFY JUMLAH ASET BERSIH
                // =================================================

                await zakatPage.verifyJumlahAsetBersih(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 15 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyPenyataKewanganAboveNisab();


                // =================================================
                // STEP 16 - CALCULATE EXPECTED ZAKAT
                // =================================================

                const calculatedZakat =
                    testData.expectedJumlahAsetBersih *
                    testData.zakatRate;

                expect(
                    calculatedZakat
                ).toBe(
                    testData.expectedZakat
                );


                // =================================================
                // STEP 17 - PROCEED TO FINAL RESULT
                // =================================================

                await zakatPage.proceedToFinalPenyataKewanganResult();


                // =================================================
                // STEP 18 - CHECK APPLICATION DEFECT
                // =================================================

                const systemErrorVisible =
                    await zakatPage.unexpectedErrorMessage
                        .isVisible()
                        .catch(() => false);

                if (systemErrorVisible) {

                    throw new Error(
                        'BLOCKED BY APPLICATION DEFECT: ' +
                        'TC_ZAKAT_PERNIAGAAN_033 cannot verify adding ' +
                        'Penyata Kewangan Zakat to the payment cart because ' +
                        'MAIPs displays "An Unexpected Error Occurred!" ' +
                        'after clicking Seterusnya from the Pengiraan step. ' +
                        'The final Zakat result and Masuk Troli stage ' +
                        'cannot currently be reached.'
                    );
                }


                // =================================================
                // STEP 19 - VERIFY FINAL ZAKAT RESULT
                // =================================================

                await zakatPage.verifyFinalPenyataKewanganResult(
                    testData.expectedZakat
                );


                // =================================================
                // STEP 20 - VERIFY MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeEnabled();


                // =================================================
                // STEP 21 - ADD TO CART
                // =================================================

                await zakatPage.addCalculatedZakatToCart();


                // =================================================
                // STEP 22 - VERIFY CART ITEM EXISTS
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cartYear2026
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - VERIFY EXPECTED CART AMOUNT
                // =================================================

                const expectedCartAmount =
                    `RM ${testData.expectedZakat.toLocaleString(
                        'en-US',
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    )}`;

                const cartZakatAmount =
                    zakatPage.cartContainer.getByText(
                        expectedCartAmount,
                        {
                            exact: true
                        }
                    ).first();

                await expect(
                    cartZakatAmount
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 24 - VERIFY CART TOTAL
                // =================================================

                const cartTotal =
                    zakatPage.cartContainer.getByText(
                        expectedCartAmount,
                        {
                            exact: true
                        }
                    ).last();

                await expect(
                    cartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 25 - VERIFY PAYMENT BUTTON
                // =================================================

                const paymentButton =
                    zakatPage.cartContainer.getByRole(
                        'button',
                        {
                            name: `Bayar ${expectedCartAmount}`,
                            exact: true
                        }
                    );

                await expect(
                    paymentButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    paymentButton
                ).toBeEnabled();


                // =================================================
                // STEP 26 - VERIFY EMPTY CART STATE REMOVED
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Jumlah Pelaburan:
                // RM 3,000,000.00
                //
                // Jumlah Aset Semasa:
                // RM 518,000.00
                //
                // Jumlah Liabiliti Semasa:
                // RM 136,000.00
                //
                // Jumlah Aset Bersih:
                //
                // RM 3,000,000
                // + RM 518,000
                // - RM 136,000
                // = RM 3,382,000.00
                //
                // Expected Zakat:
                //
                // RM 3,382,000 × 2.5%
                // = RM 84,550.00
                //
                // Expected after application defect is fixed:
                //
                // 1. Final Zakat result is displayed.
                // 2. Amount = RM 84,550.00.
                // 3. Masuk Troli is available.
                // 4. User can add Zakat Perniagaan to cart.
                // 5. Cart shows Zakat Perniagaan.
                // 6. Year = 2026.
                // 7. Amount = RM 84,550.00.
                // 8. Total = RM 84,550.00.
                // 9. Bayar RM 84,550.00 is enabled.
                //
                // CURRENT STG:
                //
                // This test is expected to FAIL at Step 18 because
                // MAIPs currently displays:
                //
                // "An Unexpected Error Occurred!"
                //
                // after Seterusnya is clicked from Pengiraan.
                //
                // =================================================
            }
        );
    }
);