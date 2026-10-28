# Zakat Perniagaan — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 36 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_001 | Open Zakat Perniagaan | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_001_Open_Zakat_Perniagaan.spec.js) | [Setup / test data](#tc_zakat_perniagaan_001-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - VERIFY KIRA SEKARANG AVAILABLE<br><code>await expect( zakatPage.kiraSekarangButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.kiraSekarangButton ).toBeEnabled();</code><br><br>STEP 3 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 4 - VERIFY MODULE PAGE<br><code>await zakatPage .verifyZakatPerniagaanPage();</code><br><br>STEP 5 - VERIFY HEADING<br><code>await expect( zakatPage.zakatPerniagaanHeading ).toHaveText( 'Zakat Perniagaan' );</code><br><br>STEP 6 - VERIFY TAHUN/HAUL<br><code>await expect( zakatPage.haulFormItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY JUMLAH BAYARAN<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><br>STEP 8 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 9 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY BAKUL BAYARAN<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 12 - VERIFY NO CART ITEM<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_perniagaan_002-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatPerniagaanPage();</code><br><br>STEP 4 - VERIFY DEFAULT YEAR<br><code>await zakatPage.verifyMainHaulYear( testData.defaultYear );</code><br><br>STEP 5 - VERIFY JUMLAH BAYARAN<br><code>await zakatPage.verifyManualAmount( testData.defaultAmount );</code><br><br>STEP 6 - VERIFY JUMLAH BAYARAN ENABLED<br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><br>STEP 7 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 8 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY EMPTY CART<br><code>await zakatPage.verifyEmptyCart();</code><br><br>STEP 10 - VERIFY CART HEADING<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY NO ZAKAT PERNIAGAAN ITEM<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CART TOTAL<br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY BAYAR DISABLED<br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_003 | Select Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_003_Select_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_perniagaan_003-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY DEFAULT YEAR<br><code>await zakatPage.verifyMainHaulYear( testData.defaultYear );</code><br><br>STEP 4 - SELECT 2024<br><code>await zakatPage.selectMainHaulYear( testData.firstYear );</code><br><br>STEP 5 - VERIFY 2024<br><code>await zakatPage.verifyMainHaulYear( testData.firstYear );</code><br><br>STEP 6 - SELECT 2025<br><code>await zakatPage.selectMainHaulYear( testData.secondYear );</code><br><br>STEP 7 - VERIFY 2025<br><code>await zakatPage.verifyMainHaulYear( testData.secondYear );</code><br><br>STEP 8 - SELECT 2026<br><code>await zakatPage.selectMainHaulYear( testData.finalYear );</code><br><br>STEP 9 - VERIFY 2026<br><code>await zakatPage.verifyMainHaulYear( testData.finalYear );</code><br><br>STEP 10 - VERIFY OTHER FORM VALUES UNAFFECTED<br><code>await expect( zakatPage.manualAmountField ).toHaveValue( '0.00', { timeout: 15000 } );</code><br><br>STEP 11 - VERIFY CALCULATOR STILL AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 12 - VERIFY CART REMAINS EMPTY<br><code>await zakatPage.verifyEmptyCart();</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_004 | Enter Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_004_Enter_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_perniagaan_004-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 4 - VERIFY DEFAULT AMOUNT<br><code>await zakatPage.verifyManualAmount( '0.00' );</code><br><br>STEP 5 - ENTER MANUAL AMOUNT<br><code>await zakatPage.enterManualAmount( testData.amount );</code><br><br>STEP 6 - VERIFY ENTERED AMOUNT<br><code>await zakatPage.verifyManualAmount( testData.amount );</code><br><br>STEP 7 - VERIFY FIELD ENABLED<br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><br>STEP 8 - VERIFY YEAR REMAINS UNCHANGED<br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 9 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.mainAddToCartButton ).toBeEnabled();</code><br><br>STEP 10 - VERIFY NOTHING ADDED TO CART YET<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 11 - CLEAR MANUAL AMOUNT<br><code>await zakatPage.clearManualAmount();</code><br><br>STEP 12 - VERIFY FIELD CLEARED<br><code>await expect( zakatPage.manualAmountField ).toHaveValue( '', { timeout: 15000 } );</code><br><br>STEP 13 - RE-ENTER MANUAL AMOUNT<br><code>await zakatPage.enterManualAmount( testData.amount );</code><br><br>STEP 14 - VERIFY FINAL VALUE<br><code>await zakatPage.verifyManualAmount( testData.amount );</code><br><br>STEP 15 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_005 | Add Manual Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_005_Add_Manual_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_perniagaan_005-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY YEAR<br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 4 - VERIFY INITIAL EMPTY CART<br><code>await zakatPage.verifyEmptyCart();</code><br><br>STEP 5 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualAmount( testData.amount );</code><br><br>STEP 6 - VERIFY ENTERED AMOUNT<br><code>await zakatPage.verifyManualAmount( testData.amount );</code><br><br>STEP 7 - VERIFY MASUK TROLI ENABLED<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.mainAddToCartButton ).toBeEnabled();</code><br><br>STEP 8 - ADD TO CART<br><code>await zakatPage.addManualZakatToCart();</code><br><br>STEP 9 - VERIFY SUCCESS MESSAGE<br><code>await expect( zakatPage.addToCartSuccessMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY ZAKAT PERNIAGAAN CART ITEM<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY CART YEAR<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toHaveText( testData.year, { timeout: 15000 } );</code><br><br>STEP 12 - VERIFY ITEM AMOUNT<br><code>await expect( zakatPage.cartAmount1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount1000 ).toHaveText( testData.formattedAmount, { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY CART DETAILS<br><code>await zakatPage.verifyManualZakatCartItem();</code><br><br>STEP 14 - VERIFY EMPTY MESSAGE DISAPPEARS<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CART TOTAL<br><code>await expect( zakatPage.cartTotal1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartTotal1000 ).toHaveText( testData.formattedAmount, { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.paymentButton1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeEnabled();</code><br><br>STEP 17 - VERIFY PAYMENT TOTAL<br><code>await expect( zakatPage.paymentButton1000 ).toHaveText( 'Bayar RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 18 - VERIFY MAIN ADD BUTTON REMAINS AVAILABLE<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.mainAddToCartButton ).toBeEnabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_006 | Remove Manual Zakat From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_006_Remove_Manual_Zakat_From_Cart.spec.js) | [Setup / test data](#tc_zakat_perniagaan_006-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY YEAR<br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 4 - VERIFY INITIAL EMPTY CART<br><code>await zakatPage.verifyEmptyCart();</code><br><br>STEP 5 - ENTER MANUAL AMOUNT<br><code>await zakatPage.enterManualAmount( testData.amount );</code><br><br>STEP 6 - VERIFY MANUAL AMOUNT<br><code>await zakatPage.verifyManualAmount( testData.amount );</code><br><br>STEP 7 - ADD TO CART<br><code>await zakatPage.addManualZakatToCart();</code><br><br>STEP 8 - VERIFY ITEM ADDED<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY ITEM AMOUNT<br><code>await expect( zakatPage.cartAmount1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount1000 ).toHaveText( testData.formattedAmount, { timeout: 15000 } );</code><br><br>STEP 10 - VERIFY CART TOTAL<br><code>await expect( zakatPage.cartTotal1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartTotal1000 ).toHaveText( testData.formattedAmount, { timeout: 15000 } );</code><br><br>STEP 11 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.paymentButton1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeEnabled();</code><br><br>STEP 12 - REMOVE ITEM FROM CART<br><code>await zakatPage.removeZakatPerniagaanFromCart();</code><br><br>STEP 13 - VERIFY ITEM IS NO LONGER VISIBLE<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CART TOTAL RETURNS TO RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY OLD RM 1,000 ITEM AMOUNT HIDDEN<br><code>await expect( zakatPage.cartAmount1000 ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY OLD PAYMENT BUTTON HIDDEN<br><code>await expect( zakatPage.paymentButton1000 ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY EMPTY BAYAR BUTTON<br><code>await expect( zakatPage.emptyPaymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY MAIN MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.mainAddToCartButton ).toBeEnabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_007 | Open Zakat Perniagaan Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_007_Open_Zakat_Perniagaan_Calculator.spec.js) | [Setup / test data](#tc_zakat_perniagaan_007-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY ZAKAT PERNIAGAAN PAGE<br><code>await expect( zakatPage.zakatPerniagaanHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 4 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 5 - VERIFY CALCULATOR TITLE NOT SHOWN YET<br><code>await expect( zakatPage.calculatorTitle ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 6 - CLICK BUKA KALKULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 7 - VERIFY CALCULATOR CONTAINER<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY CALCULATOR TITLE<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorTitle ).toHaveText( 'Kalkulator Zakat Perniagaan', { timeout: 15000 } );</code><br><br>STEP 9 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 10 - VERIFY MAIN MODULE REMAINS AVAILABLE<br><code>await expect( zakatPage.zakatPerniagaanHeading ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_008 | Verify Calculator Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_008_Verify_Calculator_Default_State.spec.js) | [Setup / test data](#tc_zakat_perniagaan_008-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR TITLE<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorTitle ).toHaveText( 'Kalkulator Zakat Perniagaan' );</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await expect( zakatPage.calculatorHaulComboBox ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorHaulInput ).toHaveValue( testData.defaultYear, { timeout: 15000 } );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY PENYATA KEWANGAN METHOD<br><code>await expect( zakatPage.penyataKewanganMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY DEFAULT METHOD CONTENT<br><code>await expect( zakatPage.hasilJualanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY FIELDS ENABLED<br><code>await expect( zakatPage.hasilJualanField ).toBeEnabled();</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY KEUNTUNGAN BERSIH<br><code>await expect( zakatPage.keuntunganBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY COMPLETE DEFAULT STATE<br><code>await zakatPage .verifyCalculatorDefaultState();</code><br><br>STEP 12 - VERIFY MAIN CART STILL EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_009 | Select Calculator Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_009_Select_Calculator_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_perniagaan_009-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY DEFAULT CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.defaultYear );</code><br><br>STEP 6 - SELECT 2024<br><code>await zakatPage.selectCalculatorHaulYear( testData.firstYear );</code><br><br>STEP 7 - VERIFY 2024<br><code>await zakatPage.verifyCalculatorHaulYear( testData.firstYear );</code><br><br>STEP 8 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - SELECT 2025<br><code>await zakatPage.selectCalculatorHaulYear( testData.secondYear );</code><br><br>STEP 10 - VERIFY 2025<br><code>await zakatPage.verifyCalculatorHaulYear( testData.secondYear );</code><br><br>STEP 11 - SELECT 2026<br><code>await zakatPage.selectCalculatorHaulYear( testData.finalYear );</code><br><br>STEP 12 - VERIFY 2026<br><code>await zakatPage.verifyCalculatorHaulYear( testData.finalYear );</code><br><br>STEP 13 - VERIFY UNTUNG RUGI METHOD STILL SHOWN<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY INPUT FIELDS STILL AVAILABLE<br><code>await expect( zakatPage.hasilJualanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY NOTHING ADDED TO CART<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_010 | Verify Untung Rugi Default Method | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_010_Verify_Untung_Rugi_Default_Method.spec.js) | [Setup / test data](#tc_zakat_perniagaan_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY DEFAULT YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD AVAILABLE<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY PENYATA KEWANGAN METHOD AVAILABLE<br><code>await expect( zakatPage.penyataKewanganMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY HASIL JUALAN FIELD<br><code>await expect( zakatPage.hasilJualanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.hasilJualanField ).toBeEnabled();</code><br><br>STEP 9 - VERIFY PERBELANJAAN/KOS FIELD<br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY FORMULA<br><code>await expect( zakatPage.untungRugiFormula ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY NISAB INFORMATION<br><code>await expect( zakatPage.nisabLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY RESULT TABLE<br><code>await expect( zakatPage.hasilJualanResultLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosResultLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.keuntunganBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY ZAKAT RESULT SECTION<br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY COMPLETE DEFAULT METHOD<br><code>await zakatPage .verifyUntungRugiDefaultMethod();</code><br><br>STEP 16 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_011 | Enter Hasil Jualan Perniagaan | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_011_Enter_Hasil_Jualan_Perniagaan.spec.js) | [Setup / test data](#tc_zakat_perniagaan_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY HASIL JUALAN FIELD<br><code>await expect( zakatPage.hasilJualanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.hasilJualanField ).toBeEnabled();</code><br><br>STEP 8 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 9 - VERIFY ENTERED VALUE<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><br>STEP 10 - VERIFY PERBELANJAAN FIELD AVAILABLE<br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY RESULT SECTION STILL DISPLAYED<br><code>await expect( zakatPage.keuntunganBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_012 | Enter Perbelanjaan Kos | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_012_Enter_Perbelanjaan_Kos.spec.js) | [Setup / test data](#tc_zakat_perniagaan_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - VERIFY HASIL JUALAN<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><br>STEP 9 - VERIFY PERBELANJAAN/KOS FIELD<br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeEnabled();</code><br><br>STEP 10 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 11 - VERIFY PERBELANJAAN/KOS<br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 12 - VERIFY HASIL JUALAN REMAINS UNCHANGED<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><br>STEP 13 - VERIFY RESULT SECTION<br><code>await expect( zakatPage.keuntunganBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY NOTHING ADDED TO CART<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_013 | Verify Keuntungan Bersih | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_013_Verify_Keuntungan_Bersih.spec.js) | [Setup / test data](#tc_zakat_perniagaan_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 9 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 10 - VERIFY FORMULA DISPLAYED<br><code>await expect( zakatPage.untungRugiFormula ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY KEUNTUNGAN BERSIH LABEL<br><code>await expect( zakatPage.keuntunganBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY KEUNTUNGAN BERSIH RESULT<br><code>await zakatPage.verifyKeuntunganBersih( testData.expectedKeuntunganBersih );</code><br><br>STEP 13 - VERIFY EXPECTED AMOUNT DIRECTLY<br><code>await expect( zakatPage.keuntunganBersihAmount ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY NOTHING ADDED TO CART<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_014 | Verify Untung Rugi Below Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_014_Verify_Untung_Rugi_Below_Nisab.spec.js) | [Setup / test data](#tc_zakat_perniagaan_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 9 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 10 - VERIFY KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.expectedKeuntunganBersih );</code><br><br>STEP 11 - VERIFY BELOW NISAB MESSAGE<br><code>await zakatPage.verifyUntungRugiBelowNisab();</code><br><br>STEP 12 - VERIFY MESSAGE CONTENT<br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toContainText( 'Jumlah keuntungan bersih anda tidak mencapai amaun nisab tahun 2026', { timeout: 15000 } );</code><br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toContainText( 'Anda tidak dikenakan zakat', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY ZAKAT RESULT SECTION<br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY NOTHING ADDED TO CART<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_015 | Verify Untung Rugi Above Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_015_Verify_Untung_Rugi_Above_Nisab.spec.js) | [Setup / test data](#tc_zakat_perniagaan_015-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 9 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 10 - VERIFY KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.expectedKeuntunganBersih );</code><br><br>STEP 11 - VERIFY NISAB INFORMATION<br><code>await expect( zakatPage.nisabLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY BELOW NISAB MESSAGE NOT SHOWN<br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY ZAKAT RESULT SECTION<br><code>await expect( zakatPage.untungRugiAboveNisabResult ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code><br><br>STEP 15 - VERIFY ABOVE NISAB STATE<br><code>await zakatPage.verifyUntungRugiAboveNisab();</code><br><br>STEP 16 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_016 | Verify Untung Rugi Zakat 2.5 Percent | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_016_Verify_Untung_Rugi_Zakat_2_5_Percent.spec.js) | [Setup / test data](#tc_zakat_perniagaan_016-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 9 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 10 - VERIFY KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.expectedKeuntunganBersih );</code><br><br>STEP 11 - CALCULATE EXPECTED ZAKAT IN TEST<br><code>const calculatedExpectedZakat = testData.expectedKeuntunganBersih * testData.zakatRate;</code><br><code>expect( calculatedExpectedZakat ).toBe( testData.expectedZakat );</code><br><br>STEP 12 - VERIFY 2.5% RESULT LABEL<br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.zakatResultLabel ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY ZAKAT AMOUNT<br><code>await zakatPage.verifyUntungRugiZakatAmount( testData.expectedZakat );</code><br><br>STEP 14 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN<br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code><br><br>STEP 16 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_017 | Change Perbelanjaan and Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_017_Change_Perbelanjaan_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_perniagaan_017-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 8 - VERIFY HASIL JUALAN<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><br>STEP 9 - ENTER INITIAL PERBELANJAAN<br><code>await zakatPage.enterPerbelanjaanKos( testData.initialPerbelanjaan );</code><br><br>STEP 10 - VERIFY INITIAL PERBELANJAAN<br><code>await zakatPage.verifyPerbelanjaanKos( testData.initialPerbelanjaan );</code><br><br>STEP 11 - VERIFY INITIAL KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.initialKeuntunganBersih );</code><br><br>STEP 12 - VERIFY INITIAL ZAKAT<br><code>await zakatPage.verifyUntungRugiZakatAmount( testData.initialZakat );</code><br><br>STEP 13 - CHANGE PERBELANJAAN<br><code>await zakatPage.enterPerbelanjaanKos( testData.updatedPerbelanjaan );</code><br><br>STEP 14 - VERIFY UPDATED PERBELANJAAN<br><code>await zakatPage.verifyPerbelanjaanKos( testData.updatedPerbelanjaan );</code><br><br>STEP 15 - VERIFY HASIL JUALAN DID NOT CHANGE<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><br>STEP 16 - VERIFY UPDATED KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.updatedKeuntunganBersih );</code><br><br>STEP 17 - VERIFY UPDATED ZAKAT<br><code>await zakatPage.verifyUntungRugiZakatAmount( testData.updatedZakat );</code><br><br>STEP 18 - VERIFY OLD RESULT NO LONGER DISPLAYED<br><code>const oldZakatAmount = zakatPage.calculatorContainer.getByText( 'RM 24,500.00', { exact: true } );</code><br><code>await expect( oldZakatAmount ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY ABOVE-NISAB STATE<br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.zakatResultLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code><br><br>STEP 21 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_018 | Add Untung Rugi Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_018_Add_Untung_Rugi_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_perniagaan_018-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY CART INITIAL STATE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY UNTUNG RUGI METHOD<br><code>await expect( zakatPage.untungRugiMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - ENTER HASIL JUALAN<br><code>await zakatPage.enterHasilJualan( testData.hasilJualan );</code><br><br>STEP 9 - ENTER PERBELANJAAN/KOS<br><code>await zakatPage.enterPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyHasilJualan( testData.hasilJualan );</code><br><code>await zakatPage.verifyPerbelanjaanKos( testData.perbelanjaanKos );</code><br><br>STEP 11 - VERIFY KEUNTUNGAN BERSIH<br><code>await zakatPage.verifyKeuntunganBersih( testData.expectedKeuntunganBersih );</code><br><br>STEP 12 - VERIFY ZAKAT RESULT<br><code>await zakatPage.verifyUntungRugiZakatAmount( testData.expectedZakat );</code><br><br>STEP 13 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN<br><code>await expect( zakatPage.untungRugiBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATOR MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code><br><br>STEP 15 - ADD CALCULATED ZAKAT TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 16 - VERIFY SUCCESS MESSAGE<br><code>await expect( zakatPage.addToCartSuccessMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY ZAKAT PERNIAGAAN CART ITEM<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY YEAR<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY ITEM AMOUNT<br><code>await expect( zakatPage.cartAmount22500 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount22500 ).toHaveText( 'RM 22,500.00', { timeout: 15000 } );</code><br><br>STEP 20 - VERIFY CART TOTAL<br><code>await expect( zakatPage.cartTotal22500 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartTotal22500 ).toHaveText( 'RM 22,500.00', { timeout: 15000 } );</code><br><br>STEP 21 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.paymentButton22500 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton22500 ).toBeEnabled();</code><br><br>STEP 22 - COMPLETE CART VERIFICATION<br><code>await zakatPage.verifyUntungRugiZakatCartItem();</code><br><br>STEP 23 - VERIFY EMPTY CART STATE REMOVED<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_019 | Select Penyata Kewangan Method | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_019_Select_Penyata_Kewangan_Method.spec.js) | [Setup / test data](#tc_zakat_perniagaan_019-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY UNTUNG RUGI IS INITIAL METHOD<br><code>await expect( zakatPage.hasilJualanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.perbelanjaanKosField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY PENYATA KEWANGAN OPTION<br><code>await expect( zakatPage.penyataKewanganMethod ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 9 - VERIFY PELABURAN STEP<br><code>await expect( zakatPage.pelaburanHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY PELABURAN FIELD<br><code>await expect( zakatPage.pelaburanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.pelaburanField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY JUMLAH PELABURAN<br><code>await expect( zakatPage.jumlahPelaburanLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY SETERUSNYA BUTTON<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 13 - COMPLETE METHOD VERIFICATION<br><code>await zakatPage.verifyPenyataKewanganMethod();</code><br><br>STEP 14 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_020 | Verify Pelaburan Step | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_020_Verify_Pelaburan_Step.spec.js) | [Setup / test data](#tc_zakat_perniagaan_020-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CALCULATOR YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - VERIFY PELABURAN HEADING<br><code>await expect( zakatPage.pelaburanHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY PELABURAN FIELD<br><code>await expect( zakatPage.pelaburanField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.pelaburanField ).toBeEnabled();</code><br><br>STEP 9 - VERIFY PELABURAN FIELD DEFAULT VALUE<br><code>await expect( zakatPage.pelaburanField ).toHaveValue( '', { timeout: 15000 } );</code><br><br>STEP 10 - VERIFY JUMLAH PELABURAN LABEL<br><code>await expect( zakatPage.jumlahPelaburanLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY DEFAULT JUMLAH PELABURAN<br><code>await expect( zakatPage.jumlahPelaburanAmount ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.jumlahPelaburanAmount ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 12 - VERIFY SETERUSNYA<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 13 - VERIFY COMPLETE DEFAULT STATE<br><code>await zakatPage.verifyPelaburanDefaultState();</code><br><br>STEP 14 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_021 | Enter Pelaburan | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_021_Enter_Pelaburan.spec.js) | [Setup / test data](#tc_zakat_perniagaan_021-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - VERIFY PELABURAN STEP<br><code>await expect( zakatPage.pelaburanHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.pelaburanField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 9 - VERIFY PELABURAN INPUT<br><code>await zakatPage.verifyPelaburan( testData.pelaburan );</code><br><br>STEP 10 - VERIFY JUMLAH PELABURAN LABEL<br><code>await expect( zakatPage.jumlahPelaburanLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY JUMLAH PELABURAN<br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 12 - VERIFY SETERUSNYA AVAILABLE<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 13 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_022 | Navigate To Aset Semasa | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_022_Navigate_To_Aset_Semasa.spec.js) | [Setup / test data](#tc_zakat_perniagaan_022-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - VERIFY PELABURAN STEP<br><code>await expect( zakatPage.pelaburanField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 9 - VERIFY PELABURAN<br><code>await zakatPage.verifyPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 10 - CLICK SETERUSNYA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 11 - VERIFY SIMPANAN TETAP<br><code>await expect( zakatPage.simpananTetapField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.simpananTetapField ).toBeEnabled();</code><br><br>STEP 12 - VERIFY TUNAI DI TANGAN DAN DI BANK<br><code>await expect( zakatPage.tunaiBankField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.tunaiBankField ).toBeEnabled();</code><br><br>STEP 13 - VERIFY PELBAGAI PENGHUTANG<br><code>await expect( zakatPage.pelbagaiPenghutangField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY AKAUN BELUM TERIMA<br><code>await expect( zakatPage.akaunBelumTerimaField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CUKAI BOLEH PULIH<br><code>await expect( zakatPage.cukaiBolehPulihField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY PELABURAN JANGKA PENDEK<br><code>await expect( zakatPage.pelaburanJangkaPendekField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY LAIN-LAIN<br><code>await expect( zakatPage.asetLainLainField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY JUMLAH ASET SEMASA<br><code>await expect( zakatPage.jumlahAsetSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY COMPLETE ASET SEMASA STEP<br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 20 - VERIFY SETERUSNYA AVAILABLE<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 21 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_023 | Enter Aset Semasa Details | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_023_Enter_Aset_Semasa_Details.spec.js) | [Setup / test data](#tc_zakat_perniagaan_023-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY PELABURAN<br><code>await zakatPage.verifyPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( 1000000 );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - VERIFY ASET SEMASA STEP<br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 11 - ENTER ALL ASET SEMASA DETAILS<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY SIMPANAN TETAP<br><code>await expect( zakatPage.simpananTetapField ).toHaveValue( '50000', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY TUNAI DI TANGAN DAN DI BANK<br><code>await expect( zakatPage.tunaiBankField ).toHaveValue( '100000', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY PELBAGAI PENGHUTANG<br><code>await expect( zakatPage.pelbagaiPenghutangField ).toHaveValue( '5000', { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY AKAUN BELUM TERIMA<br><code>await expect( zakatPage.akaunBelumTerimaField ).toHaveValue( '30000', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY CUKAI BOLEH PULIH<br><code>await expect( zakatPage.cukaiBolehPulihField ).toHaveValue( '5000', { timeout: 15000 } );</code><br><br>STEP 17 - VERIFY PELABURAN JANGKA PENDEK<br><code>await expect( zakatPage.pelaburanJangkaPendekField ).toHaveValue( '60000', { timeout: 15000 } );</code><br><br>STEP 18 - VERIFY LAIN-LAIN<br><code>await expect( zakatPage.asetLainLainField ).toHaveValue( '1000', { timeout: 15000 } );</code><br><br>STEP 19 - COMPLETE FIELD VERIFICATION<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 20 - VERIFY JUMLAH ASET SECTION EXISTS<br><code>await expect( zakatPage.jumlahAsetSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY SETERUSNYA AVAILABLE<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 22 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_024 | Verify Jumlah Aset Semasa | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_024_Verify_Jumlah_Aset_Semasa.spec.js) | [Setup / test data](#tc_zakat_perniagaan_024-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY JUMLAH PELABURAN<br><code>await zakatPage.verifyJumlahPelaburan( 1000000 );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - VERIFY ASET SEMASA STEP<br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 11 - ENTER ASET SEMASA DETAILS<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY ALL ENTERED VALUES<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 13 - CALCULATE EXPECTED TOTAL<br><code>const calculatedExpectedTotal = Number(testData.asetSemasa.simpananTetap) + Number(testData.asetSemasa.tunaiBank) + Number(testData.asetSemasa.pelbagaiPenghutang) + Number(testData.asetSemasa.akaunBelumTerima) + Number(testData.asetSemasa.cukaiBolehPulih) + Number(testData.asetSemasa.pelaburanJangkaPendek) + Number(testData.asetSemasa.lainLain);</code><br><br>STEP 14 - VERIFY TEST DATA TOTAL<br><code>expect( calculatedExpectedTotal ).toBe( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 15 - VERIFY JUMLAH ASET SEMASA LABEL<br><code>await expect( zakatPage.jumlahAsetSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY JUMLAH ASET SEMASA<br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 17 - VERIFY SETERUSNYA AVAILABLE<br><code>await expect( zakatPage.penyataNextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataNextButton ).toBeEnabled();</code><br><br>STEP 18 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_025 | Navigate To Liabiliti Semasa | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_025_Navigate_To_Liabiliti_Semasa.spec.js) | [Setup / test data](#tc_zakat_perniagaan_025-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY JUMLAH PELABURAN<br><code>await zakatPage.verifyJumlahPelaburan( 1000000 );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - VERIFY ASET SEMASA STEP<br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 11 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY ASET SEMASA VALUES<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 13 - VERIFY JUMLAH ASET SEMASA<br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 14 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 15 - VERIFY AKAUN BELUM BAYAR<br><code>await expect( zakatPage.akaunBelumBayarField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.akaunBelumBayarField ).toBeEnabled();</code><br><br>STEP 16 - VERIFY PINJAMAN JANGKA PENDEK<br><code>await expect( zakatPage.pinjamanJangkaPendekField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.pinjamanJangkaPendekField ).toBeEnabled();</code><br><br>STEP 17 - VERIFY CUKAI &amp; GAJI BELUM BAYAR<br><code>await expect( zakatPage.cukaiGajiBelumBayarField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cukaiGajiBelumBayarField ).toBeEnabled();</code><br><br>STEP 18 - VERIFY LAIN-LAIN<br><code>await expect( zakatPage.liabilitiLainLainField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.liabilitiLainLainField ).toBeEnabled();</code><br><br>STEP 19 - VERIFY JUMLAH LIABILITI SEMASA<br><code>await expect( zakatPage.jumlahLiabilitiSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - COMPLETE STEP VERIFICATION<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 21 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_026 | Enter Liabiliti Semasa Details | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_026_Enter_Liabiliti_Semasa_Details.spec.js) | [Setup / test data](#tc_zakat_perniagaan_026-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY PELABURAN<br><code>await zakatPage.verifyPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( 1000000 );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 11 - VERIFY ASET SEMASA<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 12 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 13 - VERIFY LIABILITI SEMASA STEP<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 14 - ENTER LIABILITI SEMASA DETAILS<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 15 - VERIFY AKAUN BELUM BAYAR<br><code>await expect( zakatPage.akaunBelumBayarField ).toHaveValue( '8000', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY PINJAMAN JANGKA PENDEK<br><code>await expect( zakatPage.pinjamanJangkaPendekField ).toHaveValue( '5000000', { timeout: 15000 } );</code><br><br>STEP 17 - VERIFY CUKAI &amp; GAJI BELUM BAYAR<br><code>await expect( zakatPage.cukaiGajiBelumBayarField ).toHaveValue( '60000', { timeout: 15000 } );</code><br><br>STEP 18 - VERIFY LAIN-LAIN<br><code>await expect( zakatPage.liabilitiLainLainField ).toHaveValue( '2000', { timeout: 15000 } );</code><br><br>STEP 19 - VERIFY ALL LIABILITI VALUES<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 20 - VERIFY JUMLAH LIABILITI SECTION<br><code>await expect( zakatPage.jumlahLiabilitiSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 21 - CALCULATE EXPECTED TOTAL<br><code>const expectedLiabilitiTotal = Number( testData.liabilitiSemasa.akaunBelumBayar ) + Number( testData.liabilitiSemasa.pinjamanJangkaPendek ) + Number( testData.liabilitiSemasa.cukaiGajiBelumBayar ) + Number( testData.liabilitiSemasa.lainLain );</code><br><br>STEP 22 - VERIFY TEST DATA TOTAL<br><code>expect( expectedLiabilitiTotal ).toBe( 5070000 );</code><br><br>STEP 23 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_027 | Verify Jumlah Liabiliti Semasa | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_027_Verify_Jumlah_Liabiliti_Semasa.spec.js) | [Setup / test data](#tc_zakat_perniagaan_027-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY JUMLAH PELABURAN<br><code>await zakatPage.verifyJumlahPelaburan( 1000000 );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 11 - VERIFY ASET SEMASA VALUES<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY JUMLAH ASET SEMASA<br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 13 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 14 - VERIFY LIABILITI SEMASA STEP<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 15 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 16 - VERIFY ENTERED VALUES<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 17 - CALCULATE EXPECTED TOTAL<br><code>const calculatedLiabilitiTotal = Number( testData.liabilitiSemasa.akaunBelumBayar ) + Number( testData.liabilitiSemasa.pinjamanJangkaPendek ) + Number( testData.liabilitiSemasa.cukaiGajiBelumBayar ) + Number( testData.liabilitiSemasa.lainLain );</code><br><br>STEP 18 - VERIFY TEST DATA CALCULATION<br><code>expect( calculatedLiabilitiTotal ).toBe( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 19 - VERIFY JUMLAH LIABILITI LABEL<br><code>await expect( zakatPage.jumlahLiabilitiSemasaLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY JUMLAH LIABILITI SEMASA<br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 21 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 22 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_028 | Verify Jumlah Aset Bersih | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_028_Verify_Jumlah_Aset_Bersih.spec.js) | [Setup / test data](#tc_zakat_perniagaan_028-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><br>STEP 8 - VERIFY JUMLAH PELABURAN<br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 9 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 10 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 11 - VERIFY ASET SEMASA<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY JUMLAH ASET SEMASA<br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 13 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 14 - VERIFY LIABILITI STEP<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 15 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 16 - VERIFY LIABILITI VALUES<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 17 - VERIFY JUMLAH LIABILITI<br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 18 - CALCULATE EXPECTED ASET BERSIH<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 19 - NAVIGATE TO RESULT STEP<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 20 - VERIFY CALCULATOR STILL OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY JUMLAH ASET BERSIH LABEL<br><code>await expect( zakatPage.jumlahAsetBersihLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 22 - VERIFY JUMLAH ASET BERSIH VALUE<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 23 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_029 | Verify Penyata Kewangan Below Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_029_Verify_Penyata_Kewangan_Below_Nisab.spec.js) | [Setup / test data](#tc_zakat_perniagaan_029-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 8 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 9 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 10 - VERIFY ASET SEMASA<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 11 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 12 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 13 - VERIFY LIABILITI SEMASA<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 14 - VERIFY EXPECTED NET ASSET CALCULATION<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 15 - NAVIGATE TO RESULT<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 16 - VERIFY JUMLAH ASET BERSIH<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 17 - VERIFY BELOW-NISAB MESSAGE<br><code>await zakatPage.verifyPenyataKewanganBelowNisab();</code><br><br>STEP 18 - VERIFY MESSAGE DIRECTLY<br><code>await expect( zakatPage.penyataKewanganBelowNisabMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataKewanganBelowNisabMessage ).toContainText( 'Anda tidak dikenakan zakat', { timeout: 15000 } );</code><br><br>STEP 19 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_030 | Verify Penyata Kewangan Above Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_030_Verify_Penyata_Kewangan_Above_Nisab.spec.js) | [Setup / test data](#tc_zakat_perniagaan_030-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 8 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 9 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 10 - VERIFY ASET SEMASA<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 11 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 12 - VERIFY LIABILITI STEP<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 13 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 14 - VERIFY LIABILITI VALUES<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 15 - VERIFY JUMLAH LIABILITI<br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 16 - CALCULATE EXPECTED ASET BERSIH<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><br>STEP 17 - VERIFY EXPECTED CALCULATION<br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 18 - NAVIGATE TO RESULT<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 19 - VERIFY JUMLAH ASET BERSIH<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 20 - VERIFY BELOW-NISAB MESSAGE NOT SHOWN<br><code>await expect( zakatPage.penyataKewanganBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY ABOVE-NISAB STATE<br><code>await zakatPage.verifyPenyataKewanganAboveNisab();</code><br><br>STEP 22 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 23 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_031 | Verify Penyata Kewangan Zakat Result | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_031_Verify_Penyata_Kewangan_Zakat_Result.spec.js) | [Setup / test data](#tc_zakat_perniagaan_031-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN METHOD<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 8 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 9 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 10 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 11 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 12 - CALCULATE EXPECTED ASET BERSIH<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 13 - NAVIGATE TO PENGIRAAN<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 14 - VERIFY JUMLAH ASET BERSIH<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 15 - VERIFY ABOVE NISAB<br><code>await expect( zakatPage.penyataKewanganBelowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 16 - CALCULATE EXPECTED ZAKAT<br><code>const calculatedZakat = testData.expectedJumlahAsetBersih * testData.zakatRate;</code><br><code>expect( calculatedZakat ).toBe( testData.expectedZakat );</code><br><br>STEP 17 - PROCEED TO FINAL ZAKAT RESULT<br><code>await zakatPage.proceedToFinalPenyataKewanganResult();</code><br><br>STEP 18 - VERIFY FINAL ZAKAT RESULT<br><code>await zakatPage.verifyFinalPenyataKewanganResult( testData.expectedZakat );</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_032 | Verify Sebelum Back Navigation | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_032_Verify_Sebelum_Back_Navigation.spec.js) | [Setup / test data](#tc_zakat_perniagaan_032-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 8 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><br>STEP 9 - VERIFY ASET SEMASA STEP<br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 10 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 11 - VERIFY ASET SEMASA VALUES<br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><br>STEP 12 - VERIFY JUMLAH ASET SEMASA<br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 13 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><br>STEP 14 - VERIFY LIABILITI SEMASA STEP<br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 15 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 16 - VERIFY LIABILITI VALUES<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 17 - VERIFY JUMLAH LIABILITI<br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 18 - CALCULATE EXPECTED ASET BERSIH<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><br>STEP 19 - VERIFY EXPECTED CALCULATION<br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 20 - NAVIGATE TO PENGIRAAN<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 21 - VERIFY JUMLAH ASET BERSIH<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 22 - VERIFY SEBELUM BUTTON<br><code>await expect( zakatPage.penyataBackButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.penyataBackButton ).toBeEnabled();</code><br><br>STEP 23 - CLICK SEBELUM<br><code>await zakatPage.navigateBackPenyataKewangan();</code><br><br>STEP 24 - VERIFY RETURN TO LIABILITI SEMASA<br><code>await zakatPage.verifyReturnedToLiabilitiSemasa();</code><br><br>STEP 25 - VERIFY PREVIOUS VALUES RETAINED<br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><br>STEP 26 - VERIFY TOTAL RETAINED<br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 27 - VERIFY CALCULATOR STILL OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 28 - VERIFY NO SYSTEM ERROR<br><code>await expect( zakatPage.unexpectedErrorMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 29 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_033 | Add Penyata Kewangan Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_033_Add_Penyata_Kewangan_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_perniagaan_033-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY INITIAL CART<br><code>await zakatPage.verifyEmptyCart();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT PENYATA KEWANGAN<br><code>await zakatPage.selectPenyataKewanganMethod();</code><br><code>await zakatPage.verifyPenyataKewanganMethod();</code><br><br>STEP 7 - ENTER PELABURAN<br><code>await zakatPage.enterPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyPelaburan( testData.pelaburan );</code><br><code>await zakatPage.verifyJumlahPelaburan( testData.expectedJumlahPelaburan );</code><br><br>STEP 8 - NAVIGATE TO ASET SEMASA<br><code>await zakatPage.navigateToAsetSemasa();</code><br><code>await zakatPage.verifyAsetSemasaStep();</code><br><br>STEP 9 - ENTER ASET SEMASA<br><code>await zakatPage.enterAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyAsetSemasaDetails( testData.asetSemasa );</code><br><code>await zakatPage.verifyJumlahAsetSemasa( testData.expectedJumlahAsetSemasa );</code><br><br>STEP 10 - NAVIGATE TO LIABILITI SEMASA<br><code>await zakatPage.navigateToLiabilitiSemasa();</code><br><code>await zakatPage.verifyLiabilitiSemasaStep();</code><br><br>STEP 11 - ENTER LIABILITI SEMASA<br><code>await zakatPage.enterLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><code>await zakatPage.verifyLiabilitiSemasaDetails( testData.liabilitiSemasa );</code><br><code>await zakatPage.verifyJumlahLiabilitiSemasa( testData.expectedJumlahLiabilitiSemasa );</code><br><br>STEP 12 - CALCULATE EXPECTED ASET BERSIH<br><code>const calculatedAsetBersih = testData.expectedJumlahPelaburan + testData.expectedJumlahAsetSemasa - testData.expectedJumlahLiabilitiSemasa;</code><br><code>expect( calculatedAsetBersih ).toBe( testData.expectedJumlahAsetBersih );</code><br><br>STEP 13 - NAVIGATE TO PENGIRAAN<br><code>await zakatPage.navigateToPenyataKewanganResult();</code><br><br>STEP 14 - VERIFY JUMLAH ASET BERSIH<br><code>await zakatPage.verifyJumlahAsetBersih( testData.expectedJumlahAsetBersih );</code><br><br>STEP 15 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyPenyataKewanganAboveNisab();</code><br><br>STEP 16 - CALCULATE EXPECTED ZAKAT<br><code>const calculatedZakat = testData.expectedJumlahAsetBersih * testData.zakatRate;</code><br><code>expect( calculatedZakat ).toBe( testData.expectedZakat );</code><br><br>STEP 17 - PROCEED TO FINAL RESULT<br><code>await zakatPage.proceedToFinalPenyataKewanganResult();</code><br><br>STEP 18 - CHECK APPLICATION DEFECT<br><code>const systemErrorVisible = await zakatPage.unexpectedErrorMessage .isVisible() .catch(() =&gt; false);</code><br><br>STEP 19 - VERIFY FINAL ZAKAT RESULT<br><code>await zakatPage.verifyFinalPenyataKewanganResult( testData.expectedZakat );</code><br><br>STEP 20 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code><br><br>STEP 21 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 22 - VERIFY CART ITEM EXISTS<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 23 - VERIFY EXPECTED CART AMOUNT<br><code>const expectedCartAmount = `RM ${testData.expectedZakat.toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}`;</code><br><code>const cartZakatAmount = zakatPage.cartContainer.getByText( expectedCartAmount, { exact: true } ).first();</code><br><code>await expect( cartZakatAmount ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 24 - VERIFY CART TOTAL<br><code>const cartTotal = zakatPage.cartContainer.getByText( expectedCartAmount, { exact: true } ).last();</code><br><code>await expect( cartTotal ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 25 - VERIFY PAYMENT BUTTON<br><code>const paymentButton = zakatPage.cartContainer.getByRole( 'button', { name: `Bayar ${expectedCartAmount}`, exact: true } );</code><br><code>await expect( paymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( paymentButton ).toBeEnabled();</code><br><br>STEP 26 - VERIFY EMPTY CART STATE REMOVED<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_034 | Verify Cart Details | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_034_Verify_Cart_Details.spec.js) | [Setup / test data](#tc_zakat_perniagaan_034-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 4 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectMainHaulYear( testData.year );</code><br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 5 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualAmount( testData.manualAmount );</code><br><code>await zakatPage.verifyManualAmount( testData.manualAmount );</code><br><br>STEP 6 - ADD ZAKAT TO CART<br><code>await zakatPage.addManualZakatToCart();</code><br><br>STEP 7 - VERIFY CART HEADING<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentCartHeading ).toHaveText( 'Bakul Bayaran', { timeout: 15000 } );</code><br><br>STEP 8 - VERIFY ZAKAT TYPE<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toHaveText( 'Zakat Perniagaan', { timeout: 15000 } );</code><br><br>STEP 9 - VERIFY TAHUN / HAUL<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toHaveText( testData.year, { timeout: 15000 } );</code><br><br>STEP 10 - VERIFY ITEM AMOUNT<br><code>await expect( zakatPage.cartAmount1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount1000 ).toHaveText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 11 - VERIFY CART TOTAL<br><code>await expect( zakatPage.cartTotal1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartTotal1000 ).toHaveText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 12 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.paymentButton1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeEnabled();</code><br><code>await expect( zakatPage.paymentButton1000 ).toHaveText( 'Bayar RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY EMPTY CART MESSAGE IS HIDDEN<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY EMPTY PAYMENT BUTTON IS HIDDEN<br><code>await expect( zakatPage.emptyPaymentButton ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled();</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_035 | Remove Zakat Perniagaan From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_035_Remove_Zakat_Perniagaan_From_Cart.spec.js) | [Setup / test data](#tc_zakat_perniagaan_035-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 4 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectMainHaulYear( testData.year );</code><br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 5 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualAmount( testData.manualAmount );</code><br><code>await zakatPage.verifyManualAmount( testData.manualAmount );</code><br><br>STEP 6 - ADD ZAKAT TO CART<br><code>await zakatPage.addManualZakatToCart();</code><br><br>STEP 7 - VERIFY ZAKAT ITEM ADDED<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount1000 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.paymentButton1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeEnabled();</code><br><br>STEP 9 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled();</code><br><br>STEP 10 - REMOVE ZAKAT FROM CART<br><code>await zakatPage.removeZakatPerniagaanFromCart();</code><br><br>STEP 11 - VERIFY ZAKAT ITEM REMOVED<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY OLD PAYMENT BUTTON REMOVED<br><code>await expect( zakatPage.paymentButton1000 ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Perniagaan | TBD | TBD | TC_ZAKAT_PERNIAGAAN_036 | Verify Empty Cart After Removal | Script present; execution TBD — [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_036_Verify_Empty_Cart_After_Removal.spec.js) | [Setup / test data](#tc_zakat_perniagaan_036-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PERNIAGAAN<br><code>await zakatPage.openZakatPerniagaan();</code><br><br>STEP 3 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 4 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectMainHaulYear( testData.year );</code><br><code>await zakatPage.verifyMainHaulYear( testData.year );</code><br><br>STEP 5 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualAmount( testData.manualAmount );</code><br><code>await zakatPage.verifyManualAmount( testData.manualAmount );</code><br><br>STEP 6 - ADD ZAKAT TO CART<br><code>await zakatPage.addManualZakatToCart();</code><br><br>STEP 7 - VERIFY ITEM ADDED TO CART<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartAmount1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.paymentButton1000 ).toBeEnabled();</code><br><br>STEP 8 - REMOVE ZAKAT PERNIAGAAN<br><code>await zakatPage.removeZakatPerniagaanFromCart();</code><br><br>STEP 9 - VERIFY OLD CART ITEM IS HIDDEN<br><code>await expect( zakatPage.zakatPerniagaanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY EMPTY-CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toContainText( 'Rekod tidak ditemui', { timeout: 15000 } );</code><br><br>STEP 11 - VERIFY CART TOTAL RESET TO RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 12 - VERIFY EMPTY BAYAR BUTTON<br><code>await expect( zakatPage.emptyPaymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY OLD PAYMENT BUTTON IS HIDDEN<br><code>await expect( zakatPage.paymentButton1000 ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY OLD AMOUNT IS REMOVED<br><code>await expect( zakatPage.cartAmount1000 ).toBeHidden({ timeout: 15000 });</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_PERNIAGAAN_001 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_001_Open_Zakat_Perniagaan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_002 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_003 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_003_Select_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_004 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_004_Enter_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_005 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_005_Add_Manual_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_006 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_006_Remove_Manual_Zakat_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_007 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_007_Open_Zakat_Perniagaan_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_008 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_008_Verify_Calculator_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_009 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_009_Select_Calculator_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_010 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_010_Verify_Untung_Rugi_Default_Method.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_011 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_011_Enter_Hasil_Jualan_Perniagaan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_012 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_012_Enter_Perbelanjaan_Kos.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_013 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_013_Verify_Keuntungan_Bersih.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_014 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_014_Verify_Untung_Rugi_Below_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_015 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_015_Verify_Untung_Rugi_Above_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_016 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_016_Verify_Untung_Rugi_Zakat_2_5_Percent.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_017 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_017_Change_Perbelanjaan_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_018 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_018_Add_Untung_Rugi_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_019 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_019_Select_Penyata_Kewangan_Method.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_020 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_020_Verify_Pelaburan_Step.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_021 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_021_Enter_Pelaburan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_022 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_022_Navigate_To_Aset_Semasa.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_023 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_023_Enter_Aset_Semasa_Details.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_024 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_024_Verify_Jumlah_Aset_Semasa.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_025 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_025_Navigate_To_Liabiliti_Semasa.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_026 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_026_Enter_Liabiliti_Semasa_Details.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_027 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_027_Verify_Jumlah_Liabiliti_Semasa.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_028 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_028_Verify_Jumlah_Aset_Bersih.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_029 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_029_Verify_Penyata_Kewangan_Below_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_030 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_030_Verify_Penyata_Kewangan_Above_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_031 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_031_Verify_Penyata_Kewangan_Zakat_Result.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_032 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_032_Verify_Sebelum_Back_Navigation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_033 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_033_Add_Penyata_Kewangan_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_034 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_034_Verify_Cart_Details.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_035 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_035_Remove_Zakat_Perniagaan_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PERNIAGAAN_036 | [JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_036_Verify_Empty_Cart_After_Removal.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_PERNIAGAAN_001 setup

