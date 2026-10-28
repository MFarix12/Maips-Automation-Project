# LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 12 Test issues, 12 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_40]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-01`<br>[MAIP-1228](https://qa-milradius.atlassian.net/browse/MAIP-1228) | [MAIPs][Mod_40]LBA-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ202 melalui menu sebagai item kelima, dan skrin dipaparkan dengan empat penapis kosong, tanpa hasil dan tanpa butang output.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4, 6; LOW langkah 3, 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-02`<br>[MAIP-1229](https://qa-milradius.atlassian.net/browse/MAIP-1229) | [MAIPs][Mod_40]LBA-02 Pilihan Jenis dan Amil<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Amil tidak boleh dipilih sebelum Jenis Amil, Jenis Amil menyenaraikan tiga jenis, Amil hanya menyenaraikan Amil aktif bagi jenis dipilih tanpa pilihan automatik, dan perubahan Jenis Amil mengosongkan Amil.  <br>**Kegentingan:** MEDIUM langkah 2-10, 12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-03`<br>[MAIP-1230](https://qa-milradius.atlassian.net/browse/MAIP-1230) | [MAIPs][Mod_40]LBA-03 Pengesahan Penapis<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jenis Amil, Amil, Tarikh Mula dan Tarikh Akhir wajib, Tarikh Mula tidak boleh selepas Tarikh Akhir, tarikh masa hadapan ditolak, julat tiga tahun diterima, dan Kosongkan mengosongkan penapis.  <br>**Kegentingan:** MEDIUM langkah 2-13 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-04`<br>[MAIP-1231](https://qa-milradius.atlassian.net/browse/MAIP-1231) | [MAIPs][Mod_40]LBA-04 Tiada Rekod<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan julat tanpa resit berbayar dan Amil yang resitnya belum dibayar memaparkan mesej tiada rekod tanpa membuka Skrin 2, dan julat inklusif satu hari memaparkan resit hari tersebut.  <br>**Kegentingan:** HIGH langkah 3-4; MEDIUM langkah 2, 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-05`<br>[MAIP-1232](https://qa-milradius.atlassian.net/browse/MAIP-1232) | [MAIPs][Mod_40]LBA-05 Jana dan Maklumat Amil<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jana dengan rekod membuka Skrin 2 dengan mesej berjaya, Jumlah Rekod, penyata potret dan butang output, serta kepala dan Maklumat Amil penyata betul.  <br>**Kegentingan:** HIGH langkah 3, 6; MEDIUM langkah 4-5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-06`<br>[MAIP-1233](https://qa-milradius.atlassian.net/browse/MAIP-1233) | [MAIPs][Mod_40]LBA-06 Butiran dan Jumlah<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan penyata memaparkan setiap item resit berbayar dalam julat dengan susunan, Agihan 1/8 tersimpan, maklumat baucer dan jumlah yang betul, serta penyata melebihi 50 baris dibahagi mengikut halaman.  <br>**Kegentingan:** HIGH langkah 3, 6-11; MEDIUM langkah 4-5, 13-16; LOW langkah 2, 12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-07`<br>[MAIP-1234](https://qa-milradius.atlassian.net/browse/MAIP-1234) | [MAIPs][Mod_40]LBA-07 Navigasi Skrin 2<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Kembali dan laluan pada Skrin 2 kembali ke Skrin 1 dengan penapis yang sama tanpa Jana, dan muat semula Skrin 2 kembali ke Skrin 1.  <br>**Kegentingan:** MEDIUM langkah 2-3; LOW langkah 5, 7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-08`<br>[MAIP-1235](https://qa-milradius.atlassian.net/browse/MAIP-1235) | [MAIPs][Mod_40]LBA-08 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Muat Turun PDF, Excel dan CSV menyimpan fail bernama betul dengan kandungan yang sama dengan pratonton, dan Cetak membuka dialog cetak.  <br>**Kegentingan:** HIGH langkah 4, 6, 8; MEDIUM langkah 3, 5, 7, 9 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-09`<br>[MAIP-1236](https://qa-milradius.atlassian.net/browse/MAIP-1236) | [MAIPs][Mod_40]LBA-09 Amil Kaunter dan Fitrah<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan penyata Amil Kaunter dan Amil Fitrah dijana dengan item Zakat Harta dan Zakat Fitrah, dengan Kariah dipaparkan tanda - dan Kawasan / Lokasi memaparkan Lokasi Amil.  <br>**Kegentingan:** HIGH langkah 2-7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-10`<br>[MAIP-1237](https://qa-milradius.atlassian.net/browse/MAIP-1237) | [MAIPs][Mod_40]LBA-10 Ralat Data Luar Julat<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan amaun Agihan resit atau amaun baucer yang tidak sepadan menyekat penyata dengan mesej ralat data, dan julat yang memotong resit satu baucer masih dijana dengan nota.  <br>**Kegentingan:** HIGH langkah 2-4; MEDIUM langkah 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-11`<br>[MAIP-1238](https://qa-milradius.atlassian.net/browse/MAIP-1238) | [MAIPs][Mod_40]LBA-11 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Membuktikan peranan di luar 20 peranan yang dibenarkan tidak melihat menu LPZ202.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 2 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ202 Penyata Terimaan Zakat dan Bayaran Agihan Bahagian Amil | TBD | TBD | `LBA-12`<br>[MAIP-1239](https://qa-milradius.atlassian.net/browse/MAIP-1239) | [MAIPs][Mod_40]LBA-12 Akses Penyelaras Masjid<br><br>**Description:** **Peranan:** Penyelaras Masjid  <br>**Ringkasan:** Membuktikan peranan Penyelaras Masjid, salah satu daripada 20 peranan dibenarkan, dapat menjana LPZ202, membuka Skrin 2 dan memuat turun penyata.  <br>**Kegentingan:** HIGH langkah 2-4; MEDIUM langkah 5 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1228 (LBA-01; MAIP-1228) | TBD | TBD | TBD | TBD |
| MAIP-1229 (LBA-02; MAIP-1229) | TBD | TBD | TBD | TBD |
| MAIP-1230 (LBA-03; MAIP-1230) | TBD | TBD | TBD | TBD |
| MAIP-1231 (LBA-04; MAIP-1231) | TBD | TBD | TBD | TBD |
| MAIP-1232 (LBA-05; MAIP-1232) | TBD | TBD | TBD | TBD |
| MAIP-1233 (LBA-06; MAIP-1233) | TBD | TBD | TBD | TBD |
| MAIP-1234 (LBA-07; MAIP-1234) | TBD | TBD | TBD | TBD |
| MAIP-1235 (LBA-08; MAIP-1235) | TBD | TBD | TBD | TBD |
| MAIP-1236 (LBA-09; MAIP-1236) | TBD | TBD | TBD | TBD |
| MAIP-1237 (LBA-10; MAIP-1237) | TBD | TBD | TBD | TBD |
| MAIP-1238 (LBA-11; MAIP-1238) | TBD | TBD | TBD | TBD |
| MAIP-1239 (LBA-12; MAIP-1239) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

