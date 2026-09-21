const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Manual Zakat Amount', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_022 - Manual Zakat Amount',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);

            const manualAmount = '100.00';


            // =====================================================
            // STEP 1 - OPEN MAIPS
            // =====================================================

            await zakatPage.open();


            // =====================================================
            // STEP 2 - OPEN ZAKAT PENDAPATAN
            // =====================================================

            await zakatPage.openZakatPendapatan();

            await zakatPage.verifyZakatPendapatanPage();


            // =====================================================
            // STEP 3 - VERIFY MANUAL AMOUNT FIELD
            // =====================================================

            await expect(
                zakatPage.manualZakatAmountField
            ).toBeVisible();


            // =====================================================
            // STEP 4 - OPEN TAHUN / HAUL SELECTION
            // =====================================================

            await zakatPage.openHaulSelection();


            // =====================================================
            // STEP 5 - SELECT HAUL
            // =====================================================

            await zakatPage.selectHaulOption(2);


            // =====================================================
            // STEP 6 - VERIFY AMOUNT FIELD STILL AVAILABLE
            // =====================================================

            await expect(
                zakatPage.manualZakatAmountField
            ).toBeVisible();


            // =====================================================
            // STEP 7 - ENTER MANUAL ZAKAT AMOUNT
            // =====================================================

            await zakatPage.enterManualZakatAmount(
                manualAmount
            );


            // =====================================================
            // STEP 8 - VERIFY ENTERED AMOUNT
            // =====================================================

            await zakatPage.verifyManualZakatAmount(
                manualAmount
            );


            // =====================================================
            // STEP 9 - VERIFY CALCULATOR WAS NOT OPENED
            // =====================================================

            await expect(
                zakatPage.openCalculatorButton
            ).toBeVisible();


            // =====================================================
            // STEP 10 - VERIFY PAYMENT CART IS AVAILABLE
            // =====================================================

            await expect(
                zakatPage.paymentCartHeading
            ).toBeVisible();

        }
    );

});