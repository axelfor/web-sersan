// Product data for Koperasi SERSAN
// NOTE: All product data below is SAMPLE/PLACEHOLDER content.
// Replace with official product information when available.

const products = [
    {
        id: 1,
        slug: 'ikan-tuna',
        name: 'Ikan Tuna',
        category: 'Ikan Segar',
        description: 'Ikan tuna segar berkualitas tinggi hasil tangkapan nelayan lokal. Daging tuna yang tebal dan segar, cocok untuk berbagai olahan masakan.',
        longDescription: 'Ikan tuna merupakan salah satu komoditas unggulan dari Koperasi Nelayan SERSAN. Ditangkap langsung oleh nelayan anggota koperasi menggunakan metode yang bertanggung jawab, ikan tuna kami dikenal memiliki kesegaran dan kualitas terbaik. Cocok untuk sashimi, steak, maupun olahan masakan Nusantara.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 2,
        slug: 'ikan-cakalang',
        name: 'Ikan Cakalang',
        category: 'Ikan Segar',
        description: 'Ikan cakalang segar yang ditangkap langsung dari laut. Kaya nutrisi dan sangat cocok untuk masakan tradisional Indonesia.',
        longDescription: 'Ikan cakalang merupakan ikan laut yang populer di Indonesia. Memiliki daging yang padat dan rasa yang khas, ikan cakalang sangat cocok untuk dimasak dengan berbagai bumbu tradisional. Sumber protein berkualitas tinggi untuk keluarga Anda.',
        image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 3,
        slug: 'ikan-tongkol',
        name: 'Ikan Tongkol',
        category: 'Ikan Segar',
        description: 'Ikan tongkol segar pilihan dengan daging yang padat dan lezat. Ideal untuk berbagai menu masakan sehari-hari.',
        longDescription: 'Ikan tongkol adalah pilihan ikan laut yang ekonomis dan bergizi. Dengan daging yang padat dan rasa yang gurih, ikan tongkol menjadi bahan utama berbagai masakan rumahan. Ditangkap secara berkelanjutan oleh nelayan anggota koperasi.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 4,
        slug: 'ikan-layang',
        name: 'Ikan Layang',
        category: 'Ikan Segar',
        description: 'Ikan layang segar dengan kualitas terjaga. Cocok untuk digoreng, dipindang, maupun diolah menjadi berbagai hidangan.',
        longDescription: 'Ikan layang merupakan salah satu jenis ikan pelagis kecil yang banyak ditangkap oleh nelayan anggota koperasi. Dengan harga terjangkau dan rasa yang lezat, ikan layang menjadi pilihan favorit masyarakat untuk konsumsi sehari-hari.',
        image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 5,
        slug: 'udang-segar',
        name: 'Udang Segar',
        category: 'Hasil Laut',
        description: 'Udang segar berkualitas dari hasil tangkapan nelayan. Ukuran bervariasi, cocok untuk berbagai kreasi masakan.',
        longDescription: 'Udang segar dari Koperasi Nelayan SERSAN ditangkap langsung dari perairan sekitar. Dengan kesegaran yang terjaga, udang kami cocok untuk berbagai olahan mulai dari tumisan, sup, hingga hidangan spesial.',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 6,
        slug: 'cumi-cumi-segar',
        name: 'Cumi-Cumi Segar',
        category: 'Hasil Laut',
        description: 'Cumi-cumi segar dengan tekstur kenyal dan rasa laut yang autentik. Bahan utama berbagai hidangan laut favorit.',
        longDescription: 'Cumi-cumi segar dari tangkapan nelayan anggota koperasi, diproses dengan menjaga kesegaran sejak dari laut hingga sampai ke tangan konsumen. Cocok untuk digoreng tepung, ditumis, atau diolah menjadi hidangan spesial.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 7,
        slug: 'ikan-asin',
        name: 'Ikan Asin',
        category: 'Ikan Kering',
        description: 'Ikan asin yang dikeringkan secara tradisional dengan cita rasa khas. Tahan lama dan praktis untuk berbagai masakan.',
        longDescription: 'Ikan asin merupakan produk olahan tradisional dari ikan segar yang diawetkan dengan garam dan penjemuran. Proses pengolahan dilakukan secara higienis oleh anggota koperasi. Ikan asin kami memiliki rasa yang gurih dan tekstur yang sempurna.',
        image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 8,
        slug: 'kerupuk-ikan',
        name: 'Kerupuk Ikan',
        category: 'Produk Olahan',
        description: 'Kerupuk ikan yang dibuat dari bahan ikan segar berkualitas. Renyah, gurih, dan cocok sebagai pelengkap makanan.',
        longDescription: 'Kerupuk ikan produksi anggota Koperasi Nelayan SERSAN dibuat dari bahan dasar ikan segar pilihan. Diolah dengan resep tradisional yang menghasilkan kerupuk renyah, gurih, dan lezat. Produk ini merupakan salah satu upaya pengembangan nilai tambah hasil laut.',
        image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 9,
        slug: 'abon-ikan',
        name: 'Abon Ikan',
        category: 'Produk Olahan',
        description: 'Abon ikan yang dibuat dari ikan segar pilihan. Kaya protein dan cocok sebagai lauk maupun camilan sehat.',
        longDescription: 'Abon ikan merupakan produk olahan bernilai tambah yang dihasilkan oleh anggota koperasi. Dibuat dari ikan segar yang diolah secara higienis, abon ikan kami memiliki rasa gurih dan tekstur yang lembut. Cocok sebagai lauk nasi atau camilan bergizi.',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
    {
        id: 10,
        slug: 'rumput-laut',
        name: 'Rumput Laut',
        category: 'Produk Nelayan Lainnya',
        description: 'Rumput laut kering berkualitas dari budidaya nelayan lokal. Bahan baku serbaguna untuk industri makanan dan lainnya.',
        longDescription: 'Rumput laut dari Koperasi Nelayan SERSAN dibudidayakan oleh anggota koperasi dengan metode yang ramah lingkungan. Rumput laut kering kami cocok sebagai bahan baku berbagai produk makanan, kosmetik, dan industri lainnya.',
        image: 'https://images.unsplash.com/photo-1515562141589-67f0d9b2f5ef?w=600&h=400&fit=crop',
        availability: 'Tersedia',
    },
];

export const categories = ['Semua', 'Ikan Segar', 'Hasil Laut', 'Ikan Kering', 'Produk Olahan', 'Produk Nelayan Lainnya'];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentSlug, limit = 4) =>
    products.filter((p) => p.slug !== currentSlug).slice(0, limit);

export default products;
