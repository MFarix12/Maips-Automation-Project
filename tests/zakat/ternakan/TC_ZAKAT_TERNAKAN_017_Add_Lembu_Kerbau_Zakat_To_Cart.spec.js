const { test, expect } = require('@playwright/test');

const {
    ZakatTernakanPage
} = require('../../../pages/zakat/ZakatTernakanPage');


test.describe(
    'Zakat Ternakan - Add Lembu Kerbau Zakat To Cart',
    () => {

        test(
            'TC_ZAKAT_TERNAKAN_017 - Add Lembu Kerbau Zakat To Cart',
            async ({ page }) => {

                const zakatPage =
                    new ZakatTernakanPage(page);


                // =================================================
                // TEST DATA
                // =================================================

                const testData = {
                    year: '2026',
                    quantity: '40',
                    malePrice: '2500',
                    femalePrice: '3000'
                };


                // =================================================
                // STEP 1 - OPEN MAIPS
                // =================================================

                await zakatPage.open();


                // =================================================
                // STEP 2 - OPEN ZAKAT TERNAKAN
                // =================================================

                await zakatPage.openZakatTernakan();


                // =================================================
                // STEP 3 - OPEN CALCULATOR
                // =================================================

                await zakatPage.openCalculator();


                // =================================================
                // STEP 4 - VERIFY CALCULATOR
                // =================================================

                await zakatPage.verifyCalculatorIsOpen();


                // =================================================
                // STEP 5 - VERIFY HAUL
                // =================================================

                await zakatPage.verifyCalculatorHaulYear(
                    testData.year
                );


                // =================================================
                // STEP 6 - VERIFY LEMBU/KERBAU MODE
                // =================================================

                await zakatPage.verifyCattleDefaultSelection();


                // =================================================
                // STEP 7 - ENTER CATTLE QUANTITY
                // =================================================

                await zakatPage.enterCattleQuantity(
                    testData.quantity
                );


                // =================================================
                // STEP 8 - ENTER MALE CATTLE PRICE
                // =================================================

                await zakatPage.enterMaleCattlePrice(
                    testData.malePrice
                );


                // =================================================
                // STEP 9 - ENTER FEMALE CATTLE PRICE
                // =================================================

                await zakatPage.enterFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 10 - VERIFY INPUT VALUES
                // =================================================

                await zakatPage.verifyCattleQuantity(
                    testData.quantity
                );


                await zakatPage.verifyMaleCattlePrice(
                    testData.malePrice
                );


                await zakatPage.verifyFemaleCattlePrice(
                    testData.femalePrice
                );


                // =================================================
                // STEP 11 - VERIFY ABOVE NISAB
                // =================================================

                await zakatPage.verifyCattleAboveNisab();


                // =================================================
                // STEP 12 - GET CALCULATED ZAKAT AMOUNT
                // =================================================

                const calculatedAmount =
                    await zakatPage
                        .getCattleZakatResultAmount();


                expect(
                    calculatedAmount
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 13 - VERIFY CART EMPTY BEFORE ADD
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    zakatPage.emptyCartTotal
                ).toHaveText(
                    'RM 0.00',
                    {
                        timeout: 15000
                    }
                );


                // =================================================
                // STEP 14 - CLICK MASUK TROLI
                // =================================================

                await zakatPage
                    .clickCalculatorAddToCart();


                // =================================================
                // STEP 15 - VERIFY CART ITEM APPEARS
                // =================================================

                await expect(
                    zakatPage.zakatTernakanCartItem
                ).toBeVisible({
                    timeout: 15000
                });


                // =================================================
                // STEP 16 - VERIFY EMPTY CART MESSAGE DISAPPEARS
                // =================================================

                await expect(
                    zakatPage.emptyCartMessage
                ).toBeHidden({
                    timeout: 15000
                });


                // =================================================
                // STEP 17 - GET CART CONTENT
                // =================================================

                const cartText =
                    await zakatPage.getCartContent();


                // =================================================
                // STEP 18 - VERIFY ZAKAT TYPE
                // =================================================

                expect(
                    cartText
                ).toContain(
                    'Zakat Ternakan'
                );


                // =================================================
                // STEP 19 - VERIFY HAUL
                // =================================================

                expect(
                    cartText
                ).toContain(
                    testData.year
                );


                // =================================================
                // STEP 20 - VERIFY CART CONTAINS RM VALUE
                // =================================================

                const rmValues =
                    zakatPage.extractRMValues(
                        cartText
                    );


                expect(
                    rmValues.length
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 21 - CONVERT CART VALUES
                // =================================================

                const cartAmounts =
                    rmValues.map(
                        value =>
                            zakatPage.convertRMToNumber(
                                value
                            )
                    );


                // =================================================
                // STEP 22 - VERIFY CALCULATED AMOUNT IN CART
                // =================================================

                expect(
                    cartAmounts
                ).toContain(
                    calculatedAmount
                );


                // =================================================
                // STEP 23 - VERIFY POSITIVE CART TOTAL
                // =================================================

                const positiveAmounts =
                    cartAmounts.filter(
                        amount =>
                            Number.isFinite(amount) &&
                            amount > 0
                    );


                expect(
                    positiveAmounts.length
                ).toBeGreaterThan(0);


                // =================================================
                // STEP 24 - VERIFY PAYMENT BUTTON
                // =================================================

                const paymentButton =
                    page.getByRole(
                        'button',
                        {
                            name: /Bayar RM/i
                        }
                    );


                await expect(
                    paymentButton
                ).toBeVisible({
                    timeout: 15000
                });


                await expect(
                    paymentButton
                ).toBeEnabled({
                    timeout: 15000
                });


                // =================================================
                // EXPECTED RESULT
                // =================================================
                //
                // 1. User enters valid Lembu/Kerbau information.
                //
                // 2. MAIPS calculates an above-Nisab zakat result.
                //
                // 3. User clicks Masuk Troli.
                //
                // 4. Zakat Ternakan is added to Bakul Bayaran.
                //
                // 5. The cart displays:
                //      - Zakat Ternakan
                //      - Tahun/Haul 2026
                //      - Calculated zakat amount
                //
                // 6. Cart total becomes greater than RM 0.00.
                //
                // 7. Bayar RM ... button becomes available.
                //
                // =================================================
            }
        );
    }
);