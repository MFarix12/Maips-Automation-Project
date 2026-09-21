const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Select Emas',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_004 - Select Emas',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT EMAS / PERAK
                // =================================================

                await zakatPage.openBayaranZakat();


                // =================================================
                // STEP 3 - VERIFY PAGE
                // =================================================

                await zakatPage.verifyZakatEmasPerakPage();


                // =================================================
                // STEP 4 - VERIFY EMAS IS DEFAULT
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeChecked();

                await expect(
                    zakatPage.perakRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 5 - SWITCH TO PERAK
                // =================================================

                await zakatPage.selectPerak();


                // =================================================
                // STEP 6 - VERIFY PERAK SELECTED
                // =================================================

                await expect(
                    zakatPage.perakRadio
                ).toBeChecked();

                await expect(
                    zakatPage.emasRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 7 - SELECT EMAS
                // =================================================

                await zakatPage.selectEmas();


                // =================================================
                // STEP 8 - VERIFY EMAS SELECTED
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeChecked();


                // =================================================
                // STEP 9 - VERIFY PERAK DESELECTED
                // =================================================

                await expect(
                    zakatPage.perakRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 10 - VERIFY FORM REMAINS AVAILABLE
                // =================================================

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeEnabled();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Initial:
                // - Emas is selected
                // - Perak is not selected
                //
                // After selecting Perak:
                // - Perak becomes selected
                // - Emas becomes deselected
                //
                // After selecting Emas:
                // - Emas becomes selected
                // - Perak becomes deselected
                //
                // Only one Jenis Logam can be selected at a time.
                //
                // =================================================
            }
        );
    }
);