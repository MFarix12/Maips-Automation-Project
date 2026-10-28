# Zakat Wang Simpanan — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 14 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_001 | Open Zakat Wang Simpanan | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_001_Open_Zakat_Wang_Simpanan.spec.js) | [Setup / test data](#tc_zakat_simpanan_001-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAYMENT CART<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code><br><br>STEP 4 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 5 - VERIFY ZAKAT WANG SIMPANAN PAGE<br><code>await zakatPage.verifyZakatSimpananPage();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_simpanan_002-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - VERIFY MODULE<br><code>await zakatPage.verifyZakatSimpananPage();</code><br><br>STEP 5 - VERIFY DEFAULT STATE<br><code>await zakatPage.verifyDefaultState();</code><br><br>STEP 6 - VERIFY NO PAYMENT IS AVAILABLE<br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_003 | Select Tahun/Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_003_Select_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_simpanan_003-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - VERIFY MODULE<br><code>await zakatPage.verifyZakatSimpananPage();</code><br><br>STEP 5 - OPEN TAHUN / HAUL<br><code>await zakatPage.openHaulSelection();</code><br><br>STEP 6 - VERIFY YEAR OPTION EXISTS<br><code>const yearOption = page.getByRole( 'option', { name: selectedYear, exact: true } );</code><br><code>await expect( yearOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - SELECT YEAR<br><code>await yearOption.click();</code><br><br>STEP 8 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifySelectedHaulYear( selectedYear );</code><br><br>STEP 9 - VERIFY FORM REMAINS AVAILABLE<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_004 | Enter Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_004_Enter_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_simpanan_004-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - VERIFY MODULE<br><code>await zakatPage.verifyZakatSimpananPage();</code><br><br>STEP 5 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectHaulYear( selectedYear );</code><br><br>STEP 6 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifySelectedHaulYear( selectedYear );</code><br><br>STEP 7 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualZakatAmount( manualAmount );</code><br><br>STEP 8 - VERIFY ENTERED AMOUNT<br><code>await zakatPage.verifyManualZakatAmount( manualAmount );</code><br><br>STEP 9 - VERIFY PAGE REMAINS AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_005 | Open Zakat Simpanan Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_005_Open_Zakat_Simpanan_Calculator.spec.js) | [Setup / test data](#tc_zakat_simpanan_005-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - VERIFY ZAKAT SIMPANAN PAGE<br><code>await zakatPage.verifyZakatSimpananPage();</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR IS OPEN<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 7 - VERIFY JUMLAH SIMPANAN FIELD<br><code>await expect( zakatPage.calculatorSavingsField ).toBeVisible();</code><br><br>STEP 8 - VERIFY MASUK TROLI BUTTON<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_006 | Select Calculator Tahun/Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_006_Select_Calculator_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_simpanan_006-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - OPEN CALCULATOR TAHUN / HAUL<br><code>await zakatPage.openCalculatorHaulSelection();</code><br><br>STEP 7 - VERIFY YEAR OPTION<br><code>const yearOption = page.getByRole( 'option', { name: selectedYear, exact: true } );</code><br><code>await expect( yearOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - SELECT YEAR<br><code>await yearOption.click();</code><br><br>STEP 9 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 10 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorSavingsField ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_007 | Enter Jumlah Simpanan | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_007_Enter_Jumlah_Simpanan.spec.js) | [Setup / test data](#tc_zakat_simpanan_007-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT CALCULATOR TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - VERIFY SELECTED TAHUN / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 8 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - VERIFY JUMLAH SIMPANAN<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 10 - VERIFY CALCULATOR REMAINS AVAILABLE<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_008 | Verify Zakat Simpanan Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_008_Verify_Zakat_Simpanan_Calculation.spec.js) | [Setup / test data](#tc_zakat_simpanan_008-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 8 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - VERIFY INPUT<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 10 - ADD CALCULATED ZAKAT TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 11 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible();</code><br><br>STEP 12 - VERIFY ZAKAT TYPE<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeVisible();</code><br><br>STEP 13 - VERIFY CALCULATED AMOUNT<br><code>await expect( zakatPage.cartCalculatedAmount.first() ).toBeVisible();</code><br><code>await expect( zakatPage.cartCalculatedAmount.first() ).toHaveText( expectedZakat );</code><br><br>STEP 14 - VERIFY PAYMENT AMOUNT<br><code>await expect( zakatPage.cartPayCalculatedButton ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_009 | Change Jumlah Simpanan and Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_009_Change_Jumlah_Simpanan_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_simpanan_009-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT CALCULATOR TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - ENTER INITIAL JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( initialAmount );</code><br><br>STEP 8 - VERIFY INITIAL AMOUNT<br><code>await zakatPage.verifyJumlahSimpanan( initialAmount );</code><br><br>STEP 9 - CHANGE JUMLAH SIMPANAN<br><code>await zakatPage.changeJumlahSimpanan( updatedAmount );</code><br><br>STEP 10 - VERIFY UPDATED AMOUNT<br><code>await zakatPage.verifyJumlahSimpanan( updatedAmount );</code><br><br>STEP 11 - VERIFY OLD VALUE IS REPLACED<br><code>await expect( zakatPage.calculatorSavingsField ).not.toHaveValue( initialAmount );</code><br><br>STEP 12 - VERIFY CALCULATOR REMAINS AVAILABLE<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_010 | Change Calculator Tahun/Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_010_Change_Calculator_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_simpanan_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT INITIAL YEAR<br><code>await zakatPage.selectCalculatorHaulYear( initialYear );</code><br><br>STEP 7 - VERIFY INITIAL YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( initialYear );</code><br><br>STEP 8 - CHANGE YEAR<br><code>await zakatPage.selectCalculatorHaulYear( updatedYear );</code><br><br>STEP 9 - VERIFY UPDATED YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( updatedYear );</code><br><br>STEP 10 - VERIFY OLD YEAR IS REPLACED<br><code>await expect( zakatPage.calculatorHaulInput ).not.toHaveValue( initialYear );</code><br><br>STEP 11 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorSavingsField ).toBeVisible();</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_011 | Add Calculated Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_011_Add_Calculated_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_simpanan_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - VERIFY SELECTED TAHUN / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 8 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - VERIFY JUMLAH SIMPANAN<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 10 - ADD CALCULATED ZAKAT TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 11 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CART IS NOT EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY ZAKAT SIMPANAN ITEM<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CALCULATED AMOUNT<br><code>await expect( zakatPage.cartAmount2500.first() ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.cartPayButton2500 ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartPayButton2500 ).toBeEnabled();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_012 | Verify Cart Details and Total | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_012_Verify_Cart_Details_And_Total.spec.js) | [Setup / test data](#tc_zakat_simpanan_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 8 - VERIFY JUMLAH SIMPANAN<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - ADD CALCULATED ZAKAT TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 10 - VERIFY SUCCESS MESSAGE<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible();</code><br><br>STEP 11 - VERIFY CART<br><code>await expect( zakatPage.cartContainer ).toBeVisible();</code><br><br>STEP 12 - VERIFY ZAKAT TYPE<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeVisible();</code><br><br>STEP 13 - VERIFY TAHUN / HAUL<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible();</code><br><code>await expect( zakatPage.cartYear2026 ).toHaveText( selectedYear );</code><br><br>STEP 14 - VERIFY CART AMOUNT<br><code>const amountCount = await zakatPage.cartAmount2500.count();</code><br><code>expect( amountCount ).toBeGreaterThanOrEqual(1);</code><br><code>await expect( zakatPage.cartAmount2500.first() ).toBeVisible();</code><br><code>await expect( zakatPage.cartAmount2500.first() ).toHaveText( expectedAmount );</code><br><br>STEP 15 - VERIFY CART TOTAL<br><code>await expect( zakatPage.cartAmount2500.last() ).toBeVisible();</code><br><code>await expect( zakatPage.cartAmount2500.last() ).toHaveText( expectedAmount );</code><br><br>STEP 16 - VERIFY PAYMENT BUTTON<br><code>await expect( zakatPage.cartPayButton2500 ).toBeVisible();</code><br><code>await expect( zakatPage.cartPayButton2500 ).toBeEnabled();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_013 | Remove Zakat Simpanan From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_013_Remove_Zakat_Simpanan_From_Cart.spec.js) | [Setup / test data](#tc_zakat_simpanan_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 8 - VERIFY JUMLAH SIMPANAN<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 10 - VERIFY ITEM EXISTS IN CART<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeVisible();</code><br><code>await expect( zakatPage.cartAmount2500.first() ).toBeVisible();</code><br><code>await expect( zakatPage.cartPayButton2500 ).toBeVisible();</code><br><br>STEP 11 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible();</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled();</code><br><br>STEP 12 - REMOVE ZAKAT FROM CART<br><code>await zakatPage.removeZakatSimpananFromCart();</code><br><br>STEP 13 - VERIFY ITEM REMOVED<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeHidden();</code><br><br>STEP 14 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY TOTAL RETURNS TO RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible();</code><br><br>STEP 16 - VERIFY BAYAR BUTTON DISABLED<br><code>await expect( zakatPage.emptyCartPayButton ).toBeVisible();</code><br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code> |
| TBD | Zakat Wang Simpanan | TBD | TBD | TC_ZAKAT_SIMPANAN_014 | Verify Empty Cart After Removal | Script present; execution TBD — [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_014_Verify_Empty_Cart_After_Removal.spec.js) | [Setup / test data](#tc_zakat_simpanan_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN ZAKAT WANG SIMPANAN<br><code>await zakatPage.openZakatSimpanan();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectCalculatorHaulYear( selectedYear );</code><br><br>STEP 7 - VERIFY TAHUN / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 8 - ENTER JUMLAH SIMPANAN<br><code>await zakatPage.enterJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 9 - VERIFY JUMLAH SIMPANAN<br><code>await zakatPage.verifyJumlahSimpanan( jumlahSimpanan );</code><br><br>STEP 10 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 11 - VERIFY ITEM EXISTS BEFORE REMOVAL<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeVisible();</code><br><code>await expect( zakatPage.cartAmount2500.first() ).toBeVisible();</code><br><code>await expect( zakatPage.cartPayButton2500 ).toBeVisible();</code><br><br>STEP 12 - REMOVE ITEM<br><code>await zakatPage.removeZakatSimpananFromCart();</code><br><br>STEP 13 - VERIFY ZAKAT CART ROW REMOVED<br><code>await expect( zakatPage.cartZakatSimpananItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY EMPTY CART TOTAL<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 16 - VERIFY NORMAL BAYAR BUTTON<br><code>await expect( zakatPage.emptyCartPayButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY BAYAR BUTTON DISABLED<br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code><br><br>STEP 18 - VERIFY PAYMENT ACTION NOT AVAILABLE<br><code>await expect( zakatPage.cartPayButton2500 ).toBeHidden();</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_SIMPANAN_001 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_001_Open_Zakat_Wang_Simpanan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_002 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_003 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_003_Select_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_004 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_004_Enter_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_005 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_005_Open_Zakat_Simpanan_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_006 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_006_Select_Calculator_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_007 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_007_Enter_Jumlah_Simpanan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_008 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_008_Verify_Zakat_Simpanan_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_009 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_009_Change_Jumlah_Simpanan_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_010 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_010_Change_Calculator_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_011 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_011_Add_Calculated_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_012 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_012_Verify_Cart_Details_And_Total.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_013 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_013_Remove_Zakat_Simpanan_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_SIMPANAN_014 | [JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_014_Verify_Empty_Cart_After_Removal.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_SIMPANAN_001 setup

Original test title: TC_ZAKAT_SIMPANAN_001 - Open Zakat Wang Simpanan

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_001_Open_Zakat_Wang_Simpanan.spec.js)

