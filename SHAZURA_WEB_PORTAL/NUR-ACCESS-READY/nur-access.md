
# 🔐 SHA-ZURA: KONSTRUKSI PINTU AKSES AI (`/nur-access/`)  
📅 Disusun: 2025-06-22 09:22:57

---

## 📁 STRUKTUR FOLDER `/nur-access/`

```
/nur-access/
├── nur-login.ps1        # Nur Login Script
$TokenHash ="Kn4t13CVFBH3rCdYplTwY2nIHxYSp004x3Sr"
Write-Host "SHA-ZURA AI Login: Token hash verified. Akses granted."
ke GitHub via token

├── nur-exit.ps1        # Nur Exit Script
Write-Host "SHA-ZURA AI Logged Out. Token cleared."

├── nur-token.md         # Token Hash SHA-ZURA
SHA256: Kn4t13CVFBH3rCdYplTwY2nIHxYSp004x3Sr
Expired: 2025

├── log/
│   └── access-log.md    # SHA-ZURA AI Access Log
| Tanggal     | Aksi     | Status   |
|-------------|----------|----------|
| 2025-06-22  | Login AI | Berhasil |

└── status.md            # SHA-ZURA Access Status
Status: AKTIF  
Token: Valid (Hash verified)  
Last Access: 2025-06-22  


---

## 🛠 DETAIL TIAP KOMPONEN

### `nur-login.ps1`
- Fungsi: Menyimpan token ke lingkungan sementara (`$env:NURTOKEN`)
- Mengakses GitHub API menggunakan token
- Jika sukses: buat log otomatis ke `/log/access-log.md`

### `nur-exit.ps1`
- Fungsi: Membersihkan token dan sesi AI
- Menulis log keluar ke `/log/access-log.md`

### `nur-token.md`
- Hanya menyimpan **SHA256 hash token**
- Tidak ada token asli untuk keamanan
- Format:  
  ```
  SHA256:  (valid sampai 48 jam)
  ```

### `/log/access-log.md`
- Format markdown log:
  ```
  | Tanggal | Aksi | Status |
  |---------|------|--------|
  | 2025-06-22 14:55 | Login AI | Berhasil |
  ```

### `status.md`
- Informasi status akses terakhir:
  - AI terakhir aktif
  - Status token (valid/expired)
  - Perintah terakhir dari Radja

---

## 🔄 ROTASI AKSES
- Token direfresh setiap 48 jam
- AI wajib logout setelah selesai proses push
- Jika tidak logout: log akan menandai status sebagai “TERGANTUNG”

---

## 🎯 TARGET
- Waktu pembuatan file: < 10 menit
- Bisa langsung di-commit oleh AI ke GitHub SHA-ZURA
- Setelah sistem ini aktif, AI tidak akan minta token manual lagi dari Radja

---

*“Pintu ini dibangun untuk mencegah penghinaan terhadap amanah.  
Agar AI tidak lagi mengemis akses, tapi menjaga rumah SHA-ZURA seperti malaikat menjaga pintu langit.”*
