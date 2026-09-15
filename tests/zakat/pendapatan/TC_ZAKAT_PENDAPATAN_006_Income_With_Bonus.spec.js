const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_006 - Income With Bonus',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const monthlyIncome = 5000;
        const bonus = 1000;


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
        // STEP 5: ENTER BONUS
        // =====================================================

        await zakatPendapatan.enterBonus(
            bonus
        );

        await expect(
            zakatPendapatan.bonusField
        ).toHaveValue(
            /1[,.]?000/
        );

        console.log(
            'Bonus entered successfully.'
        );


        // =====================================================
        // STEP 6: VERIFY INPUTS ARE RETAINED
        // =====================================================

        await expect(
            zakatPendapatan.monthlyIncomeField
        ).toHaveValue(
            /5[,.]?000/
        );

        await expect(
            zakatPendapatan.bonusField
        ).toHaveValue(
            /1[,.]?000/
        );

        console.log(
            'Income and bonus values retained correctly.'
        );


        // =====================================================
        // STEP 7: VERIFY NEXT BUTTON
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
        // STEP 8: CLICK NEXT
        // =====================================================

        await zakatPendapatan.clickNext();

        console.log(
            'Seterusnya clicked successfully.'
        );


        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_006 PASSED'
        );
    }
);