const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Penyata Kewangan Below Nisab',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_029 - Verify Penyata Kewangan Below Nisab',
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
                        pinjamanJangkaPendek: '5000000',
                        cukaiGajiBelumBayar: '60000',
                        lainLain: '2000'
                    },

                    expectedJumlahPelaburan: 1000000,
                    expectedJumlahAsetSemasa: 251000,
                    expectedJumlahLiabilitiSemasa: 5070000,
                    expectedJumlahAsetBersih: -3819000
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
                // STEP 12 - ENTER LIABILITI SEMASA
                // =================================================

                await zakatPage.enterLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 13 - VERIFY LIABILITI SEMASA
                // =================================================

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 14 - VERIFY EXPECTED NET ASSET CALCULATION
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
                // STEP 15 - NAVIGATE TO RESULT
                // =================================================

                await zakatPage.navigateToPenyataKewanganResult();


                // =================================================
                // STEP 16 - VERIFY JUMLAH ASET BERSIH
                // =================================================

                await zakatPage.verifyJumlahAsetBersih(
                    testData.expectedJumlahAsetBersih
                );


                // =================================================
                // STEP 17 - VERIFY BELOW-NISAB MESSAGE
                // =================================================

                await zakatPage.verifyPenyataKewanganBelowNisab();


                // =================================================
                // STEP 18 - VERIFY MESSAGE DIRECTLY
                // =================================================

                await expect(
                    zakatPage.penyataKewanganBelowNisabMessage
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.penyataKewanganBelowNisabMessage
                ).toContainText(
                    'Anda tidak dikenakan zakat',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 19 - VERIFY CART REMAINS EMPTY
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
                // RM 5,070,000
                //
                // Jumlah Aset Bersih:
                //
                // RM 1,000,000
                // + RM 251,000
                // - RM 5,070,000
                //
                // = RM -3,819,000.00
                //
                // Since the net asset amount does not reach
                // the Nisab threshold, MAIPs should display:
                //
                // "Jumlah aset bersih anda tidak mencapai
                // amaun nisab tahun 2026.
                // Anda tidak dikenakan zakat."
                //
                // No item should be added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);