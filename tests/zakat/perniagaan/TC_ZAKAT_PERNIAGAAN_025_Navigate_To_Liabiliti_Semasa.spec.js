const { test, expect } = require('@playwright/test');

const {
    ZakatPerniagaanPage
} = require('../../../pages/zakat/ZakatPerniagaanPage');


test.describe(
    'Zakat Perniagaan - Navigate To Liabiliti Semasa',
    () => {

        test(
            'TC_ZAKAT_PERNIAGAAN_025 - Navigate To Liabiliti Semasa',
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
                // STEP 11 - ENTER ASET SEMASA
                // =================================================

                await zakatPage.enterAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 12 - VERIFY ASET SEMASA VALUES
                // =================================================

                await zakatPage.verifyAsetSemasaDetails(
                    testData.asetSemasa
                );


                // =================================================
                // STEP 13 - VERIFY JUMLAH ASET SEMASA
                // =================================================

                await zakatPage.verifyJumlahAsetSemasa(
                    testData.expectedJumlahAsetSemasa
                );


                // =================================================
                // STEP 14 - NAVIGATE TO LIABILITI SEMASA
                // =================================================

                await zakatPage.navigateToLiabilitiSemasa();


                // =================================================
                // STEP 15 - VERIFY AKAUN BELUM BAYAR
                // =================================================

                await expect(
                    zakatPage.akaunBelumBayarField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.akaunBelumBayarField
                ).toBeEnabled();


                // =================================================
                // STEP 16 - VERIFY PINJAMAN JANGKA PENDEK
                // =================================================

                await expect(
                    zakatPage.pinjamanJangkaPendekField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.pinjamanJangkaPendekField
                ).toBeEnabled();


                // =================================================
                // STEP 17 - VERIFY CUKAI & GAJI BELUM BAYAR
                // =================================================

                await expect(
                    zakatPage.cukaiGajiBelumBayarField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cukaiGajiBelumBayarField
                ).toBeEnabled();


                // =================================================
                // STEP 18 - VERIFY LAIN-LAIN
                // =================================================

                await expect(
                    zakatPage.liabilitiLainLainField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.liabilitiLainLainField
                ).toBeEnabled();


                // =================================================
                // STEP 19 - VERIFY JUMLAH LIABILITI SEMASA
                // =================================================

                await expect(
                    zakatPage.jumlahLiabilitiSemasaLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 20 - COMPLETE STEP VERIFICATION
                // =================================================

                await zakatPage.verifyLiabilitiSemasaStep();


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
                // After completing Aset Semasa and clicking
                // Seterusnya:
                //
                // 1. Calculator advances to Liabiliti Semasa.
                //
                // 2. Akaun Belum Bayar (Other Creditors)
                //    is displayed.
                //
                // 3. Pinjaman Jangka Pendek is displayed.
                //
                // 4. Cukai & Gaji Belum Bayar is displayed.
                //
                // 5. Lain-lain (jika ada) is displayed.
                //
                // 6. Jumlah Liabiliti Semasa is displayed.
                //
                // 7. No Zakat Perniagaan item is added to cart.
                //
                // =================================================
            }
        );
    }
);