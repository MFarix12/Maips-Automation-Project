# Zakat Pendapatan — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 24 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_001 | Open Zakat Pendapatan | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_001_Open_Zakat_Pendapatan.spec.js) | [Setup / test data](#tc_zakat_pendapatan_001-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><br>STEP 3: VERIFY ZAKAT PENDAPATAN PAGE<br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_pendapatan_002-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><br>STEP 3: VERIFY PAGE<br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 4: VERIFY DEFAULT STATE<br><code>await zakatPendapatan.verifyDefaultState();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_003 | Open Income Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_003_Open_Income_Calculator.spec.js) | [Setup / test data](#tc_zakat_pendapatan_003-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><br>STEP 4: VERIFY CALCULATOR STEP 1<br><code>await zakatPendapatan.verifyCalculatorStep1();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_004 | Monthly Income Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_004_Monthly_Income_Calculation.spec.js) | [Setup / test data](#tc_zakat_pendapatan_004-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: ENTER MONTHLY INCOME<br><code>await zakatPendapatan.enterMonthlyIncome( monthlyIncome );</code><br><br>STEP 5: ENTER BONUS<br><code>await zakatPendapatan.enterBonus( bonus );</code><br><br>STEP 6: ENTER OTHER INCOME<br><code>await zakatPendapatan.enterOtherIncome( otherIncome );</code><br><br>STEP 7: VERIFY ENTERED VALUES<br><code>await expect( zakatPendapatan.monthlyIncomeField ).toHaveValue(/5[,.]?000/);</code><br><code>await expect( zakatPendapatan.bonusField ).toHaveValue(/1[,.]?000/);</code><br><code>await expect( zakatPendapatan.otherIncomeField ).toHaveValue(/100/);</code><br><br>STEP 8: CLICK NEXT<br><code>await zakatPendapatan.clickNext();</code><br><br>STEP 9: DEBUG CURRENT STATE AFTER SETERUSNYA<br><code>await page.waitForTimeout(2000);</code><br><code>await page.locator('body').innerText() );</code><br><code>await page.screenshot({ path: 'test-results/TC004_After_Seterusnya.png', fullPage: true });</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_005 | Annual Income Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_005_Annual_Income_Calculation.spec.js) | [Setup / test data](#tc_zakat_pendapatan_005-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: SELECT TAHUNAN<br><code>await zakatPendapatan.selectAnnualMode();</code><br><code>await expect( zakatPendapatan.annualIncomeField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 5: ENTER ANNUAL INCOME<br><code>await zakatPendapatan.enterAnnualIncomeInformation( annualIncome, bonus, otherIncome );</code><br><br>STEP 6: VERIFY ENTERED VALUES<br><code>await zakatPendapatan.verifyAnnualIncomeValues( annualIncome, bonus, otherIncome );</code><br><br>STEP 7: VERIFY SETERUSNYA<br><code>await expect( zakatPendapatan.nextButton ).toBeVisible();</code><br><code>await expect( zakatPendapatan.nextButton ).toBeEnabled();</code><br><br>STEP 8: CLICK SETERUSNYA<br><code>await zakatPendapatan.clickNext();</code><br><br>STEP 9: CAPTURE RESULTING STATE<br><code>await page.waitForTimeout(2000);</code><br><code>const currentPageText = await page.locator('body').innerText();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_006 | Income With Bonus | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_006_Income_With_Bonus.spec.js) | [Setup / test data](#tc_zakat_pendapatan_006-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: ENTER MONTHLY INCOME<br><code>await zakatPendapatan.enterMonthlyIncome( monthlyIncome );</code><br><code>await expect( zakatPendapatan.monthlyIncomeField ).toHaveValue( /5[,.]?000/ );</code><br><br>STEP 5: ENTER BONUS<br><code>await zakatPendapatan.enterBonus( bonus );</code><br><code>await expect( zakatPendapatan.bonusField ).toHaveValue( /1[,.]?000/ );</code><br><br>STEP 6: VERIFY INPUTS ARE RETAINED<br><code>await expect( zakatPendapatan.monthlyIncomeField ).toHaveValue( /5[,.]?000/ );</code><br><code>await expect( zakatPendapatan.bonusField ).toHaveValue( /1[,.]?000/ );</code><br><br>STEP 7: VERIFY NEXT BUTTON<br><code>await expect( zakatPendapatan.nextButton ).toBeVisible();</code><br><code>await expect( zakatPendapatan.nextButton ).toBeEnabled();</code><br><br>STEP 8: CLICK NEXT<br><code>await zakatPendapatan.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_007 | Income With Other Income | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_007_Income_With_Other_Income.spec.js) | [Setup / test data](#tc_zakat_pendapatan_007-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: ENTER MONTHLY INCOME<br><code>await zakatPendapatan.enterMonthlyIncome( monthlyIncome );</code><br><code>await expect( zakatPendapatan.monthlyIncomeField ).toHaveValue( /5[,.]?000/ );</code><br><br>STEP 5: ENTER OTHER INCOME<br><code>await zakatPendapatan.enterOtherIncome( otherIncome );</code><br><code>await expect( zakatPendapatan.otherIncomeField ).toHaveValue( /2[,.]?000/ );</code><br><br>STEP 6: VERIFY INPUT VALUES<br><code>await expect( zakatPendapatan.monthlyIncomeField ).toHaveValue( /5[,.]?000/ );</code><br><code>await expect( zakatPendapatan.otherIncomeField ).toHaveValue( /2[,.]?000/ );</code><br><br>STEP 7: VERIFY SETERUSNYA BUTTON<br><code>await expect( zakatPendapatan.nextButton ).toBeVisible();</code><br><code>await expect( zakatPendapatan.nextButton ).toBeEnabled();</code><br><br>STEP 8: CLICK SETERUSNYA<br><code>await zakatPendapatan.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_008 | Monthly Expense Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_008_Monthly_Expense_Calculation.spec.js) | [Setup / test data](#tc_zakat_pendapatan_008-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: ENTER INCOME INFORMATION<br><code>await zakatPendapatan.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><code>await zakatPendapatan.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5: CONTINUE TO EXPENSE INFORMATION<br><code>await zakatPendapatan.clickNext();</code><br><br>STEP 6: VERIFY PERSONAL EXPENSE FIELD<br><code>await expect( zakatPendapatan.personalExpenseField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7: ENTER PERSONAL EXPENSE<br><code>await zakatPendapatan.enterPersonalExpense( personalExpense );</code><br><br>STEP 8: VERIFY PERSONAL EXPENSE<br><code>await zakatPendapatan.verifyPersonalExpense( personalExpense );</code><br><br>STEP 9: VERIFY SETERUSNYA<br><code>await expect( zakatPendapatan.nextButton ).toBeVisible();</code><br><code>await expect( zakatPendapatan.nextButton ).toBeEnabled();</code><br><br>STEP 10: CONTINUE<br><code>await zakatPendapatan.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_009 | Spouse Deduction | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_009_Spouse_Deduction.spec.js) | [Setup / test data](#tc_zakat_pendapatan_009-setup)<br>STEP 1: OPEN DIGITAL MAIPS<br><code>await zakatPendapatan.open();</code><br><br>STEP 2: OPEN ZAKAT PENDAPATAN<br><code>await zakatPendapatan.openZakatPendapatan();</code><br><code>await zakatPendapatan.verifyZakatPendapatanPage();</code><br><br>STEP 3: OPEN CALCULATOR<br><code>await zakatPendapatan.openIncomeCalculator();</code><br><code>await zakatPendapatan.verifyCalculatorStep1();</code><br><br>STEP 4: ENTER INCOME INFORMATION<br><code>await zakatPendapatan.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5: VERIFY INCOME VALUES<br><code>await zakatPendapatan.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6: CONTINUE TO EXPENSE INFORMATION<br><code>await zakatPendapatan.clickNext();</code><br><br>STEP 7: VERIFY EXPENSE STEP<br><code>await zakatPendapatan.verifyCalculatorStep2();</code><br><br>STEP 8: VERIFY BILANGAN ISTERI FIELD<br><code>await expect( zakatPendapatan.spouseCountField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9: ENTER SPOUSE COUNT<br><code>await zakatPendapatan.enterSpouseCount( spouseCount );</code><br><br>STEP 10: VERIFY SPOUSE COUNT<br><code>await zakatPendapatan.verifySpouseCount( spouseCount );</code><br><br>STEP 11: VERIFY SETERUSNYA<br><code>await expect( zakatPendapatan.nextButton ).toBeVisible();</code><br><code>await expect( zakatPendapatan.nextButton ).toBeEnabled();</code><br><br>STEP 12: CONTINUE<br><code>await zakatPendapatan.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_010 | Personal Expense And Spouse Count | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_010_Personal_Expense_And_Spouse_Count.spec.js) | [Setup / test data](#tc_zakat_pendapatan_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INCOME<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - ENTER PERSONAL EXPENSE<br><code>await zakatPage.enterPersonalExpense( personalExpense );</code><br><code>await zakatPage.verifyPersonalExpense( personalExpense );</code><br><br>STEP 8 - ENTER SPOUSE COUNT<br><code>await zakatPage.enterSpouseCount( spouseCount );</code><br><code>await zakatPage.verifySpouseCount( spouseCount );</code><br><br>STEP 9 - CONTINUE TO RESULT<br><code>await zakatPage.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_011 | Zero Personal Expense | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_011_Zero_Personal_Expense.spec.js) | [Setup / test data](#tc_zakat_pendapatan_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INCOME<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - ENTER ZERO PERSONAL EXPENSE<br><code>await zakatPage.enterPersonalExpense( personalExpense );</code><br><br>STEP 8 - VERIFY ZERO VALUE<br><code>await zakatPage.verifyPersonalExpense( personalExpense );</code><br><br>STEP 9 - CONTINUE TO RESULT<br><code>await zakatPage.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_012 | Zero Spouse Count | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_012_Zero_Spouse_Count.spec.js) | [Setup / test data](#tc_zakat_pendapatan_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INCOME<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - ENTER ZERO SPOUSE COUNT<br><code>await zakatPage.enterSpouseCount( spouseCount );</code><br><br>STEP 8 - VERIFY ZERO SPOUSE COUNT<br><code>await zakatPage.verifySpouseCount( spouseCount );</code><br><br>STEP 9 - CONTINUE TO RESULT<br><code>await zakatPage.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_013 | Multiple Expense Deductions | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_013_Multiple_Expense_Deductions.spec.js) | [Setup / test data](#tc_zakat_pendapatan_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME INFORMATION<br><code>await zakatPage.enterIncomeInformation( incomeData.monthlyIncome, incomeData.bonus, incomeData.otherIncome );</code><br><br>STEP 5 - VERIFY INCOME VALUES<br><code>await zakatPage.verifyIncomeValues( incomeData.monthlyIncome, incomeData.bonus, incomeData.otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE INFORMATION<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - ENTER MULTIPLE EXPENSES<br><code>await zakatPage.enterMultipleExpenses( expenseData );</code><br><br>STEP 8 - VERIFY MULTIPLE EXPENSES<br><code>await zakatPage.verifyMultipleExpenses( expenseData );</code><br><br>STEP 9 - CONTINUE TO CALCULATION RESULT<br><code>await zakatPage.clickNext();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_014 | Previous Button Navigation | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_014_Previous_Button_Navigation.spec.js) | [Setup / test data](#tc_zakat_pendapatan_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME INFORMATION<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INCOME VALUES<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - CLICK PREVIOUS<br><code>await zakatPage.clickPrevious();</code><br><br>STEP 8 - VERIFY RETURN TO INCOME STEP<br><code>await zakatPage.verifyReturnedToIncomeStep();</code><br><br>STEP 9 - VERIFY VALUES ARE PRESERVED<br><code>await expect( zakatPage.bonusField ).toHaveValue( bonus.toString() );</code><br><code>await expect( zakatPage.otherIncomeField ).toHaveValue( otherIncome.toString() );</code><br><br>STEP 10 - VERIFY USER CAN CONTINUE AGAIN<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_015 | Net Income Above Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_015_Net_Income_Above_Nisab.spec.js) | [Setup / test data](#tc_zakat_pendapatan_015-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME INFORMATION<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INPUT<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE INFORMATION<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 8 - VERIFY RESULT PAGE<br><code>await expect( page.getByText( /Nisab.*Tahun/i ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Perbelanjaan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible();</code><br><br>STEP 9 - VERIFY NISAB<br><code>await expect( page.getByText( expectedNisab, { exact: true } ) ).toBeVisible();</code><br><br>STEP 10 - VERIFY TOTAL INCOME<br><code>await expect( page.getByText( expectedTotalIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 11 - VERIFY TOTAL EXPENSE<br><code>await expect( page.getByText( expectedTotalExpense, { exact: true } ) ).toBeVisible();</code><br><br>STEP 12 - VERIFY NET INCOME<br><code>await expect( page.getByRole( 'gridcell', { name: expectedNetIncome } ) ).toBeVisible();</code><br><br>STEP 13 - VERIFY NET INCOME &gt; NISAB<br><code>const nisab = 45825.48;</code><br><code>const netIncome = 53096.00;</code><br><code>expect( netIncome ).toBeGreaterThan( nisab );</code><br><br>STEP 14 - VERIFY RESULT CALCULATION<br><code>const totalIncome = 61100.00;</code><br><code>const totalExpense = 8004.00;</code><br><code>expect( totalIncome - totalExpense ).toBeCloseTo( netIncome, 2 );</code><br><br>STEP 15 - VERIFY ADD TO CART AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Masuk Troli' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_016 | Net Income Below Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_016_Net_Income_Below_Nisab.spec.js) | [Setup / test data](#tc_zakat_pendapatan_016-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INPUT<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE INFORMATION<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 8 - VERIFY RESULT TABLE<br><code>await expect( page.getByText( 'Amaun Nisab Tahun 2026', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Perbelanjaan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible();</code><br><br>STEP 9 - VERIFY NISAB VALUE<br><code>await expect( page.getByText( expectedNisab, { exact: true } ) ).toBeVisible();</code><br><br>STEP 10 - VERIFY TOTAL INCOME<br><code>await expect( page.getByText( expectedTotalIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 11 - VERIFY TOTAL EXPENSE<br><code>await expect( page.getByText( expectedTotalExpense, { exact: true } ) ).toBeVisible();</code><br><br>STEP 12 - VERIFY NET INCOME<br><code>await expect( page.getByRole( 'gridcell', { name: expectedNetIncome } ) ).toBeVisible();</code><br><br>STEP 13 - VERIFY NET INCOME CALCULATION<br><code>const totalIncome = 36000.00;</code><br><code>const totalExpense = 8004.00;</code><br><code>const netIncome = 27996.00;</code><br><code>expect( totalIncome - totalExpense ).toBeCloseTo( netIncome, 2 );</code><br><br>STEP 14 - VERIFY NET INCOME BELOW NISAB<br><code>const nisab = 45825.48;</code><br><code>expect( netIncome ).toBeLessThan( nisab );</code><br><br>STEP 15 - VERIFY BELOW NISAB WARNING<br><code>const belowNisabWarning = page.getByText( /Jumlah pendapatan bersih anda tidak mencapai amaun nisab tahun 2026/i );</code><br><code>await expect( belowNisabWarning ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY NOT SUBJECT TO ZAKAT<br><code>await expect( page.getByText( /Anda tidak dikenakan zakat/i ) ).toBeVisible();</code><br><br>STEP 17 - VERIFY PREVIOUS BUTTON AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Sebelum' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_017 | Net Income Equal To Nisab | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_017_Net_Income_Equal_To_Nisab.spec.js) | [Setup / test data](#tc_zakat_pendapatan_017-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - SELECT ANNUAL MODE<br><code>await zakatPage.selectAnnualMode();</code><br><br>STEP 5 - ENTER ANNUAL INCOME<br><code>await zakatPage.enterAnnualIncomeInformation( annualIncome, bonus, otherIncome );</code><br><br>STEP 6 - VERIFY ANNUAL INPUT<br><code>await zakatPage.verifyAnnualIncomeValues( annualIncome, bonus, otherIncome );</code><br><br>STEP 7 - GO TO EXPENSE INFORMATION<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 8 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 9 - VERIFY RESULT LABELS<br><code>await expect( page.getByText( 'Amaun Nisab Tahun 2026', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Perbelanjaan', { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible();</code><br><br>STEP 10 - VERIFY TOTAL INCOME<br><code>await expect( page.getByText( expectedTotalIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 11 - VERIFY TOTAL EXPENSE<br><code>await expect( page.getByText( expectedTotalExpense, { exact: true } ) ).toBeVisible();</code><br><br>STEP 12 - VERIFY NISAB AND NET INCOME VALUES<br><code>const equalAmountCells = page.getByRole( 'gridcell', { name: expectedNisab } );</code><br><code>await expect( equalAmountCells ).toHaveCount(2);</code><br><br>STEP 13 - VERIFY BOTH VALUES ARE VISIBLE<br><code>await expect( equalAmountCells.nth(0) ).toBeVisible();</code><br><code>await expect( equalAmountCells.nth(1) ).toBeVisible();</code><br><br>STEP 14 - VERIFY NET INCOME CALCULATION<br><code>const totalIncome = 53825.48;</code><br><code>const totalExpense = 8000.00;</code><br><code>const netIncome = 45825.48;</code><br><code>const calculatedNetIncome = totalIncome - totalExpense;</code><br><code>expect( calculatedNetIncome ).toBeCloseTo( netIncome, 2 );</code><br><br>STEP 15 - VERIFY NET INCOME EQUALS NISAB<br><code>const nisab = 45825.48;</code><br><code>expect( netIncome ).toBeCloseTo( nisab, 2 );</code><br><br>STEP 16 - VERIFY BELOW NISAB WARNING IS NOT SHOWN<br><code>await expect( page.getByText( /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i ) ).toHaveCount(0);</code><br><br>STEP 17 - VERIFY ANNUAL ZAKAT LABEL<br><code>await expect( page.getByText( /Jumlah Zakat Setahun/i ) ).toBeVisible();</code><br><br>STEP 18 - VERIFY 2.5% RATE<br><code>await expect( page.getByText( /2\.5%/ ) ).toBeVisible();</code><br><br>STEP 19 - VERIFY ANNUAL ZAKAT AMOUNT<br><code>await expect( page.getByText( expectedAnnualZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 20 - VERIFY ZAKAT CALCULATION<br><code>const expectedCalculatedZakat = netIncome * 0.025;</code><br><code>expect( expectedCalculatedZakat ).toBeCloseTo( 1145.637, 2 );</code><br><br>STEP 21 - VERIFY ADD TO CART AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Masuk Troli' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_018 | Verify 2.5 Percent Zakat Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_018_Verify_2_5_Percent_Zakat_Calculation.spec.js) | [Setup / test data](#tc_zakat_pendapatan_018-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - SELECT ANNUAL MODE<br><code>await zakatPage.selectAnnualMode();</code><br><br>STEP 5 - ENTER ANNUAL INCOME<br><code>await zakatPage.enterAnnualIncomeInformation( annualIncome, bonus, otherIncome );</code><br><br>STEP 6 - VERIFY INPUT<br><code>await zakatPage.verifyAnnualIncomeValues( annualIncome, bonus, otherIncome );</code><br><br>STEP 7 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 8 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 9 - VERIFY RESULT SCREEN<br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( /Jumlah Zakat Setahun/i ) ).toBeVisible();</code><br><br>STEP 10 - VERIFY 2.5% RATE DISPLAYED<br><code>await expect( page.getByText( /2\.5%/ ) ).toBeVisible();</code><br><br>STEP 11 - CALCULATE EXPECTED ZAKAT<br><code>const calculatedZakat = expectedNetIncome * zakatRate;</code><br><br>STEP 12 - ROUND TO 2 DECIMAL PLACES<br><code>const roundedZakat = Math.round( (calculatedZakat + Number.EPSILON) * 100 ) / 100;</code><br><br>STEP 13 - VERIFY FORMULA<br><code>expect( calculatedZakat ).toBeCloseTo( 1145.637, 3 );</code><br><br>STEP 14 - VERIFY ROUNDED RESULT<br><code>expect( roundedZakat ).toBe( 1145.64 );</code><br><br>STEP 15 - VERIFY MAIPS DISPLAYED ZAKAT<br><code>await expect( page.getByText( expectedDisplayedZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 16 - VERIFY ADD TO CART AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Masuk Troli' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_019 | Switch Monthly / Annual Payment | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_019_Switch_Monthly_Annual_Payment.spec.js) | [Setup / test data](#tc_zakat_pendapatan_019-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - SELECT ANNUAL INCOME MODE<br><code>await zakatPage.selectAnnualMode();</code><br><br>STEP 5 - ENTER ANNUAL INCOME<br><code>await zakatPage.enterAnnualIncomeInformation( annualIncome, bonus, otherIncome );</code><br><code>await zakatPage.verifyAnnualIncomeValues( annualIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 8 - VERIFY RESULT SCREEN<br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( 'RM 92,000.00', { exact: true } ) ).toBeVisible();</code><br><br>STEP 9 - VERIFY CALCULATION<br><code>const calculatedAnnualZakat = netIncome * zakatRate;</code><br><code>expect( calculatedAnnualZakat ).toBe( 2300 );</code><br><br>STEP 10 - SELECT TAHUNAN<br><code>const annualPaymentOption = page.getByText( 'Tahunan', { exact: true } ).last();</code><br><code>await expect( annualPaymentOption ).toBeVisible();</code><br><code>await annualPaymentOption.click();</code><br><br>STEP 11 - VERIFY ANNUAL PAYMENT<br><code>await expect( page.getByText( /Jumlah Zakat Setahun/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( expectedAnnualZakat, { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( /2\.5%/ ) ).toBeVisible();</code><br><br>STEP 12 - CALCULATE EXPECTED MONTHLY PAYMENT<br><code>const calculatedMonthlyZakat = Math.round( ( calculatedAnnualZakat / 12 ) * 100 ) / 100;</code><br><code>expect( calculatedMonthlyZakat ).toBe( 191.67 );</code><br><br>STEP 13 - SWITCH TO BULANAN<br><code>const monthlyPaymentOption = page.getByText( 'Bulanan', { exact: true } ).last();</code><br><code>await expect( monthlyPaymentOption ).toBeVisible();</code><br><code>await monthlyPaymentOption.click();</code><br><br>STEP 14 - VERIFY MONTHLY PAYMENT<br><code>await expect( page.getByText( /Jumlah Zakat Sebulan/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( expectedMonthlyZakat, { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( /2\.5%/ ) ).toBeVisible();</code><br><br>STEP 15 - VERIFY ANNUAL AMOUNT IS NO LONGER DISPLAYED<br><code>await expect( page.getByText( expectedAnnualZakat, { exact: true } ) ).toHaveCount(0);</code><br><br>STEP 16 - SWITCH BACK TO TAHUNAN<br><code>await annualPaymentOption.click();</code><br><br>STEP 17 - VERIFY ANNUAL PAYMENT RESTORED<br><code>await expect( page.getByText( /Jumlah Zakat Setahun/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( expectedAnnualZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 18 - VERIFY MONTHLY AMOUNT REMOVED<br><code>await expect( page.getByText( expectedMonthlyZakat, { exact: true } ) ).toHaveCount(0);</code><br><br>STEP 19 - SWITCH TO BULANAN AGAIN<br><code>await monthlyPaymentOption.click();</code><br><br>STEP 20 - VERIFY MONTHLY PAYMENT RESTORED<br><code>await expect( page.getByText( /Jumlah Zakat Sebulan/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( expectedMonthlyZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 21 - VERIFY ADD TO CART AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Masuk Troli' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_020 | Recalculate After Changing Income | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_020_Recalculate_After_Changing_Income.spec.js) | [Setup / test data](#tc_zakat_pendapatan_020-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INITIAL INCOME<br><code>await zakatPage.enterIncomeInformation( initialMonthlyIncome, initialBonus, initialOtherIncome );</code><br><br>STEP 5 - VERIFY INITIAL INPUT<br><code>await zakatPage.verifyIncomeValues( initialMonthlyIncome, initialBonus, initialOtherIncome );</code><br><br>STEP 6 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - GO TO INITIAL RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 8 - VERIFY INITIAL RESULT<br><code>await expect( page.getByText( 'Jumlah Pendapatan Bersih', { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( page.getByText( initialTotalIncome, { exact: true } ) ).toBeVisible();</code><br><code>await expect( page.getByText( initialNetIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 9 - VERIFY INITIAL RESULT IS BELOW NISAB<br><code>await expect( page.getByText( /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( /Anda tidak dikenakan zakat/i ) ).toBeVisible();</code><br><br>STEP 10 - CLICK PREVIOUS FROM RESULT<br><code>await zakatPage.clickPrevious();</code><br><br>STEP 11 - VERIFY RETURN TO EXPENSE STEP<br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 12 - CLICK PREVIOUS AGAIN<br><code>await zakatPage.clickPrevious();</code><br><br>STEP 13 - VERIFY RETURN TO INCOME STEP<br><code>await zakatPage.verifyReturnedToIncomeStep();</code><br><br>STEP 14 - CHANGE INCOME INFORMATION<br><code>await zakatPage.enterIncomeInformation( updatedMonthlyIncome, updatedBonus, updatedOtherIncome );</code><br><br>STEP 15 - VERIFY UPDATED INPUT<br><code>await zakatPage.verifyIncomeValues( updatedMonthlyIncome, updatedBonus, updatedOtherIncome );</code><br><br>STEP 16 - GO TO EXPENSE STEP AGAIN<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 17 - GO TO RECALCULATED RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 18 - VERIFY UPDATED TOTAL INCOME<br><code>await expect( page.getByText( updatedTotalIncome, { exact: true } ) ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY UPDATED EXPENSE<br><code>await expect( page.getByText( updatedTotalExpense, { exact: true } ) ).toBeVisible();</code><br><br>STEP 20 - VERIFY UPDATED NET INCOME<br><code>await expect( page.getByText( updatedNetIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 21 - VERIFY OLD RESULT IS REMOVED<br><code>await expect( page.getByText( initialTotalIncome, { exact: true } ) ).toHaveCount(0);</code><br><code>await expect( page.getByText( initialNetIncome, { exact: true } ) ).toHaveCount(0);</code><br><br>STEP 22 - VERIFY BELOW NISAB WARNING IS REMOVED<br><code>await expect( page.getByText( /Jumlah pendapatan bersih anda tidak mencapai amaun nisab/i ) ).toBeHidden();</code><br><br>STEP 23 - VERIFY RECALCULATED ZAKAT<br><code>await expect( page.getByText( /Jumlah Zakat Sebulan/i ) ).toBeVisible();</code><br><code>await expect( page.getByText( updatedMonthlyZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 24 - VERIFY RECALCULATION MATHEMATICALLY<br><code>const totalIncome = 61100;</code><br><code>const totalExpense = 8004;</code><br><code>const calculatedNetIncome = totalIncome - totalExpense;</code><br><code>expect( calculatedNetIncome ).toBe( 53096 );</code><br><br>STEP 25 - VERIFY 2.5% MONTHLY ZAKAT<br><code>const annualZakat = calculatedNetIncome * 0.025;</code><br><code>const calculatedMonthlyZakat = Math.round( (annualZakat / 12) * 100 ) / 100;</code><br><code>expect( calculatedMonthlyZakat ).toBe( 110.62 );</code><br><br>STEP 26 - VERIFY ADD TO CART AVAILABLE<br><code>await expect( page.locator('#kalkulatorContentLayout') .getByRole( 'button', { name: 'Masuk Troli' } ) ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_021 | Close Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_021_Close_Calculator.spec.js) | [Setup / test data](#tc_zakat_pendapatan_021-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - VERIFY OPEN CALCULATOR BUTTON<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorStep1();</code><br><code>await expect( zakatPage.closeCalculatorButton ).toBeVisible();</code><br><br>STEP 6 - VERIFY CALCULATOR INTERACTION<br><code>await zakatPage.enterBonus(1000);</code><br><code>await expect( zakatPage.bonusField ).toHaveValue('1000');</code><br><br>STEP 7 - CLICK CLOSE (X)<br><code>await zakatPage.closeCalculatorButton.click();</code><br><br>STEP 8 - VERIFY MAIN ZAKAT PENDAPATAN UI<br><code>await expect( zakatPage.zakatPendapatanHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY PAYMENT CART STILL AVAILABLE<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code><br><br>STEP 10 - REOPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><br>STEP 11 - VERIFY CALCULATOR CAN BE REOPENED<br><code>await zakatPage.verifyCalculatorStep1();</code><br><code>await expect( zakatPage.closeCalculatorButton ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_022 | Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_022_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_pendapatan_022-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - VERIFY MANUAL AMOUNT FIELD<br><code>await expect( zakatPage.manualZakatAmountField ).toBeVisible();</code><br><br>STEP 4 - OPEN TAHUN / HAUL SELECTION<br><code>await zakatPage.openHaulSelection();</code><br><br>STEP 5 - SELECT HAUL<br><code>await zakatPage.selectHaulOption(2);</code><br><br>STEP 6 - VERIFY AMOUNT FIELD STILL AVAILABLE<br><code>await expect( zakatPage.manualZakatAmountField ).toBeVisible();</code><br><br>STEP 7 - ENTER MANUAL ZAKAT AMOUNT<br><code>await zakatPage.enterManualZakatAmount( manualAmount );</code><br><br>STEP 8 - VERIFY ENTERED AMOUNT<br><code>await zakatPage.verifyManualZakatAmount( manualAmount );</code><br><br>STEP 9 - VERIFY CALCULATOR WAS NOT OPENED<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><br>STEP 10 - VERIFY PAYMENT CART IS AVAILABLE<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_023 | Add Calculated Zakat to Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_023_Add_Calculated_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_pendapatan_023-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME INFORMATION<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - VERIFY INCOME VALUES<br><code>await zakatPage.verifyIncomeValues( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 6 - GO TO EXPENSE INFORMATION<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 7 - KEEP DEFAULT EXPENSE VALUES<br><br>STEP 8 - GO TO CALCULATION RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 9 - VERIFY TOTAL INCOME<br><code>await expect( zakatPage.calculatorContainer .getByText( expectedTotalIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 10 - VERIFY TOTAL EXPENSE<br><code>await expect( zakatPage.calculatorContainer .getByText( expectedTotalExpense, { exact: true } ) ).toBeVisible();</code><br><br>STEP 11 - VERIFY NET INCOME<br><code>await expect( zakatPage.calculatorContainer .getByText( expectedNetIncome, { exact: true } ) ).toBeVisible();</code><br><br>STEP 12 - VERIFY MONTHLY ZAKAT LABEL<br><code>await expect( zakatPage.calculatorContainer .getByText( 'Jumlah Zakat Sebulan', { exact: false } ) ).toBeVisible();</code><br><br>STEP 13 - VERIFY 2.5% RATE<br><code>await expect( zakatPage.calculatorContainer .getByText(/2\.5%/) ).toBeVisible();</code><br><br>STEP 14 - VERIFY CALCULATED ZAKAT<br><code>const calculatedZakatAmount = zakatPage.calculatorContainer .getByText( expectedZakat, { exact: true } );</code><br><code>await expect( calculatedZakatAmount ).toBeVisible();</code><br><br>STEP 15 - VERIFY ADD TO CART BUTTON<br><code>await zakatPage.verifyAddToCartButton();</code><br><br>STEP 16 - ADD CALCULATED ZAKAT TO CART<br><code>await zakatPage.addToCart();</code><br><br>STEP 17 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible();</code><br><br>STEP 18 - VERIFY PAYMENT CART HEADING<br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code><br><br>STEP 19 - VERIFY ZAKAT PENDAPATAN CART ITEM<br><code>const zakatPendapatanTexts = page.getByText( 'Zakat Pendapatan', { exact: true } );</code><br><code>expect( await zakatPendapatanTexts.count() ).toBeGreaterThanOrEqual(1);</code><br><code>await expect( zakatPendapatanTexts.first() ).toBeVisible();</code><br><br>STEP 20 - VERIFY HAUL YEAR<br><code>const year2026 = page.getByText( '2026', { exact: true } );</code><br><code>expect( await year2026.count() ).toBeGreaterThanOrEqual(1);</code><br><code>await expect( year2026.last() ).toBeVisible();</code><br><br>STEP 21 - VERIFY RM 110.62 APPEARS IN CART<br><code>const cartAmounts = page.getByText( expectedZakat, { exact: true } );</code><br><code>const cartAmountCount = await cartAmounts.count();</code><br><code>expect( cartAmountCount ).toBeGreaterThanOrEqual(1);</code><br><code>await expect( cartAmounts.last() ).toBeVisible();</code><br><br>STEP 22 - VERIFY CART TOTAL<br><code>const totalLabel = page.getByText( 'Jumlah', { exact: true } );</code><br><code>expect( await totalLabel.count() ).toBeGreaterThanOrEqual(1);</code><br><code>await expect( totalLabel.last() ).toBeVisible();</code><br><br>STEP 23 - VERIFY PAYMENT BUTTON<br><code>await expect( page.getByRole( 'button', { name: 'Bayar RM 110.62' } ) ).toBeVisible();</code><br><code>await expect( page.getByRole( 'button', { name: 'Bayar RM 110.62' } ) ).toBeEnabled();</code><br><br>STEP 24 - STOP BEFORE PAYMENT |
| TBD | Zakat Pendapatan | TBD | TBD | TC_ZAKAT_PENDAPATAN_024 | Remove Zakat From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_024_Remove_Zakat_From_Cart.spec.js) | [Setup / test data](#tc_zakat_pendapatan_024-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT PENDAPATAN<br><code>await zakatPage.openZakatPendapatan();</code><br><code>await zakatPage.verifyZakatPendapatanPage();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openIncomeCalculator();</code><br><code>await zakatPage.verifyCalculatorStep1();</code><br><br>STEP 4 - ENTER INCOME<br><code>await zakatPage.enterIncomeInformation( monthlyIncome, bonus, otherIncome );</code><br><br>STEP 5 - GO TO EXPENSE STEP<br><code>await zakatPage.clickNext();</code><br><code>await zakatPage.verifyCalculatorStep2();</code><br><br>STEP 6 - GO TO RESULT<br><code>await zakatPage.clickNext();</code><br><br>STEP 7 - VERIFY CALCULATED ZAKAT<br><code>await expect( zakatPage.calculatorContainer .getByText( expectedZakat, { exact: true } ) ).toBeVisible();</code><br><br>STEP 8 - ADD TO CART<br><code>await zakatPage.addToCart();</code><br><br>STEP 9 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible();</code><br><br>STEP 10 - VERIFY CART HAS ZAKAT ITEM<br><code>const zakatItems = page.getByText( 'Zakat Pendapatan', { exact: true } );</code><br><code>expect( await zakatItems.count() ).toBeGreaterThanOrEqual(1);</code><br><br>STEP 11 - VERIFY RM 110.62 IN CART<br><code>const amounts = page.getByText( expectedZakat, { exact: true } );</code><br><code>expect( await amounts.count() ).toBeGreaterThanOrEqual(1);</code><br><br>STEP 12 - VERIFY PAYMENT BUTTON BEFORE DELETE<br><code>await expect( page.getByRole( 'button', { name: 'Bayar RM 110.62' } ) ).toBeVisible();</code><br><code>await expect( page.getByRole( 'button', { name: 'Bayar RM 110.62' } ) ).toBeEnabled();</code><br><br>STEP 13 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton ).toBeVisible();</code><br><code>await expect( zakatPage.cartDeleteButton ).toBeEnabled();</code><br><br>STEP 14 - REMOVE ITEM FROM CART<br><code>await zakatPage.removeZakatFromCart();</code><br><br>STEP 15 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartRecordMessage ).toBeVisible();</code><br><br>STEP 16 - VERIFY CART TOTAL RESET TO RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible();</code><br><br>STEP 17 - VERIFY PAYMENT BUTTON IS DISABLED<br><code>await expect( zakatPage.emptyCartPayButton ).toBeVisible();</code><br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code><br><br>STEP 18 - VERIFY OLD PAYMENT BUTTON REMOVED<br><code>await expect( page.getByRole( 'button', { name: 'Bayar RM 110.62' } ) ).toHaveCount(0);</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_PENDAPATAN_001 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_001_Open_Zakat_Pendapatan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_002 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_003 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_003_Open_Income_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_004 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_004_Monthly_Income_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_005 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_005_Annual_Income_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_006 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_006_Income_With_Bonus.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_007 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_007_Income_With_Other_Income.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_008 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_008_Monthly_Expense_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_009 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_009_Spouse_Deduction.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_010 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_010_Personal_Expense_And_Spouse_Count.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_011 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_011_Zero_Personal_Expense.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_012 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_012_Zero_Spouse_Count.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_013 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_013_Multiple_Expense_Deductions.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_014 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_014_Previous_Button_Navigation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_015 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_015_Net_Income_Above_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_016 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_016_Net_Income_Below_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_017 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_017_Net_Income_Equal_To_Nisab.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_018 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_018_Verify_2_5_Percent_Zakat_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_019 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_019_Switch_Monthly_Annual_Payment.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_020 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_020_Recalculate_After_Changing_Income.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_021 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_021_Close_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_022 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_022_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_023 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_023_Add_Calculated_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_PENDAPATAN_024 | [JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_024_Remove_Zakat_From_Cart.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_PENDAPATAN_001 setup

Original test title: TC_ZAKAT_PENDAPATAN_001 - Open Zakat Pendapatan

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_001_Open_Zakat_Pendapatan.spec.js)

