# Permohonan Cuti Amil — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 18 Test issues, 18 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_15]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-01`<br>[MAIP-1020](https://qa-milradius.atlassian.net/browse/MAIP-1020) | [MAIPs][Mod_15] PCT-01 Mohon Cuti Baharu<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil memohon cuti baharu (Cuti A); semua validasi borang dan muat naik dokumen disemak.  <br>**Kegentingan:** HIGH langkah 2, 9, 20, 22; MEDIUM langkah 3-4, 6-8, 10-17, 19, 21, 23; LOW langkah 5, 18 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-02`<br>[MAIP-1021](https://qa-milradius.atlassian.net/browse/MAIP-1021) | [MAIPs][Mod_15] PCT-02 Semakan dan Kuiri<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil menerima notifikasi, membuka Cuti A dan meminta semakan semula dengan catatan wajib.  <br>**Kegentingan:** HIGH langkah 2-3, 5, 7-8, 11; MEDIUM langkah 4, 6, 9-10 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-03`<br>[MAIP-1022](https://qa-milradius.atlassian.net/browse/MAIP-1022) | [MAIPs][Mod_15] PCT-03 Hantar Semula Baharu<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil menerima notifikasi kuiri, meminda Cuti A dan menghantar semula permohonan yang sama.  <br>**Kegentingan:** HIGH langkah 2, 4-5, 9-10; MEDIUM langkah 3, 6-7; LOW langkah 8 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-04`<br>[MAIP-1023](https://qa-milradius.atlassian.net/browse/MAIP-1023) | [MAIPs][Mod_15] PCT-04 Sahkan Permohonan Baharu<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil mengesahkan Cuti A; permohonan menjadi Diluluskan dan tiada tindakan lanjut ditawarkan.  <br>**Kegentingan:** HIGH langkah 2, 4, 7-8; MEDIUM langkah 3, 5-6 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-05`<br>[MAIP-1024](https://qa-milradius.atlassian.net/browse/MAIP-1024) | [MAIPs][Mod_15] PCT-05 Semak Cuti Diluluskan<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil melihat Cuti A yang diluluskan, menguji penapis senarai dan semakan pertindihan, lalu memohon Cuti B dan Cuti D.  <br>**Kegentingan:** HIGH langkah 2, 4-5, 10-12; MEDIUM langkah 3, 6-7, 9; LOW langkah 8 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-06`<br>[MAIP-1025](https://qa-milradius.atlassian.net/browse/MAIP-1025) | [MAIPs][Mod_15] PCT-06 Sahkan dan Tolak<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil mengesahkan Cuti B, gagal mengesahkan Cuti D yang kini bertindih, lalu menolak Cuti D.  <br>**Kegentingan:** HIGH langkah 2, 4-8, 10-11; MEDIUM langkah 3, 9 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-07`<br>[MAIP-1026](https://qa-milradius.atlassian.net/browse/MAIP-1026) | [MAIPs][Mod_15] PCT-07 Mohon Lanjut Cuti<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil melihat penolakan Cuti D dan memohon Lanjut bagi Cuti A; semua validasi Borang Lanjut Cuti disemak.  <br>**Kegentingan:** HIGH langkah 2, 4-6, 12-13, 18-19; MEDIUM langkah 3, 7-11, 14-17 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-08`<br>[MAIP-1027](https://qa-milradius.atlassian.net/browse/MAIP-1027) | [MAIPs][Mod_15] PCT-08 Kuiri Permohonan Lanjut<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil menyemak permohonan Lanjut A1 dan meminta semakan semula.  <br>**Kegentingan:** HIGH langkah 2-3, 6; MEDIUM langkah 4-5 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-09`<br>[MAIP-1028](https://qa-milradius.atlassian.net/browse/MAIP-1028) | [MAIPs][Mod_15] PCT-09 Hantar Semula Lanjut<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil meminda permohonan Lanjut A1 yang dalam kuiri dan menghantarnya semula.  <br>**Kegentingan:** HIGH langkah 2, 4-5, 8; MEDIUM langkah 3, 6-7 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-10`<br>[MAIP-1029](https://qa-milradius.atlassian.net/browse/MAIP-1029) | [MAIPs][Mod_15] PCT-10 Sahkan Permohonan Lanjut<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil mengesahkan Lanjut A1; permohonan menjadi Dilanjutkan dan Tarikh Akhir Efektif Cuti A dikemas kini.  <br>**Kegentingan:** HIGH langkah 2, 4, 6; MEDIUM langkah 3, 5 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-11`<br>[MAIP-1030](https://qa-milradius.atlassian.net/browse/MAIP-1030) | [MAIPs][Mod_15] PCT-11 Mohon Batal Cuti Separa<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil menyemak Cuti A yang dilanjutkan dan memohon pembatalan baki cuti bermula T + 14 hari.  <br>**Kegentingan:** HIGH langkah 2, 4-6, 12, 19-20; MEDIUM langkah 3, 7-11, 13-18 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-12`<br>[MAIP-1031](https://qa-milradius.atlassian.net/browse/MAIP-1031) | [MAIPs][Mod_15] PCT-12 Sahkan Batal Separa<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil mengesahkan pembatalan separa Batal A1.  <br>**Kegentingan:** HIGH langkah 2-3, 6; MEDIUM langkah 4-5 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-13`<br>[MAIP-1032](https://qa-milradius.atlassian.net/browse/MAIP-1032) | [MAIPs][Mod_15] PCT-13 Mohon Batal Penuh<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil menyemak kesan pembatalan separa pada Cuti A, kemudian memohon pembatalan keseluruhan Cuti B.  <br>**Kegentingan:** HIGH langkah 2, 5-9; MEDIUM langkah 3-4 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-14`<br>[MAIP-1033](https://qa-milradius.atlassian.net/browse/MAIP-1033) | [MAIPs][Mod_15] PCT-14 Sahkan Batal Penuh<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil mengesahkan pembatalan keseluruhan Cuti B.  <br>**Kegentingan:** HIGH langkah 2, 4, 6; MEDIUM langkah 3, 5 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-15`<br>[MAIP-1034](https://qa-milradius.atlassian.net/browse/MAIP-1034) | [MAIPs][Mod_15] PCT-15 Semak Batal Penuh<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil menyemak Cuti B yang dibatalkan sepenuhnya, menyemak menu yang tidak dibenarkan, dan memohon Lanjut kedua bagi Cuti A.  <br>**Kegentingan:** HIGH langkah 2-8 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-16`<br>[MAIP-1035](https://qa-milradius.atlassian.net/browse/MAIP-1035) | [MAIPs][Mod_15] PCT-16 Tolak Permohonan Lanjut<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil menolak Lanjut A2; cuti asal tidak berubah.  <br>**Kegentingan:** HIGH langkah 2-3, 6; MEDIUM langkah 4-5 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-17`<br>[MAIP-1036](https://qa-milradius.atlassian.net/browse/MAIP-1036) | [MAIPs][Mod_15] PCT-17 Semak Tolak Lanjut<br><br>**Description:** **Peranan:** Amil  <br>**Ringkasan:** Amil mengesahkan Cuti A kekal tidak berubah selepas Lanjut A2 ditolak, dan memohon Cuti E yang dibiarkan menunggu.  <br>**Kegentingan:** HIGH langkah 2, 4-6; MEDIUM langkah 3 | TBD — no verified script mapping | TBD |
| MVP2 | Permohonan Cuti Amil | TBD | TBD | `PCT-18`<br>[MAIP-1037](https://qa-milradius.atlassian.net/browse/MAIP-1037) | [MAIPs][Mod_15] PCT-18 Senarai Tidak Bertugas<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Penyelaras Amil menyemak Senarai Amil Tidak Bertugas: kolum, rekod yang layak, penapis, julat tarikh dan penomboran.  <br>**Kegentingan:** HIGH langkah 2-3, 5-8; MEDIUM langkah 4, 9-16; LOW langkah 17-19 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1020 (PCT-01; MAIP-1020) | TBD | TBD | TBD | TBD |
| MAIP-1021 (PCT-02; MAIP-1021) | TBD | TBD | TBD | TBD |
| MAIP-1022 (PCT-03; MAIP-1022) | TBD | TBD | TBD | TBD |
| MAIP-1023 (PCT-04; MAIP-1023) | TBD | TBD | TBD | TBD |
| MAIP-1024 (PCT-05; MAIP-1024) | TBD | TBD | TBD | TBD |
| MAIP-1025 (PCT-06; MAIP-1025) | TBD | TBD | TBD | TBD |
| MAIP-1026 (PCT-07; MAIP-1026) | TBD | TBD | TBD | TBD |
| MAIP-1027 (PCT-08; MAIP-1027) | TBD | TBD | TBD | TBD |
| MAIP-1028 (PCT-09; MAIP-1028) | TBD | TBD | TBD | TBD |
| MAIP-1029 (PCT-10; MAIP-1029) | TBD | TBD | TBD | TBD |
| MAIP-1030 (PCT-11; MAIP-1030) | TBD | TBD | TBD | TBD |
| MAIP-1031 (PCT-12; MAIP-1031) | TBD | TBD | TBD | TBD |
| MAIP-1032 (PCT-13; MAIP-1032) | TBD | TBD | TBD | TBD |
| MAIP-1033 (PCT-14; MAIP-1033) | TBD | TBD | TBD | TBD |
| MAIP-1034 (PCT-15; MAIP-1034) | TBD | TBD | TBD | TBD |
| MAIP-1035 (PCT-16; MAIP-1035) | TBD | TBD | TBD | TBD |
| MAIP-1036 (PCT-17; MAIP-1036) | TBD | TBD | TBD | TBD |
| MAIP-1037 (PCT-18; MAIP-1037) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

