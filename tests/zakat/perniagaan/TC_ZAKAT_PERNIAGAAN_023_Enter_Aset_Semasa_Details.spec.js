const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Enter Aset Semasa Details',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_023 - Enter Aset Semasa Details',
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
                    }
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
                // STEP 8 - VERIFY PELABURAN
                // =================================================

                await zakatPage.verifyPelaburan(
                    testData.pelaburan
                );

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
                // STEP 11 - ENTER ALL ASET SEMASA DETAILS
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 12 - VERIFY SIMPANAN TETAP
                // =================================================

                await expect(
                    zakatPage.simpananTetapField
                ).toHaveValue(
                    '50000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 13 - VERIFY TUNAI DI TANGAN DAN DI BANK
                // =================================================

                await expect(
                    zakatPage.tunaiBankField
                ).toHaveValue(
                    '100000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 14 - VERIFY PELBAGAI PENGHUTANG
                // =================================================

                await expect(
                    zakatPage.pelbagaiPenghutangField
                ).toHaveValue(
                    '5000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 15 - VERIFY AKAUN BELUM TERIMA
                // =================================================

                await expect(
                    zakatPage.akaunBelumTerimaField
                ).toHaveValue(
                    '30000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 16 - VERIFY CUKAI BOLEH PULIH
                // =================================================

                await expect(
                    zakatPage.cukaiBolehPulihField
                ).toHaveValue(
                    '5000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 17 - VERIFY PELABURAN JANGKA PENDEK
                // =================================================

                await expect(
                    zakatPage.pelaburanJangkaPendekField
                ).toHaveValue(
                    '60000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 18 - VERIFY LAIN-LAIN
                // =================================================

                await expect(
                    zakatPage.asetLainLainField
                ).toHaveValue(
                    '1000',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 19 - COMPLETE FIELD VERIFICATION
                // =================================================

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 20 - VERIFY JUMLAH ASET SECTION EXISTS
                // =================================================

                await expect(
                    zakatPage.jumlahAsetSemasaLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 21 - VERIFY SETERUSNYA AVAILABLE
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
                // Aset Semasa values:
                //
                // Simpanan Tetap              = RM 50,000
                // Tunai di Tangan dan Bank    = RM100,000
                // Pelbagai Penghutang          = RM  5,000
                // Akaun Belum Terima           = RM 30,000
                // Cukai Boleh Pulih            = RM  5,000
                // Pelaburan Jangka Pendek      = RM 60,000
                // Lain-lain                    = RM  1,000
                //
                // All fields should retain the entered values.
                //
                // Calculated expected total:
                //
                // RM50,000
                // + RM100,000
                // + RM5,000
                // + RM30,000
                // + RM5,000
                // + RM60,000
                // + RM1,000
                //
                // = RM251,000.00
                //
                // The exact total will be validated separately
                // in TC024.
                //
                // =================================================
            }
        );
    }
);