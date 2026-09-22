const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Calculator Default State',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_007 - Verify Calculator Default State',
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
                // STEP 4 - VERIFY CALCULATOR OPEN
                // =================================================

                await zakatPage
                    .verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY DEFAULT HAUL = 2026
                // =================================================

                await zakatPage
                    .verifyCalculatorDefaultHaul(
                        defaultYear
                    );


                // =================================================
                // STEP 6 - VERIFY LIVESTOCK TYPES
                // =================================================

                await expect(
                    zakatPage.cattleOption
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.goatSheepOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - VERIFY DEFAULT CATTLE FIELDS
                // =================================================

                await zakatPage
                    .verifyCattleFieldsVisible();


                // =================================================
                // STEP 8 - VERIFY QUANTITY DEFAULT VALUE
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
                // STEP 9 - VERIFY MALE PRICE DEFAULT VALUE
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
                // STEP 10 - VERIFY FEMALE PRICE DEFAULT VALUE
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
                // STEP 11 - COMPLETE DEFAULT-STATE CHECK
                // =================================================

                await zakatPage
                    .verifyCalculatorDefaultState();


                // =================================================
                // STEP 12 - VERIFY NOTHING ADDED TO CART
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
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
                // - Kalkulator Zakat Ternakan opens successfully.
                //
                // - Default Tahun/Haul is 2026.
                //
                // - Lembu/Kerbau is available.
                //
                // - Kambing/Biri-Biri is available.
                //
                // - Lembu/Kerbau quantity field is displayed.
                //
                // - Lembu Jantan price field is displayed.
                //
                // - Lembu Betina price field is displayed.
                //
                // - Calculator input fields are initially empty/0.
                //
                // - No item is automatically added to the cart.
                //
                // - Bakul Bayaran total remains RM 0.00.
                //
                // =================================================
            }
        );
    }
);