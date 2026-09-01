import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Icons from '../components/Icons';

const misi = [
    'Memberdayakan nelayan untuk mencapai kemandirian ekonomi.',
    'Mengembangkan potensi hasil laut menjadi produk bernilai tambah.',
    'Meningkatkan keterampilan dan pengetahuan anggota koperasi.',
    'Membangun jaringan kerja sama yang saling menguntungkan bersama Kampung Nelayan Merah Putih dan ekosistem koperasi.',
    'Mendukung kelestarian sumber daya laut dan lingkungan pesisir.',
];

const nilaiKoperasi = [
    { icon: 'handshake', title: 'Kebersamaan', description: 'Bekerja bersama dalam semangat gotong royong untuk mencapai tujuan bersama.' },
    { icon: 'shield', title: 'Integritas', description: 'Menjalankan kegiatan koperasi dengan kejujuran, transparansi, dan tanggung jawab.' },
    { icon: 'trending', title: 'Kemandirian', description: 'Mendorong setiap anggota untuk berkembang secara mandiri dan berdaya saing.' },
    { icon: 'heart', title: 'Kepedulian', description: 'Memberikan perhatian dan dukungan terhadap kesejahteraan anggota dan masyarakat.' },
    { icon: 'target', title: 'Keberlanjutan', description: 'Mengelola sumber daya secara bertanggung jawab untuk generasi mendatang.' },
    { icon: 'users', title: 'Partisipasi', description: 'Melibatkan seluruh anggota dalam pengambilan keputusan dan kegiatan koperasi.' },
];

