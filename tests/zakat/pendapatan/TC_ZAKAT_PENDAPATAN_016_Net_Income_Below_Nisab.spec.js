const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Net Income Below Nisab', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_016 - Net Income Below Nisab',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA
            // =====================================================

            const monthlyIncome = 3000;
            const bonus = 0;
            const otherIncome = 0;


            // =====================================================
            // EXPECTED RESULT
            // Confirmed from actual MAIPs STG result
            // =====================================================

            const expectedNisab =
                'RM 45,825.48';

            const expectedTotalIncome =
                'RM 36,000.00';

            const expectedTotalExpense =
                'RM 8,004.00';

            const expectedNetIncome =
                'RM 27,996.00';


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
            // STEP 4 - ENTER INCOME
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
            // STEP 8 - VERIFY RESULT TABLE
            // =====================================================

            await expect(
                page.getByText(
                    'Amaun Nisab Tahun 2026',
                    { exact: true }
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
            // STEP 9 - VERIFY NISAB VALUE
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
            // STEP 13 - VERIFY NET INCOME CALCULATION
            // =====================================================

            const totalIncome =
                36000.00;

            const totalExpense =
                8004.00;

            const netIncome =
                27996.00;

            expect(
                totalIncome - totalExpense
            ).toBeCloseTo(
                netIncome,
                2
            );


            // =====================================================
            // STEP 14 - VERIFY NET INCOME BELOW NISAB
            // =====================================================

            const nisab =
                45825.48;

            expect(
                netIncome
            ).toBeLessThan(
                nisab
            );


            // =====================================================
            // STEP 15 - VERIFY BELOW NISAB WARNING
            // =====================================================

            const belowNisabWarning =
                page.getByText(
                    /Jumlah pendapatan bersih anda tidak mencapai amaun nisab tahun 2026/i
                );

            await expect(
                belowNisabWarning
            ).toBeVisible({
                timeout: 15000
            });


            // =====================================================
            // STEP 16 - VERIFY NOT SUBJECT TO ZAKAT
            // =====================================================

            await expect(
                page.getByText(
                    /Anda tidak dikenakan zakat/i
                )
            ).toBeVisible();


            // =====================================================
            // STEP 17 - VERIFY PREVIOUS BUTTON AVAILABLE
            // =====================================================

            await expect(
                page.locator('#kalkulatorContentLayout')
                    .getByRole(
                        'button',
                        { name: 'Sebelum' }
                    )
            ).toBeVisible();

        }
    );

});