~~~javascript
const zakatPendapatan =
new ZakatPendapatanPage(page);
~~~

### TC_ZAKAT_PENDAPATAN_002 setup

Original test title: TC_ZAKAT_PENDAPATAN_002 - Verify Default State

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPendapatan =
new ZakatPendapatanPage(page);
~~~

### TC_ZAKAT_PENDAPATAN_003 setup

Original test title: TC_ZAKAT_PENDAPATAN_003 - Open Income Calculator

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_003_Open_Income_Calculator.spec.js)

~~~javascript
const zakatPendapatan =
new ZakatPendapatanPage(page);
~~~

### TC_ZAKAT_PENDAPATAN_004 setup

Original test title: TC_ZAKAT_PENDAPATAN_004 - Monthly Income Calculation

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_004_Monthly_Income_Calculation.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;
~~~

### TC_ZAKAT_PENDAPATAN_005 setup

Original test title: TC_ZAKAT_PENDAPATAN_005 - Annual Income Calculation

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_005_Annual_Income_Calculation.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const annualIncome = 60000;
const bonus = 10000;
const otherIncome = 2000;
~~~

### TC_ZAKAT_PENDAPATAN_006 setup

Original test title: TC_ZAKAT_PENDAPATAN_006 - Income With Bonus

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_006_Income_With_Bonus.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
~~~

