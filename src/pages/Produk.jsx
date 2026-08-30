import { useState } from 'react';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import Icons from '../components/Icons';
import products, { categories } from '../data/products';

export default function Produk() {
    const animRef = useScrollAnimation();
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    useDocumentTitle('Produk | Koperasi Nelayan SERSAN');
    useMetaDescription('Katalog produk hasil laut dari Koperasi Nelayan SERSAN — ikan segar, hasil laut, ikan kering, dan produk olahan berkualitas.');

    const filtered = products.filter((product) => {
        const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div ref={animRef}>
            <PageHero
                title="Produk Kami"
                subtitle="Hasil laut berkualitas tinggi dari nelayan anggota Koperasi SERSAN."
                breadcrumbs={[{ label: 'Produk' }]}
            />

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter bar */}
                    <div className="fade-up mb-10 space-y-4">
                        {/* Search */}
                        <div className="relative max-w-md">
                            <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-800/40" />
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-ocean-50 border border-ocean-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-colors"
                            />
                        </div>

                        {/* Category filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeCategory === cat
                                            ? 'bg-ocean-600 text-white shadow-md'
                                            : 'bg-ocean-50 text-navy-800/70 hover:bg-ocean-100 border border-ocean-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product grid */}
                    {filtered.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map((product) => (
                                <div key={product.id} className="fade-up">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="fade-up text-center py-16">
                            <Icons.search className="w-12 h-12 text-ocean-300 mx-auto mb-4" />
                            <p className="text-navy-800/60 text-lg">Produk tidak ditemukan.</p>
                            <p className="text-navy-800/40 text-sm mt-1">Coba kata kunci atau kategori lain.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
}
