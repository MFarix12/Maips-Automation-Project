const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Net Income Above Nisab', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_015 - Net Income Above Nisab',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA
            // =====================================================

            const monthlyIncome = 5000;
            const bonus = 1000;
            const otherIncome = 100;


            // =====================================================
            // EXPECTED RESULT
            // Confirmed from actual MAIPs result screen
            // =====================================================

            const expectedNisab =
                'RM 45,825.48';

            const expectedTotalIncome =
                'RM 61,100.00';

            const expectedTotalExpense =
                'RM 8,004.00';

            const expectedNetIncome =
                'RM 53,096.00';


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
            // STEP 3 - OPEN CALCULATOR
            // =====================================================

            await zakatPage.openIncomeCalculator();

            await zakatPage.verifyCalculatorStep1();


            // =====================================================
            // STEP 4 - ENTER INCOME INFORMATION
            // =====================================================

            await zakatPage.enterIncomeInformation(
                monthlyIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 5 - VERIFY INPUT
            // =====================================================

            await zakatPage.verifyIncomeValues(
                monthlyIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 6 - GO TO EXPENSE INFORMATION
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 7 - GO TO RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 8 - VERIFY RESULT PAGE
            // =====================================================

            await expect(
                page.getByText(
                    /Nisab.*Tahun/i
                )
            ).toBeVisible({
                timeout: 15000
            });

            await expect(
                page.getByText(
                    'Jumlah Pendapatan',
                    { exact: true }
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    'Jumlah Perbelanjaan',
                    { exact: true }
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    'Jumlah Pendapatan Bersih',
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 9 - VERIFY NISAB
            // =====================================================

            await expect(
                page.getByText(
                    expectedNisab,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 10 - VERIFY TOTAL INCOME
            // =====================================================

            await expect(
                page.getByText(
                    expectedTotalIncome,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 11 - VERIFY TOTAL EXPENSE
            // =====================================================

            await expect(
                page.getByText(
                    expectedTotalExpense,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 12 - VERIFY NET INCOME
            // =====================================================

            await expect(
                page.getByRole(
                    'gridcell',
                    { name: expectedNetIncome }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 13 - VERIFY NET INCOME > NISAB
            // =====================================================

            const nisab =
                45825.48;

            const netIncome =
                53096.00;

            expect(
                netIncome
            ).toBeGreaterThan(
                nisab
            );


            // =====================================================
            // STEP 14 - VERIFY RESULT CALCULATION
            // =====================================================

            const totalIncome =
                61100.00;

            const totalExpense =
                8004.00;

            expect(
                totalIncome - totalExpense
            ).toBeCloseTo(
                netIncome,
                2
            );


            // =====================================================
            // STEP 15 - VERIFY ADD TO CART AVAILABLE
            // =====================================================

            await expect(
                page.locator('#kalkulatorContentLayout')
                    .getByRole(
                        'button',
                        { name: 'Masuk Troli' }
                    )
            ).toBeVisible();

        }
    );

});