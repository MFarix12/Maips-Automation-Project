const { expect } = require('@playwright/test');

class ZakatPendapatanPage {

    constructor(page) {

        this.page = page;


        // =====================================================
        // ZAKAT PENDAPATAN PAGE
        // =====================================================

        this.zakatPendapatanCalculateButton =
            page.getByRole(
                'link',
                { name: 'Kira Sekarang' }
            ).first();

        this.zakatPendapatanHeading =
            page.locator('vaadin-form-layout')
                .getByText(
                    'Zakat Pendapatan',
                    { exact: true }
                );


        // =====================================================
        // CALCULATOR
        // =====================================================

        this.openCalculatorButton =
            page.getByRole(
                'button',
                { name: 'Buka Kalkulator' }
            );

        this.calculatorContainer =
            page.locator(
                '#kalkulatorContentLayout'
            );

        this.closeCalculatorButton =
            page.locator(
                '.w-full.p-s > vaadin-button'
            );


        // =====================================================
        // PAYMENT CART
        // =====================================================

        this.paymentCartHeading =
            page.getByRole(
                'heading',
                { name: 'Bakul Bayaran' }
            );

        this.emptyCartMessage =
            page.getByText(
                /bakul.*kosong/i
            );

        this.payButton =
            page.getByRole(
                'button',
                { name: /Bayar RM/i }
            );

        this.addToCartButton =
            this.calculatorContainer
                .getByRole(
                    'button',
                    { name: 'Masuk Troli' }
                );


        // =====================================================
        // ADD TO CART SUCCESS NOTIFICATION
        // =====================================================

        this.addToCartSuccessNotification =
            page.getByText(
                /Jumlah telah ditambah ke bakul bayaran/i
            );


        // =====================================================
// CART - ZAKAT PENDAPATAN
// =====================================================

this.cartZakatPendapatanItem =
    page.getByText(
        'Zakat Pendapatan',
        { exact: true }
    );

this.cartYear2026 =
    page.getByText(
        '2026',
        { exact: true }
    );

this.cartAmount11062 =
    page.getByText(
        'RM 110.62',
        { exact: true }
    );

this.cartPayButton =
    page.getByRole(
        'button',
        { name: 'Bayar RM 110.62' }
    );


        // =====================================================
        // MANUAL ZAKAT PAYMENT
        // =====================================================

        this.haulFormItem =
            page.locator('vaadin-form-item')
                .filter({
                    hasText: 'Tahun/Haul'
                });

        this.haulToggleButton =
            this.haulFormItem
                .locator('#toggleButton');

        this.manualZakatAmountField =
            page.getByRole(
                'textbox',
                { name: 'Jumlah Bayaran' }
            );


        // =====================================================
        // STEP 1 - INCOME INFORMATION
        // =====================================================

        /*
         * IMPORTANT:
         *
         * Vaadin dynamically changes the ID of the monthly
         * income field.
         *
         * Example:
         *
         * Initial:
         * input-vaadin-big-decimal-field-40
         *
         * After returning to Step 1:
         * input-vaadin-big-decimal-field-167
         *
         * Therefore:
         * - use stable ID prefix
         * - scope inside calculator
         *
         * This prevents Playwright from accidentally filling
         * the main "Jumlah Bayaran" field.
         */
        this.monthlyIncomeField =
            this.calculatorContainer
                .locator(
                    '[id^="input-vaadin-big-decimal-field-"]'
                )
                .first();

        this.bonusField =
            page.getByRole(
                'textbox',
                { name: 'Bonus' }
            );

        this.otherIncomeField =
            page.getByRole(
                'textbox',
                { name: 'Pendapatan Lain' }
            );


        // =====================================================
        // MONTHLY / ANNUAL MODE
        // =====================================================

        this.annualModeButton =
            page.locator(
                '.flex-1.gap-xs.items-center.justify-center.p-s.rounded-l.pointer.gray-card-bg'
            );

        this.annualIncomeField =
            page.getByRole(
                'textbox',
                { name: 'Pendapatan Tahunan' }
            );


        // =====================================================
        // NAVIGATION
        // =====================================================

        this.nextButton =
            page.getByRole(
                'button',
                { name: 'Seterusnya' }
            );

        this.previousButton =
            this.calculatorContainer
                .getByRole(
                    'button',
                    { name: 'Sebelum' }
                );


        // =====================================================
        // STEP 2 - EXPENSE INFORMATION
        // =====================================================

        this.personalExpenseField =
            page.getByRole(
                'textbox',
                { name: 'Jumlah Perbelanjaan Diri' }
            );

        this.spouseCountField =
            page.getByRole(
                'spinbutton',
                { name: 'Bilangan Isteri' }
            );

        this.childExpenseField =
            page.getByRole(
                'textbox',
                { name: 'Perbelanjaan untuk Anak' }
            );

        this.parentExpenseField =
            page.getByRole(
                'textbox',
                { name: 'Perbelanjaan untuk Ibu Bapa' }
            );

        this.medicalExpenseField =
            page.getByRole(
                'textbox',
                { name: 'Perbelanjaan untuk Perubatan' }
            );

        this.vehicleDebtField =
            page.getByRole(
                'textbox',
                { name: 'Hutang Kenderaan' }
            );

        this.houseDebtField =
            page.getByRole(
                'textbox',
                { name: 'Hutang Rumah' }
            );

        this.kwspDeductionField =
            page.getByRole(
                'textbox',
                { name: 'Amaun Potongan KWSP' }
            );

        this.educationLoanField =
            page.getByRole(
                'textbox',
                { name: 'Pinjaman Pelajaran' }
            );

        this.tabungHajiContributionField =
            page.getByRole(
                'textbox',
                { name: 'Caruman Tabung Haji' }
            );

            // =====================================================
// REMOVE ITEM FROM CART
// =====================================================

this.cartDeleteButton =
    page.locator(
        'vaadin-grid-cell-content:nth-child(19) > vaadin-horizontal-layout > vaadin-button'
    );

this.emptyCartRecordMessage =
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
    // OPEN ZAKAT PENDAPATAN
    // =========================================================

    async openZakatPendapatan() {

        await expect(
            this.zakatPendapatanCalculateButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.zakatPendapatanCalculateButton.click();

        await this.page.waitForLoadState(
            'domcontentloaded'
        );
    }


    // =========================================================
    // VERIFY ZAKAT PENDAPATAN PAGE
    // =========================================================

    async verifyZakatPendapatanPage() {

        await expect(
            this.zakatPendapatanHeading
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.openCalculatorButton
        ).toBeVisible();
    }


    // =========================================================
    // VERIFY DEFAULT STATE
    // =========================================================

    async verifyDefaultState() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible();

        await expect(
            this.paymentCartHeading
        ).toBeVisible();

        await expect(
            this.addToCartButton
        ).toHaveCount(0);
    }


    // =========================================================
    // OPEN INCOME CALCULATOR
    // =========================================================

    async openIncomeCalculator() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.openCalculatorButton.click();

        await expect(
            this.calculatorContainer
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // CLOSE CALCULATOR
    // =========================================================

    async closeCalculator() {

        await expect(
            this.closeCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.closeCalculatorButton
        ).toBeEnabled();

        await this.closeCalculatorButton.click();

        /*
         * MAIPS keeps calculator-related DOM mounted.
         * Do not assert calculatorContainer is removed.
         */
        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // VERIFY CALCULATOR STEP 1
    // =========================================================

    async verifyCalculatorStep1() {

        await expect(
            this.monthlyIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.bonusField
        ).toBeVisible();

        await expect(
            this.otherIncomeField
        ).toBeVisible();

        await expect(
            this.nextButton
        ).toBeVisible();
    }


    // =========================================================
    // ENTER MONTHLY INCOME
    // =========================================================

    async enterMonthlyIncome(amount) {

        await expect(
            this.monthlyIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.monthlyIncomeField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER BONUS
    // =========================================================

    async enterBonus(amount) {

        await expect(
            this.bonusField
        ).toBeVisible({
            timeout: 15000
        });

        await this.bonusField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER OTHER INCOME
    // =========================================================

    async enterOtherIncome(amount) {

        await expect(
            this.otherIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.otherIncomeField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER MONTHLY INCOME INFORMATION
    // =========================================================

    async enterIncomeInformation(
        monthlyIncome,
        bonus = 0,
        otherIncome = 0
    ) {

        await this.enterMonthlyIncome(
            monthlyIncome
        );

        await this.enterBonus(
            bonus
        );

        await this.enterOtherIncome(
            otherIncome
        );
    }


    // =========================================================
    // VERIFY MONTHLY INCOME VALUES
    // =========================================================

    async verifyIncomeValues(
        monthlyIncome,
        bonus,
        otherIncome
    ) {

        await expect(
            this.monthlyIncomeField
        ).toHaveValue(
            String(monthlyIncome)
        );

        await expect(
            this.bonusField
        ).toHaveValue(
            String(bonus)
        );

        await expect(
            this.otherIncomeField
        ).toHaveValue(
            String(otherIncome)
        );
    }


    // =========================================================
    // SELECT ANNUAL MODE
    // =========================================================

    async selectAnnualMode() {

        await expect(
            this.annualModeButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.annualModeButton.click();

        await expect(
            this.annualIncomeField
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // ENTER ANNUAL INCOME
    // =========================================================

    async enterAnnualIncome(amount) {

        await expect(
            this.annualIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.annualIncomeField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER ANNUAL INCOME INFORMATION
    // =========================================================

    async enterAnnualIncomeInformation(
        annualIncome,
        bonus = 0,
        otherIncome = 0
    ) {

        await this.enterAnnualIncome(
            annualIncome
        );

        await this.enterBonus(
            bonus
        );

        await this.enterOtherIncome(
            otherIncome
        );
    }


    // =========================================================
    // VERIFY ANNUAL INCOME VALUES
    // =========================================================

    async verifyAnnualIncomeValues(
        annualIncome,
        bonus,
        otherIncome
    ) {

        await expect(
            this.annualIncomeField
        ).toHaveValue(
            String(annualIncome)
        );

        await expect(
            this.bonusField
        ).toHaveValue(
            String(bonus)
        );

        await expect(
            this.otherIncomeField
        ).toHaveValue(
            String(otherIncome)
        );
    }


    // =========================================================
    // CLICK NEXT
    // =========================================================

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


    // =========================================================
    // CLICK PREVIOUS
    // =========================================================

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


    // =========================================================
    // VERIFY RETURNED TO INCOME STEP
    // =========================================================

    async verifyReturnedToIncomeStep() {

        await expect(
            this.bonusField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.otherIncomeField
        ).toBeVisible();

        await expect(
            this.nextButton
        ).toBeVisible();

        await expect(
            this.monthlyIncomeField
        ).toBeVisible();
    }


    // =========================================================
    // VERIFY CALCULATOR STEP 2
    // =========================================================

    async verifyCalculatorStep2() {

        await expect(
            this.personalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.spouseCountField
        ).toBeVisible();

        await expect(
            this.childExpenseField
        ).toBeVisible();

        await expect(
            this.parentExpenseField
        ).toBeVisible();

        await expect(
            this.nextButton
        ).toBeVisible();
    }


    // =========================================================
    // ENTER PERSONAL EXPENSE
    // =========================================================

    async enterPersonalExpense(amount) {

        await expect(
            this.personalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.personalExpenseField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER SPOUSE COUNT
    // =========================================================

    async enterSpouseCount(count) {

        await expect(
            this.spouseCountField
        ).toBeVisible({
            timeout: 15000
        });

        await this.spouseCountField.fill(
            String(count)
        );
    }


    // =========================================================
    // ENTER CHILD EXPENSE
    // =========================================================

    async enterChildExpense(amount) {

        await expect(
            this.childExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.childExpenseField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER PARENT EXPENSE
    // =========================================================

    async enterParentExpense(amount) {

        await expect(
            this.parentExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.parentExpenseField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER MEDICAL EXPENSE
    // =========================================================

    async enterMedicalExpense(amount) {

        await expect(
            this.medicalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.medicalExpenseField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER VEHICLE DEBT
    // =========================================================

    async enterVehicleDebt(amount) {

        await expect(
            this.vehicleDebtField
        ).toBeVisible({
            timeout: 15000
        });

        await this.vehicleDebtField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER HOUSE DEBT
    // =========================================================

    async enterHouseDebt(amount) {

        await expect(
            this.houseDebtField
        ).toBeVisible({
            timeout: 15000
        });

        await this.houseDebtField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER KWSP DEDUCTION
    // =========================================================

    async enterKWSPDeduction(amount) {

        await expect(
            this.kwspDeductionField
        ).toBeVisible({
            timeout: 15000
        });

        await this.kwspDeductionField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER EDUCATION LOAN
    // =========================================================

    async enterEducationLoan(amount) {

        await expect(
            this.educationLoanField
        ).toBeVisible({
            timeout: 15000
        });

        await this.educationLoanField.fill(
            String(amount)
        );
    }


    // =========================================================
    // ENTER TABUNG HAJI CONTRIBUTION
    // =========================================================

    async enterTabungHajiContribution(amount) {

        await expect(
            this.tabungHajiContributionField
        ).toBeVisible({
            timeout: 15000
        });

        await this.tabungHajiContributionField.fill(
            String(amount)
        );
    }


    // =========================================================
    // VERIFY PERSONAL EXPENSE
    // =========================================================

    async verifyPersonalExpense(amount) {

        await expect(
            this.personalExpenseField
        ).toHaveValue(
            String(amount)
        );
    }


    // =========================================================
    // VERIFY SPOUSE COUNT
    // =========================================================

    async verifySpouseCount(count) {

        await expect(
            this.spouseCountField
        ).toHaveValue(
            String(count)
        );
    }


    // =========================================================
    // ENTER MULTIPLE EXPENSES
    // =========================================================

    async enterMultipleExpenses(data) {

        if (data.personalExpense !== undefined) {
            await this.enterPersonalExpense(
                data.personalExpense
            );
        }

        if (data.spouseCount !== undefined) {
            await this.enterSpouseCount(
                data.spouseCount
            );
        }

        if (data.childExpense !== undefined) {
            await this.enterChildExpense(
                data.childExpense
            );
        }

        if (data.parentExpense !== undefined) {
            await this.enterParentExpense(
                data.parentExpense
            );
        }

        if (data.medicalExpense !== undefined) {
            await this.enterMedicalExpense(
                data.medicalExpense
            );
        }

        if (data.vehicleDebt !== undefined) {
            await this.enterVehicleDebt(
                data.vehicleDebt
            );
        }

        if (data.houseDebt !== undefined) {
            await this.enterHouseDebt(
                data.houseDebt
            );
        }

        if (data.kwspDeduction !== undefined) {
            await this.enterKWSPDeduction(
                data.kwspDeduction
            );
        }

        if (data.educationLoan !== undefined) {
            await this.enterEducationLoan(
                data.educationLoan
            );
        }

        if (data.tabungHajiContribution !== undefined) {
            await this.enterTabungHajiContribution(
                data.tabungHajiContribution
            );
        }
    }


    // =========================================================
    // VERIFY MULTIPLE EXPENSES
    // =========================================================

    async verifyMultipleExpenses(data) {

        if (data.personalExpense !== undefined) {

            await expect(
                this.personalExpenseField
            ).toHaveValue(
                String(data.personalExpense)
            );
        }

        if (data.spouseCount !== undefined) {

            await expect(
                this.spouseCountField
            ).toHaveValue(
                String(data.spouseCount)
            );
        }

        if (data.childExpense !== undefined) {

            await expect(
                this.childExpenseField
            ).toHaveValue(
                String(data.childExpense)
            );
        }

        if (data.parentExpense !== undefined) {

            await expect(
                this.parentExpenseField
            ).toHaveValue(
                String(data.parentExpense)
            );
        }

        if (data.medicalExpense !== undefined) {

            await expect(
                this.medicalExpenseField
            ).toHaveValue(
                String(data.medicalExpense)
            );
        }

        if (data.vehicleDebt !== undefined) {

            await expect(
                this.vehicleDebtField
            ).toHaveValue(
                String(data.vehicleDebt)
            );
        }

        if (data.houseDebt !== undefined) {

            await expect(
                this.houseDebtField
            ).toHaveValue(
                String(data.houseDebt)
            );
        }

        if (data.kwspDeduction !== undefined) {

            await expect(
                this.kwspDeductionField
            ).toHaveValue(
                String(data.kwspDeduction)
            );
        }

        if (data.educationLoan !== undefined) {

            await expect(
                this.educationLoanField
            ).toHaveValue(
                String(data.educationLoan)
            );
        }

        if (data.tabungHajiContribution !== undefined) {

            await expect(
                this.tabungHajiContributionField
            ).toHaveValue(
                String(data.tabungHajiContribution)
            );
        }
    }


    // =========================================================
    // OPEN HAUL SELECTION
    // =========================================================

    async openHaulSelection() {

        await expect(
            this.haulToggleButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.haulToggleButton.click();
    }


    // =========================================================
    // SELECT HAUL OPTION
    // =========================================================

    async selectHaulOption(index = 2) {

        const haulOption =
            this.page.locator(
                `#vaadin-combo-box-item-${index}`
            );

        await expect(
            haulOption
        ).toBeVisible({
            timeout: 15000
        });

        await haulOption.click();
    }


    // =========================================================
    // ENTER MANUAL ZAKAT AMOUNT
    // =========================================================

    async enterManualZakatAmount(amount) {

        await expect(
            this.manualZakatAmountField
        ).toBeVisible({
            timeout: 15000
        });

        await this.manualZakatAmountField.fill(
            String(amount)
        );
    }


    // =========================================================
    // VERIFY MANUAL ZAKAT AMOUNT
    // =========================================================

    async verifyManualZakatAmount(amount) {

        await expect(
            this.manualZakatAmountField
        ).toHaveValue(
            String(amount)
        );
    }


    // =========================================================
    // VERIFY ADD TO CART BUTTON
    // =========================================================

    async verifyAddToCartButton() {

        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.addToCartButton
        ).toBeEnabled();
    }


    // =========================================================
    // ADD TO CART
    // =========================================================

    async addToCart() {

        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.addToCartButton
        ).toBeEnabled();

        await this.addToCartButton.click();


        // =====================================================
        // VERIFY SUCCESS NOTIFICATION
        // =====================================================

        await expect(
            this.addToCartSuccessNotification
        ).toBeVisible({
            timeout: 15000
        });
    }

    // =========================================================
// REMOVE ZAKAT FROM CART
// =========================================================

async removeZakatFromCart() {

    await expect(
        this.cartDeleteButton
    ).toBeVisible({
        timeout: 15000
    });

    await expect(
        this.cartDeleteButton
    ).toBeEnabled();

    await this.cartDeleteButton.click();

    await expect(
        this.emptyCartRecordMessage
    ).toBeVisible({
        timeout: 15000
    });
}
}


module.exports = {
    ZakatPendapatanPage
};