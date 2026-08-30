import { useParams, Link, Navigate } from 'react-router-dom';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import ProductCard from '../components/ProductCard';
import Icons from '../components/Icons';
import { getProductBySlug, getRelatedProducts } from '../data/products';

export default function ProdukDetail() {
    const { slug } = useParams();
    const product = getProductBySlug(slug);
    const animRef = useScrollAnimation();

    useDocumentTitle(product ? `${product.name} | Koperasi Nelayan SERSAN` : 'Produk Tidak Ditemukan');
    useMetaDescription(product ? product.description : '');

    if (!product) {
        return <Navigate to="/produk" replace />;
    }

    const related = getRelatedProducts(slug, 4);

    return (
        <div ref={animRef}>
            {/* Breadcrumb bar */}
            <div className="bg-ocean-950 pt-24 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-ocean-300" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
                        <span className="text-ocean-500">/</span>
                        <Link to="/produk" className="hover:text-white transition-colors">Produk</Link>
                        <span className="text-ocean-500">/</span>
                        <span className="text-white">{product.name}</span>
                    </nav>
                </div>
            </div>

            <section className="py-12 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Image */}
                        <div className="fade-up">
                            <div className="relative rounded-card overflow-hidden shadow-elevated aspect-[4/3]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-ocean-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="fade-up">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-200">
                                    {product.availability}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
                                {product.name}
                            </h1>

                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                {product.longDescription}
                            </p>

                            {/* Info table */}
                            <div className="mt-8 bg-ocean-50 border border-ocean-100 rounded-card overflow-hidden">
                                <div className="p-5 space-y-3">
                                    <div className="flex items-center justify-between py-2 border-b border-ocean-100">
                                        <span className="text-sm font-medium text-navy-800/60">Kategori</span>
                                        <span className="text-sm font-semibold text-navy-900">{product.category}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2 border-b border-ocean-100">
                                        <span className="text-sm font-medium text-navy-800/60">Ketersediaan</span>
                                        <span className="text-sm font-semibold text-teal-700">{product.availability}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-sm font-medium text-navy-800/60">Sumber</span>
                                        <span className="text-sm font-semibold text-navy-900">Nelayan Anggota Koperasi</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/kontak"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                                >
                                    <Icons.whatsapp className="w-4 h-4" />
                                    Hubungi Kami
                                </Link>
                                <Link
                                    to="/produk"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-ocean-200 text-ocean-700 font-semibold rounded-lg hover:bg-ocean-50 transition-all text-sm"
                                >
                                    Kembali ke Produk
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Related products */}
                    {related.length > 0 && (
                        <div className="mt-16 lg:mt-24">
                            <div className="fade-up">
                                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-8">Produk Lainnya</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {related.map((p) => (
                                    <div key={p.id} className="fade-up">
                                        <ProductCard product={p} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
