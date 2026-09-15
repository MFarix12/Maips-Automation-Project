const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_004 - Monthly Income Calculation',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // TEST DATA
        // =====================================================

        const monthlyIncome = 5000;
        const bonus = 1000;
        const otherIncome = 100;


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
            'Zakat Pendapatan calculator opened successfully.'
        );


        // =====================================================
        // STEP 4: ENTER MONTHLY INCOME
        // =====================================================

        await zakatPendapatan.enterMonthlyIncome(
            monthlyIncome
        );


        // =====================================================
        // STEP 5: ENTER BONUS
        // =====================================================

        await zakatPendapatan.enterBonus(
            bonus
        );


        // =====================================================
        // STEP 6: ENTER OTHER INCOME
        // =====================================================

        await zakatPendapatan.enterOtherIncome(
            otherIncome
        );


        // =====================================================
        // STEP 7: VERIFY ENTERED VALUES
        // =====================================================

        await expect(
            zakatPendapatan.monthlyIncomeField
        ).toHaveValue(/5[,.]?000/);

        await expect(
            zakatPendapatan.bonusField
        ).toHaveValue(/1[,.]?000/);

        await expect(
            zakatPendapatan.otherIncomeField
        ).toHaveValue(/100/);

        console.log(
            'All income values verified successfully.'
        );


        // =====================================================
        // STEP 8: CLICK NEXT
        // =====================================================

        await zakatPendapatan.clickNext();

        console.log(
            'Seterusnya clicked successfully.'
        );


        // =====================================================
// STEP 9: DEBUG CURRENT STATE AFTER SETERUSNYA
// =====================================================

await page.waitForTimeout(2000);

console.log(
    'Current URL:',
    page.url()
);

console.log(
    'Current page text:',
    await page.locator('body').innerText()
);

await page.screenshot({
    path: 'test-results/TC004_After_Seterusnya.png',
    fullPage: true
});

        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_004 PASSED'
        );
    }
);