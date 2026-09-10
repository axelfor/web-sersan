import { Link } from 'react-router-dom';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import Icons from '../components/Icons';
import ImagePlaceholder from '../components/ImagePlaceholder';
import products from '../data/products';
import articles from '../data/articles';

const WA_NUMBER = '6285242675534';
const WA_MESSAGE = 'Halo, saya ingin tanya mengenai produk ikan dari Koperasi SERSAN 🐟';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const values = [
    {
        icon: 'users',
        title: 'Pemberdayaan Nelayan',
        description: 'Mendorong kemandirian dan peningkatan kapasitas nelayan melalui pendampingan dan kegiatan pemberdayaan.',
    },
    {
        icon: 'anchor',
        title: 'Pengelolaan Hasil Laut',
        description: 'Mengoptimalkan potensi hasil laut agar memiliki nilai tambah dan daya saing yang lebih tinggi.',
    },
    {
        icon: 'trending',
        title: 'Kemandirian Ekonomi',
        description: 'Mendukung pertumbuhan ekonomi nelayan melalui pengembangan usaha dan akses pasar yang lebih luas.',
    },
    {
        icon: 'handshake',
        title: 'Kerja Sama Berkelanjutan',
        description: 'Membangun kolaborasi yang berkelanjutan untuk kesejahteraan bersama masyarakat nelayan.',
    },
];

const trustPoints = [
    'Langsung dari nelayan, tanpa perantara — harga lebih terjangkau',
    'Ikan segar ditangkap hari ini, dikirim langsung ke tangan Anda',
    'Tuna & ikan pelagis grade ekspor — kualitas terjaga sejak laut',
    'Melayani pemesanan via WhatsApp — cepat, mudah, terpercaya',
];

const programPreview = [
    {
        icon: 'users',
        title: 'Pemberdayaan Nelayan',
        description: 'Mendorong peningkatan kapasitas dan kemandirian nelayan melalui pendampingan dan kegiatan pemberdayaan.',
    },
    {
        icon: 'package',
        title: 'Pengembangan Produk',
        description: 'Mengembangkan potensi hasil laut agar memiliki nilai tambah dan daya saing.',
    },
    {
        icon: 'book',
        title: 'Edukasi & Pelatihan',
        description: 'Mendukung peningkatan pengetahuan dan keterampilan anggota koperasi.',
    },
];

