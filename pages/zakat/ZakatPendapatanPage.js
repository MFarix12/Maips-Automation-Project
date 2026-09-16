const { expect } = require('@playwright/test');

class ZakatPendapatanPage {

    constructor(page) {

        this.page = page;


        // =====================================================
        // MAIN PAGE
        // =====================================================

        this.zakatPendapatanCalculateButton =
            page.getByRole('link', { name: 'Kira Sekarang' }).first();

        this.zakatPendapatanHeading =
            page.getByText('Zakat Pendapatan', { exact: true });

        this.openCalculatorButton =
            page.getByRole('button', { name: 'Buka Kalkulator' });

        this.paymentCartHeading =
            page.getByText('Bakul Bayaran', { exact: true });

        this.emptyCartMessage =
            page.getByText(/bakul.*kosong/i);

        this.payButton =
            page.getByRole('button', { name: /Bayar RM/i});


        // =====================================================
        // CALCULATOR CONTAINER
        // =====================================================

        this.calculatorContainer =
            page.locator('#kalkulatorContentLayout');

        this.addToCartButton =
            this.calculatorContainer.getByRole(
                'button',
                { name: 'Masuk Troli' }
            );


        // =====================================================
        // STEP 1 - INCOME
        // =====================================================

        this.calculatorHeading =
            page.getByText(/Kalkulator/i).first();

        this.monthlyIncomeOption =
            page.getByText('Bulanan', { exact: true });

        this.annualIncomeOption =
            page.getByText('Tahunan', { exact: true });

        this.monthlyIncomeLabel =
            page.getByText('Pendapatan', { exact: true });

        this.bonusLabel =
            page.getByText('Bonus', { exact: true });

        this.otherIncomeLabel =
            page.getByText('Pendapatan Lain', { exact: true });

        this.totalIncomeLabel =
            page.getByText(/Jumlah Pendapatan/i);

        /*
         * Confirmed through Codegen.
         *
         * Vaadin-generated ID. Used for the initial Step 1
         * interaction only.
         */
        this.monthlyIncomeField =
            page.locator('#input-vaadin-big-decimal-field-40');

        this.bonusField =
            page.getByRole('textbox', { name: 'Bonus' });

        this.otherIncomeField =
            page.getByRole(
                'textbox',
                { name: 'Pendapatan Lain' }
            );

        /*
         * Confirmed through Codegen.
         */
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
            this.calculatorContainer.getByRole(
                'button',
                { name: 'Sebelum' }
            );


        // =====================================================
        // STEP 2 - EXPENSES
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
        // STEP 3 - RESULT
        // =====================================================

        this.resultContainer =
            this.calculatorContainer;

        this.nisabLabel =
            this.resultContainer.getByText(
                /Nisab.*Tahun/i
            );

        this.totalIncomeResultLabel =
            this.resultContainer.getByText(
                'Jumlah Pendapatan',
                { exact: true }
            );

        this.totalExpenseResultLabel =
            this.resultContainer.getByText(
                'Jumlah Perbelanjaan',
                { exact: true }
            );

        this.netIncomeResultLabel =
            this.resultContainer.getByText(
                'Jumlah Pendapatan Bersih',
                { exact: true }
            );

        this.monthlyZakatLabel =
            this.resultContainer.getByText(
                /Jumlah Zakat Sebulan/i
            );

        this.zakatRateLabel =
            this.resultContainer.getByText(
                /2\.5%/
            );
    }


