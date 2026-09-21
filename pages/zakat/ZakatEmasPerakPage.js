const { expect } = require('@playwright/test');


class ZakatEmasPerakPage {

    constructor(page) {

        this.page = page;


        // =========================================================
        // MAIN NAVIGATION
        // =========================================================

        // Zakat Emas/Perak = third "Kira Sekarang" link
        this.kiraSekarangButton =
            page.getByRole(
                'link',
                {
                    name: 'Kira Sekarang'
                }
            ).nth(2);


        // =========================================================
        // MAIN ZAKAT EMAS / PERAK PAGE
        // =========================================================

        this.zakatEmasPerakTab =
            page.getByText(
                'Zakat Emas/Perak',
                {
                    exact: true
                }
            );


        this.zakatEmasPerakHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Emas/Perak',
                    {
                        exact: true
                    }
                );


        // =========================================================
        // TAHUN / HAUL - MAIN FORM
        // =========================================================

        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                });


        // =========================================================
        // JENIS LOGAM - MAIN FORM
        // =========================================================

        this.emasRadio =
            page.getByRole(
                'radio',
                {
                    name: 'Emas'
                }
            );


        this.perakRadio =
            page.getByRole(
                'radio',
                {
                    name: 'Perak'
                }
            );


        // =========================================================
        // MANUAL PAYMENT
        // =========================================================

        this.manualAmountField =
            page.getByRole(
                'textbox',
                {
                    name: 'Jumlah Bayaran'
                }
            );


        // =========================================================
        // OPEN CALCULATOR
        // =========================================================

        this.openCalculatorButton =
            page.getByRole(
                'button',
                {
                    name: 'Buka Kalkulator'
                }
            );


        // =========================================================
        // CALCULATOR CONTAINER
        // =========================================================

        this.calculatorContainer =
            page.locator(
                '#kalkulatorContentLayout'
            );


        // =========================================================
        // CALCULATOR TITLE
        // =========================================================

        this.calculatorTitle =
            page.getByText(
                'Kalkulator Zakat Emas/Perak',
                {
                    exact: true
                }
            );


        // =========================================================
        // CALCULATOR - GOLD SECTION
        // =========================================================

        this.calculatorGoldSection =
            this.calculatorContainer.getByText(
                'Emas yang Dimiliki',
                {
                    exact: true
                }
            );


        // =========================================================
        // GOLD TYPE LABELS
        // =========================================================

        this.gold24KLabel =
            this.calculatorContainer.getByText(
                '24K/995/999',
                {
                    exact: true
                }
            );


        this.gold965Label =
            this.calculatorContainer.getByText(
                '965',
                {
                    exact: true
                }
            );


        this.gold23KLabel =
            this.calculatorContainer.getByText(
                '23K/950',
                {
                    exact: true
                }
            );


        this.gold22KLabel =
            this.calculatorContainer.getByText(
                '22K/916',
                {
                    exact: true
                }
            );


        this.gold21KLabel =
            this.calculatorContainer.getByText(
                '21K/875',
                {
                    exact: true
                }
            );


        this.gold20KLabel =
            this.calculatorContainer.getByText(
                '20K/835',
                {
                    exact: true
                }
            );


        this.goldPaunLabel =
            this.calculatorContainer.getByText(
                'PAUN',
                {
                    exact: true
                }
            );


        this.gold18KLabel =
            this.calculatorContainer.getByText(
                '18K/K18/750',
                {
                    exact: true
                }
            );


        this.gold14KLabel =
            this.calculatorContainer.getByText(
                '14K/585',
                {
                    exact: true
                }
            );


        this.gold9KLabel =
            this.calculatorContainer.getByText(
                '9K/375',
                {
                    exact: true
                }
            );


        // =========================================================
        // GOLD TOTAL / NISAB
        // =========================================================

        this.totalPureGoldLabel =
            this.calculatorContainer.getByText(
                /Jumlah Berat Emas Tulen yang dimiliki/i
            );


        this.totalPureGoldValue =
            this.calculatorContainer.getByText(
                '0.00 g',
                {
                    exact: true
                }
            );


        this.belowNisabMessage =
            this.calculatorContainer.getByText(
                /tidak mencapai amaun nisab.*tidak dikenakan zakat/i
            );


        // =========================================================
        // CALCULATOR BUTTONS
        // =========================================================

        this.nextButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Seterusnya'
                }
            );


        this.previousButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Sebelum'
                }
            );


        this.addToCartButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Masuk Troli'
                }
            );


        // =========================================================
        // PAYMENT CART
        // =========================================================

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


        this.addToCartSuccessNotification =
            page.getByText(
                /Jumlah telah ditambah ke bakul bayaran/i
            );


        // =========================================================
        // EMPTY CART
        // =========================================================

        this.emptyCartMessage =
            page.getByText(
                /Rekod tidak ditemui.*Sila klik Masuk Troli untuk tambah item/i
            );


        this.emptyCartTotal =
            this.cartContainer.getByText(
                'RM 0.00',
                {
                    exact: true
                }
            );


        this.emptyCartPayButton =
            this.cartContainer.getByRole(
                'button',
                {
                    name: 'Bayar',
                    exact: true
                }
            );

            // =========================================================
