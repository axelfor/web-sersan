import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

const WA_NUMBER = '6285242675534';

function buildWaLink(productName) {
    const msg = `Halo, saya ingin tanya mengenai *${productName}* dari Koperasi SERSAN 🐟`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WA_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function ProductCard({ product }) {
    // Detect placeholder: image is missing OR still an Unsplash URL
    const isPlaceholder = !product.image || product.image.includes('unsplash.com');

    return (
        <div className="group bg-white rounded-card border border-ocean-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
            {/* Image / Placeholder */}
            <Link to={`/produk/${product.slug}`} className="relative overflow-hidden aspect-[4/3] block">
                {isPlaceholder ? (
                    <ImagePlaceholder
                        label={product.photoHint || `Foto ${product.name} Segar`}
                        aspect="aspect-[4/3]"
                        icon={product.photoIcon || 'fish'}
                    />
                ) : (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                )}
                <div className="absolute top-3 left-3">
                    <span className="inline-block bg-ocean-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>
                {product.availability && (
                    <div className="absolute top-3 right-3">
                        <span className="inline-block bg-teal-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                            {product.availability}
                        </span>
                    </div>
                )}
            </Link>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
                <Link to={`/produk/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-navy-900 group-hover:text-ocean-700 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-2 text-sm text-navy-800/60 leading-relaxed flex-1">
                    {product.description}
                </p>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-2">
                    {/* Primary — order via WA */}
                    <a
                        href={buildWaLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold rounded-lg transition-all"
                    >
                        {WA_ICON}
                        Pesan via WA
                    </a>
                    {/* Secondary — detail page */}
                    <Link
                        to={`/produk/${product.slug}`}
                        className="inline-flex items-center justify-center p-2 border border-ocean-200 text-ocean-600 hover:bg-ocean-50 rounded-lg transition-all"
                        title="Lihat Detail"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
