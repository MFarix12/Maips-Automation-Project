# LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 6 Test issues, 6 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_64]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-01`<br>[MAIP-1152](https://qa-milradius.atlassian.net/browse/MAIP-1152) | [MAIPs][Mod_64]RKZ-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ905 melalui menu, penapis Tahun Laporan sahaja dipaparkan dengan tahun semasa sebagai lalai, hasil dimuat secara automatik dan senarai tahun tidak melebihi tahun semasa.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-8; LOW langkah 3, 9 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-02`<br>[MAIP-1153](https://qa-milradius.atlassian.net/browse/MAIP-1153) | [MAIPs][Mod_64]RKZ-02 Hasil Laporan Tahunan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun dengan data sah memaparkan tepat empat baris kategori dalam susunan tetap, lajur dan kumpulan Kutipan Amil, baris Jumlah RM, nilai 0.00 bagi lajur yang tidak berkaitan dengan kategori, dan semua semakan jumlah pada skrin adalah tepat.  <br>**Kegentingan:** HIGH langkah 2, 4, 7-13; MEDIUM langkah 6, 14, 17; LOW langkah 3, 5, 15 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-03`<br>[MAIP-1154](https://qa-milradius.atlassian.net/browse/MAIP-1154) | [MAIPs][Mod_64]RKZ-03 Tiada Rekod dan Ralat<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun dengan data tidak seimbang memaparkan mesej ralat data tanpa hasil, tahun tanpa kutipan memaparkan mesej tiada rekod, dan tindakan output disembunyikan apabila beralih daripada tahun dengan hasil sah kepada kedua-dua keadaan ini.  <br>**Kegentingan:** HIGH langkah 2-3; MEDIUM langkah 4-7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-04`<br>[MAIP-1155](https://qa-milradius.atlassian.net/browse/MAIP-1155) | [MAIPs][Mod_64]RKZ-04 Pratonton dan Output<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Pratonton memaparkan laporan rasmi LPZ905 dalam format A4 landskap mengikut tahun yang dipilih, muat turun PDF, Excel dan CSV serta Cetak menggunakan nilai yang sama dengan halaman laporan, dan Kembali memulangkan pengguna ke halaman laporan.  <br>**Kegentingan:** HIGH langkah 3, 5; MEDIUM langkah 2, 4, 6-10, 12-16 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-05`<br>[MAIP-1156](https://qa-milradius.atlassian.net/browse/MAIP-1156) | [MAIPs][Mod_64]RKZ-05 Senarai Resit Ralat Data<br><br>**Description:** **Peranan:** Admin Zakat  <br>**Ringkasan:** Membuktikan pentadbir melihat senarai resit yang menyekat laporan apabila data kutipan tidak seimbang, dan senarai tersebut tidak dipaparkan bagi tahun dengan data sah.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 4-6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ905 Laporan Ringkasan Kutipan Zakat Tahunan Mengikut Kategori | TBD | TBD | `RKZ-06`<br>[MAIP-1157](https://qa-milradius.atlassian.net/browse/MAIP-1157) | [MAIPs][Mod_64]RKZ-06 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Penyelaras NGO  <br>**Ringkasan:** Membuktikan peranan di luar senarai yang dibenarkan tidak dapat mencapai LPZ905 melalui menu.  <br>**Kegentingan:** HIGH langkah 4 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1152 (RKZ-01; MAIP-1152) | TBD | TBD | TBD | TBD |
| MAIP-1153 (RKZ-02; MAIP-1153) | TBD | TBD | TBD | TBD |
| MAIP-1154 (RKZ-03; MAIP-1154) | TBD | TBD | TBD | TBD |
| MAIP-1155 (RKZ-04; MAIP-1155) | TBD | TBD | TBD | TBD |
| MAIP-1156 (RKZ-05; MAIP-1156) | TBD | TBD | TBD | TBD |
| MAIP-1157 (RKZ-06; MAIP-1157) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

