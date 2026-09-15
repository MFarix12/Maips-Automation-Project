const { test, expect } = require('@playwright/test');
const { ZakatSimpananPage } = require('../../../pages/zakat/ZakatSimpananPage');

test('TC_ZAKAT_SIMPANAN_006 - Browser Back From Calculator', async ({ page }) => {
    const zakat = new ZakatSimpananPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Zakat Simpanan', exact: true })).toBeVisible({ timeout: 15000 });
    console.log('TC_ZAKAT_SIMPANAN_006 PASSED');
});