### TC_ZAKAT_PENDAPATAN_007 setup

Original test title: TC_ZAKAT_PENDAPATAN_007 - Income With Other Income

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_007_Income_With_Other_Income.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const otherIncome = 2000;
~~~

### TC_ZAKAT_PENDAPATAN_008 setup

Original test title: TC_ZAKAT_PENDAPATAN_008 - Monthly Expense Calculation

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_008_Monthly_Expense_Calculation.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;
const personalExpense = 1000;
~~~

### TC_ZAKAT_PENDAPATAN_009 setup

Original test title: TC_ZAKAT_PENDAPATAN_009 - Spouse Deduction

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_009_Spouse_Deduction.spec.js)

~~~javascript
const zakatPendapatan =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;

const spouseCount = 1;
~~~

### TC_ZAKAT_PENDAPATAN_010 setup

Original test title: TC_ZAKAT_PENDAPATAN_010 - Personal Expense And Spouse Count

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_010_Personal_Expense_And_Spouse_Count.spec.js)

~~~javascript
const zakatPage = new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;

const personalExpense = 1000;
const spouseCount = 1;
~~~

### TC_ZAKAT_PENDAPATAN_011 setup

Original test title: TC_ZAKAT_PENDAPATAN_011 - Zero Personal Expense

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_011_Zero_Personal_Expense.spec.js)