Original test title: TC_ZAKAT_PERNIAGAAN_001 - Open Zakat Perniagaan

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_001_Open_Zakat_Perniagaan.spec.js)

~~~javascript
const zakatPage =
new ZakatPerniagaanPage(page);
~~~

### TC_ZAKAT_PERNIAGAAN_002 setup

Original test title: TC_ZAKAT_PERNIAGAAN_002 - Verify Default State

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    defaultYear: '2026',
    defaultAmount: '0.00'
};
~~~

### TC_ZAKAT_PERNIAGAAN_003 setup

Original test title: TC_ZAKAT_PERNIAGAAN_003 - Select Tahun Haul

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_003_Select_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    defaultYear: '2026',
    firstYear: '2024',
    secondYear: '2025',
    finalYear: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_004 setup

Original test title: TC_ZAKAT_PERNIAGAAN_004 - Enter Manual Zakat Amount

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_004_Enter_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    amount: '1000.00'
};
~~~

### TC_ZAKAT_PERNIAGAAN_005 setup

Original test title: TC_ZAKAT_PERNIAGAAN_005 - Add Manual Zakat To Cart

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_005_Add_Manual_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    amount: '1000.00',
    formattedAmount: 'RM 1,000.00'
};
~~~

### TC_ZAKAT_PERNIAGAAN_006 setup

