# Zakat Ternakan — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 30 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_001 | Open Zakat Ternakan | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_001_Open_Zakat_Ternakan.spec.js) | [Setup / test data](#tc_zakat_ternakan_001-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - VERIFY KIRA SEKARANG BUTTON<br><code>await expect( zakatPage.kiraSekarangButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 3 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 4 - VERIFY ZAKAT TERNAKAN PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 5 - VERIFY ZAKAT TERNAKAN HEADING<br><code>await expect( zakatPage.zakatTernakanHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 6 - VERIFY TAHUN / HAUL<br><code>await expect( zakatPage.haulFormItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY JUMLAH BAYARAN<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY BAKUL BAYARAN<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_ternakan_002-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 4 - VERIFY DEFAULT STATE<br><code>await zakatPage .verifyDefaultState();</code><br><br>STEP 5 - VERIFY DEFAULT HAUL = 2026<br><code>const haulInput = zakatPage.haulFormItem .locator('input');</code><br><code>await expect( haulInput ).toHaveValue( '2026', { timeout: 15000 } );</code><br><br>STEP 6 - VERIFY JUMLAH BAYARAN<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><code>const manualAmountValue = await zakatPage .manualAmountField .inputValue();</code><br><code>expect( [ '', '0', '0.00' ] ).toContain( manualAmountValue );</code><br><br>STEP 7 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 8 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY TOTAL = RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_003 | Select Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_003_Select_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_ternakan_003-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 4 - GET HAUL INPUT<br><code>const haulInput = zakatPage.haulFormItem .locator('input');</code><br><br>STEP 5 - VERIFY DEFAULT YEAR = 2026<br><code>await expect( haulInput ).toHaveValue( defaultYear, { timeout: 15000 } );</code><br><br>STEP 6 - OPEN YEAR DROPDOWN<br><code>await zakatPage .openHaulSelection();</code><br><br>STEP 7 - VERIFY 2025 OPTION<br><code>const yearOption = page.getByRole( 'option', { name: selectedYear, exact: true } );</code><br><code>await expect( yearOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - SELECT 2025<br><code>await yearOption.click();</code><br><br>STEP 9 - VERIFY SELECTED YEAR<br><code>await zakatPage .verifySelectedHaulYear( selectedYear );</code><br><br>STEP 10 - VERIFY FORM REMAINS AVAILABLE<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 11 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 12 - CHANGE BACK TO 2026<br><code>await zakatPage .selectHaulYear( defaultYear );</code><br><br>STEP 13 - VERIFY 2026<br><code>await zakatPage .verifySelectedHaulYear( defaultYear );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_004 | Enter Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_004_Enter_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_ternakan_004-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 4 - VERIFY YEAR<br><code>await zakatPage .verifySelectedHaulYear( testData.year );</code><br><br>STEP 5 - VERIFY AMOUNT FIELD<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><br>STEP 6 - ENTER MANUAL AMOUNT<br><code>await zakatPage .enterManualZakatAmount( testData.amount );</code><br><br>STEP 7 - VERIFY ENTERED AMOUNT<br><code>await zakatPage .verifyManualZakatAmount( testData.amount );</code><br><br>STEP 8 - VERIFY YEAR REMAINS 2026<br><code>await zakatPage .verifySelectedHaulYear( testData.year );</code><br><br>STEP 9 - VERIFY CALCULATOR BUTTON REMAINS AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 10 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 11 - CLEAR AMOUNT<br><code>await zakatPage .clearManualZakatAmount();</code><br><br>STEP 12 - VERIFY FIELD CLEARED<br><code>await expect( zakatPage.manualAmountField ).toHaveValue( '', { timeout: 15000 } );</code><br><br>STEP 13 - RE-ENTER AMOUNT<br><code>await zakatPage .enterManualZakatAmount( testData.amount );</code><br><br>STEP 14 - VERIFY AMOUNT AGAIN<br><code>await zakatPage .verifyManualZakatAmount( testData.amount );</code><br><br>STEP 15 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_005 | Add Manual Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_005_Add_Manual_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_ternakan_005-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 4 - VERIFY YEAR<br><code>await zakatPage .verifySelectedHaulYear( testData.year );</code><br><br>STEP 5 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 6 - ENTER MANUAL AMOUNT<br><code>await zakatPage .enterManualZakatAmount( testData.amount );</code><br><br>STEP 7 - VERIFY MANUAL AMOUNT<br><code>await zakatPage .verifyManualZakatAmount( testData.amount );</code><br><br>STEP 8 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.mainAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.mainAddToCartButton ).toBeEnabled();</code><br><br>STEP 9 - ADD MANUAL PAYMENT TO CART<br><code>await zakatPage .addManualZakatToCart();</code><br><br>STEP 10 - VERIFY ZAKAT TERNAKAN ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY EMPTY MESSAGE DISAPPEARS<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CART DETAILS<br><code>const cartResult = await zakatPage .verifyManualZakatAddedToCart();</code><br><code>expect( cartResult ).toBeTruthy();</code><br><code>expect( cartResult.cartText ).toContain( 'Zakat Ternakan' );</code><br><br>STEP 13 - VERIFY RM VALUES<br><code>expect( cartResult.rmValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 14 - VERIFY POSITIVE AMOUNT<br><code>const positiveValues = cartResult.numericValues.filter( value =&gt; Number.isFinite(value) &amp;&amp; value &gt; 0 );</code><br><code>expect( positiveValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 15 - VERIFY ENTERED RM1000 IS REPRESENTED<br><code>expect( cartResult.numericValues ).toContain( Number(testData.amount) );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_006 | Open Zakat Ternakan Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_006_Open_Zakat_Ternakan_Calculator.spec.js) | [Setup / test data](#tc_zakat_ternakan_006-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - VERIFY MAIN PAGE<br><code>await zakatPage .verifyZakatTernakanPage();</code><br><br>STEP 4 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR TITLE<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY CALCULATOR CONTENT<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 8 - VERIFY MAKLUMAT TERNAKAN<br><code>await expect( zakatPage.livestockInformationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY JENIS TERNAKAN<br><code>await expect( zakatPage.livestockTypeLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY LEMBU / KERBAU OPTION<br><code>await expect( zakatPage.cattleOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY KAMBING / BIRI-BIRI OPTION<br><code>await expect( zakatPage.goatSheepOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CALCULATOR HAUL<br><code>await expect( zakatPage.calculatorHaulFormItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY CALCULATOR MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY CART IS STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_007 | Verify Calculator Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_007_Verify_Calculator_Default_State.spec.js) | [Setup / test data](#tc_zakat_ternakan_007-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPEN<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY DEFAULT HAUL = 2026<br><code>await zakatPage .verifyCalculatorDefaultHaul( defaultYear );</code><br><br>STEP 6 - VERIFY LIVESTOCK TYPES<br><code>await expect( zakatPage.cattleOption ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.goatSheepOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY DEFAULT CATTLE FIELDS<br><code>await zakatPage .verifyCattleFieldsVisible();</code><br><br>STEP 8 - VERIFY QUANTITY DEFAULT VALUE<br><code>const quantityValue = await zakatPage .cattleQuantityField .inputValue();</code><br><code>expect( [ '', '0' ] ).toContain( quantityValue );</code><br><br>STEP 9 - VERIFY MALE PRICE DEFAULT VALUE<br><code>const malePrice = await zakatPage .maleCattlePriceField .inputValue();</code><br><code>expect( [ '', '0', '0.00' ] ).toContain( malePrice );</code><br><br>STEP 10 - VERIFY FEMALE PRICE DEFAULT VALUE<br><code>const femalePrice = await zakatPage .femaleCattlePriceField .inputValue();</code><br><code>expect( [ '', '0', '0.00' ] ).toContain( femalePrice );</code><br><br>STEP 11 - COMPLETE DEFAULT-STATE CHECK<br><code>await zakatPage .verifyCalculatorDefaultState();</code><br><br>STEP 12 - VERIFY NOTHING ADDED TO CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_008 | Select Calculator Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_008_Select_Calculator_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_ternakan_008-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY DEFAULT CALCULATOR YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( defaultYear );</code><br><br>STEP 6 - VERIFY CATTLE FIELDS BEFORE CHANGE<br><code>await zakatPage .verifyCattleFieldsVisible();</code><br><br>STEP 7 - OPEN CALCULATOR YEAR DROPDOWN<br><code>await zakatPage .openCalculatorHaulSelection();</code><br><br>STEP 8 - VERIFY 2025 OPTION<br><code>const year2025Option = page.getByRole( 'option', { name: selectedYear, exact: true } );</code><br><code>await expect( year2025Option ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - SELECT 2025<br><code>await year2025Option.click();</code><br><br>STEP 10 - VERIFY CALCULATOR YEAR = 2025<br><code>await zakatPage .verifyCalculatorHaulYear( selectedYear );</code><br><br>STEP 11 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY LIVESTOCK OPTIONS REMAIN<br><code>await expect( zakatPage.cattleOption ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.goatSheepOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY CATTLE FIELDS REMAIN<br><code>await zakatPage .verifyCattleFieldsVisible();</code><br><br>STEP 14 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 15 - CHANGE CALCULATOR YEAR BACK TO 2026<br><code>await zakatPage .selectCalculatorHaulYear( defaultYear );</code><br><br>STEP 16 - VERIFY YEAR = 2026<br><code>await zakatPage .verifyCalculatorHaulYear( defaultYear );</code><br><br>STEP 17 - VERIFY CALCULATOR STILL AVAILABLE<br><code>await expect( zakatPage.calculatorTitle ).toBeVisible({ timeout: 15000 });</code><br><code>await zakatPage .verifyCattleFieldsVisible();</code><br><br>STEP 18 - VERIFY NO CART ITEM CREATED<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_009 | Verify Lembu Kerbau Default Selection | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_009_Verify_Lembu_Kerbau_Default_Selection.spec.js) | [Setup / test data](#tc_zakat_ternakan_009-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY DEFAULT YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( defaultYear );</code><br><br>STEP 6 - VERIFY LEMBU / KERBAU OPTION<br><code>await expect( zakatPage.cattleOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - VERIFY KAMBING / BIRI-BIRI OPTION<br><code>await expect( zakatPage.goatSheepOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY DEFAULT CATTLE SELECTION<br><code>await zakatPage .verifyCattleDefaultSelection();</code><br><br>STEP 9 - VERIFY CATTLE QUANTITY FIELD<br><code>await expect( zakatPage.cattleQuantityField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cattleQuantityField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY MALE CATTLE PRICE<br><code>await expect( zakatPage.maleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.maleCattlePriceField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY FEMALE CATTLE PRICE<br><code>await expect( zakatPage.femaleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeEnabled();</code><br><br>STEP 12 - VERIFY DEFAULT QUANTITY<br><code>const quantityValue = await zakatPage .cattleQuantityField .inputValue();</code><br><code>expect( [ '', '0' ] ).toContain( quantityValue );</code><br><br>STEP 13 - VERIFY DEFAULT MALE PRICE<br><code>const malePrice = await zakatPage .maleCattlePriceField .inputValue();</code><br><code>expect( [ '', '0', '0.00' ] ).toContain( malePrice );</code><br><br>STEP 14 - VERIFY DEFAULT FEMALE PRICE<br><code>const femalePrice = await zakatPage .femaleCattlePriceField .inputValue();</code><br><code>expect( [ '', '0', '0.00' ] ).toContain( femalePrice );</code><br><br>STEP 15 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_010 | Enter Lembu Kerbau Quantity | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_010_Enter_Lembu_Kerbau_Quantity.spec.js) | [Setup / test data](#tc_zakat_ternakan_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR = 2026<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY CATTLE MODE<br><code>await zakatPage .verifyCattleDefaultSelection();</code><br><br>STEP 7 - VERIFY QUANTITY FIELD<br><code>await expect( zakatPage.cattleQuantityField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cattleQuantityField ).toBeEnabled();</code><br><br>STEP 8 - ENTER QUANTITY = 20<br><code>await zakatPage .enterCattleQuantity( testData.quantity );</code><br><br>STEP 9 - VERIFY QUANTITY = 20<br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><br>STEP 10 - VERIFY PRICE FIELDS REMAIN AVAILABLE<br><code>await expect( zakatPage.maleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.maleCattlePriceField ).toBeEnabled();</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 12 - CLEAR QUANTITY<br><code>await zakatPage .clearCattleQuantity();</code><br><br>STEP 13 - RE-ENTER QUANTITY<br><code>await zakatPage .enterCattleQuantity( testData.quantity );</code><br><br>STEP 14 - FINAL QUANTITY VERIFICATION<br><code>await expect( zakatPage.cattleQuantityField ).toHaveValue( testData.quantity, { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY NO CART ITEM CREATED<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_011 | Enter Lembu Jantan Price | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_011_Enter_Lembu_Jantan_Price.spec.js) | [Setup / test data](#tc_zakat_ternakan_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR = 2026<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU / KERBAU MODE<br><code>await zakatPage .verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY = 20<br><code>await zakatPage .enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - VERIFY QUANTITY = 20<br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><br>STEP 9 - VERIFY MALE PRICE FIELD<br><code>await expect( zakatPage.maleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.maleCattlePriceField ).toBeEnabled();</code><br><br>STEP 10 - ENTER MALE PRICE = RM2500<br><code>await zakatPage .enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 11 - VERIFY MALE PRICE<br><code>await zakatPage .verifyMaleCattlePrice( testData.malePrice );</code><br><br>STEP 12 - VERIFY QUANTITY REMAINS 20<br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><br>STEP 13 - VERIFY FEMALE PRICE FIELD AVAILABLE<br><code>await expect( zakatPage.femaleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeEnabled();</code><br><br>STEP 14 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 15 - CLEAR MALE PRICE<br><code>await zakatPage .clearMaleCattlePrice();</code><br><br>STEP 16 - RE-ENTER MALE PRICE<br><code>await zakatPage .enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 17 - FINAL VERIFICATION<br><code>await zakatPage .verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><br>STEP 18 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_012 | Enter Lembu Betina Price | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_012_Enter_Lembu_Betina_Price.spec.js) | [Setup / test data](#tc_zakat_ternakan_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage .openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY CATTLE MODE<br><code>await zakatPage .verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY = 20<br><code>await zakatPage .enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE PRICE = RM2500<br><code>await zakatPage .enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - VERIFY FEMALE PRICE FIELD<br><code>await expect( zakatPage.femaleCattlePriceField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeEnabled();</code><br><br>STEP 10 - ENTER FEMALE PRICE = RM3000<br><code>await zakatPage .enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY FEMALE PRICE<br><code>await zakatPage .verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 12 - VERIFY QUANTITY REMAINS 20<br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><br>STEP 13 - VERIFY MALE PRICE REMAINS RM2500<br><code>await zakatPage .verifyMaleCattlePrice( testData.malePrice );</code><br><br>STEP 14 - VERIFY ALL THREE INPUT VALUES<br><code>await expect( zakatPage.cattleQuantityField ).toHaveValue( testData.quantity, { timeout: 15000 } );</code><br><code>await expect( zakatPage.maleCattlePriceField ).toHaveValue( testData.malePrice, { timeout: 15000 } );</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toHaveValue( testData.femalePrice, { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 16 - CLEAR FEMALE PRICE<br><code>await zakatPage .clearFemaleCattlePrice();</code><br><br>STEP 17 - RE-ENTER FEMALE PRICE<br><code>await zakatPage .enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 18 - FINAL VERIFY FEMALE PRICE<br><code>await zakatPage .verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 19 - VERIFY OTHER VALUES REMAIN<br><code>await zakatPage .verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage .verifyMaleCattlePrice( testData.malePrice );</code><br><br>STEP 20 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_013 | Verify Lembu Kerbau Below Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_013_Verify_Lembu_Kerbau_Below_Nisab.spec.js) | [Setup / test data](#tc_zakat_ternakan_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU / KERBAU<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY BELOW NISAB MESSAGE<br><code>await zakatPage.verifyCattleBelowNisab();</code><br><br>STEP 12 - VERIFY ZAKAT RESULT = RM 0.00<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_014 | Verify Lembu Kerbau Above Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_014_Verify_Lembu_Kerbau_Above_Nisab.spec.js) | [Setup / test data](#tc_zakat_ternakan_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU/KERBAU MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE CATTLE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE CATTLE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 12 - VERIFY ZAKAT RESULT SECTION<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY RESULT IS NOT ZERO<br><code>await expect( zakatPage.calculatorContainer ).not.toContainText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_015 | Verify Lembu Kerbau Zakat Result | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_015_Verify_Lembu_Kerbau_Zakat_Result.spec.js) | [Setup / test data](#tc_zakat_ternakan_015-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU/KERBAU<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 12 - VERIFY CALCULATED ZAKAT RESULT<br><code>const result = await zakatPage .verifyCattleZakatResult();</code><br><br>STEP 13 - VERIFY RESULT OBJECT<br><code>expect( result ).toBeDefined();</code><br><code>expect( result.zakatAmount ).toBeGreaterThan(0);</code><br><br>STEP 14 - VERIFY REQUIRED RESULT LABELS<br><code>expect( result.calculatorText ).toContain( 'Kadar Zakat yang Perlu Dibayar' );</code><br><code>expect( result.calculatorText ).toContain( 'Jumlah Zakat yang Perlu Dibayar' );</code><br><br>STEP 15 - VERIFY BELOW NISAB MESSAGE NOT DISPLAYED<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY NOTHING ADDED TO CART YET<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_016 | Change Lembu Kerbau Quantity And Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_016_Change_Lembu_Kerbau_Quantity_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_ternakan_016-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU/KERBAU MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER INITIAL QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.initialQuantity );</code><br><br>STEP 8 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY INITIAL VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.initialQuantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY INITIAL ABOVE NISAB RESULT<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><code>const initialAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( initialAmount ).toBeGreaterThan(0);</code><br><br>STEP 12 - CHANGE CATTLE QUANTITY<br><code>await zakatPage.cattleQuantityField.fill( testData.updatedQuantity );</code><br><br>STEP 13 - TRIGGER RECALCULATION<br><code>await zakatPage.cattleQuantityField.press( 'Tab' );</code><br><br>STEP 14 - VERIFY UPDATED QUANTITY<br><code>await zakatPage.verifyCattleQuantity( testData.updatedQuantity );</code><br><br>STEP 15 - VERIFY PRICES REMAIN UNCHANGED<br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 16 - VERIFY RESULT STILL ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 17 - GET RECALCULATED RESULT<br><code>const updatedAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( updatedAmount ).toBeGreaterThan(0);</code><br><br>STEP 18 - VERIFY RESULT SECTION REMAINS DISPLAYED<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 19 - VERIFY BELOW NISAB MESSAGE NOT DISPLAYED<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_017 | Add Lembu Kerbau Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_017_Add_Lembu_Kerbau_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_ternakan_017-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU/KERBAU MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER CATTLE QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE CATTLE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE CATTLE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 12 - GET CALCULATED ZAKAT AMOUNT<br><code>const calculatedAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( calculatedAmount ).toBeGreaterThan(0);</code><br><br>STEP 13 - VERIFY CART EMPTY BEFORE ADD<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 14 - CLICK MASUK TROLI<br><code>await zakatPage .clickCalculatorAddToCart();</code><br><br>STEP 15 - VERIFY CART ITEM APPEARS<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY EMPTY CART MESSAGE DISAPPEARS<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 17 - GET CART CONTENT<br><code>const cartText = await zakatPage.getCartContent();</code><br><br>STEP 18 - VERIFY ZAKAT TYPE<br><code>expect( cartText ).toContain( 'Zakat Ternakan' );</code><br><br>STEP 19 - VERIFY HAUL<br><code>expect( cartText ).toContain( testData.year );</code><br><br>STEP 20 - VERIFY CART CONTAINS RM VALUE<br><code>const rmValues = zakatPage.extractRMValues( cartText );</code><br><code>expect( rmValues.length ).toBeGreaterThan(0);</code><br><br>STEP 21 - CONVERT CART VALUES<br><code>const cartAmounts = rmValues.map( value =&gt; zakatPage.convertRMToNumber( value ) );</code><br><br>STEP 22 - VERIFY CALCULATED AMOUNT IN CART<br><code>expect( cartAmounts ).toContain( calculatedAmount );</code><br><br>STEP 23 - VERIFY POSITIVE CART TOTAL<br><code>const positiveAmounts = cartAmounts.filter( amount =&gt; Number.isFinite(amount) &amp;&amp; amount &gt; 0 );</code><br><code>expect( positiveAmounts.length ).toBeGreaterThan(0);</code><br><br>STEP 24 - VERIFY PAYMENT BUTTON<br><code>const paymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( paymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( paymentButton ).toBeEnabled({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_018 | Select Kambing Biri-Biri | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_018_Select_Kambing_Biri_Biri.spec.js) | [Setup / test data](#tc_zakat_ternakan_018-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY DEFAULT LEMBU/KERBAU<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 8 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 9 - VERIFY QUANTITY FIELD EMPTY<br><code>await expect( zakatPage.goatSheepQuantityField ).toHaveValue('');</code><br><br>STEP 10 - VERIFY PRICE FIELD EMPTY<br><code>await expect( zakatPage.goatPriceField ).toHaveValue('');</code><br><br>STEP 11 - VERIFY CATTLE INPUTS ARE NOT VISIBLE<br><code>await expect( zakatPage.cattleQuantityField ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.maleCattlePriceField ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.femaleCattlePriceField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_019 | Verify Kambing Biri-Biri Fields | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_019_Verify_Kambing_Biri_Biri_Fields.spec.js) | [Setup / test data](#tc_zakat_ternakan_019-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI SELECTION<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - VERIFY QUANTITY FIELD VISIBLE<br><code>await expect( zakatPage.goatSheepQuantityField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY QUANTITY FIELD ENABLED<br><code>await expect( zakatPage.goatSheepQuantityField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY QUANTITY FIELD EMPTY<br><code>await expect( zakatPage.goatSheepQuantityField ).toHaveValue('');</code><br><br>STEP 11 - VERIFY GOAT PRICE FIELD VISIBLE<br><code>await expect( zakatPage.goatPriceField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY GOAT PRICE FIELD ENABLED<br><code>await expect( zakatPage.goatPriceField ).toBeEnabled();</code><br><br>STEP 13 - VERIFY GOAT PRICE FIELD EMPTY<br><code>await expect( zakatPage.goatPriceField ).toHaveValue('');</code><br><br>STEP 14 - VERIFY CATTLE QUANTITY FIELD HIDDEN<br><code>await expect( zakatPage.cattleQuantityField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY MALE CATTLE PRICE HIDDEN<br><code>await expect( zakatPage.maleCattlePriceField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY FEMALE CATTLE PRICE HIDDEN<br><code>await expect( zakatPage.femaleCattlePriceField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY RESULT SECTION EXISTS<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 18 - VERIFY INITIAL RESULT RM 0.00<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 19 - VERIFY MASUK TROLI EXISTS<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_020 | Enter Kambing Biri-Biri Quantity | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_020_Enter_Kambing_Biri_Biri_Quantity.spec.js) | [Setup / test data](#tc_zakat_ternakan_020-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - VERIFY INITIAL QUANTITY EMPTY<br><code>await expect( zakatPage.goatSheepQuantityField ).toHaveValue('');</code><br><br>STEP 9 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 10 - VERIFY QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 11 - CLEAR QUANTITY<br><code>await zakatPage.clearGoatSheepQuantity();</code><br><br>STEP 12 - VERIFY QUANTITY CLEARED<br><code>await expect( zakatPage.goatSheepQuantityField ).toHaveValue( '', { timeout: 15000 } );</code><br><br>STEP 13 - RE-ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 14 - VERIFY RE-ENTERED QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 15 - VERIFY PRICE REMAINS EMPTY<br><code>await expect( zakatPage.goatPriceField ).toHaveValue('');</code><br><br>STEP 16 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_021 | Enter Kambing Price | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_021_Enter_Kambing_Price.spec.js) | [Setup / test data](#tc_zakat_ternakan_021-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 9 - VERIFY QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 10 - VERIFY PRICE INITIALLY EMPTY<br><code>await expect( zakatPage.goatPriceField ).toHaveValue('');</code><br><br>STEP 11 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 12 - VERIFY GOAT PRICE<br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 13 - VERIFY QUANTITY REMAINS UNCHANGED<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 14 - CLEAR GOAT PRICE<br><code>await zakatPage.clearGoatPrice();</code><br><br>STEP 15 - VERIFY PRICE CLEARED<br><code>await expect( zakatPage.goatPriceField ).toHaveValue( '', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY QUANTITY STILL UNCHANGED<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 17 - RE-ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 18 - VERIFY RE-ENTERED PRICE<br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 19 - VERIFY FINAL QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 20 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_022 | Verify Kambing Biri-Biri Below Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_022_Verify_Kambing_Biri_Biri_Below_Nisab.spec.js) | [Setup / test data](#tc_zakat_ternakan_022-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 9 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 11 - VERIFY BELOW NISAB MESSAGE<br><code>await zakatPage .verifyGoatSheepBelowNisab();</code><br><br>STEP 12 - VERIFY RESULT LABELS<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY ZAKAT AMOUNT RM 0.00<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY CART REMAINS EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY NO CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_023 | Verify Kambing Biri-Biri Above Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_023_Verify_Kambing_Biri_Biri_Above_Nisab.spec.js) | [Setup / test data](#tc_zakat_ternakan_023-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 9 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 10 - VERIFY QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><br>STEP 11 - VERIFY GOAT PRICE<br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 12 - VERIFY ABOVE NISAB<br><code>await zakatPage .verifyGoatSheepAboveNisab();</code><br><br>STEP 13 - VERIFY RESULT SECTION<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 14 - GET CALCULATOR CONTENT<br><code>const calculatorText = await zakatPage.calculatorContainer.innerText();</code><br><br>STEP 15 - EXTRACT RM VALUES<br><code>const rmMatches = calculatorText.match( /RM\s*[\d,]+\.\d{2}/g );</code><br><code>expect( rmMatches ).not.toBeNull();</code><br><code>expect( rmMatches.length ).toBeGreaterThan(0);</code><br><br>STEP 16 - CONVERT RM VALUES TO NUMBERS<br><code>const amounts = rmMatches.map( value =&gt; Number( value .replace(/RM\s*/i, '') .replace(/,/g, '') ) );</code><br><br>STEP 17 - FIND POSITIVE RESULT<br><code>const positiveAmounts = amounts.filter( amount =&gt; Number.isFinite(amount) &amp;&amp; amount &gt; 0 );</code><br><code>expect( positiveAmounts.length ).toBeGreaterThan(0);</code><br><br>STEP 18 - VERIFY BELOW-NISAB MESSAGE HIDDEN<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 21 - VERIFY NO ITEM ADDED TO CART<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_024 | Verify Kambing Biri-Biri Zakat Result | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_024_Verify_Kambing_Biri_Biri_Zakat_Result.spec.js) | [Setup / test data](#tc_zakat_ternakan_024-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 9 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage .verifyGoatSheepAboveNisab();</code><br><br>STEP 12 - VERIFY EXACT ZAKAT RESULT<br><code>const actualAmount = await zakatPage .verifyGoatSheepZakatResult( testData.expectedZakatAmount );</code><br><br>STEP 13 - VERIFY RETURNED RESULT<br><code>expect( actualAmount ).toBe( testData.expectedZakatAmount );</code><br><br>STEP 14 - VERIFY DISPLAYED RM1,000.00<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY BELOW NISAB MESSAGE HIDDEN<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 18 - VERIFY NO CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_025 | Change Kambing Quantity And Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_025_Change_Kambing_Quantity_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_ternakan_025-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER INITIAL QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.initialQuantity );</code><br><br>STEP 9 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 10 - VERIFY INITIAL INPUTS<br><code>await zakatPage.verifyGoatSheepQuantity( testData.initialQuantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 11 - VERIFY INITIAL ABOVE-NISAB RESULT<br><code>await zakatPage.verifyGoatSheepAboveNisab();</code><br><br>STEP 12 - CAPTURE INITIAL RESULT<br><code>const initialAmount = await zakatPage .getGoatSheepZakatResultAmount();</code><br><code>expect( initialAmount ).toBeGreaterThan(0);</code><br><br>STEP 13 - CHANGE QUANTITY<br><code>await zakatPage.goatSheepQuantityField.fill( testData.updatedQuantity );</code><br><br>STEP 14 - TRIGGER RECALCULATION<br><code>await zakatPage.goatSheepQuantityField.press( 'Tab' );</code><br><br>STEP 15 - VERIFY UPDATED QUANTITY<br><code>await zakatPage.verifyGoatSheepQuantity( testData.updatedQuantity );</code><br><br>STEP 16 - VERIFY PRICE REMAINS UNCHANGED<br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 17 - VERIFY STILL ABOVE NISAB<br><code>await zakatPage.verifyGoatSheepAboveNisab();</code><br><br>STEP 18 - CAPTURE UPDATED RESULT<br><code>const updatedAmount = await zakatPage .getGoatSheepZakatResultAmount();</code><br><code>expect( updatedAmount ).toBeGreaterThan(0);</code><br><br>STEP 19 - VERIFY RESULT SECTION<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Kadar Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'Jumlah Zakat yang Perlu Dibayar', { timeout: 15000 } );</code><br><br>STEP 20 - VERIFY BELOW-NISAB MESSAGE HIDDEN<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY MASUK TROLI AVAILABLE<br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.calculatorAddToCartButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 22 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 23 - VERIFY NO CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_026 | Add Kambing Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_026_Add_Kambing_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_ternakan_026-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><br>STEP 7 - VERIFY KAMBING/BIRI-BIRI MODE<br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 8 - ENTER QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.quantity );</code><br><br>STEP 9 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goatPrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyGoatSheepQuantity( testData.quantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goatPrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyGoatSheepAboveNisab();</code><br><br>STEP 12 - GET CALCULATED ZAKAT AMOUNT<br><code>const calculatedAmount = await zakatPage .getGoatSheepZakatResultAmount();</code><br><code>expect( calculatedAmount ).toBe( testData.expectedZakatAmount );</code><br><br>STEP 13 - VERIFY DISPLAYED RESULT<br><code>await expect( zakatPage.calculatorContainer ).toContainText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY CART EMPTY BEFORE ADD<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 15 - CLICK MASUK TROLI<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 16 - VERIFY ZAKAT TERNAKAN CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY EMPTY CART MESSAGE HIDDEN<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 18 - GET CART CONTENT<br><code>const cartText = await zakatPage.getCartContent();</code><br><br>STEP 19 - VERIFY ZAKAT TYPE<br><code>expect( cartText ).toContain( 'Zakat Ternakan' );</code><br><br>STEP 20 - VERIFY YEAR / HAUL<br><code>expect( cartText ).toContain( testData.year );</code><br><br>STEP 21 - VERIFY RM1,000.00 IN CART<br><code>expect( cartText ).toContain( 'RM 1,000.00' );</code><br><br>STEP 22 - EXTRACT CART RM VALUES<br><code>const rmValues = zakatPage.extractRMValues( cartText );</code><br><code>expect( rmValues.length ).toBeGreaterThan(0);</code><br><br>STEP 23 - CONVERT CART VALUES<br><code>const cartAmounts = rmValues.map( value =&gt; zakatPage.convertRMToNumber( value ) );</code><br><br>STEP 24 - VERIFY CALCULATED AMOUNT IN CART<br><code>expect( cartAmounts ).toContain( calculatedAmount );</code><br><br>STEP 25 - VERIFY CART TOTAL<br><code>expect( cartText ).toContain( 'RM 1,000.00' );</code><br><br>STEP 26 - VERIFY BAYAR BUTTON<br><code>const paymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( paymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( paymentButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 27 - VERIFY BAYAR BUTTON AMOUNT<br><code>await expect( paymentButton ).toContainText( 'RM 1,000.00' );</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_027 | Verify Multiple Zakat Ternakan Cart Items | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_027_Verify_Multiple_Zakat_Ternakan_Cart_Items.spec.js) | [Setup / test data](#tc_zakat_ternakan_027-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 4 - VERIFY DEFAULT CATTLE MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 5 - ENTER CATTLE QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.cattle.quantity );</code><br><br>STEP 6 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.cattle.malePrice );</code><br><br>STEP 7 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.cattle.femalePrice );</code><br><br>STEP 8 - VERIFY CATTLE INPUTS<br><code>await zakatPage.verifyCattleQuantity( testData.cattle.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.cattle.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.cattle.femalePrice );</code><br><br>STEP 9 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 10 - GET CATTLE RESULT<br><code>const cattleAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( cattleAmount ).toBe( testData.cattle.expectedAmount );</code><br><br>STEP 11 - VERIFY CART EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - ADD CATTLE TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 13 - WAIT FOR CATTLE CART UPDATE<br><code>const paymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( paymentButton ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY CATTLE CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>let cartText = await zakatPage.getCartContent();</code><br><code>expect( cartText ).toContain( 'RM 2,500.00' );</code><br><br>STEP 15 - OPEN CALCULATOR AGAIN<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 16 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 17 - ENTER GOAT QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.goat.quantity );</code><br><br>STEP 18 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goat.price );</code><br><br>STEP 19 - VERIFY GOAT INPUTS<br><code>await zakatPage.verifyGoatSheepQuantity( testData.goat.quantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goat.price );</code><br><br>STEP 20 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyGoatSheepAboveNisab();</code><br><br>STEP 21 - GET GOAT RESULT<br><code>const goatAmount = await zakatPage .getGoatSheepZakatResultAmount();</code><br><code>expect( goatAmount ).toBe( testData.goat.expectedAmount );</code><br><br>STEP 22 - ADD GOAT TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 23 - WAIT FOR CART TOTAL TO UPDATE<br><code>await expect( paymentButton ).toContainText( 'RM 3,500.00', { timeout: 15000 } );</code><br><br>STEP 24 - VERIFY CART CONTAINS BOTH AMOUNTS<br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 25 - GET UPDATED CART TEXT<br><code>await zakatPage.getCartContent();</code><br><br>STEP 26 - VERIFY CATTLE AMOUNT<br><code>expect( cartText ).toContain( 'RM 2,500.00' );</code><br><br>STEP 27 - VERIFY GOAT AMOUNT<br><code>expect( cartText ).toContain( 'RM 1,000.00' );</code><br><br>STEP 28 - VERIFY TOTAL<br><code>expect( cartText ).toContain( 'RM 3,500.00' );</code><br><br>STEP 29 - VERIFY TWO ZAKAT TERNAKAN ITEMS<br><code>const cartItems = zakatPage.cartContainer.getByText( 'Zakat Ternakan', { exact: true } );</code><br><code>await expect( cartItems ).toHaveCount( 2, { timeout: 15000 } );</code><br><br>STEP 30 - VERIFY YEAR<br><code>expect( cartText ).toContain( testData.year );</code><br><br>STEP 31 - VERIFY CALCULATED TOTAL<br><code>const calculatedTotal = cattleAmount + goatAmount;</code><br><code>expect( calculatedTotal ).toBe( testData.expectedTotal );</code><br><br>STEP 32 - VERIFY PAYMENT BUTTON<br><code>await expect( paymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( paymentButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 33 - VERIFY PAYMENT TOTAL<br><code>await expect( paymentButton ).toContainText( 'RM 3,500.00', { timeout: 15000 } );</code><br><br>STEP 34 - VERIFY EMPTY CART MESSAGE HIDDEN<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_028 | Verify Cart Total | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_028_Verify_Cart_Total.spec.js) | [Setup / test data](#tc_zakat_ternakan_028-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 4 - VERIFY DEFAULT CATTLE MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 5 - ENTER CATTLE QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.cattle.quantity );</code><br><br>STEP 6 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.cattle.malePrice );</code><br><br>STEP 7 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.cattle.femalePrice );</code><br><br>STEP 8 - VERIFY CATTLE INPUTS<br><code>await zakatPage.verifyCattleQuantity( testData.cattle.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.cattle.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.cattle.femalePrice );</code><br><br>STEP 9 - VERIFY CATTLE ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 10 - GET CATTLE ZAKAT AMOUNT<br><code>const cattleAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( cattleAmount ).toBe( testData.cattle.expectedAmount );</code><br><br>STEP 11 - ADD CATTLE TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 12 - WAIT FOR FIRST CART TOTAL<br><code>const paymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( paymentButton ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 13 - VERIFY FIRST CART AMOUNT<br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 14 - OPEN CALCULATOR AGAIN<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 15 - SELECT KAMBING/BIRI-BIRI<br><code>await zakatPage.selectGoatSheep();</code><br><code>await zakatPage.verifyGoatSheepSelection();</code><br><br>STEP 16 - ENTER GOAT QUANTITY<br><code>await zakatPage.enterGoatSheepQuantity( testData.goat.quantity );</code><br><br>STEP 17 - ENTER GOAT PRICE<br><code>await zakatPage.enterGoatPrice( testData.goat.price );</code><br><br>STEP 18 - VERIFY GOAT INPUTS<br><code>await zakatPage.verifyGoatSheepQuantity( testData.goat.quantity );</code><br><code>await zakatPage.verifyGoatPrice( testData.goat.price );</code><br><br>STEP 19 - VERIFY GOAT ABOVE NISAB<br><code>await zakatPage.verifyGoatSheepAboveNisab();</code><br><br>STEP 20 - GET GOAT ZAKAT AMOUNT<br><code>const goatAmount = await zakatPage .getGoatSheepZakatResultAmount();</code><br><code>expect( goatAmount ).toBe( testData.goat.expectedAmount );</code><br><br>STEP 21 - CALCULATE EXPECTED TOTAL<br><code>const expectedTotal = cattleAmount + goatAmount;</code><br><code>expect( expectedTotal ).toBe( testData.expectedTotal );</code><br><br>STEP 22 - ADD GOAT TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 23 - WAIT FOR FINAL CART TOTAL<br><code>await expect( paymentButton ).toContainText( 'RM 3,500.00', { timeout: 15000 } );</code><br><br>STEP 24 - VERIFY CATTLE AMOUNT IN CART<br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 25 - VERIFY GOAT AMOUNT IN CART<br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 1,000.00', { timeout: 15000 } );</code><br><br>STEP 26 - GET FINAL CART TEXT<br><code>const cartText = await zakatPage.getCartContent();</code><br><br>STEP 27 - VERIFY CART CONTENT<br><code>expect( cartText ).toContain( 'Zakat Ternakan' );</code><br><code>expect( cartText ).toContain( testData.year );</code><br><code>expect( cartText ).toContain( 'RM 2,500.00' );</code><br><code>expect( cartText ).toContain( 'RM 1,000.00' );</code><br><code>expect( cartText ).toContain( 'RM 3,500.00' );</code><br><br>STEP 28 - VERIFY TWO ZAKAT TERNAKAN ITEMS<br><code>const cartItems = zakatPage.cartContainer.getByText( 'Zakat Ternakan', { exact: true } );</code><br><code>await expect( cartItems ).toHaveCount( 2, { timeout: 15000 } );</code><br><br>STEP 29 - VERIFY PAYMENT BUTTON VISIBLE<br><code>await expect( paymentButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 30 - VERIFY PAYMENT BUTTON ENABLED<br><code>await expect( paymentButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 31 - VERIFY EXACT PAYMENT TOTAL<br><code>await expect( paymentButton ).toContainText( 'RM 3,500.00', { timeout: 15000 } );</code><br><br>STEP 32 - VERIFY EMPTY CART MESSAGE HIDDEN<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_029 | Remove Zakat Ternakan From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_029_Remove_Zakat_Ternakan_From_Cart.spec.js) | [Setup / test data](#tc_zakat_ternakan_029-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 4 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 5 - VERIFY LEMBU/KERBAU<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 6 - ENTER QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 7 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 8 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 9 - VERIFY INPUTS<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 11 - GET CALCULATED AMOUNT<br><code>const calculatedAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( calculatedAmount ).toBe( testData.expectedAmount );</code><br><br>STEP 12 - ADD TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 13 - WAIT FOR CART UPDATE<br><code>const paymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( paymentButton ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 14 - VERIFY CART ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CART AMOUNT<br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY CART NOT EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled({ timeout: 15000 });</code><br><br>STEP 18 - REMOVE ITEM<br><code>await zakatPage .removeZakatTernakanFromCart();</code><br><br>STEP 19 - VERIFY ITEM REMOVED<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 21 - VERIFY EMPTY CART TOTAL<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 22 - VERIFY OLD PAYMENT BUTTON DISAPPEARS<br><code>await expect( paymentButton ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 23 - VERIFY EMPTY BAYAR BUTTON<br><code>const emptyPaymentButton = page.getByRole( 'button', { name: 'Bayar', exact: true } );</code><br><code>await expect( emptyPaymentButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code> |
| TBD | Zakat Ternakan | TBD | TBD | TC_ZAKAT_TERNAKAN_030 | Verify Empty Cart After Removal | Script present; execution TBD — [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_030_Verify_Empty_Cart_After_Removal.spec.js) | [Setup / test data](#tc_zakat_ternakan_030-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TERNAKAN<br><code>await zakatPage.openZakatTernakan();</code><br><br>STEP 3 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorIsOpen();</code><br><br>STEP 5 - VERIFY YEAR / HAUL<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 6 - VERIFY LEMBU/KERBAU MODE<br><code>await zakatPage.verifyCattleDefaultSelection();</code><br><br>STEP 7 - ENTER QUANTITY<br><code>await zakatPage.enterCattleQuantity( testData.quantity );</code><br><br>STEP 8 - ENTER MALE PRICE<br><code>await zakatPage.enterMaleCattlePrice( testData.malePrice );</code><br><br>STEP 9 - ENTER FEMALE PRICE<br><code>await zakatPage.enterFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyCattleQuantity( testData.quantity );</code><br><code>await zakatPage.verifyMaleCattlePrice( testData.malePrice );</code><br><code>await zakatPage.verifyFemaleCattlePrice( testData.femalePrice );</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyCattleAboveNisab();</code><br><br>STEP 12 - GET CALCULATED ZAKAT<br><code>const calculatedAmount = await zakatPage .getCattleZakatResultAmount();</code><br><code>expect( calculatedAmount ).toBe( testData.expectedAmount );</code><br><br>STEP 13 - ADD TO CART<br><code>await zakatPage.clickCalculatorAddToCart();</code><br><br>STEP 14 - WAIT FOR CART UPDATE<br><code>const populatedPaymentButton = page.getByRole( 'button', { name: /Bayar RM/i } );</code><br><code>await expect( populatedPaymentButton ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 15 - VERIFY CART NOW CONTAINS ITEM<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartContainer ).toContainText( 'RM 2,500.00', { timeout: 15000 } );</code><br><br>STEP 16 - VERIFY EMPTY MESSAGE DISAPPEARS<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 17 - REMOVE ZAKAT TERNAKAN<br><code>await zakatPage .removeZakatTernakanFromCart();</code><br><br>STEP 18 - VERIFY CART ITEM DISAPPEARS<br><code>await expect( zakatPage.zakatTernakanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY EMPTY CART MESSAGE RETURNS<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY EMPTY CART MESSAGE CONTENT<br><code>await expect( zakatPage.emptyCartMessage ).toContainText( 'Rekod tidak ditemui', { timeout: 15000 } );</code><br><code>await expect( zakatPage.emptyCartMessage ).toContainText( 'Sila klik Masuk Troli untuk tambah item', { timeout: 15000 } );</code><br><br>STEP 21 - VERIFY TOTAL RETURNS TO RM0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00', { timeout: 15000 } );</code><br><br>STEP 22 - VERIFY OLD PAYMENT BUTTON DISAPPEARS<br><code>await expect( populatedPaymentButton ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 23 - LOCATE EMPTY BAYAR BUTTON<br><code>const emptyPaymentButton = page.getByRole( 'button', { name: 'Bayar', exact: true } );</code><br><br>STEP 24 - VERIFY EMPTY BAYAR BUTTON VISIBLE<br><code>await expect( emptyPaymentButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 25 - VERIFY EMPTY BAYAR BUTTON DISABLED<br><code>await expect( emptyPaymentButton ).toBeDisabled({ timeout: 15000 });</code><br><br>STEP 26 - VERIFY OLD AMOUNT IS NOT VISIBLE<br><code>await expect( zakatPage.cartContainer .getByText( 'RM 2,500.00', { exact: true } ) ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 27 - VERIFY FINAL CART STATE<br><code>const finalCartText = await zakatPage.getCartContent();</code><br><code>expect( finalCartText ).toContain( 'Rekod tidak ditemui' );</code><br><code>expect( finalCartText ).toContain( 'RM 0.00' );</code><br><code>expect( finalCartText ).not.toContain( 'RM 2,500.00' );</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_TERNAKAN_001 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_001_Open_Zakat_Ternakan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_002 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_003 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_003_Select_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_004 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_004_Enter_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_005 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_005_Add_Manual_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_006 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_006_Open_Zakat_Ternakan_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_007 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_007_Verify_Calculator_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_008 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_008_Select_Calculator_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_009 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_009_Verify_Lembu_Kerbau_Default_Selection.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_010 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_010_Enter_Lembu_Kerbau_Quantity.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_011 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_011_Enter_Lembu_Jantan_Price.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_012 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_012_Enter_Lembu_Betina_Price.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_013 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_013_Verify_Lembu_Kerbau_Below_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_014 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_014_Verify_Lembu_Kerbau_Above_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_015 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_015_Verify_Lembu_Kerbau_Zakat_Result.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_016 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_016_Change_Lembu_Kerbau_Quantity_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_017 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_017_Add_Lembu_Kerbau_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_018 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_018_Select_Kambing_Biri_Biri.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_019 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_019_Verify_Kambing_Biri_Biri_Fields.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_020 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_020_Enter_Kambing_Biri_Biri_Quantity.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_021 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_021_Enter_Kambing_Price.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_022 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_022_Verify_Kambing_Biri_Biri_Below_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_023 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_023_Verify_Kambing_Biri_Biri_Above_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_024 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_024_Verify_Kambing_Biri_Biri_Zakat_Result.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_025 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_025_Change_Kambing_Quantity_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_026 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_026_Add_Kambing_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_027 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_027_Verify_Multiple_Zakat_Ternakan_Cart_Items.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_028 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_028_Verify_Cart_Total.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_029 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_029_Remove_Zakat_Ternakan_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TERNAKAN_030 | [JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_030_Verify_Empty_Cart_After_Removal.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_TERNAKAN_001 setup

Original test title: TC_ZAKAT_TERNAKAN_001 - Open Zakat Ternakan

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_001_Open_Zakat_Ternakan.spec.js)

