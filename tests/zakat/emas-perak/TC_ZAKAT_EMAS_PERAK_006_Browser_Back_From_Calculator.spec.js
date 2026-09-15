const { test, expect } = require('@playwright/test');
const { ZakatEmasPerakPage } = require('../../../pages/zakat/ZakatEmasPerakPage');

test('TC_ZAKAT_EMAS_PERAK_006 - Browser Back From Calculator', async ({ page }) => {
    const zakat = new ZakatEmasPerakPage(page);
    await zakat.openHome();
    await zakat.openCalculator();
    await page.goBack();
    await expect(page.getByRole('heading', { name: 'Zakat Emas/Perak', exact: true })).toBeVisible({ timeout: 15000 });
    console.log('TC_ZAKAT_EMAS_PERAK_006 PASSED');
});
