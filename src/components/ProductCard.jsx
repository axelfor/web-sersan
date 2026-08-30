import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <Link
            to={`/produk/${product.slug}`}
            className="group bg-white rounded-card border border-ocean-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
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
            </div>
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-ocean-700 transition-colors">
                    {product.name}
                </h3>
                <p className="mt-2 text-sm text-navy-800/60 leading-relaxed flex-1">
                    {product.description}
                </p>
                <div className="mt-4 flex items-center text-ocean-600 text-sm font-semibold group-hover:text-ocean-700">
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
