const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Verify Jumlah Aset Semasa',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_024 - Verify Jumlah Aset Semasa',
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

                    expectedJumlahAsetSemasa: 251000
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
                // STEP 10 - VERIFY ASET SEMASA STEP
                // =================================================

                await zakatPage.verifyAsetSemasaStep();


                // =================================================
                // STEP 11 - ENTER ASET SEMASA DETAILS
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 12 - VERIFY ALL ENTERED VALUES
                // =================================================

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 13 - CALCULATE EXPECTED TOTAL
                // =================================================

                const calculatedExpectedTotal =
                    Number(testData.asetSemasa.simpananTetap) +
                    Number(testData.asetSemasa.tunaiBank) +
                    Number(testData.asetSemasa.pelbagaiPenghutang) +
                    Number(testData.asetSemasa.akaunBelumTerima) +
                    Number(testData.asetSemasa.cukaiBolehPulih) +
                    Number(testData.asetSemasa.pelaburanJangkaPendek) +
                    Number(testData.asetSemasa.lainLain);


                // =================================================
                // STEP 14 - VERIFY TEST DATA TOTAL
                // =================================================

                expect(
                    calculatedExpectedTotal
                ).toBe(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 15 - VERIFY JUMLAH ASET SEMASA LABEL
                // =================================================

                await expect(
                    zakatPage.jumlahAsetSemasaLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY JUMLAH ASET SEMASA
                // =================================================

                await zakatPage.verifyJumlahAsetSemasa(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 17 - VERIFY SETERUSNYA AVAILABLE
                // =================================================

                await expect(
                    zakatPage.penyataNextButton
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.penyataNextButton
                ).toBeEnabled();


                // =================================================
                // STEP 18 - VERIFY CART REMAINS EMPTY
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
                // Simpanan Tetap             RM  50,000
                // Tunai di Tangan/Bank       RM 100,000
                // Pelbagai Penghutang         RM   5,000
                // Akaun Belum Terima          RM  30,000
                // Cukai Boleh Pulih           RM   5,000
                // Pelaburan Jangka Pendek     RM  60,000
                // Lain-lain                   RM   1,000
                // ---------------------------------------
                // Jumlah Aset Semasa          RM 251,000.00
                //
                // MAIPs should display:
                //
                // RM 251,000.00
                //
                // =================================================
            }
        );
    }
);