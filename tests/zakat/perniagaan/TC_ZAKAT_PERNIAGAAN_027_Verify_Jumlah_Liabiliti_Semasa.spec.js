const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Jumlah Liabiliti Semasa',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_027 - Verify Jumlah Liabiliti Semasa',
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

                    expectedJumlahAsetSemasa: 251000,
                    expectedJumlahLiabilitiSemasa: 5070000
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


                // =================================================
                // STEP 8 - VERIFY JUMLAH PELABURAN
                // =================================================

                await zakatPage.verifyJumlahPelaburan(
                    1000000
                );


                // =================================================
                // STEP 9 - NAVIGATE TO ASET SEMASA
                // =================================================

                await zakatPage.navigateToAsetSemasa();


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
                // STEP 16 - VERIFY ENTERED VALUES
                // =================================================

                await zakatPage.verifyLiabilitiSemasaDetails(
                    testData.liabilitiSemasa
                );


                // =================================================
                // STEP 17 - CALCULATE EXPECTED TOTAL
                // =================================================

                const calculatedLiabilitiTotal =
                    Number(
                        testData.liabilitiSemasa.akaunBelumBayar
                    ) +
                    Number(
                        testData.liabilitiSemasa.pinjamanJangkaPendek
                    ) +
                    Number(
                        testData.liabilitiSemasa.cukaiGajiBelumBayar
                    ) +
                    Number(
                        testData.liabilitiSemasa.lainLain
                    );


                // =================================================
                // STEP 18 - VERIFY TEST DATA CALCULATION
                // =================================================

                expect(
                    calculatedLiabilitiTotal
                ).toBe(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 19 - VERIFY JUMLAH LIABILITI LABEL
                // =================================================

                await expect(
                    zakatPage.jumlahLiabilitiSemasaLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - VERIFY JUMLAH LIABILITI SEMASA
                // =================================================

                await zakatPage.verifyJumlahLiabilitiSemasa(
                    testData.expectedJumlahLiabilitiSemasa
                );


                // =================================================
                // STEP 21 - VERIFY CALCULATOR REMAINS OPEN
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 22 - VERIFY CART REMAINS EMPTY
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
                // Akaun Belum Bayar:
                // RM 8,000
                //
                // Pinjaman Jangka Pendek:
                // RM 5,000,000
                //
                // Cukai & Gaji Belum Bayar:
                // RM 60,000
                //
                // Lain-lain:
                // RM 2,000
                //
                // Calculation:
                //
                // RM 8,000
                // + RM 5,000,000
                // + RM 60,000
                // + RM 2,000
                // -----------------
                // RM 5,070,000.00
                //
                // MAIPs should display:
                //
                // Jumlah Liabiliti Semasa
                // RM 5,070,000.00
                //
                // =================================================
            }
        );
    }
);