// GOLD CALCULATION RESULT
// =========================================================

this.goldOwnedResult =
    this.calculatorContainer.getByText(
        /Jumlah Berat Emas yang dimiliki \(24K\/995\/999\)/i
    );

this.goldNisabResult =
    this.calculatorContainer.getByText(
        /Nisab Emas \(24K\/995\/999\)/i
    );

this.currentGoldPriceResult =
    this.calculatorContainer.getByText(
        /Harga Emas Semasa \(24K\/995\/999\)/i
    );

this.totalGoldPriceLabel =
    this.calculatorContainer.getByText(
        'Jumlah Harga Emas yang dimiliki',
        {
            exact: true
        }
    );

this.hideMetalHoldingCheckbox =
    this.calculatorContainer.getByRole(
        'checkbox',
        {
            name: /Pelanggan tidak ingin paparkan maklumat pegangan logam di dalam resit/i
        }
    );

this.zakatPaymentLabel =
    this.calculatorContainer.getByText(
        /Jumlah Zakat yang perlu dibayar/i
    );

    // =========================================================
// CART - ZAKAT EMAS / PERAK
// =========================================================

this.cartZakatEmasPerakItem =
    this.cartContainer.getByText(
        'Zakat Emas/Perak',
        {
            exact: true
        }
    );


this.cartYear2026 =
    this.cartContainer.getByText(
        '2026',
        {
            exact: true
        }
    );

// =========================================================
// CALCULATED ZAKAT AMOUNT
// =========================================================

this.zakatPaymentSection =
    this.zakatPaymentLabel.locator('..');

    // =========================================================
// CART DELETE BUTTON
// =========================================================

