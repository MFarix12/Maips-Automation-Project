# LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 9 Test issues, 9 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_59]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-01`<br>[MAIP-1251](https://qa-milradius.atlassian.net/browse/MAIP-1251) | [MAIPs][Mod_59]LPS-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ503 melalui menu, hanya penapis Tahun dipaparkan tanpa nilai lalai, tiada hasil sebelum Jana, Jana tanpa Tahun ditolak dan senarai tahun tidak melebihi tahun semasa.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-6, 8-10; LOW langkah 3, 7, 11 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-02`<br>[MAIP-1252](https://qa-milradius.atlassian.net/browse/MAIP-1252) | [MAIPs][Mod_59]LPS-02 Jana Laporan Tahun Sah<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun dengan data sah memaparkan jadual 12 bulan dengan kepala dua aras bagi lima kumpulan, unit bilangan yang berasingan (Bil. Staff dan Bil. Resit), lajur Keseluruhan bagi Jumlah RM sahaja, baris JUMLAH, ringkasan tahunan dan butang Pratonton.  <br>**Kegentingan:** HIGH langkah 2, 5; MEDIUM langkah 4, 7-9; LOW langkah 3, 6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-03`<br>[MAIP-1253](https://qa-milradius.atlassian.net/browse/MAIP-1253) | [MAIPs][Mod_59]LPS-03 Semakan Jumlah Ringkasan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan nilai Keseluruhan bagi setiap bulan, baris JUMLAH dan empat nilai ringkasan tahunan sama tepat dengan jumlah yang dikira daripada nilai pada skrin.  <br>**Kegentingan:** HIGH langkah 2-11 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-04`<br>[MAIP-1254](https://qa-milradius.atlassian.net/browse/MAIP-1254) | [MAIPs][Mod_59]LPS-04 Tukar Tahun Kosongkan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan hasil lama dikosongkan apabila Tahun diubah, tahun lain boleh dijana dengan nilai tersendiri, dan butang Kosongkan mengosongkan Tahun serta hasil.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 4-7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-05`<br>[MAIP-1255](https://qa-milradius.atlassian.net/browse/MAIP-1255) | [MAIPs][Mod_59]LPS-05 Laporan Sifar Ralat Data<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun tanpa kutipan layak menghasilkan laporan sifar 12 bulan yang boleh dipratonton dan dimuat turun, manakala tahun dengan ralat data tidak memaparkan hasil, tidak menawarkan Pratonton dan tidak mendedahkan butiran ralat kepada peranan biasa.  <br>**Kegentingan:** HIGH langkah 2-3, 11-14; MEDIUM langkah 4-9; LOW langkah 10 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-06`<br>[MAIP-1256](https://qa-milradius.atlassian.net/browse/MAIP-1256) | [MAIPs][Mod_59]LPS-06 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Pratonton membuka Skrin 2 yang memaparkan laporan rasmi A4 landskap dengan kepala MAIPs, Muka, Tarikh, Lap, tajuk dengan Tahun, jadual dua aras, 12 bulan, baris JUMLAH, ringkasan dan nota unit sahaja, dengan nilai yang sama seperti Skrin 1.  <br>**Kegentingan:** HIGH langkah 3, 8; MEDIUM langkah 2, 4-7, 9; LOW langkah 10-11 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-07`<br>[MAIP-1257](https://qa-milradius.atlassian.net/browse/MAIP-1257) | [MAIPs][Mod_59]LPS-07 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan PDF, Excel dan CSV dimuat turun dengan nama fail yang betul dan nilai yang sama seperti Skrin 1, Cetak membuka dialog cetak dengan laporan yang sama, dan Kembali membawa ke Skrin 1 tanpa menjana semula.  <br>**Kegentingan:** HIGH langkah 3, 7, 10; MEDIUM langkah 2, 4-6, 8-9, 11-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-08`<br>[MAIP-1258](https://qa-milradius.atlassian.net/browse/MAIP-1258) | [MAIPs][Mod_59]LPS-08 Butiran Ralat Pentadbir<br><br>**Description:** **Peranan:** Admin Zakat  <br>**Ringkasan:** Membuktikan Admin Zakat dapat menggunakan LPZ503 dan, bagi tahun dengan ralat data, melihat bilangan Transaksi Tidak Dipetakan, sebab ralat dan senarai resit yang menyekat laporan.  <br>**Kegentingan:** HIGH langkah 3, 5; MEDIUM langkah 4, 6-8 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ503 Laporan Pendapatan Zakat Tahun Mengikut Pecahan Bulan dan Saluran | TBD | TBD | `LPS-09`<br>[MAIP-1259](https://qa-milradius.atlassian.net/browse/MAIP-1259) | [MAIPs][Mod_59]LPS-09 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Penyelaras NGO  <br>**Ringkasan:** Membuktikan peranan yang tidak dibenarkan tidak melihat item menu LPZ503.  <br>**Kegentingan:** HIGH langkah 2-3 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1251 (LPS-01; MAIP-1251) | TBD | TBD | TBD | TBD |
| MAIP-1252 (LPS-02; MAIP-1252) | TBD | TBD | TBD | TBD |
| MAIP-1253 (LPS-03; MAIP-1253) | TBD | TBD | TBD | TBD |
| MAIP-1254 (LPS-04; MAIP-1254) | TBD | TBD | TBD | TBD |
| MAIP-1255 (LPS-05; MAIP-1255) | TBD | TBD | TBD | TBD |
| MAIP-1256 (LPS-06; MAIP-1256) | TBD | TBD | TBD | TBD |
| MAIP-1257 (LPS-07; MAIP-1257) | TBD | TBD | TBD | TBD |
| MAIP-1258 (LPS-08; MAIP-1258) | TBD | TBD | TBD | TBD |
| MAIP-1259 (LPS-09; MAIP-1259) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

