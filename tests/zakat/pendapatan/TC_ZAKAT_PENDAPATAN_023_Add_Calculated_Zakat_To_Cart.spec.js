const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe(
    'Zakat Pendapatan - Add Calculated Zakat to Cart',
    () => {

        test(
            'TC_ZAKAT_PENDAPATAN_023 - Add Calculated Zakat to Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPendapatanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const monthlyIncome = '5000';
                const bonus = '1000';
                const otherIncome = '100';

                const expectedTotalIncome =
                    'RM 61,100.00';

                const expectedTotalExpense =
                    'RM 8,004.00';

                const expectedNetIncome =
                    'RM 53,096.00';

                const expectedZakat =
                    'RM 110.62';


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT PENDAPATAN
                // =================================================

                await zakatPage.openZakatPendapatan();

                await zakatPage.verifyZakatPendapatanPage();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openIncomeCalculator();

                await zakatPage.verifyCalculatorStep1();


                // =================================================
                // STEP 4 - ENTER INCOME INFORMATION
                // =================================================

                await zakatPage.enterIncomeInformation(
                    monthlyIncome,
                    bonus,
                    otherIncome
                );


                // =================================================
                // STEP 5 - VERIFY INCOME VALUES
                // =================================================

                await zakatPage.verifyIncomeValues(
                    monthlyIncome,
                    bonus,
                    otherIncome
                );


                // =================================================
                // STEP 6 - GO TO EXPENSE INFORMATION
                // =================================================

                await zakatPage.clickNext();

                await zakatPage.verifyCalculatorStep2();


                // =================================================
                // STEP 7 - KEEP DEFAULT EXPENSE VALUES
                // =================================================
                //
                // No additional expense values are entered.
                // MAIPS uses the default deductions.
                // =================================================


                // =================================================
                // STEP 8 - GO TO CALCULATION RESULT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 9 - VERIFY TOTAL INCOME
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            expectedTotalIncome,
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 10 - VERIFY TOTAL EXPENSE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            expectedTotalExpense,
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 11 - VERIFY NET INCOME
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            expectedNetIncome,
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 12 - VERIFY MONTHLY ZAKAT LABEL
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            'Jumlah Zakat Sebulan',
                            { exact: false }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 13 - VERIFY 2.5% RATE
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(/2\.5%/)
                ).toBeVisible();


                // =================================================
                // STEP 14 - VERIFY CALCULATED ZAKAT
                // =================================================

                const calculatedZakatAmount =
                    zakatPage.calculatorContainer
                        .getByText(
                            expectedZakat,
                            { exact: true }
                        );

                await expect(
                    calculatedZakatAmount
                ).toBeVisible();


                // =================================================
                // STEP 15 - VERIFY ADD TO CART BUTTON
                // =================================================

                await zakatPage.verifyAddToCartButton();


                // =================================================
                // STEP 16 - ADD CALCULATED ZAKAT TO CART
                // =================================================

                await zakatPage.addToCart();


                // =================================================
                // STEP 17 - VERIFY SUCCESS NOTIFICATION
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible();


                // =================================================
                // STEP 18 - VERIFY PAYMENT CART HEADING
                // =================================================

                await expect(
                    zakatPage.paymentCartHeading
                ).toBeVisible();


                // =================================================
// STEP 19 - VERIFY ZAKAT PENDAPATAN CART ITEM
// =================================================

const zakatPendapatanTexts =
    page.getByText(
        'Zakat Pendapatan',
        { exact: true }
    );

expect(
    await zakatPendapatanTexts.count()
).toBeGreaterThanOrEqual(1);

await expect(
    zakatPendapatanTexts.first()
).toBeVisible();


// =================================================
// STEP 20 - VERIFY HAUL YEAR
// =================================================

const year2026 =
    page.getByText(
        '2026',
        { exact: true }
    );

expect(
    await year2026.count()
).toBeGreaterThanOrEqual(1);

await expect(
    year2026.last()
).toBeVisible();


// =================================================
// STEP 21 - VERIFY RM 110.62 APPEARS IN CART
// =================================================

const cartAmounts =
    page.getByText(
        expectedZakat,
        { exact: true }
    );

const cartAmountCount =
    await cartAmounts.count();

expect(
    cartAmountCount
).toBeGreaterThanOrEqual(1);

await expect(
    cartAmounts.last()
).toBeVisible();


// =================================================
// STEP 22 - VERIFY CART TOTAL
// =================================================

const totalLabel =
    page.getByText(
        'Jumlah',
        { exact: true }
    );

expect(
    await totalLabel.count()
).toBeGreaterThanOrEqual(1);

await expect(
    totalLabel.last()
).toBeVisible();


// =================================================
// STEP 23 - VERIFY PAYMENT BUTTON
// =================================================

await expect(
    page.getByRole(
        'button',
        { name: 'Bayar RM 110.62' }
    )
).toBeVisible();

await expect(
    page.getByRole(
        'button',
        { name: 'Bayar RM 110.62' }
    )
).toBeEnabled();


                // =================================================
                // STEP 24 - STOP BEFORE PAYMENT
                // =================================================
                //
                // Verified:
                //
                // Monthly Income = 5000
                // Bonus          = 1000
                // Other Income   = 100
                //
                //          ↓
                //
                // Total Income
                // RM 61,100.00
                //
                //          ↓
                //
                // Total Expenses
                // RM 8,004.00
                //
                //          ↓
                //
                // Net Income
                // RM 53,096.00
                //
                //          ↓
                //
                // Zakat 2.5%
                // RM 110.62
                //
                //          ↓
                //
                // Masuk Troli
                //
                //          ↓
                //
                // Success notification
                //
                //          ↓
                //
                // Bakul Bayaran
                //
                // Zakat Pendapatan
                // 2026
                // RM 110.62
                //
                // Total RM 110.62
                //
                // Bayar RM 110.62
                //
                // Payment is intentionally NOT submitted.
                // =================================================

            }
        );
    }
);