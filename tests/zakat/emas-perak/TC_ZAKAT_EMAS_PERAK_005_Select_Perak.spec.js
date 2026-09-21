const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Select Perak',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_005 - Select Perak',
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
                // STEP 4 - VERIFY DEFAULT SELECTION
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeChecked();

                await expect(
                    zakatPage.perakRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 5 - SELECT PERAK
                // =================================================

                await zakatPage.selectPerak();


                // =================================================
                // STEP 6 - VERIFY PERAK SELECTED
                // =================================================

                await expect(
                    zakatPage.perakRadio
                ).toBeChecked();


                // =================================================
                // STEP 7 - VERIFY EMAS DESELECTED
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).not.toBeChecked();


                // =================================================
                // STEP 8 - VERIFY ONLY ONE RADIO IS SELECTED
                // =================================================

                const emasChecked =
                    await zakatPage.emasRadio.isChecked();

                const perakChecked =
                    await zakatPage.perakRadio.isChecked();

                expect(emasChecked).toBe(false);
                expect(perakChecked).toBe(true);


                // =================================================
                // STEP 9 - VERIFY FORM REMAINS AVAILABLE
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
                // Before selection:
                // - Emas is selected
                // - Perak is not selected
                //
                // After selecting Perak:
                // - Perak becomes selected
                // - Emas becomes deselected
                // - Only one Jenis Logam remains selected
                // - Other Zakat Emas/Perak controls remain available
                //
                // =================================================
            }
        );
    }
);