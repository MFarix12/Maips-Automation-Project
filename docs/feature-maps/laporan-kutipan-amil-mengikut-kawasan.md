# LPZ211 Laporan Kutipan Amil Mengikut Kawasan — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 7 Test issues, 7 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_41]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-01`<br>[MAIP-1136](https://qa-milradius.atlassian.net/browse/MAIP-1136) | [MAIPs][Mod_41]LKA-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ211 melalui menu, dan skrin dipaparkan dengan penapis lalai tanpa hasil dan tanpa tindakan output.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-5, 7; LOW langkah 3, 6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-02`<br>[MAIP-1137](https://qa-milradius.atlassian.net/browse/MAIP-1137) | [MAIPs][Mod_41]LKA-02 Pengesahan Kriteria<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Tarikh Dari, Tarikh Hingga dan Kawasan wajib, tarikh tidak sah dan tarikh masa hadapan ditolak, Tarikh Dari tidak boleh selepas Tarikh Hingga, julat maksimum 366 hari, dan Kosongkan mengosongkan hasil.  <br>**Kegentingan:** MEDIUM langkah 2-11, 13 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-03`<br>[MAIP-1138](https://qa-milradius.atlassian.net/browse/MAIP-1138) | [MAIPs][Mod_41]LKA-03 Jana Semua Kawasan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jana bagi Semua Kawasan memaparkan section setiap Kawasan dengan Amil dan resit mengikut susunan, amaun dan jumlah Kawasan yang betul serta jumlah rekod penuh.  <br>**Kegentingan:** HIGH langkah 2, 4, 7, 9-10; MEDIUM langkah 3, 5-6, 8, 11, 13; LOW langkah 12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-04`<br>[MAIP-1139](https://qa-milradius.atlassian.net/browse/MAIP-1139) | [MAIPs][Mod_41]LKA-04 Jana Satu Kawasan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan pilihan satu Kawasan dan julat yang disempitkan mengehadkan hasil, perubahan penapis mengosongkan hasil, dan kriteria tanpa kutipan memaparkan mesej tiada rekod tanpa output.  <br>**Kegentingan:** HIGH langkah 3, 5-7; MEDIUM langkah 2, 4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-05`<br>[MAIP-1140](https://qa-milradius.atlassian.net/browse/MAIP-1140) | [MAIPs][Mod_41]LKA-05 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Pratonton memaparkan laporan rasmi LPZ211 dengan kepala, section Kawasan, kumpulan Amil, jumlah Kawasan dan jumlah rekod tanpa tandatangan, dan Kembali mengekalkan penapis.  <br>**Kegentingan:** HIGH langkah 3, 5; MEDIUM langkah 4, 6-8 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-06`<br>[MAIP-1141](https://qa-milradius.atlassian.net/browse/MAIP-1141) | [MAIPs][Mod_41]LKA-06 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan laporan boleh dimuat turun sebagai Excel, CSV dan PDF serta dicetak daripada kedua-dua halaman, dengan nama fail dan kandungan yang betul.  <br>**Kegentingan:** HIGH langkah 8; MEDIUM langkah 3-6, 10-15 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ211 Laporan Kutipan Amil Mengikut Kawasan | TBD | TBD | `LKA-07`<br>[MAIP-1142](https://qa-milradius.atlassian.net/browse/MAIP-1142) | [MAIPs][Mod_41]LKA-07 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Admin Wakaf  <br>**Ringkasan:** Membuktikan peranan di luar 20 peranan yang dibenarkan tidak dapat membuka LPZ211 melalui menu.  <br>**Kegentingan:** HIGH langkah 3 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1136 (LKA-01; MAIP-1136) | TBD | TBD | TBD | TBD |
| MAIP-1137 (LKA-02; MAIP-1137) | TBD | TBD | TBD | TBD |
| MAIP-1138 (LKA-03; MAIP-1138) | TBD | TBD | TBD | TBD |
| MAIP-1139 (LKA-04; MAIP-1139) | TBD | TBD | TBD | TBD |
| MAIP-1140 (LKA-05; MAIP-1140) | TBD | TBD | TBD | TBD |
| MAIP-1141 (LKA-06; MAIP-1141) | TBD | TBD | TBD | TBD |
| MAIP-1142 (LKA-07; MAIP-1142) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

