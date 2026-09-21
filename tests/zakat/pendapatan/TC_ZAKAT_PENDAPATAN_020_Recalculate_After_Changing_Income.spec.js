const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Recalculate After Changing Income', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_020 - Recalculate After Changing Income',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


            // =====================================================
            // INITIAL TEST DATA
            // =====================================================

            const initialMonthlyIncome = 3000;
            const initialBonus = 0;
            const initialOtherIncome = 0;

            const initialTotalIncome =
                'RM 36,000.00';

            const initialNetIncome =
                'RM 27,996.00';


            // =====================================================
            // UPDATED TEST DATA
            // =====================================================

            const updatedMonthlyIncome = 5000;
            const updatedBonus = 1000;
            const updatedOtherIncome = 100;

            const updatedTotalIncome =
                'RM 61,100.00';

            const updatedTotalExpense =
                'RM 8,004.00';

            const updatedNetIncome =
                'RM 53,096.00';

            const updatedMonthlyZakat =
                'RM 110.62';


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
            // STEP 4 - ENTER INITIAL INCOME
            // =====================================================

            await zakatPage.enterIncomeInformation(
                initialMonthlyIncome,
                initialBonus,
                initialOtherIncome
            );


            // =====================================================
            // STEP 5 - VERIFY INITIAL INPUT
            // =====================================================

            await zakatPage.verifyIncomeValues(
                initialMonthlyIncome,
                initialBonus,
                initialOtherIncome
            );


            // =====================================================
            // STEP 6 - GO TO EXPENSE STEP
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 7 - GO TO INITIAL RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 8 - VERIFY INITIAL RESULT
            // =====================================================

            await expect(
                page.getByText(
                    'Jumlah Pendapatan Bersih',
                    { exact: true }
                )
            ).toBeVisible({
                timeout: 15000
            });

            await expect(
                page.getByText(
                    initialTotalIncome,
                    { exact: true }
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    initialNetIncome,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 9 - VERIFY INITIAL RESULT IS BELOW NISAB
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    /Anda tidak dikenakan zakat/i
                )
            ).toBeVisible();


            // =====================================================
            // STEP 10 - CLICK PREVIOUS FROM RESULT
            // =====================================================

            await zakatPage.clickPrevious();


            // =====================================================
            // STEP 11 - VERIFY RETURN TO EXPENSE STEP
            // =====================================================

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 12 - CLICK PREVIOUS AGAIN
            // =====================================================

            await zakatPage.clickPrevious();


            // =====================================================
            // STEP 13 - VERIFY RETURN TO INCOME STEP
            // =====================================================

            await zakatPage.verifyReturnedToIncomeStep();


            // =====================================================
            // STEP 14 - CHANGE INCOME INFORMATION
            // =====================================================

            await zakatPage.enterIncomeInformation(
                updatedMonthlyIncome,
                updatedBonus,
                updatedOtherIncome
            );


            // =====================================================
            // STEP 15 - VERIFY UPDATED INPUT
            // =====================================================

            await zakatPage.verifyIncomeValues(
                updatedMonthlyIncome,
                updatedBonus,
                updatedOtherIncome
            );


            // =====================================================
            // STEP 16 - GO TO EXPENSE STEP AGAIN
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 17 - GO TO RECALCULATED RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 18 - VERIFY UPDATED TOTAL INCOME
            // =====================================================

            await expect(
                page.getByText(
                    updatedTotalIncome,
                    { exact: true }
                )
            ).toBeVisible({
                timeout: 15000
            });


            // =====================================================
            // STEP 19 - VERIFY UPDATED EXPENSE
            // =====================================================

            await expect(
                page.getByText(
                    updatedTotalExpense,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 20 - VERIFY UPDATED NET INCOME
            // =====================================================

            await expect(
                page.getByText(
                    updatedNetIncome,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 21 - VERIFY OLD RESULT IS REMOVED
            // =====================================================

            await expect(
                page.getByText(
                    initialTotalIncome,
                    { exact: true }
                )
            ).toHaveCount(0);

            await expect(
                page.getByText(
                    initialNetIncome,
                    { exact: true }
                )
            ).toHaveCount(0);


            // =====================================================
            // STEP 22 - VERIFY BELOW NISAB WARNING IS REMOVED
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i
                )
            ).toBeHidden();


            // =====================================================
            // STEP 23 - VERIFY RECALCULATED ZAKAT
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Sebulan/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    updatedMonthlyZakat,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 24 - VERIFY RECALCULATION MATHEMATICALLY
            // =====================================================

            const totalIncome = 61100;
            const totalExpense = 8004;

            const calculatedNetIncome =
                totalIncome - totalExpense;

            expect(
                calculatedNetIncome
            ).toBe(
                53096
            );


            // =====================================================
            // STEP 25 - VERIFY 2.5% MONTHLY ZAKAT
            // =====================================================

            const annualZakat =
                calculatedNetIncome * 0.025;

            const calculatedMonthlyZakat =
                Math.round(
                    (annualZakat / 12) * 100
                ) / 100;

            expect(
                calculatedMonthlyZakat
            ).toBe(
                110.62
            );


            // =====================================================
            // STEP 26 - VERIFY ADD TO CART AVAILABLE
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