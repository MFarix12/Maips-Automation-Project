# LPZ901 Laporan Kutipan Amil — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 7 Test issues, 7 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_39]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-01`<br>[MAIP-1189](https://qa-milradius.atlassian.net/browse/MAIP-1189) | [MAIPs][Mod_39]LKT-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ901 melalui menu, dan skrin dipaparkan dengan penapis kosong, tanpa hasil, dan tanpa tindakan output yang boleh diklik.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-5; LOW langkah 3, 6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-02`<br>[MAIP-1190](https://qa-milradius.atlassian.net/browse/MAIP-1190) | [MAIPs][Mod_39]LKT-02 Pengesahan Tarikh<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Tarikh Mula dan Tarikh Akhir wajib, Tarikh Mula tidak boleh selepas Tarikh Akhir, tarikh masa hadapan ditolak, julat maksimum 366 hari, dan Kosongkan mengosongkan penapis dan hasil.  <br>**Kegentingan:** MEDIUM langkah 2-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-03`<br>[MAIP-1191](https://qa-milradius.atlassian.net/browse/MAIP-1191) | [MAIPs][Mod_39]LKT-03 Jana dan Semak Hasil<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jana memaparkan satu baris agregat bagi setiap Kariah dan Amil dalam susunan yang ditetapkan, dengan amaun, pengiraan Jumlah, jumlah keseluruhan dan Jumlah rekod yang tepat.  <br>**Kegentingan:** HIGH langkah 2, 9, 11; MEDIUM langkah 3, 5-8, 10, 12-14; LOW langkah 4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-04`<br>[MAIP-1192](https://qa-milradius.atlassian.net/browse/MAIP-1192) | [MAIPs][Mod_39]LKT-04 Ubah Tarikh Tiada Rekod<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan perubahan tarikh selepas Jana mengosongkan hasil, dan julat tanpa kutipan memaparkan mesej tiada rekod tanpa membenarkan pratonton atau muat turun.  <br>**Kegentingan:** MEDIUM langkah 2-4 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-05`<br>[MAIP-1193](https://qa-milradius.atlassian.net/browse/MAIP-1193) | [MAIPs][Mod_39]LKT-05 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Pratonton memaparkan laporan rasmi LPZ901 dalam format kertas landskap dengan kepala, data dan jumlah yang sama seperti hasil Jana, ruang tandatangan manual kosong, dan Kembali ke halaman laporan.  <br>**Kegentingan:** HIGH langkah 3, 8; MEDIUM langkah 2, 5-6, 9-11; LOW langkah 4, 7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-06`<br>[MAIP-1194](https://qa-milradius.atlassian.net/browse/MAIP-1194) | [MAIPs][Mod_39]LKT-06 Muat Turun PDF Excel CSV<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan laporan boleh dimuat turun dalam format PDF, Excel dan CSV dari halaman laporan dan halaman pratonton, dengan nama fail, data dan jumlah yang sama, dan ruang tandatangan pada PDF sahaja.  <br>**Kegentingan:** HIGH langkah 8; MEDIUM langkah 2-6, 9-11; LOW langkah 7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ901 Laporan Kutipan Amil | TBD | TBD | `LKT-07`<br>[MAIP-1195](https://qa-milradius.atlassian.net/browse/MAIP-1195) | [MAIPs][Mod_39]LKT-07 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Membuktikan peranan di luar 20 peranan yang dibenarkan tidak dapat mencapai LPZ901 melalui menu.  <br>**Kegentingan:** HIGH langkah 3-4 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1189 (LKT-01; MAIP-1189) | TBD | TBD | TBD | TBD |
| MAIP-1190 (LKT-02; MAIP-1190) | TBD | TBD | TBD | TBD |
| MAIP-1191 (LKT-03; MAIP-1191) | TBD | TBD | TBD | TBD |
| MAIP-1192 (LKT-04; MAIP-1192) | TBD | TBD | TBD | TBD |
| MAIP-1193 (LKT-05; MAIP-1193) | TBD | TBD | TBD | TBD |
| MAIP-1194 (LKT-06; MAIP-1194) | TBD | TBD | TBD | TBD |
| MAIP-1195 (LKT-07; MAIP-1195) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

