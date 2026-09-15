const { ZakatModulePage } = require('./ZakatModulePage');
class ZakatPerniagaanPage extends ZakatModulePage {
    constructor(page) { super(page, { name: 'Zakat Perniagaan', jenis: 'perniagaan' }); }
}
module.exports = { ZakatPerniagaanPage };
