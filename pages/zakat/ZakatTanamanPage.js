const { expect } = require('@playwright/test');


class ZakatTanamanPage {

    constructor(page) {

        this.page = page;


        // =============================================================
        // MAIN PAGE
        // =============================================================

        this.kiraSekarangButton =
            page.getByRole(
                'link',
                {
                    name: 'Kira Sekarang'
                }
            ).nth(3);


        this.zakatTanamanHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Tanaman',
                    {
                        exact: true
                    }
                );


        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                });


        this.manualAmountField =
            page.getByRole(
                'textbox',
                {
                    name: 'Jumlah Bayaran'
                }
            );


        this.openCalculatorButton =
            page.getByRole(
                'button',
                {
                    name: 'Buka Kalkulator'
                }
            );


        // =============================================================
        // CALCULATOR
        // =============================================================

        this.calculatorContainer =
            page.locator(
                '#kalkulatorContentLayout'
            );


        this.calculatorTitle =
            page.getByText(
                'Kalkulator Zakat Tanaman',
                {
                    exact: true
                }
            );


        this.calculatorHaulComboBox =
            this.calculatorContainer
                .locator('vaadin-combo-box')
                .first();


        this.calculatorHaulInput =
            this.calculatorHaulComboBox
                .locator('input');


        // =============================================================
        // CROP WEIGHT
        // =============================================================

        this.cropWeightField =
            page.getByRole(
                'textbox',
                {
                    name: 'Berat Hasil Tanaman (kg)'
                }
            );


        // =============================================================
        // CALCULATION METHOD
        // =============================================================

        this.calculationMethodSection =
            this.calculatorContainer
                .getByText(
                    'Kaedah Pengiraan',
                    {
                        exact: true
                    }
                );


        this.tolakKosOption =
            this.calculatorContainer
                .getByText(
                    'Tolak Kos',
                    {
                        exact: true
                    }
                );


        this.tanpaTolakanOption =
            this.calculatorContainer
                .getByText(
                    'Tanpa Tolakan',
                    {
                        exact: true
                    }
                );


        // =============================================================
        // CALCULATION INPUTS
        // =============================================================

        this.cropSalesField =
            page.getByRole(
                'textbox',
                {
                    name: 'Hasil Jualan Tanaman'
                }
            );


        this.incentiveField =
            page.getByRole(
                'textbox',
                {
                    name: 'Insentif'
                }
            );


        this.productionCostField =
            page.getByRole(
                'textbox',
                {
                    name: 'Kos Pengeluaran'
                }
            );


        // =============================================================
        // CALCULATION RESULT
        // =============================================================

        this.calculationHeading =
            this.calculatorContainer
                .getByText(
                    'Pengiraan',
                    {
                        exact: true
                    }
                );


        this.netBalanceLabel =
            this.calculatorContainer
                .getByText(
                    'Jumlah / Baki Bersih',
                    {
                        exact: true
                    }
                );


        // =============================================================
        // NISAB
        // =============================================================

        this.nisabLabel =
            this.calculatorContainer
                .getByText(
                    /Nisab/i
                );


        this.nisab653Value =
            this.calculatorContainer
                .getByText(
                    /653(?:\.00)?\s*kg/i
                );


        this.belowNisabMessage =
            this.calculatorContainer
                .getByText(
                    /Jumlah berat hasil tanaman anda tidak mencapai kadar nisab zakat/i
                );


        // =============================================================
        // ADD TO CART
        // =============================================================

        this.addToCartButton =
            this.calculatorContainer
                .getByRole(
                    'button',
                    {
                        name: 'Masuk Troli'
                    }
                );


        this.addToCartSuccessNotification =
            page.getByText(
                /Jumlah telah ditambah ke bakul bayaran/i
            );


        // =============================================================
        // PAYMENT CART
        // =============================================================

        this.paymentCartHeading =
            page.getByRole(
                'heading',
                {
                    name: 'Bakul Bayaran'
                }
            );


        this.cartContainer =
            page.locator(
                '#bakulBayaranFragment'
            );


        this.zakatTanamanCartItem =
            this.cartContainer
                .getByText(
                    'Zakat Tanaman',
                    {
                        exact: true
                    }
                );


        // =============================================================
        // EMPTY CART
        // =============================================================

        this.emptyCartMessage =
            page.getByText(
                /Rekod tidak ditemui.*Sila klik Masuk Troli untuk tambah item/i
            );


        this.emptyCartTotal =
            this.cartContainer
                .getByText(
                    'RM 0.00',
                    {
                        exact: true
                    }
                );


        this.emptyCartPayButton =
            this.cartContainer
                .getByRole(
                    'button',
                    {
                        name: 'Bayar',
                        exact: true
                    }
                );


        // =============================================================
        // ACTIVE CART PAY BUTTON
        //
        // IMPORTANT:
        // Do NOT scope this to #bakulBayaranFragment.
        // =============================================================

        this.cartPayButton =
            page.getByRole(
                'button',
                {
                    name: 'Bayar',
                    exact: true
                }
            );


        // =============================================================
        // CART DELETE BUTTON
        // =============================================================

        this.cartDeleteButton =
            page.locator(
                'vaadin-grid-cell-content:nth-child(19) > ' +
                'vaadin-horizontal-layout > vaadin-button'
            );


        // =============================================================
        // VALIDATION / NOTIFICATION
        // =============================================================

        this.calculatorValidationMessage =
            page.locator(
                '[role="alert"], ' +
                'vaadin-notification-card'
            );
    }



    // =============================================================
    // OPEN APPLICATION
    // =============================================================

    async open() {

        await this.page.goto('/');

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }



    // =============================================================
    // OPEN ZAKAT TANAMAN
    // =============================================================

    async openBayaranZakat() {

        await expect(
            this.kiraSekarangButton
        ).toBeVisible({
            timeout: 15000
        });


        await this.kiraSekarangButton.click();


        await expect(
            this.paymentCartHeading
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // VERIFY ZAKAT TANAMAN PAGE
    // =============================================================

    async verifyZakatTanamanPage() {

        await expect(
            this.zakatTanamanHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.haulFormItem
        ).toBeVisible();


        await expect(
            this.manualAmountField
        ).toBeVisible();


        await expect(
            this.openCalculatorButton
        ).toBeVisible();


        await expect(
            this.paymentCartHeading
        ).toBeVisible();
    }



    // =============================================================
    // VERIFY DEFAULT STATE
    // =============================================================

    async verifyDefaultState() {

        await expect(
            this.haulFormItem
        ).toBeVisible({
            timeout: 15000
        });


        const haulInput =
            this.haulFormItem.locator(
                'input'
            );


        await expect(
            haulInput
        ).toHaveValue(
            '2026',
            {
                timeout: 15000
            }
        );


        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.manualAmountField
        ).toBeEnabled();


        const manualAmountValue =
            await this.manualAmountField
                .inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            manualAmountValue
        );


        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.openCalculatorButton
        ).toBeEnabled();


        await expect(
            this.paymentCartHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartMessage
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartTotal
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartTotal
        ).toHaveText(
            'RM 0.00'
        );


        // Only verify the empty-cart Bayar button if it exists
        // inside the cart fragment.
        if (
            await this.emptyCartPayButton
                .count() > 0
        ) {

            await expect(
                this.emptyCartPayButton
            ).toBeDisabled();
        }
    }



    // =============================================================
    // MAIN PAGE HAUL
    // =============================================================

    async openHaulSelection() {

        const toggleButton =
            this.haulFormItem
                .locator(
                    '#toggleButton'
                );


        await expect(
            toggleButton
        ).toBeVisible({
            timeout: 15000
        });


        await toggleButton.click();
    }



    async selectHaulYear(year) {

        await this.openHaulSelection();


        const yearOption =
            this.page.getByRole(
                'option',
                {
                    name: String(year),
                    exact: true
                }
            );


        await expect(
            yearOption
        ).toBeVisible({
            timeout: 15000
        });


        await yearOption.click();


        await this.verifySelectedHaulYear(
            year
        );
    }



    async verifySelectedHaulYear(year) {

        const haulInput =
            this.haulFormItem
                .locator(
                    'input'
                );


        await expect(
            haulInput
        ).toHaveValue(
            String(year),
            {
                timeout: 15000
            }
        );
    }



    // =============================================================
    // MANUAL ZAKAT AMOUNT
    // =============================================================

    async enterManualZakatAmount(amount) {

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.manualAmountField
        ).toBeEnabled();


        await this.manualAmountField.click();


        await this.manualAmountField.fill(
            String(amount)
        );
    }



    async verifyManualZakatAmount(amount) {

        await expect(
            this.manualAmountField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }



    // =============================================================
    // OPEN CALCULATOR
    // =============================================================

    async openCalculator() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.openCalculatorButton
        ).toBeEnabled();


        await this.openCalculatorButton.click();


        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // VERIFY CALCULATOR OPENED
    // =============================================================

    async verifyCalculatorOpened() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropWeightField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        if (
            await this.productionCostField
                .isVisible()
                .catch(() => false)
        ) {

            await expect(
                this.productionCostField
            ).toBeEnabled();
        }


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // VERIFY CALCULATOR DEFAULT STATE
    // =============================================================

    async verifyCalculatorDefaultState() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorHaulInput
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorHaulInput
        ).toHaveValue(
            '2026',
            {
                timeout: 15000
            }
        );


        await expect(
            this.cropWeightField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropWeightField
        ).toBeEnabled();


        const cropWeightValue =
            await this.cropWeightField
                .inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            cropWeightValue
        );


        await expect(
            this.calculationMethodSection
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.tolakKosOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.tanpaTolakanOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // CALCULATOR HAUL
    // =============================================================

    async openCalculatorHaulSelection() {

        await expect(
            this.calculatorHaulComboBox
        ).toBeVisible({
            timeout: 15000
        });


        const toggleButton =
            this.calculatorHaulComboBox
                .locator(
                    '#toggleButton'
                );


        await expect(
            toggleButton
        ).toBeVisible({
            timeout: 15000
        });


        await toggleButton.click();
    }



    async selectCalculatorHaulYear(year) {

        await this.openCalculatorHaulSelection();


        const yearOption =
            this.page.getByRole(
                'option',
                {
                    name: String(year),
                    exact: true
                }
            );


        await expect(
            yearOption
        ).toBeVisible({
            timeout: 15000
        });


        await yearOption.click();


        await this.verifyCalculatorHaulYear(
            year
        );
    }



    async verifyCalculatorHaulYear(year) {

        await expect(
            this.calculatorHaulInput
        ).toHaveValue(
            String(year),
            {
                timeout: 15000
            }
        );
    }



    // =============================================================
    // CROP WEIGHT
    // =============================================================

    async enterCropWeight(weight) {

        await expect(
            this.cropWeightField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropWeightField
        ).toBeEnabled();


        await this.cropWeightField.click();


        await this.cropWeightField.fill(
            String(weight)
        );
    }



    async verifyCropWeight(weight) {

        await expect(
            this.cropWeightField
        ).toHaveValue(
            String(weight),
            {
                timeout: 15000
            }
        );
    }



    async clearCropWeight() {

        await expect(
            this.cropWeightField
        ).toBeVisible({
            timeout: 15000
        });


        await this.cropWeightField.fill('');


        await expect(
            this.cropWeightField
        ).toHaveValue('');
    }



    // =============================================================
    // VERIFY NISAB
    // =============================================================

    async verify2026Nisab() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorHaulInput
        ).toHaveValue(
            '2026',
            {
                timeout: 15000
            }
        );


        await expect(
            this.nisabLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.nisab653Value
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // TOLAK KOS
    // =============================================================

    async selectTolakKos() {

        await expect(
            this.tolakKosOption
        ).toBeVisible({
            timeout: 15000
        });


        await this.tolakKosOption.click();


        await expect(
            this.productionCostField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.productionCostField
        ).toBeEnabled();
    }



    async verifyTolakKosSelected() {

        await expect(
            this.tolakKosOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeEnabled();


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeEnabled();


        await expect(
            this.productionCostField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.productionCostField
        ).toBeEnabled();
    }



    // =============================================================
    // CROP SALES
    // =============================================================

    async enterCropSales(amount) {

        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeEnabled();


        await this.cropSalesField.click();


        await this.cropSalesField.fill(
            String(amount)
        );
    }



    async verifyCropSales(amount) {

        await expect(
            this.cropSalesField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }



    async clearCropSales() {

        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await this.cropSalesField.fill('');


        await expect(
            this.cropSalesField
        ).toHaveValue('');
    }



    // =============================================================
    // INCENTIVE
    // =============================================================

    async enterIncentive(amount) {

        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeEnabled();


        await this.incentiveField.click();


        await this.incentiveField.fill(
            String(amount)
        );
    }



    async verifyIncentive(amount) {

        await expect(
            this.incentiveField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }



    // =============================================================
    // PRODUCTION COST
    // =============================================================

    async enterProductionCost(amount) {

        await expect(
            this.productionCostField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.productionCostField
        ).toBeEnabled();


        await this.productionCostField.click();


        await this.productionCostField.fill(
            String(amount)
        );
    }



    async verifyProductionCost(amount) {

        await expect(
            this.productionCostField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }



    // =============================================================
    // ENTER TOLAK KOS INFORMATION
    // =============================================================

    async enterTolakKosInformation({
        weight,
        sales,
        incentive,
        productionCost
    }) {

        await this.enterCropWeight(
            weight
        );


        await this.selectTolakKos();


        await this.enterCropSales(
            sales
        );


        await this.enterIncentive(
            incentive
        );


        await this.enterProductionCost(
            productionCost
        );
    }



    // =============================================================
    // VERIFY TOLAK KOS INFORMATION
    // =============================================================

    async verifyTolakKosInformation({
        weight,
        sales,
        incentive,
        productionCost
    }) {

        await this.verifyCropWeight(
            weight
        );


        await this.verifyCropSales(
            sales
        );


        await this.verifyIncentive(
            incentive
        );


        await this.verifyProductionCost(
            productionCost
        );
    }



    // =============================================================
    // GET TOLAK KOS CALCULATION
    // =============================================================

    async getTolakKosCalculationResult() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });


        const calculationText =
            await this.calculatorContainer
                .innerText();


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - TOLAK KOS RESULT'
        );

        console.log(
            '========================================'
        );

        console.log(
            calculationText
        );

        console.log(
            '========================================\n'
        );


        return calculationText;
    }



    // =============================================================
    // GET TOLAK KOS ZAKAT RESULT
    // =============================================================

    async getTolakKosZakatResult() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });


        const calculationText =
            await this.calculatorContainer
                .innerText();


        expect(
            calculationText
        ).toBeTruthy();


        expect(
            calculationText
        ).toContain(
            'Pengiraan'
        );


        expect(
            calculationText
        ).toContain(
            'Jumlah / Baki Bersih'
        );


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - TOLAK KOS ZAKAT RESULT'
        );

        console.log(
            '========================================'
        );

        console.log(
            calculationText
        );

        console.log(
            '========================================\n'
        );


        return calculationText;
    }



    // =============================================================
    // TANPA TOLAKAN
    // =============================================================

    async selectTanpaTolakan() {

        await expect(
            this.tanpaTolakanOption
        ).toBeVisible({
            timeout: 15000
        });


        await this.tanpaTolakanOption.click();


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeEnabled();


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeEnabled();
    }



    async verifyTanpaTolakanSelected() {

        await expect(
            this.tanpaTolakanOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeEnabled();


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeEnabled();


        await expect(
            this.productionCostField
        ).toBeHidden({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // ENTER TANPA TOLAKAN INFORMATION
    // =============================================================

    async enterTanpaTolakanInformation({
        weight,
        sales,
        incentive
    }) {

        await this.selectTanpaTolakan();


        await this.enterCropWeight(
            weight
        );


        await this.enterCropSales(
            sales
        );


        await this.enterIncentive(
            incentive
        );
    }



    // =============================================================
    // VERIFY TANPA TOLAKAN INFORMATION
    // =============================================================

    async verifyTanpaTolakanInformation({
        weight,
        sales,
        incentive
    }) {

        await this.verifyCropWeight(
            weight
        );


        await this.verifyCropSales(
            sales
        );


        await this.verifyIncentive(
            incentive
        );


        await expect(
            this.productionCostField
        ).toBeHidden({
            timeout: 15000
        });
    }



    // =============================================================
    // GET TANPA TOLAKAN CALCULATION
    // =============================================================

    async getTanpaTolakanCalculationResult() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });


        const calculationText =
            await this.calculatorContainer
                .innerText();


        expect(
            calculationText
        ).toBeTruthy();


        expect(
            calculationText
        ).toContain(
            'Pengiraan'
        );


        expect(
            calculationText
        ).toContain(
            'Jumlah / Baki Bersih'
        );


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - TANPA TOLAKAN RESULT'
        );

        console.log(
            '========================================'
        );

        console.log(
            calculationText
        );

        console.log(
            '========================================\n'
        );


        return calculationText;
    }



    // =============================================================
    // VERIFY TANPA TOLAKAN ZAKAT CALCULATION
    // =============================================================

    async verifyTanpaTolakanZakatCalculation() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });


        const calculationText =
            await this.calculatorContainer
                .innerText();


        expect(
            calculationText
        ).toBeTruthy();


        expect(
            calculationText
        ).toContain(
            'Pengiraan'
        );


        expect(
            calculationText
        ).toContain(
            'Jumlah / Baki Bersih'
        );


        const rmValues =
            calculationText.match(
                /RM\s*[\d,.]+/g
            );


        expect(
            rmValues
        ).not.toBeNull();


        expect(
            rmValues.length
        ).toBeGreaterThan(
            0
        );


        console.log(
            '\n========================================'
        );

        console.log(
            'TANPA TOLAKAN - ZAKAT CALCULATION'
        );

        console.log(
            '========================================'
        );

        console.log(
            calculationText
        );

        console.log(
            '\nDetected RM Values:'
        );

        console.log(
            rmValues
        );

        console.log(
            '========================================\n'
        );


        return {

            calculationText,

            rmValues
        };
    }



    // =============================================================
    // BELOW NISAB
    // =============================================================

    async verifyBelowNisabMessage() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.belowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });


        const message =
            await this.belowNisabMessage
                .innerText();


        expect(
            message
        ).toMatch(
            /tidak mencapai kadar nisab zakat/i
        );


        return message;
    }



    // =============================================================
    // ABOVE NISAB
    // =============================================================

    async verifyAboveNisabState() {

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorHaulInput
        ).toHaveValue(
            '2026',
            {
                timeout: 15000
            }
        );


        await expect(
            this.nisab653Value
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropWeightField
        ).toHaveValue(
            '1000',
            {
                timeout: 15000
            }
        );


        await expect(
            this.belowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // CHANGE CROP WEIGHT AND RECALCULATE
    // =============================================================

    async changeCropWeightAndVerifyRecalculation({
        belowNisabWeight,
        aboveNisabWeight
    }) {

        await this.enterCropWeight(
            belowNisabWeight
        );


        await this.verifyCropWeight(
            belowNisabWeight
        );


        await expect(
            this.belowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });


        await this.cropWeightField.fill(
            String(aboveNisabWeight)
        );


        await this.cropWeightField.press(
            'Tab'
        );


        await expect(
            this.cropWeightField
        ).toHaveValue(
            String(aboveNisabWeight),
            {
                timeout: 15000
            }
        );


        await expect(
            this.belowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // CHANGE CALCULATION METHOD
    // =============================================================

    async changeToTanpaTolakanAndVerify() {

        await expect(
            this.productionCostField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.tanpaTolakanOption
        ).toBeVisible({
            timeout: 15000
        });


        await this.tanpaTolakanOption.click();


        await expect(
            this.cropSalesField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cropSalesField
        ).toBeEnabled();


        await expect(
            this.incentiveField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.incentiveField
        ).toBeEnabled();


        await expect(
            this.productionCostField
        ).toBeHidden({
            timeout: 15000
        });


        await expect(
            this.calculationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.netBalanceLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });
    }



    // =============================================================
    // CLICK ADD TO CART
    // =============================================================

    async clickAddToCart() {

        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeEnabled();


        await this.addToCartButton.click();
    }



    // =============================================================
    // ADD CALCULATED ZAKAT TO CART
    // =============================================================

    async addCalculatedZakatToCart() {

        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.addToCartButton
        ).toBeEnabled();


        await this.addToCartButton.click();
    }



    // =============================================================
    // CALCULATOR VALIDATION
    // =============================================================

    async verifyCalculatorValidation() {

        await this.page.waitForTimeout(
            500
        );


        const calculatorText =
            await this.calculatorContainer
                .innerText();


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - VALIDATION RESULT'
        );

        console.log(
            '========================================'
        );

        console.log(
            calculatorText
        );

        console.log(
            '========================================\n'
        );


        const alerts =
            this.page.locator(
                '[role="alert"], ' +
                'vaadin-notification-card'
            );


        const alertCount =
            await alerts.count();


        console.log(
            `Visible validation/notification elements: ${alertCount}`
        );


        const visibleMessages = [];


        for (
            let index = 0;
            index < alertCount;
            index++
        ) {

            const alert =
                alerts.nth(index);


            if (
                await alert
                    .isVisible()
                    .catch(() => false)
            ) {

                const text =
                    await alert
                        .innerText()
                        .catch(() => '');


                visibleMessages.push(
                    text
                );


                console.log(
                    `Validation ${index + 1}:`,
                    text
                );
            }
        }


        return {

            calculatorText,

            alertCount,

            visibleMessages
        };
    }



    // =============================================================
    // VERIFY ZAKAT TANAMAN ADDED TO CART
    // =============================================================

    async verifyZakatTanamanAddedToCart() {

        await expect(
            this.paymentCartHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.zakatTanamanCartItem
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartMessage
        ).toBeHidden({
            timeout: 15000
        });


        const cartText =
            await this.cartContainer
                .innerText();


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - CART CONTENT'
        );

        console.log(
            '========================================'
        );

        console.log(
            cartText
        );

        console.log(
            '========================================\n'
        );


        return cartText;
    }



    // =============================================================
    // GET CART CONTENT
    // =============================================================

    async getCartContent() {

        await expect(
            this.cartContainer
        ).toBeVisible({
            timeout: 15000
        });


        const cartText =
            await this.cartContainer
                .innerText();


        console.log(
            '\n========================================'
        );

        console.log(
            'ZAKAT TANAMAN - CART DETAILS'
        );

        console.log(
            '========================================'
        );

        console.log(
            cartText
        );

        console.log(
            '========================================\n'
        );


        return cartText;
    }



    // =============================================================
    // EXTRACT RM VALUES
    // =============================================================

    extractRMValues(text) {

        const matches =
            text.match(
                /RM\s*[\d,.]+/g
            );


        if (!matches) {

            return [];
        }


        return matches;
    }



    // =============================================================
    // CONVERT RM TEXT TO NUMBER
    // =============================================================

    convertRMToNumber(rmText) {

        return Number(
            rmText
                .replace(
                    /RM\s*/i,
                    ''
                )
                .replace(
                    /,/g,
                    ''
                )
                .trim()
        );
    }



    // =============================================================
    // VERIFY CART DETAILS AND TOTAL
    // =============================================================

    async verifyCartDetailsAndTotal() {

        // =========================================================
        // VERIFY CART CONTAINER
        // =========================================================

        await expect(
            this.cartContainer
        ).toBeVisible({
            timeout: 15000
        });


        // =========================================================
        // VERIFY ZAKAT TANAMAN ITEM
        // =========================================================

        await expect(
            this.zakatTanamanCartItem
        ).toBeVisible({
            timeout: 15000
        });


        // =========================================================
        // VERIFY EMPTY MESSAGE HIDDEN
        // =========================================================

        await expect(
            this.emptyCartMessage
        ).toBeHidden({
            timeout: 15000
        });


        // =========================================================
        // GET CART CONTENT
        // =========================================================

        const cartText =
            await this.getCartContent();


        expect(
            cartText
        ).toBeTruthy();


        expect(
            cartText
        ).toContain(
            'Zakat Tanaman'
        );


        // =========================================================
        // EXTRACT RM VALUES
        // =========================================================

        const rmValues =
            this.extractRMValues(
                cartText
            );


        console.log(
            '\nCart RM Values:',
            rmValues
        );


        expect(
            rmValues.length
        ).toBeGreaterThan(
            0
        );


        // =========================================================
        // CONVERT RM VALUES
        // =========================================================

        const numericValues =
            rmValues.map(
                value =>
                    this.convertRMToNumber(
                        value
                    )
            );


        console.log(
            'Cart Numeric Values:',
            numericValues
        );


        // =========================================================
        // VERIFY POSITIVE CART VALUE
        // =========================================================

        expect(
            numericValues.some(
                value =>
                    value > 0
            )
        ).toBeTruthy();


        // =========================================================
        // VERIFY BAYAR BUTTON
        //
        // IMPORTANT:
        // cartPayButton is intentionally page-scoped because the
        // active Bayar button is not inside #bakulBayaranFragment.
        // =========================================================

        await expect(
            this.cartPayButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cartPayButton
        ).toBeEnabled({
            timeout: 15000
        });


        // =========================================================
        // RETURN RESULT
        // =========================================================

        return {

            cartText,

            rmValues,

            numericValues
        };
    }



    // =============================================================
    // REMOVE ZAKAT TANAMAN FROM CART
    // =============================================================

    async removeZakatTanamanFromCart() {

        await expect(
            this.zakatTanamanCartItem
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cartDeleteButton.first()
        ).toBeVisible({
            timeout: 15000
        });


        await this.cartDeleteButton
            .first()
            .click();
    }



    // =============================================================