Original test title: TC_ZAKAT_PERNIAGAAN_006 - Remove Manual Zakat From Cart

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_006_Remove_Manual_Zakat_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    amount: '1000.00',
    formattedAmount: 'RM 1,000.00'
};
~~~

### TC_ZAKAT_PERNIAGAAN_007 setup

Original test title: TC_ZAKAT_PERNIAGAAN_007 - Open Zakat Perniagaan Calculator

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_007_Open_Zakat_Perniagaan_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatPerniagaanPage(page);
~~~

### TC_ZAKAT_PERNIAGAAN_008 setup

Original test title: TC_ZAKAT_PERNIAGAAN_008 - Verify Calculator Default State

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_008_Verify_Calculator_Default_State.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    defaultYear: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_009 setup

Original test title: TC_ZAKAT_PERNIAGAAN_009 - Select Calculator Tahun Haul

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_009_Select_Calculator_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    defaultYear: '2026',
    firstYear: '2024',
    secondYear: '2025',
    finalYear: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_010 setup

Original test title: TC_ZAKAT_PERNIAGAAN_010 - Verify Untung Rugi Default Method

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_010_Verify_Untung_Rugi_Default_Method.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_011 setup

Original test title: TC_ZAKAT_PERNIAGAAN_011 - Enter Hasil Jualan Perniagaan

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_011_Enter_Hasil_Jualan_Perniagaan.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000'
};
~~~

