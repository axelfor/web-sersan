import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950" />

            {/* Decorative waves */}
            <div className="absolute inset-0 opacity-10">
                <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,60 Q300,20 600,60 Q900,100 1200,60 L1200,120 L0,120 Z" fill="white" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center justify-center gap-2 text-sm text-ocean-300 mb-4" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <span className="text-ocean-500">/</span>
                                {crumb.to ? (
                                    <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                                ) : (
                                    <span className="text-white">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-base lg:text-lg text-ocean-200 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
