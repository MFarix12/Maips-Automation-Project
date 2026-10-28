# Pengurusan Buku Program — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 8 Test issues, 8 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_12]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-01`<br>[MAIP-1041](https://qa-milradius.atlassian.net/browse/MAIP-1041) | [MAIPs][Mod_12]PBP-01 Tambah Program Baharu<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program A mendaftarkan Program A; setiap medan wajib, peraturan tarikh, had aksara, Peruntukan dan muat naik dokumen disemak.  <br>**Kegentingan:** HIGH langkah 2-3, 6, 32-33; MEDIUM langkah 4-5, 7-9, 11-31 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-02`<br>[MAIP-1042](https://qa-milradius.atlassian.net/browse/MAIP-1042) | [MAIPs][Mod_12]PBP-02 Status Semasa Tambah<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program A mendaftarkan program dengan setiap Status, termasuk dialog pengesahan Batal dan Selesai, Aktif bertarikh lampau, sempadan tarikh dan nama program berulang.  <br>**Kegentingan:** HIGH langkah 2-3, 6, 8; MEDIUM langkah 4-5, 7, 9-13 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-03`<br>[MAIP-1043](https://qa-milradius.atlassian.net/browse/MAIP-1043) | [MAIPs][Mod_12]PBP-03 Butiran dan Kemas Kini<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program A membuka Butiran Program A, menguji Batal dalam mod Kemas Kini, mengemas kini Lokasi, mengganti dan membuang Dokumen Sokongan, dan menukar Status kepada Ditunda.  <br>**Kegentingan:** HIGH langkah 2, 4, 10, 13; MEDIUM langkah 3, 5-8, 11-12, 14; LOW langkah 9 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-04`<br>[MAIP-1044](https://qa-milradius.atlassian.net/browse/MAIP-1044) | [MAIPs][Mod_12]PBP-04 Tukar Status Kemas Kini<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program A mengaktifkan semula Program A yang ditunda dengan dua tarikh baharu, Program G bertarikh lampau menjadi Selesai, dan Program H, I dan J ditukar kepada Batal atau Selesai melalui Kemas Kini dengan dialog pengesahan.  <br>**Kegentingan:** HIGH langkah 2, 4, 9, 12, 17, 19, 22, 26; MEDIUM langkah 3, 5-8, 10-11, 13-16, 18, 20-21, 23-25, 27 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-05`<br>[MAIP-1045](https://qa-milradius.atlassian.net/browse/MAIP-1045) | [MAIPs][Mod_12]PBP-05 Baca Sahaja dan Padam<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Rekod Selesai dan Batal dalam tempoh tidak boleh dikemas kini atau dipadam; rekod Ditunda yang Tarikh Tamatnya telah berlalu masih boleh dikemas kini dan kekal Ditunda; Penyelaras Program A memadam Program F yang tersilap didaftarkan.  <br>**Kegentingan:** HIGH langkah 2-6, 8, 10-11, 15; MEDIUM langkah 13-14; LOW langkah 7, 9, 12 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-06`<br>[MAIP-1046](https://qa-milradius.atlassian.net/browse/MAIP-1046) | [MAIPs][Mod_12]PBP-06 Penapis dan Muat Turun<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program A menguji carian, susunan lalai, penapis, pengekalan penapis, keadaan tiada rekod, isihan, pilihan bilangan baris dan Muat Turun CSV.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-14, 17; LOW langkah 15-16 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-07`<br>[MAIP-1047](https://qa-milradius.atlassian.net/browse/MAIP-1047) | [MAIPs][Mod_12]PBP-07 Akses Bahagian Lain<br><br>**Description:** **Peranan:** Penyelaras Program  <br>**Ringkasan:** Penyelaras Program B boleh melihat Program A milik Bahagian lain tetapi tidak boleh mengemas kini atau memadamnya, dan hanya boleh menambah program bagi Bahagiannya sendiri.  <br>**Kegentingan:** HIGH langkah 2-5, 7; MEDIUM langkah 6 | TBD — no verified script mapping | TBD |
| MVP2 | Pengurusan Buku Program | TBD | TBD | `PBP-08`<br>[MAIP-1048](https://qa-milradius.atlassian.net/browse/MAIP-1048) | [MAIPs][Mod_12]PBP-08 Akses Tanpa Peranan<br><br>**Description:** **Peranan:** Pegawai MAIPs  <br>**Ringkasan:** Pengguna tanpa peranan Penyelaras Program tidak melihat menu Pengurusan Program.  <br>**Kegentingan:** HIGH langkah 2-3 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1041 (PBP-01; MAIP-1041) | TBD | TBD | TBD | TBD |
| MAIP-1042 (PBP-02; MAIP-1042) | TBD | TBD | TBD | TBD |
| MAIP-1043 (PBP-03; MAIP-1043) | TBD | TBD | TBD | TBD |
| MAIP-1044 (PBP-04; MAIP-1044) | TBD | TBD | TBD | TBD |
| MAIP-1045 (PBP-05; MAIP-1045) | TBD | TBD | TBD | TBD |
| MAIP-1046 (PBP-06; MAIP-1046) | TBD | TBD | TBD | TBD |
| MAIP-1047 (PBP-07; MAIP-1047) | TBD | TBD | TBD | TBD |
| MAIP-1048 (PBP-08; MAIP-1048) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