~~~javascript
const zakatPage =
new ZakatTernakanPage(page);
~~~

### TC_ZAKAT_TERNAKAN_002 setup

Original test title: TC_ZAKAT_TERNAKAN_002 - Verify Default State

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatTernakanPage(page);
~~~

### TC_ZAKAT_TERNAKAN_003 setup

Original test title: TC_ZAKAT_TERNAKAN_003 - Select Tahun Haul

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_003_Select_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const defaultYear = '2026';

const selectedYear = '2025';
~~~

### TC_ZAKAT_TERNAKAN_004 setup

Original test title: TC_ZAKAT_TERNAKAN_004 - Enter Manual Zakat Amount

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_004_Enter_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {

    year: '2026',

    amount: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_005 setup

Original test title: TC_ZAKAT_TERNAKAN_005 - Add Manual Zakat To Cart

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_005_Add_Manual_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {

    year: '2026',

    amount: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_006 setup

Original test title: TC_ZAKAT_TERNAKAN_006 - Open Zakat Ternakan Calculator

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_006_Open_Zakat_Ternakan_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatTernakanPage(page);
~~~

### TC_ZAKAT_TERNAKAN_007 setup

Original test title: TC_ZAKAT_TERNAKAN_007 - Verify Calculator Default State

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_007_Verify_Calculator_Default_State.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const defaultYear = '2026';
~~~

### TC_ZAKAT_TERNAKAN_008 setup

Original test title: TC_ZAKAT_TERNAKAN_008 - Select Calculator Tahun Haul

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_008_Select_Calculator_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const defaultYear = '2026';

const selectedYear = '2025';
~~~

### TC_ZAKAT_TERNAKAN_009 setup

Original test title: TC_ZAKAT_TERNAKAN_009 - Verify Lembu Kerbau Default Selection

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_009_Verify_Lembu_Kerbau_Default_Selection.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const defaultYear = '2026';
~~~

### TC_ZAKAT_TERNAKAN_010 setup

Original test title: TC_ZAKAT_TERNAKAN_010 - Enter Lembu Kerbau Quantity

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_010_Enter_Lembu_Kerbau_Quantity.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '20'
};
~~~

### TC_ZAKAT_TERNAKAN_011 setup

Original test title: TC_ZAKAT_TERNAKAN_011 - Enter Lembu Jantan Price

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_011_Enter_Lembu_Jantan_Price.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '20',
    malePrice: '2500'
};
~~~

