# Zakat Emas / Perak — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 20 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_001 | Open Zakat Emas / Perak | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_001_Open_Zakat_Emas_Perak.spec.js) | [Setup / test data](#tc_zakat_emas_perak_001-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN BAYARAN ZAKAT<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT EMAS / PERAK PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY EMAS OPTION<br><code>await expect( zakatPage.emasRadio ).toBeVisible();</code><br><br>STEP 5 - VERIFY PERAK OPTION<br><code>await expect( zakatPage.perakRadio ).toBeVisible();</code><br><br>STEP 6 - VERIFY JUMLAH BAYARAN<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><br>STEP 7 - VERIFY CALCULATOR BUTTON<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_emas_perak_002-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY DEFAULT STATE<br><code>await zakatPage.verifyDefaultState();</code><br><br>STEP 5 - VERIFY EMAS DEFAULT SELECTION<br><code>await expect( zakatPage.emasRadio ).toBeChecked();</code><br><br>STEP 6 - VERIFY PERAK NOT SELECTED<br><code>await expect( zakatPage.perakRadio ).not.toBeChecked();</code><br><br>STEP 7 - VERIFY MANUAL AMOUNT FIELD<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><br>STEP 8 - VERIFY CALCULATOR AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 9 - VERIFY PAYMENT CART<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_003 | Select Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_003_Select_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_emas_perak_003-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - OPEN TAHUN / HAUL DROPDOWN<br><code>await zakatPage.openHaulSelection();</code><br><br>STEP 5 - VERIFY YEAR OPTION EXISTS<br><code>const yearOption = page.getByRole( 'option', { name: selectedYear, exact: true } );</code><br><code>await expect( yearOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 6 - SELECT YEAR<br><code>await yearOption.click();</code><br><br>STEP 7 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifySelectedHaulYear( selectedYear );</code><br><br>STEP 8 - VERIFY OTHER PAGE ELEMENTS REMAIN<br><code>await expect( zakatPage.emasRadio ).toBeVisible();</code><br><code>await expect( zakatPage.perakRadio ).toBeVisible();</code><br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_004 | Select Emas | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_004_Select_Emas.spec.js) | [Setup / test data](#tc_zakat_emas_perak_004-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY EMAS IS DEFAULT<br><code>await expect( zakatPage.emasRadio ).toBeChecked();</code><br><code>await expect( zakatPage.perakRadio ).not.toBeChecked();</code><br><br>STEP 5 - SWITCH TO PERAK<br><code>await zakatPage.selectPerak();</code><br><br>STEP 6 - VERIFY PERAK SELECTED<br><code>await expect( zakatPage.perakRadio ).toBeChecked();</code><br><code>await expect( zakatPage.emasRadio ).not.toBeChecked();</code><br><br>STEP 7 - SELECT EMAS<br><code>await zakatPage.selectEmas();</code><br><br>STEP 8 - VERIFY EMAS SELECTED<br><code>await expect( zakatPage.emasRadio ).toBeChecked();</code><br><br>STEP 9 - VERIFY PERAK DESELECTED<br><code>await expect( zakatPage.perakRadio ).not.toBeChecked();</code><br><br>STEP 10 - VERIFY FORM REMAINS AVAILABLE<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_005 | Select Perak | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_005_Select_Perak.spec.js) | [Setup / test data](#tc_zakat_emas_perak_005-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY DEFAULT SELECTION<br><code>await expect( zakatPage.emasRadio ).toBeChecked();</code><br><code>await expect( zakatPage.perakRadio ).not.toBeChecked();</code><br><br>STEP 5 - SELECT PERAK<br><code>await zakatPage.selectPerak();</code><br><br>STEP 6 - VERIFY PERAK SELECTED<br><code>await expect( zakatPage.perakRadio ).toBeChecked();</code><br><br>STEP 7 - VERIFY EMAS DESELECTED<br><code>await expect( zakatPage.emasRadio ).not.toBeChecked();</code><br><br>STEP 8 - VERIFY ONLY ONE RADIO IS SELECTED<br><code>const emasChecked = await zakatPage.emasRadio.isChecked();</code><br><code>const perakChecked = await zakatPage.perakRadio.isChecked();</code><br><code>expect(emasChecked).toBe(false);</code><br><code>expect(perakChecked).toBe(true);</code><br><br>STEP 9 - VERIFY FORM REMAINS AVAILABLE<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_006 | Enter Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_006_Enter_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_emas_perak_006-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - SELECT TAHUN / HAUL<br><code>await zakatPage.selectHaulYear( selectedYear );</code><br><br>STEP 5 - VERIFY SELECTED YEAR<br><code>await zakatPage.verifySelectedHaulYear( selectedYear );</code><br><br>STEP 6 - VERIFY DEFAULT JENIS LOGAM<br><code>await expect( zakatPage.emasRadio ).toBeChecked();</code><br><code>await expect( zakatPage.perakRadio ).not.toBeChecked();</code><br><br>STEP 7 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualZakatAmount( manualAmount );</code><br><br>STEP 8 - VERIFY ENTERED AMOUNT<br><code>await zakatPage.verifyManualZakatAmount( manualAmount );</code><br><br>STEP 9 - VERIFY FORM REMAINS AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 10 - VERIFY PAYMENT CART<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_007 | Open Zakat Emas / Perak Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_007_Open_Zakat_Emas_Perak_Calculator.spec.js) | [Setup / test data](#tc_zakat_emas_perak_007-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY BUKA KALKULATOR BUTTON<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 7 - VERIFY CALCULATOR CONTAINER<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY CART REMAINS AVAILABLE<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_008 | Verify Calculator Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_008_Verify_Calculator_Default_State.spec.js) | [Setup / test data](#tc_zakat_emas_perak_008-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatEmasPerakPage();</code><br><br>STEP 4 - VERIFY CALCULATOR BUTTON<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 7 - VERIFY DEFAULT CALCULATOR STATE<br><code>await zakatPage.verifyCalculatorDefaultState();</code><br><br>STEP 8 - VERIFY CALCULATOR CONTAINER<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY PAYMENT CART REMAINS AVAILABLE<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_009 | Enter Berat Emas | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_009_Enter_Berat_Emas.spec.js) | [Setup / test data](#tc_zakat_emas_perak_009-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY EMAS SECTION<br><code>await expect( zakatPage.calculatorContainer .getByText( 'Emas yang Dimiliki', { exact: true } ) ).toBeVisible();</code><br><br>STEP 6 - VERIFY GOLD TYPE<br><code>await expect( zakatPage.calculatorContainer .getByText( goldType, { exact: true } ) ).toBeVisible();</code><br><br>STEP 7 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><br>STEP 8 - VERIFY ENTERED WEIGHT<br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 9 - VERIFY SETERUSNYA AVAILABLE<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_010 | Enter Multiple Gold Weights | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_010_Enter_Multiple_Gold_Weights.spec.js) | [Setup / test data](#tc_zakat_emas_perak_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY EMAS SECTION<br><code>await expect( zakatPage.calculatorGoldSection ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 6 - VERIFY GOLD TABLE<br><code>await zakatPage.verifyGoldTable();</code><br><br>STEP 7 - ENTER MULTIPLE GOLD WEIGHTS<br><code>const gold of goldData) { await zakatPage.enterGoldWeight( gold.type, gold.weight );</code><br><br>STEP 8 - VERIFY ALL ENTERED VALUES<br><code>const gold of goldData) { await zakatPage.verifyGoldWeight( gold.type, gold.weight );</code><br><br>STEP 9 - VERIFY 24K<br><code>await zakatPage.verifyGoldWeight( '24K/995/999', '2' );</code><br><br>STEP 10 - VERIFY 22K<br><code>await zakatPage.verifyGoldWeight( '22K/916', '2' );</code><br><br>STEP 11 - VERIFY 18K<br><code>await zakatPage.verifyGoldWeight( '18K/K18/750', '2' );</code><br><br>STEP 12 - VERIFY 9K<br><code>await zakatPage.verifyGoldWeight( '9K/375', '2' );</code><br><br>STEP 13 - VERIFY SETERUSNYA<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_011 | Verify Total Gold Weight and Nisab State | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_011_Verify_Total_Gold_Weight_And_Nisab_State.spec.js) | [Setup / test data](#tc_zakat_emas_perak_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY GOLD TABLE<br><code>await zakatPage.verifyGoldTable();</code><br><br>STEP 6 - VERIFY DEFAULT GOLD INPUT FIELDS<br><code>const goldTypes = [ '24K/995/999', '965', '23K/950', '22K/916', '21K/875', '20K/835', 'PAUN', '18K/K18/750', '14K/585', '9K/375' ];</code><br><code>const goldType of goldTypes) { const field = await zakatPage.getGoldWeightField( goldType );</code><br><code>await expect( field ).toHaveValue( '' );</code><br><code>await expect( field ).toHaveAttribute( 'placeholder', '0.00' );</code><br><br>STEP 7 - VERIFY TOTAL PURE GOLD<br><code>await zakatPage.verifyZeroGoldTotal();</code><br><br>STEP 8 - VERIFY BELOW NISAB MESSAGE<br><code>await zakatPage.verifyBelowNisabMessage();</code><br><br>STEP 9 - VERIFY SETERUSNYA BUTTON<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_012 | Change Gold Weight | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_012_Change_Gold_Weight_And_Verify_Updated_Total.spec.js) | [Setup / test data](#tc_zakat_emas_perak_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY GOLD TABLE<br><code>await zakatPage.verifyGoldTable();</code><br><br>STEP 6 - ENTER INITIAL GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, initialWeight );</code><br><br>STEP 7 - VERIFY INITIAL VALUE<br><code>await zakatPage.verifyGoldWeight( goldType, initialWeight );</code><br><br>STEP 8 - GET GOLD FIELD<br><code>const goldField = await zakatPage.getGoldWeightField( goldType );</code><br><br>STEP 9 - CLEAR OLD VALUE<br><code>await goldField.fill('');</code><br><code>await expect( goldField ).toHaveValue('');</code><br><br>STEP 10 - ENTER UPDATED VALUE<br><code>await goldField.fill( updatedWeight );</code><br><br>STEP 11 - VERIFY UPDATED VALUE<br><code>await zakatPage.verifyGoldWeight( goldType, updatedWeight );</code><br><br>STEP 12 - VERIFY OLD VALUE REPLACED<br><code>await expect( goldField ).not.toHaveValue( initialWeight );</code><br><br>STEP 13 - VERIFY OTHER GOLD FIELDS UNAFFECTED<br><code>const gold22KField = await zakatPage.getGoldWeightField( '22K/916' );</code><br><code>await expect( gold22KField ).toHaveValue('');</code><br><code>await expect( gold22KField ).toHaveAttribute( 'placeholder', '0.00' );</code><br><br>STEP 14 - VERIFY SETERUSNYA<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_013 | Navigate To Next Calculator Step | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_013_Navigate_To_Next_Calculator_Step.spec.js) | [Setup / test data](#tc_zakat_emas_perak_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - VERIFY FIRST STEP<br><code>await expect( zakatPage.calculatorGoldSection ).toBeVisible({ timeout: 15000 });</code><br><code>await zakatPage.verifyGoldTable();</code><br><br>STEP 5 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 6 - VERIFY NEXT BUTTON<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code><br><br>STEP 7 - CLICK NEXT<br><code>await zakatPage.clickNext();</code><br><br>STEP 8 - VERIFY CALCULATOR REMAINS OPEN<br><code>await expect( zakatPage.calculatorContainer ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY FIRST STEP IS NO LONGER VISIBLE<br><code>await expect( zakatPage.calculatorGoldSection ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY GOLD TABLE IS NO LONGER VISIBLE<br><code>await expect( zakatPage.gold24KLabel ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.gold22KLabel ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.gold18KLabel ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY NAVIGATION CONTROL<br><code>await expect( zakatPage.previousButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.previousButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_014 | Verify Previous Button Navigation | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_014_Verify_Previous_Button_Navigation.spec.js) | [Setup / test data](#tc_zakat_emas_perak_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - VERIFY FIRST STEP<br><code>await expect( zakatPage.calculatorGoldSection ).toBeVisible({ timeout: 15000 });</code><br><code>await zakatPage.verifyGoldTable();</code><br><br>STEP 5 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 6 - CLICK NEXT<br><code>await zakatPage.clickNext();</code><br><br>STEP 7 - VERIFY FIRST STEP IS HIDDEN<br><code>await expect( zakatPage.calculatorGoldSection ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY PREVIOUS BUTTON<br><code>await expect( zakatPage.previousButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.previousButton ).toBeEnabled();</code><br><br>STEP 9 - CLICK PREVIOUS<br><code>await zakatPage.clickPrevious();</code><br><br>STEP 10 - VERIFY FIRST STEP RETURNS<br><code>await expect( zakatPage.calculatorGoldSection ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY GOLD TABLE RETURNS<br><code>await expect( zakatPage.gold24KLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.gold22KLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.gold18KLabel ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.gold9KLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY ENTERED DATA IS RETAINED<br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 13 - VERIFY NEXT BUTTON AVAILABLE AGAIN<br><code>await expect( zakatPage.nextButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.nextButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_015 | Verify Gold Calculation Result | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_015_Verify_Gold_Calculation_Result.spec.js) | [Setup / test data](#tc_zakat_emas_perak_015-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - CLICK NEXT<br><code>await zakatPage.clickNext();</code><br><br>STEP 6 - VERIFY RESULT SCREEN<br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 7 - VERIFY GOLD WEIGHT<br><code>await expect( zakatPage.calculatorContainer.getByText( '5.00 g', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 8 - VERIFY NISAB<br><code>await expect( zakatPage.calculatorContainer.getByText( '85.00 g', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY CURRENT GOLD PRICE<br><code>await expect( zakatPage.calculatorContainer.getByText( '539.12 RM/g', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY TOTAL GOLD VALUE<br><code>await expect( zakatPage.calculatorContainer.getByText( 'RM 2,695.60', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY BELOW NISAB STATUS<br><code>await zakatPage.verifyGoldBelowNisabResult();</code><br><br>STEP 12 - VERIFY 2.5% DISPLAYED ZAKAT<br><code>await expect( zakatPage.calculatorContainer.getByText( 'RM 67.39', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY RECEIPT PRIVACY CHECKBOX<br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).toBeVisible();</code><br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).not.toBeChecked();</code><br><br>STEP 14 - VERIFY BUTTONS<br><code>await expect( zakatPage.previousButton ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_016 | Verify Receipt Privacy Checkbox | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_016_Verify_Receipt_Privacy_Checkbox.spec.js) | [Setup / test data](#tc_zakat_emas_perak_016-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - GO TO RESULT SCREEN<br><code>await zakatPage.clickNext();</code><br><br>STEP 6 - VERIFY RESULT SCREEN<br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 7 - VERIFY CHECKBOX DEFAULT STATE<br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).toBeEnabled();</code><br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).not.toBeChecked();</code><br><br>STEP 8 - CHECK PRIVACY OPTION<br><code>await zakatPage.hideMetalHoldingCheckbox.check();</code><br><br>STEP 9 - VERIFY CHECKED<br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).toBeChecked();</code><br><br>STEP 10 - VERIFY RESULT SCREEN REMAINS AVAILABLE<br><code>await expect( zakatPage.totalGoldPriceLabel ).toBeVisible();</code><br><code>await expect( zakatPage.zakatPaymentLabel ).toBeVisible();</code><br><code>await expect( zakatPage.previousButton ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code><br><br>STEP 11 - UNCHECK PRIVACY OPTION<br><code>await zakatPage.hideMetalHoldingCheckbox.uncheck();</code><br><br>STEP 12 - VERIFY UNCHECKED<br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).not.toBeChecked();</code><br><br>STEP 13 - CHECK AGAIN<br><code>await zakatPage.hideMetalHoldingCheckbox.check();</code><br><code>await expect( zakatPage.hideMetalHoldingCheckbox ).toBeChecked();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_017 | Add Calculated Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_017_Add_Calculated_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_emas_perak_017-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - VERIFY ENTERED GOLD WEIGHT<br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 6 - CLICK NEXT<br><code>await zakatPage.clickNext();</code><br><br>STEP 7 - VERIFY CALCULATION RESULT<br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 8 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code><br><br>STEP 9 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 10 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY CART<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY ZAKAT EMAS/PERAK ITEM<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY YEAR<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY USING POM METHOD<br><code>await zakatPage.verifyZakatEmasPerakAddedToCart();</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_018 | Verify Cart Details and Total | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_018_Verify_Cart_Details_And_Total.spec.js) | [Setup / test data](#tc_zakat_emas_perak_018-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - GO TO CALCULATION RESULT<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 6 - CAPTURE CALCULATED ZAKAT<br><code>const calculatedAmount = await zakatPage.getCalculatedZakatAmount();</code><br><code>expect( calculatedAmount ).toMatch( /^RM [\d,]+\.\d{2}$/ );</code><br><br>STEP 7 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 8 - VERIFY SUCCESS<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY CART ITEM<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 10 - VERIFY YEAR<br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - VERIFY AMOUNT + TOTAL + PAY BUTTON<br><code>await zakatPage.verifyCartDetailsAndTotal( calculatedAmount );</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_019 | Remove Zakat Emas Perak From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_019_Remove_Zakat_Emas_Perak_From_Cart.spec.js) | [Setup / test data](#tc_zakat_emas_perak_019-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 6 - CAPTURE CALCULATED AMOUNT<br><code>const calculatedAmount = await zakatPage.getCalculatedZakatAmount();</code><br><code>expect( calculatedAmount ).toMatch( /^RM [\d,]+\.\d{2}$/ );</code><br><br>STEP 7 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 8 - VERIFY ITEM ADDED<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartYear2026 ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY CART AMOUNT<br><code>await zakatPage.verifyCartDetailsAndTotal( calculatedAmount );</code><br><br>STEP 10 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled();</code><br><br>STEP 11 - REMOVE ITEM<br><code>await zakatPage.removeZakatEmasPerakFromCart();</code><br><br>STEP 12 - VERIFY ITEM REMOVED<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Emas / Perak | TBD | TBD | TC_ZAKAT_EMAS_PERAK_020 | Verify Empty Cart After Removal | Script present; execution TBD — [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_020_Verify_Empty_Cart_After_Removal.spec.js) | [Setup / test data](#tc_zakat_emas_perak_020-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT EMAS / PERAK<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER GOLD WEIGHT<br><code>await zakatPage.enterGoldWeight( goldType, goldWeight );</code><br><code>await zakatPage.verifyGoldWeight( goldType, goldWeight );</code><br><br>STEP 5 - GO TO RESULT SCREEN<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyGoldCalculationResult();</code><br><br>STEP 6 - CAPTURE CALCULATED AMOUNT<br><code>const calculatedAmount = await zakatPage.getCalculatedZakatAmount();</code><br><code>expect( calculatedAmount ).toMatch( /^RM [\d,]+\.\d{2}$/ );</code><br><br>STEP 7 - ADD TO CART<br><code>await zakatPage.addCalculatedZakatToCart();</code><br><br>STEP 8 - VERIFY ITEM EXISTS<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY CART DETAILS<br><code>await zakatPage.verifyCartDetailsAndTotal( calculatedAmount );</code><br><br>STEP 10 - REMOVE ITEM<br><code>await zakatPage.removeZakatEmasPerakFromCart();</code><br><br>STEP 11 - VERIFY ITEM IS NO LONGER VISIBLE<br><code>await expect( zakatPage.cartZakatEmasPerakItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY TOTAL = RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 14 - VERIFY BAYAR BUTTON<br><code>await expect( zakatPage.emptyCartPayButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code><br><br>STEP 15 - VERIFY CALCULATED PAY BUTTON IS GONE<br><code>const calculatedPayButton = zakatPage.cartContainer.getByRole( 'button', { name: `Bayar ${calculatedAmount}`, exact: true } );</code><br><code>await expect( calculatedPayButton ).toBeHidden({ timeout: 15000 });</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_EMAS_PERAK_001 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_001_Open_Zakat_Emas_Perak.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_002 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_003 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_003_Select_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_004 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_004_Select_Emas.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_005 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_005_Select_Perak.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_006 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_006_Enter_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_007 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_007_Open_Zakat_Emas_Perak_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_008 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_008_Verify_Calculator_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_009 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_009_Enter_Berat_Emas.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_010 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_010_Enter_Multiple_Gold_Weights.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_011 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_011_Verify_Total_Gold_Weight_And_Nisab_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_012 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_012_Change_Gold_Weight_And_Verify_Updated_Total.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_013 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_013_Navigate_To_Next_Calculator_Step.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_014 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_014_Verify_Previous_Button_Navigation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_015 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_015_Verify_Gold_Calculation_Result.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_016 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_016_Verify_Receipt_Privacy_Checkbox.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_017 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_017_Add_Calculated_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_018 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_018_Verify_Cart_Details_And_Total.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_019 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_019_Remove_Zakat_Emas_Perak_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_EMAS_PERAK_020 | [JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_020_Verify_Empty_Cart_After_Removal.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_EMAS_PERAK_001 setup

