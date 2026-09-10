// products.js — Data produk Koperasi Nelayan SERSAN
// Semua field "image" dikosongkan agar ProductCard menampilkan ImagePlaceholder.
// Ganti nilai image dengan path foto asli saat foto tersedia, contoh: '/images/tuna-segar.webp'
//
// Field panduan foto:
//   photoHint  — teks petunjuk yang tampil di placeholder frame
//   photoIcon  — ikon di placeholder: 'fish' | 'shrimp' | 'seaweed' | 'boat' | 'activity' | 'gallery'

const products = [
    {
        id: 1,
        slug: 'ikan-tuna',
        name: 'Ikan Tuna',
        category: 'Ikan Segar',
        description: 'Tuna segar ditangkap hari ini langsung dari perairan Maluku Utara. Daging tebal, warna merah cerah — cocok untuk sashimi, steak, atau masakan Nusantara.',
        longDescription: 'Ikan tuna dari nelayan SERSAN ditangkap menggunakan pancing ulur (hand-line) sehingga tubuh ikan tidak memar dan kesegaran terjaga maksimal. Kami menyediakan tuna grade konsumsi segar maupun grade ekspor. Tanya ketersediaan berat dan ukuran via WhatsApp.',
        image: '/images/ikan-tuna.webp', // 🖼️ Ganti dengan path foto asli, contoh: '/images/tuna-segar.webp'
        photoHint: 'Foto Ikan Tuna Segar — Tunjukkan Warna Daging & Mata Ikan yang Cerah',
        photoIcon: 'fish',
        availability: 'Tersedia',
    },
    {
        id: 2,
        slug: 'ikan-cakalang',
        name: 'Ikan Cakalang',
        category: 'Ikan Segar',
        description: 'Cakalang segar baru dari laut, kaya omega-3. Daging padat, rasa khas — sempurna untuk cakalang fufu, rica-rica, atau masakan kuah Maluku.',
        longDescription: 'Ikan cakalang yang ditangkap nelayan anggota SERSAN di perairan Halmahera & Morotai memiliki ukuran konsisten dan dagingnya lebih padat dibanding cakalang dari budidaya. Tersedia dalam beberapa ukuran — tanya via WhatsApp untuk info stok harian.',
        image: '/images/fotoikan2.webp',
        photoHint: 'Foto Ikan Cakalang Segar — Tumpukan di Palka atau di Atas Es',
        photoIcon: 'fish',
        availability: 'Tersedia',
    },
    // {
    //     id: 3,
    //     slug: 'ikan-tongkol',
    //     name: 'Ikan Tongkol',
    //     category: 'Ikan Segar',
    //     description: 'Tongkol segar pilihan, dagingnya padat dan gurih. Harga ramah di kantong, cocok untuk tumis, pindang, atau lauk sehari-hari keluarga.',
    //     longDescription: 'Ikan tongkol dari nelayan SERSAN dikenal ukurannya seragam dan kesegarannya terjaga karena langsung didinginkan dengan es setelah tangkap. Cocok untuk konsumsi keluarga maupun restoran yang butuh pasokan konsisten.',
    //     image: '',
    //     photoHint: 'Foto Ikan Tongkol Segar — Di Keranjang atau Di Atas Es, Tampak Mengkilap',
    //     photoIcon: 'fish',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 4,
    //     slug: 'ikan-layang',
    //     name: 'Ikan Layang',
    //     category: 'Ikan Segar',
    //     description: 'Ikan layang segar berharga ekonomis — enak digoreng, dipindang, atau dibakar. Favorit rumah tangga di Maluku Utara.',
    //     longDescription: 'Ikan layang adalah ikan pelagis kecil yang paling banyak ditangkap oleh nelayan anggota SERSAN di musim tertentu. Harganya bersahabat dan cocok untuk kebutuhan konsumsi harian maupun pesanan dalam jumlah besar.',
    //     image: '',
    //     photoHint: 'Foto Ikan Layang Segar — Dalam Keranjang atau Ditata di Atas Daun Pisang',
    //     photoIcon: 'fish',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 5,
    //     slug: 'udang-segar',
    //     name: 'Udang Segar',
    //     category: 'Hasil Laut',
    //     description: 'Udang segar langsung dari laut, cangkang keras dan daging kenyal — tanda kesegaran asli. Tersedia berbagai ukuran untuk tumisan, sup, hingga hidangan spesial.',
    //     longDescription: 'Udang dari perairan sekitar Tidore Kepulauan terkenal rasanya yang manis alami. Ditangkap dan didinginkan langsung di kapal setelah naik, sehingga sampai ke tangan Anda dalam kondisi terbaik. Minimal order dan harga tersedia via WhatsApp.',
    //     image: '',
    //     photoHint: 'Foto Udang Segar — Masih Mengkilap, Di Atas Es atau Di Wadah Bersih',
    //     photoIcon: 'shrimp',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 6,
    //     slug: 'cumi-cumi-segar',
    //     name: 'Cumi-Cumi Segar',
    //     category: 'Hasil Laut',
    //     description: 'Cumi-cumi segar bertekstur kenyal dengan aroma laut yang autentik. Warna kulit masih pekat — tanda belum lama ditangkap.',
    //     longDescription: 'Cumi-cumi dari nelayan SERSAN ditangkap menggunakan metode ramah lingkungan. Diolah minimal setelah naik ke kapal untuk menjaga kualitas. Sangat cocok untuk digoreng tepung, tumis hitam, atau cumi bakar cabe hijau.',
    //     image: '',
    //     photoHint: 'Foto Cumi-Cumi Segar — Tampak Warna Kulit Masih Pekat, Di Atas Es atau Wadah',
    //     photoIcon: 'fish',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 7,
    //     slug: 'ikan-asin',
    //     name: 'Ikan Asin',
    //     category: 'Ikan Kering',
    //     description: 'Ikan asin tradisional dengan proses penjemuran alami — tanpa bahan pengawet tambahan. Cita rasa gurih otentik, tahan lama, cocok untuk berbagai masakan.',
    //     longDescription: 'Dibuat dari ikan segar hasil tangkapan nelayan SERSAN yang dipilih khusus, diasinkan dengan garam kasar berkualitas, lalu dijemur di bawah sinar matahari Tidore. Proses higienis tanpa bahan kimia tambahan. Tersedia beberapa jenis ikan asin.',
    //     image: '',
    //     photoHint: 'Foto Ikan Asin — Dijemur di Atas Para-Para atau Dikemas Rapi dalam Plastik/Karung',
    //     photoIcon: 'fish',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 8,
    //     slug: 'kerupuk-ikan',
    //     name: 'Kerupuk Ikan',
    //     category: 'Produk Olahan',
    //     description: 'Kerupuk ikan renyah dari ikan segar pilihan — camilan sehat dan lezat, cocok juga sebagai pelengkap makan sehari-hari.',
    //     longDescription: 'Kerupuk ikan produksi anggota Koperasi SERSAN dibuat dari bahan baku ikan segar yang diolah dengan resep tradisional tanpa MSG berlebih. Renyah, gurih, dan aroma ikannya kuat. Tersedia dalam kemasan 250g dan 500g.',
    //     image: '',
    //     photoHint: 'Foto Kerupuk Ikan — Dalam Kemasan atau Ditampilkan Renyah di Atas Piring',
    //     photoIcon: 'gallery',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 9,
    //     slug: 'abon-ikan',
    //     name: 'Abon Ikan',
    //     category: 'Produk Olahan',
    //     description: 'Abon ikan dari ikan segar pilihan — kaya protein, lembut, dan gurih. Lauk praktis sehat untuk seluruh keluarga.',
    //     longDescription: 'Abon ikan produksi anggota koperasi dibuat dari daging ikan segar yang diproses secara higienis menggunakan bumbu rempah pilihan. Tidak menggunakan pewarna buatan. Cocok sebagai lauk nasi, isian sandwich, maupun camilan bergizi anak-anak.',
    //     image: '',
    //     photoHint: 'Foto Abon Ikan — Dalam Toples atau Kemasan, Tampak Warna dan Teksturnya yang Menarik',
    //     photoIcon: 'gallery',
    //     availability: 'Tersedia',
    // },
    // {
    //     id: 10,
    //     slug: 'rumput-laut',
    //     name: 'Rumput Laut',
    //     category: 'Produk Nelayan Lainnya',
    //     description: 'Rumput laut kering dari budidaya ramah lingkungan — bahan serbaguna untuk olahan makanan, minuman, dan industri lainnya.',
    //     longDescription: 'Rumput laut dari anggota koperasi dibudidayakan di perairan Tidore Kepulauan menggunakan metode long-line tanpa bahan kimia. Setelah panen, dijemur hingga kadar air optimal sebelum dikemas. Cocok sebagai bahan baku produk pangan maupun kosmetik.',
    //     image: '',
    //     photoHint: 'Foto Rumput Laut Kering — Di Atas Terpal Saat Dijemur atau Dalam Karung Dikemas',
    //     photoIcon: 'seaweed',
    //     availability: 'Tersedia',
    // },
];

export const categories = ['Semua', 'Ikan Segar', 'Hasil Laut', 'Ikan Kering', 'Produk Olahan', 'Produk Nelayan Lainnya'];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentSlug, limit = 4) =>
    products.filter((p) => p.slug !== currentSlug).slice(0, limit);

export default products;