### TC_ZAKAT_TERNAKAN_012 setup

Original test title: TC_ZAKAT_TERNAKAN_012 - Enter Lembu Betina Price

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_012_Enter_Lembu_Betina_Price.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '20',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_013 setup

Original test title: TC_ZAKAT_TERNAKAN_013 - Verify Lembu Kerbau Below Nisab

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_013_Verify_Lembu_Kerbau_Below_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '20',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_014 setup

Original test title: TC_ZAKAT_TERNAKAN_014 - Verify Lembu Kerbau Above Nisab

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_014_Verify_Lembu_Kerbau_Above_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_015 setup

Original test title: TC_ZAKAT_TERNAKAN_015 - Verify Lembu Kerbau Zakat Result

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_015_Verify_Lembu_Kerbau_Zakat_Result.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_016 setup

Original test title: TC_ZAKAT_TERNAKAN_016 - Change Lembu Kerbau Quantity And Recalculate

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_016_Change_Lembu_Kerbau_Quantity_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    initialQuantity: '40',
    updatedQuantity: '50',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_017 setup

Original test title: TC_ZAKAT_TERNAKAN_017 - Add Lembu Kerbau Zakat To Cart

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_017_Add_Lembu_Kerbau_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    malePrice: '2500',
    femalePrice: '3000'
};
~~~