Original test title: TC_ZAKAT_EMAS_PERAK_001 - Open Zakat Emas / Perak

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_001_Open_Zakat_Emas_Perak.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_002 setup

Original test title: TC_ZAKAT_EMAS_PERAK_002 - Verify Default State

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_003 setup

Original test title: TC_ZAKAT_EMAS_PERAK_003 - Select Tahun Haul

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_003_Select_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const selectedYear = '2026';
~~~

### TC_ZAKAT_EMAS_PERAK_004 setup

Original test title: TC_ZAKAT_EMAS_PERAK_004 - Select Emas

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_004_Select_Emas.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_005 setup

Original test title: TC_ZAKAT_EMAS_PERAK_005 - Select Perak

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_005_Select_Perak.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_006 setup

Original test title: TC_ZAKAT_EMAS_PERAK_006 - Enter Manual Zakat Amount

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_006_Enter_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const selectedYear = '2026';
const manualAmount = '1000.00';
~~~

### TC_ZAKAT_EMAS_PERAK_007 setup

Original test title: TC_ZAKAT_EMAS_PERAK_007 - Open Zakat Emas / Perak Calculator

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_007_Open_Zakat_Emas_Perak_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_008 setup

Original test title: TC_ZAKAT_EMAS_PERAK_008 - Verify Calculator Default State

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_008_Verify_Calculator_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_009 setup