### TC_ZAKAT_PERNIAGAAN_012 setup

Original test title: TC_ZAKAT_PERNIAGAAN_012 - Enter Perbelanjaan Kos

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_012_Enter_Perbelanjaan_Kos.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000',
    perbelanjaanKos: '100000'
};
~~~

### TC_ZAKAT_PERNIAGAAN_013 setup

Original test title: TC_ZAKAT_PERNIAGAAN_013 - Verify Keuntungan Bersih

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_013_Verify_Keuntungan_Bersih.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000',
    perbelanjaanKos: '100000',
    expectedKeuntunganBersih: 900000
};
~~~

### TC_ZAKAT_PERNIAGAAN_014 setup

Original test title: TC_ZAKAT_PERNIAGAAN_014 - Verify Untung Rugi Below Nisab

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_014_Verify_Untung_Rugi_Below_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '40000',
    perbelanjaanKos: '10000',
    expectedKeuntunganBersih: 30000
};
~~~

### TC_ZAKAT_PERNIAGAAN_015 setup

Original test title: TC_ZAKAT_PERNIAGAAN_015 - Verify Untung Rugi Above Nisab

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_015_Verify_Untung_Rugi_Above_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000',
    perbelanjaanKos: '100000',
    expectedKeuntunganBersih: 900000
};
~~~

