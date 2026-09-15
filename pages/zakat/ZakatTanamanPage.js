const { ZakatModulePage } = require('./ZakatModulePage');
class ZakatTanamanPage extends ZakatModulePage {
    constructor(page) { super(page, { name: 'Zakat Tanaman', jenis: 'tanaman' }); }
}
module.exports = { ZakatTanamanPage };
