const { ZakatModulePage } = require('./ZakatModulePage');
class ZakatEmasPerakPage extends ZakatModulePage {
    constructor(page) { super(page, { name: 'Zakat Emas/Perak', jenis: 'emas' }); }
}
module.exports = { ZakatEmasPerakPage };
