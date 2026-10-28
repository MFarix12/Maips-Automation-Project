const { expect } = require('@playwright/test');


class ZakatPerniagaanPage {

    constructor(page) {

        this.page = page;


        // =========================================================
        // HOME PAGE
        // =========================================================

        this.kiraSekarangButton =
            page.getByRole(
                'link',
                {
                    name: 'Kira Sekarang'
                }
            ).nth(5);


        // =========================================================
        // MAIN ZAKAT PERNIAGAAN PAGE
        // =========================================================

        this.zakatPerniagaanHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Perniagaan',
                    {
                        exact: true
                    }
                );


        // =========================================================
        // MAIN TAHUN / HAUL
        // =========================================================

        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                })
                .first();

        this.mainHaulComboBox =
            this.haulFormItem.locator(
                'vaadin-combo-box'
            );

        this.mainHaulInput =
            this.haulFormItem.locator(
                'input'
            );


        // =========================================================
        // MAIN MANUAL PAYMENT
        // =========================================================

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

        this.mainAddToCartButton =
            page.getByRole(
                'button',
                {
                    name: 'Masuk Troli'
                }
            ).last();


        // =========================================================
        // PAYMENT CART
        // =========================================================

        this.cartContainer =
            page.locator(
                '#bakulBayaranFragment'
            );

        this.paymentCartHeading =
            page.getByRole(
                'heading',
                {
                    name: 'Bakul Bayaran'
                }
            );

        this.emptyCartMessage =
            this.cartContainer.getByText(
                'Rekod tidak ditemui',
                {
                    exact: false
                }
            );

        this.emptyCartTotal =
            this.cartContainer.getByText(
                'RM 0.00',
                {
                    exact: true
                }
            );

        this.emptyPaymentButton =
            this.cartContainer.getByRole(
                'button',
                {
                    name: 'Bayar',
                    exact: true
                }
            );


        // =========================================================
        // CART - ZAKAT PERNIAGAAN
        // =========================================================

        this.zakatPerniagaanCartItem =
            this.cartContainer.getByText(
                'Zakat Perniagaan',
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

        this.cartAmount1000 =
            this.cartContainer.getByText(
                'RM 1,000.00',
                {
                    exact: true
                }
            ).first();

        this.cartTotal1000 =
            this.cartContainer.getByText(
                'RM 1,000.00',
                {
                    exact: true
                }
            ).last();

        this.paymentButton1000 =
            this.cartContainer.getByRole(
                'button',
                {
                    name: 'Bayar RM 1,000.00',
                    exact: true
                }
            );


        // =========================================================
        // CART - RM 22,500 CALCULATED RESULT
        // =========================================================

        this.cartAmount22500 =
            this.cartContainer.getByText(
                'RM 22,500.00',
                {
                    exact: true
                }
            ).first();

        this.cartTotal22500 =
            this.cartContainer.getByText(
                'RM 22,500.00',
                {
                    exact: true
                }
            ).last();

        this.paymentButton22500 =
            this.cartContainer.getByRole(
                'button',
                {
                    name: 'Bayar RM 22,500.00',
                    exact: true
                }
            );


        // =========================================================
        // CART SUCCESS MESSAGE
        // =========================================================

        this.addToCartSuccessMessage =
            page.getByText(
                'Jumlah telah ditambah ke bakul bayaran',
                {
                    exact: false
                }
            );


        // =========================================================
        // CART DELETE BUTTON
        // =========================================================

        this.cartDeleteButton =
            this.cartContainer
                .locator('vaadin-button')
                .filter({
                    has: page.locator('vaadin-icon')
                })
                .last();


        // =========================================================
        // CALCULATOR
        // =========================================================

        this.calculatorContainer =
            page.locator(
                '#kalkulatorContentLayout'
            );

        this.calculatorTitle =
            page.getByText(
                'Kalkulator Zakat Perniagaan',
                {
                    exact: true
                }
            );


        // =========================================================
        // CALCULATOR TAHUN / HAUL
        // =========================================================

        this.calculatorHaulComboBox =
            this.calculatorContainer
                .locator('vaadin-combo-box')
                .first();

        this.calculatorHaulInput =
            this.calculatorHaulComboBox.locator(
                'input'
            );


        // =========================================================
        // CALCULATION METHODS
        // =========================================================

        this.untungRugiMethod =
            this.calculatorContainer.getByText(
                'Kaedah Pengiraan Untung Rugi',
                {
                    exact: true
                }
            );

        this.penyataKewanganMethod =
            this.calculatorContainer.getByText(
                'Kaedah Pengiraan Berdasarkan Penyata Kewangan/Kunci Kira-Kira',
                {
                    exact: true
                }
            );


        // =========================================================
        // UNTUNG RUGI FIELDS
        // =========================================================

        this.hasilJualanField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Hasil Jualan Perniagaan (',
                    exact: false
                }
            );

        this.perbelanjaanKosField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Perbelanjaan/Kos',
                    exact: true
                }
            );


        // =========================================================
        // UNTUNG RUGI RESULT
        // =========================================================

        this.keuntunganBersihLabel =
            this.calculatorContainer.getByText(
                'Keuntungan Bersih',
                {
                    exact: true
                }
            ).last();

        this.untungRugiFormula =
            this.calculatorContainer.getByText(
                'Keuntungan Bersih = Hasil Jualan Perniagaan - Perbelanjaan/Kos',
                {
                    exact: false
                }
            );

        this.nisabLabel =
            this.calculatorContainer
                .getByText(
                    /Amaun Nisab Tahun/i
                )
                .first();

        this.hasilJualanResultLabel =
            this.calculatorContainer.getByText(
                'Hasil Jualan Perniagaan',
                {
                    exact: true
                }
            ).last();

        this.perbelanjaanKosResultLabel =
            this.calculatorContainer.getByText(
                'Perbelanjaan/Kos',
                {
                    exact: true
                }
            ).last();

        this.zakatResultLabel =
            this.calculatorContainer.getByText(
                'Jumlah Zakat yang Perlu Dibayar',
                {
                    exact: false
                }
            );

        this.calculatorAddToCartButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Masuk Troli',
                    exact: true
                }
            );

        this.untungRugiBelowNisabMessage =
            this.calculatorContainer.getByText(
                'Jumlah keuntungan bersih anda tidak mencapai amaun nisab tahun 2026',
                {
                    exact: false
                }
            );


        // =========================================================
        // TC013 - KEUNTUNGAN BERSIH AMOUNT
        // =========================================================

        this.keuntunganBersihAmount =
            this.calculatorContainer.getByText(
                'RM 900,000.00',
                {
                    exact: true
                }
            );


        // =========================================================
        // TC015 - ABOVE NISAB RESULT
        // =========================================================

        this.untungRugiAboveNisabResult =
            this.calculatorContainer.getByText(
                'Jumlah Zakat yang Perlu Dibayar',
                {
                    exact: false
                }
            );


        // =========================================================
        // PENYATA KEWANGAN - STEP 1 PELABURAN
        // =========================================================

        this.pelaburanHeading =
            this.calculatorContainer.getByText(
                'Pelaburan',
                {
                    exact: true
                }
            ).first();

        this.pelaburanField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Pelaburan',
                    exact: true
                }
            );

        this.jumlahPelaburanLabel =
            this.calculatorContainer.getByText(
                'Jumlah Pelaburan',
                {
                    exact: true
                }
            );


        // =========================================================
        // TC020 - DEFAULT JUMLAH PELABURAN AMOUNT
        // =========================================================

        this.jumlahPelaburanAmount =
            this.calculatorContainer.getByText(
                'RM 0.00',
                {
                    exact: true
                }
            ).last();


        // =========================================================
        // PENYATA NEXT BUTTON
        // =========================================================

        this.penyataNextButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Seterusnya',
                    exact: true
                }
            );


        // =========================================================
        // PENYATA KEWANGAN - STEP 2 ASET SEMASA
        // =========================================================

        this.simpananTetapField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Simpanan Tetap',
                    exact: true
                }
            );

        this.tunaiBankField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Tunai di Tangan dan di Bank',
                    exact: true
                }
            );

        this.pelbagaiPenghutangField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Pelbagai Penghutang dan',
                    exact: false
                }
            );

        this.akaunBelumTerimaField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Akaun Belum Terima (Trade',
                    exact: false
                }
            );

        this.cukaiBolehPulihField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Cukai Boleh Pulih',
                    exact: true
                }
            );

        this.pelaburanJangkaPendekField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Pelaburan Jangka Pendek',
                    exact: true
                }
            );

        this.asetLainLainField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Lain-lain (jika ada)',
                    exact: true
                }
            ).first();

        this.jumlahAsetSemasaLabel =
            this.calculatorContainer.getByText(
                'Jumlah Aset Semasa',
                {
                    exact: true
                }
            );


        // =========================================================
        // PENYATA KEWANGAN - STEP 3 LIABILITI SEMASA
        // =========================================================

        this.akaunBelumBayarField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Akaun Belum Bayar (Other',
                    exact: false
                }
            );

        this.pinjamanJangkaPendekField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Pinjaman Jangka Pendek',
                    exact: true
                }
            );

        this.cukaiGajiBelumBayarField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Cukai & Gaji Belum Bayar',
                    exact: true
                }
            );

        this.liabilitiLainLainField =
            this.calculatorContainer.getByRole(
                'textbox',
                {
                    name: 'Lain-lain (jika ada)',
                    exact: true
                }
            ).last();

        this.jumlahLiabilitiSemasaLabel =
            this.calculatorContainer.getByText(
                'Jumlah Liabiliti Semasa',
                {
                    exact: true
                }
            );


        // =========================================================
        // PENYATA KEWANGAN - PENGIRAAN
        // =========================================================
        //
        // IMPORTANT:
        //
        // exact:true is required.
        //
        // Without exact:true, Playwright also matches:
        //
        // "Jumlah Aset Bersih = (...)"
        //
        // and:
        //
        // "Jumlah aset bersih anda tidak mencapai..."
        //
        // causing strict-mode violations in TC028-TC033.
        //
        // =========================================================

        this.jumlahAsetBersihLabel =
            this.calculatorContainer.getByText(
                'Jumlah Aset Bersih',
                {
                    exact: true
                }
            );

        this.penyataKewanganBelowNisabMessage =
            this.calculatorContainer.getByText(
                'Jumlah aset bersih anda tidak mencapai amaun nisab tahun 2026',
                {
                    exact: false
                }
            );

        this.penyataKewanganZakatResult =
            this.calculatorContainer.getByText(
                'Jumlah Zakat yang Perlu Dibayar',
                {
                    exact: false
                }
            );


        // =========================================================
        // PENYATA KEWANGAN - BACK NAVIGATION
        // =========================================================

        this.penyataBackButton =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Sebelum',
                    exact: true
                }
            );


        // =========================================================
        // APPLICATION ERROR
        // =========================================================

        this.unexpectedErrorMessage =
            page.getByText(
                'An Unexpected Error Occurred!',
                {
                    exact: true
                }
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
    // OPEN ZAKAT PERNIAGAAN
    // =============================================================

    async openZakatPerniagaan() {

        await expect(
            this.kiraSekarangButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.kiraSekarangButton
        ).toBeEnabled();

        await this.kiraSekarangButton.click();

        await expect(
            this.zakatPerniagaanHeading
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY ZAKAT PERNIAGAAN PAGE
    // =============================================================

    async verifyZakatPerniagaanPage() {

        await expect(
            this.zakatPerniagaanHeading
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.mainHaulComboBox
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.mainAddToCartButton
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
    // VERIFY MAIN HAUL YEAR
    // =============================================================

    async verifyMainHaulYear(year) {

        await expect(
            this.mainHaulInput
        ).toHaveValue(
            String(year),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // SELECT MAIN HAUL YEAR
    // =============================================================

    async selectMainHaulYear(year) {

        await expect(
            this.mainHaulComboBox
        ).toBeVisible({
            timeout: 15000
        });

        await this.mainHaulComboBox.click();

        const yearOption =
            this.page.getByRole(
                'option',
                {
                    name: String(year),
                    exact: true
                }
            );

        if (
            await yearOption
                .isVisible()
                .catch(() => false)
        ) {

            await yearOption.click();

        } else {

            await this.mainHaulInput.fill(
                String(year)
            );

            await this.mainHaulInput.press(
                'Enter'
            );
        }

        await this.verifyMainHaulYear(
            year
        );
    }


    // =============================================================
    // VERIFY MAIN HAUL YEAR OPTION
    // =============================================================

    async verifyMainHaulYearOption(year) {

        await this.mainHaulComboBox.click();

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

        await this.page.keyboard.press(
            'Escape'
        );
    }


    // =============================================================
    // ENTER MANUAL AMOUNT
    // =============================================================

    async enterManualAmount(amount) {

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

        await this.manualAmountField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY MANUAL AMOUNT
    // =============================================================

    async verifyManualAmount(expectedAmount) {

        await expect(
            this.manualAmountField
        ).toHaveValue(
            String(expectedAmount),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // CLEAR MANUAL AMOUNT
    // =============================================================

    async clearManualAmount() {

        await expect(
            this.manualAmountField
        ).toBeVisible({
            timeout: 15000
        });

        await this.manualAmountField.fill('');

        await this.manualAmountField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY EMPTY CART
    // =============================================================

    async verifyEmptyCart() {

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
            'RM 0.00',
            {
                timeout: 15000
            }
        );

        await expect(
            this.emptyPaymentButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.emptyPaymentButton
        ).toBeDisabled({
            timeout: 15000
        });
    }


    // =============================================================
    // ADD MANUAL ZAKAT TO CART
    // =============================================================

    async addManualZakatToCart() {

        await expect(
            this.mainAddToCartButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.mainAddToCartButton
        ).toBeEnabled();

        await this.mainAddToCartButton.click();

        await expect(
            this.zakatPerniagaanCartItem
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY MANUAL ZAKAT CART ITEM
    // =============================================================

    async verifyManualZakatCartItem() {

        await expect(
            this.zakatPerniagaanCartItem
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartYear2026
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartAmount1000
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartTotal1000
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.paymentButton1000
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.paymentButton1000
        ).toBeEnabled();
    }


    // =============================================================
    // REMOVE ZAKAT PERNIAGAAN FROM CART
    // =============================================================

    async removeZakatPerniagaanFromCart() {

        await expect(
            this.zakatPerniagaanCartItem
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
            this.calculatorTitle
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
            this.calculatorTitle
        ).toHaveText(
            'Kalkulator Zakat Perniagaan'
        );
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

        await expect(
            this.calculatorHaulComboBox
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.untungRugiMethod
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataKewanganMethod
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.hasilJualanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.perbelanjaanKosField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // SELECT CALCULATOR HAUL YEAR
    // =============================================================

    async selectCalculatorHaulYear(year) {

        await expect(
            this.calculatorHaulComboBox
        ).toBeVisible({
            timeout: 15000
        });

        await this.calculatorHaulComboBox.click();

        const yearOption =
            this.page.getByRole(
                'option',
                {
                    name: String(year),
                    exact: true
                }
            );

        if (
            await yearOption
                .isVisible()
                .catch(() => false)
        ) {

            await yearOption.click();

        } else {

            await this.calculatorHaulInput.fill(
                String(year)
            );

            await this.calculatorHaulInput.press(
                'Enter'
            );
        }

        await this.verifyCalculatorHaulYear(
            year
        );
    }


    // =============================================================
    // VERIFY CALCULATOR HAUL YEAR
    // =============================================================

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
    // VERIFY UNTUNG RUGI DEFAULT METHOD
    // =============================================================

    async verifyUntungRugiDefaultMethod() {

        await expect(
            this.untungRugiMethod
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.hasilJualanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.perbelanjaanKosField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.untungRugiFormula
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // ENTER HASIL JUALAN
    // =============================================================

    async enterHasilJualan(amount) {

        await expect(
            this.hasilJualanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.hasilJualanField
        ).toBeEnabled();

        await this.hasilJualanField.fill(
            String(amount)
        );

        await this.hasilJualanField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY HASIL JUALAN
    // =============================================================

    async verifyHasilJualan(amount) {

        await expect(
            this.hasilJualanField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // ENTER PERBELANJAAN / KOS
    // =============================================================

    async enterPerbelanjaanKos(amount) {

        await expect(
            this.perbelanjaanKosField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.perbelanjaanKosField
        ).toBeEnabled();

        await this.perbelanjaanKosField.fill(
            String(amount)
        );

        await this.perbelanjaanKosField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY PERBELANJAAN / KOS
    // =============================================================

    async verifyPerbelanjaanKos(amount) {

        await expect(
            this.perbelanjaanKosField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY KEUNTUNGAN BERSIH
    // =============================================================

    async verifyKeuntunganBersih(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        const result =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            result
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY UNTUNG RUGI BELOW NISAB
    // =============================================================

    async verifyUntungRugiBelowNisab() {

        await expect(
            this.untungRugiBelowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.untungRugiBelowNisabMessage
        ).toContainText(
            'Anda tidak dikenakan zakat',
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY UNTUNG RUGI ABOVE NISAB
    // =============================================================

    async verifyUntungRugiAboveNisab() {

        await expect(
            this.untungRugiBelowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });

        await expect(
            this.untungRugiAboveNisabResult
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY UNTUNG RUGI ZAKAT AMOUNT
    // =============================================================

    async verifyUntungRugiZakatAmount(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        const zakatAmount =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            zakatAmount
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // ADD CALCULATED ZAKAT TO CART
    // =============================================================

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
    }


    // =============================================================
    // VERIFY UNTUNG RUGI CART ITEM
    // =============================================================

    async verifyUntungRugiZakatCartItem() {

        await expect(
            this.zakatPerniagaanCartItem
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartYear2026
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartAmount22500
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cartTotal22500
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.paymentButton22500
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.paymentButton22500
        ).toBeEnabled();
    }


    // =============================================================
    // SELECT PENYATA KEWANGAN METHOD
    // =============================================================

    async selectPenyataKewanganMethod() {

        await expect(
            this.penyataKewanganMethod
        ).toBeVisible({
            timeout: 15000
        });

        await this.penyataKewanganMethod.click();

        await expect(
            this.pelaburanHeading
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY PENYATA KEWANGAN METHOD
    // =============================================================

    async verifyPenyataKewanganMethod() {

        await expect(
            this.pelaburanHeading
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahPelaburanLabel
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataNextButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY PELABURAN DEFAULT STATE
    // =============================================================

    async verifyPelaburanDefaultState() {

        await expect(
            this.pelaburanHeading
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahPelaburanLabel
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahPelaburanAmount
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahPelaburanAmount
        ).toHaveText(
            'RM 0.00',
            {
                timeout: 15000
            }
        );

        await expect(
            this.penyataNextButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // ENTER PELABURAN
    // =============================================================

    async enterPelaburan(amount) {

        await expect(
            this.pelaburanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanField
        ).toBeEnabled();

        await this.pelaburanField.click();

        await this.pelaburanField.fill(
            String(amount)
        );

        await this.pelaburanField.press(
            'Tab'
        );

        await expect(
            this.pelaburanField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY PELABURAN
    // =============================================================

    async verifyPelaburan(amount) {

        await expect(
            this.pelaburanField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanField
        ).toHaveValue(
            String(amount),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY JUMLAH PELABURAN
    // =============================================================

    async verifyJumlahPelaburan(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        const jumlahPelaburanAmount =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            this.jumlahPelaburanLabel
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            jumlahPelaburanAmount
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // NAVIGATE TO ASET SEMASA
    // =============================================================

    async navigateToAsetSemasa() {

        await expect(
            this.penyataNextButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataNextButton
        ).toBeEnabled();

        await this.penyataNextButton.click();

        await expect(
            this.simpananTetapField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.tunaiBankField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY ASET SEMASA STEP
    // =============================================================

    async verifyAsetSemasaStep() {

        await expect(
            this.simpananTetapField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.tunaiBankField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelbagaiPenghutangField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.akaunBelumTerimaField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cukaiBolehPulihField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pelaburanJangkaPendekField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.asetLainLainField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahAsetSemasaLabel
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // ENTER ASET SEMASA DETAILS
    // =============================================================

    async enterAsetSemasaDetails(data) {

        await expect(
            this.simpananTetapField
        ).toBeVisible({
            timeout: 15000
        });

        await this.simpananTetapField.fill(
            String(data.simpananTetap)
        );

        await this.tunaiBankField.fill(
            String(data.tunaiBank)
        );

        await this.pelbagaiPenghutangField.fill(
            String(data.pelbagaiPenghutang)
        );

        await this.akaunBelumTerimaField.fill(
            String(data.akaunBelumTerima)
        );

        await this.cukaiBolehPulihField.fill(
            String(data.cukaiBolehPulih)
        );

        await this.pelaburanJangkaPendekField.fill(
            String(data.pelaburanJangkaPendek)
        );

        await this.asetLainLainField.fill(
            String(data.lainLain)
        );

        await this.asetLainLainField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY ASET SEMASA DETAILS
    // =============================================================

    async verifyAsetSemasaDetails(data) {

        await expect(
            this.simpananTetapField
        ).toHaveValue(
            String(data.simpananTetap),
            {
                timeout: 15000
            }
        );

        await expect(
            this.tunaiBankField
        ).toHaveValue(
            String(data.tunaiBank),
            {
                timeout: 15000
            }
        );

        await expect(
            this.pelbagaiPenghutangField
        ).toHaveValue(
            String(data.pelbagaiPenghutang),
            {
                timeout: 15000
            }
        );

        await expect(
            this.akaunBelumTerimaField
        ).toHaveValue(
            String(data.akaunBelumTerima),
            {
                timeout: 15000
            }
        );

        await expect(
            this.cukaiBolehPulihField
        ).toHaveValue(
            String(data.cukaiBolehPulih),
            {
                timeout: 15000
            }
        );

        await expect(
            this.pelaburanJangkaPendekField
        ).toHaveValue(
            String(data.pelaburanJangkaPendek),
            {
                timeout: 15000
            }
        );

        await expect(
            this.asetLainLainField
        ).toHaveValue(
            String(data.lainLain),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY JUMLAH ASET SEMASA
    // =============================================================

    async verifyJumlahAsetSemasa(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        const jumlahAsetSemasaAmount =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            this.jumlahAsetSemasaLabel
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            jumlahAsetSemasaAmount
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            jumlahAsetSemasaAmount
        ).toHaveText(
            expectedText,
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // NAVIGATE TO LIABILITI SEMASA
    // =============================================================

    async navigateToLiabilitiSemasa() {

        await expect(
            this.penyataNextButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataNextButton
        ).toBeEnabled();

        await this.penyataNextButton.click();

        await expect(
            this.akaunBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pinjamanJangkaPendekField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY LIABILITI SEMASA STEP
    // =============================================================

    async verifyLiabilitiSemasaStep() {

        await expect(
            this.akaunBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pinjamanJangkaPendekField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cukaiGajiBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.liabilitiLainLainField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahLiabilitiSemasaLabel
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // ENTER LIABILITI SEMASA DETAILS
    // =============================================================

    async enterLiabilitiSemasaDetails(data) {

        await expect(
            this.akaunBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.akaunBelumBayarField
        ).toBeEnabled();

        await this.akaunBelumBayarField.fill(
            String(data.akaunBelumBayar)
        );

        await this.pinjamanJangkaPendekField.fill(
            String(data.pinjamanJangkaPendek)
        );

        await this.cukaiGajiBelumBayarField.fill(
            String(data.cukaiGajiBelumBayar)
        );

        await this.liabilitiLainLainField.fill(
            String(data.lainLain)
        );

        await this.liabilitiLainLainField.press(
            'Tab'
        );
    }


    // =============================================================
    // VERIFY LIABILITI SEMASA DETAILS
    // =============================================================

    async verifyLiabilitiSemasaDetails(data) {

        await expect(
            this.akaunBelumBayarField
        ).toHaveValue(
            String(data.akaunBelumBayar),
            {
                timeout: 15000
            }
        );

        await expect(
            this.pinjamanJangkaPendekField
        ).toHaveValue(
            String(data.pinjamanJangkaPendek),
            {
                timeout: 15000
            }
        );

        await expect(
            this.cukaiGajiBelumBayarField
        ).toHaveValue(
            String(data.cukaiGajiBelumBayar),
            {
                timeout: 15000
            }
        );

        await expect(
            this.liabilitiLainLainField
        ).toHaveValue(
            String(data.lainLain),
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY JUMLAH LIABILITI SEMASA
    // =============================================================

    async verifyJumlahLiabilitiSemasa(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        await expect(
            this.jumlahLiabilitiSemasaLabel
        ).toBeVisible({
            timeout: 15000
        });


        // =========================================================
        // TARGET SUMMARY CARD AMOUNT
        // =========================================================
        //
        // The same amount may also exist inside the result table.
        // The summary value is rendered as an h4 heading.
        //
        // =========================================================

        const jumlahLiabilitiSemasaAmount =
            this.calculatorContainer.locator(
                'h4'
            ).filter({
                hasText: expectedText
            });

        await expect(
            jumlahLiabilitiSemasaAmount
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            jumlahLiabilitiSemasaAmount
        ).toHaveText(
            expectedText,
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // NAVIGATE TO PENYATA KEWANGAN RESULT / PENGIRAAN
    // =============================================================

    async navigateToPenyataKewanganResult() {

        await expect(
            this.penyataNextButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataNextButton
        ).toBeEnabled();

        await this.penyataNextButton.click();

        await expect(
            this.jumlahAsetBersihLabel
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // VERIFY JUMLAH ASET BERSIH
    // =============================================================

    async verifyJumlahAsetBersih(expectedAmount) {

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        await expect(
            this.jumlahAsetBersihLabel
        ).toBeVisible({
            timeout: 15000
        });

        const jumlahAsetBersihAmount =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            jumlahAsetBersihAmount
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            jumlahAsetBersihAmount
        ).toHaveText(
            expectedText,
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY PENYATA KEWANGAN BELOW NISAB
    // =============================================================

    async verifyPenyataKewanganBelowNisab() {

        await expect(
            this.penyataKewanganBelowNisabMessage
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.penyataKewanganBelowNisabMessage
        ).toContainText(
            'Jumlah aset bersih anda tidak mencapai amaun nisab tahun 2026',
            {
                timeout: 15000
            }
        );

        await expect(
            this.penyataKewanganBelowNisabMessage
        ).toContainText(
            'Anda tidak dikenakan zakat',
            {
                timeout: 15000
            }
        );
    }


    // =============================================================
    // VERIFY PENYATA KEWANGAN ABOVE NISAB
    // =============================================================

    async verifyPenyataKewanganAboveNisab() {

        await expect(
            this.penyataKewanganBelowNisabMessage
        ).toBeHidden({
            timeout: 15000
        });

        await expect(
            this.jumlahAsetBersihLabel
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // PROCEED TO FINAL PENYATA KEWANGAN RESULT
    // =============================================================

    async proceedToFinalPenyataKewanganResult() {

        const nextButtons =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Seterusnya',
                    exact: true
                }
            );

        const count =
            await nextButtons.count();

        for (
            let index = 0;
            index < count;
            index++
        ) {

            const button =
                nextButtons.nth(index);

            if (
                await button
                    .isVisible()
                    .catch(() => false)
            ) {

                await expect(
                    button
                ).toBeEnabled();

                await button.click();

                return;
            }
        }

        throw new Error(
            'Visible Seterusnya button was not found ' +
            'in the Zakat Perniagaan Penyata Kewangan calculator.'
        );
    }


    // =============================================================
    // VERIFY FINAL PENYATA KEWANGAN RESULT
    // =============================================================

    async verifyFinalPenyataKewanganResult(expectedAmount) {

        const systemErrorVisible =
            await this.unexpectedErrorMessage
                .isVisible()
                .catch(() => false);

        if (systemErrorVisible) {

            throw new Error(
                'APPLICATION DEFECT: Zakat Perniagaan Penyata Kewangan ' +
                'cannot proceed from the Jumlah Aset Bersih step to the ' +
                'final Zakat result. MAIPs displays ' +
                '"An Unexpected Error Occurred!" after clicking Seterusnya.'
            );
        }

        await expect(
            this.penyataKewanganZakatResult
        ).toBeVisible({
            timeout: 15000
        });

        const formattedAmount =
            Number(expectedAmount).toLocaleString(
                'en-US',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

        const expectedText =
            `RM ${formattedAmount}`;

        const zakatAmount =
            this.calculatorContainer.getByText(
                expectedText,
                {
                    exact: true
                }
            );

        await expect(
            zakatAmount
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =============================================================
    // NAVIGATE BACK IN PENYATA KEWANGAN
    // =============================================================

    async navigateBackPenyataKewangan() {

        const backButtons =
            this.calculatorContainer.getByRole(
                'button',
                {
                    name: 'Sebelum',
                    exact: true
                }
            );

        const count =
            await backButtons.count();

        for (
            let index = 0;
            index < count;
            index++
        ) {

            const button =
                backButtons.nth(index);

            if (
                await button
                    .isVisible()
                    .catch(() => false)
            ) {

                await expect(
                    button
                ).toBeEnabled();

                await button.click();

                await expect(
                    this.akaunBelumBayarField
                ).toBeVisible({
                    timeout: 15000
                });

                return;
            }
        }

        throw new Error(
            'Visible Sebelum button was not found ' +
            'in the Zakat Perniagaan Penyata Kewangan calculator.'
        );
    }


    // =============================================================
    // VERIFY RETURNED TO LIABILITI SEMASA
    // =============================================================

    async verifyReturnedToLiabilitiSemasa() {

        await expect(
            this.akaunBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.pinjamanJangkaPendekField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.cukaiGajiBelumBayarField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.liabilitiLainLainField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.jumlahLiabilitiSemasaLabel
        ).toBeVisible({
            timeout: 15000
        });
    }
}


module.exports = {
    ZakatPerniagaanPage
};