const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Sebelum Back Navigation',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_032 - Verify Sebelum Back Navigation',
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
                    expectedJumlahAsetBersih: 3382000
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
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

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


                // =================================================
                // STEP 7 - ENTER PELABURAN
                // =================================================

                await zakatPage.enterPelaburan(
                    testData.pelaburan
                );

                await zakatPage.verifyJumlahPelaburan(
                    testData.expectedJumlahPelaburan
                );


                // =================================================
                // STEP 8 - NAVIGATE TO ASET SEMASA
                // =================================================

                await zakatPage.navigateToAsetSemasa();


                // =================================================
                // STEP 9 - VERIFY ASET SEMASA STEP
                // =================================================

                await zakatPage.verifyAsetSemasaStep();


                // =================================================
                // STEP 10 - ENTER ASET SEMASA
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 11 - VERIFY ASET SEMASA VALUES
                // =================================================

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 12 - VERIFY JUMLAH ASET SEMASA
                // =================================================

                await zakatPage.verifyJumlahAsetSemasa(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 13 - NAVIGATE TO LIABILITI SEMASA
                // =================================================

                await zakatPage.navigateToLiabilitiSemasa();


                // =================================================
                // STEP 14 - VERIFY LIABILITI SEMASA STEP
                // =================================================

                await zakatPage.verifyLiabilitiSemasaStep();


                // =================================================
                // STEP 15 - ENTER LIABILITI SEMASA
                // =================================================

                await zakatPage.enterLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 16 - VERIFY LIABILITI VALUES
                // =================================================

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 17 - VERIFY JUMLAH LIABILITI
                // =================================================

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 18 - CALCULATE EXPECTED ASET BERSIH
                // =================================================

                const calculatedAsetBersih =
                    testData.expectedJumlahPelaburan +
                    testData.expectedJumlahAsetSemasa -
                    testData.expectedJumlahLiabilitiSemasa;


                // =================================================
                // STEP 19 - VERIFY EXPECTED CALCULATION
                // =================================================

                expect(
                    calculatedAsetBersih
                ).toBe(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 20 - NAVIGATE TO PENGIRAAN
                // =================================================

                await zakatPage.navigateToPenyataKewanganResult();


                // =================================================
                // STEP 21 - VERIFY JUMLAH ASET BERSIH
                // =================================================

                await zakatPage.verifyJumlahAsetBersih(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 22 - VERIFY SEBELUM BUTTON
                // =================================================

                await expect(
                    zakatPage.penyataBackButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.penyataBackButton
                ).toBeEnabled();


                // =================================================
                // STEP 23 - CLICK SEBELUM
                // =================================================

                await zakatPage.navigateBackPenyataKewangan();


                // =================================================
                // STEP 24 - VERIFY RETURN TO LIABILITI SEMASA
                // =================================================

                await zakatPage.verifyReturnedToLiabilitiSemasa();


                // =================================================
                // STEP 25 - VERIFY PREVIOUS VALUES RETAINED
                // =================================================

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 26 - VERIFY TOTAL RETAINED
                // =================================================

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 27 - VERIFY CALCULATOR STILL OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 28 - VERIFY NO SYSTEM ERROR
                // =================================================

                await expect(
                    zakatPage.unexpectedErrorMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 29 - VERIFY CART REMAINS EMPTY
                // =================================================

                await expect(
                    zakatPage.zakatPerniagaanCartItem
                ).toBeHidden({
                    timeout: 15000
                });

                await expect(
                    zakatPage.emptyCartMessage
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

                await expect(
                    zakatPage.emptyPaymentButton
                ).toBeDisabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Pelaburan:
                //
                // RM 3,000,000.00
                //
                // Aset Semasa:
                //
                // RM 518,000.00
                //
                // Liabiliti Semasa:
                //
                // RM 136,000.00
                //
                // Jumlah Aset Bersih:
                //
                // RM 3,000,000
                // + RM 518,000
                // - RM 136,000
                //
                // = RM 3,382,000.00
                //
                // At Pengiraan:
                //
                // User clicks "Sebelum".
                //
                // Expected:
                //
                // 1. User returns to Liabiliti Semasa.
                //
                // 2. Akaun Belum Bayar remains RM 4,000.
                //
                // 3. Pinjaman Jangka Pendek remains RM 50,000.
                //
                // 4. Cukai & Gaji Belum Bayar remains RM 78,000.
                //
                // 5. Lain-lain remains RM 4,000.
                //
                // 6. Jumlah Liabiliti Semasa remains
                //    RM 136,000.00.
                //
                // 7. No unexpected system error is displayed.
                //
                // 8. Calculator remains open.
                //
                // 9. Cart remains empty.
                //
                // =================================================
            }
        );
    }
);