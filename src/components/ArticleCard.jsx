import { Link } from 'react-router-dom';
import { formatDate } from '../data/articles';
import Icons from './Icons';

export default function ArticleCard({ article }) {
    return (
        <Link
            to={`/berita/${article.slug}`}
            className="group bg-white rounded-card border border-ocean-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
            <div className="relative overflow-hidden aspect-[16/10]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-3 left-3">
                    <span className="inline-block bg-ocean-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                    </span>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-navy-800/50 mb-2">
                    <Icons.calendar className="w-3.5 h-3.5" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>
                <h3 className="text-base font-semibold text-navy-900 group-hover:text-ocean-700 transition-colors leading-snug">
                    {article.title}
                </h3>
                <p className="mt-2 text-sm text-navy-800/60 leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                </p>
                <div className="mt-4 flex items-center text-ocean-600 text-sm font-semibold group-hover:text-ocean-700">
                    Baca Selengkapnya
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
