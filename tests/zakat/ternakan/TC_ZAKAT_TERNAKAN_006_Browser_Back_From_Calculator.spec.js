const { test, expect } = require('@playwright/test');
const { ZakatTernakanPage } = require('../../../pages/zakat/ZakatTernakanPage');

test('TC_ZAKAT_TERNAKAN_006 - Browser Back From Calculator', async ({ page }) => {
    const zakat = new ZakatTernakanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Zakat Ternakan', exact: true })).toBeVisible({ timeout: 15000 });
    console.log('TC_ZAKAT_TERNAKAN_006 PASSED');
});
