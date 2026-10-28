# Zakat Tanaman — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: existing Playwright JavaScript specifications in this repository. 26 test cases have scripts present. Release, formal Test Scenario ID, and formal Test Scenario are `TBD` because the scripts do not declare them. Source test titles and case IDs are preserved verbatim. These local cases have no verified Jira mapping; do not infer one from a similar title.

The Test Steps column retains every numbered source step comment in order and includes its data declarations, awaited actions and assertions as source excerpts. Setup and test data are preserved in the linked per-case setup sections. Page-object calls retain the original method names; follow the script imports for locator definitions and helper assertions. These are implementation-derived steps; authoritative master-test wording is `TBD`. Source comments and assertions may disagree; this map does not resolve or rewrite them.

Automation status means a script exists, not that it passed or fully covers approved requirements. DEV and STG execution are both `TBD`. Historical console messages and the older [Zakat coverage note](../../tests/zakat/TEST_COVERAGE.md) are not current run evidence. See the [index](README.md#automation-and-environments) for environment handling.

## Module cases

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_001 | Open Zakat Tanaman | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_001_Open_Zakat_Tanaman.spec.js) | [Setup / test data](#tc_zakat_tanaman_001-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_002 | Verify Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_002_Verify_Default_State.spec.js) | [Setup / test data](#tc_zakat_tanaman_002-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY DEFAULT STATE<br><code>await zakatPage.verifyDefaultState();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_003 | Select Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_003_Select_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_tanaman_003-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY DEFAULT YEAR<br><code>await zakatPage.verifySelectedHaulYear( 2026 );</code><br><br>STEP 5 - SELECT 2025<br><code>await zakatPage.selectHaulYear( 2025 );</code><br><br>STEP 6 - VERIFY 2025<br><code>await zakatPage.verifySelectedHaulYear( 2025 );</code><br><br>STEP 7 - SELECT 2024<br><code>await zakatPage.selectHaulYear( 2024 );</code><br><br>STEP 8 - VERIFY 2024<br><code>await zakatPage.verifySelectedHaulYear( 2024 );</code><br><br>STEP 9 - SELECT 2026 AGAIN<br><code>await zakatPage.selectHaulYear( 2026 );</code><br><br>STEP 10 - VERIFY 2026<br><code>await zakatPage.verifySelectedHaulYear( 2026 );</code><br><br>STEP 11 - VERIFY OTHER CONTROLS REMAIN AVAILABLE<br><code>await expect( zakatPage.manualAmountField ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_004 | Enter Manual Zakat Amount | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_004_Enter_Manual_Zakat_Amount.spec.js) | [Setup / test data](#tc_zakat_tanaman_004-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY JUMLAH BAYARAN FIELD<br><code>await expect( zakatPage.manualAmountField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.manualAmountField ).toBeEnabled();</code><br><br>STEP 5 - ENTER MANUAL AMOUNT<br><code>await zakatPage.enterManualZakatAmount( manualAmount );</code><br><br>STEP 6 - VERIFY VALUE<br><code>await zakatPage.verifyManualZakatAmount( manualAmount );</code><br><br>STEP 7 - VERIFY PAGE REMAINS AVAILABLE<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible();</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><code>await expect( zakatPage.paymentCartHeading ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_005 | Open Zakat Tanaman Calculator | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_005_Open_Zakat_Tanaman_Calculator.spec.js) | [Setup / test data](#tc_zakat_tanaman_005-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY BUKA KALKULATOR<br><code>await expect( zakatPage.openCalculatorButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.openCalculatorButton ).toBeEnabled();</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 7 - VERIFY CORE INPUTS<br><code>await expect( zakatPage.cropWeightField ).toBeVisible();</code><br><code>await expect( zakatPage.cropWeightField ).toBeEnabled();</code><br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.cropSalesField ).toBeEnabled();</code><br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeEnabled();</code><br><code>await expect( zakatPage.productionCostField ).toBeVisible();</code><br><code>await expect( zakatPage.productionCostField ).toBeEnabled();</code><br><br>STEP 8 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible();</code><br><br>STEP 9 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_006 | Verify Calculator Default State | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_006_Verify_Calculator_Default_State.spec.js) | [Setup / test data](#tc_zakat_tanaman_006-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY DEFAULT STATE<br><code>await zakatPage.verifyCalculatorDefaultState();</code><br><br>STEP 6 - VERIFY DEFAULT YEAR<br><code>await expect( zakatPage.calculatorHaulInput ).toHaveValue( '2026' );</code><br><br>STEP 7 - VERIFY CROP WEIGHT FIELD<br><code>await expect( zakatPage.cropWeightField ).toBeVisible();</code><br><code>await expect( zakatPage.cropWeightField ).toBeEnabled();</code><br><br>STEP 8 - VERIFY CALCULATION METHODS<br><code>await expect( zakatPage.tolakKosOption ).toBeVisible();</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible();</code><br><br>STEP 9 - VERIFY FINANCIAL FIELDS<br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><br>STEP 10 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible();</code><br><br>STEP 11 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_007 | Select Calculator Tahun Haul | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_007_Select_Calculator_Tahun_Haul.spec.js) | [Setup / test data](#tc_zakat_tanaman_007-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY DEFAULT YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( 2026 );</code><br><br>STEP 6 - SELECT 2025<br><code>await zakatPage.selectCalculatorHaulYear( 2025 );</code><br><br>STEP 7 - VERIFY 2025<br><code>await zakatPage.verifyCalculatorHaulYear( 2025 );</code><br><br>STEP 8 - SELECT 2024<br><code>await zakatPage.selectCalculatorHaulYear( 2024 );</code><br><br>STEP 9 - VERIFY 2024<br><code>await zakatPage.verifyCalculatorHaulYear( 2024 );</code><br><br>STEP 10 - SELECT 2026 AGAIN<br><code>await zakatPage.selectCalculatorHaulYear( 2026 );</code><br><br>STEP 11 - VERIFY 2026<br><code>await zakatPage.verifyCalculatorHaulYear( 2026 );</code><br><br>STEP 12 - VERIFY CALCULATOR REMAINS FUNCTIONAL<br><code>await expect( zakatPage.cropWeightField ).toBeVisible();</code><br><code>await expect( zakatPage.cropWeightField ).toBeEnabled();</code><br><code>await expect( zakatPage.tolakKosOption ).toBeVisible();</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_008 | Enter Crop Weight | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_008_Enter_Crop_Weight.spec.js) | [Setup / test data](#tc_zakat_tanaman_008-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY CROP WEIGHT FIELD<br><code>await expect( zakatPage.cropWeightField ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.cropWeightField ).toBeEnabled();</code><br><br>STEP 6 - ENTER 1000 KG<br><code>await zakatPage.enterCropWeight( cropWeight );</code><br><br>STEP 7 - VERIFY VALUE<br><code>await zakatPage.verifyCropWeight( cropWeight );</code><br><br>STEP 8 - CHANGE VALUE TO 1200 KG<br><code>await zakatPage.enterCropWeight( '1200' );</code><br><br>STEP 9 - VERIFY UPDATED VALUE<br><code>await zakatPage.verifyCropWeight( '1200' );</code><br><br>STEP 10 - CLEAR VALUE<br><code>await zakatPage.clearCropWeight();</code><br><br>STEP 11 - VERIFY EMPTY<br><code>await expect( zakatPage.cropWeightField ).toHaveValue('');</code><br><br>STEP 12 - ENTER 1000 AGAIN<br><code>await zakatPage.enterCropWeight( cropWeight );</code><br><code>await zakatPage.verifyCropWeight( cropWeight );</code><br><br>STEP 13 - VERIFY OTHER CALCULATOR CONTROLS<br><code>await expect( zakatPage.tolakKosOption ).toBeVisible();</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible();</code><br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_009 | Verify 2026 Nisab 653kg | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_009_Verify_2026_Nisab_653kg.spec.js) | [Setup / test data](#tc_zakat_tanaman_009-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 4 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - VERIFY YEAR = 2026<br><code>await zakatPage.verifyCalculatorHaulYear( 2026 );</code><br><br>STEP 6 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( '1000' );</code><br><code>await zakatPage.verifyCropWeight( '1000' );</code><br><br>STEP 7 - VERIFY NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 8 - VERIFY NISAB VALUE<br><code>await expect( zakatPage.nisab653Value ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 9 - VERIFY CALCULATOR STILL FUNCTIONAL<br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><code>await expect( zakatPage.tolakKosOption ).toBeVisible();</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_010 | Select Tolak Kos | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_010_Select_Tolak_Kos.spec.js) | [Setup / test data](#tc_zakat_tanaman_010-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( '1000' );</code><br><code>await zakatPage.verifyCropWeight( '1000' );</code><br><br>STEP 5 - VERIFY CALCULATION METHODS<br><code>await expect( zakatPage.tolakKosOption ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 6 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><br>STEP 7 - VERIFY TOLAK KOS STATE<br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 8 - VERIFY HASIL JUALAN<br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.cropSalesField ).toBeEnabled();</code><br><br>STEP 9 - VERIFY INSENTIF<br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY KOS PENGELUARAN<br><code>await expect( zakatPage.productionCostField ).toBeVisible();</code><br><code>await expect( zakatPage.productionCostField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY CALCULATOR REMAINS AVAILABLE<br><code>await expect( zakatPage.calculationHeading ).toBeVisible();</code><br><code>await expect( zakatPage.addToCartButton ).toBeVisible();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_011 | Enter Tolak Kos Information | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_011_Enter_Tolak_Kos_Information.spec.js) | [Setup / test data](#tc_zakat_tanaman_011-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 4 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 5 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 6 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 7 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 8 - ENTER PRODUCTION COST<br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 9 - VERIFY CROP WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 10 - VERIFY CROP SALES<br><code>await zakatPage.verifyCropSales( testData.sales );</code><br><br>STEP 11 - VERIFY INCENTIVE<br><code>await zakatPage.verifyIncentive( testData.incentive );</code><br><br>STEP 12 - VERIFY PRODUCTION COST<br><code>await zakatPage.verifyProductionCost( testData.productionCost );</code><br><br>STEP 13 - VERIFY ALL INPUTS TOGETHER<br><code>await zakatPage.verifyTolakKosInformation( testData );</code><br><br>STEP 14 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_012 | Verify Tolak Kos Net Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_012_Verify_Tolak_Kos_Net_Calculation.spec.js) | [Setup / test data](#tc_zakat_tanaman_012-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR OPENED<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><br>STEP 7 - VERIFY TOLAK KOS SELECTED<br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 8 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 9 - VERIFY CROP WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 10 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 11 - VERIFY CROP SALES<br><code>await zakatPage.verifyCropSales( testData.sales );</code><br><br>STEP 12 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 13 - VERIFY INCENTIVE<br><code>await zakatPage.verifyIncentive( testData.incentive );</code><br><br>STEP 14 - ENTER PRODUCTION COST<br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 15 - VERIFY PRODUCTION COST<br><code>await zakatPage.verifyProductionCost( testData.productionCost );</code><br><br>STEP 16 - VERIFY ALL TOLAK KOS INPUTS<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 17 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY NET BALANCE LABEL<br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 19 - CAPTURE ACTUAL MAIPS CALCULATION<br><code>const calculationText = await zakatPage.getTolakKosCalculationResult();</code><br><br>STEP 20 - VERIFY CALCULATION TEXT EXISTS<br><code>expect( calculationText ).toBeTruthy();</code><br><br>STEP 21 - VERIFY NET BALANCE EXISTS<br><code>expect( calculationText ).toContain( 'Jumlah / Baki Bersih' );</code><br><br>STEP 22 - VERIFY RESULT CONTAINS RM VALUE<br><code>expect( calculationText ).toMatch( /RM\s*[\d,.]+/ );</code><br><br>STEP 23 - VERIFY ADD TO CART BUTTON<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_013 | Verify Tolak Kos Zakat Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_013_Verify_Tolak_Kos_10_Percent_Zakat.spec.js) | [Setup / test data](#tc_zakat_tanaman_013-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 6 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 7 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 8 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 9 - ENTER PRODUCTION COST<br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 10 - VERIFY INPUT VALUES<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 11 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY NET BALANCE SECTION<br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - GET ACTUAL MAIPS RESULT<br><code>const calculationText = await zakatPage.getTolakKosZakatResult();</code><br><br>STEP 14 - VERIFY CALCULATION CONTENT<br><code>expect( calculationText ).toBeTruthy();</code><br><code>expect( calculationText ).toContain( 'Pengiraan' );</code><br><code>expect( calculationText ).toContain( 'Jumlah / Baki Bersih' );</code><br><br>STEP 15 - VERIFY RESULT CONTAINS RM VALUE<br><code>const rmValues = calculationText.match( /RM\s*[\d,.]+/g );</code><br><code>expect( rmValues ).not.toBeNull();</code><br><code>expect( rmValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 16 - PRINT RM VALUES<br><br>STEP 17 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_014 | Select Tanpa Tolakan | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_014_Select_Tanpa_Tolakan.spec.js) | [Setup / test data](#tc_zakat_tanaman_014-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 5 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( '1000' );</code><br><code>await zakatPage.verifyCropWeight( '1000' );</code><br><br>STEP 6 - VERIFY CALCULATION METHODS<br><code>await expect( zakatPage.tolakKosOption ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.tanpaTolakanOption ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 7 - SELECT TANPA TOLAKAN<br><code>await zakatPage.selectTanpaTolakan();</code><br><br>STEP 8 - VERIFY TANPA TOLAKAN STATE<br><code>await zakatPage.verifyTanpaTolakanSelected();</code><br><br>STEP 9 - VERIFY HASIL JUALAN<br><code>await expect( zakatPage.cropSalesField ).toBeVisible();</code><br><code>await expect( zakatPage.cropSalesField ).toBeEnabled();</code><br><br>STEP 10 - VERIFY INSENTIF<br><code>await expect( zakatPage.incentiveField ).toBeVisible();</code><br><code>await expect( zakatPage.incentiveField ).toBeEnabled();</code><br><br>STEP 11 - VERIFY KOS PENGELUARAN HIDDEN<br><code>await expect( zakatPage.productionCostField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_015 | Enter Tanpa Tolakan Information | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_015_Enter_Tanpa_Tolakan_Information.spec.js) | [Setup / test data](#tc_zakat_tanaman_015-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TANPA TOLAKAN<br><code>await zakatPage.selectTanpaTolakan();</code><br><br>STEP 7 - VERIFY TANPA TOLAKAN<br><code>await zakatPage.verifyTanpaTolakanSelected();</code><br><br>STEP 8 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 9 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 10 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 11 - VERIFY CROP WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 12 - VERIFY CROP SALES<br><code>await zakatPage.verifyCropSales( testData.sales );</code><br><br>STEP 13 - VERIFY INCENTIVE<br><code>await zakatPage.verifyIncentive( testData.incentive );</code><br><br>STEP 14 - VERIFY ALL TANPA TOLAKAN DATA<br><code>await zakatPage.verifyTanpaTolakanInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive });</code><br><br>STEP 15 - VERIFY PRODUCTION COST IS HIDDEN<br><code>await expect( zakatPage.productionCostField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_016 | Verify Tanpa Tolakan Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_016_Verify_Tanpa_Tolakan_Calculation.spec.js) | [Setup / test data](#tc_zakat_tanaman_016-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TANPA TOLAKAN<br><code>await zakatPage.selectTanpaTolakan();</code><br><br>STEP 7 - VERIFY TANPA TOLAKAN<br><code>await zakatPage.verifyTanpaTolakanSelected();</code><br><br>STEP 8 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 9 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 10 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 11 - VERIFY INPUT DATA<br><code>await zakatPage.verifyTanpaTolakanInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive });</code><br><br>STEP 12 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY NET BALANCE<br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - CAPTURE ACTUAL MAIPS CALCULATION<br><code>const calculationText = await zakatPage.getTanpaTolakanCalculationResult();</code><br><br>STEP 15 - VERIFY RESULT EXISTS<br><code>expect( calculationText ).toBeTruthy();</code><br><code>expect( calculationText ).toContain( 'Pengiraan' );</code><br><code>expect( calculationText ).toContain( 'Jumlah / Baki Bersih' );</code><br><br>STEP 16 - EXTRACT DISPLAYED RM VALUES<br><code>const rmValues = calculationText.match( /RM\s*[\d,.]+/g );</code><br><code>expect( rmValues ).not.toBeNull();</code><br><code>expect( rmValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 17 - PRINT DETECTED RM VALUES<br><br>STEP 18 - VERIFY PRODUCTION COST NOT ACTIVE<br><code>await expect( zakatPage.productionCostField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_017 | Verify Tanpa Tolakan Zakat Calculation | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_017_Verify_Tanpa_Tolakan_Zakat_Calculation.spec.js) | [Setup / test data](#tc_zakat_tanaman_017-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TANPA TOLAKAN<br><code>await zakatPage.selectTanpaTolakan();</code><br><br>STEP 7 - VERIFY TANPA TOLAKAN<br><code>await zakatPage.verifyTanpaTolakanSelected();</code><br><br>STEP 8 - ENTER CROP WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 9 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 10 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 11 - VERIFY INPUT DATA<br><code>await zakatPage.verifyTanpaTolakanInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive });</code><br><br>STEP 12 - VERIFY PRODUCTION COST IS NOT ACTIVE<br><code>await expect( zakatPage.productionCostField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 13 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - VERIFY NET BALANCE<br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY ZAKAT CALCULATION<br><code>const result = await zakatPage .verifyTanpaTolakanZakatCalculation();</code><br><br>STEP 16 - VERIFY RESULT OBJECT<br><code>expect( result ).toBeTruthy();</code><br><code>expect( result.calculationText ).toBeTruthy();</code><br><br>STEP 17 - VERIFY MONETARY RESULT EXISTS<br><code>expect( result.rmValues ).not.toBeNull();</code><br><code>expect( result.rmValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 18 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_018 | Verify Below Nisab Message | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_018_Verify_Below_Nisab_Message.spec.js) | [Setup / test data](#tc_zakat_tanaman_018-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR 2026<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY 2026 NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER BELOW-NISAB WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 10 - VERIFY WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 11 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 12 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 13 - ENTER PRODUCTION COST<br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 14 - VERIFY INPUT DATA<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 15 - VERIFY BELOW NISAB MESSAGE<br><code>const warningMessage = await zakatPage.verifyBelowNisabMessage();</code><br><br>STEP 16 - VERIFY MESSAGE CONTENT<br><code>expect( warningMessage ).toBeTruthy();</code><br><code>expect( warningMessage ).toMatch( /tidak mencapai kadar nisab zakat/i );</code><br><br>STEP 17 - VERIFY CALCULATOR REMAINS AVAILABLE<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_019 | Verify Above Nisab State | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_019_Verify_Above_Nisab_State.spec.js) | [Setup / test data](#tc_zakat_tanaman_019-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR 2026<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY 2026 NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER ABOVE-NISAB WEIGHT<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><br>STEP 10 - VERIFY WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 11 - ENTER CROP SALES<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><br>STEP 12 - ENTER INCENTIVE<br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><br>STEP 13 - ENTER PRODUCTION COST<br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 14 - VERIFY ALL INPUT DATA<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 15 - VERIFY ABOVE-NISAB CONDITION<br><code>expect( Number(testData.weight) ).toBeGreaterThan( testData.nisab );</code><br><br>STEP 16 - VERIFY ABOVE-NISAB UI STATE<br><code>await zakatPage.verifyAboveNisabState();</code><br><br>STEP 17 - VERIFY BELOW-NISAB MESSAGE HIDDEN<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY NET BALANCE SECTION<br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_020 | Change Crop Weight and Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_020_Change_Crop_Weight_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_tanaman_020-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY 2026 NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER CALCULATION INFORMATION<br><code>await zakatPage.enterCropSales( testData.sales );</code><br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 10 - ENTER BELOW-NISAB WEIGHT<br><code>await zakatPage.enterCropWeight( testData.belowNisabWeight );</code><br><br>STEP 11 - VERIFY BELOW-NISAB WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.belowNisabWeight );</code><br><br>STEP 12 - VERIFY BELOW-NISAB WARNING<br><code>await zakatPage.verifyBelowNisabMessage();</code><br><br>STEP 13 - VERIFY CALCULATION EXISTS<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 14 - CAPTURE BELOW-NISAB CALCULATION<br><code>const beforeChangeText = await zakatPage.calculatorContainer.innerText();</code><br><code>expect( beforeChangeText ).toBeTruthy();</code><br><br>STEP 15 - CHANGE WEIGHT TO 1000 KG<br><code>await zakatPage.cropWeightField.fill( testData.aboveNisabWeight );</code><br><code>await zakatPage.cropWeightField.press( 'Tab' );</code><br><br>STEP 16 - VERIFY NEW WEIGHT<br><code>await zakatPage.verifyCropWeight( testData.aboveNisabWeight );</code><br><br>STEP 17 - VERIFY BELOW-NISAB WARNING DISAPPEARS<br><code>await expect( zakatPage.belowNisabMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 18 - VERIFY ABOVE-NISAB STATE<br><code>await zakatPage.verifyAboveNisabState();</code><br><br>STEP 19 - VERIFY CALCULATION STILL AVAILABLE<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - CAPTURE UPDATED CALCULATION<br><code>const afterChangeText = await zakatPage.calculatorContainer.innerText();</code><br><code>expect( afterChangeText ).toBeTruthy();</code><br><br>STEP 21 - VERIFY CALCULATOR REMAINS FUNCTIONAL<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_021 | Change Calculation Method and Recalculate | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_021_Change_Calculation_Method_And_Recalculate.spec.js) | [Setup / test data](#tc_zakat_tanaman_021-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY 2026 NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 7 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 8 - ENTER TOLAK KOS INFORMATION<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><code>await zakatPage.enterCropSales( testData.sales );</code><br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 9 - VERIFY TOLAK KOS INFORMATION<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 10 - VERIFY PRODUCTION COST IS DISPLAYED<br><code>await expect( zakatPage.productionCostField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 11 - CAPTURE TOLAK KOS RESULT<br><code>const tolakKosText = await zakatPage .calculatorContainer .innerText();</code><br><code>expect( tolakKosText ).toBeTruthy();</code><br><br>STEP 12 - CHANGE TO TANPA TOLAKAN<br><code>await zakatPage .changeToTanpaTolakanAndVerify();</code><br><br>STEP 13 - VERIFY TANPA TOLAKAN STATE<br><code>await zakatPage .verifyTanpaTolakanSelected();</code><br><br>STEP 14 - VERIFY WEIGHT REMAINS<br><code>await zakatPage.verifyCropWeight( testData.weight );</code><br><br>STEP 15 - VERIFY SALES FIELD<br><code>await expect( zakatPage.cropSalesField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY INCENTIVE FIELD<br><code>await expect( zakatPage.incentiveField ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - VERIFY PRODUCTION COST IS HIDDEN<br><code>await expect( zakatPage.productionCostField ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 18 - CAPTURE TANPA TOLAKAN RESULT<br><code>const tanpaTolakanText = await zakatPage .calculatorContainer .innerText();</code><br><code>expect( tanpaTolakanText ).toBeTruthy();</code><br><br>STEP 19 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_022 | Verify Required Amount Validation | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_022_Verify_Required_Amount_Validation.spec.js) | [Setup / test data](#tc_zakat_tanaman_022-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><br>STEP 5 - VERIFY CALCULATOR<br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - SELECT TANPA TOLAKAN<br><code>await zakatPage.selectTanpaTolakan();</code><br><code>await zakatPage.verifyTanpaTolakanSelected();</code><br><br>STEP 7 - VERIFY REQUIRED FIELDS ARE EMPTY<br><code>const cropWeight = await zakatPage .cropWeightField .inputValue();</code><br><code>const cropSales = await zakatPage .cropSalesField .inputValue();</code><br><br>STEP 8 - VERIFY CART IS EMPTY BEFORE SUBMIT<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 9 - CLICK MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await zakatPage.addToCartButton.click();</code><br><br>STEP 10 - CAPTURE ACTUAL VALIDATION<br><code>const validationResult = await zakatPage .verifyCalculatorValidation();</code><br><code>expect( validationResult ).toBeTruthy();</code><br><br>STEP 11 - VERIFY CART STILL EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 12 - VERIFY TOTAL STILL ZERO<br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 13 - VERIFY BAYAR DISABLED<br><code>await expect( zakatPage.emptyCartPayButton ).toBeDisabled();</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_023 | Add Calculated Zakat To Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_023_Add_Calculated_Zakat_To_Cart.spec.js) | [Setup / test data](#tc_zakat_tanaman_023-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage.verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY CART INITIALLY EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage.openCalculator();</code><br><code>await zakatPage.verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR<br><code>await zakatPage.verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY NISAB<br><code>await zakatPage.verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage.selectTolakKos();</code><br><code>await zakatPage.verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER CALCULATION DATA<br><code>await zakatPage.enterCropWeight( testData.weight );</code><br><code>await zakatPage.enterCropSales( testData.sales );</code><br><code>await zakatPage.enterIncentive( testData.incentive );</code><br><code>await zakatPage.enterProductionCost( testData.productionCost );</code><br><br>STEP 10 - VERIFY INPUT DATA<br><code>await zakatPage.verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage.verifyAboveNisabState();</code><br><br>STEP 12 - VERIFY CALCULATION EXISTS<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - CAPTURE CALCULATED RESULT<br><code>const calculationText = await zakatPage .calculatorContainer .innerText();</code><br><code>expect( calculationText ).toBeTruthy();</code><br><code>const calculatedRMValues = calculationText.match( /RM\s*[\d,.]+/g );</code><br><code>expect( calculatedRMValues ).not.toBeNull();</code><br><code>expect( calculatedRMValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 14 - CLICK MASUK TROLI<br><code>await zakatPage .addCalculatedZakatToCart();</code><br><br>STEP 15 - VERIFY SUCCESS NOTIFICATION<br><code>await expect( zakatPage.addToCartSuccessNotification ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - VERIFY CART ITEM<br><code>const cartText = await zakatPage .verifyZakatTanamanAddedToCart();</code><br><br>STEP 17 - VERIFY CART CONTENT<br><code>expect( cartText ).toBeTruthy();</code><br><code>expect( cartText ).toContain( 'Zakat Tanaman' );</code><br><br>STEP 18 - VERIFY CART HAS RM VALUE<br><code>const cartRMValues = cartText.match( /RM\s*[\d,.]+/g );</code><br><code>expect( cartRMValues ).not.toBeNull();</code><br><code>expect( cartRMValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 19 - VERIFY CART IS NOT EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_024 | Verify Cart Details and Total | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_024_Verify_Cart_Details_And_Total.spec.js) | [Setup / test data](#tc_zakat_tanaman_024-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage .verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY INITIAL CART STATE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><br>STEP 6 - VERIFY CALCULATOR<br><code>await zakatPage .verifyCalculatorOpened();</code><br><br>STEP 7 - VERIFY YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 8 - VERIFY NISAB<br><code>await zakatPage .verify2026Nisab();</code><br><br>STEP 9 - SELECT TOLAK KOS<br><code>await zakatPage .selectTolakKos();</code><br><code>await zakatPage .verifyTolakKosSelected();</code><br><br>STEP 10 - ENTER CROP WEIGHT<br><code>await zakatPage .enterCropWeight( testData.weight );</code><br><br>STEP 11 - ENTER CROP SALES<br><code>await zakatPage .enterCropSales( testData.sales );</code><br><br>STEP 12 - ENTER INCENTIVE<br><code>await zakatPage .enterIncentive( testData.incentive );</code><br><br>STEP 13 - ENTER PRODUCTION COST<br><code>await zakatPage .enterProductionCost( testData.productionCost );</code><br><br>STEP 14 - VERIFY ENTERED INFORMATION<br><code>await zakatPage .verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 15 - VERIFY ABOVE NISAB<br><code>await zakatPage .verifyAboveNisabState();</code><br><br>STEP 16 - VERIFY CALCULATION SECTION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 17 - CAPTURE CALCULATOR RESULT<br><code>const calculatorText = await zakatPage .calculatorContainer .innerText();</code><br><code>expect( calculatorText ).toBeTruthy();</code><br><code>expect( calculatorText ).toContain( 'Pengiraan' );</code><br><code>expect( calculatorText ).toContain( 'Jumlah / Baki Bersih' );</code><br><br>STEP 18 - EXTRACT CALCULATOR RM VALUES<br><code>const calculatorRMValues = zakatPage.extractRMValues( calculatorText );</code><br><code>expect( calculatorRMValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 19 - VERIFY MASUK TROLI<br><code>await expect( zakatPage.addToCartButton ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.addToCartButton ).toBeEnabled();</code><br><br>STEP 20 - ADD TO CART<br><code>await zakatPage .addCalculatedZakatToCart();</code><br><br>STEP 21 - VERIFY ZAKAT TANAMAN CART ITEM<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 22 - VERIFY EMPTY MESSAGE DISAPPEARS<br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 23 - VERIFY CART DETAILS AND TOTAL<br><code>const cartResult = await zakatPage .verifyCartDetailsAndTotal();</code><br><br>STEP 24 - VERIFY CART RESULT<br><code>expect( cartResult ).toBeTruthy();</code><br><code>expect( cartResult.cartText ).toBeTruthy();</code><br><br>STEP 25 - VERIFY ZAKAT TANAMAN<br><code>expect( cartResult.cartText ).toContain( 'Zakat Tanaman' );</code><br><br>STEP 26 - VERIFY RM VALUES<br><code>expect( cartResult.rmValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 27 - VERIFY NUMERIC VALUES<br><code>expect( cartResult.numericValues.length ).toBeGreaterThan( 0 );</code><br><code>expect( cartResult.numericValues.every( value =&gt; Number.isFinite(value) ) ).toBeTruthy();</code><br><br>STEP 28 - VERIFY POSITIVE MONETARY VALUE<br><code>expect( cartResult.positiveValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 29 - VERIFY DISPLAYED TOTAL &gt; RM0<br><code>expect( cartResult.highestDisplayedAmount ).toBeGreaterThan( 0 );</code><br><br>STEP 30 - VERIFY CART REMAINS POPULATED<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 31 - PRINT FINAL RESULT |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_025 | Remove Zakat Tanaman From Cart | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_025_Remove_Zakat_Tanaman_From_Cart.spec.js) | [Setup / test data](#tc_zakat_tanaman_025-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage.openBayaranZakat();</code><br><br>STEP 3 - VERIFY PAGE<br><code>await zakatPage .verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY CART INITIALLY EMPTY<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><code>await zakatPage .verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY NISAB<br><code>await zakatPage .verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage .selectTolakKos();</code><br><code>await zakatPage .verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER CROP WEIGHT<br><code>await zakatPage .enterCropWeight( testData.weight );</code><br><br>STEP 10 - ENTER CROP SALES<br><code>await zakatPage .enterCropSales( testData.sales );</code><br><br>STEP 11 - ENTER INCENTIVE<br><code>await zakatPage .enterIncentive( testData.incentive );</code><br><br>STEP 12 - ENTER PRODUCTION COST<br><code>await zakatPage .enterProductionCost( testData.productionCost );</code><br><br>STEP 13 - VERIFY ENTERED INFORMATION<br><code>await zakatPage .verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 14 - VERIFY ABOVE NISAB<br><code>await zakatPage .verifyAboveNisabState();</code><br><br>STEP 15 - VERIFY CALCULATION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 16 - CAPTURE CALCULATION<br><code>const calculationText = await zakatPage .calculatorContainer .innerText();</code><br><code>expect( calculationText ).toBeTruthy();</code><br><code>const calculatorRMValues = zakatPage.extractRMValues( calculationText );</code><br><code>expect( calculatorRMValues.length ).toBeGreaterThan( 0 );</code><br><br>STEP 17 - ADD TO CART<br><code>await zakatPage .addCalculatedZakatToCart();</code><br><br>STEP 18 - VERIFY ITEM ADDED<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - CAPTURE CART BEFORE DELETE<br><code>const cartBeforeDelete = await zakatPage .getCartContent();</code><br><code>expect( cartBeforeDelete ).toContain( 'Zakat Tanaman' );</code><br><br>STEP 20 - VERIFY DELETE BUTTON<br><code>await expect( zakatPage.cartDeleteButton.first() ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 21 - REMOVE ZAKAT TANAMAN<br><code>await zakatPage .removeZakatTanamanFromCart();</code><br><br>STEP 22 - WAIT FOR CART UPDATE<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 23 - VERIFY EMPTY CART MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 24 - VERIFY TOTAL RESET TO ZERO<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 25 - CAPTURE CART AFTER DELETE<br><code>const cartAfterDelete = await zakatPage .getCartContent();</code><br><br>STEP 26 - VERIFY CART NO LONGER SHOWS ITEM<br><code>expect( cartAfterDelete ).not.toContain( 'Zakat Tanaman' );</code><br><br>STEP 27 - VERIFY ZERO TOTAL<br><code>expect( cartAfterDelete ).toContain( 'RM 0.00' );</code> |
| TBD | Zakat Tanaman | TBD | TBD | TC_ZAKAT_TANAMAN_026 | Verify Empty Cart After Removal | Script present; execution TBD — [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_026_Verify_Empty_Cart_After_Removal.spec.js) | [Setup / test data](#tc_zakat_tanaman_026-setup)<br>STEP 1 - OPEN MAIPS<br><code>await zakatPage.open();</code><br><br>STEP 2 - OPEN ZAKAT TANAMAN<br><code>await zakatPage .openBayaranZakat();</code><br><br>STEP 3 - VERIFY ZAKAT TANAMAN PAGE<br><code>await zakatPage .verifyZakatTanamanPage();</code><br><br>STEP 4 - VERIFY INITIAL EMPTY CART<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 5 - OPEN CALCULATOR<br><code>await zakatPage .openCalculator();</code><br><code>await zakatPage .verifyCalculatorOpened();</code><br><br>STEP 6 - VERIFY YEAR<br><code>await zakatPage .verifyCalculatorHaulYear( testData.year );</code><br><br>STEP 7 - VERIFY NISAB<br><code>await zakatPage .verify2026Nisab();</code><br><br>STEP 8 - SELECT TOLAK KOS<br><code>await zakatPage .selectTolakKos();</code><br><code>await zakatPage .verifyTolakKosSelected();</code><br><br>STEP 9 - ENTER CALCULATION DATA<br><code>await zakatPage .enterCropWeight( testData.weight );</code><br><code>await zakatPage .enterCropSales( testData.sales );</code><br><code>await zakatPage .enterIncentive( testData.incentive );</code><br><code>await zakatPage .enterProductionCost( testData.productionCost );</code><br><br>STEP 10 - VERIFY INPUT DATA<br><code>await zakatPage .verifyTolakKosInformation({ weight: testData.weight, sales: testData.sales, incentive: testData.incentive, productionCost: testData.productionCost });</code><br><br>STEP 11 - VERIFY ABOVE NISAB<br><code>await zakatPage .verifyAboveNisabState();</code><br><br>STEP 12 - VERIFY CALCULATION<br><code>await expect( zakatPage.calculationHeading ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.netBalanceLabel ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 13 - ADD TO CART<br><code>await zakatPage .addCalculatedZakatToCart();</code><br><br>STEP 14 - VERIFY ITEM WAS ADDED<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 15 - VERIFY CART HAS MONETARY VALUE<br><code>const cartBeforeRemoval = await zakatPage .getCartContent();</code><br><code>expect( cartBeforeRemoval ).toContain( 'Zakat Tanaman' );</code><br><code>const rmValuesBeforeRemoval = zakatPage.extractRMValues( cartBeforeRemoval );</code><br><code>expect( rmValuesBeforeRemoval.length ).toBeGreaterThan( 0 );</code><br><code>const numericValuesBeforeRemoval = rmValuesBeforeRemoval.map( value =&gt; zakatPage.convertRMToNumber( value ) );</code><br><code>expect( numericValuesBeforeRemoval.some( value =&gt; Number.isFinite(value) &amp;&amp; value &gt; 0 ) ).toBeTruthy();</code><br><br>STEP 16 - REMOVE ZAKAT TANAMAN<br><code>await zakatPage .removeZakatTanamanFromCart();</code><br><br>STEP 17 - WAIT FOR CART TO RETURN TO EMPTY STATE<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeHidden({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 18 - VERIFY ZAKAT TANAMAN NOT VISIBLE<br><code>await expect( zakatPage.zakatTanamanCartItem ).toBeHidden({ timeout: 15000 });</code><br><br>STEP 19 - VERIFY EMPTY MESSAGE<br><code>await expect( zakatPage.emptyCartMessage ).toBeVisible({ timeout: 15000 });</code><br><br>STEP 20 - VERIFY TOTAL RESET TO RM 0.00<br><code>await expect( zakatPage.emptyCartTotal ).toBeVisible({ timeout: 15000 });</code><br><code>await expect( zakatPage.emptyCartTotal ).toHaveText( 'RM 0.00' );</code><br><br>STEP 21 - CAPTURE FINAL CART STATE<br><code>const cartAfterRemoval = await zakatPage .getCartContent();</code><br><br>STEP 22 - VERIFY ITEM NOT IN VISIBLE CART TEXT<br><code>expect( cartAfterRemoval ).not.toContain( 'Zakat Tanaman' );</code><br><br>STEP 23 - VERIFY ZERO TOTAL IN CART TEXT<br><code>expect( cartAfterRemoval ).toContain( 'RM 0.00' );</code><br><br>STEP 24 - EXTRACT FINAL RM VALUES<br><code>const finalRMValues = zakatPage.extractRMValues( cartAfterRemoval );</code><br><br>STEP 25 - VERIFY NO POSITIVE CART VALUE REMAINS<br><code>const finalNumericValues = finalRMValues.map( value =&gt; zakatPage.convertRMToNumber( value ) );</code><br><code>const positiveValuesRemaining = finalNumericValues.filter( value =&gt; Number.isFinite(value) &amp;&amp; value &gt; 0 );</code><br><code>expect( positiveValuesRemaining.length ).toBe( 0 );</code> |

## Automation traceability and execution

Record a separate outcome and evidence link for each environment. Append dated execution history when tests are run; a script link alone is implementation evidence.

| Test Case ID | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| TC_ZAKAT_TANAMAN_001 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_001_Open_Zakat_Tanaman.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_002 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_002_Verify_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_003 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_003_Select_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_004 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_004_Enter_Manual_Zakat_Amount.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_005 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_005_Open_Zakat_Tanaman_Calculator.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_006 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_006_Verify_Calculator_Default_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_007 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_007_Select_Calculator_Tahun_Haul.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_008 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_008_Enter_Crop_Weight.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_009 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_009_Verify_2026_Nisab_653kg.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_010 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_010_Select_Tolak_Kos.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_011 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_011_Enter_Tolak_Kos_Information.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_012 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_012_Verify_Tolak_Kos_Net_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_013 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_013_Verify_Tolak_Kos_10_Percent_Zakat.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_014 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_014_Select_Tanpa_Tolakan.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_015 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_015_Enter_Tanpa_Tolakan_Information.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_016 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_016_Verify_Tanpa_Tolakan_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_017 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_017_Verify_Tanpa_Tolakan_Zakat_Calculation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_018 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_018_Verify_Below_Nisab_Message.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_019 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_019_Verify_Above_Nisab_State.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_020 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_020_Change_Crop_Weight_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_021 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_021_Change_Calculation_Method_And_Recalculate.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_022 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_022_Verify_Required_Amount_Validation.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_023 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_023_Add_Calculated_Zakat_To_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_024 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_024_Verify_Cart_Details_And_Total.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_025 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_025_Remove_Zakat_Tanaman_From_Cart.spec.js) | TBD | TBD | TBD |
| TC_ZAKAT_TANAMAN_026 | [JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_026_Verify_Empty_Cart_After_Removal.spec.js) | TBD | TBD | TBD |

## Original setup and test data

The following setup excerpts come from the source scripts before their first numbered step. Environment variable names are retained; configure their values independently for DEV and STG. Data declarations inside numbered steps are included with their source actions in the table; the linked script remains authoritative for control flow.

### TC_ZAKAT_TANAMAN_001 setup

Original test title: TC_ZAKAT_TANAMAN_001 - Open Zakat Tanaman

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_001_Open_Zakat_Tanaman.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_002 setup

Original test title: TC_ZAKAT_TANAMAN_002 - Verify Default State

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_002_Verify_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_003 setup

Original test title: TC_ZAKAT_TANAMAN_003 - Select Tahun Haul

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_003_Select_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_004 setup

Original test title: TC_ZAKAT_TANAMAN_004 - Enter Manual Zakat Amount

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_004_Enter_Manual_Zakat_Amount.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const manualAmount = '110.00';
~~~

### TC_ZAKAT_TANAMAN_005 setup

Original test title: TC_ZAKAT_TANAMAN_005 - Open Zakat Tanaman Calculator

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_005_Open_Zakat_Tanaman_Calculator.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_006 setup

Original test title: TC_ZAKAT_TANAMAN_006 - Verify Calculator Default State

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_006_Verify_Calculator_Default_State.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_007 setup

Original test title: TC_ZAKAT_TANAMAN_007 - Select Calculator Tahun Haul

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_007_Select_Calculator_Tahun_Haul.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_008 setup

Original test title: TC_ZAKAT_TANAMAN_008 - Enter Crop Weight

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_008_Enter_Crop_Weight.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const cropWeight = '1000';
~~~

### TC_ZAKAT_TANAMAN_009 setup

Original test title: TC_ZAKAT_TANAMAN_009 - Verify 2026 Nisab 653kg

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_009_Verify_2026_Nisab_653kg.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_010 setup

Original test title: TC_ZAKAT_TANAMAN_010 - Select Tolak Kos

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_010_Select_Tolak_Kos.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_011 setup

Original test title: TC_ZAKAT_TANAMAN_011 - Enter Tolak Kos Information

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_011_Enter_Tolak_Kos_Information.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_012 setup

Original test title: TC_ZAKAT_TANAMAN_012 - Verify Tolak Kos Net Calculation

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_012_Verify_Tolak_Kos_Net_Calculation.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_013 setup

Original test title: TC_ZAKAT_TANAMAN_013 - Verify Tolak Kos Zakat Calculation

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_013_Verify_Tolak_Kos_10_Percent_Zakat.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_014 setup

Original test title: TC_ZAKAT_TANAMAN_014 - Select Tanpa Tolakan

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_014_Select_Tanpa_Tolakan.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_015 setup

Original test title: TC_ZAKAT_TANAMAN_015 - Enter Tanpa Tolakan Information

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_015_Enter_Tanpa_Tolakan_Information.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000'
};
~~~

