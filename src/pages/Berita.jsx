import { useState } from 'react';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import ArticleCard from '../components/ArticleCard';
import CTASection from '../components/CTASection';
import articles, { articleCategories } from '../data/articles';

export default function Berita() {
    const animRef = useScrollAnimation();
    const [activeCategory, setActiveCategory] = useState('Semua');

    useDocumentTitle('Berita & Kegiatan | Koperasi Nelayan SERSAN');
    useMetaDescription('Berita dan kegiatan terbaru dari Koperasi Nelayan SERSAN — informasi seputar aktivitas nelayan, edukasi, dan pemberdayaan masyarakat pesisir.');

    const filtered = activeCategory === 'Semua'
        ? articles
        : articles.filter((a) => a.category === activeCategory);

    return (
        <div ref={animRef}>
            <PageHero
                title="Berita & Kegiatan"
                subtitle="Informasi terbaru seputar kegiatan dan aktivitas Koperasi Nelayan SERSAN."
                breadcrumbs={[{ label: 'Berita & Kegiatan' }]}
            />

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category filter */}
                    <div className="fade-up flex flex-wrap gap-2 mb-10">
                        {articleCategories.map((cat) => (
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

                    {/* Articles */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((article) => (
                            <div key={article.id} className="fade-up">
                                <ArticleCard article={article} />
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-navy-800/60 text-lg">Belum ada berita untuk kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
}
