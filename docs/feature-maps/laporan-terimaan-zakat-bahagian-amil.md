# LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 10 Test issues, 10 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_42]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-01`<br>[MAIP-1218](https://qa-milradius.atlassian.net/browse/MAIP-1218) | [MAIPs][Mod_42]LTB-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ201 melalui menu sebagai item keempat, dan skrin dipaparkan dengan empat penapis kosong, tanpa hasil dan tanpa butang output.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4, 6; LOW langkah 3, 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-02`<br>[MAIP-1219](https://qa-milradius.atlassian.net/browse/MAIP-1219) | [MAIPs][Mod_42]LTB-02 Pilihan Jenis dan Amil<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jenis Amil menyenaraikan tiga jenis, Nama Amil hanya menyenaraikan Amil aktif bagi jenis dipilih tanpa pilihan automatik, dan perubahan Jenis Amil mengosongkan Nama Amil.  <br>**Kegentingan:** MEDIUM langkah 2-9 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-03`<br>[MAIP-1220](https://qa-milradius.atlassian.net/browse/MAIP-1220) | [MAIPs][Mod_42]LTB-03 Pengesahan Penapis<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Nama Amil, Tarikh Mula dan Tarikh Akhir wajib, Tarikh Mula tidak boleh selepas Tarikh Akhir, Tarikh Akhir tidak boleh selepas hari ini, julat panjang diterima, dan Kosongkan mengosongkan penapis.  <br>**Kegentingan:** MEDIUM langkah 2-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-04`<br>[MAIP-1221](https://qa-milradius.atlassian.net/browse/MAIP-1221) | [MAIPs][Mod_42]LTB-04 Jana Laporan Amil Kariah<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jana memaparkan setiap item resit Amil terpilih dalam julat, dengan lajur, susunan, Agihan 1/8, jumlah, nota dan butang output yang betul, dan perubahan penapis mengosongkan hasil.  <br>**Kegentingan:** HIGH langkah 3, 5, 9-10, 12; MEDIUM langkah 6-8, 13-18; LOW langkah 4, 11 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-05`<br>[MAIP-1222](https://qa-milradius.atlassian.net/browse/MAIP-1222) | [MAIPs][Mod_42]LTB-05 Tiada Rekod Julat Sehari<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan julat tanpa resit memaparkan mesej tiada rekod tanpa butang output, dan julat inklusif satu hari memaparkan resit hari tersebut.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 2, 4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-06`<br>[MAIP-1223](https://qa-milradius.atlassian.net/browse/MAIP-1223) | [MAIPs][Mod_42]LTB-06 Pratonton Penyata<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Pratonton memaparkan penyata potret rasmi dengan kepala, blok identiti, item, jumlah, ringkasan kategori, pengiraan bahagian Amil dan tandatangan PPZ yang sepadan dengan Skrin 1, serta Kembali dan muat semula kembali ke Skrin 1.  <br>**Kegentingan:** HIGH langkah 3, 6-7, 9-10; MEDIUM langkah 2, 5, 8, 11-12, 15-16; LOW langkah 4, 13-14, 17, 19 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-07`<br>[MAIP-1224](https://qa-milradius.atlassian.net/browse/MAIP-1224) | [MAIPs][Mod_42]LTB-07 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan PDF, Excel dan CSV dimuat turun sebagai fail dengan nama dan kandungan yang sama dengan pratonton, dan Cetak membuka dialog cetak, dari halaman Pratonton dan halaman laporan.  <br>**Kegentingan:** MEDIUM langkah 2-14 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-08`<br>[MAIP-1225](https://qa-milradius.atlassian.net/browse/MAIP-1225) | [MAIPs][Mod_42]LTB-08 Amil Kaunter dan Fitrah<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan laporan boleh dijana bagi Amil Kaunter dan Amil Fitrah, dengan nama Lokasi pada tempat Kariah, serta Zon, PPZ dan nama/jawatan tandatangan \`-\` jika tiada.  <br>**Kegentingan:** HIGH langkah 2-3, 5-6; MEDIUM langkah 4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-09`<br>[MAIP-1226](https://qa-milradius.atlassian.net/browse/MAIP-1226) | [MAIPs][Mod_42]LTB-09 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Membuktikan peranan di luar 20 peranan yang dibenarkan tidak melihat menu LPZ201.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 2 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ201 Laporan Terimaan Zakat dan Pengiraan Bahagian Amil | TBD | TBD | `LTB-10`<br>[MAIP-1227](https://qa-milradius.atlassian.net/browse/MAIP-1227) | [MAIPs][Mod_42]LTB-10 Akses Penyelaras Masjid<br><br>**Description:** **Peranan:** Penyelaras Masjid  <br>**Ringkasan:** Membuktikan peranan Penyelaras Masjid, salah satu daripada 20 peranan dibenarkan, dapat menjana LPZ201 dan membuka halaman Pratonton.  <br>**Kegentingan:** HIGH langkah 2-5 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1218 (LTB-01; MAIP-1218) | TBD | TBD | TBD | TBD |
| MAIP-1219 (LTB-02; MAIP-1219) | TBD | TBD | TBD | TBD |
| MAIP-1220 (LTB-03; MAIP-1220) | TBD | TBD | TBD | TBD |
| MAIP-1221 (LTB-04; MAIP-1221) | TBD | TBD | TBD | TBD |
| MAIP-1222 (LTB-05; MAIP-1222) | TBD | TBD | TBD | TBD |
| MAIP-1223 (LTB-06; MAIP-1223) | TBD | TBD | TBD | TBD |
| MAIP-1224 (LTB-07; MAIP-1224) | TBD | TBD | TBD | TBD |
| MAIP-1225 (LTB-08; MAIP-1225) | TBD | TBD | TBD | TBD |
| MAIP-1226 (LTB-09; MAIP-1226) | TBD | TBD | TBD | TBD |
| MAIP-1227 (LTB-10; MAIP-1227) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