~~~javascript
const zakatPage = new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;

const personalExpense = 0;
~~~

### TC_ZAKAT_PENDAPATAN_012 setup

Original test title: TC_ZAKAT_PENDAPATAN_012 - Zero Spouse Count

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_012_Zero_Spouse_Count.spec.js)

~~~javascript
const zakatPage = new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;

const spouseCount = 0;
~~~

### TC_ZAKAT_PENDAPATAN_013 setup

Original test title: TC_ZAKAT_PENDAPATAN_013 - Multiple Expense Deductions

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_013_Multiple_Expense_Deductions.spec.js)

~~~javascript
const zakatPage = new ZakatPendapatanPage(page);

const incomeData = {
    monthlyIncome: 5000,
    bonus: 1000,
    otherIncome: 100
};

const expenseData = {
    spouseCount: 1,
    childExpense: 200,
    parentExpense: 200,
    medicalExpense: 200,
    vehicleDebt: 400,
    houseDebt: 1200,
    kwspDeduction: 650,
    educationLoan: 250,
    tabungHajiContribution: 250
};
~~~

### TC_ZAKAT_PENDAPATAN_014 setup

Original test title: TC_ZAKAT_PENDAPATAN_014 - Previous Button Navigation

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_014_Previous_Button_Navigation.spec.js)

