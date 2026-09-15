const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_002 - Verify Module Card', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await zakat.verifyCard();
    console.log('TC_ZAKAT_EMAS_PERAK_002 PASSED');
});
