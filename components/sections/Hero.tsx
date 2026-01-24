import { memo } from 'react';
import { ChevronUp } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const Hero = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    return (
        <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/iglesia-hero.jpg"
                    alt="Interior de la Parroquia Santa Rita con vitrales dorados"
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: '53% 50%',
                        objectFit: 'cover'
                    }}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)';
                        }
                    }}
                />
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-parish-blue/80 mix-blend-multiply" />
                {/* Viñeta (oscurece los bordes) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)'
                    }}
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
                <FadeIn>

                    <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                        Parroquia <br className="md:hidden" /> <span className="text-parish-gold">{t.hero.parishName}</span>
                    </h1>
                    <p className="font-sans text-xl md:text-3xl font-light opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#horarios"
                            className="px-6 py-3 bg-white text-parish-blue rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center text-sm"
                        >
                            {t.hero.scheduleButton}
                        </a>
                        <a
                            href="#donar"
                            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center text-sm"
                        >
                            {t.hero.donateButton}
                        </a>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce text-white/50" aria-hidden="true">
                <ChevronUp className="mx-auto rotate-180" size={32} />
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';
