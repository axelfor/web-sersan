// Article/News data for Koperasi SERSAN
// NOTE: All article data below is SAMPLE/PLACEHOLDER content.
// Replace with official news and activity content when available.

const articles = [
  {
    id: 1,
    slug: 'kunjungan-pertama-penyuluh-perikanan-maluku-utara',
    title: 'Kunjungan Perdana Penyuluh Perikanan Provinsi Maluku Utara',
    category: 'Edukasi',
    date: '2026-08-10',
    excerpt: 'Koperasi Nelayan SERSAN menerima kunjungan kerja pertama dari tim Penyuluh Perikanan Provinsi Maluku Utara untuk berdiskusi mengenai peningkatan kapasitas nelayan.',
    image: '/images/pict1.webp',
    content: `Koperasi Nelayan SERSAN mendapat kehormatan menerima kunjungan kerja pertama dari tim Penyuluh Perikanan Dinas Kelautan dan Perikanan Provinsi Maluku Utara. Pertemuan ini menjadi langkah awal yang krusial dalam memperkuat sinergi antara pemerintah daerah dan kelompok nelayan lokal.

Dalam sesi diskusi yang berlangsung hangat, pihak penyuluh memberikan arahan strategis terkait tata kelola perikanan yang berkelanjutan serta potensi pengembangan usaha nelayan di wilayah pesisir. Anggota koperasi yang hadir memanfaatkan momen ini untuk menyampaikan aspirasi dan tantangan yang dihadapi di lapangan.

Kunjungan ini diharapkan menjadi pembuka dari rangkaian program pendampingan intensif yang akan dijalankan ke depannya demi meningkatkan kesejahteraan anggota koperasi.`
  },
  {
    id: 2,
    slug: 'penyerahan-bantuan-mesin-program-kur-maluku-utara',
    title: 'Penerimaan Bantuan Mesin Melalui Program KUR Pemprov Maluku Utara',
    category: 'Kegiatan Koperasi',
    date: '2026-08-05',
    excerpt: 'Penyerahan bantuan mesin usaha secara simbolis dari Pemerintah Provinsi Maluku Utara melalui program KUR untuk memperkuat operasional Koperasi Nelayan SERSAN.',
    image: '/images/pict2.webp',
    content: `Sebagai bentuk dukungan nyata terhadap modernisasi sektor perikanan lokal, Koperasi Nelayan SERSAN secara resmi menerima bantuan mesin usaha yang didanai melalui program Kredit Usaha Rakyat (KUR) Pemerintah Provinsi Maluku Utara.

Serah terima alat dan peralatan produksi ini disaksikan langsung oleh perwakilan dinas terkait dan pengurus koperasi. Bantuan ini ditujukan untuk menunjang efisiensi kerja para nelayan, mulai dari proses pascatangkap hingga kesiapan distribusi produk.

Dengan masuknya armada dan unit mesin baru ini, Koperasi SERSAN optimis mampu meningkatkan volume produksi dan daya saing hasil laut nelayan di pasar yang lebih luas.`
  },
  {
    id: 3,
    slug: 'kunjungan-lanjutan-penyuluh-perikanan-maluku-utara',
    title: 'Kunjungan Lanjutan Penyuluh Perikanan untuk Penguatan Program',
    category: 'Pemberdayaan',
    date: '2026-07-28',
    excerpt: 'Menindaklanjuti pertemuan awal, Penyuluh Perikanan Provinsi Maluku Utara kembali hadir untuk pemantauan teknis dan evaluasi program pendampingan.',
    image: '/images/pict3.webp',
    content: `Melanjutkan komitmen pendampingan nelayan, tim Penyuluh Perikanan Provinsi Maluku Utara kembali melakukan kunjungan lapangan yang kedua ke Koperasi Nelayan SERSAN. Pertemuan lanjutan ini berfokus pada evaluasi dan pemantauan teknis di lapangan.

Pada kunjungan kedua ini, penyuluh dan pengurus koperasi meninjau langsung kesiapan sarana prasarana serta memberikan bimbingan teknis terkait manajemen operasional kelompok. Interaksi intensif ini memastikan bahwa setiap bantuan dan edukasi yang diberikan dapat diterapkan secara maksimal oleh para nelayan.

Sinergi yang berkelanjutan ini menjadi komitmen bersama dalam mendorong kemandirian ekonomi masyarakat nelayan secara konsisten.`
  },
  {
    id: 4,
    slug: 'pembentukan-resmi-koperasi-nelayan-sersan',
    title: 'Musyawarah Pembentukan Resmi Koperasi Nelayan SERSAN',
    category: 'Kegiatan Koperasi',
    date: '2026-07-15',
    excerpt: 'Momen bersejarah berkumpulnya para nelayan lokal dalam rangka musyawarah dan peresmian pendirian Koperasi Nelayan SERSAN.',
    image: '/images/pict4.webp',
    content: `Sebagai langkah awal menuju kemandirian dan penguatan ekonomi bersama, para nelayan lokal berkumpul dalam musyawarah pembentukan resmi Koperasi Nelayan SERSAN. Acara ini dihadiri oleh tokoh masyarakat dan calon anggota pengurus.

Dalam musyawarah tersebut, disepakati struktur kepengurusan, arah visi-misi, serta program kerja prioritas yang akan dijalankan oleh koperasi. Pembentukan wadah hukum ini bertujuan untuk memperkuat posisi tawar nelayan, mempermudah akses bantuan, serta mengelola hasil laut secara kolektif.

Berdirinya Koperasi Nelayan SERSAN menandai babak baru semangat gotong royong masyarakat pesisir demi mencapai kesejahteraan yang merata.`
  }
];

export const articleCategories = ['Semua', 'Edukasi', 'Kegiatan Koperasi', 'Kegiatan Sosial', 'Aktivitas Nelayan', 'Pemberdayaan'];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

export default articles;
