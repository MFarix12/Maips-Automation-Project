# Aduan (Debtors) — Feature Map

[Back to module index](README.md)

Source snapshot: 28 October 2026 (Asia/Kuala_Lumpur). Source: Jira project MAIP; 11 Test issues, 11 unique test cases. Release identifiers below retain Jira fix-version names or release/MVP labels verbatim. Unspecified releases are `TBD`.

Test Scenario IDs and formal scenario descriptions were not available in the retrieved fields and remain `TBD`. Title prefixes group related cases below; they are not assigned scenario IDs. Jira keys remain traceability references; explicit internal IDs and case codes are preserved alongside them. Descriptions retain source wording, with HTML presentation converted to text. Detailed Xray manual steps were not exposed by the Jira connector: `TBD` pending export or verification. Prerequisites in descriptions are not substituted for execution steps.

Automation mapping and DEV/STG execution results are `TBD`; Jira workflow statuses such as Pass or Closed do not establish Playwright coverage. See the [index](README.md#automation-and-environments) for status definitions and environment handling.

## MVP3 — [Mod_25]

| Release | Module | Test Scenario ID | Test Scenario | Test Case ID | Test Case | Automation Status | Test Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-01`<br>[MAIP-1054](https://qa-milradius.atlassian.net/browse/MAIP-1054) | [MAIPs][Mod_25]ADU-01 Pengesahan Borang Aduan<br><br>**Description:** **Peranan:** Pengadu  <br>**Ringkasan:** Membuktikan medan wajib, had aksara, format dan had lampiran pada Borang Aduan ditolak dengan betul tanpa aduan dihantar.  <br>**Kegentingan:** HIGH langkah 2; MEDIUM langkah 3-6, 8-23, 25-26; LOW langkah 7, 24 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-02`<br>[MAIP-1055](https://qa-milradius.atlassian.net/browse/MAIP-1055) | [MAIPs][Mod_25]ADU-02 Hantar Aduan Baharu<br><br>**Description:** **Peranan:** Pengadu  <br>**Ringkasan:** Membuktikan Pengadu berdaftar boleh menghantar aduan dengan maklumat pra-isi yang diedit dan lampiran, menerima No. Rujukan dan melihat aduan sendiri secara baca sahaja.  <br>**Kegentingan:** HIGH langkah 10-11, 13, 17-18; MEDIUM langkah 2-3, 9, 12, 14-15; LOW langkah 16 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-03`<br>[MAIP-1056](https://qa-milradius.atlassian.net/browse/MAIP-1056) | [MAIPs][Mod_25]ADU-03 Aduan Tanpa Log Masuk<br><br>**Description:** **Peranan:** Orang Awam  <br>**Ringkasan:** Membuktikan orang awam boleh menghantar aduan melalui borang aduan awam tanpa log masuk dan menerima No. Rujukan.  <br>**Kegentingan:** HIGH langkah 1, 8; MEDIUM langkah 9 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-04`<br>[MAIP-1057](https://qa-milradius.atlassian.net/browse/MAIP-1057) | [MAIPs][Mod_25]ADU-04 Senarai Aduan Diterima<br><br>**Description:** **Peranan:** Pegawai Hartanah  <br>**Ringkasan:** Membuktikan Pegawai Hartanah melihat semua aduan baharu dalam Senarai Aduan Diterima, boleh mencari dan menapis, serta membuka butiran.  <br>**Kegentingan:** HIGH langkah 2, 4; MEDIUM langkah 3, 5-10, 12-13; LOW langkah 11 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-05`<br>[MAIP-1058](https://qa-milradius.atlassian.net/browse/MAIP-1058) | [MAIPs][Mod_25]ADU-05 Mula Semakan Aduan<br><br>**Description:** **Peranan:** Pegawai Hartanah  <br>**Ringkasan:** Membuktikan aduan Baharu hanya boleh dimulakan semakan dengan catatan wajib, dan pegawai pertama menjadi pegawai pengendali.  <br>**Kegentingan:** HIGH langkah 2-3, 7, 9-10, 13-16; MEDIUM langkah 4-5, 8, 11-12; LOW langkah 6 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-06`<br>[MAIP-1059](https://qa-milradius.atlassian.net/browse/MAIP-1059) | [MAIPs][Mod_25]ADU-06 Kemaskini Maklumat Aduan<br><br>**Description:** **Peranan:** Pegawai Hartanah  <br>**Ringkasan:** Membuktikan Simpan merekod catatan dalaman dan Hantar Kepada Pengadu menerbitkan catatan, kedua-duanya tanpa menukar status.  <br>**Kegentingan:** HIGH langkah 2, 4-5, 7-11; MEDIUM langkah 3, 6 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-07`<br>[MAIP-1060](https://qa-milradius.atlassian.net/browse/MAIP-1060) | [MAIPs][Mod_25]ADU-07 Akses Pegawai Lain<br><br>**Description:** **Peranan:** Pegawai Hartanah  <br>**Ringkasan:** Membuktikan Pegawai Hartanah lain boleh melihat aduan dan sejarah penuh tetapi tidak boleh mengambil tindakan.  <br>**Kegentingan:** HIGH langkah 2-5 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-08`<br>[MAIP-1061](https://qa-milradius.atlassian.net/browse/MAIP-1061) | [MAIPs][Mod_25]ADU-08 Semakan Status Pengadu<br><br>**Description:** **Peranan:** Pengadu  <br>**Ringkasan:** Membuktikan Pengadu melihat status terkini dan catatan yang diterbitkan sahaja, tanpa catatan dalaman.  <br>**Kegentingan:** HIGH langkah 2-7 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-09`<br>[MAIP-1062](https://qa-milradius.atlassian.net/browse/MAIP-1062) | [MAIPs][Mod_25]ADU-09 Tutup Aduan<br><br>**Description:** **Peranan:** Pegawai Hartanah  <br>**Ringkasan:** Membuktikan aduan hanya boleh ditutup dengan catatan hasil dan pengesahan, dan aduan Selesai tiada tindakan lanjut.  <br>**Kegentingan:** HIGH langkah 2-3, 5-10; MEDIUM langkah 4, 11 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-10`<br>[MAIP-1063](https://qa-milradius.atlassian.net/browse/MAIP-1063) | [MAIPs][Mod_25]ADU-10 Semakan Aduan Selesai<br><br>**Description:** **Peranan:** Pengadu  <br>**Ringkasan:** Membuktikan aduan Selesai kekal boleh dilihat oleh Pengadu, tidak dikira sebagai aktif, dan memaparkan catatan hasil.  <br>**Kegentingan:** HIGH langkah 2-6 | TBD — no verified script mapping | TBD |
| MVP3 | Aduan (Debtors) | TBD | TBD | `ADU-11`<br>[MAIP-1064](https://qa-milradius.atlassian.net/browse/MAIP-1064) | [MAIPs][Mod_25]ADU-11 Akses Tidak Dibenarkan<br><br>**Description:** **Peranan:** Pengguna Warga MAIPs  <br>**Ringkasan:** Membuktikan pengguna tanpa peranan Pegawai Hartanah tiada menu aduan dalaman, dan Pengadu lain tidak melihat aduan orang lain.  <br>**Kegentingan:** HIGH langkah 3, 7; MEDIUM langkah 2, 6 | TBD — no verified script mapping | TBD |

## Automation traceability and execution

Add a repository-relative script link only after matching this source case to the script's assertions and test data. Preserve all IDs in the test title or annotations. Record each environment's outcome and evidence independently; append dated runs rather than overwriting history.

| Test Case ID / Jira reference | Playwright JavaScript script | DEV result | STG result | Run date / evidence |
| --- | --- | --- | --- | --- |
| MAIP-1054 (ADU-01; MAIP-1054) | TBD | TBD | TBD | TBD |
| MAIP-1055 (ADU-02; MAIP-1055) | TBD | TBD | TBD | TBD |
| MAIP-1056 (ADU-03; MAIP-1056) | TBD | TBD | TBD | TBD |
| MAIP-1057 (ADU-04; MAIP-1057) | TBD | TBD | TBD | TBD |
| MAIP-1058 (ADU-05; MAIP-1058) | TBD | TBD | TBD | TBD |
| MAIP-1059 (ADU-06; MAIP-1059) | TBD | TBD | TBD | TBD |
| MAIP-1060 (ADU-07; MAIP-1060) | TBD | TBD | TBD | TBD |
| MAIP-1061 (ADU-08; MAIP-1061) | TBD | TBD | TBD | TBD |
| MAIP-1062 (ADU-09; MAIP-1062) | TBD | TBD | TBD | TBD |
| MAIP-1063 (ADU-10; MAIP-1063) | TBD | TBD | TBD | TBD |
| MAIP-1064 (ADU-11; MAIP-1064) | TBD | TBD | TBD | TBD |

## Maintenance notes

Releases represented: `MVP3`. Cases without a release remain visible under `TBD`. Add verified scenario IDs, Xray steps, and script mappings in place when authoritative sources become available. Preserve historical cases and use the deduplication policy in the [index](README.md#maintenance-and-deduplication).

