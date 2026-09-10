import { useParams, Link, Navigate } from 'react-router-dom';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import ProductCard from '../components/ProductCard';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Icons from '../components/Icons';
import { getProductBySlug, getRelatedProducts } from '../data/products';

const WA_NUMBER = '6285242675534';
function buildWaLink(productName) {
    const msg = `Halo, saya ingin memesan *${productName}* dari Koperasi Nelayan SERSAN. Mohon info ketersediaan dan harganya 🐟`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

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
                            <div className="relative rounded-card overflow-hidden">
                                <ImagePlaceholder
                                    label={product.photoHint || `Foto ${product.name} Segar — Tangkapan Nelayan SERSAN`}
                                    aspect="aspect-[4/3]"
                                    icon={product.photoIcon || 'fish'}
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
                                <a
                                    href={buildWaLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Pesan Sekarang via WhatsApp
                                </a>
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
