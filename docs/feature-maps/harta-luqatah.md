# Harta Luqatah — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 22 Test issues, 22 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP3 — [Mod_14]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-01`<br>[MAIP-1111](https://qa-milradius.atlassian.net/browse/MAIP-1111) | [MAIPs][Mod_14]HLQ-01 Daftar Serahan Penyerah<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia membuka pendaftaran serahan dan mengisi Maklumat Peribadi Penyerah Harta dengan semakan medan wajib, panjang dan muat naik salinan kad pengenalan.  <br>**Kegentingan:** HIGH langkah 2, 4; MEDIUM langkah 3, 6-18, 20-21; LOW langkah 5, 19 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-02`<br>[MAIP-1112](https://qa-milradius.atlassian.net/browse/MAIP-1112) | [MAIPs][Mod_14]HLQ-02 Daftar Maklumat Harta<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia mengisi Maklumat Harta dengan semakan Jenis Harta, Tarikh Dijumpai, Kuantiti, Anggaran Nilai dan muat naik gambar harta.  <br>**Kegentingan:** MEDIUM langkah 2-15, 17; LOW langkah 16 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-03`<br>[MAIP-1113](https://qa-milradius.atlassian.net/browse/MAIP-1113) | [MAIPs][Mod_14]HLQ-03 Daftar Saksi dan Hantar<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia menambah Saksi dengan semakan medan wajib, Poskod dan dokumen, kemudian menghantar serahan dan menerima No. Rujukan.  <br>**Kegentingan:** HIGH langkah 27-28; MEDIUM langkah 2-19, 21-25; LOW langkah 20 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-04`<br>[MAIP-1114](https://qa-milradius.atlassian.net/browse/MAIP-1114) | [MAIPs][Mod_14]HLQ-04 Carian dan Butiran<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia menggunakan carian dan penapis senarai, kemudian membuka Butiran Harta Luqatah dan menyemak dokumen serta Aliran Permohonan.  <br>**Kegentingan:** HIGH langkah 12, 16; MEDIUM langkah 2-10, 13-15; LOW langkah 11 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-05`<br>[MAIP-1115](https://qa-milradius.atlassian.net/browse/MAIP-1115) | [MAIPs][Mod_14]HLQ-05 Kemas Kini Serahan<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia mengemas kini rekod berstatus Baharu dengan sebab wajib, dialog pengesahan dan audit sebelum/selepas.  <br>**Kegentingan:** HIGH langkah 2, 10-11, 15; MEDIUM langkah 3-9, 12-13, 16; LOW langkah 14 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-06`<br>[MAIP-1116](https://qa-milradius.atlassian.net/browse/MAIP-1116) | [MAIPs][Mod_14]HLQ-06 Notifikasi Akses Baharu<br><br>**Description:** **Peranan:** Pengesah  <br>**Ringkasan:** Pengesah menerima notifikasi rekod baharu dan kemas kini; Pengesah, Auditor dan Pelulus tidak ditawarkan tindakan Penyedia pada rekod Baharu.  <br>**Kegentingan:** HIGH langkah 2, 6-10, 12-17; MEDIUM langkah 3-5, 11 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-07`<br>[MAIP-1117](https://qa-milradius.atlassian.net/browse/MAIP-1117) | [MAIPs][Mod_14]HLQ-07 Tuntut di Kaunter<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia merekod Penuntut dan dokumen tuntutan di kaunter dengan semakan medan dan dokumen wajib, lalu rekod beralih ke Dalam Semakan.  <br>**Kegentingan:** HIGH langkah 2, 4, 22, 24; MEDIUM langkah 5-21, 23, 25 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-08`<br>[MAIP-1118](https://qa-milradius.atlassian.net/browse/MAIP-1118) | [MAIPs][Mod_14]HLQ-08 Tugasan Pengesah<br><br>**Description:** **Peranan:** Pengesah  <br>**Ringkasan:** Pengesah membuka rekod Dalam Semakan, mengambil dan melepaskan tugasan; pengguna lain tidak boleh bertindak semasa tugasan dipegang.  <br>**Kegentingan:** HIGH langkah 2, 4, 8, 10-12, 14-15; MEDIUM langkah 3, 5-6, 13, 17-18; LOW langkah 7, 9 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-09`<br>[MAIP-1119](https://qa-milradius.atlassian.net/browse/MAIP-1119) | [MAIPs][Mod_14]HLQ-09 Kuiri Semula Pengesah<br><br>**Description:** **Peranan:** Pengesah  <br>**Ringkasan:** Pengesah memulangkan tuntutan ke kaunter dengan catatan wajib; status menjadi Dokumen Tidak Lengkap dan tugasan dilepaskan.  <br>**Kegentingan:** HIGH langkah 2, 8, 10; MEDIUM langkah 3-7, 9 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-10`<br>[MAIP-1120](https://qa-milradius.atlassian.net/browse/MAIP-1120) | [MAIPs][Mod_14]HLQ-10 Hantar Semula Dokumen<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia penginap dimaklumkan tentang kuiri, melengkapkan dokumen dan maklumat Penuntut di kaunter, lalu menghantar semula untuk semakan.  <br>**Kegentingan:** HIGH langkah 2, 4, 6, 14; MEDIUM langkah 3, 5, 7-13, 15 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-11`<br>[MAIP-1121](https://qa-milradius.atlassian.net/browse/MAIP-1121) | [MAIPs][Mod_14]HLQ-11 Sahkan Tuntutan<br><br>**Description:** **Peranan:** Pengesah  <br>**Ringkasan:** Pengesah mengambil tugasan dan mengesahkan tuntutan dengan Catatan Pengesahan wajib (minimum 20 aksara, maksimum 200 patah perkataan).  <br>**Kegentingan:** HIGH langkah 2, 6, 12; MEDIUM langkah 3, 5, 7-11, 13 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-12`<br>[MAIP-1122](https://qa-milradius.atlassian.net/browse/MAIP-1122) | [MAIPs][Mod_14]HLQ-12 Buka Rekod Pelulus<br><br>**Description:** **Peranan:** Pelulus  <br>**Ringkasan:** Pembukaan rekod Disahkan oleh peranan lain tidak mengubah status; Pelulus pertama membuka rekod menjadi Menunggu Kelulusan dan mengambil tugasan.  <br>**Kegentingan:** HIGH langkah 2-5, 7, 9, 11-14; MEDIUM langkah 6, 8, 10 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-13`<br>[MAIP-1123](https://qa-milradius.atlassian.net/browse/MAIP-1123) | [MAIPs][Mod_14]HLQ-13 Kuiri Semula Pelulus<br><br>**Description:** **Peranan:** Pelulus  <br>**Ringkasan:** Pelulus memulangkan tuntutan ke kaunter; status menjadi Dokumen Tidak Lengkap dan Catatan Pengesahan dikosongkan.  <br>**Kegentingan:** HIGH langkah 2, 6, 8; MEDIUM langkah 3-5, 7 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-14`<br>[MAIP-1124](https://qa-milradius.atlassian.net/browse/MAIP-1124) | [MAIPs][Mod_14]HLQ-14 Hantar dan Sahkan Semula<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Selepas kuiri Pelulus, Penyedia menghantar semula; Pelulus tidak boleh Lulus sehingga Pengesah mengesahkan semula.  <br>**Kegentingan:** HIGH langkah 2, 5-8, 10; MEDIUM langkah 3 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-15`<br>[MAIP-1125](https://qa-milradius.atlassian.net/browse/MAIP-1125) | [MAIPs][Mod_14]HLQ-15 Lulus Tuntutan<br><br>**Description:** **Peranan:** Pelulus  <br>**Ringkasan:** Pelulus meluluskan tuntutan dengan Catatan Pengesahan wajib; status menjadi Diluluskan.  <br>**Kegentingan:** HIGH langkah 2-3, 5, 10, 12; MEDIUM langkah 4, 6-9, 11 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-16`<br>[MAIP-1126](https://qa-milradius.atlassian.net/browse/MAIP-1126) | [MAIPs][Mod_14]HLQ-16 Serahan Tidak Berjaya<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia merekod serahan fizikal yang tidak berjaya dengan catatan wajib; rekod kembali ke Baharu untuk dituntut semula.  <br>**Kegentingan:** HIGH langkah 2, 4-5, 10; MEDIUM langkah 3, 6-9, 11 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-17`<br>[MAIP-1127](https://qa-milradius.atlassian.net/browse/MAIP-1127) | [MAIPs][Mod_14]HLQ-17 Tuntut Semula<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia menuntut semula pada tuntutan yang sama; Pengesah dan Pelulus melihat sebab kegagalan dan mengulangi pengesahan serta kelulusan.  <br>**Kegentingan:** HIGH langkah 4, 6-7, 9-10, 12; MEDIUM langkah 2-3, 5, 8, 11 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-18`<br>[MAIP-1128](https://qa-milradius.atlassian.net/browse/MAIP-1128) | [MAIPs][Mod_14]HLQ-18 Serahan kepada Wakil<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia menyerahkan harta kepada Wakil dengan semakan medan Penerima; rekod menjadi Dituntut dan dikunci.  <br>**Kegentingan:** HIGH langkah 2, 15; MEDIUM langkah 4-14, 16 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-19`<br>[MAIP-1129](https://qa-milradius.atlassian.net/browse/MAIP-1129) | [MAIPs][Mod_14]HLQ-19 Rekod Dikunci<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Rekod Dituntut dikunci: tiada peranan ditawarkan sebarang tindakan, dan Aliran Permohonan tidak boleh diubah.  <br>**Kegentingan:** HIGH langkah 2, 5-10; MEDIUM langkah 11; LOW langkah 3-4 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-20`<br>[MAIP-1130](https://qa-milradius.atlassian.net/browse/MAIP-1130) | [MAIPs][Mod_14]HLQ-20 Daftar Rekod Kedua<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Pengguna yang memegang peranan Penyedia dan Pelulus mendaftar serahan kedua dan merekod tuntutan, untuk ujian pengasingan tugas.  <br>**Kegentingan:** HIGH langkah 2, 7, 9; MEDIUM langkah 3-6 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-21`<br>[MAIP-1131](https://qa-milradius.atlassian.net/browse/MAIP-1131) | [MAIPs][Mod_14]HLQ-21 Pengasingan Tugas<br><br>**Description:** **Peranan:** Pelulus  <br>**Ringkasan:** Pengguna yang telah menuntut atau mengesahkan rekod tidak boleh meluluskannya; Pelulus lain meluluskan.  <br>**Kegentingan:** HIGH langkah 2, 4-14, 16 | TBD — no verified script mapping | TBD |
| MVP3 | Harta Luqatah | TBD | TBD | `HLQ-22`<br>[MAIP-1132](https://qa-milradius.atlassian.net/browse/MAIP-1132) | [MAIPs][Mod_14]HLQ-22 Serahan Diri Sendiri<br><br>**Description:** **Peranan:** Penyedia  <br>**Ringkasan:** Penyedia menyerahkan harta kepada Penuntut sendiri selepas mengesahkan No. Kad Pengenalan Penuntut.  <br>**Kegentingan:** HIGH langkah 2-3, 7; MEDIUM langkah 4-6, 8 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1111 (HLQ-01; MAIP-1111) | TBD | TBD | TBD | TBD |
| MAIP-1112 (HLQ-02; MAIP-1112) | TBD | TBD | TBD | TBD |
| MAIP-1113 (HLQ-03; MAIP-1113) | TBD | TBD | TBD | TBD |
| MAIP-1114 (HLQ-04; MAIP-1114) | TBD | TBD | TBD | TBD |
| MAIP-1115 (HLQ-05; MAIP-1115) | TBD | TBD | TBD | TBD |
| MAIP-1116 (HLQ-06; MAIP-1116) | TBD | TBD | TBD | TBD |
| MAIP-1117 (HLQ-07; MAIP-1117) | TBD | TBD | TBD | TBD |
| MAIP-1118 (HLQ-08; MAIP-1118) | TBD | TBD | TBD | TBD |
| MAIP-1119 (HLQ-09; MAIP-1119) | TBD | TBD | TBD | TBD |
| MAIP-1120 (HLQ-10; MAIP-1120) | TBD | TBD | TBD | TBD |
| MAIP-1121 (HLQ-11; MAIP-1121) | TBD | TBD | TBD | TBD |
| MAIP-1122 (HLQ-12; MAIP-1122) | TBD | TBD | TBD | TBD |
| MAIP-1123 (HLQ-13; MAIP-1123) | TBD | TBD | TBD | TBD |
| MAIP-1124 (HLQ-14; MAIP-1124) | TBD | TBD | TBD | TBD |
| MAIP-1125 (HLQ-15; MAIP-1125) | TBD | TBD | TBD | TBD |
| MAIP-1126 (HLQ-16; MAIP-1126) | TBD | TBD | TBD | TBD |
| MAIP-1127 (HLQ-17; MAIP-1127) | TBD | TBD | TBD | TBD |
| MAIP-1128 (HLQ-18; MAIP-1128) | TBD | TBD | TBD | TBD |
| MAIP-1129 (HLQ-19; MAIP-1129) | TBD | TBD | TBD | TBD |
| MAIP-1130 (HLQ-20; MAIP-1130) | TBD | TBD | TBD | TBD |
| MAIP-1131 (HLQ-21; MAIP-1131) | TBD | TBD | TBD | TBD |
| MAIP-1132 (HLQ-22; MAIP-1132) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP3`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

