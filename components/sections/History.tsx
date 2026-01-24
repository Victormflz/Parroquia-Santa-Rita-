import { memo } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export const History = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    const historyCards = [
        {
            title: t.history.origins.title,
            description: t.history.origins.description,
            delay: 100
        },
        {
            title: t.history.present.title,
            description: t.history.present.description,
            delay: 200
        },
        {
            title: t.history.future.title,
            description: t.history.future.description,
            delay: 300
        }
    ];

    return (
        <section id="historia" className="py-24 bg-parish-beige relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">

                        <h2 className="font-serif text-4xl md:text-5xl text-parish-blue font-bold mb-6">{t.history.title}</h2>
                        <div className="w-24 h-1.5 bg-parish-gold mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            {t.history.subtitle}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {historyCards.map((card) => (
                        <FadeIn key={card.title} delay={card.delay}>
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <h3 className="font-serif text-2xl font-bold text-parish-blue mb-4">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{card.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
});

History.displayName = 'History';