~~~javascript
const zakatPage = new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;
~~~

### TC_ZAKAT_PENDAPATAN_015 setup

Original test title: TC_ZAKAT_PENDAPATAN_015 - Net Income Above Nisab

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_015_Net_Income_Above_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const monthlyIncome = 5000;
const bonus = 1000;
const otherIncome = 100;

const expectedNisab =
    'RM 45,825.48';

const expectedTotalIncome =
    'RM 61,100.00';

const expectedTotalExpense =
    'RM 8,004.00';

const expectedNetIncome =
    'RM 53,096.00';
~~~

### TC_ZAKAT_PENDAPATAN_016 setup

Original test title: TC_ZAKAT_PENDAPATAN_016 - Net Income Below Nisab

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_016_Net_Income_Below_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const monthlyIncome = 3000;
const bonus = 0;
const otherIncome = 0;

const expectedNisab =
    'RM 45,825.48';

const expectedTotalIncome =
    'RM 36,000.00';

const expectedTotalExpense =
    'RM 8,004.00';

const expectedNetIncome =
    'RM 27,996.00';
~~~

### TC_ZAKAT_PENDAPATAN_017 setup

Original test title: TC_ZAKAT_PENDAPATAN_017 - Net Income Equal To Nisab

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_017_Net_Income_Equal_To_Nisab.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const annualIncome = 53825.48;
const bonus = 0;
const otherIncome = 0;

