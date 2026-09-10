import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import Icons from '../components/Icons';

const WA_NUMBER = '6285242675534';
const WA_MESSAGE = 'Halo, saya ingin tanya mengenai produk ikan dari Koperasi SERSAN 🐟';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const WA_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const contactInfo = [
    {
        icon: 'mapPin',
        title: 'Alamat Koperasi',
        content: 'Jl. Raya Rum-Soasio, Kel. Rum, Kec. Tidore Utara\nKota Tidore Kepulauan, Maluku Utara',
    },
    {
        icon: 'phone',
        title: 'WhatsApp (Klik untuk Chat)',
        content: '0852-4267-5534',
        href: WA_LINK,
    },
    {
        icon: 'mail',
        title: 'Email Resmi',
        content: 'koperasisersan16@gmail.com',
        href: 'mailto:koperasisersan16@gmail.com',
    },
    {
        icon: 'clock',
        title: 'Jam Pemesanan',
        content: 'Senin – Sabtu: 07.00 – 17.00 WIT\nWhatsApp aktif di luar jam tersebut',
    },
];

const socialLinks = [
    { name: 'instagram', url: 'https://www.instagram.com/koperasisersan16' },
    { name: 'facebook', url: 'https://www.facebook.com/share/1QzFNtcgwM/' },
    { name: 'youtube', url: 'https://youtube.com/@koperasinelayan16?si=PCnrViR815h2APGD' },
];

const orderSteps = [
    {
        step: '1',
        title: 'Chat WhatsApp',
        desc: 'Klik tombol di bawah atau save nomor kami. Tanya stok, jenis ikan, dan harga hari ini.',
    },
    {
        step: '2',
        title: 'Konfirmasi Pesanan',
        desc: 'Tim kami konfirmasi ketersediaan dan total harga. Anda cukup balas chat — mudah!',
    },
    {
        step: '3',
        title: 'Terima Ikan Segar',
        desc: 'Pesanan disiapkan dan dikirim ke lokasi Anda — segar langsung dari nelayan.',
    },
];

export default function Kontak() {
    const animRef = useScrollAnimation();
    useDocumentTitle('Hubungi Kami | Koperasi Nelayan SERSAN');
    useMetaDescription('Hubungi Koperasi Nelayan SERSAN via WhatsApp untuk pemesanan ikan segar, informasi produk, atau kerja sama.');

    return (
        <div ref={animRef}>
            <PageHero
                title="Hubungi Kami"
                subtitle="Cara tercepat pesan ikan segar dari nelayan? Chat WhatsApp kami sekarang."
                breadcrumbs={[{ label: 'Kontak' }]}
            />

            {/* ── Main Contact Section ── */}
            <section className="py-16 lg:py-24 bg-white relative z-10 -mt-10 lg:-mt-16 rounded-t-3xl sm:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* ── Left: Info ── */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="fade-up">
                                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                    Informasi Kontak
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
                                    Mari Jalin Komunikasi
                                </h2>
                                <p className="mt-4 text-navy-800/70 leading-relaxed">
                                    Punya pertanyaan soal stok, harga, cara pengiriman, atau ingin jadi mitra? Kami siap menjawab via WhatsApp dengan cepat dan ramah.
                                </p>
                            </div>

                            {/* Contact info list */}
                            <div className="space-y-5">
                                {contactInfo.map((info, idx) => {
                                    const IconComponent = Icons[info.icon];
                                    const Inner = (
                                        <div key={idx} className="fade-up flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-ocean-50 border border-ocean-100 flex items-center justify-center shrink-0">
                                                <IconComponent className="w-5 h-5 text-ocean-700" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-semibold text-navy-900 mb-1">{info.title}</h3>
                                                <p className="text-sm text-navy-800/70 whitespace-pre-line leading-relaxed">
                                                    {info.content}
                                                </p>
                                            </div>
                                        </div>
                                    );

                                    return info.href ? (
                                        <a key={idx} href={info.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                                            {Inner}
                                        </a>
                                    ) : (
                                        <div key={idx}>{Inner}</div>
                                    );
                                })}
                            </div>

                            {/* Social Media */}
                            <div className="fade-up pt-8 border-t border-ocean-100">
                                <h3 className="text-sm font-semibold text-navy-900 mb-4">Media Sosial Kami</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const IconComponent = Icons[social.name];
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-lg bg-ocean-50 hover:bg-ocean-600 border border-ocean-100 hover:border-transparent flex items-center justify-center text-ocean-700 hover:text-white transition-all shadow-sm"
                                                aria-label={social.name}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* ── Right: WhatsApp CTA Card ── */}
                        <div className="lg:col-span-3">
                            <div className="fade-up bg-white rounded-card shadow-elevated border border-ocean-50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                                {/* Decorative blobs */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/2 translate-y-1/2" />

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                        {WA_ICON}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900">Pesan via WhatsApp</h3>
                                        <p className="text-sm text-navy-800/60">Cara tercepat & termudah memesan ikan segar</p>
                                    </div>
                                </div>

                                {/* Steps */}
                                <div className="space-y-4 mb-8">
                                    {orderSteps.map((s) => (
                                        <div key={s.step} className="flex items-start gap-4 p-4 bg-ocean-50/60 rounded-xl border border-ocean-100">
                                            <div className="w-8 h-8 bg-ocean-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                                {s.step}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-navy-900">{s.title}</h4>
                                                <p className="text-sm text-navy-800/60 mt-0.5 leading-relaxed">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Primary CTA */}
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-base rounded-xl transition-all hover:shadow-elevated"
                                >
                                    {WA_ICON}
                                    Chat WhatsApp Sekarang
                                </a>

                                {/* Phone number hint */}
                                <p className="text-center text-sm text-navy-800/50 mt-4">
                                    Atau simpan nomor kami:{' '}
                                    <a href={WA_LINK} className="font-semibold text-green-600 hover:underline">
                                        0852-4267-5534
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Google Maps ── */}
            <section className="bg-white pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up w-full h-[400px] mt-8 rounded-card overflow-hidden border border-ocean-100">
                        <iframe
                            src="https://www.google.com/maps?q=Jl.%20Raya%20Rum-soasio,%20Kel.%20Rum,%20Kec.%20Tidore%20Utara,%20Kota%20Tidore%20Kepulauan&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Koperasi Nelayan SERSAN"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
