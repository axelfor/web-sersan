import { Link } from 'react-router-dom';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import Icons from '../components/Icons';
import products from '../data/products';
import articles from '../data/articles';

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
    'Berbasis pada semangat kebersamaan',
    'Mendukung kesejahteraan nelayan',
    'Mengembangkan potensi hasil laut',
    'Berorientasi pada keberlanjutan',
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
                            Sejahtera Bersama,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-teal-300">
                                Tumbuh Bersama Nelayan.
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-ocean-100 leading-relaxed max-w-xl">
                            Koperasi Nelayan SERSAN hadir untuk mendorong kemandirian, pemberdayaan, dan peningkatan kesejahteraan nelayan melalui kerja sama yang berkelanjutan.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/produk"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                            >
                                Lihat Produk
                                <Icons.arrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/tentang"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm"
                            >
                                Tentang Kami
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
                                src="https://images.unsplash.com/photo-1545816250-e12bedaf73c4?w=600&h=400&fit=crop"
                                alt="Nelayan dan kapal tradisional"
                                className="w-full rounded-card shadow-elevated object-cover aspect-[4/3]"
                                loading="lazy"
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
                                src="https://images.unsplash.com/photo-1559827291-bae7eb3e4060?w=600&h=400&fit=crop"
                                alt="Komunitas nelayan pesisir"
                                className="w-full rounded-card shadow-elevated object-cover aspect-[4/3]"
                                loading="lazy"
                            />
                        </div>
                        <div className="fade-up order-1 lg:order-2">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                Kepercayaan
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                                Mengapa Memilih Koperasi SERSAN?
                            </h2>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Koperasi Nelayan SERSAN dibangun atas dasar semangat gotong royong dan komitmen untuk kemajuan bersama masyarakat nelayan.
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