const expectedNisab =
    'RM 45,825.48';

const expectedTotalIncome =
    'RM 53,825.48';

const expectedTotalExpense =
    'RM 8,000.00';

const expectedNetIncome =
    'RM 45,825.48';

const expectedAnnualZakat =
    'RM 1,145.64';
~~~

### TC_ZAKAT_PENDAPATAN_018 setup

Original test title: TC_ZAKAT_PENDAPATAN_018 - Verify 2.5 Percent Zakat Calculation

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_018_Verify_2_5_Percent_Zakat_Calculation.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const annualIncome = 53825.48;
const bonus = 0;
const otherIncome = 0;

const expectedNetIncome =
    45825.48;

const zakatRate =
    0.025;

const expectedDisplayedZakat =
    'RM 1,145.64';
~~~

### TC_ZAKAT_PENDAPATAN_019 setup

Original test title: TC_ZAKAT_PENDAPATAN_019 - Switch Monthly / Annual Payment

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_019_Switch_Monthly_Annual_Payment.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const annualIncome = 100000;
const bonus = 0;
const otherIncome = 0;

const netIncome = 92000;

const zakatRate = 0.025;

const expectedAnnualZakat =
    'RM 2,300.00';

const expectedMonthlyZakat =
    'RM 191.67';
~~~