### TC_ZAKAT_PERNIAGAAN_016 setup

Original test title: TC_ZAKAT_PERNIAGAAN_016 - Verify Untung Rugi Zakat 2.5 Percent

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_016_Verify_Untung_Rugi_Zakat_2_5_Percent.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000',
    perbelanjaanKos: '100000',
    expectedKeuntunganBersih: 900000,
    zakatRate: 0.025,
    expectedZakat: 22500
};
~~~

### TC_ZAKAT_PERNIAGAAN_017 setup

Original test title: TC_ZAKAT_PERNIAGAAN_017 - Change Perbelanjaan and Recalculate

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_017_Change_Perbelanjaan_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',

    hasilJualan: '1000000',

    initialPerbelanjaan: '20000',
    initialKeuntunganBersih: 980000,
    initialZakat: 24500,

    updatedPerbelanjaan: '100000',
    updatedKeuntunganBersih: 900000,
    updatedZakat: 22500
};
~~~

### TC_ZAKAT_PERNIAGAAN_018 setup

Original test title: TC_ZAKAT_PERNIAGAAN_018 - Add Untung Rugi Zakat To Cart

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_018_Add_Untung_Rugi_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    hasilJualan: '1000000',
    perbelanjaanKos: '100000',
    expectedKeuntunganBersih: 900000,
    expectedZakat: 22500
};
~~~