### TC_ZAKAT_TERNAKAN_018 setup

Original test title: TC_ZAKAT_TERNAKAN_018 - Select Kambing Biri-Biri

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_018_Select_Kambing_Biri_Biri.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026'
};
~~~

### TC_ZAKAT_TERNAKAN_019 setup

Original test title: TC_ZAKAT_TERNAKAN_019 - Verify Kambing Biri-Biri Fields

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_019_Verify_Kambing_Biri_Biri_Fields.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026'
};
~~~

### TC_ZAKAT_TERNAKAN_020 setup

Original test title: TC_ZAKAT_TERNAKAN_020 - Enter Kambing Biri-Biri Quantity

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_020_Enter_Kambing_Biri_Biri_Quantity.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '30'
};
~~~

### TC_ZAKAT_TERNAKAN_021 setup

Original test title: TC_ZAKAT_TERNAKAN_021 - Enter Kambing Price

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_021_Enter_Kambing_Price.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '30',
    goatPrice: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_022 setup

Original test title: TC_ZAKAT_TERNAKAN_022 - Verify Kambing Biri-Biri Below Nisab

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_022_Verify_Kambing_Biri_Biri_Below_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '30',
    goatPrice: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_023 setup

Original test title: TC_ZAKAT_TERNAKAN_023 - Verify Kambing Biri-Biri Above Nisab

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_023_Verify_Kambing_Biri_Biri_Above_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    goatPrice: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_024 setup

