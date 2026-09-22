const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Open Calculator',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_006 - Open Zakat Ternakan Calculator',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


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
                // STEP 3 - VERIFY MAIN PAGE
                // =================================================

                await zakatPage
                    .verifyZakatTernakanPage();


                // =================================================
                // STEP 4 - VERIFY BUKA KALKULATOR
                // =================================================

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // STEP 5 - OPEN CALCULATOR
                // =================================================

                await zakatPage
                    .openCalculator();


                // =================================================
                // STEP 6 - VERIFY CALCULATOR TITLE
                // =================================================

                await expect(
                    zakatPage.calculatorTitle
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 7 - VERIFY CALCULATOR CONTENT
                // =================================================

                await zakatPage
                    .verifyCalculatorIsOpen();


                // =================================================
                // STEP 8 - VERIFY MAKLUMAT TERNAKAN
                // =================================================

                await expect(
                    zakatPage.livestockInformationHeading
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 9 - VERIFY JENIS TERNAKAN
                // =================================================

                await expect(
                    zakatPage.livestockTypeLabel
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 10 - VERIFY LEMBU / KERBAU OPTION
                // =================================================

                await expect(
                    zakatPage.cattleOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 11 - VERIFY KAMBING / BIRI-BIRI OPTION
                // =================================================

                await expect(
                    zakatPage.goatSheepOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY CALCULATOR HAUL
                // =================================================

                await expect(
                    zakatPage.calculatorHaulFormItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 13 - VERIFY CALCULATOR MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.calculatorAddToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 14 - VERIFY CART IS STILL EMPTY
                //
                // Merely opening the calculator must not create a
                // payment item.
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
                // - Zakat Ternakan page opens successfully.
                //
                // - User can click Buka Kalkulator.
                //
                // - Kalkulator Zakat Ternakan is displayed.
                //
                // - Maklumat Ternakan section is displayed.
                //
                // - Jenis Ternakan is displayed.
                //
                // - Lembu/Kerbau option is displayed.
                //
                // - Kambing/Biri-Biri option is displayed.
                //
                // - Calculator Tahun/Haul is displayed.
                //
                // - Masuk Troli is displayed.
                //
                // - Opening calculator does not add anything
                //   to Bakul Bayaran.
                //
                // =================================================
            }
        );
    }
);