### TC_ZAKAT_PENDAPATAN_020 setup

Original test title: TC_ZAKAT_PENDAPATAN_020 - Recalculate After Changing Income

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_020_Recalculate_After_Changing_Income.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const initialMonthlyIncome = 3000;
const initialBonus = 0;
const initialOtherIncome = 0;

const initialTotalIncome =
    'RM 36,000.00';

const initialNetIncome =
    'RM 27,996.00';

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
~~~

### TC_ZAKAT_PENDAPATAN_021 setup

Original test title: TC_ZAKAT_PENDAPATAN_021 - Close Calculator

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_021_Close_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatPendapatanPage(page);
~~~

### TC_ZAKAT_PENDAPATAN_022 setup

Original test title: TC_ZAKAT_PENDAPATAN_022 - Manual Zakat Amount

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_022_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const manualAmount = '100.00';
~~~

### TC_ZAKAT_PENDAPATAN_023 setup

Original test title: TC_ZAKAT_PENDAPATAN_023 - Add Calculated Zakat to Cart

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_023_Add_Calculated_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

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
~~~

### TC_ZAKAT_PENDAPATAN_024 setup

Original test title: TC_ZAKAT_PENDAPATAN_024 - Remove Zakat From Cart

[Source JavaScript](../../tests/zakat/pendapatan/TC_ZAKAT_PENDAPATAN_024_Remove_Zakat_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatPendapatanPage(page);

const monthlyIncome = '5000';
const bonus = '1000';
const otherIncome = '100';

const expectedZakat =
    'RM 110.62';
~~~