Original test title: TC_ZAKAT_EMAS_PERAK_009 - Enter Berat Emas

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_009_Enter_Berat_Emas.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_010 setup

Original test title: TC_ZAKAT_EMAS_PERAK_010 - Enter Multiple Gold Weights

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_010_Enter_Multiple_Gold_Weights.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldData = [
    {
        type: '24K/995/999',
        weight: '2'
    },
    {
        type: '965',
        weight: '2'
    },
    {
        type: '23K/950',
        weight: '2'
    },
    {
        type: '22K/916',
        weight: '2'
    },
    {
        type: '21K/875',
        weight: '2'
    },
    {
        type: '20K/835',
        weight: '2'
    },
    {
        type: 'PAUN',
        weight: '2'
    },
    {
        type: '18K/K18/750',
        weight: '2'
    },
    {
        type: '14K/585',
        weight: '2'
    },
    {
        type: '9K/375',
        weight: '2'
    }
];
~~~

### TC_ZAKAT_EMAS_PERAK_011 setup

Original test title: TC_ZAKAT_EMAS_PERAK_011 - Verify Total Gold Weight and Nisab State

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_011_Verify_Total_Gold_Weight_And_Nisab_State.spec.js)

~~~javascript
const zakatPage =
new ZakatEmasPerakPage(page);
~~~