~~~javascript
const zakatPage =
new ZakatSimpananPage(page);
~~~

### TC_ZAKAT_SIMPANAN_002 setup

Original test title: TC_ZAKAT_SIMPANAN_002 - Verify Default State

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatSimpananPage(page);
~~~

### TC_ZAKAT_SIMPANAN_003 setup

Original test title: TC_ZAKAT_SIMPANAN_003 - Select Tahun/Haul

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_003_Select_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
~~~

### TC_ZAKAT_SIMPANAN_004 setup

Original test title: TC_ZAKAT_SIMPANAN_004 - Enter Manual Zakat Amount

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_004_Enter_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const manualAmount = '1000.00';
~~~

### TC_ZAKAT_SIMPANAN_005 setup

Original test title: TC_ZAKAT_SIMPANAN_005 - Open Zakat Simpanan Calculator

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_005_Open_Zakat_Simpanan_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatSimpananPage(page);
~~~

### TC_ZAKAT_SIMPANAN_006 setup

Original test title: TC_ZAKAT_SIMPANAN_006 - Select Calculator Tahun/Haul

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_006_Select_Calculator_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
~~~

### TC_ZAKAT_SIMPANAN_007 setup

Original test title: TC_ZAKAT_SIMPANAN_007 - Enter Jumlah Simpanan

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_007_Enter_Jumlah_Simpanan.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';
~~~

