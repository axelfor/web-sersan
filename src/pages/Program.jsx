import { useScrollAnimation, useDocumentTitle, useMetaDescription } from '../hooks/useScrollAnimation';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Icons from '../components/Icons';
import programs from '../data/programs';

export default function Program() {
    const animRef = useScrollAnimation();
    useDocumentTitle('Program & Kegiatan | Koperasi Nelayan SERSAN');
    useMetaDescription('Program dan kegiatan Koperasi Nelayan SERSAN untuk pemberdayaan nelayan, pengembangan produk, edukasi, dan kegiatan sosial masyarakat pesisir.');

    return (
        <div ref={animRef}>
            <PageHero
                title="Program & Kegiatan"
                subtitle="Berbagai program untuk mendukung pemberdayaan dan kesejahteraan nelayan serta masyarakat pesisir."
                breadcrumbs={[{ label: 'Program & Kegiatan' }]}
            />

            {/* Programs list */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16 lg:space-y-20">
                        {programs.map((program, index) => {
                            const IconComponent = Icons[program.icon];
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={program.id}
                                    className="fade-up grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                                >
                                    <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                                        <div className="relative rounded-card overflow-hidden shadow-elevated aspect-[4/3]">
                                            <img
                                                src={program.image}
                                                alt={program.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                                        <div className="w-12 h-12 bg-gradient-to-br from-ocean-100 to-teal-50 rounded-xl flex items-center justify-center mb-4">
                                            <IconComponent className="w-6 h-6 text-ocean-700" />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                                            {program.title}
                                        </h2>
                                        <p className="text-navy-800/70 leading-relaxed">
                                            {program.longDescription}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