export default function Beranda() {
    const animRef = useScrollAnimation();
    useDocumentTitle('Koperasi Nelayan SERSAN | Sejahtera Mandiri Bersama Nelayan');
    useMetaDescription('Koperasi Nelayan SERSAN hadir untuk mendukung pemberdayaan nelayan, pengembangan hasil laut, dan pertumbuhan ekonomi masyarakat melalui semangat kebersamaan.');

    const featuredProducts = products.slice(0, 4);
    const latestArticles = articles.slice(0, 3);

    return (
        <div ref={animRef}>
            {/* ══════════════════════ HERO ══════════════════════ */}
            <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=900&fit=crop"
                        alt="Nelayan Indonesia di pantai"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-900/75 to-ocean-800/60" />
                </div>

                {/* Decorative wave overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px] block">
                        <path d="M0,40 Q300,10 600,50 Q900,80 1200,40 L1200,80 L0,80 Z" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                            <Icons.waves className="w-4 h-4 text-ocean-300" />
                            <span className="text-sm text-ocean-200 font-medium">Koperasi Nelayan SERSAN</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            Ikan Segar{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-teal-300">
                                Langsung dari Nelayan.
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-ocean-100 leading-relaxed max-w-xl">
                            Koperasi Nelayan SERSAN menyediakan ikan tuna, cakalang, tongkol, udang, dan hasil laut segar lainnya — langsung dari tangkapan nelayan Tidore ke meja makan Anda. Tanpa perantara, harga lebih jujur.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Pesan via WhatsApp
                            </a>
                            <Link
                                to="/produk"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm"
                            >
                                Lihat Produk
                                <Icons.arrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ ABOUT SECTION ══════════════════════ */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="fade-up">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                Tentang Kami
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                                Tentang Koperasi SERSAN
                            </h2>
                            <p className="mt-5 text-navy-800/70 leading-relaxed">
                                Koperasi Nelayan SERSAN (Sejahtera Mandiri Bersama Nelayan) merupakan wadah bersama yang berorientasi pada pemberdayaan dan pengembangan usaha nelayan serta potensi hasil laut.
                            </p>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Dengan semangat kebersamaan dan kemandirian, Koperasi SERSAN berkomitmen untuk meningkatkan kesejahteraan nelayan dan masyarakat pesisir melalui kerja sama yang berkelanjutan.
                            </p>
                            <Link
                                to="/tentang"
                                className="inline-flex items-center gap-2 mt-6 text-ocean-600 hover:text-ocean-700 font-semibold text-sm transition-colors"
                            >
                                Selengkapnya tentang kami
                                <Icons.arrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="fade-up relative">
                            <img
                                src="/images/tampilan.webp"
                                alt="nelayan"
                                className="w-full aspect-[4/3] object-cover rounded-card"
                            />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-ocean-100 rounded-card -z-10" />
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-100 rounded-card -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ VALUES ══════════════════════ */}
            <section className="py-16 lg:py-24 bg-ocean-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up">
                        <SectionHeading
                            subtitle="Keunggulan Kami"
                            title="Mengapa Koperasi SERSAN?"
                            description="Koperasi Nelayan SERSAN hadir dengan semangat kebersamaan untuk mendukung kemajuan nelayan Indonesia."
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item, index) => {
                            const IconComponent = Icons[item.icon];
                            return (
                                <div
                                    key={index}
                                    className="fade-up bg-white p-6 rounded-card border border-ocean-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
                                >
                                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-ocean-100 to-teal-50 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-ocean-700" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-navy-800/60 leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════ FEATURED PRODUCTS ══════════════════════ */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up">
                        <SectionHeading
                            subtitle="Produk Kami"
                            title="Produk Unggulan"
                            description="Hasil laut berkualitas dari nelayan anggota Koperasi SERSAN."
                        />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="fade-up">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="fade-up text-center mt-10">
                        <Link
                            to="/produk"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                        >
                            Lihat Semua Produk
                            <Icons.arrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ PROGRAMS ══════════════════════ */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up">
                        <SectionHeading
                            subtitle="Program Kami"
                            title="Program & Kegiatan"
                            description="Berbagai program untuk mendukung pemberdayaan dan kesejahteraan nelayan."
                            light
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {programPreview.map((item, index) => {
                            const IconComponent = Icons[item.icon];
                            return (
                                <div
                                    key={index}
                                    className="fade-up bg-white/10 backdrop-blur-sm border border-white/10 p-7 rounded-card hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-ocean-500/30 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-ocean-200" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-ocean-200 leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="fade-up text-center mt-10">
                        <Link
                            to="/program"
                            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm"
                        >
                            Selengkapnya
                            <Icons.arrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ TRUST ══════════════════════ */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="fade-up order-2 lg:order-1">
                            <img
                                src="/images/fotoikan.webp"
                                alt="nelayan"
                                className="w-full aspect-[4/3] object-cover rounded-card"
                            />
                        </div>
                        <div className="fade-up order-1 lg:order-2">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                Kenapa Beli di Sini?
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                                Ikan Terbaik, Harga Paling Jujur.
                            </h2>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Kami bukan tengkulak. Kami adalah koperasi yang mempertemukan Anda langsung dengan nelayan penangkap ikan. Tidak ada markup berlapis — hanya ikan segar dan harga yang adil.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {trustPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <Icons.check className="w-3.5 h-3.5 text-teal-700" />
                                        </div>
                                        <span className="text-navy-800/80">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Tanya Stok & Harga via WA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ LATEST NEWS ══════════════════════ */}
            <section className="py-16 lg:py-24 bg-ocean-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up">
                        <SectionHeading
                            subtitle="Berita Terbaru"
                            title="Berita & Kegiatan"
                            description="Informasi terbaru seputar kegiatan dan aktivitas Koperasi Nelayan SERSAN."
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {latestArticles.map((article) => (
                            <div key={article.id} className="fade-up">
                                <ArticleCard article={article} />
                            </div>
                        ))}
                    </div>
                    <div className="fade-up text-center mt-10">
                        <Link
                            to="/berita"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                        >
                            Lihat Semua Berita
                            <Icons.arrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════ CTA ══════════════════════ */}
            <CTASection />
        </div>
    );
}
