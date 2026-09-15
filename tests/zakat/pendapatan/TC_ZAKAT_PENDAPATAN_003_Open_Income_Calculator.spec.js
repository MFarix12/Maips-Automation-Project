const { test } = require('@playwright/test');

const {
    ZakatPendapatanPage
} = require('../../../pages/zakat/ZakatPendapatanPage');


test(
    'TC_ZAKAT_PENDAPATAN_003 - Open Income Calculator',
    async ({ page }) => {

        const zakatPendapatan =
            new ZakatPendapatanPage(page);


        // =====================================================
        // STEP 1: OPEN DIGITAL MAIPS
        // =====================================================

        await zakatPendapatan.open();

        console.log(
            'Digital MAIPs opened successfully.'
        );


        // =====================================================
        // STEP 2: OPEN ZAKAT PENDAPATAN
        // =====================================================

        await zakatPendapatan.openZakatPendapatan();

        await zakatPendapatan.verifyZakatPendapatanPage();

        console.log(
            'Zakat Pendapatan opened successfully.'
        );


        // =====================================================
        // STEP 3: OPEN CALCULATOR
        // =====================================================

        await zakatPendapatan.openIncomeCalculator();

        console.log(
            'Income calculator opened successfully.'
        );


        // =====================================================
        // STEP 4: VERIFY CALCULATOR STEP 1
        // =====================================================

        await zakatPendapatan.verifyCalculatorStep1();

        console.log(
            'Calculator Step 1 verified successfully.'
        );


        // =====================================================
        // TEST COMPLETED
        // =====================================================

        console.log(
            'TC_ZAKAT_PENDAPATAN_003 PASSED'
        );
    }
);