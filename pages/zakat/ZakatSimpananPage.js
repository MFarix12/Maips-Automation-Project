const { expect } = require('@playwright/test');

class ZakatSimpananPage {

    constructor(page) {
        this.page = page;

        // =====================================================
        // HOME / BAYARAN ZAKAT
        // =====================================================

        this.kiraSekarangButton =
            page.getByRole('link', { name: 'Kira Sekarang' }).first();


        // =====================================================
        // ZAKAT WANG SIMPANAN
        // =====================================================

        this.zakatSimpananTab =
            page.getByText(
                'Zakat Wang Simpanan',
                { exact: true }
            );

        this.zakatSimpananHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Wang Simpanan',
                    { exact: true }
                );


        // =====================================================
        // ZAKAT SIMPANAN FORM
        // =====================================================

        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                });

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


        // =====================================================
        // PAYMENT CART
        // =====================================================

        this.paymentCartHeading =
            page.getByRole(
                'heading',
                { name: 'Bakul Bayaran' }
            );

            // =====================================================
// EMPTY PAYMENT CART
// =====================================================

this.emptyCartMessage =
    page.getByText(
        /Rekod tidak ditemui.*Sila klik Masuk Troli untuk tambah item/i
    );

this.emptyCartTotal =
    page.getByText(
        'RM 0.00',
        { exact: true }
    );

this.emptyCartPayButton =
    page.getByRole(
        'button',
        { name: 'Bayar', exact: true }
    );

    // =====================================================
// ZAKAT SIMPANAN CALCULATOR
// =====================================================

this.calculatorContainer =
    page.locator('#kalkulatorContentLayout');

this.calculatorSavingsField =
    this.calculatorContainer.getByRole(
        'textbox',
        { name: 'Jumlah Simpanan' }
    );

this.calculatorAddToCartButton =
    this.calculatorContainer.getByRole(
        'button',
        { name: 'Masuk Troli' }
    );

// =====================================================
// CALCULATOR TAHUN / HAUL
// =====================================================

this.calculatorHaulComboBox =
    this.calculatorContainer.locator('vaadin-combo-box').first();

this.calculatorHaulToggleButton =
    this.calculatorHaulComboBox.locator('#toggleButton');

this.calculatorHaulInput =
    this.calculatorHaulComboBox.locator('input');

// =====================================================
// CART - ZAKAT WANG SIMPANAN
// =====================================================

this.cartContainer =
    page.locator('#bakulBayaranFragment');

this.addToCartSuccessNotification =
    page.getByText(
        /Jumlah telah ditambah ke bakul bayaran/i
    );

this.cartZakatSimpananItem =
    this.cartContainer.getByText(
        'Zakat Wang Simpanan',
        { exact: true }
    );

this.cartCalculatedAmount =
    this.cartContainer.getByText(
        'RM 25.00',
        { exact: true }
    );

this.cartPayCalculatedButton =
    this.cartContainer.getByRole(
        'button',
        { name: 'Bayar RM 25.00' }
    );

// =====================================================
// CART DETAILS - ZAKAT WANG SIMPANAN
// =====================================================

this.cartYear2026 =
    this.cartContainer.getByText(
        '2026',
        { exact: true }
    );

this.cartAmount2500 =
    this.cartContainer.getByText(
        'RM 25.00',
        { exact: true }
    );

this.cartPayButton2500 =
    this.cartContainer.getByRole(
        'button',
        { name: 'Bayar RM 25.00' }
    );

    // =====================================================
// CART DELETE
// =====================================================

