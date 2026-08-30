import { useState } from 'react';
import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import Icons from '../components/Icons';

export default function Kontak() {
    const animRef = useScrollAnimation();
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        whatsapp: '',
        subjek: '',
        pesan: '',
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    useDocumentTitle('Kontak | Koperasi Nelayan SERSAN');
    useMetaDescription('Hubungi Koperasi Nelayan SERSAN untuk informasi produk, kerja sama, maupun informasi keanggotaan koperasi.');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call for form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({
                nama: '',
                email: '',
                whatsapp: '',
                subjek: '',
                pesan: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: 'mapPin',
            title: 'Alamat Kantor',
            content: '[Alamat akan diperbarui] Jl. Pesisir Pantai No. xx, Desa Nelayan, Kabupaten xx, Provinsi xx',
        },
        {
            icon: 'phone',
            title: 'Nomor Telepon & WhatsApp',
            content: '08xxxxxxxxxx',
        },
        {
            icon: 'mail',
            title: 'Email Resmi',
            content: 'email@koperasisersan.id',
        },
        {
            icon: 'clock',
            title: 'Jam Operasional',
            content: 'Senin - Jumat: 08.00 - 16.00 WIB\nSabtu: 08.00 - 12.00 WIB',
        },
    ];

    return (
        <div ref={animRef}>
            <PageHero
                title="Hubungi Kami"
                subtitle="Kami siap membantu. Silakan hubungi kami untuk informasi lebih lanjut mengenai produk, program, atau kerja sama."
                breadcrumbs={[{ label: 'Kontak' }]}
            />

            <section className="py-16 lg:py-24 bg-white relative z-10 -mt-10 lg:-mt-16 rounded-t-3xl sm:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="fade-up">
                                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                    Informasi Kontak
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
                                    Mari Jalin Komunikasi
                                </h2>
                                <p className="mt-4 text-navy-800/70 leading-relaxed">
                                    Punya pertanyaan tentang produk laut kami, ingin berkolaborasi, atau tertarik menjadi anggota koperasi? Tim kami siap menjawab pertanyaan Anda.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => {
                                    const IconComponent = Icons[info.icon];
                                    return (
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
                                })}
                            </div>

                            {/* Social Media placeholders */}
                            <div className="fade-up pt-8 border-t border-ocean-100">
                                <h3 className="text-sm font-semibold text-navy-900 mb-4">Media Sosial Kami</h3>
                                <div className="flex gap-3">
                                    {['instagram', 'facebook', 'youtube'].map((social) => {
                                        const IconComponent = Icons[social];
                                        return (
                                            <a
                                                key={social}
                                                href="#"
                                                className="w-10 h-10 rounded-lg bg-ocean-50 hover:bg-ocean-600 border border-ocean-100 hover:border-transparent flex items-center justify-center text-ocean-700 hover:text-white transition-all shadow-sm"
                                                aria-label={social}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="fade-up bg-white rounded-card shadow-elevated border border-ocean-50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/2 translate-y-1/2" />

                                <h3 className="text-2xl font-bold text-navy-900 mb-6">Kirim Pesan</h3>

                                {status === 'success' && (
                                    <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icons.check className="w-3.5 h-3.5 text-teal-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-teal-900">Pesan Berhasil Dikirim!</h4>
                                            <p className="text-sm text-teal-700 mt-1">
                                                Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda melalui email atau WhatsApp.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label htmlFor="nama" className="block text-sm font-medium text-navy-800">
                                                Nama Lengkap <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="nama"
                                                name="nama"
                                                required
                                                value={formData.nama}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-ocean-50/50 border border-ocean-100 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                                                placeholder="Masukkan nama Anda"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="block text-sm font-medium text-navy-800">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-ocean-50/50 border border-ocean-100 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                                                placeholder="alamat@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label htmlFor="whatsapp" className="block text-sm font-medium text-navy-800">
                                                Nomor WhatsApp <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="whatsapp"
                                                name="whatsapp"
                                                required
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-ocean-50/50 border border-ocean-100 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                                                placeholder="08xxxxxxxxxx"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="subjek" className="block text-sm font-medium text-navy-800">
                                                Subjek Pesan <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subjek"
                                                name="subjek"
                                                required
                                                value={formData.subjek}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 bg-ocean-50/50 border border-ocean-100 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                                                placeholder="Contoh: Info Produk"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="pesan" className="block text-sm font-medium text-navy-800">
                                            Isi Pesan <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="pesan"
                                            name="pesan"
                                            required
                                            rows={5}
                                            value={formData.pesan}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-ocean-50/50 border border-ocean-100 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tuliskan pesan Anda di sini..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                <Icons.send className="w-4 h-4" />
                                                Kirim Pesan
                                            </>
                                        )}
                                    </button>
                                    <p className="text-xs text-navy-800/50 mt-4">
                                        Catatan: Form ini adalah simulasi. Pesan tidak benar-benar dikirimkan pada versi saat ini.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder Area */}
            <section className="bg-white pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up w-full h-[400px] bg-ocean-50 border border-ocean-100 rounded-card flex flex-col items-center justify-center text-center p-6 mt-16">
                        <Icons.mapPin className="w-12 h-12 text-ocean-300 mb-4" />
                        <h3 className="text-lg font-bold text-navy-900 mb-2">Lokasi Koperasi (Peta Google Maps)</h3>
                        <p className="text-sm text-navy-800/60 max-w-md mx-auto">
                            [Area ini disediakan untuk embed Google Maps menuju lokasi Koperasi Nelayan SERSAN. Saat ini menggunakan placeholder.]
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
