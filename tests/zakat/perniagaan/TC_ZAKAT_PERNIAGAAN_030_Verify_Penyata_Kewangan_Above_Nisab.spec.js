const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Penyata Kewangan Above Nisab',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_030 - Verify Penyata Kewangan Above Nisab',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {

                    year: '2026',

                    pelaburan: '1000000',

                    asetSemasa: {
                        simpananTetap: '50000',
                        tunaiBank: '100000',
                        pelbagaiPenghutang: '5000',
                        akaunBelumTerima: '30000',
                        cukaiBolehPulih: '5000',
                        pelaburanJangkaPendek: '60000',
                        lainLain: '1000'
                    },

                    liabilitiSemasa: {
                        akaunBelumBayar: '8000',
                        pinjamanJangkaPendek: '50000',
                        cukaiGajiBelumBayar: '60000',
                        lainLain: '2000'
                    },

                    expectedJumlahPelaburan: 1000000,
                    expectedJumlahAsetSemasa: 251000,
                    expectedJumlahLiabilitiSemasa: 120000,
                    expectedJumlahAsetBersih: 1131000
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
                // STEP 6 - SELECT PENYATA KEWANGAN METHOD
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
                // STEP 9 - ENTER ASET SEMASA
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 10 - VERIFY ASET SEMASA
                // =================================================

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );

                await zakatPage.verifyJumlahAsetSemasa(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 11 - NAVIGATE TO LIABILITI SEMASA
                // =================================================

                await zakatPage.navigateToLiabilitiSemasa();


                // =================================================
                // STEP 12 - VERIFY LIABILITI STEP
                // =================================================

                await zakatPage.verifyLiabilitiSemasaStep();


                // =================================================
                // STEP 13 - ENTER LIABILITI SEMASA
                // =================================================

                await zakatPage.enterLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 14 - VERIFY LIABILITI VALUES
                // =================================================

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 15 - VERIFY JUMLAH LIABILITI
                // =================================================

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 16 - CALCULATE EXPECTED ASET BERSIH
                // =================================================

                const calculatedAsetBersih =
                    testData.expectedJumlahPelaburan +
                    testData.expectedJumlahAsetSemasa -
                    testData.expectedJumlahLiabilitiSemasa;


                // =================================================
                // STEP 17 - VERIFY EXPECTED CALCULATION
                // =================================================

                expect(
                    calculatedAsetBersih
                ).toBe(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 18 - NAVIGATE TO RESULT
                // =================================================

                await zakatPage.navigateToPenyataKewanganResult();


                // =================================================
                // STEP 19 - VERIFY JUMLAH ASET BERSIH
                // =================================================

                await zakatPage.verifyJumlahAsetBersih(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 20 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN
                // =================================================

                await expect(
                    zakatPage.penyataKewanganBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 21 - VERIFY ABOVE-NISAB STATE
                // =================================================

                await zakatPage.verifyPenyataKewanganAboveNisab();


                // =================================================
                // STEP 22 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 23 - VERIFY CART REMAINS EMPTY
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
                // RM 1,000,000
                //
                // Aset Semasa:
                // RM 251,000
                //
                // Liabiliti Semasa:
                //
                // RM 8,000
                // + RM 50,000
                // + RM 60,000
                // + RM 2,000
                //
                // = RM 120,000
                //
                // Jumlah Aset Bersih:
                //
                // RM 1,000,000
                // + RM 251,000
                // - RM 120,000
                //
                // = RM 1,131,000.00
                //
                // Expected:
                //
                // 1. Jumlah Aset Bersih is RM 1,131,000.00.
                //
                // 2. Below-Nisab warning is NOT displayed.
                //
                // 3. Calculator remains active.
                //
                // 4. Nothing has been added to cart.
                //
                // Note:
                //
                // The "Jumlah Zakat yang Perlu Dibayar"
                // element exists in the DOM at this stage,
                // but MAIPs keeps it hidden.
                //
                // Its visible state and calculated amount will
                // be handled separately in TC031.
                //
                // =================================================
            }
        );
    }
);