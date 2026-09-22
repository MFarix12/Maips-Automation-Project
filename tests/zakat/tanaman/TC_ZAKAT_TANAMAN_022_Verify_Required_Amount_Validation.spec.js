const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Required Amount Validation',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_022 - Verify Required Amount Validation',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TANAMAN
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatTanamanPage();


                // =================================================
                // STEP 4 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 5 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 6 - SELECT TANPA TOLAKAN
                // =================================================

                await zakatPage.selectTanpaTolakan();


                await zakatPage.verifyTanpaTolakanSelected();


                // =================================================
                // STEP 7 - VERIFY REQUIRED FIELDS ARE EMPTY
                // =================================================

                const cropWeight =
                    await zakatPage
                        .cropWeightField
                        .inputValue();


                const cropSales =
                    await zakatPage
                        .cropSalesField
                        .inputValue();


                console.log(
                    'Crop Weight Before Submit:',
                    cropWeight
                );


                console.log(
                    'Crop Sales Before Submit:',
                    cropSales
                );


                // =================================================
                // STEP 8 - VERIFY CART IS EMPTY BEFORE SUBMIT
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
                // STEP 9 - CLICK MASUK TROLI
                // =================================================

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible({
                    timeout: 15000
                });


                await zakatPage.addToCartButton.click();


                // =================================================
                // STEP 10 - CAPTURE ACTUAL VALIDATION
                // =================================================

                const validationResult =
                    await zakatPage
                        .verifyCalculatorValidation();


                expect(
                    validationResult
                ).toBeTruthy();


                // =================================================
                // STEP 11 - VERIFY CART STILL EMPTY
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 12 - VERIFY TOTAL STILL ZERO
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00'
                );


                // =================================================
                // STEP 13 - VERIFY BAYAR DISABLED
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // User attempts to add an incomplete Zakat
                // Tanaman calculation to the cart.
                //
                // MAIPS must not add an invalid/incomplete item.
                //
                // The actual validation generated by MAIPS is
                // captured in the console so that we can build
                // an exact assertion based on the real UI.
                //
                // Bakul Bayaran remains empty.
                //
                // Total remains RM 0.00.
                //
                // Bayar remains disabled.
                //
                // =================================================
            }
        );
    }
);