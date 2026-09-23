const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Navigate To Aset Semasa',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_022 - Navigate To Aset Semasa',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPerniagaanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    pelaburan: '1000000',
                    expectedJumlahPelaburan: 1000000
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
                // STEP 7 - VERIFY PELABURAN STEP
                // =================================================

                await expect(
                    zakatPage.pelaburanField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - ENTER PELABURAN
                // =================================================

                await zakatPage.enterPelaburan(
                    testData.pelaburan
                );


                // =================================================
                // STEP 9 - VERIFY PELABURAN
                // =================================================

                await zakatPage.verifyPelaburan(
                    testData.pelaburan
                );

                await zakatPage.verifyJumlahPelaburan(
                    testData.expectedJumlahPelaburan
                );


                // =================================================
                // STEP 10 - CLICK SETERUSNYA
                // =================================================

                await zakatPage.navigateToAsetSemasa();


                // =================================================
                // STEP 11 - VERIFY SIMPANAN TETAP
                // =================================================

                await expect(
                    zakatPage.simpananTetapField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.simpananTetapField
                ).toBeEnabled();


                // =================================================
                // STEP 12 - VERIFY TUNAI DI TANGAN DAN DI BANK
                // =================================================

                await expect(
                    zakatPage.tunaiBankField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.tunaiBankField
                ).toBeEnabled();


                // =================================================
                // STEP 13 - VERIFY PELBAGAI PENGHUTANG
                // =================================================

                await expect(
                    zakatPage.pelbagaiPenghutangField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY AKAUN BELUM TERIMA
                // =================================================

                await expect(
                    zakatPage.akaunBelumTerimaField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 15 - VERIFY CUKAI BOLEH PULIH
                // =================================================

                await expect(
                    zakatPage.cukaiBolehPulihField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY PELABURAN JANGKA PENDEK
                // =================================================

                await expect(
                    zakatPage.pelaburanJangkaPendekField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - VERIFY LAIN-LAIN
                // =================================================

                await expect(
                    zakatPage.asetLainLainField
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 18 - VERIFY JUMLAH ASET SEMASA
                // =================================================

                await expect(
                    zakatPage.jumlahAsetSemasaLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 19 - VERIFY COMPLETE ASET SEMASA STEP
                // =================================================

                await zakatPage.verifyAsetSemasaStep();


                // =================================================
                // STEP 20 - VERIFY SETERUSNYA AVAILABLE
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
                // STEP 21 - VERIFY CART REMAINS EMPTY
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
                // 1. Penyata Kewangan method opens.
                //
                // 2. Pelaburan RM1,000,000 is entered.
                //
                // 3. User clicks Seterusnya.
                //
                // 4. Calculator advances to Aset Semasa.
                //
                // 5. The following fields are displayed:
                //
                //    - Simpanan Tetap
                //    - Tunai di Tangan dan di Bank
                //    - Pelbagai Penghutang dan Deposit
                //    - Akaun Belum Terima
                //    - Cukai Boleh Pulih
                //    - Pelaburan Jangka Pendek
                //    - Lain-lain (jika ada)
                //
                // 6. Jumlah Aset Semasa is displayed.
                //
                // 7. Seterusnya remains available.
                //
                // 8. Nothing is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);