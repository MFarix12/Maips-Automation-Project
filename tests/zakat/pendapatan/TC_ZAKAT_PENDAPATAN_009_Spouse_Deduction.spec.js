const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_009 - Spouse Deduction',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const monthlyIncome = 5000;
        const bonus = 1000;
        const otherIncome = 100;

        const spouseCount = 1;


        // =====================================================
        // STEP 1: OPEN DIGITAL MAIPS
        // =====================================================

        await zakatPendapatan.open();


        // =====================================================
        // STEP 2: OPEN ZAKAT PENDAPATAN
        // =====================================================

        await zakatPendapatan.openZakatPendapatan();

        await zakatPendapatan.verifyZakatPendapatanPage();


        // =====================================================
        // STEP 3: OPEN CALCULATOR
        // =====================================================

        await zakatPendapatan.openIncomeCalculator();

        await zakatPendapatan.verifyCalculatorStep1();


        // =====================================================
        // STEP 4: ENTER INCOME INFORMATION
        // =====================================================

        await zakatPendapatan.enterIncomeInformation(
            monthlyIncome,
            bonus,
            otherIncome
        );


        // =====================================================
        // STEP 5: VERIFY INCOME VALUES
        // =====================================================

        await zakatPendapatan.verifyIncomeValues(
            monthlyIncome,
            bonus,
            otherIncome
        );


        // =====================================================
        // STEP 6: CONTINUE TO EXPENSE INFORMATION
        // =====================================================

        await zakatPendapatan.clickNext();


        // =====================================================
        // STEP 7: VERIFY EXPENSE STEP
        // =====================================================

        await zakatPendapatan.verifyCalculatorStep2();


        // =====================================================
        // STEP 8: VERIFY BILANGAN ISTERI FIELD
        // =====================================================

        await expect(
            zakatPendapatan.spouseCountField
        ).toBeVisible({
            timeout: 15000
        });

        console.log(
            'Bilangan Isteri field displayed.'
        );


        // =====================================================
        // STEP 9: ENTER SPOUSE COUNT
        // =====================================================

        await zakatPendapatan.enterSpouseCount(
            spouseCount
        );


        // =====================================================
        // STEP 10: VERIFY SPOUSE COUNT
        // =====================================================

        await zakatPendapatan.verifySpouseCount(
            spouseCount
        );


        // =====================================================
        // STEP 11: VERIFY SETERUSNYA
        // =====================================================

        await expect(
            zakatPendapatan.nextButton
        ).toBeVisible();

        await expect(
            zakatPendapatan.nextButton
        ).toBeEnabled();

        console.log(
            'Seterusnya button is available.'
        );


        // =====================================================
        // STEP 12: CONTINUE
        // =====================================================

        await zakatPendapatan.clickNext();


        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_009 PASSED'
        );
    }
);