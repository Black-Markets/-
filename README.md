# TechStore - Website Toko Elektronik

Sebuah website toko elektronik modern yang dibangun dengan HTML, CSS, dan JavaScript vanilla. Menampilkan koleksi produk dengan fitur lengkap termasuk halaman detail produk.

## 📁 Struktur File

```
├── index.html          # Halaman utama dengan daftar produk
├── product.html        # Halaman detail produk
├── style.css           # Stylesheet untuk semua halaman
├── script.js           # JavaScript untuk fungsionalitas
└── README.md           # File dokumentasi ini
```

## ✨ Fitur

### Halaman Utama (index.html)
- Hero section dengan call-to-action
- Daftar produk dalam grid responsive
- Filter produk berdasarkan kategori:
  - Semua
  - Laptop
  - Smartphone
  - Aksesori
- Desain card produk yang menarik
- Harga asli dan harga diskon
- Rating dan review produk
- Responsive design untuk mobile

### Halaman Detail Produk (product.html)
- Galeri produk dengan thumbnail
- Informasi lengkap produk:
  - Harga dan diskon
  - Spesifikasi produk
  - Fitur utama
  - Status stok
- Tombol "Tambah ke Keranjang" dan "Beli Sekarang"
- Quantity selector
- Informasi penjual
- Tab deskripsi dan ulasan produk
- Produk terkait yang sesuai kategori
- Breadcrumb navigation

## 🎨 Desain

- **Color Scheme**: Biru primary (#007bff), hijau success, merah danger
- **Typography**: Font Segoe UI untuk konsistensi
- **Layout**: Grid-based responsive design
- **Animasi**: Hover effects dan smooth transitions

## 🚀 Cara Menggunakan

1. **Membuka website**
   - Buka `index.html` di browser untuk melihat halaman utama

2. **Melihat produk**
   - Scroll ke bawah atau klik "Belanja Sekarang" di hero section
   - Gunakan filter untuk menyaring produk berdasarkan kategori

3. **Melihat detail produk**
   - Klik tombol "Lihat Detail" pada produk apapun
   - Akan membawa ke halaman `product.html?id=[product-id]`

4. **Interaksi produk**
   - Ubah jumlah item dengan quantity selector
   - Klik "Tambah ke Keranjang" untuk menambah ke keranjang
   - Klik "Beli Sekarang" untuk membeli langsung

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 769px - 1199px
- Mobile: 480px - 768px
- Small mobile: < 480px

## 💾 Data Produk

Database produk disimpan dalam array `products` di `script.js` dengan informasi:
- ID
- Nama
- Kategori
- Harga
- Harga original
- Gambar & galeri
- Rating dan jumlah review
- Stok
- Deskripsi
- Spesifikasi
- Fitur

## 🔧 Teknologi

- **HTML5** - Struktur markup
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Fungsionalitas tanpa framework

## 📝 Catatan

- Gambar menggunakan placeholder dari placeholder.com
- Untuk implementasi live, ganti URL gambar dengan gambar produk asli
- Database produk dapat diganti dengan API backend
- Cart functionality saat ini hanya simulasi (dapat dikembangkan lebih lanjut)

## 📞 Kontak

- Email: info@techstore.com
- Phone: +62 812-3456-7890
- Location: Jakarta, Indonesia

---

Dibuat dengan ❤️ untuk memberikan pengalaman berbelanja online yang terbaik.
