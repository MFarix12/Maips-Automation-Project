const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Lembu Kerbau Default Selection',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_009 - Verify Lembu Kerbau Default Selection',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const defaultYear = '2026';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage
                    .openZakatTernakan();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage
                    .openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage
                    .verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY DEFAULT YEAR
                // =================================================

                await zakatPage
                    .verifyCalculatorHaulYear(
                        defaultYear
                    );


                // =================================================
                // STEP 6 - VERIFY LEMBU / KERBAU OPTION
                // =================================================

                await expect(
                    zakatPage.cattleOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - VERIFY KAMBING / BIRI-BIRI OPTION
                // =================================================

                await expect(
                    zakatPage.goatSheepOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 8 - VERIFY DEFAULT CATTLE SELECTION
                // =================================================

                await zakatPage
                    .verifyCattleDefaultSelection();


                // =================================================
                // STEP 9 - VERIFY CATTLE QUANTITY FIELD
                // =================================================

                await expect(
                    zakatPage.cattleQuantityField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.cattleQuantityField
                ).toBeEnabled();


                // =================================================
                // STEP 10 - VERIFY MALE CATTLE PRICE
                // =================================================

                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.maleCattlePriceField
                ).toBeEnabled();


                // =================================================
                // STEP 11 - VERIFY FEMALE CATTLE PRICE
                // =================================================

                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.femaleCattlePriceField
                ).toBeEnabled();


                // =================================================
                // STEP 12 - VERIFY DEFAULT QUANTITY
                // =================================================

                const quantityValue =
                    await zakatPage
                        .cattleQuantityField
                        .inputValue();


                expect(
                    [
                        '',
                        '0'
                    ]
                ).toContain(
                    quantityValue
                );


                // =================================================
                // STEP 13 - VERIFY DEFAULT MALE PRICE
                // =================================================

                const malePrice =
                    await zakatPage
                        .maleCattlePriceField
                        .inputValue();


                expect(
                    [
                        '',
                        '0',
                        '0.00'
                    ]
                ).toContain(
                    malePrice
                );


                // =================================================
                // STEP 14 - VERIFY DEFAULT FEMALE PRICE
                // =================================================

                const femalePrice =
                    await zakatPage
                        .femaleCattlePriceField
                        .inputValue();


                expect(
                    [
                        '',
                        '0',
                        '0.00'
                    ]
                ).toContain(
                    femalePrice
                );


                // =================================================
                // STEP 15 - VERIFY CART REMAINS EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Calculator opens successfully.
                //
                // - Default Tahun/Haul is 2026.
                //
                // - Lembu/Kerbau is the initially displayed
                //   livestock calculation mode.
                //
                // - Bilangan Lembu/Kerbau Ternakan is displayed.
                //
                // - Harga Semasa Seekor Lembu Jantan is displayed.
                //
                // - Harga Semasa Seekor Lembu Betina is displayed.
                //
                // - Cattle fields are enabled.
                //
                // - Initial cattle values are empty/zero.
                //
                // - No payment is added to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);