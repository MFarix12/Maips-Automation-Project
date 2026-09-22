const { test, expect } = require('@playwright/test');

const {
    ZakatTanamanPage
} = require('../../../pages/zakat/ZakatTanamanPage');


test.describe(
    'Zakat Tanaman - Crop Weight',
    () => {

        test(
            'TC_ZAKAT_TANAMAN_008 - Enter Crop Weight',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTanamanPage(page);

                const cropWeight = '1000';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TANAMAN
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorOpened();


                // =================================================
                // STEP 5 - VERIFY CROP WEIGHT FIELD
                // =================================================

                await expect(
                    zakatPage.cropWeightField
                ).toBeVisible({
                    timeout: 15000
                });

                await expect(
                    zakatPage.cropWeightField
                ).toBeEnabled();


                // =================================================
                // STEP 6 - ENTER 1000 KG
                // =================================================

                await zakatPage.enterCropWeight(
                    cropWeight
                );


                // =================================================
                // STEP 7 - VERIFY VALUE
                // =================================================

                await zakatPage.verifyCropWeight(
                    cropWeight
                );


                // =================================================
                // STEP 8 - CHANGE VALUE TO 1200 KG
                // =================================================

                await zakatPage.enterCropWeight(
                    '1200'
                );


                // =================================================
                // STEP 9 - VERIFY UPDATED VALUE
                // =================================================

                await zakatPage.verifyCropWeight(
                    '1200'
                );


                // =================================================
                // STEP 10 - CLEAR VALUE
                // =================================================

                await zakatPage.clearCropWeight();


                // =================================================
                // STEP 11 - VERIFY EMPTY
                // =================================================

                await expect(
                    zakatPage.cropWeightField
                ).toHaveValue('');


                // =================================================
                // STEP 12 - ENTER 1000 AGAIN
                // =================================================

                await zakatPage.enterCropWeight(
                    cropWeight
                );

                await zakatPage.verifyCropWeight(
                    cropWeight
                );


                // =================================================
                // STEP 13 - VERIFY OTHER CALCULATOR CONTROLS
                // =================================================

                await expect(
                    zakatPage.tolakKosOption
                ).toBeVisible();

                await expect(
                    zakatPage.tanpaTolakanOption
                ).toBeVisible();

                await expect(
                    zakatPage.cropSalesField
                ).toBeVisible();

                await expect(
                    zakatPage.incentiveField
                ).toBeVisible();

                await expect(
                    zakatPage.addToCartButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Berat Hasil Tanaman field is available
                // - User can enter 1000 kg
                // - Field retains 1000
                // - User can change value to 1200
                // - Field updates to 1200
                // - User can clear the field
                // - User can enter 1000 again
                // - Calculator remains functional
                //
                // No item is added to cart.
                //
                // =================================================
            }
        );
    }
);