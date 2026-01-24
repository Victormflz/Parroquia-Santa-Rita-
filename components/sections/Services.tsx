import { memo } from 'react';
import { Baby, Users, HeartHandshake, Heart, Music, LucideIcon } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../i18n/translations';

export interface Service {
    Icon: LucideIcon;
    title: string;
    desc: string;
}

export const Services = memo(() => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    const services: Service[] = [
        { Icon: Baby, title: t.services.baptisms.title, desc: t.services.baptisms.description },
        { Icon: Users, title: t.services.catechesis.title, desc: t.services.catechesis.description },
        { Icon: HeartHandshake, title: t.services.marriages.title, desc: t.services.marriages.description },
        { Icon: Music, title: t.services.choir.title, desc: t.services.choir.description },
        { Icon: Heart, title: t.services.caritas.title, desc: t.services.caritas.description },
        { Icon: Users, title: t.services.youthGroup.title, desc: t.services.youthGroup.description },
    ];

    return (
        <section id="servicios" className="py-20 bg-parish-beige">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-parish-blue font-bold mb-4">{t.services.title}</h2>
                        <div className="w-24 h-1 bg-parish-gold mx-auto rounded-full"></div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const IconComponent = service.Icon;
                        return (
                            <FadeIn key={service.title} delay={idx * 100}>
                                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                                    <div className="text-parish-blue mb-4 group-hover:text-parish-gold transition-colors">
                                        <IconComponent size={32} />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Services.displayName = 'Services';
