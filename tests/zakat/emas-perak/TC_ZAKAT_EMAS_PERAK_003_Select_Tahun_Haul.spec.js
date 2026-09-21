const { test, expect } = require('@playwright/test');

const {
    ZakatEmasPerakPage
} = require('../../../pages/zakat/ZakatEmasPerakPage');


test.describe(
    'Zakat Emas / Perak - Tahun Haul',
    () => {

        test(
            'TC_ZAKAT_EMAS_PERAK_003 - Select Tahun Haul',
            async ({ page }) => {

                const zakatPage =
                    new ZakatEmasPerakPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const selectedYear = '2026';


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
                // STEP 4 - OPEN TAHUN / HAUL DROPDOWN
                // =================================================

                await zakatPage.openHaulSelection();


                // =================================================
                // STEP 5 - VERIFY YEAR OPTION EXISTS
                // =================================================

                const yearOption =
                    page.getByRole(
                        'option',
                        {
                            name: selectedYear,
                            exact: true
                        }
                    );

                await expect(
                    yearOption
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 6 - SELECT YEAR
                // =================================================

                await yearOption.click();


                // =================================================
                // STEP 7 - VERIFY SELECTED YEAR
                // =================================================

                await zakatPage.verifySelectedHaulYear(
                    selectedYear
                );


                // =================================================
                // STEP 8 - VERIFY OTHER PAGE ELEMENTS REMAIN
                // =================================================

                await expect(
                    zakatPage.emasRadio
                ).toBeVisible();

                await expect(
                    zakatPage.perakRadio
                ).toBeVisible();

                await expect(
                    zakatPage.manualAmountField
                ).toBeVisible();

                await expect(
                    zakatPage.openCalculatorButton
                ).toBeVisible();


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // - Tahun/Haul dropdown can be opened
                // - 2026 can be selected
                // - Selected Tahun/Haul becomes 2026
                // - Zakat Emas/Perak form remains available
                // - Emas/Perak selection remains available
                // - Jumlah Bayaran remains available
                // - Buka Kalkulator remains available
                //
                // =================================================
            }
        );
    }
);