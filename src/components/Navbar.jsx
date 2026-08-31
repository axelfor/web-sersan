import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from './Icons';

const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/tentang', label: 'Tentang Kami' },
    { to: '/produk', label: 'Produk' },
    { to: '/program', label: 'Program' },
    { to: '/berita', label: 'Berita' },
    { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 lg:gap-3 group" aria-label="Beranda Koperasi SERSAN">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0">
                            <img
                                src="/logo.png"
                                alt="Logo Koperasi Nelayan SERSAN"
                                className="w-full h-full object-contain drop-shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-ocean-900' : 'text-white'}`}>
                                SERSAN
                            </span>
                            <span className={`block text-[10px] lg:text-xs leading-tight font-medium transition-colors ${scrolled ? 'text-ocean-600' : 'text-white/80'}`}>
                                Sejahtera Mandiri Bersama Nelayan
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.to
                                    ? scrolled
                                        ? 'text-ocean-900 bg-ocean-50'
                                        : 'text-white bg-white/15'
                                    : scrolled
                                        ? 'text-navy-800 hover:text-ocean-700 hover:bg-ocean-50'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/kontak"
                            className="ml-3 px-5 py-2.5 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-ocean-900 hover:bg-ocean-50' : 'text-white hover:bg-white/10'
                            }`}
                        aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <Icons.x className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white border-t border-ocean-100 shadow-lg px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to
                                ? 'text-ocean-900 bg-ocean-50'
                                : 'text-navy-800 hover:bg-ocean-50 hover:text-ocean-700'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/kontak"
                        className="block mt-3 px-4 py-3 bg-ocean-600 hover:bg-ocean-700 text-white text-sm font-semibold rounded-lg text-center transition-colors"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </nav>
    );
}
