const { ZakatModulePage } = require('./ZakatModulePage');
class ZakatTernakanPage extends ZakatModulePage {
    constructor(page) { super(page, { name: 'Zakat Ternakan', jenis: 'ternakan' }); }
}
module.exports = { ZakatTernakanPage };
