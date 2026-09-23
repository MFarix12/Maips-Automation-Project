const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Penyata Kewangan Zakat Result',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_031 - Verify Penyata Kewangan Zakat Result',
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

                await expect(
                    zakatPage.penyataKewanganBelowNisabMessage
                ).toBeHidden({
                    timeout: 15000
                });


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
                // STEP 17 - PROCEED TO FINAL ZAKAT RESULT
                // =================================================

                await zakatPage.proceedToFinalPenyataKewanganResult();


                // =================================================
                // STEP 18 - VERIFY FINAL ZAKAT RESULT
                // =================================================
                //
                // Current STG defect:
                //
                // MAIPs currently displays:
                //
                // "An Unexpected Error Occurred!"
                //
                // after clicking Seterusnya.
                //
                // If the defect exists, this method deliberately
                // fails TC031 with an application-defect message.
                //
                // Once MAIPs is fixed, the same test will continue
                // and verify RM 84,550.00.
                //
                // =================================================

                await zakatPage.verifyFinalPenyataKewanganResult(
                    testData.expectedZakat
                );
            }
        );
    }
);