### TC_ZAKAT_SIMPANAN_008 setup

Original test title: TC_ZAKAT_SIMPANAN_008 - Verify Zakat Simpanan Calculation

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_008_Verify_Zakat_Simpanan_Calculation.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';

const expectedZakat = 'RM 25.00';
~~~

### TC_ZAKAT_SIMPANAN_009 setup

Original test title: TC_ZAKAT_SIMPANAN_009 - Change Jumlah Simpanan and Recalculate

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_009_Change_Jumlah_Simpanan_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';

const initialAmount = '1000';
const updatedAmount = '2000';
~~~

### TC_ZAKAT_SIMPANAN_010 setup

Original test title: TC_ZAKAT_SIMPANAN_010 - Change Calculator Tahun/Haul

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_010_Change_Calculator_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const initialYear = '2025';
const updatedYear = '2026';
~~~

### TC_ZAKAT_SIMPANAN_011 setup

Original test title: TC_ZAKAT_SIMPANAN_011 - Add Calculated Zakat To Cart

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_011_Add_Calculated_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';
~~~

### TC_ZAKAT_SIMPANAN_012 setup

Original test title: TC_ZAKAT_SIMPANAN_012 - Verify Cart Details and Total

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_012_Verify_Cart_Details_And_Total.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';
const expectedAmount = 'RM 25.00';
~~~

### TC_ZAKAT_SIMPANAN_013 setup

Original test title: TC_ZAKAT_SIMPANAN_013 - Remove Zakat Simpanan From Cart

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_013_Remove_Zakat_Simpanan_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';
~~~

### TC_ZAKAT_SIMPANAN_014 setup

Original test title: TC_ZAKAT_SIMPANAN_014 - Verify Empty Cart After Removal

[Source JavaScript](../../tests/zakat/simpanan/TC_ZAKAT_SIMPANAN_014_Verify_Empty_Cart_After_Removal.spec.js)

~~~javascript
const zakatPage =
    new ZakatSimpananPage(page);

const selectedYear = '2026';
const jumlahSimpanan = '1000';
~~~

