const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_002 - Verify Module Card', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await zakat.verifyCard();
    console.log('TC_ZAKAT_TERNAKAN_002 PASSED');
});
