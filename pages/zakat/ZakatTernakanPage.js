const { expect } = require('@playwright/test');


class ZakatTernakanPage {

    constructor(page) {

        this.page = page;


        // =========================================================
        // HOME PAGE
        // =========================================================

        this.kiraSekarangButton =
            page.getByRole(
                'link',
                { name: 'Kira Sekarang' }
            ).nth(4);


        // =========================================================
        // ZAKAT TERNAKAN MAIN PAGE
        // =========================================================

        this.zakatTernakanHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Ternakan',
                    { exact: true }
                );


        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                })
                .first();


        this.manualAmountField =
            page.getByRole(
                'textbox',
                { name: 'Jumlah Bayaran' }
            );


        this.openCalculatorButton =
            page.getByRole(
                'button',
                { name: 'Buka Kalkulator' }
            );


        this.mainAddToCartButton =
            page.getByRole(
                'button',
                { name: 'Masuk Troli' }
            ).last();


        // =========================================================
        // CALCULATOR
        // =========================================================

        this.calculatorContainer =
            page.locator(
                '#kalkulatorContentLayout'
            );


        this.calculatorTitle =
            page.getByText(
                'Kalkulator Zakat Ternakan',
                { exact: true }
            );


        this.livestockInformationHeading =
            page.getByText(
                'Maklumat Ternakan',
                { exact: true }
            );


        this.livestockTypeLabel =
            page.getByText(
                'Jenis Ternakan',
                { exact: true }
            );


        this.cattleOption =
            page.getByText(
                'Lembu/Kerbau',
                { exact: true }
            );


        this.goatSheepOption =
            page.getByText(
                'Kambing/Biri-Biri',
                { exact: true }
            );


        this.calculatorHaulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                })
                .last();


        this.calculatorAddToCartButton =
            page.locator('#kalkulatorContentLayout')
                .getByRole(
                    'button',
                    { name: 'Masuk Troli' }
                );


        // =========================================================
        // CART
        // =========================================================

        this.paymentCartHeading =
            page.getByRole(
                'heading',
                { name: 'Bakul Bayaran' }
            );


        this.cartContainer =
            page.locator(
                '#bakulBayaranFragment'
            );


        this.emptyCartMessage =
            page.getByText(
                /Rekod tidak ditemui.*Sila klik Masuk Troli untuk tambah item/i
            );


        this.emptyCartTotal =
            this.cartContainer.getByText(
                'RM 0.00',
                { exact: true }
            );


        this.zakatTernakanCartItem =
            this.cartContainer.getByText(
                'Zakat Ternakan',
                { exact: true }
            );


        // =========================================================
        // LEMBU / KERBAU CALCULATOR FIELDS
        // =========================================================

        this.cattleQuantityField =
            page.getByRole(
                'spinbutton',
                { name: 'Bilangan Lembu/Kerbau Ternakan' }
            );


        this.maleCattlePriceField =
            page.getByRole(
                'textbox',
                { name: 'Harga Semasa Seekor Lembu Jantan' }
            );


        this.femaleCattlePriceField =
            page.getByRole(
                'textbox',
                { name: 'Harga Semasa Seekor Lembu Betina' }
            );


        // =========================================================
        // BELOW NISAB MESSAGE
        // =========================================================

        this.belowNisabMessage =
            page.getByText(
                'Jumlah bilangan ternakan anda',
                {
                    exact: false
                }
            );

        // =========================================================
        // CATTLE ZAKAT RESULT
        // =========================================================

        this.cattleZakatRateLabel =
            page.getByText(
                'Kadar Zakat yang Perlu Dibayar',
                { exact: true }
            );


        this.cattleZakatAmountLabel =
            page.getByText(
                'Jumlah Zakat yang Perlu Dibayar',
                { exact: true }
            );

        // =========================================================
        // KAMBING / BIRI-BIRI
        // =========================================================

        this.goatSheepOption =
            page.getByText(
                'Kambing/Biri-Biri',
                { exact: true }
            );


        this.goatSheepQuantityField =
            page.getByRole(
                'spinbutton',
                { name: 'Bilangan Kambing/Biri-Biri' }
            );


        this.goatPriceField =
            page.getByRole(
                'textbox',
                { name: 'Harga Semasa Seekor Kambing' }
            );

        this.cartDeleteButton =
            this.cartContainer
                .locator('vaadin-button')
                .filter({
                    has: page.locator('vaadin-icon')
                })
                .last();


    }


    // =============================================================
    // OPEN MAIPS
    // =============================================================

    async open() {

        await this.page.goto('/');

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }


    // =============================================================
    // OPEN ZAKAT TERNAKAN
    // =============================================================

    async openZakatTernakan() {

        await expect(
            this.kiraSekarangButton
        ).toBeVisible({
            timeout: 15000
        });


        await this.kiraSekarangButton.click();


        await expect(
            this.zakatTernakanHeading
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY ZAKAT TERNAKAN PAGE
    // =============================================================

    async verifyZakatTernakanPage() {

        await expect(
            this.zakatTernakanHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.haulFormItem
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.manualAmountField
        ).toBeEnabled();


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
    }


    // =============================================================
    // VERIFY DEFAULT STATE
    // =============================================================

    async verifyDefaultState() {

        await expect(
            this.zakatTernakanHeading
        ).toBeVisible({
            timeout: 15000
        });


        const haulInput =
            this.haulFormItem.locator('input');


        await expect(
            haulInput
        ).toBeVisible({
            timeout: 15000
        });


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
            await this.manualAmountField.inputValue();


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
            this.cartContainer
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
    }


    // =============================================================
    // OPEN HAUL SELECTION
    // =============================================================

    async openHaulSelection() {

        await expect(
            this.haulFormItem
        ).toBeVisible({
            timeout: 15000
        });


        const toggleButton =
            this.haulFormItem.locator(
                '#toggleButton'
            );


        await expect(
            toggleButton
        ).toBeVisible({
            timeout: 15000
        });


        await toggleButton.click();
    }


    // =============================================================
    // SELECT HAUL YEAR
    // =============================================================

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


    // =============================================================
    // VERIFY SELECTED HAUL YEAR
    // =============================================================

    async verifySelectedHaulYear(year) {

        const haulInput =
            this.haulFormItem.locator(
                'input'
            );


        await expect(
            haulInput
        ).toBeVisible({
            timeout: 15000
        });


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
    // ENTER MANUAL ZAKAT AMOUNT
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


    // =============================================================
    // VERIFY MANUAL ZAKAT AMOUNT
    // =============================================================

    async verifyManualZakatAmount(amount) {

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


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
    // CLEAR MANUAL ZAKAT AMOUNT
    // =============================================================

    async clearManualZakatAmount() {

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.manualAmountField
        ).toBeEnabled();


        await this.manualAmountField.fill('');


        await expect(
            this.manualAmountField
        ).toHaveValue('');
    }


    // =============================================================
    // ADD MANUAL ZAKAT TO CART
    // =============================================================

    async addManualZakatToCart() {

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });


        const amount =
            await this.manualAmountField.inputValue();


        expect(
            Number(amount)
        ).toBeGreaterThan(0);


        await expect(
            this.mainAddToCartButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.mainAddToCartButton
        ).toBeEnabled();


        await this.mainAddToCartButton.click();
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


        return await this.cartContainer.innerText();
    }


    // =============================================================
    // EXTRACT RM VALUES
    // =============================================================

    extractRMValues(text) {

        const matches =
            text.match(
                /RM\s*[\d,.]+/g
            );


        return matches || [];
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
    // VERIFY MANUAL ZAKAT ADDED TO CART
    // =============================================================

    async verifyManualZakatAddedToCart() {

        await expect(
            this.cartContainer
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.zakatTernakanCartItem
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartMessage
        ).toBeHidden({
            timeout: 15000
        });


        const cartText =
            await this.getCartContent();


        expect(
            cartText
        ).toContain(
            'Zakat Ternakan'
        );


        const rmValues =
            this.extractRMValues(
                cartText
            );


        expect(
            rmValues.length
        ).toBeGreaterThan(0);


        const numericValues =
            rmValues.map(
                value =>
                    this.convertRMToNumber(
                        value
                    )
            );


        expect(
            numericValues.some(
                value =>
                    Number.isFinite(value) &&
                    value > 0
            )
        ).toBeTruthy();


        return {
            cartText,
            rmValues,
            numericValues
        };
    }


    // =============================================================
    // OPEN ZAKAT TERNAKAN CALCULATOR
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
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY CALCULATOR IS OPEN
    // =============================================================

    async verifyCalculatorIsOpen() {

        await expect(
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.livestockInformationHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.livestockTypeLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatSheepOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorHaulFormItem
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorAddToCartButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // GET CALCULATOR HAUL INPUT
    // =============================================================

    getCalculatorHaulInput() {

        return this.calculatorHaulFormItem
            .locator('input');
    }


    // =============================================================
    // VERIFY CALCULATOR DEFAULT HAUL
    // =============================================================

    async verifyCalculatorDefaultHaul(year = '2026') {

        const haulInput =
            this.getCalculatorHaulInput();


        await expect(
            haulInput
        ).toBeVisible({
            timeout: 15000
        });


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
    // VERIFY LEMBU / KERBAU FIELDS
    // =============================================================

    async verifyCattleFieldsVisible() {

        await expect(
            this.cattleQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toBeEnabled();


        await expect(
            this.maleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.maleCattlePriceField
        ).toBeEnabled();


        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.femaleCattlePriceField
        ).toBeEnabled();
    }


    // =============================================================
    // VERIFY CALCULATOR DEFAULT STATE
    // =============================================================

    async verifyCalculatorDefaultState() {

        await expect(
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });


        await this.verifyCalculatorDefaultHaul(
            '2026'
        );


        await expect(
            this.cattleOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatSheepOption
        ).toBeVisible({
            timeout: 15000
        });


        await this.verifyCattleFieldsVisible();


        const quantityValue =
            await this.cattleQuantityField
                .inputValue();


        expect(
            [
                '',
                '0'
            ]
        ).toContain(
            quantityValue
        );


        const malePrice =
            await this.maleCattlePriceField
                .inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            malePrice
        );


        const femalePrice =
            await this.femaleCattlePriceField
                .inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            femalePrice
        );


        await expect(
            this.emptyCartMessage
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.emptyCartTotal
        ).toHaveText(
            'RM 0.00'
        );
    }


    // =============================================================
    // OPEN CALCULATOR HAUL SELECTION
    // =============================================================

    async openCalculatorHaulSelection() {

        await expect(
            this.calculatorHaulFormItem
        ).toBeVisible({
            timeout: 15000
        });


        const toggleButton =
            this.calculatorHaulFormItem.locator(
                '#toggleButton'
            );


        await expect(
            toggleButton
        ).toBeVisible({
            timeout: 15000
        });


        await toggleButton.click();
    }


    // =============================================================
    // SELECT CALCULATOR HAUL YEAR
    // =============================================================

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


    // =============================================================
    // VERIFY CALCULATOR HAUL YEAR
    // =============================================================

    async verifyCalculatorHaulYear(year) {

        const haulInput =
            this.calculatorHaulFormItem
                .locator('input');


        await expect(
            haulInput
        ).toBeVisible({
            timeout: 15000
        });


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
    // VERIFY LEMBU / KERBAU DEFAULT SELECTION
    // =============================================================

    async verifyCattleDefaultSelection() {

        await expect(
            this.calculatorTitle
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatSheepOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toBeEnabled();


        await expect(
            this.maleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.maleCattlePriceField
        ).toBeEnabled();


        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.femaleCattlePriceField
        ).toBeEnabled();
    }


    // =============================================================
    // ENTER LEMBU / KERBAU QUANTITY
    // =============================================================

    async enterCattleQuantity(quantity) {

        await expect(
            this.cattleQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toBeEnabled();


        await this.cattleQuantityField.click();


        await this.cattleQuantityField.fill(
            String(quantity)
        );


        await this.verifyCattleQuantity(
            quantity
        );
    }


    // =============================================================
    // VERIFY LEMBU / KERBAU QUANTITY
    // =============================================================

    async verifyCattleQuantity(quantity) {

        await expect(
            this.cattleQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toHaveValue(
            String(quantity),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR LEMBU / KERBAU QUANTITY
    // =============================================================

    async clearCattleQuantity() {

        await expect(
            this.cattleQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleQuantityField
        ).toBeEnabled();


        await this.cattleQuantityField.fill('');


        const value =
            await this.cattleQuantityField.inputValue();


        expect(
            [
                '',
                '0'
            ]
        ).toContain(
            value
        );
    }


    // =============================================================
    // ENTER MALE CATTLE PRICE
    // =============================================================

    async enterMaleCattlePrice(price) {

        await expect(
            this.maleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.maleCattlePriceField
        ).toBeEnabled();


        await this.maleCattlePriceField.click();


        await this.maleCattlePriceField.fill(
            String(price)
        );


        await this.verifyMaleCattlePrice(
            price
        );
    }


    // =============================================================
    // VERIFY MALE CATTLE PRICE
    // =============================================================

    async verifyMaleCattlePrice(price) {

        await expect(
            this.maleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.maleCattlePriceField
        ).toHaveValue(
            String(price),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR MALE CATTLE PRICE
    // =============================================================

    async clearMaleCattlePrice() {

        await expect(
            this.maleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.maleCattlePriceField
        ).toBeEnabled();


        await this.maleCattlePriceField.fill('');


        const value =
            await this.maleCattlePriceField.inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            value
        );
    }


    // =============================================================
    // ENTER FEMALE CATTLE PRICE
    // =============================================================

    async enterFemaleCattlePrice(price) {

        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.femaleCattlePriceField
        ).toBeEnabled();


        await this.femaleCattlePriceField.click();


        await this.femaleCattlePriceField.fill(
            String(price)
        );


        await this.verifyFemaleCattlePrice(
            price
        );
    }


    // =============================================================
    // VERIFY FEMALE CATTLE PRICE
    // =============================================================

    async verifyFemaleCattlePrice(price) {

        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
    });


        await expect(
            this.femaleCattlePriceField
        ).toHaveValue(
            String(price),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR FEMALE CATTLE PRICE
    // =============================================================

    async clearFemaleCattlePrice() {

        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.femaleCattlePriceField
        ).toBeEnabled();


        await this.femaleCattlePriceField.fill('');


        const value =
            await this.femaleCattlePriceField.inputValue();


        expect(
            [
                '',
                '0',
                '0.00'
            ]
        ).toContain(
            value
        );
    }


    // =============================================================
    // ENTER COMPLETE CATTLE INFORMATION
    // =============================================================

    async enterCattleInformation(
        quantity,
        malePrice,
        femalePrice
    ) {

        await this.enterCattleQuantity(
            quantity
        );


        await this.enterMaleCattlePrice(
            malePrice
        );


        await this.enterFemaleCattlePrice(
            femalePrice
        );
    }


    // =============================================================
    // CLICK CALCULATOR MASUK TROLI
    // =============================================================

    async clickCalculatorAddToCart() {

        await expect(
            this.calculatorAddToCartButton
        ).toBeVisible({
            timeout: 15000
    });


        await expect(
            this.calculatorAddToCartButton
        ).toBeEnabled({
            timeout: 15000
        });


        await this.calculatorAddToCartButton.click();
    }

    // =============================================================
    // VERIFY CATTLE BELOW NISAB
    // =============================================================

    async verifyCattleBelowNisab() {

        await expect(
            this.belowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.belowNisabMessage
        ).toContainText(
            'Jumlah bilangan ternakan anda tidak mencapai kadar nisab zakat'
        );


        await expect(
            this.belowNisabMessage
        ).toContainText(
            'Anda tidak dikenakan zakat'
        );


        await expect(
            this.calculatorContainer
        ).toContainText(
            'RM 0.00',
            {
                timeout: 15000
            }
        );
    }

    // =============================================================
    // ENTER FEMALE CATTLE PRICE
    // =============================================================

    async enterFemaleCattlePrice(price) {

        await expect(
            this.femaleCattlePriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.femaleCattlePriceField
        ).toBeEnabled();


        await this.femaleCattlePriceField.click();


        await this.femaleCattlePriceField.fill(
            String(price)
        );


        await expect(
            this.femaleCattlePriceField
        ).toHaveValue(
            String(price),
            {
                timeout: 15000
            }
        );


        // Trigger MAIPS calculation by removing focus
        await this.femaleCattlePriceField.press(
            'Tab'
        );
    }

    // =============================================================
    // VERIFY CATTLE ABOVE NISAB
    // =============================================================

    async verifyCattleAboveNisab() {

        await expect(
            this.cattleZakatRateLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.cattleZakatAmountLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.belowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });


        await expect(
            this.calculatorContainer
        ).not.toContainText(
            'RM 0.00',
            {
                timeout: 15000
            }
        );
    }

    // =============================================================
    // VERIFY CATTLE ZAKAT RESULT
    // =============================================================

    async verifyCattleZakatResult() {

        await expect(
            this.calculatorContainer
        ).toContainText(
            'Kadar Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        await expect(
            this.calculatorContainer
        ).toContainText(
            'Jumlah Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        const calculatorText =
            await this.calculatorContainer.innerText();


        const rmMatches =
            calculatorText.match(
                /RM\s*[\d,]+\.\d{2}/g
            );


        expect(
            rmMatches
        ).not.toBeNull();


        expect(
            rmMatches.length
        ).toBeGreaterThan(0);


        const amounts =
            rmMatches.map(
                value =>
                    Number(
                        value
                            .replace(/RM\s*/i, '')
                            .replace(/,/g, '')
                    )
            );


        const validAmount =
            amounts.find(
                amount =>
                    Number.isFinite(amount) &&
                    amount > 0
            );


        expect(
            validAmount
        ).toBeDefined();


        return {
            calculatorText,
            amounts,
            zakatAmount: validAmount
        };
    }

    // =============================================================
    // GET CATTLE ZAKAT RESULT AMOUNT
    // =============================================================

    async getCattleZakatResultAmount() {

        await expect(
            this.calculatorContainer
        ).toContainText(
            'Jumlah Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        const calculatorText =
            await this.calculatorContainer.innerText();


        const rmMatches =
            calculatorText.match(
                /RM\s*[\d,]+\.\d{2}/g
            );


        expect(
            rmMatches
        ).not.toBeNull();


        const amounts =
            rmMatches.map(
                value =>
                    Number(
                        value
                            .replace(/RM\s*/i, '')
                            .replace(/,/g, '')
                    )
            );


        const positiveAmounts =
            amounts.filter(
                amount =>
                    Number.isFinite(amount) &&
                    amount > 0
            );


        expect(
            positiveAmounts.length
        ).toBeGreaterThan(0);


        return positiveAmounts[
            positiveAmounts.length - 1
        ];
    }

    // =============================================================
    // SELECT KAMBING / BIRI-BIRI
    // =============================================================

    async selectGoatSheep() {

        await expect(
            this.goatSheepOption
        ).toBeVisible({
            timeout: 15000
        });


        await this.goatSheepOption.click();


        await expect(
            this.goatSheepQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatPriceField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY KAMBING / BIRI-BIRI SELECTION
    // =============================================================

    async verifyGoatSheepSelection() {

        await expect(
            this.goatSheepOption
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatSheepQuantityField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatSheepQuantityField
        ).toBeEnabled();


        await expect(
            this.goatPriceField
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.goatPriceField
        ).toBeEnabled();
    }

    // =============================================================
    // ENTER KAMBING / BIRI-BIRI QUANTITY
    // =============================================================

    async enterGoatSheepQuantity(quantity) {

        await expect(
            this.goatSheepQuantityField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.goatSheepQuantityField
        ).toBeEnabled();

        await this.goatSheepQuantityField.click();

        await this.goatSheepQuantityField.fill(
            String(quantity)
        );

        await expect(
            this.goatSheepQuantityField
        ).toHaveValue(
            String(quantity),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY KAMBING / BIRI-BIRI QUANTITY
    // =============================================================

    async verifyGoatSheepQuantity(quantity) {

        await expect(
            this.goatSheepQuantityField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.goatSheepQuantityField
        ).toHaveValue(
            String(quantity),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR KAMBING / BIRI-BIRI QUANTITY
    // =============================================================

    async clearGoatSheepQuantity() {

        await expect(
            this.goatSheepQuantityField
        ).toBeVisible({
            timeout: 15000
        });

        await this.goatSheepQuantityField.fill('');

        await expect(
            this.goatSheepQuantityField
        ).toHaveValue(
            '',
            {
                timeout: 15000
            }
        );
    }

    // =============================================================
    // ENTER GOAT PRICE
    // =============================================================

    async enterGoatPrice(price) {

        await expect(
            this.goatPriceField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.goatPriceField
        ).toBeEnabled();

        await this.goatPriceField.click();

        await this.goatPriceField.fill(
            String(price)
        );

        await expect(
            this.goatPriceField
        ).toHaveValue(
            String(price),
            {
                timeout: 15000
            }
        );

        // Trigger calculator update
        await this.goatPriceField.press('Tab');
    }


    // =============================================================
    // VERIFY GOAT PRICE
    // =============================================================

    async verifyGoatPrice(price) {

        await expect(
            this.goatPriceField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.goatPriceField
        ).toHaveValue(
            String(price),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR GOAT PRICE
    // =============================================================

    async clearGoatPrice() {

        await expect(
            this.goatPriceField
        ).toBeVisible({
            timeout: 15000
        });

        await this.goatPriceField.fill('');

        await expect(
            this.goatPriceField
        ).toHaveValue(
            '',
            {
                timeout: 15000
            }
        );
    }

    // =============================================================
    // VERIFY KAMBING / BIRI-BIRI BELOW NISAB
    // =============================================================

    async verifyGoatSheepBelowNisab() {

        await expect(
            this.belowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.belowNisabMessage
        ).toContainText(
            'Jumlah bilangan ternakan anda tidak mencapai kadar nisab zakat'
        );


        await expect(
            this.belowNisabMessage
        ).toContainText(
            'Anda tidak dikenakan zakat'
        );


        await expect(
            this.calculatorContainer
        ).toContainText(
            'RM 0.00',
            {
                timeout: 15000
            }
        );
    }

    // =============================================================
    // VERIFY KAMBING / BIRI-BIRI ABOVE NISAB
    // =============================================================

    async verifyGoatSheepAboveNisab() {

        // Below-Nisab warning should not be displayed
        await expect(
            this.belowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });


        // Result section should be displayed
        await expect(
            this.calculatorContainer
        ).toContainText(
            'Kadar Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        await expect(
            this.calculatorContainer
        ).toContainText(
            'Jumlah Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        // Above-Nisab calculation should not be RM 0.00
        await expect(
            this.calculatorContainer
        ).not.toContainText(
            'RM 0.00',
            {
                timeout: 15000
            }
        );


        // Masuk Troli should be available
        await expect(
            this.calculatorAddToCartButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.calculatorAddToCartButton
        ).toBeEnabled();
    }

    // =============================================================
    // GET KAMBING / BIRI-BIRI ZAKAT RESULT AMOUNT
    // =============================================================

    async getGoatSheepZakatResultAmount() {

        await expect(
            this.calculatorContainer
        ).toContainText(
            'Jumlah Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        const calculatorText =
            await this.calculatorContainer.innerText();


        const rmMatches =
            calculatorText.match(
                /RM\s*[\d,]+\.\d{2}/g
            );


        expect(
            rmMatches
        ).not.toBeNull();


        const amounts =
            rmMatches.map(
                value =>
                    Number(
                        value
                            .replace(/RM\s*/i, '')
                            .replace(/,/g, '')
                    )
            );


        const positiveAmounts =
            amounts.filter(
                amount =>
                    Number.isFinite(amount) &&
                    amount > 0
            );


        expect(
            positiveAmounts.length
        ).toBeGreaterThan(0);


        return positiveAmounts[
            positiveAmounts.length - 1
        ];
    }


    // =============================================================
    // VERIFY KAMBING / BIRI-BIRI ZAKAT RESULT
    // =============================================================

    async verifyGoatSheepZakatResult(expectedAmount) {

        await expect(
            this.calculatorContainer
        ).toContainText(
            'Kadar Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        await expect(
            this.calculatorContainer
        ).toContainText(
            'Jumlah Zakat yang Perlu Dibayar',
            {
                timeout: 15000
            }
        );


        const actualAmount =
            await this.getGoatSheepZakatResultAmount();


        expect(
            actualAmount
        ).toBe(
            Number(expectedAmount)
        );


        return actualAmount;
    }

        async removeZakatTernakanFromCart() {

        await expect(
            this.zakatTernakanCartItem
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartDeleteButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartDeleteButton
        ).toBeEnabled({
            timeout: 15000
        });

        await this.cartDeleteButton.click();
    }
}


module.exports = {
    ZakatTernakanPage
};