### TC_ZAKAT_EMAS_PERAK_012 setup

Original test title: TC_ZAKAT_EMAS_PERAK_012 - Change Gold Weight

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_012_Change_Gold_Weight_And_Verify_Updated_Total.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const initialWeight = '5';
const updatedWeight = '10';
~~~

### TC_ZAKAT_EMAS_PERAK_013 setup

Original test title: TC_ZAKAT_EMAS_PERAK_013 - Navigate To Next Calculator Step

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_013_Navigate_To_Next_Calculator_Step.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_014 setup

Original test title: TC_ZAKAT_EMAS_PERAK_014 - Verify Previous Button Navigation

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_014_Verify_Previous_Button_Navigation.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_015 setup

Original test title: TC_ZAKAT_EMAS_PERAK_015 - Verify Gold Calculation Result

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_015_Verify_Gold_Calculation_Result.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_016 setup

Original test title: TC_ZAKAT_EMAS_PERAK_016 - Verify Receipt Privacy Checkbox

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_016_Verify_Receipt_Privacy_Checkbox.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_017 setup

Original test title: TC_ZAKAT_EMAS_PERAK_017 - Add Calculated Zakat To Cart

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_017_Add_Calculated_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_018 setup

Original test title: TC_ZAKAT_EMAS_PERAK_018 - Verify Cart Details and Total

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_018_Verify_Cart_Details_And_Total.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_019 setup

Original test title: TC_ZAKAT_EMAS_PERAK_019 - Remove Zakat Emas Perak From Cart

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_019_Remove_Zakat_Emas_Perak_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

### TC_ZAKAT_EMAS_PERAK_020 setup

Original test title: TC_ZAKAT_EMAS_PERAK_020 - Verify Empty Cart After Removal

[Source JavaScript](../../tests/zakat/emas-perak/TC_ZAKAT_EMAS_PERAK_020_Verify_Empty_Cart_After_Removal.spec.js)

~~~javascript
const zakatPage =
    new ZakatEmasPerakPage(page);

const goldType = '24K/995/999';
const goldWeight = '5';
~~~

