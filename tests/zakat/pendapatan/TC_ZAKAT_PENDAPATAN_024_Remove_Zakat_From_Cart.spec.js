const { test, expect } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test.describe(
    'Zakat Pendapatan - Remove Zakat From Cart',
    () => {

        test(
            'TC_ZAKAT_PENDAPATAN_024 - Remove Zakat From Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatPendapatanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const monthlyIncome = '5000';
                const bonus = '1000';
                const otherIncome = '100';

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
                // STEP 4 - ENTER INCOME
                // =================================================

                await zakatPage.enterIncomeInformation(
                    monthlyIncome,
                    bonus,
                    otherIncome
                );


                // =================================================
                // STEP 5 - GO TO EXPENSE STEP
                // =================================================

                await zakatPage.clickNext();

                await zakatPage.verifyCalculatorStep2();


                // =================================================
                // STEP 6 - GO TO RESULT
                // =================================================

                await zakatPage.clickNext();


                // =================================================
                // STEP 7 - VERIFY CALCULATED ZAKAT
                // =================================================

                await expect(
                    zakatPage.calculatorContainer
                        .getByText(
                            expectedZakat,
                            { exact: true }
                        )
                ).toBeVisible();


                // =================================================
                // STEP 8 - ADD TO CART
                // =================================================

                await zakatPage.addToCart();


                // =================================================
                // STEP 9 - VERIFY SUCCESS NOTIFICATION
                // =================================================

                await expect(
                    zakatPage.addToCartSuccessNotification
                ).toBeVisible();


                // =================================================
                // STEP 10 - VERIFY CART HAS ZAKAT ITEM
                // =================================================

                const zakatItems =
                    page.getByText(
                        'Zakat Pendapatan',
                        { exact: true }
                    );

                expect(
                    await zakatItems.count()
                ).toBeGreaterThanOrEqual(1);


                // =================================================
                // STEP 11 - VERIFY RM 110.62 IN CART
                // =================================================

                const amounts =
                    page.getByText(
                        expectedZakat,
                        { exact: true }
                    );

                expect(
                    await amounts.count()
                ).toBeGreaterThanOrEqual(1);


                // =================================================
                // STEP 12 - VERIFY PAYMENT BUTTON BEFORE DELETE
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
                // STEP 13 - VERIFY DELETE BUTTON
                // =================================================

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeVisible();

                await expect(
                    zakatPage.cartDeleteButton
                ).toBeEnabled();


                // =================================================
                // STEP 14 - REMOVE ITEM FROM CART
                // =================================================

                await zakatPage.removeZakatFromCart();


                // =================================================
                // STEP 15 - VERIFY EMPTY CART MESSAGE
                // =================================================

                await expect(
                    zakatPage.emptyCartRecordMessage
                ).toBeVisible();


                // =================================================
                // STEP 16 - VERIFY CART TOTAL RESET TO RM 0.00
                // =================================================

                await expect(
                    zakatPage.emptyCartTotal
                ).toBeVisible();


                // =================================================
                // STEP 17 - VERIFY PAYMENT BUTTON IS DISABLED
                // =================================================

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeVisible();

                await expect(
                    zakatPage.emptyCartPayButton
                ).toBeDisabled();


                // =================================================
                // STEP 18 - VERIFY OLD PAYMENT BUTTON REMOVED
                // =================================================

                await expect(
                    page.getByRole(
                        'button',
                        { name: 'Bayar RM 110.62' }
                    )
                ).toHaveCount(0);


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // Zakat Pendapatan RM 110.62 is added to cart.
                //
                // User clicks Delete.
                //
                // The item is immediately removed.
                //
                // Cart displays:
                //
                // "Rekod tidak ditemui..."
                //
                // Jumlah = RM 0.00
                //
                // Bayar = Disabled
                //
                // No confirmation dialog is expected.
                // =================================================

            }
        );
    }
);