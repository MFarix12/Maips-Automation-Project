# LPZ303 Ringkasan Penyata Sumbangan Zakat NGO — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 7 Test issues, 7 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_49]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-01`<br>[MAIP-1244](https://qa-milradius.atlassian.net/browse/MAIP-1244) | [MAIPs][Mod_49]SZN-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ303 melalui menu, penapis dipaparkan kosong, hasil belum dijana semasa skrin dibuka, dan Jana dengan tarikh kosong, tarikh terbalik atau carian melebihi had ditolak.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-12; LOW langkah 3 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-02`<br>[MAIP-1245](https://qa-milradius.atlassian.net/browse/MAIP-1245) | [MAIPs][Mod_49]SZN-02 Jana Hasil Laporan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Jana bagi julat Tarikh Resit memaparkan satu baris bagi setiap NGO berkod sah (NGO Aktif tanpa kutipan dan NGO tidak aktif berkutipan) dengan lapan lajur, amaun dua perpuluhan, Jumlah RM dan Agihan Semula RM yang betul dari segi aritmetik, notis kutipan dikecualikan, baris Jumlah RM bagi semua hasil dan penomboran 50 baris.  <br>**Kegentingan:** HIGH langkah 2, 4, 10-13, 15; MEDIUM langkah 3, 6-9, 14, 16-17; LOW langkah 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-03`<br>[MAIP-1246](https://qa-milradius.atlassian.net/browse/MAIP-1246) | [MAIPs][Mod_49]SZN-03 Carian dan Tukar Penapis<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan carian nama atau kod NGO sebahagian tanpa beza huruf, jumlah mengikut hasil carian, teks tiada padanan, NGO yang tidak layak tidak disenaraikan, pengosongan hasil apabila penapis berubah, julat tanpa pengecualian, julat satu hari, julat panjang, Tarikh Akhir selepas hari ini dan ralat data.  <br>**Kegentingan:** HIGH langkah 16; MEDIUM langkah 2-9, 11-15 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-04`<br>[MAIP-1247](https://qa-milradius.atlassian.net/browse/MAIP-1247) | [MAIPs][Mod_49]SZN-04 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan butang output dipaparkan selepas Jana, Pratonton memaparkan PDF rasmi landskap dengan kepala, notis, tajuk lajur berulang, Jumlah RM sekali di halaman akhir, tanpa butiran kutipan dikecualikan, kepala Carian mengikut carian, dan Kembali mengekalkan penapis tanpa hasil.  <br>**Kegentingan:** HIGH langkah 3, 9-10; MEDIUM langkah 2, 4, 6-8, 11, 13-14; LOW langkah 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-05`<br>[MAIP-1248](https://qa-milradius.atlassian.net/browse/MAIP-1248) | [MAIPs][Mod_49]SZN-05 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan PDF, Excel dan CSV dimuat turun dari kedua-dua halaman dengan nama fail rasmi dan kandungan yang sama dengan skrin, termasuk notis pengecualian, Kod NGO dengan sifar di depan dan hasil carian, fail tanpa notis bagi julat tanpa pengecualian, serta Cetak membuka dialog cetak dengan laporan yang sama.  <br>**Kegentingan:** MEDIUM langkah 2-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-06`<br>[MAIP-1249](https://qa-milradius.atlassian.net/browse/MAIP-1249) | [MAIPs][Mod_49]SZN-06 Kutipan Dikecualikan<br><br>**Description:** **Peranan:** Admin Zakat  <br>**Ringkasan:** Membuktikan pentadbir melihat senarai butiran kutipan yang dikecualikan di bawah notis (maksimum 100 butiran), manakala PDF, Excel dan CSV tetap tidak menyenaraikannya.  <br>**Kegentingan:** HIGH langkah 2, 5-8; MEDIUM langkah 3-4, 9 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ303 Ringkasan Penyata Sumbangan Zakat NGO | TBD | TBD | `SZN-07`<br>[MAIP-1250](https://qa-milradius.atlassian.net/browse/MAIP-1250) | [MAIPs][Mod_49]SZN-07 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Penyelaras NGO  <br>**Ringkasan:** Membuktikan peranan di luar 14 peranan LPZ904 (Penyelaras NGO) tidak dapat membuka LPZ303.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 2 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1244 (SZN-01; MAIP-1244) | TBD | TBD | TBD | TBD |
| MAIP-1245 (SZN-02; MAIP-1245) | TBD | TBD | TBD | TBD |
| MAIP-1246 (SZN-03; MAIP-1246) | TBD | TBD | TBD | TBD |
| MAIP-1247 (SZN-04; MAIP-1247) | TBD | TBD | TBD | TBD |
| MAIP-1248 (SZN-05; MAIP-1248) | TBD | TBD | TBD | TBD |
| MAIP-1249 (SZN-06; MAIP-1249) | TBD | TBD | TBD | TBD |
| MAIP-1250 (SZN-07; MAIP-1250) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

