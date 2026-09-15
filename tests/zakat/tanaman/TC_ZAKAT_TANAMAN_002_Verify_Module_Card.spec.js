const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_002 - Verify Module Card', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await zakat.verifyCard();
    console.log('TC_ZAKAT_TANAMAN_002 PASSED');
});
