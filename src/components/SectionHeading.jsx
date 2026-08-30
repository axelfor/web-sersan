export default function SectionHeading({ subtitle, title, description, center = true, light = false }) {
    return (
        <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
            {subtitle && (
                <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-2 ${light ? 'text-ocean-300' : 'text-ocean-600'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-base lg:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-ocean-200' : 'text-navy-800/70'}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
