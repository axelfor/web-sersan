import { Link } from 'react-router-dom';
import Icons from './Icons';

const footerLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/tentang', label: 'Tentang Kami' },
    { to: '/produk', label: 'Produk' },
    { to: '/program', label: 'Program' },
    { to: '/berita', label: 'Berita' },
    { to: '/kontak', label: 'Kontak' },
];

const socialLinks = [
    { icon: 'instagram', label: 'Instagram', href: '#' },
    { icon: 'facebook', label: 'Facebook', href: '#' },
    { icon: 'youtube', label: 'YouTube', href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-ocean-950 text-white">
            {/* Wave top */}
            <div className="w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[60px] block">
                    <path d="M0,60 L0,30 Q300,0 600,30 Q900,60 1200,30 L1200,60 Z" fill="currentColor" className="text-ocean-950" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-ocean-600 flex items-center justify-center">
                                <Icons.waves className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-lg font-bold tracking-tight">SERSAN</span>
                                <span className="block text-[10px] text-ocean-300 font-medium">
                                    Sejahtera Mandiri Bersama Nelayan
                                </span>
                            </div>
                        </div>
                        <p className="text-ocean-300 text-sm leading-relaxed mt-4">
                            Koperasi Nelayan SERSAN hadir sebagai wadah bersama dalam mendukung pemberdayaan dan kemandirian nelayan Indonesia.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">Navigasi</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-ocean-200 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">Kontak</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Icons.mapPin className="w-4 h-4 text-ocean-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-ocean-200">[Alamat akan diperbarui]</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icons.phone className="w-4 h-4 text-ocean-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-ocean-200">08xxxxxxxxxx</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icons.mail className="w-4 h-4 text-ocean-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-ocean-200">email@koperasisersan.id</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">Media Sosial</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const IconComponent = Icons[social.icon];
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-ocean-800 hover:bg-ocean-700 flex items-center justify-center text-ocean-300 hover:text-white transition-colors"
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-ocean-400 text-xs mt-4">
                            Ikuti kami di media sosial untuk informasi terbaru.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-ocean-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-ocean-400">
                        © 2026 Koperasi Nelayan SERSAN. All rights reserved.
                    </p>
                    <p className="text-xs text-ocean-500">
                        Sejahtera Mandiri Bersama Nelayan
                    </p>
                </div>
            </div>
        </footer>
    );
}