    // =========================================================
    // OPEN HOME
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
    }


    // =========================================================
    // VERIFY ZAKAT PAGE
    // =========================================================

    async verifyZakatPendapatanPage() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // VERIFY DEFAULT STATE
    // =========================================================

    async verifyDefaultState() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible();

        if (
            await this.paymentCartHeading.count() > 0
        ) {

            await expect(
                this.paymentCartHeading
            ).toBeVisible();
        }

        if (
            await this.emptyCartMessage.count() > 0
        ) {

            await expect(
                this.emptyCartMessage
            ).toBeVisible();
        }
    }


    // =========================================================
    // OPEN CALCULATOR
    // =========================================================

    async openIncomeCalculator() {

        await expect(
            this.openCalculatorButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.openCalculatorButton.click();
    }


    // =========================================================
    // VERIFY STEP 1
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
    // MONTHLY INCOME
    // =========================================================

    async enterMonthlyIncome(amount) {

        await expect(
            this.monthlyIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.monthlyIncomeField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // BONUS
    // =========================================================

    async enterBonus(amount) {

        await expect(
            this.bonusField
        ).toBeVisible({
            timeout: 15000
        });

        await this.bonusField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // OTHER INCOME
    // =========================================================

    async enterOtherIncome(amount) {

        await expect(
            this.otherIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.otherIncomeField.fill(
            amount.toString()
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
    // VERIFY MONTHLY VALUES
    // =========================================================

    async verifyIncomeValues(
        monthlyIncome,
        bonus,
        otherIncome
    ) {

        await expect(
            this.monthlyIncomeField
        ).toHaveValue(
            monthlyIncome.toString()
        );

        await expect(
            this.bonusField
        ).toHaveValue(
            bonus.toString()
        );

        await expect(
            this.otherIncomeField
        ).toHaveValue(
            otherIncome.toString()
        );
    }


    // =========================================================
    // ANNUAL MODE
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
    // ANNUAL INCOME
    // =========================================================

    async enterAnnualIncome(amount) {

        await expect(
            this.annualIncomeField
        ).toBeVisible({
            timeout: 15000
        });

        await this.annualIncomeField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // ENTER ANNUAL INFORMATION
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
    // VERIFY ANNUAL VALUES
    // =========================================================

    async verifyAnnualIncomeValues(
        annualIncome,
        bonus,
        otherIncome
    ) {

        await expect(
            this.annualIncomeField
        ).toHaveValue(
            annualIncome.toString()
        );

        await expect(
            this.bonusField
        ).toHaveValue(
            bonus.toString()
        );

        await expect(
            this.otherIncomeField
        ).toHaveValue(
            otherIncome.toString()
        );
    }


    // =========================================================
    // NEXT
    // =========================================================

    async clickNext() {

        await expect(
            this.nextButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.nextButton.click();
    }


    // =========================================================
    // PREVIOUS
    // =========================================================

    async clickPrevious() {

        await expect(
            this.previousButton
        ).toBeVisible({
            timeout: 15000
        });

        await this.previousButton.click();
    }


    // =========================================================
    // VERIFY RETURN TO STEP 1
    // =========================================================

    async verifyReturnedToIncomeStep() {

        /*
         * Do not use the generated Vaadin ID here because
         * clicking "Sebelum" can re-render the calculator.
         */

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
    }


    // =========================================================
    // VERIFY STEP 2
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
    }


    // =========================================================
    // PERSONAL EXPENSE
    // =========================================================

    async enterPersonalExpense(amount) {

        await expect(
            this.personalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.personalExpenseField.fill(
            amount.toString()
        );
    }


    async verifyPersonalExpense(amount) {

        await expect(
            this.personalExpenseField
        ).toHaveValue(
            amount.toString()
        );
    }


    async enterPersonalExpenseAndContinue(amount) {

        await this.enterPersonalExpense(
            amount
        );

        await this.verifyPersonalExpense(
            amount
        );

        await this.clickNext();
    }


    // =========================================================
    // SPOUSE
    // =========================================================

    async enterSpouseCount(count) {

        await expect(
            this.spouseCountField
        ).toBeVisible({
            timeout: 15000
        });

        await this.spouseCountField.fill(
            count.toString()
        );
    }


    async verifySpouseCount(count) {

        await expect(
            this.spouseCountField
        ).toHaveValue(
            count.toString()
        );
    }


    // =========================================================
    // CHILD
    // =========================================================

    async enterChildExpense(amount) {

        await expect(
            this.childExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.childExpenseField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // PARENT
    // =========================================================

    async enterParentExpense(amount) {

        await expect(
            this.parentExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.parentExpenseField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // MEDICAL
    // =========================================================

    async enterMedicalExpense(amount) {

        await expect(
            this.medicalExpenseField
        ).toBeVisible({
            timeout: 15000
        });

        await this.medicalExpenseField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // VEHICLE DEBT
    // =========================================================

    async enterVehicleDebt(amount) {

        await expect(
            this.vehicleDebtField
        ).toBeVisible({
            timeout: 15000
        });

        await this.vehicleDebtField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // HOUSE DEBT
    // =========================================================

    async enterHouseDebt(amount) {

        await expect(
            this.houseDebtField
        ).toBeVisible({
            timeout: 15000
        });

        await this.houseDebtField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // KWSP
    // =========================================================

    async enterKwspDeduction(amount) {

        await expect(
            this.kwspDeductionField
        ).toBeVisible({
            timeout: 15000
        });

        await this.kwspDeductionField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // EDUCATION LOAN
    // =========================================================

    async enterEducationLoan(amount) {

        await expect(
            this.educationLoanField
        ).toBeVisible({
            timeout: 15000
        });

        await this.educationLoanField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // TABUNG HAJI
    // =========================================================

    async enterTabungHajiContribution(amount) {

        await expect(
            this.tabungHajiContributionField
        ).toBeVisible({
            timeout: 15000
        });

        await this.tabungHajiContributionField.fill(
            amount.toString()
        );
    }


    // =========================================================
    // ENTER MULTIPLE EXPENSES
    // =========================================================

    async enterMultipleExpenses({

        personalExpense,
        spouseCount,
        childExpense,
        parentExpense,
        medicalExpense,
        vehicleDebt,
        houseDebt,
        kwspDeduction,
        educationLoan,
        tabungHajiContribution

    }) {

        if (personalExpense !== undefined) {
            await this.enterPersonalExpense(
                personalExpense
            );
        }

        if (spouseCount !== undefined) {
            await this.enterSpouseCount(
                spouseCount
            );
        }

        if (childExpense !== undefined) {
            await this.enterChildExpense(
                childExpense
            );
        }

        if (parentExpense !== undefined) {
            await this.enterParentExpense(
                parentExpense
            );
        }

        if (medicalExpense !== undefined) {
            await this.enterMedicalExpense(
                medicalExpense
            );
        }

        if (vehicleDebt !== undefined) {
            await this.enterVehicleDebt(
                vehicleDebt
            );
        }

        if (houseDebt !== undefined) {
            await this.enterHouseDebt(
                houseDebt
            );
        }

        if (kwspDeduction !== undefined) {
            await this.enterKwspDeduction(
                kwspDeduction
            );
        }

        if (educationLoan !== undefined) {
            await this.enterEducationLoan(
                educationLoan
            );
        }

        if (tabungHajiContribution !== undefined) {
            await this.enterTabungHajiContribution(
                tabungHajiContribution
            );
        }
    }


    // =========================================================
    // VERIFY MULTIPLE EXPENSES
    // =========================================================

    async verifyMultipleExpenses({

        personalExpense,
        spouseCount,
        childExpense,
        parentExpense,
        medicalExpense,
        vehicleDebt,
        houseDebt,
        kwspDeduction,
        educationLoan,
        tabungHajiContribution

    }) {

        if (personalExpense !== undefined) {

            await expect(
                this.personalExpenseField
            ).toHaveValue(
                personalExpense.toString()
            );
        }

        if (spouseCount !== undefined) {

            await expect(
                this.spouseCountField
            ).toHaveValue(
                spouseCount.toString()
            );
        }

        if (childExpense !== undefined) {

            await expect(
                this.childExpenseField
            ).toHaveValue(
                childExpense.toString()
            );
        }

        if (parentExpense !== undefined) {

            await expect(
                this.parentExpenseField
            ).toHaveValue(
                parentExpense.toString()
            );
        }

        if (medicalExpense !== undefined) {

            await expect(
                this.medicalExpenseField
            ).toHaveValue(
                medicalExpense.toString()
            );
        }

        if (vehicleDebt !== undefined) {

            await expect(
                this.vehicleDebtField
            ).toHaveValue(
                vehicleDebt.toString()
            );
        }

        if (houseDebt !== undefined) {

            await expect(
                this.houseDebtField
            ).toHaveValue(
                houseDebt.toString()
            );
        }

        if (kwspDeduction !== undefined) {

            await expect(
                this.kwspDeductionField
            ).toHaveValue(
                kwspDeduction.toString()
            );
        }

        if (educationLoan !== undefined) {

            await expect(
                this.educationLoanField
            ).toHaveValue(
                educationLoan.toString()
            );
        }

        if (tabungHajiContribution !== undefined) {

            await expect(
                this.tabungHajiContributionField
            ).toHaveValue(
                tabungHajiContribution.toString()
            );
        }
    }


    // =========================================================
    // VERIFY RESULT SCREEN
    // =========================================================

    async verifyCalculationResult() {

        await expect(
            this.nisabLabel
        ).toBeVisible({
            timeout: 15000
        });

        await expect(
            this.totalIncomeResultLabel
        ).toBeVisible();

        await expect(
            this.totalExpenseResultLabel
        ).toBeVisible();

        await expect(
            this.netIncomeResultLabel
        ).toBeVisible();

        await expect(
            this.monthlyZakatLabel
        ).toBeVisible();

        await expect(
            this.addToCartButton
        ).toBeVisible();
    }


    // =========================================================
    // PARSE RM VALUE
    // =========================================================

    parseRMValue(text) {

        if (!text) {

            throw new Error(
                'RM value cannot be parsed because the text is empty.'
            );
        }

        const match = text.match(
            /RM\s*([\d,]+(?:\.\d{1,2})?)/
        );

        if (!match) {

            throw new Error(
                `No RM amount was found in text: "${text}"`
            );
        }

        const numericText =
            match[1].replace(/,/g, '');

        const value =
            Number.parseFloat(numericText);

        if (Number.isNaN(value)) {

            throw new Error(
                `Unable to convert RM amount to number: "${text}"`
            );
        }

        return value;
    }


    // =========================================================
    // FIND RESULT ROW
    // =========================================================

    async getResultRowText(labelText) {

        /*
         * Instead of assuming the direct parent of the label is
         * the complete row, move upward until an element contains:
         *
         * 1. the requested label
         * 2. an RM amount
         *
         * This is safer for the nested Vaadin/Flex layout.
         */

        const label =
            this.resultContainer.getByText(
                labelText,
                { exact: true }
            );

        await expect(
            label
        ).toBeVisible({
            timeout: 15000
        });

        const row =
            label.locator(
                'xpath=ancestor::*[' +
                'contains(normalize-space(.), "RM")' +
                '][1]'
            );

        await expect(
            row
        ).toBeVisible({
            timeout: 15000
        });

        const rowText =
            await row.innerText();

        if (!rowText.includes('RM')) {

            throw new Error(
                `RM amount not found for "${labelText}". ` +
                `Captured row text: "${rowText}"`
            );
        }

        return rowText;
    }


    // =========================================================
    // GET RESULT VALUE
    // =========================================================

    async getResultValueByLabel(labelText) {

        const rowText =
            await this.getResultRowText(
                labelText
            );

        return this.parseRMValue(
            rowText
        );
    }


    // =========================================================
    // GET NISAB
    // =========================================================

    async getNisabValue() {

        await expect(
            this.nisabLabel
        ).toBeVisible({
            timeout: 15000
        });

        const nisabRow =
            this.nisabLabel.locator(
                'xpath=ancestor::*[' +
                'contains(normalize-space(.), "RM")' +
                '][1]'
            );

        await expect(
            nisabRow
        ).toBeVisible({
            timeout: 15000
        });

        const rowText =
            await nisabRow.innerText();

        return this.parseRMValue(
            rowText
        );
    }


    // =========================================================
    // GET TOTAL INCOME
    // =========================================================

    async getTotalIncomeValue() {

        return await this.getResultValueByLabel(
            'Jumlah Pendapatan'
        );
    }


    // =========================================================
    // GET TOTAL EXPENSE
    // =========================================================

    async getTotalExpenseValue() {

        return await this.getResultValueByLabel(
            'Jumlah Perbelanjaan'
        );
    }


    // =========================================================
    // GET NET INCOME
    // =========================================================

    async getNetIncomeValue() {

        return await this.getResultValueByLabel(
            'Jumlah Pendapatan Bersih'
        );
    }


    // =========================================================
    // VERIFY NET INCOME CALCULATION
    // =========================================================

    async verifyNetIncomeCalculation() {

        const totalIncome =
            await this.getTotalIncomeValue();

        const totalExpense =
            await this.getTotalExpenseValue();

        const netIncome =
            await this.getNetIncomeValue();


        console.log(
            `Total Income: RM ${totalIncome.toFixed(2)}`
        );

        console.log(
            `Total Expense: RM ${totalExpense.toFixed(2)}`
        );

        console.log(
            `Net Income: RM ${netIncome.toFixed(2)}`
        );


        const expectedNetIncome =
            totalIncome - totalExpense;


        expect(
            netIncome
        ).toBeCloseTo(
            expectedNetIncome,
            2
        );


        return {
            totalIncome,
            totalExpense,
            netIncome,
            expectedNetIncome
        };
    }


    // =========================================================
    // VERIFY ABOVE NISAB
    // =========================================================

    async verifyNetIncomeAboveNisab() {

        const nisab =
            await this.getNisabValue();

        const netIncome =
            await this.getNetIncomeValue();


        console.log(
            `Nisab: RM ${nisab.toFixed(2)}`
        );

        console.log(
            `Net Income: RM ${netIncome.toFixed(2)}`
        );


        expect(
            netIncome
        ).toBeGreaterThan(
            nisab
        );


        return {
            nisab,
            netIncome
        };
    }
}

module.exports = {
    ZakatPendapatanPage
};