export default function Tentang() {
    const animRef = useScrollAnimation();
    useDocumentTitle('Tentang Kami | Koperasi Nelayan SERSAN');
    useMetaDescription('Mengenal Koperasi Nelayan SERSAN — sejarah, visi, misi, dan nilai-nilai yang menjadi landasan dalam mendukung pemberdayaan nelayan Indonesia.');

    return (
        <div ref={animRef}>
            <PageHero
                title="Tentang Kami"
                subtitle="Mengenal lebih dekat Koperasi Nelayan SERSAN dan perannya bagi masyarakat nelayan."
                breadcrumbs={[{ label: 'Tentang Kami' }]}
            />

            {/* Intro */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="fade-up">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                Perkenalan
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
                                Koperasi Nelayan SERSAN
                            </h2>
                            <p className="mt-5 text-navy-800/70 leading-relaxed">
                                Koperasi Nelayan SERSAN (Sejahtera Mandiri Bersama Nelayan) adalah organisasi koperasi yang dibentuk sebagai wadah bersama bagi nelayan untuk saling mendukung dan mengembangkan usaha berbasis hasil laut.
                            </p>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Dengan semangat kebersamaan dan kemandirian, Koperasi SERSAN berkomitmen untuk meningkatkan kesejahteraan nelayan dan masyarakat pesisir melalui program pemberdayaan, pengembangan produk, dan kerja sama yang berkelanjutan.
                            </p>
                        </div>
                        <div className="fade-up">
                            <img
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop"
                                alt="Nelayan dan laut Indonesia"
                                className="w-full rounded-card shadow-elevated object-cover aspect-[4/3]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sejarah */}
            <section className="py-16 lg:py-24 bg-ocean-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up text-center">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                            Sejarah
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
                            Sejarah Koperasi
                        </h2>
                        <div className="mt-8 bg-white rounded-card p-8 border border-ocean-100 shadow-card text-left">
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Koperasi Nelayan SERSAN (Sejahtera Mandiri Bersama Nelayan) lahir dari perjalanan panjang kesadaran para nelayan di Tidore Kepulauan bahwa persoalan mereka—akses BBM bersubsidi, pembuatan rumpon, pemasaran hasil tangkapan, hingga permodalan—tidak dapat diselesaikan sendiri-sendiri. Koperasi ini adalah buah dari kegigihan, gotong royong, dan keyakinan bahwa nelayan harus terorganisir.<br /><br />Awal 2024, sekelompok nelayan di Kelurahan Rum, Kecamatan Tidore Utara, Kota Tidore Kepulauan, Provinsi Maluku Utara, membentuk GAPOKAN (Gabungan Kelompok Nelayan). Tujuan mereka sederhana namun mendesak: menjawab kebutuhan minyak bersubsidi bagi nelayan, merencanakan pembuatan rumpon, dan membenahi proses pemasaran hasil tangkapan agar lebih menguntungkan.<br /><br />Tahun 2025, kelompok kecil itu mengundang seorang tokoh masyarakat yang akrab disapa Ko AL—sosok yang hobi memancing dan memahami dunia nelayan—untuk berdiskusi tentang berbagai persoalan yang belum terpecahkan. Dari pertemuan tersebut muncul keputusan penting: GAPOKAN tidak boleh berhenti sebagai kelompok informal. Mereka harus menguatkan organisasi, mengurus aspek legal, dan meresmikan wadah nelayan agar lebih dipercaya dan berkelanjutan. Langkah itu melibatkan penyuluh perikanan, pemerintah Kelurahan Rum, dan pemerintah Kecamatan Tidore Utara.<br /><br />Pada saat yang sama, muncul kesadaran bahwa para nelayan yang tergabung dalam GAPOKAN sebagian besar adalah komunitas nelayan tuna yang biasa melaut hingga ke perairan Kabupaten Halmahera Utara, Kabupaten Pulau Morotai, Kabupaten Halmahera Selatan, dan wilayah lainnya. Mobilitas dan wilayah tangkap yang luas ini membuat para nelayan sadar bahwa keanggotaan wadah mereka tidak bisa dibatasi hanya pada satu kelurahan atau kecamatan. Oleh karena itu, disepakati keanggotaan diperluas, tidak hanya melibatkan nelayan dari Kecamatan Tidore Selatan dan Kecamatan Tidore Timur, tetapi juga terbuka bagi nelayan dari kabupaten/kota lain di Provinsi Maluku Utara, seperti Kabupaten Halmahera Utara, Kabupaten Pulau Morotai, dan Kabupaten Halmahera Barat.<br /><br />Awal 2026 menjadi titik balik penting. GAPOKAN mendapat informasi tentang program KUR (Kredit Usaha Rakyat) Nelayan dari Pemerintah Provinsi Maluku Utara di bawah kepemimpinan Gubernur Ibu Serly Tjoanda dan Wakil Gubernur KH. Sarbin Sehe. Alhamdulillah, sebagian besar anggota GAPOKAN mendapat kemudahan mengakses program tersebut. Kemudahan permodalan ini membawa energi baru dan memperkuat dinamika kelompok. Para nelayan semakin yakin bahwa dengan wadah yang lebih formal dan berbadan hukum, mereka dapat memanfaatkan peluang lebih besar lagi.<br /><br />Puncak dari rangkaian proses tersebut terjadi pada 16 Agustus 2026, ketika digelar rapat resmi pertama pembentukan Koperasi Nelayan SERSAN. Rapat itu menandai langkah besar dari sebuah kelompok informal menuju koperasi yang sesungguhnya. Dalam rapat tersebut, para nelayan dari berbagai wilayah—Tidore, Halmahera Utara, Morotai, Halmahera Barat, dan lainnya—bersepakat melembagakan diri dalam satu wadah bernama Koperasi Nelayan SERSAN (Sejahtera Mandiri Bersama Nelayan). Nama SERSAN dipilih sebagai cerminan cita-cita bersama: sejahtera, mandiri, dan bersama dalam wadah nelayan yang kuat.<br /><br />Dengan demikian, Koperasi Nelayan SERSAN bukan sekadar perubahan nama dari GAPOKAN. Ia adalah kelanjutan dari perjuangan nelayan Tidore untuk memiliki organisasi yang legal, terbuka, dan mampu menjawab kebutuhan anggotanya secara nyata—dari pesisir Kelurahan Rum, Kecamatan Tidore Utara, hingga meluas ke berbagai kabupaten/kota di Maluku Utara. Kini SERSAN menjadi rumah bersama bagi nelayan tuna dan nelayan lainnya untuk bergerak lebih terorganisir, bermartabat, dan sejahtera.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Visi */}
                        <div className="fade-up">
                            <div className="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-card p-8 lg:p-10 text-white h-full">
                                <div className="w-12 h-12 bg-ocean-500/30 rounded-xl flex items-center justify-center mb-5">
                                    <Icons.target className="w-6 h-6 text-ocean-200" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Visi</h3>
                                <p className="text-ocean-100 leading-relaxed text-lg">
                                    "Menjadi koperasi nelayan yang mandiri, berdaya saing, dan berperan aktif dalam meningkatkan kesejahteraan serta kemandirian ekonomi masyarakat nelayan."
                                </p>
                            </div>
                        </div>

                        {/* Misi */}
                        <div className="fade-up">
                            <div className="bg-ocean-50 rounded-card p-8 lg:p-10 border border-ocean-100 h-full">
                                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center mb-5">
                                    <Icons.check className="w-6 h-6 text-ocean-700" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-4">Misi</h3>
                                <ul className="space-y-3">
                                    {misi.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-teal-700">{i + 1}</span>
                                            </div>
                                            <span className="text-navy-800/80 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nilai-nilai */}
            <section className="py-16 lg:py-24 bg-ocean-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="fade-up text-center mb-12">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                            Prinsip Kami
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Nilai-Nilai Koperasi</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nilaiKoperasi.map((item, index) => {
                            const IconComponent = Icons[item.icon];
                            return (
                                <div key={index} className="fade-up bg-white p-6 rounded-card border border-ocean-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-ocean-100 to-teal-50 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="w-5 h-5 text-ocean-700" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-navy-800/60 leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Peran Koperasi */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="fade-up">
                            <img
                                src="https://images.unsplash.com/photo-1559827291-bae7eb3e4060?w=600&h=400&fit=crop"
                                alt="Masyarakat pesisir"
                                className="w-full rounded-card shadow-elevated object-cover aspect-[4/3]"
                                loading="lazy"
                            />
                        </div>
                        <div className="fade-up">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ocean-600 mb-2">
                                Peran Kami
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
                                Peran Koperasi bagi Nelayan
                            </h2>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Koperasi Nelayan SERSAN berperan sebagai wadah yang mempertemukan, memberdayakan, dan mendukung nelayan dalam berbagai aspek kehidupan dan usaha mereka. Melalui koperasi, nelayan memiliki akses terhadap peluang pengembangan usaha, peningkatan keterampilan, dan jaringan kerja sama yang lebih luas.
                            </p>
                            <p className="mt-4 text-navy-800/70 leading-relaxed">
                                Koperasi juga berperan dalam mendorong praktik penangkapan ikan yang berkelanjutan dan bertanggung jawab, sehingga sumber daya laut tetap terjaga untuk generasi mendatang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
