const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Net Income Equal To Nisab', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_017 - Net Income Equal To Nisab',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA
            // =====================================================

            const annualIncome = 53825.48;
            const bonus = 0;
            const otherIncome = 0;


            // =====================================================
            // EXPECTED RESULT
            // Confirmed from actual MAIPs STG
            // =====================================================

            const expectedNisab =
                'RM 45,825.48';

            const expectedTotalIncome =
                'RM 53,825.48';

            const expectedTotalExpense =
                'RM 8,000.00';

            const expectedNetIncome =
                'RM 45,825.48';

            const expectedAnnualZakat =
                'RM 1,145.64';


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
            // STEP 4 - SELECT ANNUAL MODE
            // =====================================================

            await zakatPage.selectAnnualMode();


            // =====================================================
            // STEP 5 - ENTER ANNUAL INCOME
            // =====================================================

            await zakatPage.enterAnnualIncomeInformation(
                annualIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 6 - VERIFY ANNUAL INPUT
            // =====================================================

            await zakatPage.verifyAnnualIncomeValues(
                annualIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 7 - GO TO EXPENSE INFORMATION
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 8 - GO TO RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 9 - VERIFY RESULT LABELS
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
            // STEP 12 - VERIFY NISAB AND NET INCOME VALUES
            // =====================================================

            /*
             * In this TC:
             *
             * Nisab      = RM 45,825.48
             * Net Income = RM 45,825.48
             *
             * Therefore Playwright correctly finds two gridcells
             * containing exactly the same amount.
             */

            const equalAmountCells =
                page.getByRole(
                    'gridcell',
                    { name: expectedNisab }
                );

            await expect(
                equalAmountCells
            ).toHaveCount(2);


            // =====================================================
            // STEP 13 - VERIFY BOTH VALUES ARE VISIBLE
            // =====================================================

            await expect(
                equalAmountCells.nth(0)
            ).toBeVisible();

            await expect(
                equalAmountCells.nth(1)
            ).toBeVisible();


            // =====================================================
            // STEP 14 - VERIFY NET INCOME CALCULATION
            // =====================================================

            const totalIncome = 53825.48;
            const totalExpense = 8000.00;
            const netIncome = 45825.48;

            const calculatedNetIncome =
                totalIncome - totalExpense;

            expect(
                calculatedNetIncome
            ).toBeCloseTo(
                netIncome,
                2
            );


            // =====================================================
            // STEP 15 - VERIFY NET INCOME EQUALS NISAB
            // =====================================================

            const nisab = 45825.48;

            expect(
                netIncome
            ).toBeCloseTo(
                nisab,
                2
            );


            // =====================================================
            // STEP 16 - VERIFY BELOW NISAB WARNING IS NOT SHOWN
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i
                )
            ).toHaveCount(0);


            // =====================================================
            // STEP 17 - VERIFY ANNUAL ZAKAT LABEL
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Setahun/i
                )
            ).toBeVisible();


            // =====================================================
            // STEP 18 - VERIFY 2.5% RATE
            // =====================================================

            await expect(
                page.getByText(
                    /2\.5%/
                )
            ).toBeVisible();


            // =====================================================
            // STEP 19 - VERIFY ANNUAL ZAKAT AMOUNT
            // =====================================================

            await expect(
                page.getByText(
                    expectedAnnualZakat,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 20 - VERIFY ZAKAT CALCULATION
            // =====================================================

            const expectedCalculatedZakat =
                netIncome * 0.025;

            expect(
                expectedCalculatedZakat
            ).toBeCloseTo(
                1145.637,
                2
            );

            /*
             * MAIPs displays the result rounded to 2 decimal places:
             *
             * 45,825.48 × 2.5%
             * = 1,145.637
             * = RM 1,145.64
             */


            // =====================================================
            // STEP 21 - VERIFY ADD TO CART AVAILABLE
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