this.cartDeleteButton =
    page.locator(
        'vaadin-grid-cell-content:nth-child(19) > vaadin-horizontal-layout > vaadin-button'
    );

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
    // OPEN BAYARAN ZAKAT
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
    // VERIFY ZAKAT EMAS / PERAK PAGE
    // =============================================================

    async verifyZakatEmasPerakPage() {

        await expect(
            this.zakatEmasPerakHeading
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.haulFormItem
        ).toBeVisible();


        await expect(
            this.emasRadio
        ).toBeVisible();


        await expect(
            this.perakRadio
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


        // Emas should be selected by default
        await expect(
            this.emasRadio
        ).toBeVisible();


        await expect(
            this.emasRadio
        ).toBeChecked();


        // Perak should not be selected
        await expect(
            this.perakRadio
        ).toBeVisible();


        await expect(
            this.perakRadio
        ).not.toBeChecked();


        // Manual amount
        await expect(
            this.manualAmountField
        ).toBeVisible();


        // Calculator button
        await expect(
            this.openCalculatorButton
        ).toBeVisible();


        await expect(
            this.openCalculatorButton
        ).toBeEnabled();


        // Payment cart
        await expect(
            this.paymentCartHeading
        ).toBeVisible();
    }


    // =============================================================
    // OPEN TAHUN / HAUL SELECTION
    // =============================================================

    async openHaulSelection() {

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
    // SELECT TAHUN / HAUL
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
    // VERIFY SELECTED TAHUN / HAUL
    // =============================================================

    async verifySelectedHaulYear(year) {

        const haulInput =
            this.haulFormItem.locator(
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
    // SELECT EMAS
    // =============================================================

    async selectEmas() {

        await expect(
            this.emasRadio
        ).toBeVisible({
            timeout: 15000
        });


        await this.emasRadio.check();


        await expect(
            this.emasRadio
        ).toBeChecked();


        await expect(
            this.perakRadio
        ).not.toBeChecked();
    }


    // =============================================================
    // SELECT PERAK
    // =============================================================

    async selectPerak() {

        await expect(
            this.perakRadio
        ).toBeVisible({
            timeout: 15000
        });


        await this.perakRadio.check();


        await expect(
            this.perakRadio
        ).toBeChecked();


        await expect(
            this.emasRadio
        ).not.toBeChecked();
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
            this.paymentCartHeading
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
// GET GOLD WEIGHT FIELD
// =============================================================

async getGoldWeightField(goldType) {

    const goldTypes = [
        '24K/995/999',
        '965',
        '23K/950',
        '22K/916',
        '21K/875',
        '20K/835',
        'PAUN',
        '18K/K18/750',
        '14K/585',
        '9K/375'
    ];


    // Find the expected position of the gold type
    const index =
        goldTypes.indexOf(
            goldType
        );


    if (index === -1) {

        throw new Error(
            `Unknown gold type: ${goldType}`
        );
    }


    // Verify the requested gold label exists
    const label =
        this.calculatorContainer.getByText(
            goldType,
            {
                exact: true
            }
        );


    await expect(
        label
    ).toBeVisible({
        timeout: 15000
    });


    /*
     * Get all weight inputs from the gold table.
     *
     * The UI displays the fields in the same order as:
     *
     * 0 = 24K/995/999
     * 1 = 965
     * 2 = 23K/950
     * 3 = 22K/916
     * 4 = 21K/875
     * 5 = 20K/835
     * 6 = PAUN
     * 7 = 18K/K18/750
     * 8 = 14K/585
     * 9 = 9K/375
     *
     * We intentionally do NOT use generated Vaadin IDs.
     */

    const goldWeightFields =
        this.calculatorContainer.locator(
            'vaadin-big-decimal-field input[placeholder="0.00"]'
        );


    // There should be at least 10 gold weight fields
    await expect(
        goldWeightFields
    ).toHaveCount(
        10,
        {
            timeout: 15000
        }
    );


    const field =
        goldWeightFields.nth(
            index
        );


    await expect(
        field
    ).toBeVisible({
        timeout: 15000
    });


    return field;
}


    // =============================================================
    // ENTER GOLD WEIGHT
    // =============================================================

    async enterGoldWeight(
        goldType,
        weight
    ) {

        const field =
            await this.getGoldWeightField(
                goldType
            );


        await expect(
            field
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            field
        ).toBeEnabled();


        await field.click();


        await field.fill(
            String(weight)
        );
    }


    // =============================================================
    // CLEAR GOLD WEIGHT
    // =============================================================

    async clearGoldWeight(
        goldType
    ) {

        const field =
            await this.getGoldWeightField(
                goldType
            );


        await expect(
            field
        ).toBeVisible({
            timeout: 15000
        });


        await field.fill('');


        await expect(
            field
        ).toHaveValue('');
    }


    // =============================================================
    // CHANGE GOLD WEIGHT
    // =============================================================

    async changeGoldWeight(
        goldType,
        weight
    ) {

        const field =
            await this.getGoldWeightField(
                goldType
            );


        await expect(
            field
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            field
        ).toBeEnabled();


        await field.fill(
            String(weight)
        );


        await expect(
            field
        ).toHaveValue(
            String(weight)
        );
    }


    // =============================================================
    // VERIFY GOLD WEIGHT
    // =============================================================

    async verifyGoldWeight(
        goldType,
        weight
    ) {

        const field =
            await this.getGoldWeightField(
                goldType
            );


        await expect(
            field
        ).toHaveValue(
            String(weight),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY EMPTY GOLD WEIGHT
    // =============================================================

    async verifyEmptyGoldWeight(
        goldType
    ) {

        const field =
            await this.getGoldWeightField(
                goldType
            );


        /*
         * MAIPs visually displays 0.00 using the placeholder.
         *
         * Actual value:
         * ""
         *
         * Placeholder:
         * "0.00"
         */

        await expect(
            field
        ).toHaveValue(
            ''
        );


        await expect(
            field
        ).toHaveAttribute(
            'placeholder',
            '0.00'
        );
    }


    // =============================================================
    // VERIFY GOLD TYPE VISIBLE
    // =============================================================

    async verifyGoldTypeVisible(
        goldType
    ) {

        const goldTypeLabel =
            this.calculatorContainer.getByText(
                goldType,
                {
                    exact: true
                }
            );


        await expect(
            goldTypeLabel
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY GOLD TABLE
    // =============================================================

    async verifyGoldTable() {

        await expect(
            this.calculatorGoldSection
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.gold24KLabel
        ).toBeVisible();


        await expect(
            this.gold965Label
        ).toBeVisible();


        await expect(
            this.gold23KLabel
        ).toBeVisible();


        await expect(
            this.gold22KLabel
        ).toBeVisible();


        await expect(
            this.gold21KLabel
        ).toBeVisible();


        await expect(
            this.gold20KLabel
        ).toBeVisible();


        await expect(
            this.goldPaunLabel
        ).toBeVisible();


        await expect(
            this.gold18KLabel
        ).toBeVisible();


        await expect(
            this.gold14KLabel
        ).toBeVisible();


        await expect(
            this.gold9KLabel
        ).toBeVisible();
    }


    // =============================================================
    // VERIFY ZERO GOLD TOTAL
    // =============================================================

    async verifyZeroGoldTotal() {

        await expect(
            this.totalPureGoldLabel
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.totalPureGoldValue
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.totalPureGoldValue
        ).toHaveText(
            '0.00 g'
        );
    }


    // =============================================================
    // VERIFY BELOW NISAB MESSAGE
    // =============================================================

    async verifyBelowNisabMessage() {

        await expect(
            this.belowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // GET TOTAL PURE GOLD TEXT
    // =============================================================

    async getTotalPureGoldText() {

        await expect(
            this.totalPureGoldLabel
        ).toBeVisible({
            timeout: 15000
        });


        const container =
            this.totalPureGoldLabel.locator(
                '..'
            );


        return await container.innerText();
    }


    // =============================================================
    // CLICK NEXT
    // =============================================================

    async clickNext() {

        await expect(
            this.nextButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.nextButton
        ).toBeEnabled();


        await this.nextButton.click();
    }


    // =============================================================
    // CLICK PREVIOUS
    // =============================================================

    async clickPrevious() {

        await expect(
            this.previousButton
        ).toBeVisible({
            timeout: 15000
        });


        await expect(
            this.previousButton
        ).toBeEnabled();


        await this.previousButton.click();
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


        await expect(
            this.addToCartSuccessNotification
        ).toBeVisible({
            timeout: 15000
        });
    }

    // =============================================================
// VERIFY GOLD CALCULATION RESULT
// =============================================================

async verifyGoldCalculationResult() {

    await expect(
        this.goldOwnedResult
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.goldNisabResult
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.currentGoldPriceResult
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.totalGoldPriceLabel
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.zakatPaymentLabel
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.hideMetalHoldingCheckbox
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.previousButton
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
// VERIFY BELOW NISAB GOLD RESULT
// =============================================================

async verifyGoldBelowNisabResult() {

    const message =
        this.calculatorContainer.getByText(
            /Jumlah berat emas anda tidak mencapai amaun nisab.*Anda tidak dikenakan zakat/i
        );

    await expect(
        message
    ).toBeVisible({
        timeout: 15000
    });
}

// =============================================================
// VERIFY ZAKAT EMAS / PERAK ADDED TO CART
// =============================================================

async verifyZakatEmasPerakAddedToCart() {

    await expect(
        this.addToCartSuccessNotification
    ).toBeVisible({
        timeout: 15000
    });


    await expect(
        this.cartZakatEmasPerakItem
    ).toBeVisible({
        timeout: 15000
    });


    await expect(
        this.cartYear2026
    ).toBeVisible({
        timeout: 15000
    });


    await expect(
        this.paymentCartHeading
    ).toBeVisible({
        timeout: 15000
    });
}

// =============================================================
// GET CALCULATED ZAKAT AMOUNT
// =============================================================

async getCalculatedZakatAmount() {

    await expect(
        this.zakatPaymentLabel
    ).toBeVisible({
        timeout: 15000
    });

    const sectionText =
        await this.zakatPaymentSection.innerText();

    const match =
        sectionText.match(/RM\s*([\d,]+\.\d{2})/);

    if (!match) {
        throw new Error(
            `Unable to find calculated zakat amount. Text: ${sectionText}`
        );
    }

    return `RM ${match[1]}`;
}


// =============================================================
// VERIFY CART DETAILS AND TOTAL
// =============================================================

async verifyCartDetailsAndTotal(expectedAmount) {

    await expect(
        this.cartZakatEmasPerakItem
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.cartYear2026
    ).toBeVisible({
        timeout: 15000
    });


    // Amount may appear more than once:
    // item amount + cart total.
    const amountMatches =
        this.cartContainer.getByText(
            expectedAmount,
            {
                exact: true
            }
        );

    expect(
        await amountMatches.count()
    ).toBeGreaterThanOrEqual(1);


    // Verify at least one visible amount
    await expect(
        amountMatches.first()
    ).toBeVisible({
        timeout: 15000
    });


    // Verify payment button uses same amount
    const payButton =
        this.cartContainer.getByRole(
            'button',
            {
                name: `Bayar ${expectedAmount}`,
                exact: true
            }
        );

    await expect(
        payButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        payButton
    ).toBeEnabled();
}

// =============================================================
// REMOVE ZAKAT EMAS / PERAK FROM CART
// =============================================================

async removeZakatEmasPerakFromCart() {

    await expect(
        this.cartZakatEmasPerakItem
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
    ).toBeEnabled();


    await this.cartDeleteButton.click();


    // Vaadin may retain elements in the DOM,
    // therefore verify user-visible state instead of DOM count.
    await expect(
        this.cartZakatEmasPerakItem
    ).toBeHidden({
        timeout: 15000
    });
}

}


module.exports = {
    ZakatEmasPerakPage
};