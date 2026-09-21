const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe('Zakat Pendapatan - Switch Monthly / Annual Payment', () => {

    test(
        'TC_ZAKAT_PENDAPATAN_019 - Switch Monthly / Annual Payment',
        async ({ page }) => {

            const zakatPage =
                new ZakatPendapatanPage(page);


            // =====================================================
            // TEST DATA
            // =====================================================

            const annualIncome = 100000;
            const bonus = 0;
            const otherIncome = 0;


            // =====================================================
            // EXPECTED VALUES
            // Confirmed from actual MAIPs STG
            // =====================================================

            const netIncome = 92000;

            const zakatRate = 0.025;

            const expectedAnnualZakat =
                'RM 2,300.00';

            const expectedMonthlyZakat =
                'RM 191.67';


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
            // STEP 4 - SELECT ANNUAL INCOME MODE
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


            await zakatPage.verifyAnnualIncomeValues(
                annualIncome,
                bonus,
                otherIncome
            );


            // =====================================================
            // STEP 6 - GO TO EXPENSE STEP
            // =====================================================

            await zakatPage.clickNext();

            await zakatPage.verifyCalculatorStep2();


            // =====================================================
            // STEP 7 - GO TO RESULT
            // =====================================================

            await zakatPage.clickNext();


            // =====================================================
            // STEP 8 - VERIFY RESULT SCREEN
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
                    'RM 92,000.00',
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 9 - VERIFY CALCULATION
            // =====================================================

            const calculatedAnnualZakat =
                netIncome * zakatRate;

            expect(
                calculatedAnnualZakat
            ).toBe(
                2300
            );


            // =====================================================
            // STEP 10 - SELECT TAHUNAN
            // =====================================================

            const annualPaymentOption =
                page.getByText(
                    'Tahunan',
                    { exact: true }
                ).last();

            await expect(
                annualPaymentOption
            ).toBeVisible();

            await annualPaymentOption.click();


            // =====================================================
            // STEP 11 - VERIFY ANNUAL PAYMENT
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Setahun/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    expectedAnnualZakat,
                    { exact: true }
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    /2\.5%/
                )
            ).toBeVisible();


            // =====================================================
            // STEP 12 - CALCULATE EXPECTED MONTHLY PAYMENT
            // =====================================================

            const calculatedMonthlyZakat =
                Math.round(
                    (
                        calculatedAnnualZakat / 12
                    ) * 100
                ) / 100;

            expect(
                calculatedMonthlyZakat
            ).toBe(
                191.67
            );


            // =====================================================
            // STEP 13 - SWITCH TO BULANAN
            // =====================================================

            const monthlyPaymentOption =
                page.getByText(
                    'Bulanan',
                    { exact: true }
                ).last();

            await expect(
                monthlyPaymentOption
            ).toBeVisible();

            await monthlyPaymentOption.click();


            // =====================================================
            // STEP 14 - VERIFY MONTHLY PAYMENT
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Sebulan/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    expectedMonthlyZakat,
                    { exact: true }
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    /2\.5%/
                )
            ).toBeVisible();


            // =====================================================
            // STEP 15 - VERIFY ANNUAL AMOUNT IS NO LONGER DISPLAYED
            // =====================================================

            await expect(
                page.getByText(
                    expectedAnnualZakat,
                    { exact: true }
                )
            ).toHaveCount(0);


            // =====================================================
            // STEP 16 - SWITCH BACK TO TAHUNAN
            // =====================================================

            await annualPaymentOption.click();


            // =====================================================
            // STEP 17 - VERIFY ANNUAL PAYMENT RESTORED
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Setahun/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    expectedAnnualZakat,
                    { exact: true }
                )
            ).toBeVisible();


            // =====================================================
            // STEP 18 - VERIFY MONTHLY AMOUNT REMOVED
            // =====================================================

            await expect(
                page.getByText(
                    expectedMonthlyZakat,
                    { exact: true }
                )
            ).toHaveCount(0);


            // =====================================================
            // STEP 19 - SWITCH TO BULANAN AGAIN
            // =====================================================

            await monthlyPaymentOption.click();


            // =====================================================
            // STEP 20 - VERIFY MONTHLY PAYMENT RESTORED
            // =====================================================

            await expect(
                page.getByText(
                    /Jumlah Zakat Sebulan/i
                )
            ).toBeVisible();

            await expect(
                page.getByText(
                    expectedMonthlyZakat,
                    { exact: true }
                )
            ).toBeVisible();


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