### TC_ZAKAT_PERNIAGAAN_019 setup

Original test title: TC_ZAKAT_PERNIAGAAN_019 - Select Penyata Kewangan Method

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_019_Select_Penyata_Kewangan_Method.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_020 setup

Original test title: TC_ZAKAT_PERNIAGAAN_020 - Verify Pelaburan Step

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_020_Verify_Pelaburan_Step.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026'
};
~~~

### TC_ZAKAT_PERNIAGAAN_021 setup

Original test title: TC_ZAKAT_PERNIAGAAN_021 - Enter Pelaburan

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_021_Enter_Pelaburan.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    pelaburan: '1000000',
    expectedJumlahPelaburan: 1000000
};
~~~

### TC_ZAKAT_PERNIAGAAN_022 setup

Original test title: TC_ZAKAT_PERNIAGAAN_022 - Navigate To Aset Semasa

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_022_Navigate_To_Aset_Semasa.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    pelaburan: '1000000',
    expectedJumlahPelaburan: 1000000
};
~~~

### TC_ZAKAT_PERNIAGAAN_023 setup

Original test title: TC_ZAKAT_PERNIAGAAN_023 - Enter Aset Semasa Details

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_023_Enter_Aset_Semasa_Details.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    }
};
~~~

### TC_ZAKAT_PERNIAGAAN_024 setup

