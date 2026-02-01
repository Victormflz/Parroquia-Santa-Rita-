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
        <section id="servicios" className="section-padding bg-gradient-to-b from-parish-arena via-parish-beige to-parish-arena-light relative overflow-hidden">
            {/* Patrón decorativo moderno */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" 
                    style={{
                        backgroundImage: 'linear-gradient(30deg, #1e3a8a 12%, transparent 12.5%, transparent 87%, #1e3a8a 87.5%, #1e3a8a), linear-gradient(150deg, #1e3a8a 12%, transparent 12.5%, transparent 87%, #1e3a8a 87.5%, #1e3a8a)',
                        backgroundSize: '80px 140px'
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Header moderno */}
                <FadeIn direction="down" duration={1}>
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block px-4 py-1.5 bg-parish-gold/10 text-parish-gold font-bold text-xs uppercase tracking-widest rounded-full mb-4 border border-parish-gold/20">
                            Comunidad
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-parish-blue font-bold mb-6 text-balance">
                            {t.services.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="h-1 w-16 bg-parish-gold rounded-full"></div>
                            <div className="h-1.5 w-1.5 bg-parish-gold rounded-full"></div>
                            <div className="h-1 w-16 bg-parish-gold rounded-full"></div>
                        </div>
                        <p className="text-parish-text-light text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Descubre las diferentes formas de participar en nuestra comunidad
                        </p>
                    </div>
                </FadeIn>

                {/* Grid moderno con diseño escalonado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => {
                        const IconComponent = service.Icon;
                        const isEven = idx % 2 === 0;
                        
                        return (
                            <FadeIn 
                                key={service.title} 
                                delay={idx * 80}
                                direction="up"
                                distance={60}
                                duration={0.7}
                            >
                                <div className={`relative group ${isEven ? 'lg:mt-0' : 'lg:mt-8'}`}>
                                    {/* Tarjeta principal */}
                                    <div className="relative bg-parish-arena rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden h-full">
                                        {/* Efecto de fondo animado */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-parish-blue/5 via-transparent to-parish-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Barra lateral decorativa */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-parish-gold via-parish-gold-light to-parish-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                        
                                        {/* Contenido */}
                                        <div className="relative z-10">
                                            {/* Icono con círculo de fondo */}
                                            <div className="mb-6 relative inline-flex">
                                                <div className="absolute inset-0 bg-parish-blue/10 rounded-2xl blur-xl group-hover:bg-parish-gold/20 transition-colors duration-500"></div>
                                                <div className="relative bg-gradient-to-br from-parish-blue to-parish-blue-light p-4 rounded-2xl text-white group-hover:from-parish-gold group-hover:to-parish-gold-light transition-all duration-500 transform group-hover:rotate-6">
                                                    <IconComponent size={32} strokeWidth={2} />
                                                </div>
                                            </div>

                                            {/* Título */}
                                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parish-blue mb-3 group-hover:text-parish-gold transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Descripción */}
                                            <p className="text-parish-text-light text-base leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
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