// VERIFY CART DETAILS AND TOTAL
// =============================================================

async verifyCartDetailsAndTotal() {

    // =========================================================
    // VERIFY CART CONTAINER
    // =========================================================

    await expect(
        this.cartContainer
    ).toBeVisible({
        timeout: 15000
    });


    // =========================================================
    // VERIFY ZAKAT TANAMAN ITEM
    // =========================================================

    await expect(
        this.zakatTanamanCartItem
    ).toBeVisible({
        timeout: 15000
    });


    // =========================================================
    // VERIFY EMPTY CART MESSAGE IS HIDDEN
    // =========================================================

    await expect(
        this.emptyCartMessage
    ).toBeHidden({
        timeout: 15000
    });


    // =========================================================
    // GET CART CONTENT
    // =========================================================

    const cartText =
        await this.getCartContent();


    expect(
        cartText
    ).toBeTruthy();


    expect(
        cartText
    ).toContain(
        'Zakat Tanaman'
    );


    // =========================================================
    // EXTRACT RM VALUES
    // =========================================================

    const rmValues =
        this.extractRMValues(
            cartText
        );


    console.log(
        '\nCart RM Values:',
        rmValues
    );


    expect(
        rmValues.length
    ).toBeGreaterThan(
        0
    );


    // =========================================================
    // CONVERT RM VALUES TO NUMBERS
    // =========================================================

    const numericValues =
        rmValues.map(
            value =>
                this.convertRMToNumber(
                    value
                )
        );


    console.log(
        'Cart Numeric Values:',
        numericValues
    );


    // =========================================================
    // VERIFY VALID NUMERIC VALUES
    // =========================================================

    expect(
        numericValues.every(
            value =>
                Number.isFinite(value)
        )
    ).toBeTruthy();


    // =========================================================
    // VERIFY AT LEAST ONE POSITIVE VALUE
    // =========================================================

    const positiveValues =
        numericValues.filter(
            value =>
                value > 0
        );


    expect(
        positiveValues.length
    ).toBeGreaterThan(
        0
    );


    // =========================================================
    // DETERMINE DISPLAYED CART TOTAL
    //
    // We do not assume which RM element is the total based on
    // DOM position. We capture the monetary values actually
    // displayed by MAIPS.
    // =========================================================

    const highestDisplayedAmount =
        Math.max(
            ...positiveValues
        );


    expect(
        highestDisplayedAmount
    ).toBeGreaterThan(
        0
    );


    console.log(
        'Highest displayed cart amount:',
        highestDisplayedAmount
    );


    // =========================================================
    // RETURN RESULT
    // =========================================================

    return {

        cartText,

        rmValues,

        numericValues,

        positiveValues,

        highestDisplayedAmount
    };
}



}


module.exports = {
    ZakatTanamanPage
};