### TC_ZAKAT_TANAMAN_016 setup

Original test title: TC_ZAKAT_TANAMAN_016 - Verify Tanpa Tolakan Calculation

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_016_Verify_Tanpa_Tolakan_Calculation.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000'
};
~~~

### TC_ZAKAT_TANAMAN_017 setup

Original test title: TC_ZAKAT_TANAMAN_017 - Verify Tanpa Tolakan Zakat Calculation

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_017_Verify_Tanpa_Tolakan_Zakat_Calculation.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000'
};
~~~

### TC_ZAKAT_TANAMAN_018 setup

Original test title: TC_ZAKAT_TANAMAN_018 - Verify Below Nisab Message

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_018_Verify_Below_Nisab_Message.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    weight: '100',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_019 setup

Original test title: TC_ZAKAT_TANAMAN_019 - Verify Above Nisab State

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_019_Verify_Above_Nisab_State.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    nisab: 653,

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};

expect(
    Number(testData.weight)
).toBeGreaterThan(
    testData.nisab
);
~~~

### TC_ZAKAT_TANAMAN_020 setup

Original test title: TC_ZAKAT_TANAMAN_020 - Change Crop Weight and Recalculate

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_020_Change_Crop_Weight_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    nisab: 653,

    belowNisabWeight: '100',

    aboveNisabWeight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};

