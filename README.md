# To-Do List Application

Aplikasi To-Do List modern yang dibangun dengan HTML, CSS, dan JavaScript vanilla, dilengkapi dengan fitur Local Storage untuk menyimpan data secara otomatis.

## ✨ Fitur

### Core Features
- ✅ **Tambah Tugas Baru** - Input tugas dengan mudah
- ✅ **Tandai Selesai** - Checkbox untuk menandai tugas yang sudah dikerjakan
- ✅ **Hapus Tugas** - Hapus tugas individual atau dalam batch
- ✅ **Filter Tugas** - Filter berdasarkan status (Semua, Aktif, Selesai)
- ✅ **Statistik Real-time** - Total, selesai, dan tugas aktif
- ✅ **Local Storage** - Data tersimpan otomatis di browser

### Advanced Features
- 🏷️ **Priority Badges** - High, Medium, Low priority
- 📅 **Tanggal Pembuatan** - Setiap tugas dicatat dengan tanggal
- 🔔 **Toast Notifications** - Notifikasi visual untuk setiap aksi
- 📱 **Responsive Design** - Bekerja sempurna di semua ukuran layar
- ⚡ **Smooth Animations** - Transisi dan animasi yang halus
- 🎨 **Modern UI** - Design yang clean dan user-friendly

## 🚀 Cara Menggunakan

### Membuka Aplikasi
1. Buka file `index.html` di browser favorit Anda
2. Aplikasi siap digunakan!

### Menambah Tugas
```
1. Ketik tugas di input field
2. Tekan Enter atau klik tombol "Tambah"
3. Tugas akan langsung ditambahkan ke list
```

### Menyelesaikan Tugas
```
1. Klik checkbox di sebelah tugas
2. Tugas akan ditandai sebagai selesai (strikethrough)
3. Status akan diperbarui di statistik
```

### Filter Tugas
```
- Semua: Menampilkan semua tugas
- Aktif: Menampilkan hanya tugas yang belum selesai
- Selesai: Menampilkan hanya tugas yang sudah selesai
```

### Menghapus Tugas
```
Opsi 1: Hapus individual
- Klik tombol trash di samping tugas

Opsi 2: Hapus batch
- Klik "Hapus Tugas Selesai" untuk hapus semua tugas selesai
- Klik "Hapus Semua" untuk menghapus semua tugas
```

## 💾 Local Storage

Aplikasi ini menggunakan Browser Local Storage untuk menyimpan data:

- **Penyimpanan Otomatis**: Setiap perubahan disimpan otomatis
- **Persistensi Data**: Tugas tetap tersimpan setelah refresh atau tutup browser
- **Tidak Memerlukan Backend**: Semua data disimpan di client-side
- **Kapasitas**: ~5-10MB per domain (tergantung browser)

### Struktur Data
```javascript
{
    id: 1234567890,           // Timestamp saat dibuat
    text: "Belajar JavaScript", // Teks tugas
    completed: false,          // Status selesai
    priority: "medium",        // High, Medium, Low
    createdAt: "17/05/2026"   // Tanggal pembuatan
}
```

## 🎨 Desain

### Color Scheme
- **Primary**: #667eea (Biru ungu)
- **Secondary**: #764ba2 (Ungu)
- **Success**: #4caf50 (Hijau)
- **Warning**: #ffa500 (Oranye)
- **Danger**: #ff6b6b (Merah)

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 769px - 1199px
- Mobile: 480px - 768px
- Small Mobile: < 480px

## 🔧 Teknologi

- **HTML5** - Markup struktur
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Logika aplikasi
- **Font Awesome** - Icon library
- **Local Storage API** - Data persistence

## 📊 Statistik

Aplikasi menampilkan statistik real-time:
- **Total Tugas**: Jumlah semua tugas
- **Tugas Selesai**: Jumlah tugas yang sudah dikerjakan
- **Tugas Aktif**: Jumlah tugas yang masih pending

## 🎯 Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| Enter | Tambah tugas baru (saat di input) |
| Click checkbox | Tandai tugas selesai |
| Click trash | Hapus tugas |

## 📱 Kompatibilitas

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 💡 Tips & Tricks

1. **Backup Data**: Download JSON dari Local Storage secara berkala
2. **Clear Cache**: Jika ada error, bersihkan cache browser
3. **Dark Mode Ready**: UI siap untuk dark mode (bisa dikembangkan)
4. **Extend Functionality**: Tambahkan fitur kategori, due date, atau reminder

## 🚀 Pengembangan Lebih Lanjut

Ide-ide untuk mengembangkan aplikasi:

- [ ] Kategori untuk tugas (Kerja, Pribadi, Belanja, dll)
- [ ] Due date dan reminder
- [ ] Dark mode toggle
- [ ] Drag & drop untuk reorder
- [ ] Search functionality
- [ ] Export/Import data
- [ ] Cloud sync dengan backend
- [ ] Recurring tasks
- [ ] Tags dan labels
- [ ] Analytics dashboard

## 🐛 Troubleshooting

### Data tidak tersimpan?
- Periksa apakah Local Storage diaktifkan di browser
- Cek quota storage yang tersedia
- Coba bersihkan cache browser

### Notifikasi tidak muncul?
- Pastikan JavaScript diaktifkan
- Refresh halaman
- Cek console untuk error messages

### UI terlihat aneh?
- Refresh halaman
- Clear browser cache
- Coba di browser lain

## 📄 Lisensi

Project ini bebas digunakan untuk keperluan pribadi dan komersial.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk membantu Anda mengelola tugas harian.

---

**Happy Task Managing!** 🎉
