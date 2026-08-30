import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-teal-900" />
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                    <path d="M0,200 Q200,100 400,200 Q600,300 800,200 L800,400 L0,400 Z" fill="white" opacity="0.1" />
                    <path d="M0,250 Q200,150 400,250 Q600,350 800,250 L800,400 L0,400 Z" fill="white" opacity="0.05" />
                </svg>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Mari Tumbuh Bersama Nelayan.
                </h2>
                <p className="mt-5 text-base lg:text-lg text-ocean-200 max-w-2xl mx-auto leading-relaxed">
                    Untuk informasi produk, kerja sama, maupun informasi mengenai Koperasi Nelayan SERSAN, silakan hubungi kami.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/kontak"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-ocean-900 font-semibold rounded-lg hover:bg-ocean-50 transition-all hover:shadow-elevated text-sm"
                    >
                        Hubungi Kami
                    </Link>
                    <Link
                        to="/produk"
                        className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm"
                    >
                        Lihat Produk
                    </Link>
                </div>
            </div>
        </section>
    );
}
