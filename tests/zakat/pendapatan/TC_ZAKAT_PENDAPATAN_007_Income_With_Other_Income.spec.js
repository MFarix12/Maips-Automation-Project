const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_007 - Income With Other Income',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const monthlyIncome = 5000;
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
        // STEP 4: ENTER MONTHLY INCOME
        // =====================================================

        await zakatPendapatan.enterMonthlyIncome(
            monthlyIncome
        );

        await expect(
            zakatPendapatan.monthlyIncomeField
        ).toHaveValue(
            /5[,.]?000/
        );

        console.log(
            'Monthly income entered successfully.'
        );


        // =====================================================
        // STEP 5: ENTER OTHER INCOME
        // =====================================================

        await zakatPendapatan.enterOtherIncome(
            otherIncome
        );

        await expect(
            zakatPendapatan.otherIncomeField
        ).toHaveValue(
            /2[,.]?000/
        );

        console.log(
            'Other income entered successfully.'
        );


        // =====================================================
        // STEP 6: VERIFY INPUT VALUES
        // =====================================================

        await expect(
            zakatPendapatan.monthlyIncomeField
        ).toHaveValue(
            /5[,.]?000/
        );

        await expect(
            zakatPendapatan.otherIncomeField
        ).toHaveValue(
            /2[,.]?000/
        );

        console.log(
            'Monthly income and other income values retained correctly.'
        );


        // =====================================================
        // STEP 7: VERIFY SETERUSNYA BUTTON
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
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_007 PASSED'
        );
    }
);