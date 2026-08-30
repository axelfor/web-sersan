import { useParams, Link, Navigate } from 'react-router-dom';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import ArticleCard from '../components/ArticleCard';
import Icons from '../components/Icons';
import articles, { getArticleBySlug, formatDate } from '../data/articles';

export default function BeritaDetail() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);
    const animRef = useScrollAnimation();

    useDocumentTitle(article ? `${article.title} | Koperasi Nelayan SERSAN` : 'Berita Tidak Ditemukan');
    useMetaDescription(article ? article.excerpt : '');

    if (!article) return <Navigate to="/berita" replace />;

    const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

    return (
        <div ref={animRef}>
            <div className="bg-ocean-950 pt-24 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-ocean-300" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
                        <span className="text-ocean-500">/</span>
                        <Link to="/berita" className="hover:text-white transition-colors">Berita</Link>
                        <span className="text-ocean-500">/</span>
                        <span className="text-white line-clamp-1">{article.title}</span>
                    </nav>
                </div>
            </div>

            <article className="py-12 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block bg-ocean-100 text-ocean-700 text-xs font-semibold px-3 py-1 rounded-full">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-navy-800/50">
                                <Icons.calendar className="w-3.5 h-3.5" />
                                <time dateTime={article.date}>{formatDate(article.date)}</time>
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">{article.title}</h1>
                    </div>

                    <div className="fade-up mt-8 rounded-card overflow-hidden shadow-elevated">
                        <img src={article.image} alt={article.title} className="w-full aspect-[16/9] object-cover" />
                    </div>

                    <div className="fade-up mt-10">
                        {article.content.split('\n\n').map((p, i) => (
                            <p key={i} className="text-navy-800/80 leading-relaxed mb-5">{p}</p>
                        ))}
                    </div>

                    <div className="fade-up mt-10 pt-8 border-t border-ocean-100">
                        <Link to="/berita" className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 font-semibold text-sm">
                            ← Kembali ke Berita
                        </Link>
                    </div>
                </div>
            </article>

            {related.length > 0 && (
                <section className="py-12 lg:py-16 bg-ocean-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="fade-up text-xl font-bold text-navy-900 mb-8">Berita Lainnya</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((a) => (
                                <div key={a.id} className="fade-up"><ArticleCard article={a} /></div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