this.cartDeleteButton =
    page.locator(
        'vaadin-grid-cell-content:nth-child(19) > ' +
        'vaadin-horizontal-layout > vaadin-button'
    );

    }


    // =========================================================
    // OPEN MAIPS
    // =========================================================

    async open() {

        await this.page.goto('/');

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }


    // =========================================================
    // OPEN BAYARAN ZAKAT
    // =========================================================

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


    // =========================================================
    // OPEN ZAKAT WANG SIMPANAN
    // =========================================================

    async openZakatSimpanan() {

        await expect(
            this.zakatSimpananTab
        ).toBeVisible({
            timeout: 15000
        });

        await this.zakatSimpananTab.click();

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // VERIFY ZAKAT WANG SIMPANAN PAGE
    // =========================================================

    async verifyZakatSimpananPage() {

        await expect(
            this.zakatSimpananHeading
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

    // =========================================================
// VERIFY DEFAULT STATE
// =========================================================

async verifyDefaultState() {

    // Tahun/Haul should be displayed
    await expect(
        this.haulFormItem
    ).toBeVisible({
        timeout: 15000
    });


    // Jumlah Bayaran should be displayed
    await expect(
        this.manualAmountField
    ).toBeVisible();


    // Calculator button should be available
    await expect(
        this.openCalculatorButton
    ).toBeVisible();

    await expect(
        this.openCalculatorButton
    ).toBeEnabled();


    // Payment cart should be displayed
    await expect(
        this.paymentCartHeading
    ).toBeVisible();


    // Cart should initially contain no records
    await expect(
        this.emptyCartMessage
    ).toBeVisible();


    // Total should initially be RM 0.00
    await expect(
        this.emptyCartTotal
    ).toBeVisible();


    // Pay button should exist
    await expect(
        this.emptyCartPayButton
    ).toBeVisible();


    // Pay button should be disabled because cart is empty
    await expect(
        this.emptyCartPayButton
    ).toBeDisabled();
}

// =========================================================
// OPEN TAHUN / HAUL SELECTION
// =========================================================

async openHaulSelection() {

    const toggleButton =
        this.haulFormItem.locator('#toggleButton');

    await expect(
        toggleButton
    ).toBeVisible({
        timeout: 15000
    });

    await toggleButton.click();
}


// =========================================================
// SELECT TAHUN / HAUL
// =========================================================

async selectHaulYear(year) {

    await this.openHaulSelection();

    /*
     * Vaadin renders the dropdown options in an overlay
     * outside the form item.
     *
     * Use the visible year text instead of a dynamic
     * vaadin-combo-box-item ID.
     */
    const yearOption =
        this.page
            .getByRole('option', {
                name: String(year),
                exact: true
            });

    await expect(
        yearOption
    ).toBeVisible({
        timeout: 15000
    });

    await yearOption.click();
}


// =========================================================
// VERIFY SELECTED TAHUN / HAUL
// =========================================================

async verifySelectedHaulYear(year) {

    const haulInput =
        this.haulFormItem.locator('input');

    await expect(
        haulInput
    ).toHaveValue(
        String(year),
        {
            timeout: 15000
        }
    );
}

// =========================================================
// ENTER MANUAL ZAKAT AMOUNT
// =========================================================

async enterManualZakatAmount(amount) {

    await expect(
        this.manualAmountField
    ).toBeVisible({
        timeout: 15000
    });

    await this.manualAmountField.click();

    await this.manualAmountField.fill(
        String(amount)
    );
}


// =========================================================
// VERIFY MANUAL ZAKAT AMOUNT
// =========================================================

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

// =========================================================
// OPEN ZAKAT SIMPANAN CALCULATOR
// =========================================================

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


// =========================================================
// VERIFY ZAKAT SIMPANAN CALCULATOR
// =========================================================

async verifyCalculatorOpened() {

    await expect(
        this.calculatorContainer
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.calculatorSavingsField
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.calculatorAddToCartButton
    ).toBeVisible({
        timeout: 15000
    });
}

// =========================================================
// OPEN CALCULATOR TAHUN / HAUL
// =========================================================

async openCalculatorHaulSelection() {

    await expect(
        this.calculatorHaulToggleButton
    ).toBeVisible({
        timeout: 15000
    });

    await this.calculatorHaulToggleButton.click();
}


// =========================================================
// SELECT CALCULATOR TAHUN / HAUL
// =========================================================

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

    await this.verifyCalculatorHaulYear(year);
}


// =========================================================
// VERIFY CALCULATOR TAHUN / HAUL
// =========================================================

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

// =========================================================
// ENTER JUMLAH SIMPANAN
// =========================================================

async enterJumlahSimpanan(amount) {

    await expect(
        this.calculatorSavingsField
    ).toBeVisible({
        timeout: 15000
    });

    await this.calculatorSavingsField.click();

    await this.calculatorSavingsField.fill(
        String(amount)
    );
}


// =========================================================
// VERIFY JUMLAH SIMPANAN
// =========================================================

async verifyJumlahSimpanan(amount) {

    await expect(
        this.calculatorSavingsField
    ).toHaveValue(
        String(amount),
        {
            timeout: 15000
        }
    );
}

// =========================================================
// ADD CALCULATED ZAKAT TO CART
// =========================================================

async addCalculatedZakatToCart() {

    await expect(
        this.calculatorAddToCartButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.calculatorAddToCartButton
    ).toBeEnabled();

    await this.calculatorAddToCartButton.click();

    await expect(
        this.addToCartSuccessNotification
    ).toBeVisible({
        timeout: 15000
    });
}

// =========================================================
// CHANGE JUMLAH SIMPANAN
// =========================================================

async changeJumlahSimpanan(newAmount) {

    await expect(
        this.calculatorSavingsField
    ).toBeVisible({
        timeout: 15000
    });

    await this.calculatorSavingsField.fill('');

    await this.calculatorSavingsField.fill(
        String(newAmount)
    );

    await expect(
        this.calculatorSavingsField
    ).toHaveValue(
        String(newAmount),
        {
            timeout: 15000
        }
    );
}

// =========================================================
// REMOVE ZAKAT SIMPANAN FROM CART
// =========================================================

async removeZakatSimpananFromCart() {

    await expect(
        this.cartDeleteButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.cartDeleteButton
    ).toBeEnabled();

    await this.cartDeleteButton.click();

    // Verify the Zakat Simpanan item has been removed
    await expect(
        this.cartZakatSimpananItem
    ).toBeHidden({
        timeout: 15000
    });
}

}

module.exports = {
    ZakatSimpananPage
};