Original test title: TC_ZAKAT_PERNIAGAAN_024 - Verify Jumlah Aset Semasa

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_024_Verify_Jumlah_Aset_Semasa.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    expectedJumlahAsetSemasa: 251000
};
~~~

### TC_ZAKAT_PERNIAGAAN_025 setup

Original test title: TC_ZAKAT_PERNIAGAAN_025 - Navigate To Liabiliti Semasa

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_025_Navigate_To_Liabiliti_Semasa.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    expectedJumlahAsetSemasa: 251000
};
~~~

### TC_ZAKAT_PERNIAGAAN_026 setup

Original test title: TC_ZAKAT_PERNIAGAAN_026 - Enter Liabiliti Semasa Details

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_026_Enter_Liabiliti_Semasa_Details.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '8000',
        pinjamanJangkaPendek: '5000000',
        cukaiGajiBelumBayar: '60000',
        lainLain: '2000'
    },

    expectedJumlahAsetSemasa: 251000
};
~~~

### TC_ZAKAT_PERNIAGAAN_027 setup

Original test title: TC_ZAKAT_PERNIAGAAN_027 - Verify Jumlah Liabiliti Semasa

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_027_Verify_Jumlah_Liabiliti_Semasa.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '8000',
        pinjamanJangkaPendek: '5000000',
        cukaiGajiBelumBayar: '60000',
        lainLain: '2000'
    },

    expectedJumlahAsetSemasa: 251000,
    expectedJumlahLiabilitiSemasa: 5070000
};
~~~

