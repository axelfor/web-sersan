import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = ref.current?.querySelectorAll('.fade-up');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return ref;
}

export function useDocumentTitle(title) {
    useEffect(() => {
        const prev = document.title;
        document.title = title;
        return () => { document.title = prev; };
    }, [title]);
}

export function useMetaDescription(description) {
    useEffect(() => {
        let meta = document.querySelector('meta[name="description"]');
        const prev = meta?.getAttribute('content');
        if (meta) {
            meta.setAttribute('content', description);
        }
        return () => {
            if (meta && prev) meta.setAttribute('content', prev);
        };
    }, [description]);
}
