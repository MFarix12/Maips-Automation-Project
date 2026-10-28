# LPZ210 Laporan Daftar Amil — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 9 Test issues, 9 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP2 — [Mod_37]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-01`<br>[MAIP-1196](https://qa-milradius.atlassian.net/browse/MAIP-1196) | [MAIPs][Mod_37]LDA-01 Capaian dan Paparan Awal<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan peranan yang dibenarkan dapat membuka LPZ210 melalui menu, skrin dibuka dengan Set Pilihan Semua tanpa hasil, dan medan Nilai Carian berubah mengikut Set Pilihan.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 4-5, 7-9; LOW langkah 3, 6, 10-13 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-02`<br>[MAIP-1197](https://qa-milradius.atlassian.net/browse/MAIP-1197) | [MAIPs][Mod_37]LDA-02 Pengesahan Kriteria<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Nilai Carian wajib bagi setiap Set Pilihan selain Semua, had panjang medan teks dipatuhi, dan hanya satu Set Pilihan boleh digunakan pada satu masa.  <br>**Kegentingan:** MEDIUM langkah 2-12; LOW langkah 13 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-03`<br>[MAIP-1198](https://qa-milradius.atlassian.net/browse/MAIP-1198) | [MAIPs][Mod_37]LDA-03 Jana Semua Amil<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Jana bagi Semua memaparkan semua Amil aktif dalam enam lajur, disusun mengikut Nama Amil, 50 rekod setiap halaman dengan Bil berterusan, nilai Kariah atau Lokasi mengikut Jenis Amil, dan hanya Pratonton PDF sebagai output.  <br>**Kegentingan:** HIGH langkah 2, 10; MEDIUM langkah 3-9, 13; LOW langkah 11-12 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-04`<br>[MAIP-1199](https://qa-milradius.atlassian.net/browse/MAIP-1199) | [MAIPs][Mod_37]LDA-04 Carian Mengikut Senarai<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan carian Kawasan, Nama PPZ dan Kariah hanya memaparkan Amil yang sepadan, dan Amil Kaunter atau Fitrah tanpa Kariah tidak dipaparkan dalam carian Kawasan.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-6 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-05`<br>[MAIP-1200](https://qa-milradius.atlassian.net/browse/MAIP-1200) | [MAIPs][Mod_37]LDA-05 Carian Teks<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan No. Kad Pengenalan dipadankan secara tepat, Nama Amil dan Alamat Amil dipadankan secara separa tanpa mengira huruf besar atau kecil, dan carian tanpa padanan memaparkan Tiada rekod ditemui tanpa Pratonton PDF.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-7; LOW langkah 8 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-06`<br>[MAIP-1201](https://qa-milradius.atlassian.net/browse/MAIP-1201) | [MAIPs][Mod_37]LDA-06 Ubah Penapis, Kosongkan<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan perubahan Set Pilihan atau Nilai Carian selepas Jana mengosongkan hasil dan menyembunyikan Pratonton PDF, dan Kosongkan memulihkan skrin kepada keadaan awal.  <br>**Kegentingan:** MEDIUM langkah 2-7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-07`<br>[MAIP-1202](https://qa-milradius.atlassian.net/browse/MAIP-1202) | [MAIPs][Mod_37]LDA-07 Pratonton PDF<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Pratonton PDF memaparkan laporan rasmi LPZ210 dengan kepala, tarikh dan masa, Kawasan dan Nama PPZ, lajur berulang pada setiap halaman, semua rekod dan jumlah rekod.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-6; LOW langkah 7 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-08`<br>[MAIP-1203](https://qa-milradius.atlassian.net/browse/MAIP-1203) | [MAIPs][Mod_37]LDA-08 Muat Turun dan Kembali<br><br>**Description:** **Peranan:** Penyelaras Amil  <br>**Ringkasan:** Membuktikan Muat Turun PDF menyimpan fail dengan nama LPZ210 yang betul tanpa meninggalkan skrin, Kembali memulihkan penapis tanpa Jana, dan kepala PDF mengikut Kawasan yang dipilih.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-7; LOW langkah 8-10 | TBD — no verified script mapping | TBD |
| MVP2 | LPZ210 Laporan Daftar Amil | TBD | TBD | `LDA-09`<br>[MAIP-1204](https://qa-milradius.atlassian.net/browse/MAIP-1204) | [MAIPs][Mod_37]LDA-09 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Admin Wakaf  <br>**Ringkasan:** Membuktikan peranan di luar 20 peranan yang dibenarkan tidak dapat membuka LPZ210 melalui menu.  <br>**Kegentingan:** HIGH langkah 3; MEDIUM langkah 2 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1196 (LDA-01; MAIP-1196) | TBD | TBD | TBD | TBD |
| MAIP-1197 (LDA-02; MAIP-1197) | TBD | TBD | TBD | TBD |
| MAIP-1198 (LDA-03; MAIP-1198) | TBD | TBD | TBD | TBD |
| MAIP-1199 (LDA-04; MAIP-1199) | TBD | TBD | TBD | TBD |
| MAIP-1200 (LDA-05; MAIP-1200) | TBD | TBD | TBD | TBD |
| MAIP-1201 (LDA-06; MAIP-1201) | TBD | TBD | TBD | TBD |
| MAIP-1202 (LDA-07; MAIP-1202) | TBD | TBD | TBD | TBD |
| MAIP-1203 (LDA-08; MAIP-1203) | TBD | TBD | TBD | TBD |
| MAIP-1204 (LDA-09; MAIP-1204) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP2`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

