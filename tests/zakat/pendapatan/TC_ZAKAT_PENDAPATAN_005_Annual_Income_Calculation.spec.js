const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_005 - Annual Income Calculation',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const annualIncome = 60000;
        const bonus = 10000;
        const otherIncome = 2000;


        // =====================================================
        // STEP 1: OPEN DIGITAL MAIPS
        // =====================================================

        await zakatPendapatan.open();

        console.log(
            'Digital MAIPs opened successfully.'
        );


        // =====================================================
        // STEP 2: OPEN ZAKAT PENDAPATAN
        // =====================================================

        await zakatPendapatan.openZakatPendapatan();

        await zakatPendapatan.verifyZakatPendapatanPage();

        console.log(
            'Zakat Pendapatan opened successfully.'
        );


        // =====================================================
        // STEP 3: OPEN CALCULATOR
        // =====================================================

        await zakatPendapatan.openIncomeCalculator();

        await zakatPendapatan.verifyCalculatorStep1();

        console.log(
            'Income calculator opened successfully.'
        );


        // =====================================================
        // STEP 4: SELECT TAHUNAN
        // =====================================================

        await zakatPendapatan.selectAnnualMode();

        await expect(
            zakatPendapatan.annualIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        console.log(
            'Tahunan mode selected successfully.'
        );


        // =====================================================
        // STEP 5: ENTER ANNUAL INCOME
        // =====================================================

        await zakatPendapatan.enterAnnualIncomeInformation(
            annualIncome,
            bonus,
            otherIncome
        );


        // =====================================================
        // STEP 6: VERIFY ENTERED VALUES
        // =====================================================

        await zakatPendapatan.verifyAnnualIncomeValues(
            annualIncome,
            bonus,
            otherIncome
        );

        console.log(
            'Annual income values verified successfully.'
        );


        // =====================================================
        // STEP 7: VERIFY SETERUSNYA
        // =====================================================

        await expect(
            zakatPendapatan.nextButton
        ).toBeVisible();

        await expect(
            zakatPendapatan.nextButton
        ).toBeEnabled();

        console.log(
            'Seterusnya button is visible and enabled.'
        );


        // =====================================================
        // STEP 8: CLICK SETERUSNYA
        // =====================================================

        await zakatPendapatan.clickNext();

        console.log(
            'Seterusnya clicked successfully.'
        );


        // =====================================================
        // STEP 9: CAPTURE RESULTING STATE
        // =====================================================

        await page.waitForTimeout(2000);

        console.log(
            'Current URL:',
            page.url()
        );

        const currentPageText =
            await page.locator('body').innerText();

        console.log(
            '========================================'
        );

        console.log(
            'PAGE AFTER SETERUSNYA'
        );

        console.log(
            '========================================'
        );

        console.log(
            currentPageText
        );

        console.log(
            '========================================'
        );


        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_005 PASSED'
        );
    }
);