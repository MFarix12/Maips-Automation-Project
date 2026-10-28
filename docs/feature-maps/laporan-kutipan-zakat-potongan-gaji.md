# LPZ902 Laporan Kutipan Zakat Potongan Gaji — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 8 Test issues, 8 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_56]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-01`<br>[MAIP-1169](https://qa-milradius.atlassian.net/browse/MAIP-1169) | [MAIPs][Mod_56]PTG-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ902 melalui menu, penapis Tahun dan Bulan dipaparkan dengan nilai lalai, hasil belum dijana semasa skrin dibuka, dan Jana tanpa Tahun atau Bulan ditolak.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-8, 10-13; LOW langkah 3, 9 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-02`<br>[MAIP-1170](https://qa-milradius.atlassian.net/browse/MAIP-1170) | [MAIPs][Mod_56]PTG-02 Jana Hasil Bulanan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Jana memaparkan satu baris bagi setiap institusi untuk bulan dipilih, dengan lajur, susunan, format amaun, rekonsiliasi baris dan jumlah, sel jumlah staff kosong, serta penomboran 50 baris setiap halaman.  <br>**Kegentingan:** HIGH langkah 2, 9-12; MEDIUM langkah 4-8, 13-15; LOW langkah 3 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-03`<br>[MAIP-1171](https://qa-milradius.atlassian.net/browse/MAIP-1171) | [MAIPs][Mod_56]PTG-03 Pratonton Laporan<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Pratonton membuka format laporan sebenar bagi hasil yang sama: kepala laporan berulang, tajuk dengan bulan dan tahun, Bil berterusan, serta baris Jumlah RM dan ruang tandatangan sekali pada halaman terakhir.  <br>**Kegentingan:** HIGH langkah 2, 6, 9; MEDIUM langkah 3-4, 7-8, 10; LOW langkah 5 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-04`<br>[MAIP-1172](https://qa-milradius.atlassian.net/browse/MAIP-1172) | [MAIPs][Mod_56]PTG-04 Muat Turun dan Cetak<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan Muat Turun PDF, Excel dan CSV menghasilkan fail dengan nama dan kandungan yang betul daripada dataset yang sama, Cetak membuka dialog cetak, dan Kembali memulangkan pengguna ke halaman LPZ902 dengan penapis yang sama.  <br>**Kegentingan:** HIGH langkah 6, 9; MEDIUM langkah 2-5, 7-8, 10, 12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-05`<br>[MAIP-1173](https://qa-milradius.atlassian.net/browse/MAIP-1173) | [MAIPs][Mod_56]PTG-05 Hasil Lapuk Disekat<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan hasil lama dan butang Pratonton disembunyikan sebaik sahaja Tahun atau Bulan berubah, dan hanya dipaparkan semula selepas Jana.  <br>**Kegentingan:** HIGH langkah 3-4, 6, 9; MEDIUM langkah 2, 5, 8 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-06`<br>[MAIP-1174](https://qa-milradius.atlassian.net/browse/MAIP-1174) | [MAIPs][Mod_56]PTG-06 Tiada Rekod dan Ralat<br><br>**Description:** **Peranan:** Penyokong Zakat  <br>**Ringkasan:** Membuktikan bulan tanpa kutipan memaparkan mesej tiada rekod, bulan dengan data bermasalah memaparkan mesej ralat data, dan kedua-duanya tidak memaparkan baris, jumlah, butang Pratonton atau senarai resit kepada pengguna bukan pentadbir.  <br>**Kegentingan:** HIGH langkah 5-6; MEDIUM langkah 2-4, 7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-07`<br>[MAIP-1175](https://qa-milradius.atlassian.net/browse/MAIP-1175) | [MAIPs][Mod_56]PTG-07 Ralat Data Pentadbir<br><br>**Description:** **Peranan:** Admin Zakat  <br>**Ringkasan:** Membuktikan pentadbir dapat membuka LPZ902 dan, bagi bulan dengan data bermasalah, melihat senarai resit yang menyekat laporan bersama sebabnya.  <br>**Kegentingan:** HIGH langkah 2, 4; MEDIUM langkah 3, 5-6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ902 Laporan Kutipan Zakat Potongan Gaji | TBD | TBD | `PTG-08`<br>[MAIP-1176](https://qa-milradius.atlassian.net/browse/MAIP-1176) | [MAIPs][Mod_56]PTG-08 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan di luar senarai peranan yang dibenarkan tidak dapat membuka LPZ902 melalui menu.  <br>**Kegentingan:** HIGH langkah 3 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1169 (PTG-01; MAIP-1169) | TBD | TBD | TBD | TBD |
| MAIP-1170 (PTG-02; MAIP-1170) | TBD | TBD | TBD | TBD |
| MAIP-1171 (PTG-03; MAIP-1171) | TBD | TBD | TBD | TBD |
| MAIP-1172 (PTG-04; MAIP-1172) | TBD | TBD | TBD | TBD |
| MAIP-1173 (PTG-05; MAIP-1173) | TBD | TBD | TBD | TBD |
| MAIP-1174 (PTG-06; MAIP-1174) | TBD | TBD | TBD | TBD |
| MAIP-1175 (PTG-07; MAIP-1175) | TBD | TBD | TBD | TBD |
| MAIP-1176 (PTG-08; MAIP-1176) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

