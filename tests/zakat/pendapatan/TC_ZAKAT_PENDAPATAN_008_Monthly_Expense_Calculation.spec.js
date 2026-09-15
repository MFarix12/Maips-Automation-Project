const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_008 - Monthly Expense Calculation',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const monthlyIncome = 5000;
        const bonus = 1000;
        const otherIncome = 100;
        const personalExpense = 1000;


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
        // STEP 4: ENTER INCOME INFORMATION
        // =====================================================

        await zakatPendapatan.enterIncomeInformation(
            monthlyIncome,
            bonus,
            otherIncome
        );

        await zakatPendapatan.verifyIncomeValues(
            monthlyIncome,
            bonus,
            otherIncome
        );

        console.log(
            'Income information entered successfully.'
        );


        // =====================================================
        // STEP 5: CONTINUE TO EXPENSE INFORMATION
        // =====================================================

        await zakatPendapatan.clickNext();


        // =====================================================
        // STEP 6: VERIFY PERSONAL EXPENSE FIELD
        // =====================================================

        await expect(
            zakatPendapatan.personalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        console.log(
            'Personal expense field displayed.'
        );


        // =====================================================
        // STEP 7: ENTER PERSONAL EXPENSE
        // =====================================================

        await zakatPendapatan.enterPersonalExpense(
            personalExpense
        );


        // =====================================================
        // STEP 8: VERIFY PERSONAL EXPENSE
        // =====================================================

        await zakatPendapatan.verifyPersonalExpense(
            personalExpense
        );


        // =====================================================
        // STEP 9: VERIFY SETERUSNYA
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
        // STEP 10: CONTINUE
        // =====================================================

        await zakatPendapatan.clickNext();

        console.log(
            'Expense information submitted successfully.'
        );


        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_008 PASSED'
        );
    }
);