Original test title: TC_ZAKAT_TERNAKAN_024 - Verify Kambing Biri-Biri Zakat Result

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_024_Verify_Kambing_Biri_Biri_Zakat_Result.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    goatPrice: '1000',
    expectedZakatAmount: 1000
};
~~~

### TC_ZAKAT_TERNAKAN_025 setup

Original test title: TC_ZAKAT_TERNAKAN_025 - Change Kambing Quantity And Recalculate

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_025_Change_Kambing_Quantity_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    initialQuantity: '40',
    updatedQuantity: '50',
    goatPrice: '1000'
};
~~~

### TC_ZAKAT_TERNAKAN_026 setup

Original test title: TC_ZAKAT_TERNAKAN_026 - Add Kambing Zakat To Cart

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_026_Add_Kambing_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    goatPrice: '1000',
    expectedZakatAmount: 1000
};
~~~

### TC_ZAKAT_TERNAKAN_027 setup

Original test title: TC_ZAKAT_TERNAKAN_027 - Verify Multiple Zakat Ternakan Cart Items

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_027_Verify_Multiple_Zakat_Ternakan_Cart_Items.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {

    year: '2026',

    cattle: {
        quantity: '40',
        malePrice: '2500',
        femalePrice: '3000',
        expectedAmount: 2500
    },

    goat: {
        quantity: '40',
        price: '1000',
        expectedAmount: 1000
    },

    expectedTotal: 3500
};
~~~

