# LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 7 Test issues, 7 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_63]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-01`<br>[MAIP-1162](https://qa-milradius.atlassian.net/browse/MAIP-1162) | [MAIPs][Mod_63]KTI-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ904 melalui menu, penapis Tahun Laporan sahaja dipaparkan dengan tahun semasa sebagai lalai, hasil dimuat secara automatik dan senarai tahun tidak melebihi tahun semasa.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-7; LOW langkah 3, 8 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-02`<br>[MAIP-1163](https://qa-milradius.atlassian.net/browse/MAIP-1163) | [MAIPs][Mod_63]KTI-02 Hasil Laporan Tahunan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun dengan data sah memaparkan satu baris bagi setiap pembayar individu dalam susunan nama, lajur yang betul, 50 baris setiap halaman tanpa Jumlah Rekod dan baris jumlah, format amaun dan rekonsiliasi setiap baris, serta tahun dengan rekod dikecualikan masih dijana tanpa notis kepada pengguna bukan pentadbir.  <br>**Kegentingan:** HIGH langkah 2, 9-10, 15; MEDIUM langkah 4-6, 8, 11, 14, 16; LOW langkah 3, 7, 12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-03`<br>[MAIP-1164](https://qa-milradius.atlassian.net/browse/MAIP-1164) | [MAIPs][Mod_63]KTI-03 Tiada Rekod dan Ralat<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan tahun tanpa kutipan memaparkan mesej tiada rekod, tahun dengan data tidak seimbang memaparkan mesej ralat data tanpa hasil dan tanpa senarai resit, dan tindakan output disembunyikan dalam kedua-dua keadaan.  <br>**Kegentingan:** HIGH langkah 4-5; MEDIUM langkah 2-3, 6-7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-04`<br>[MAIP-1165](https://qa-milradius.atlassian.net/browse/MAIP-1165) | [MAIPs][Mod_63]KTI-04 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Pratonton memaparkan laporan rasmi LPZ904 dalam format A4 landskap: kepala laporan dan kepala jadual berulang pada setiap halaman, Bil berterusan, serta baris Jumlah RM dan ruang tandatangan manual sekali sahaja pada halaman terakhir, dan Kembali memulangkan pengguna ke halaman laporan.  <br>**Kegentingan:** HIGH langkah 2, 5, 8-9; MEDIUM langkah 3, 6-7, 11; LOW langkah 4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-05`<br>[MAIP-1166](https://qa-milradius.atlassian.net/browse/MAIP-1166) | [MAIPs][Mod_63]KTI-05 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan muat turun PDF, Excel dan CSV daripada halaman pratonton dan halaman laporan, serta Cetak, menggunakan data dan jumlah yang sama dengan laporan. Dalam nama fail, TTTT ialah Tahun Laporan yang dipilih (di persekitaran dev: 2024).  <br>**Kegentingan:** MEDIUM langkah 3-7, 10-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-06`<br>[MAIP-1167](https://qa-milradius.atlassian.net/browse/MAIP-1167) | [MAIPs][Mod_63]KTI-06 Rekod Dikecualikan<br><br>**Description:** **Peranan:** Admin Zakat  <br>**Ringkasan:** Membuktikan pentadbir melihat senarai rekod yang dikecualikan daripada laporan (ID Transaksi, No Resit, Tarikh, Saluran, Sebab) sementara laporan tetap dijana, senarai tidak dipaparkan bagi tahun tanpa pengecualian, dan senarai resit yang menyekat laporan dipaparkan bagi tahun ralat data.  <br>**Kegentingan:** HIGH langkah 3, 6; MEDIUM langkah 4-5, 7-11 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ904 Laporan Kutipan Zakat Tahunan Individu Dengan Pecahan Taawun dan Bukan Taawun | TBD | TBD | `KTI-07`<br>[MAIP-1168](https://qa-milradius.atlassian.net/browse/MAIP-1168) | [MAIPs][Mod_63]KTI-07 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Penyelaras NGO  <br>**Ringkasan:** Membuktikan peranan di luar senarai yang dibenarkan tidak dapat mencapai LPZ904 melalui menu.  <br>**Kegentingan:** HIGH langkah 4 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1162 (KTI-01; MAIP-1162) | TBD | TBD | TBD | TBD |
| MAIP-1163 (KTI-02; MAIP-1163) | TBD | TBD | TBD | TBD |
| MAIP-1164 (KTI-03; MAIP-1164) | TBD | TBD | TBD | TBD |
| MAIP-1165 (KTI-04; MAIP-1165) | TBD | TBD | TBD | TBD |
| MAIP-1166 (KTI-05; MAIP-1166) | TBD | TBD | TBD | TBD |
| MAIP-1167 (KTI-06; MAIP-1167) | TBD | TBD | TBD | TBD |
| MAIP-1168 (KTI-07; MAIP-1168) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