### TC_ZAKAT_PERNIAGAAN_028 setup

Original test title: TC_ZAKAT_PERNIAGAAN_028 - Verify Jumlah Aset Bersih

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_028_Verify_Jumlah_Aset_Bersih.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '8000',
        pinjamanJangkaPendek: '5000000',
        cukaiGajiBelumBayar: '60000',
        lainLain: '2000'
    },

    expectedJumlahPelaburan: 1000000,
    expectedJumlahAsetSemasa: 251000,
    expectedJumlahLiabilitiSemasa: 5070000,
    expectedJumlahAsetBersih: -3819000
};
~~~

### TC_ZAKAT_PERNIAGAAN_029 setup

Original test title: TC_ZAKAT_PERNIAGAAN_029 - Verify Penyata Kewangan Below Nisab

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_029_Verify_Penyata_Kewangan_Below_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '8000',
        pinjamanJangkaPendek: '5000000',
        cukaiGajiBelumBayar: '60000',
        lainLain: '2000'
    },

    expectedJumlahPelaburan: 1000000,
    expectedJumlahAsetSemasa: 251000,
    expectedJumlahLiabilitiSemasa: 5070000,
    expectedJumlahAsetBersih: -3819000
};
~~~

### TC_ZAKAT_PERNIAGAAN_030 setup

Original test title: TC_ZAKAT_PERNIAGAAN_030 - Verify Penyata Kewangan Above Nisab

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_030_Verify_Penyata_Kewangan_Above_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '1000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '100000',
        pelbagaiPenghutang: '5000',
        akaunBelumTerima: '30000',
        cukaiBolehPulih: '5000',
        pelaburanJangkaPendek: '60000',
        lainLain: '1000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '8000',
        pinjamanJangkaPendek: '50000',
        cukaiGajiBelumBayar: '60000',
        lainLain: '2000'
    },

    expectedJumlahPelaburan: 1000000,
    expectedJumlahAsetSemasa: 251000,
    expectedJumlahLiabilitiSemasa: 120000,
    expectedJumlahAsetBersih: 1131000
};
~~~

### TC_ZAKAT_PERNIAGAAN_031 setup

Original test title: TC_ZAKAT_PERNIAGAAN_031 - Verify Penyata Kewangan Zakat Result

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_031_Verify_Penyata_Kewangan_Zakat_Result.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '3000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '50000',
        pelbagaiPenghutang: '10000',
        akaunBelumTerima: '2000',
        cukaiBolehPulih: '6000',
        pelaburanJangkaPendek: '100000',
        lainLain: '300000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '4000',
        pinjamanJangkaPendek: '50000',
        cukaiGajiBelumBayar: '78000',
        lainLain: '4000'
    },

    expectedJumlahPelaburan: 3000000,
    expectedJumlahAsetSemasa: 518000,
    expectedJumlahLiabilitiSemasa: 136000,
    expectedJumlahAsetBersih: 3382000,

    zakatRate: 0.025,
    expectedZakat: 84550
};
~~~

### TC_ZAKAT_PERNIAGAAN_032 setup

Original test title: TC_ZAKAT_PERNIAGAAN_032 - Verify Sebelum Back Navigation

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_032_Verify_Sebelum_Back_Navigation.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '3000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '50000',
        pelbagaiPenghutang: '10000',
        akaunBelumTerima: '2000',
        cukaiBolehPulih: '6000',
        pelaburanJangkaPendek: '100000',
        lainLain: '300000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '4000',
        pinjamanJangkaPendek: '50000',
        cukaiGajiBelumBayar: '78000',
        lainLain: '4000'
    },

    expectedJumlahPelaburan: 3000000,
    expectedJumlahAsetSemasa: 518000,
    expectedJumlahLiabilitiSemasa: 136000,
    expectedJumlahAsetBersih: 3382000
};
~~~

### TC_ZAKAT_PERNIAGAAN_033 setup

Original test title: TC_ZAKAT_PERNIAGAAN_033 - Add Penyata Kewangan Zakat To Cart

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_033_Add_Penyata_Kewangan_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {

    year: '2026',

    pelaburan: '3000000',

    asetSemasa: {
        simpananTetap: '50000',
        tunaiBank: '50000',
        pelbagaiPenghutang: '10000',
        akaunBelumTerima: '2000',
        cukaiBolehPulih: '6000',
        pelaburanJangkaPendek: '100000',
        lainLain: '300000'
    },

    liabilitiSemasa: {
        akaunBelumBayar: '4000',
        pinjamanJangkaPendek: '50000',
        cukaiGajiBelumBayar: '78000',
        lainLain: '4000'
    },

    expectedJumlahPelaburan: 3000000,
    expectedJumlahAsetSemasa: 518000,
    expectedJumlahLiabilitiSemasa: 136000,
    expectedJumlahAsetBersih: 3382000,

    zakatRate: 0.025,

    expectedZakat: 84550
};
~~~

### TC_ZAKAT_PERNIAGAAN_034 setup

Original test title: TC_ZAKAT_PERNIAGAAN_034 - Verify Cart Details

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_034_Verify_Cart_Details.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    manualAmount: '1000'
};
~~~

### TC_ZAKAT_PERNIAGAAN_035 setup

Original test title: TC_ZAKAT_PERNIAGAAN_035 - Remove Zakat Perniagaan From Cart

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_035_Remove_Zakat_Perniagaan_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    manualAmount: '1000'
};
~~~

### TC_ZAKAT_PERNIAGAAN_036 setup

Original test title: TC_ZAKAT_PERNIAGAAN_036 - Verify Empty Cart After Removal

[Source JavaScript](../../tests/zakat/perniagaan/TC_ZAKAT_PERNIAGAAN_036_Verify_Empty_Cart_After_Removal.spec.js)

~~~javascript
const zakatPage =
    new ZakatPerniagaanPage(page);

const testData = {
    year: '2026',
    manualAmount: '1000'
};
~~~

