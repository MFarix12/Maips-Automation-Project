const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_002 - Verify Module Card', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await zakat.verifyCard();
    console.log('TC_ZAKAT_SIMPANAN_002 PASSED');
});