### TC_ZAKAT_TERNAKAN_028 setup

Original test title: TC_ZAKAT_TERNAKAN_028 - Verify Cart Total

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_028_Verify_Cart_Total.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {

    year: '2026',

    cattle: {
        quantity: '40',
        malePrice: '2500',
        femalePrice: '3000',
        expectedAmount: 2500
    },

    goat: {
        quantity: '40',
        price: '1000',
        expectedAmount: 1000
    },

    expectedTotal: 3500
};
~~~

### TC_ZAKAT_TERNAKAN_029 setup

Original test title: TC_ZAKAT_TERNAKAN_029 - Remove Zakat Ternakan From Cart

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_029_Remove_Zakat_Ternakan_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    malePrice: '2500',
    femalePrice: '3000',
    expectedAmount: 2500
};
~~~

### TC_ZAKAT_TERNAKAN_030 setup

Original test title: TC_ZAKAT_TERNAKAN_030 - Verify Empty Cart After Removal

[Source JavaScript](../../tests/zakat/ternakan/TC_ZAKAT_TERNAKAN_030_Verify_Empty_Cart_After_Removal.spec.js)

~~~javascript
const zakatPage =
    new ZakatTernakanPage(page);

const testData = {
    year: '2026',
    quantity: '40',
    malePrice: '2500',
    femalePrice: '3000',
    expectedAmount: 2500
};
~~~