expect(
    Number(testData.belowNisabWeight)
).toBeLessThan(
    testData.nisab
);

expect(
    Number(testData.aboveNisabWeight)
).toBeGreaterThan(
    testData.nisab
);
~~~

### TC_ZAKAT_TANAMAN_021 setup

Original test title: TC_ZAKAT_TANAMAN_021 - Change Calculation Method and Recalculate

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_021_Change_Calculation_Method_And_Recalculate.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_022 setup

Original test title: TC_ZAKAT_TANAMAN_022 - Verify Required Amount Validation

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_022_Verify_Required_Amount_Validation.spec.js)

~~~javascript
const zakatPage =
new ZakatTanamanPage(page);
~~~

### TC_ZAKAT_TANAMAN_023 setup

Original test title: TC_ZAKAT_TANAMAN_023 - Add Calculated Zakat To Cart

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_023_Add_Calculated_Zakat_To_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_024 setup

Original test title: TC_ZAKAT_TANAMAN_024 - Verify Cart Details and Total

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_024_Verify_Cart_Details_And_Total.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_025 setup

Original test title: TC_ZAKAT_TANAMAN_025 - Remove Zakat Tanaman From Cart

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_025_Remove_Zakat_Tanaman_From_Cart.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

### TC_ZAKAT_TANAMAN_026 setup

Original test title: TC_ZAKAT_TANAMAN_026 - Verify Empty Cart After Removal

[Source JavaScript](../../tests/zakat/tanaman/TC_ZAKAT_TANAMAN_026_Verify_Empty_Cart_After_Removal.spec.js)

~~~javascript
const zakatPage =
    new ZakatTanamanPage(page);

const testData = {

    year: '2026',

    weight: '1000',

    sales: '50000',

    incentive: '1000',

    productionCost: '5000'
};
~~~

