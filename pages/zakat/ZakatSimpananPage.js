const { ZakatModulePage } = require('./ZakatModulePage');
class ZakatSimpananPage extends ZakatModulePage {
    constructor(page) { super(page, { name: 'Zakat Simpanan', jenis: 'simpanan' }); }
}
module.exports = { ZakatSimpananPage };
