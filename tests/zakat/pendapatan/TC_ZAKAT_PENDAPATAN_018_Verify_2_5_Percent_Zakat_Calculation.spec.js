const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Verify 2.5 Percent Zakat Calculation', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_018 - Verify 2.5 Percent Zakat Calculation',
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

            const expectedNetIncome =
                45825.48;

            const zakatRate =
                0.025;

            const expectedDisplayedZakat =
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
            // STEP 6 - VERIFY INPUT
            // =====================================================

            await zakatPage.verifyAnnualIncomeValues(
                annualIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 7 - GO TO EXPENSE STEP
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 8 - GO TO RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 9 - VERIFY RESULT SCREEN
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
                    /Jumlah Zakat Setahun/i
                )
            ).toBeVisible();


            // =====================================================
            // STEP 10 - VERIFY 2.5% RATE DISPLAYED
            // =====================================================

            await expect(
                page.getByText(
                    /2\.5%/
                )
            ).toBeVisible();


            // =====================================================
            // STEP 11 - CALCULATE EXPECTED ZAKAT
            // =====================================================

            const calculatedZakat =
                expectedNetIncome * zakatRate;


            // =====================================================
            // STEP 12 - ROUND TO 2 DECIMAL PLACES
            // =====================================================

            const roundedZakat =
                Math.round(
                    (calculatedZakat + Number.EPSILON) * 100
                ) / 100;


            // =====================================================
            // STEP 13 - VERIFY FORMULA
            // =====================================================

            expect(
                calculatedZakat
            ).toBeCloseTo(
                1145.637,
                3
            );


            // =====================================================
            // STEP 14 - VERIFY ROUNDED RESULT
            // =====================================================

            expect(
                roundedZakat
            ).toBe(
                1145.64
            );


            // =====================================================
            // STEP 15 - VERIFY MAIPS DISPLAYED ZAKAT
            // =====================================================

            await expect(
                page.getByText(
                    expectedDisplayedZakat,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 16 - VERIFY ADD TO CART AVAILABLE
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