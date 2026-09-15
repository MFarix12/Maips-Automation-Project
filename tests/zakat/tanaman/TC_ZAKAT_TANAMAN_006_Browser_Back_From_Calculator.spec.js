const { test, expect } = require('@playwright/test');
const { ZakatTanamanPage } = require('../../../pages/zakat/ZakatTanamanPage');

test('TC_ZAKAT_TANAMAN_006 - Browser Back From Calculator', async ({ page }) => {
    const zakat = new ZakatTanamanPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Zakat Tanaman', exact: true })).toBeVisible({ timeout: 15000 });
    console.log('TC_ZAKAT_TANAMAN_006 PASSED');
});
